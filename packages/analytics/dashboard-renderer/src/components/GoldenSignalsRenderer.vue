<template>
  <div class="metric-card-tile-wrapper">
    <MetricsProvider v-bind="options">
      <MetricsConsumer />
    </MetricsProvider>
  </div>
</template>
<script setup lang="ts">
import type { MetricCardOptions, RendererProps } from '../types'
import { MetricsProvider, MetricsConsumer } from '@kong-ui-public/analytics-metric-provider'
import { computed, type Ref } from 'vue'
import { GranularityKeys, Timeframe, TimePeriods } from '@kong-ui-public/analytics-utilities'

// Unlike AnalyticsChart, the metric card package doesn't currently expose its options
// in a convenient interface.
type ProviderProps = InstanceType<typeof MetricsProvider>['$props']

const props = defineProps<RendererProps<MetricCardOptions>>()

const overrideTimeframe: Ref<Timeframe> = computed(() => {
  // Convert the timeframe to a v4 timespec.
  // Ideally, metric cards would natively support timespecs, but for right now,
  // we're sticking with this interface.
  const timeSpec = props.context.timeSpec
  if (timeSpec.type === 'absolute') {
    return new Timeframe({
      key: 'custom',
      timeframeText: 'custom',
      display: 'custom',
      startCustom: timeSpec.start,
      endCustom: timeSpec.end,
      timeframeLength: () => 0,
      defaultResponseGranularity: GranularityKeys.DAILY,
      dataGranularity: GranularityKeys.DAILY,
      isRelative: false,
      allowedTiers: ['free', 'plus', 'enterprise'],
    })
  }

  const relativePeriod = TimePeriods.get(timeSpec.time_range)
  if (!relativePeriod) {
    // Should never happen; if it does, at least make it clear what the problem is.
    throw new Error('Unknown time range')
  }

  return relativePeriod
})

const options = computed<ProviderProps>(() => ({
  overrideTimeframe: overrideTimeframe.value,
  tz: props.context.tz,
  additionalFilter: props.context.filters,
  longCardTitles: props.chartOptions.longCardTitles,
  containerTitle: props.chartOptions.chartTitle,
  description: props.chartOptions.description,
  percentileLatency: props.chartOptions.percentileLatency,
  refreshInterval: props.context.refreshInterval,
  queryReady: props.queryReady,
}))
</script>

<style scoped lang="scss">
.metric-card-tile-wrapper {
  @media (min-width: ($kui-breakpoint-phablet - 1px)) {
    align-items: center;
    display: flex;
    height: 100%;
  }

  :deep(.kong-ui-public-metric-card-container) {
    height: 100%;

    .metricscard {
      @media (min-width: ($kui-breakpoint-phablet - 1px)) {
        &:not(:last-of-type) {
          border-right: $kui-border-width-10 solid $kui-color-border;
        }
      }
    }
  }
}
</style>
