<template>
  <div class="kong-ui-entities-gateway-services-list">
    <EntityBaseTable
      :cache-identifier="cacheIdentifier"
      disable-pagination-page-jump
      :disable-sorting="disableSorting"
      :empty-state-options="emptyStateOptions"
      enable-entity-actions
      :error-message="errorMessage"
      :fetcher="fetcher"
      :fetcher-cache-key="fetchCacheKey"
      pagination-type="offset"
      preferences-storage-key="kong-ui-entities-gateway-services-list"
      :query="filterQuery"
      :table-headers="tableHeaders"
      :use-action-outside="useActionOutside"
      @clear-search-input="clearFilter"
      @click:row="(row: any) => rowClick(row as EntityRow)"
      @sort="resetPagination"
    >
      <!-- Filter -->
      <template #toolbar-filter>
        <EntityFilter
          v-model="filterQuery"
          :config="filterConfig"
        />
      </template>
      <!-- Create action -->
      <template #toolbar-button>
        <component
          :is="useActionOutside ? 'Teleport' : 'div'"
          :to="useActionOutside ? '#kong-ui-app-page-header-action-button' : undefined"
        >
          <PermissionsWrapper :auth-function="() => canCreate()">
            <!-- Hide Create button if table is empty -->
            <KButton
              v-show="hasData"
              appearance="primary"
              data-testid="toolbar-add-gateway-service"
              icon="plus"
              size="large"
              :to="config.createRoute"
            >
              {{ t('gateway_services.list.toolbar_actions.new_gateway_service') }}
            </KButton>
          </PermissionsWrapper>
        </component>
      </template>

      <!-- Column Formatting -->
      <template #name="{ rowValue }">
        <b>{{ rowValue ?? '-' }}</b>
      </template>
      <template #control_plane="{ row }">
        <KBadge
          v-if="row.x_meta?.cluster_id"
          :tooltip="row.x_meta.cluster_id"
          truncation-tooltip
          @click.stop="handleControlPlaneClick(row.x_meta.cluster_id)"
        >
          {{ row.x_meta.cluster_id }}
        </KBadge>
        <b v-else>-</b>
      </template>
      <template #enabled="{ row }">
        <PermissionsWrapper
          :auth-function="() => canEdit(row)"
          force-show
        >
          <template #default="{ isAllowed }">
            <div @click.stop>
              <KInputSwitch
                v-model="row.enabled"
                :data-testid="`row-${row.id}-toggle-input`"
                :disabled="!isAllowed"
                @click.prevent="toggleEnableStatus(row)"
              />
            </div>
          </template>
        </PermissionsWrapper>
      </template>
      <template #tags="{ rowValue }">
        <KTruncate v-if="rowValue?.length > 0">
          <KBadge
            v-for="tag in rowValue"
            :key="tag"
            @click.stop
          >
            {{ tag }}
          </KBadge>
        </KTruncate>
        <span v-else>-</span>
      </template>

      <!-- Row actions -->
      <template #actions="{ row }">
        <KClipboardProvider v-slot="{ copyToClipboard }">
          <KDropdownItem
            data-testid="action-entity-copy-id"
            @click="copyId(row, copyToClipboard)"
          >
            {{ t('actions.copy_id') }}
          </KDropdownItem>
        </KClipboardProvider>
        <KClipboardProvider v-slot="{ copyToClipboard }">
          <KDropdownItem
            data-testid="action-entity-copy-json"
            @click="copyJson(row, copyToClipboard)"
          >
            {{ t('actions.copy_json') }}
          </KDropdownItem>
        </KClipboardProvider>
        <PermissionsWrapper :auth-function="() => canRetrieve(row)">
          <KDropdownItem
            data-testid="action-entity-view"
            has-divider
            :item="getViewDropdownItem(row.id)"
          />
        </PermissionsWrapper>
        <PermissionsWrapper :auth-function="() => canEdit(row)">
          <KDropdownItem
            data-testid="action-entity-edit"
            :item="getEditDropdownItem(row.id)"
          />
        </PermissionsWrapper>
        <PermissionsWrapper :auth-function="() => canDelete(row)">
          <KDropdownItem
            danger
            data-testid="action-entity-delete"
            has-divider
            @click="confirmDelete(row)"
          >
            {{ t('actions.delete.menu_label') }}
          </KDropdownItem>
        </PermissionsWrapper>
      </template>
    </EntityBaseTable>

    <EntityToggleModal
      :action="modalContent.action"
      :entity-id="modalContent.id"
      :entity-name="modalContent.name"
      :entity-type="t('glossary.gateway_services')"
      :on-confirm="confirmSwitchEnablement"
      :visible="enablementModalVisible"
      @cancel="closeEnablementModal"
      @proceed="closeEnablementModal"
    />

    <EntityDeleteModal
      :action-pending="isDeletePending"
      :description="t('actions.delete.description')"
      :entity-name="gatewayServiceToBeDeleted && (gatewayServiceToBeDeleted.name || gatewayServiceToBeDeleted.id)"
      :entity-type="EntityTypes.GatewayService"
      :error="deleteModalError"
      :title="t('actions.delete.title')"
      :visible="isDeleteModalVisible"
      @cancel="hideDeleteModal"
      @proceed="deleteRow"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, ref, watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import composables from '../composables'
