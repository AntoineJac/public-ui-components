import type {
  Timeframe,
  ExploreAggregations, QueryableExploreDimensions, ExploreFilter, AnalyticsBridge,
} from '@kong-ui-public/analytics-utilities'
import type { Ref } from 'vue'

export interface MetricFetcherOptions {
  metrics: Ref<ExploreAggregations[]>
  dimensions?: QueryableExploreDimensions[]
  filter: Ref<ExploreFilter[] | undefined>
  timeframe: Ref<Timeframe>
  tz: Ref<string>
  refreshInterval: number
  withTrend: Ref<boolean>
  queryReady: Ref<boolean>
  queryFn: AnalyticsBridge['queryFn']
  abortController?: AbortController
}
