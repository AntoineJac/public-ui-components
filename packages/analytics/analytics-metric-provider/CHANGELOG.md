# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@6.0.1...@kong-ui-public/analytics-metric-provider@6.0.2) (2024-04-18)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [6.0.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@6.0.0...@kong-ui-public/analytics-metric-provider@6.0.1) (2024-04-17)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





# [6.0.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.2.0...@kong-ui-public/analytics-metric-provider@6.0.0) (2024-04-15)


### Features

* **analytics:** improved dashboard time spec handling [MA-2759] ([#1330](https://github.com/Kong/public-ui-components/issues/1330)) ([123fbc0](https://github.com/Kong/public-ui-components/commit/123fbc077659e0f74589dfda3b3b1efcff13cdf5))


### BREAKING CHANGES

* **analytics:** refactor interface for analytics config store

- Change analytics config store to fetch config when first instantiated
  and expose refs rather than functions.
- Update dashboard renderer to fill in a default time spec based on the
  org's retention if one isn't provided.
- Don't issue queries until a time spec is determined.
- Fix missing feature flag functions in tests.
- Fix display of "description" property in metric cards: show in container
  rather than broadcasting to all cards.
- Fix title and description reactivity in metrics provider.
- Replace special timeframe token in tile descriptions.
- Fill in missing context values in the top-level renderer to save code
  in the tile renderers.





# [5.2.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.1.5...@kong-ui-public/analytics-metric-provider@5.2.0) (2024-04-10)


### Features

* **analytics:** allow checking feature flags in bridge ([#1317](https://github.com/Kong/public-ui-components/issues/1317)) ([73b27c6](https://github.com/Kong/public-ui-components/commit/73b27c624244ced7f2ba84f56b04ec965675d425))





## [5.1.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.1.4...@kong-ui-public/analytics-metric-provider@5.1.5) (2024-04-06)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [5.1.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.1.3...@kong-ui-public/analytics-metric-provider@5.1.4) (2024-04-06)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [5.1.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.1.2...@kong-ui-public/analytics-metric-provider@5.1.3) (2024-04-04)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [5.1.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.1.1...@kong-ui-public/analytics-metric-provider@5.1.2) (2024-04-04)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [5.1.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.1.0...@kong-ui-public/analytics-metric-provider@5.1.1) (2024-04-02)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





# [5.1.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.10...@kong-ui-public/analytics-metric-provider@5.1.0) (2024-03-28)


### Features

* **metric-card-container:** add optional title [MA-2726] ([#1298](https://github.com/Kong/public-ui-components/issues/1298)) ([cbee003](https://github.com/Kong/public-ui-components/commit/cbee003c22262268f69da2529829cbe2347a075f))





## [5.0.10](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.9...@kong-ui-public/analytics-metric-provider@5.0.10) (2024-03-28)


### Bug Fixes

* **entities-consumers:** group form fields [KHCP-11029] ([#1300](https://github.com/Kong/public-ui-components/issues/1300)) ([c9375c0](https://github.com/Kong/public-ui-components/commit/c9375c07c0b7a6f09fe714f64ed48eac0ea187dd))





## [5.0.9](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.8...@kong-ui-public/analytics-metric-provider@5.0.9) (2024-03-27)


### Bug Fixes

* kongponents alpha phase 10 [KHCP-11172] ([#1292](https://github.com/Kong/public-ui-components/issues/1292)) ([47f01aa](https://github.com/Kong/public-ui-components/commit/47f01aa1ec4c57a48bc046987bed9482b7c832a2))





## [5.0.8](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.7...@kong-ui-public/analytics-metric-provider@5.0.8) (2024-03-26)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [5.0.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.6...@kong-ui-public/analytics-metric-provider@5.0.7) (2024-03-25)


### Bug Fixes

* **entities-plugins, vfg:** create plugin form a11y improvements [KHCP-11026] ([#1272](https://github.com/Kong/public-ui-components/issues/1272)) ([b1ed04e](https://github.com/Kong/public-ui-components/commit/b1ed04eb56ff2869b988a217220debc78655f3f0))





## [5.0.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.5...@kong-ui-public/analytics-metric-provider@5.0.6) (2024-03-21)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [5.0.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.4...@kong-ui-public/analytics-metric-provider@5.0.5) (2024-03-21)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [5.0.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.3...@kong-ui-public/analytics-metric-provider@5.0.4) (2024-03-21)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [5.0.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.2...@kong-ui-public/analytics-metric-provider@5.0.3) (2024-03-20)


### Bug Fixes

* proper heading element in widgets [KHCP-11027] ([#1252](https://github.com/Kong/public-ui-components/issues/1252)) ([b66ce71](https://github.com/Kong/public-ui-components/commit/b66ce711fa876bb75bb880eece8514a8055034be))





## [5.0.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.1...@kong-ui-public/analytics-metric-provider@5.0.2) (2024-03-20)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [5.0.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@5.0.0...@kong-ui-public/analytics-metric-provider@5.0.1) (2024-03-19)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





# [5.0.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.1.7...@kong-ui-public/analytics-metric-provider@5.0.0) (2024-03-19)


### Features

* **analytics:** move to v2 config endpoint [MA-2730] ([#1257](https://github.com/Kong/public-ui-components/issues/1257)) ([e61e42f](https://github.com/Kong/public-ui-components/commit/e61e42fddb221a8e04f7faa18aa965bf7584d0e3))


### BREAKING CHANGES

* **analytics:** new config endpoint; types updated

The following components are updated:

- AnalyticsConfigCheck, and the associated store
- MetricsProvider
- AnalyticsBridge (updates type that implementations must adhere to)
- DashboardRenderer (sandbox and tests)





## [4.1.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.1.6...@kong-ui-public/analytics-metric-provider@4.1.7) (2024-03-14)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.1.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.1.5...@kong-ui-public/analytics-metric-provider@4.1.6) (2024-03-13)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.1.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.1.4...@kong-ui-public/analytics-metric-provider@4.1.5) (2024-03-13)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.1.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.1.3...@kong-ui-public/analytics-metric-provider@4.1.4) (2024-03-12)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.1.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.1.2...@kong-ui-public/analytics-metric-provider@4.1.3) (2024-03-12)


### Bug Fixes

* kongponents alpha phase 9 [KHCP-10951] ([#1209](https://github.com/Kong/public-ui-components/issues/1209)) ([88a2f20](https://github.com/Kong/public-ui-components/commit/88a2f20837aaaa3aef9dbe8bddd36b70f5a4558f))





## [4.1.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.1.1...@kong-ui-public/analytics-metric-provider@4.1.2) (2024-03-12)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.1.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.1.0...@kong-ui-public/analytics-metric-provider@4.1.1) (2024-03-08)


### Bug Fixes

* replace CopyUuid with KCopy [khcp-9465] ([#1210](https://github.com/Kong/public-ui-components/issues/1210)) ([e409d60](https://github.com/Kong/public-ui-components/commit/e409d60b7ab483c200ed6bb33f43ff571d6e6b88))





# [4.1.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.11...@kong-ui-public/analytics-metric-provider@4.1.0) (2024-03-07)


### Features

* **analytics:** get config from analytics endpoint [MA-2532] ([#1208](https://github.com/Kong/public-ui-components/issues/1208)) ([3a1ae09](https://github.com/Kong/public-ui-components/commit/3a1ae09827dd5797d4fd5e93fe60935758c1c6bc))





## [4.0.11](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.10...@kong-ui-public/analytics-metric-provider@4.0.11) (2024-03-07)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.0.10](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.9...@kong-ui-public/analytics-metric-provider@4.0.10) (2024-03-07)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.0.9](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.8...@kong-ui-public/analytics-metric-provider@4.0.9) (2024-03-06)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.0.8](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.7...@kong-ui-public/analytics-metric-provider@4.0.8) (2024-02-28)


### Bug Fixes

* **metric-cards:** determine trend range text from response [MA-2650] ([#1197](https://github.com/Kong/public-ui-components/issues/1197)) ([8560ed8](https://github.com/Kong/public-ui-components/commit/8560ed884d09ebebb83a3c981120a3be1e71f876))





## [4.0.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.6...@kong-ui-public/analytics-metric-provider@4.0.7) (2024-02-27)


### Bug Fixes

* kongponents alpha phase 8 [KHCP-10758] ([#1170](https://github.com/Kong/public-ui-components/issues/1170)) ([ff130c3](https://github.com/Kong/public-ui-components/commit/ff130c3c9f1af9e9fcb09fb8c23ae758cc0a5ae2))





## [4.0.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.5...@kong-ui-public/analytics-metric-provider@4.0.6) (2024-02-26)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.0.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.4...@kong-ui-public/analytics-metric-provider@4.0.5) (2024-02-24)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.0.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.3...@kong-ui-public/analytics-metric-provider@4.0.4) (2024-02-24)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.0.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.2...@kong-ui-public/analytics-metric-provider@4.0.3) (2024-02-23)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.0.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.1...@kong-ui-public/analytics-metric-provider@4.0.2) (2024-02-23)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [4.0.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@4.0.0...@kong-ui-public/analytics-metric-provider@4.0.1) (2024-02-21)


### Bug Fixes

* **metric-provider:** include timezone in v4 queries ([#1173](https://github.com/Kong/public-ui-components/issues/1173)) ([4eaad9e](https://github.com/Kong/public-ui-components/commit/4eaad9ef8ed9790add498410ef20dc8df70d8ba0))





# [4.0.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@3.0.4...@kong-ui-public/analytics-metric-provider@4.0.0) (2024-02-20)


### Features

* **metric-provider:** use explore v4 and analytics bridge [MA-2530] ([#1161](https://github.com/Kong/public-ui-components/issues/1161)) ([34c9ca0](https://github.com/Kong/public-ui-components/commit/34c9ca07c61a33d6e2f140ee4a63007b13d80230))


### BREAKING CHANGES

* **metric-provider:** new query endpoint; requires analytics bridge; old types removed

- Move to using the analytics bridge for queries
- Move to explore v4 query format and response format
- Support passing in an AbortController
- Use promise resolve / reject to determine error states, rather than Axios response objects





## [3.0.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@3.0.3...@kong-ui-public/analytics-metric-provider@3.0.4) (2024-02-19)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [3.0.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@3.0.2...@kong-ui-public/analytics-metric-provider@3.0.3) (2024-02-13)


### Bug Fixes

* kongponents alpha phase 7 [KHCP-10653] ([#1149](https://github.com/Kong/public-ui-components/issues/1149)) ([bd76d01](https://github.com/Kong/public-ui-components/commit/bd76d011107f92109022fc22877b795167798d01))





## [3.0.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@3.0.1...@kong-ui-public/analytics-metric-provider@3.0.2) (2024-02-13)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [3.0.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@3.0.0...@kong-ui-public/analytics-metric-provider@3.0.1) (2024-02-13)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





# [3.0.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.40...@kong-ui-public/analytics-metric-provider@3.0.0) (2024-02-08)


### Features

* **analytics-chart:** support explore v4 ([#1146](https://github.com/Kong/public-ui-components/issues/1146)) ([88ccb7e](https://github.com/Kong/public-ui-components/commit/88ccb7e6e3c0172755024dc2cc49f39ec62ab30a))


### BREAKING CHANGES

* **analytics-chart:** new chart data format

* fix: address comments

* fix: useExploreResultToDatasets spec

* fix: all tests pass!

* fix: better typing, address comments

* fix: fix types

* fix: fix types

* fix: remove explore v4 -> v2/v1 translation from dashboard-renderer

* fix: don't check the timestamp in the csv export test

* fix: update test address comments

* fix: address comments

* fix: update readme





## [2.0.40](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.39...@kong-ui-public/analytics-metric-provider@2.0.40) (2024-02-06)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.39](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.38...@kong-ui-public/analytics-metric-provider@2.0.39) (2024-02-05)


### Bug Fixes

* kongponents alpha phase 6 [KHCP-10444] ([#1135](https://github.com/Kong/public-ui-components/issues/1135)) ([bf6d314](https://github.com/Kong/public-ui-components/commit/bf6d314c1fe657a10f64e8db926f3f3feb36ca3f))





## [2.0.38](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.37...@kong-ui-public/analytics-metric-provider@2.0.38) (2024-02-05)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.37](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.36...@kong-ui-public/analytics-metric-provider@2.0.37) (2024-02-01)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.36](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.35...@kong-ui-public/analytics-metric-provider@2.0.36) (2024-01-31)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.35](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.34...@kong-ui-public/analytics-metric-provider@2.0.35) (2024-01-30)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.34](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.33...@kong-ui-public/analytics-metric-provider@2.0.34) (2024-01-26)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.33](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.32...@kong-ui-public/analytics-metric-provider@2.0.33) (2024-01-25)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.32](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.31...@kong-ui-public/analytics-metric-provider@2.0.32) (2024-01-24)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.31](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.30...@kong-ui-public/analytics-metric-provider@2.0.31) (2024-01-23)


### Bug Fixes

* kongponents alpha phase 5 [KHCP-10381] ([#1097](https://github.com/Kong/public-ui-components/issues/1097)) ([24e5ba6](https://github.com/Kong/public-ui-components/commit/24e5ba6d6b256b092276c70e16d2e221d5be0c17))





## [2.0.30](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.29...@kong-ui-public/analytics-metric-provider@2.0.30) (2024-01-19)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.29](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.28...@kong-ui-public/analytics-metric-provider@2.0.29) (2024-01-19)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.28](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.27...@kong-ui-public/analytics-metric-provider@2.0.28) (2024-01-19)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.27](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.26...@kong-ui-public/analytics-metric-provider@2.0.27) (2024-01-18)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.26](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.25...@kong-ui-public/analytics-metric-provider@2.0.26) (2024-01-17)


### Bug Fixes

* kongponents alpha phase 4 [KHCP-10182] ([#1069](https://github.com/Kong/public-ui-components/issues/1069)) ([8dc4cb0](https://github.com/Kong/public-ui-components/commit/8dc4cb060fc5414381824b1eb8ce7691d1346ce5))





## [2.0.25](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.24...@kong-ui-public/analytics-metric-provider@2.0.25) (2024-01-15)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.24](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.23...@kong-ui-public/analytics-metric-provider@2.0.24) (2024-01-12)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.23](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.22...@kong-ui-public/analytics-metric-provider@2.0.23) (2024-01-12)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.22](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.21...@kong-ui-public/analytics-metric-provider@2.0.22) (2024-01-11)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.21](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.20...@kong-ui-public/analytics-metric-provider@2.0.21) (2024-01-10)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.20](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.19...@kong-ui-public/analytics-metric-provider@2.0.20) (2024-01-09)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.19](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.18...@kong-ui-public/analytics-metric-provider@2.0.19) (2024-01-01)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.18](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.17...@kong-ui-public/analytics-metric-provider@2.0.18) (2023-12-27)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.17](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.16...@kong-ui-public/analytics-metric-provider@2.0.17) (2023-12-22)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.16](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.15...@kong-ui-public/analytics-metric-provider@2.0.16) (2023-12-21)


### Bug Fixes

* type exports ([efecd88](https://github.com/Kong/public-ui-components/commit/efecd8859a01aae41d9490b1758237233c925c19))





## [2.0.15](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.14...@kong-ui-public/analytics-metric-provider@2.0.15) (2023-12-20)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.14](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.13...@kong-ui-public/analytics-metric-provider@2.0.14) (2023-12-19)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.13](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.12...@kong-ui-public/analytics-metric-provider@2.0.13) (2023-12-12)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.12](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.11...@kong-ui-public/analytics-metric-provider@2.0.12) (2023-12-12)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.11](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.10...@kong-ui-public/analytics-metric-provider@2.0.11) (2023-12-08)


### Bug Fixes

* kongponents alpha phase 3 [KHCP-9942] ([#985](https://github.com/Kong/public-ui-components/issues/985)) ([dc61424](https://github.com/Kong/public-ui-components/commit/dc61424540d15386c73db9d106143dc7e50714de))





## [2.0.10](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.9...@kong-ui-public/analytics-metric-provider@2.0.10) (2023-12-07)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.9](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.8...@kong-ui-public/analytics-metric-provider@2.0.9) (2023-12-05)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.8](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.7...@kong-ui-public/analytics-metric-provider@2.0.8) (2023-12-05)


### Bug Fixes

* update kcard usage [KHCP-9887] ([#977](https://github.com/Kong/public-ui-components/issues/977)) ([3f00e69](https://github.com/Kong/public-ui-components/commit/3f00e69fd65d1eae07139cee52afb16825f34a9b))





## [2.0.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.6...@kong-ui-public/analytics-metric-provider@2.0.7) (2023-12-01)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.5...@kong-ui-public/analytics-metric-provider@2.0.6) (2023-11-30)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.4...@kong-ui-public/analytics-metric-provider@2.0.5) (2023-11-30)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.3...@kong-ui-public/analytics-metric-provider@2.0.4) (2023-11-29)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.2...@kong-ui-public/analytics-metric-provider@2.0.3) (2023-11-28)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [2.0.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.1...@kong-ui-public/analytics-metric-provider@2.0.2) (2023-11-22)


### Bug Fixes

* **entities-vaults:** fix kradio card occurrences ([#937](https://github.com/Kong/public-ui-components/issues/937)) ([21827e9](https://github.com/Kong/public-ui-components/commit/21827e9592a962ec0e7a7de1d76ebd80c36dcd2f))





## [2.0.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@2.0.0...@kong-ui-public/analytics-metric-provider@2.0.1) (2023-11-21)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





# [2.0.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.13...@kong-ui-public/analytics-metric-provider@2.0.0) (2023-11-20)


### Features

* kongponents alpha [KHCP-9494] ([#880](https://github.com/Kong/public-ui-components/issues/880)) ([f81ab17](https://github.com/Kong/public-ui-components/commit/f81ab1718a954ff6883baa9b2b47c0ccdb1e2f5e))


### BREAKING CHANGES

* Updating Kongponents to version 9 alpha. Style changes are breaking.

* fix: lockfile

* feat(ktextarea): kongponents alpha fixes

* fix(copy-uuid): alignment

* fix: lockfile

* chore(deps): update package





## [1.2.13](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.12...@kong-ui-public/analytics-metric-provider@1.2.13) (2023-11-16)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.12](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.11...@kong-ui-public/analytics-metric-provider@1.2.12) (2023-11-15)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.11](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.10...@kong-ui-public/analytics-metric-provider@1.2.11) (2023-11-14)


### Bug Fixes

* add new dimensions ([#916](https://github.com/Kong/public-ui-components/issues/916)) ([2f24454](https://github.com/Kong/public-ui-components/commit/2f2445430bd9ce8fc5e29282f0ae88d3364785b3))





## [1.2.10](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.9...@kong-ui-public/analytics-metric-provider@1.2.10) (2023-11-11)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.9](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.8...@kong-ui-public/analytics-metric-provider@1.2.9) (2023-11-07)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.8](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.7...@kong-ui-public/analytics-metric-provider@1.2.8) (2023-11-07)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.6...@kong-ui-public/analytics-metric-provider@1.2.7) (2023-11-07)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.5...@kong-ui-public/analytics-metric-provider@1.2.6) (2023-11-06)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.4...@kong-ui-public/analytics-metric-provider@1.2.5) (2023-11-03)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.3...@kong-ui-public/analytics-metric-provider@1.2.4) (2023-11-02)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.2...@kong-ui-public/analytics-metric-provider@1.2.3) (2023-11-01)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.1...@kong-ui-public/analytics-metric-provider@1.2.2) (2023-10-31)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.2.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.2.0...@kong-ui-public/analytics-metric-provider@1.2.1) (2023-10-30)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





# [1.2.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.50...@kong-ui-public/analytics-metric-provider@1.2.0) (2023-10-27)


### Features

* **metric-cards:** new v2.0 layout [MA-2139] ([#848](https://github.com/Kong/public-ui-components/issues/848)) ([654f098](https://github.com/Kong/public-ui-components/commit/654f098bb75bde4266b2423b7194875cbb2f8ee2))





## [1.1.50](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.49...@kong-ui-public/analytics-metric-provider@1.1.50) (2023-10-25)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.49](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.48...@kong-ui-public/analytics-metric-provider@1.1.49) (2023-10-24)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.48](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.47...@kong-ui-public/analytics-metric-provider@1.1.48) (2023-10-24)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.47](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.46...@kong-ui-public/analytics-metric-provider@1.1.47) (2023-10-23)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.46](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.45...@kong-ui-public/analytics-metric-provider@1.1.46) (2023-10-18)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.45](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.44...@kong-ui-public/analytics-metric-provider@1.1.45) (2023-10-07)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.44](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.43...@kong-ui-public/analytics-metric-provider@1.1.44) (2023-10-07)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.43](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.42...@kong-ui-public/analytics-metric-provider@1.1.43) (2023-10-06)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.42](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.41...@kong-ui-public/analytics-metric-provider@1.1.42) (2023-10-06)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.41](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.40...@kong-ui-public/analytics-metric-provider@1.1.41) (2023-09-28)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.40](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.39...@kong-ui-public/analytics-metric-provider@1.1.40) (2023-09-28)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.39](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.38...@kong-ui-public/analytics-metric-provider@1.1.39) (2023-09-27)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.38](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.37...@kong-ui-public/analytics-metric-provider@1.1.38) (2023-09-20)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.37](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.36...@kong-ui-public/analytics-metric-provider@1.1.37) (2023-09-18)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.36](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.35...@kong-ui-public/analytics-metric-provider@1.1.36) (2023-09-16)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.35](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.34...@kong-ui-public/analytics-metric-provider@1.1.35) (2023-09-14)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.34](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.33...@kong-ui-public/analytics-metric-provider@1.1.34) (2023-09-14)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.33](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.32...@kong-ui-public/analytics-metric-provider@1.1.33) (2023-09-13)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.32](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.31...@kong-ui-public/analytics-metric-provider@1.1.32) (2023-09-12)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.31](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.30...@kong-ui-public/analytics-metric-provider@1.1.31) (2023-09-09)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.30](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.29...@kong-ui-public/analytics-metric-provider@1.1.30) (2023-09-08)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.29](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.28...@kong-ui-public/analytics-metric-provider@1.1.29) (2023-09-04)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.28](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.27...@kong-ui-public/analytics-metric-provider@1.1.28) (2023-09-02)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.27](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.26...@kong-ui-public/analytics-metric-provider@1.1.27) (2023-08-30)


### Bug Fixes

* **analytics-utilities:** metric provider version bump to latest ([#746](https://github.com/Kong/public-ui-components/issues/746)) ([369bb90](https://github.com/Kong/public-ui-components/commit/369bb908629cddb8a243c97fcc86db9f15cd36f7))





## [1.1.26](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.25...@kong-ui-public/analytics-metric-provider@1.1.26) (2023-08-28)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.25](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.24...@kong-ui-public/analytics-metric-provider@1.1.25) (2023-08-25)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.24](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.23...@kong-ui-public/analytics-metric-provider@1.1.24) (2023-08-23)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.23](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.22...@kong-ui-public/analytics-metric-provider@1.1.23) (2023-08-23)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.22](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.21...@kong-ui-public/analytics-metric-provider@1.1.22) (2023-08-22)


### Bug Fixes

* **tsconfig:** apply `@vue/tsconfig` ([#729](https://github.com/Kong/public-ui-components/issues/729)) ([c8aeca7](https://github.com/Kong/public-ui-components/commit/c8aeca7bed27ad0347183744096a5524d1852568))





## [1.1.21](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.20...@kong-ui-public/analytics-metric-provider@1.1.21) (2023-08-21)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.20](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.19...@kong-ui-public/analytics-metric-provider@1.1.20) (2023-08-21)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.19](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.18...@kong-ui-public/analytics-metric-provider@1.1.19) (2023-08-18)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.18](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.17...@kong-ui-public/analytics-metric-provider@1.1.18) (2023-08-18)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.17](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.16...@kong-ui-public/analytics-metric-provider@1.1.17) (2023-08-14)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.16](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.15...@kong-ui-public/analytics-metric-provider@1.1.16) (2023-08-13)


### Bug Fixes

* **deps:** bump version of `analytics-utilities` ([#700](https://github.com/Kong/public-ui-components/issues/700)) ([2c95b24](https://github.com/Kong/public-ui-components/commit/2c95b24897871e2576d2ea483a7df28cd0a1bc2c))





## [1.1.15](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.14...@kong-ui-public/analytics-metric-provider@1.1.15) (2023-08-12)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.14](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.13...@kong-ui-public/analytics-metric-provider@1.1.14) (2023-08-11)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.13](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.12...@kong-ui-public/analytics-metric-provider@1.1.13) (2023-08-08)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.12](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.11...@kong-ui-public/analytics-metric-provider@1.1.12) (2023-08-07)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.11](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.10...@kong-ui-public/analytics-metric-provider@1.1.11) (2023-08-04)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.10](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.9...@kong-ui-public/analytics-metric-provider@1.1.10) (2023-08-04)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.9](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.8...@kong-ui-public/analytics-metric-provider@1.1.9) (2023-08-04)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.8](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.7...@kong-ui-public/analytics-metric-provider@1.1.8) (2023-08-04)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.6...@kong-ui-public/analytics-metric-provider@1.1.7) (2023-08-03)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.5...@kong-ui-public/analytics-metric-provider@1.1.6) (2023-08-03)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.4...@kong-ui-public/analytics-metric-provider@1.1.5) (2023-08-02)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.3...@kong-ui-public/analytics-metric-provider@1.1.4) (2023-07-31)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.2...@kong-ui-public/analytics-metric-provider@1.1.3) (2023-07-28)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.1...@kong-ui-public/analytics-metric-provider@1.1.2) (2023-07-27)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





## [1.1.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/analytics-metric-provider@1.1.0...@kong-ui-public/analytics-metric-provider@1.1.1) (2023-07-27)

**Note:** Version bump only for package @kong-ui-public/analytics-metric-provider





# 1.1.0 (2023-07-26)


### Features

* **analytics:** make analytics-metric-provider public [MA-1794] ([#626](https://github.com/Kong/public-ui-components/issues/626)) ([92204f3](https://github.com/Kong/public-ui-components/commit/92204f385ec2f5cbacf3da01cb7769be34e57fb9))