import endpoints from '../gateway-services-endpoints'
import type { AxiosError } from 'axios'
import type {
  BaseTableHeaders,
  EmptyStateOptions,
  ExactMatchFilterConfig,
  FilterFields,
  FuzzyMatchFilterConfig,
  TableErrorMessage,
} from '@kong-ui-public/entities-shared'
import type {
  KongManagerGatewayServiceListConfig,
  KonnectGatewayServiceListConfig,
  EntityRow,
  CopyEventPayload,
} from '../types'
import {
  EntityBaseTable,
  EntityDeleteModal,
  EntityFilter,
  EntityToggleModal,
  EntityTypes,
  FetcherStatus,
  PermissionsWrapper,
  useAxios,
  useFetcher,
  useDeleteUrlBuilder,
} from '@kong-ui-public/entities-shared'
import '@kong-ui-public/entities-shared/dist/style.css'

const emit = defineEmits<{
  (e: 'error', error: AxiosError): void,
  (e: 'copy:success', payload: CopyEventPayload): void,
  (e: 'copy:error', payload: CopyEventPayload): void,
  (e: 'delete:success', gatewayService: EntityRow): void,
  (e: 'toggle:success', gatewayService: EntityRow): void,
}>()

// Component props - This structure must exist in ALL entity components, with the exclusion of unneeded action props (e.g. if you don't need `canDelete`, just exclude it)
const props = defineProps({
  /** The base konnect or kongManger config. Pass additional config props in the shared entity component as needed. */
  config: {
    type: Object as PropType<KonnectGatewayServiceListConfig | KongManagerGatewayServiceListConfig>,
    required: true,
    validator: (config: KonnectGatewayServiceListConfig | KongManagerGatewayServiceListConfig): boolean => {
      if (!config || !['konnect', 'kongManager'].includes(config?.app)) return false
      if (!config.createRoute || !config.getViewRoute || !config.getEditRoute) return false
      if (config.app === 'kongManager' && !config.isExactMatch && !config.filterSchema) return false
      return true
    },
  },
  // used to override the default identifier for the cache entry
  cacheIdentifier: {
    type: String,
    default: '',
  },
  /** A synchronous or asynchronous function, that returns a boolean, that evaluates if the user can create a new entity */
  canCreate: {
    type: Function as PropType<() => boolean | Promise<boolean>>,
    required: false,
    default: async () => true,
  },
  /** A synchronous or asynchronous function, that returns a boolean, that evaluates if the user can delete a given entity */
  canDelete: {
    type: Function as PropType<(row: EntityRow) => boolean | Promise<boolean>>,
    required: false,
    default: async () => true,
  },
  /** A synchronous or asynchronous function, that returns a boolean, that evaluates if the user can edit a given entity */
  canEdit: {
    type: Function as PropType<(row: EntityRow) => boolean | Promise<boolean>>,
    required: false,
    default: async () => true,
  },
  /** A synchronous or asynchronous function, that returns a boolean, that evaluates if the user can retrieve (view details) a given entity */
  canRetrieve: {
    type: Function as PropType<(row: EntityRow) => boolean | Promise<boolean>>,
    required: false,
    default: async () => true,
  },
  /** default to false, setting to true will teleport the toolbar button to the destination in the consuming app */
  useActionOutside: {
    type: Boolean,
    default: false,
  },
})

const { i18n: { t } } = composables.useI18n()
const router = useRouter()

const { axiosInstance } = useAxios(props.config?.axiosRequestConfig)
const fetchCacheKey = ref<number>(1)

/**
 * Table Headers
 */
const disableSorting = computed((): boolean => props.config.app !== 'kongManager' || !!props.config.disableSorting)
const fields: BaseTableHeaders = {
  name: { label: t('gateway_services.list.table_headers.name'), searchable: true, sortable: true },
  ...(props.config.showControlPlaneColumn ? { control_plane: { label: t('gateway_services.list.table_headers.control_plane') } } : {}),
  protocol: { label: t('gateway_services.list.table_headers.protocol'), searchable: true, sortable: true },
  host: { label: t('gateway_services.list.table_headers.host'), searchable: true, sortable: true },
  port: { label: t('gateway_services.list.table_headers.port'), searchable: true, sortable: true },
  path: { label: t('gateway_services.list.table_headers.path'), searchable: true, sortable: true },
  enabled: { label: t('gateway_services.list.table_headers.enabled'), searchable: true, sortable: true },
  tags: { label: t('gateway_services.list.table_headers.tags'), sortable: false },
}
const tableHeaders: BaseTableHeaders = fields

/**
 * Fetcher & Filtering
 */
const fetcherBaseUrl = computed<string>(() => {
  let url = `${props.config.apiBaseUrl}${endpoints.list[props.config.app].all}`

  if (props.config.app === 'konnect') {
    url = url
      .replace(/{controlPlaneId}/gi, props.config?.controlPlaneId || '')
  } else if (props.config.app === 'kongManager') {
    url = url
      .replace(/\/{workspace}/gi, props.config?.workspace ? `/${props.config.workspace}` : '')
  }

  return url
})
const baseRequestUrl = computed((): URL => {
  return props.config.apiBaseUrl.startsWith('/')
    ? new URL(`${window.location.origin}${fetcherBaseUrl.value}`)
    : new URL(fetcherBaseUrl.value)
})

const filterQuery = ref<string>('')
const filterConfig = computed<InstanceType<typeof EntityFilter>['$props']['config']>(() => {
  const isExactMatch = (props.config.app === 'konnect' || props.config.isExactMatch)

  if (isExactMatch) {
    return {
      isExactMatch,
      placeholder: t(`search.placeholder.${props.config.app}`),
    } as ExactMatchFilterConfig
  }

  const { name, enabled, protocol, host, port, path } = fields
  const filterFields: FilterFields = { name, enabled, protocol, host, port, path }

  return {
    isExactMatch,
    fields: filterFields,
    schema: props.config.filterSchema,
  } as FuzzyMatchFilterConfig
})

const { fetcher, fetcherState } = useFetcher(props.config, fetcherBaseUrl.value)

const clearFilter = (): void => {
  filterQuery.value = ''
}

const resetPagination = (): void => {
  // Increment the cache key on sort
  fetchCacheKey.value++
}

/**
 * loading, Error, Empty state
 */
const errorMessage = ref<TableErrorMessage>(null)

const emptyStateOptions = computed((): EmptyStateOptions => {
  return {
    ctaPath: props.config.createRoute,
    ctaText: userCanCreate.value ? t('actions.create') : undefined,
    message: `${t('gateway_services.list.empty_state.description')}${props.config.additionMessageForEmptyState ? ` ${props.config.additionMessageForEmptyState}` : ''}`,
    title: userCanCreate.value ? t('gateway_services.list.empty_state.title') : t('gateway_services.title'),
  }
})

/**
 * Enable / Disable action
 */
const enablementModalVisible = ref(false)
const switchEnablementTarget = ref<EntityRow | null>(null)

const modalContent = computed(() => {
  const props = {
    action: 'disable',
    id: '',
    name: '',
  }

  if (switchEnablementTarget.value) {
    const { enabled, id, name } = switchEnablementTarget.value
    props.action = enabled ? 'disable' : 'enable'
    props.id = id
    props.name = name || id
  }

  return props
})

const toggleEnableStatus = (row: EntityRow) => {
  enablementModalVisible.value = true
  switchEnablementTarget.value = row
}

const closeEnablementModal = () => {
  enablementModalVisible.value = false
  switchEnablementTarget.value = null
}

const confirmSwitchEnablement = async () => {
  const isAllowed = await props.canEdit?.(switchEnablementTarget.value!)

  if (!isAllowed || !switchEnablementTarget.value) {
    return
  }

  const url = `${baseRequestUrl.value.href}/${switchEnablementTarget.value.id}`

  const enabled = !switchEnablementTarget.value.enabled

  try {
    const { data } = props.config?.app === 'konnect'
      ? await axiosInstance.put(url, { ...switchEnablementTarget.value, enabled })
      : await axiosInstance.patch(url, { ...switchEnablementTarget.value, enabled })
    // Emit the success event for the host app
    emit('toggle:success', data)
  } catch (e: any) {
    emit('error', e)
  }

  // Update switchEnablementTarget
  switchEnablementTarget.value.enabled = enabled
}

/**
 * Redirect to control plane
 */
const handleControlPlaneClick = (id: string) => {
  if (!props.config.getControlPlaneRoute) {
    return
  }
  router.push(props.config.getControlPlaneRoute(id))
}

/**
 * Copy ID action
 */
const copyId = (row: EntityRow, copyToClipboard: (val: string) => boolean): void => {
  const id = row.id as string

  if (!copyToClipboard(id)) {
    // Emit the error event for the host app
    emit('copy:error', {
      entity: row,
      field: 'id',
      message: t('errors.copy'),
    })

    return
  }

  // Emit the success event for the host app
  emit('copy:success', {
    entity: row,
    field: 'id',
    message: t('copy.success', { val: id }),
  })
}

/**
 * Copy JSON action
 */
const copyJson = (row: EntityRow, copyToClipboard: (val: string) => boolean): void => {
  const val = JSON.stringify(row)

  if (!copyToClipboard(val)) {
    // Emit the error event for the host app
    emit('copy:error', {
      entity: row,
      message: t('errors.copy'),
    })

    return
  }

  // Emit the success event for the host app
  emit('copy:success', {
    entity: row,
    message: t('copy.success_brief'),
  })
}

/**
 * Row Click + View Details action
 */
const rowClick = async (row: EntityRow): Promise<void> => {
  const isAllowed = await props.canRetrieve?.(row)

  if (!isAllowed) {
    return
  }

  router.push(props.config.getViewRoute(row.id as string))
}

// Render the view dropdown item as a router-link
const getViewDropdownItem = (id: string) => {
  return {
    label: t('actions.view'),
    to: props.config.getViewRoute(id),
  }
}

/**
 * Edit action
 */
// Render the edit dropdown item as a router-link
const getEditDropdownItem = (id: string) => {
  return {
    label: t('actions.edit'),
    to: props.config.getEditRoute(id),
  }
}

/**
 * Delete action
 */
const gatewayServiceToBeDeleted = ref<EntityRow | undefined>(undefined)
const isDeleteModalVisible = ref<boolean>(false)
const isDeletePending = ref<boolean>(false)
const deleteModalError = ref<string>('')

const buildDeleteUrl = useDeleteUrlBuilder(props.config, fetcherBaseUrl.value)

const confirmDelete = (row: EntityRow): void => {
  gatewayServiceToBeDeleted.value = row
  isDeleteModalVisible.value = true
}

const hideDeleteModal = (): void => {
  isDeleteModalVisible.value = false
  gatewayServiceToBeDeleted.value = undefined
}

const deleteRow = async (): Promise<void> => {
  if (!gatewayServiceToBeDeleted.value?.id) {
    return
  }

  isDeletePending.value = true

  try {
    await axiosInstance.delete(buildDeleteUrl(gatewayServiceToBeDeleted.value.id))

    // Emit the success event for the host app
    emit('delete:success', gatewayServiceToBeDeleted.value)

    hideDeleteModal()
    fetchCacheKey.value++
  } catch (error: any) {
    deleteModalError.value = error.response?.data?.message ||
      error.message ||
      t('errors.delete')

    // Emit the error event for the host app
    emit('error', error)
  } finally {
    isDeletePending.value = false
  }
}

const hasData = ref(true)

/**
 * Watchers
 */
watch(fetcherState, (state) => {
  // reset `hasData` to show/hide the teleported Create button
  if (Array.isArray(state?.response?.data)) {
    hasData.value = state.response!.data.length > 0
  }

  if (state.status === FetcherStatus.Error) {
    errorMessage.value = {
      title: t('errors.general'),
    }
    if (state.error?.response?.data?.message) {
      errorMessage.value.message = state.error.response.data.message
    }
    // Emit the error for the host app
    emit('error', state.error)

    return
  }

  errorMessage.value = null
})

const userCanCreate = ref(false)
onBeforeMount(async () => {
  userCanCreate.value = await props.canCreate()
})
</script>

<style lang="scss" scoped>
.kong-ui-entities-gateway-services-list {
  width: 100%;

  .kong-ui-entity-filter-input {
    margin-right: $kui-space-50;
  }
}
</style>
