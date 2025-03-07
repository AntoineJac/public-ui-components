# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.8.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.8.0...@kong-ui-public/metric-cards@0.8.1) (2024-04-18)


### Bug Fixes

* **deps:** update dependency @kong/icons to ^1.9.0 ([#1339](https://github.com/Kong/public-ui-components/issues/1339)) ([aad4ba3](https://github.com/Kong/public-ui-components/commit/aad4ba3bb7c58a3262a533015dea70033b022452))





# [0.8.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.7.2...@kong-ui-public/metric-cards@0.8.0) (2024-04-15)


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





## [0.7.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.7.1...@kong-ui-public/metric-cards@0.7.2) (2024-04-06)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.7.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.7.0...@kong-ui-public/metric-cards@0.7.1) (2024-04-02)


### Bug Fixes

* **deps:** update dependency @kong/icons to ^1.8.15 ([#1304](https://github.com/Kong/public-ui-components/issues/1304)) ([36c16f4](https://github.com/Kong/public-ui-components/commit/36c16f474c85b28208bd7a0a60eea3ceceedc9e7))





# [0.7.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.50...@kong-ui-public/metric-cards@0.7.0) (2024-03-28)


### Features

* **metric-card-container:** add optional title [MA-2726] ([#1298](https://github.com/Kong/public-ui-components/issues/1298)) ([cbee003](https://github.com/Kong/public-ui-components/commit/cbee003c22262268f69da2529829cbe2347a075f))





## [0.6.50](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.49...@kong-ui-public/metric-cards@0.6.50) (2024-03-28)


### Bug Fixes

* **entities-consumers:** group form fields [KHCP-11029] ([#1300](https://github.com/Kong/public-ui-components/issues/1300)) ([c9375c0](https://github.com/Kong/public-ui-components/commit/c9375c07c0b7a6f09fe714f64ed48eac0ea187dd))





## [0.6.49](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.48...@kong-ui-public/metric-cards@0.6.49) (2024-03-27)


### Bug Fixes

* kongponents alpha phase 10 [KHCP-11172] ([#1292](https://github.com/Kong/public-ui-components/issues/1292)) ([47f01aa](https://github.com/Kong/public-ui-components/commit/47f01aa1ec4c57a48bc046987bed9482b7c832a2))





## [0.6.48](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.47...@kong-ui-public/metric-cards@0.6.48) (2024-03-25)


### Bug Fixes

* **entities-plugins, vfg:** create plugin form a11y improvements [KHCP-11026] ([#1272](https://github.com/Kong/public-ui-components/issues/1272)) ([b1ed04e](https://github.com/Kong/public-ui-components/commit/b1ed04eb56ff2869b988a217220debc78655f3f0))





## [0.6.47](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.46...@kong-ui-public/metric-cards@0.6.47) (2024-03-21)


### Bug Fixes

* **metrics-card:** font-weight ([#1278](https://github.com/Kong/public-ui-components/issues/1278)) ([a7f5f43](https://github.com/Kong/public-ui-components/commit/a7f5f438879b661944896d7e4e3b30bcd3c780bf))





## [0.6.46](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.45...@kong-ui-public/metric-cards@0.6.46) (2024-03-21)


### Bug Fixes

* **metric-cards:** don't default to a heading tag ([#1277](https://github.com/Kong/public-ui-components/issues/1277)) ([f6b6ca1](https://github.com/Kong/public-ui-components/commit/f6b6ca16f90c2a83029c494ed7d5ea2e3be529a8))





## [0.6.45](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.44...@kong-ui-public/metric-cards@0.6.45) (2024-03-20)


### Bug Fixes

* proper heading element in widgets [KHCP-11027] ([#1252](https://github.com/Kong/public-ui-components/issues/1252)) ([b66ce71](https://github.com/Kong/public-ui-components/commit/b66ce711fa876bb75bb880eece8514a8055034be))





## [0.6.44](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.43...@kong-ui-public/metric-cards@0.6.44) (2024-03-13)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.43](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.42...@kong-ui-public/metric-cards@0.6.43) (2024-03-12)


### Bug Fixes

* kongponents alpha phase 9 [KHCP-10951] ([#1209](https://github.com/Kong/public-ui-components/issues/1209)) ([88a2f20](https://github.com/Kong/public-ui-components/commit/88a2f20837aaaa3aef9dbe8bddd36b70f5a4558f))





## [0.6.42](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.41...@kong-ui-public/metric-cards@0.6.42) (2024-03-12)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.41](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.40...@kong-ui-public/metric-cards@0.6.41) (2024-03-08)


### Bug Fixes

* replace CopyUuid with KCopy [khcp-9465] ([#1210](https://github.com/Kong/public-ui-components/issues/1210)) ([e409d60](https://github.com/Kong/public-ui-components/commit/e409d60b7ab483c200ed6bb33f43ff571d6e6b88))





## [0.6.40](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.39...@kong-ui-public/metric-cards@0.6.40) (2024-03-07)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.39](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.38...@kong-ui-public/metric-cards@0.6.39) (2024-03-06)


### Bug Fixes

* **analytics:** update metric card styles [MA-2658] ([#1206](https://github.com/Kong/public-ui-components/issues/1206)) ([d507993](https://github.com/Kong/public-ui-components/commit/d507993cb18362c94032df129147a254f9b70e0d))





## [0.6.38](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.37...@kong-ui-public/metric-cards@0.6.38) (2024-02-27)


### Bug Fixes

* kongponents alpha phase 8 [KHCP-10758] ([#1170](https://github.com/Kong/public-ui-components/issues/1170)) ([ff130c3](https://github.com/Kong/public-ui-components/commit/ff130c3c9f1af9e9fcb09fb8c23ae758cc0a5ae2))





## [0.6.37](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.36...@kong-ui-public/metric-cards@0.6.37) (2024-02-26)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.36](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.35...@kong-ui-public/metric-cards@0.6.36) (2024-02-24)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.35](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.34...@kong-ui-public/metric-cards@0.6.35) (2024-02-24)


### Bug Fixes

* **analytics-chart:** chart height, legend padding, y-axis hover [MA-2536] ([#1179](https://github.com/Kong/public-ui-components/issues/1179)) ([14aea5b](https://github.com/Kong/public-ui-components/commit/14aea5b9c9c30d51ff6c932cfc2e8a4249270f87))





## [0.6.34](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.33...@kong-ui-public/metric-cards@0.6.34) (2024-02-23)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.33](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.32...@kong-ui-public/metric-cards@0.6.33) (2024-02-13)


### Bug Fixes

* kongponents alpha phase 7 [KHCP-10653] ([#1149](https://github.com/Kong/public-ui-components/issues/1149)) ([bd76d01](https://github.com/Kong/public-ui-components/commit/bd76d011107f92109022fc22877b795167798d01))





## [0.6.32](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.31...@kong-ui-public/metric-cards@0.6.32) (2024-02-05)


### Bug Fixes

* kongponents alpha phase 6 [KHCP-10444] ([#1135](https://github.com/Kong/public-ui-components/issues/1135)) ([bf6d314](https://github.com/Kong/public-ui-components/commit/bf6d314c1fe657a10f64e8db926f3f3feb36ca3f))





## [0.6.31](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.30...@kong-ui-public/metric-cards@0.6.31) (2024-01-26)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.30](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.29...@kong-ui-public/metric-cards@0.6.30) (2024-01-25)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.29](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.28...@kong-ui-public/metric-cards@0.6.29) (2024-01-24)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.28](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.27...@kong-ui-public/metric-cards@0.6.28) (2024-01-23)


### Bug Fixes

* kongponents alpha phase 5 [KHCP-10381] ([#1097](https://github.com/Kong/public-ui-components/issues/1097)) ([24e5ba6](https://github.com/Kong/public-ui-components/commit/24e5ba6d6b256b092276c70e16d2e221d5be0c17))





## [0.6.27](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.26...@kong-ui-public/metric-cards@0.6.27) (2024-01-19)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.26](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.25...@kong-ui-public/metric-cards@0.6.26) (2024-01-19)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.25](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.24...@kong-ui-public/metric-cards@0.6.25) (2024-01-19)


### Bug Fixes

* **deps:** update dependency @kong/icons to ^1.8.13 ([#1090](https://github.com/Kong/public-ui-components/issues/1090)) ([8939575](https://github.com/Kong/public-ui-components/commit/8939575e252049d7af455a1d343afb9e85632f1b))





## [0.6.24](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.23...@kong-ui-public/metric-cards@0.6.24) (2024-01-17)


### Bug Fixes

* kongponents alpha phase 4 [KHCP-10182] ([#1069](https://github.com/Kong/public-ui-components/issues/1069)) ([8dc4cb0](https://github.com/Kong/public-ui-components/commit/8dc4cb060fc5414381824b1eb8ce7691d1346ce5))





## [0.6.23](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.22...@kong-ui-public/metric-cards@0.6.23) (2024-01-15)


### Bug Fixes

* **deps:** update dependency @kong/icons to ^1.8.12 ([#1073](https://github.com/Kong/public-ui-components/issues/1073)) ([4cd95e5](https://github.com/Kong/public-ui-components/commit/4cd95e51ada9c8614648e81e9bdf2471b789ca65))





## [0.6.22](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.21...@kong-ui-public/metric-cards@0.6.22) (2024-01-12)


### Bug Fixes

* widen peer dependencies ([#1071](https://github.com/Kong/public-ui-components/issues/1071)) ([4a345d2](https://github.com/Kong/public-ui-components/commit/4a345d28f53d9248846a9ffc4ed1011d6ff8616f))





## [0.6.21](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.20...@kong-ui-public/metric-cards@0.6.21) (2024-01-12)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.20](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.19...@kong-ui-public/metric-cards@0.6.20) (2024-01-11)


### Bug Fixes

* **deps:** update dependency @kong/icons to ^1.8.11 ([#1063](https://github.com/Kong/public-ui-components/issues/1063)) ([2eee31d](https://github.com/Kong/public-ui-components/commit/2eee31d1e56367c283f46d5bfa11e37bd9a6e31f))





## [0.6.19](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.18...@kong-ui-public/metric-cards@0.6.19) (2024-01-09)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.18](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.17...@kong-ui-public/metric-cards@0.6.18) (2024-01-01)


### Bug Fixes

* **deps:** update all non-major dependencies with stable version ([#1042](https://github.com/Kong/public-ui-components/issues/1042)) ([6112776](https://github.com/Kong/public-ui-components/commit/61127764e7f193177a394e292db30ff11aab0409))





## [0.6.17](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.16...@kong-ui-public/metric-cards@0.6.17) (2023-12-27)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.16](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.15...@kong-ui-public/metric-cards@0.6.16) (2023-12-22)


### Bug Fixes

* **deps:** update dependency @kong/icons to ^1.8.8 ([#1025](https://github.com/Kong/public-ui-components/issues/1025)) ([335f314](https://github.com/Kong/public-ui-components/commit/335f314ef8de6d1245ca34d8c5b3468812256f24))





## [0.6.15](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.14...@kong-ui-public/metric-cards@0.6.15) (2023-12-21)


### Bug Fixes

* type exports ([efecd88](https://github.com/Kong/public-ui-components/commit/efecd8859a01aae41d9490b1758237233c925c19))





## [0.6.14](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.13...@kong-ui-public/metric-cards@0.6.14) (2023-12-20)


### Bug Fixes

* add design tokens plugin ([#1024](https://github.com/Kong/public-ui-components/issues/1024)) ([0d6b971](https://github.com/Kong/public-ui-components/commit/0d6b971fc8fb13ea32714416f8d20ce8f5ecf35e))





## [0.6.13](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.12...@kong-ui-public/metric-cards@0.6.13) (2023-12-19)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.12](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.11...@kong-ui-public/metric-cards@0.6.12) (2023-12-12)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.11](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.10...@kong-ui-public/metric-cards@0.6.11) (2023-12-08)


### Bug Fixes

* kongponents alpha phase 3 [KHCP-9942] ([#985](https://github.com/Kong/public-ui-components/issues/985)) ([dc61424](https://github.com/Kong/public-ui-components/commit/dc61424540d15386c73db9d106143dc7e50714de))





## [0.6.10](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.9...@kong-ui-public/metric-cards@0.6.10) (2023-12-07)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.9](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.8...@kong-ui-public/metric-cards@0.6.9) (2023-12-05)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.8](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.7...@kong-ui-public/metric-cards@0.6.8) (2023-12-05)


### Bug Fixes

* update kcard usage [KHCP-9887] ([#977](https://github.com/Kong/public-ui-components/issues/977)) ([3f00e69](https://github.com/Kong/public-ui-components/commit/3f00e69fd65d1eae07139cee52afb16825f34a9b))





## [0.6.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.6...@kong-ui-public/metric-cards@0.6.7) (2023-12-01)


### Bug Fixes

* **deps:** update dependency @kong/icons to ^1.8.2 ([#968](https://github.com/Kong/public-ui-components/issues/968)) ([afd8013](https://github.com/Kong/public-ui-components/commit/afd801327bfd53bede1215fa358b5828540af23a))





## [0.6.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.5...@kong-ui-public/metric-cards@0.6.6) (2023-11-30)


### Bug Fixes

* **deps:** update dependency @kong/icons to ^1.8.1 ([#962](https://github.com/Kong/public-ui-components/issues/962)) ([66680c6](https://github.com/Kong/public-ui-components/commit/66680c6981424e3529478f8aec203de3ac4d2053))





## [0.6.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.4...@kong-ui-public/metric-cards@0.6.5) (2023-11-30)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.3...@kong-ui-public/metric-cards@0.6.4) (2023-11-29)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.2...@kong-ui-public/metric-cards@0.6.3) (2023-11-28)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.6.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.1...@kong-ui-public/metric-cards@0.6.2) (2023-11-22)


### Bug Fixes

* **entities-vaults:** fix kradio card occurrences ([#937](https://github.com/Kong/public-ui-components/issues/937)) ([21827e9](https://github.com/Kong/public-ui-components/commit/21827e9592a962ec0e7a7de1d76ebd80c36dcd2f))





## [0.6.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.6.0...@kong-ui-public/metric-cards@0.6.1) (2023-11-21)

**Note:** Version bump only for package @kong-ui-public/metric-cards





# [0.6.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.5.7...@kong-ui-public/metric-cards@0.6.0) (2023-11-20)


### Features

* kongponents alpha [KHCP-9494] ([#880](https://github.com/Kong/public-ui-components/issues/880)) ([f81ab17](https://github.com/Kong/public-ui-components/commit/f81ab1718a954ff6883baa9b2b47c0ccdb1e2f5e))


### BREAKING CHANGES

* Updating Kongponents to version 9 alpha. Style changes are breaking.

* fix: lockfile

* feat(ktextarea): kongponents alpha fixes

* fix(copy-uuid): alignment

* fix: lockfile

* chore(deps): update package





## [0.5.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.5.6...@kong-ui-public/metric-cards@0.5.7) (2023-11-16)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.5.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.5.5...@kong-ui-public/metric-cards@0.5.6) (2023-11-15)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.5.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.5.4...@kong-ui-public/metric-cards@0.5.5) (2023-11-11)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.5.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.5.3...@kong-ui-public/metric-cards@0.5.4) (2023-11-07)


### Bug Fixes

* **deps:** update dependency @kong/icons to ^1.8.0 ([#896](https://github.com/Kong/public-ui-components/issues/896)) ([6978947](https://github.com/Kong/public-ui-components/commit/6978947f9fe7e12b30ae55a5d92596cebf7a9d3c))





## [0.5.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.5.2...@kong-ui-public/metric-cards@0.5.3) (2023-11-03)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.5.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.5.1...@kong-ui-public/metric-cards@0.5.2) (2023-11-01)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.5.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.5.0...@kong-ui-public/metric-cards@0.5.1) (2023-10-31)

**Note:** Version bump only for package @kong-ui-public/metric-cards





# [0.5.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.42...@kong-ui-public/metric-cards@0.5.0) (2023-10-27)


### Features

* **metric-cards:** new v2.0 layout [MA-2139] ([#848](https://github.com/Kong/public-ui-components/issues/848)) ([654f098](https://github.com/Kong/public-ui-components/commit/654f098bb75bde4266b2423b7194875cbb2f8ee2))





## [0.4.42](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.41...@kong-ui-public/metric-cards@0.4.42) (2023-10-24)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.41](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.40...@kong-ui-public/metric-cards@0.4.41) (2023-10-24)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.40](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.39...@kong-ui-public/metric-cards@0.4.40) (2023-10-23)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.39](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.38...@kong-ui-public/metric-cards@0.4.39) (2023-10-18)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.38](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.37...@kong-ui-public/metric-cards@0.4.38) (2023-10-07)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.37](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.36...@kong-ui-public/metric-cards@0.4.37) (2023-10-06)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.36](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.35...@kong-ui-public/metric-cards@0.4.36) (2023-09-28)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.35](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.34...@kong-ui-public/metric-cards@0.4.35) (2023-09-27)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.34](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.33...@kong-ui-public/metric-cards@0.4.34) (2023-09-16)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.33](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.32...@kong-ui-public/metric-cards@0.4.33) (2023-09-14)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.32](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.31...@kong-ui-public/metric-cards@0.4.32) (2023-09-13)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.31](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.30...@kong-ui-public/metric-cards@0.4.31) (2023-09-12)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.30](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.29...@kong-ui-public/metric-cards@0.4.30) (2023-09-09)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.29](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.28...@kong-ui-public/metric-cards@0.4.29) (2023-09-08)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.28](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.27...@kong-ui-public/metric-cards@0.4.28) (2023-09-04)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.27](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.26...@kong-ui-public/metric-cards@0.4.27) (2023-09-02)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.26](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.25...@kong-ui-public/metric-cards@0.4.26) (2023-08-28)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.25](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.24...@kong-ui-public/metric-cards@0.4.25) (2023-08-25)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.24](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.23...@kong-ui-public/metric-cards@0.4.24) (2023-08-23)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.23](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.22...@kong-ui-public/metric-cards@0.4.23) (2023-08-22)


### Bug Fixes

* **tsconfig:** apply `@vue/tsconfig` ([#729](https://github.com/Kong/public-ui-components/issues/729)) ([c8aeca7](https://github.com/Kong/public-ui-components/commit/c8aeca7bed27ad0347183744096a5524d1852568))





## [0.4.22](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.21...@kong-ui-public/metric-cards@0.4.22) (2023-08-18)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.21](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.20...@kong-ui-public/metric-cards@0.4.21) (2023-08-14)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.20](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.19...@kong-ui-public/metric-cards@0.4.20) (2023-08-14)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.19](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.18...@kong-ui-public/metric-cards@0.4.19) (2023-08-12)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.18](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.17...@kong-ui-public/metric-cards@0.4.18) (2023-08-11)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.17](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.16...@kong-ui-public/metric-cards@0.4.17) (2023-08-08)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.16](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.15...@kong-ui-public/metric-cards@0.4.16) (2023-08-07)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.15](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.14...@kong-ui-public/metric-cards@0.4.15) (2023-08-05)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.14](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.13...@kong-ui-public/metric-cards@0.4.14) (2023-08-04)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.13](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.12...@kong-ui-public/metric-cards@0.4.13) (2023-08-04)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.12](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.11...@kong-ui-public/metric-cards@0.4.12) (2023-08-04)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.11](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.10...@kong-ui-public/metric-cards@0.4.11) (2023-08-04)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.10](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.9...@kong-ui-public/metric-cards@0.4.10) (2023-08-03)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.9](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.8...@kong-ui-public/metric-cards@0.4.9) (2023-08-03)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.8](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.7...@kong-ui-public/metric-cards@0.4.8) (2023-08-02)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.6...@kong-ui-public/metric-cards@0.4.7) (2023-07-31)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.5...@kong-ui-public/metric-cards@0.4.6) (2023-07-31)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.4...@kong-ui-public/metric-cards@0.4.5) (2023-07-31)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.3...@kong-ui-public/metric-cards@0.4.4) (2023-07-31)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.2...@kong-ui-public/metric-cards@0.4.3) (2023-07-28)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.1...@kong-ui-public/metric-cards@0.4.2) (2023-07-27)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.4.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.4.0...@kong-ui-public/metric-cards@0.4.1) (2023-07-27)

**Note:** Version bump only for package @kong-ui-public/metric-cards





# [0.4.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.3.2...@kong-ui-public/metric-cards@0.4.0) (2023-07-25)


### Features

* add design tokens and remove utility classes [KHCP-8172] ([#624](https://github.com/Kong/public-ui-components/issues/624)) ([dbdc995](https://github.com/Kong/public-ui-components/commit/dbdc995dacdc7ba97f103185dfee71a0372d7207))





## [0.3.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.3.1...@kong-ui-public/metric-cards@0.3.2) (2023-07-24)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.3.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.3.0...@kong-ui-public/metric-cards@0.3.1) (2023-07-24)

**Note:** Version bump only for package @kong-ui-public/metric-cards





# [0.3.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.14...@kong-ui-public/metric-cards@0.3.0) (2023-07-19)


### Features

* upgrade to vue 3.3.x [KHCP-7567] ([#618](https://github.com/Kong/public-ui-components/issues/618)) ([6fc9e17](https://github.com/Kong/public-ui-components/commit/6fc9e177aaf61602f1a0877519eb47c9fe68f0d0))





## [0.2.14](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.13...@kong-ui-public/metric-cards@0.2.14) (2023-06-29)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.13](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.12...@kong-ui-public/metric-cards@0.2.13) (2023-06-28)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.12](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.11...@kong-ui-public/metric-cards@0.2.12) (2023-06-26)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.11](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.10...@kong-ui-public/metric-cards@0.2.11) (2023-06-26)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.10](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.9...@kong-ui-public/metric-cards@0.2.10) (2023-06-23)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.9](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.8...@kong-ui-public/metric-cards@0.2.9) (2023-06-22)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.8](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.7...@kong-ui-public/metric-cards@0.2.8) (2023-06-15)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.6...@kong-ui-public/metric-cards@0.2.7) (2023-06-14)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.5...@kong-ui-public/metric-cards@0.2.6) (2023-06-14)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.4...@kong-ui-public/metric-cards@0.2.5) (2023-06-12)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.3...@kong-ui-public/metric-cards@0.2.4) (2023-06-07)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.2...@kong-ui-public/metric-cards@0.2.3) (2023-05-26)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.1...@kong-ui-public/metric-cards@0.2.2) (2023-05-26)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.2.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.2.0...@kong-ui-public/metric-cards@0.2.1) (2023-05-26)

**Note:** Version bump only for package @kong-ui-public/metric-cards





# [0.2.0](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.55...@kong-ui-public/metric-cards@0.2.0) (2023-05-26)


### Features

* define and check dist size limit [KHCP-7179] ([#455](https://github.com/Kong/public-ui-components/issues/455)) ([02e4d0a](https://github.com/Kong/public-ui-components/commit/02e4d0ae354b7d30a63856110e58b10e335d8134))





## [0.1.55](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.54...@kong-ui-public/metric-cards@0.1.55) (2023-05-25)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.54](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.53...@kong-ui-public/metric-cards@0.1.54) (2023-05-24)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.53](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.52...@kong-ui-public/metric-cards@0.1.53) (2023-05-23)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.52](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.51...@kong-ui-public/metric-cards@0.1.52) (2023-05-22)


### Bug Fixes

* **metric-cards:** Fix default change format function ([#451](https://github.com/Kong/public-ui-components/issues/451)) ([54621f2](https://github.com/Kong/public-ui-components/commit/54621f2875d49c30079a68ac7cb190114cfd8d5e))





## [0.1.51](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.50...@kong-ui-public/metric-cards@0.1.51) (2023-05-20)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.50](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.49...@kong-ui-public/metric-cards@0.1.50) (2023-05-19)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.49](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.48...@kong-ui-public/metric-cards@0.1.49) (2023-05-18)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.48](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.47...@kong-ui-public/metric-cards@0.1.48) (2023-05-09)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.47](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.46...@kong-ui-public/metric-cards@0.1.47) (2023-05-08)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.46](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.45...@kong-ui-public/metric-cards@0.1.46) (2023-05-08)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.45](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.44...@kong-ui-public/metric-cards@0.1.45) (2023-05-05)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.44](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.43...@kong-ui-public/metric-cards@0.1.44) (2023-05-05)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.43](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.42...@kong-ui-public/metric-cards@0.1.43) (2023-05-02)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.42](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.41...@kong-ui-public/metric-cards@0.1.42) (2023-05-01)


### Bug Fixes

* **analytics:** sanitize filenames [MA-1651] ([#366](https://github.com/Kong/public-ui-components/issues/366)) ([8990dba](https://github.com/Kong/public-ui-components/commit/8990dba7ea9d6a982e4ce74b6115849c6f81e4de))





## [0.1.41](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.40...@kong-ui-public/metric-cards@0.1.41) (2023-05-01)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.40](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.39...@kong-ui-public/metric-cards@0.1.40) (2023-05-01)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.39](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.38...@kong-ui-public/metric-cards@0.1.39) (2023-04-27)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.38](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.37...@kong-ui-public/metric-cards@0.1.38) (2023-04-26)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.37](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.36...@kong-ui-public/metric-cards@0.1.37) (2023-04-26)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.36](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.35...@kong-ui-public/metric-cards@0.1.36) (2023-04-25)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.35](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.34...@kong-ui-public/metric-cards@0.1.35) (2023-04-21)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.34](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.33...@kong-ui-public/metric-cards@0.1.34) (2023-04-21)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.33](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.32...@kong-ui-public/metric-cards@0.1.33) (2023-04-20)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.32](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.31...@kong-ui-public/metric-cards@0.1.32) (2023-04-20)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.31](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.30...@kong-ui-public/metric-cards@0.1.31) (2023-04-19)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.30](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.29...@kong-ui-public/metric-cards@0.1.30) (2023-04-13)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.29](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.28...@kong-ui-public/metric-cards@0.1.29) (2023-04-03)


### Bug Fixes

* **metric-cards:** avoid showing Infinity in metrics cards ([#299](https://github.com/Kong/public-ui-components/issues/299)) ([e1b0564](https://github.com/Kong/public-ui-components/commit/e1b05643161a352b90f1a1154da3c8703c33fca0))





## [0.1.28](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.27...@kong-ui-public/metric-cards@0.1.28) (2023-03-31)


### Bug Fixes

* **metric-cards:** round approximate numbers by default ([#298](https://github.com/Kong/public-ui-components/issues/298)) ([e6a706e](https://github.com/Kong/public-ui-components/commit/e6a706ef962fdf03e99d28a35ec92eaa2dbe0b34))





## [0.1.27](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.26...@kong-ui-public/metric-cards@0.1.27) (2023-03-25)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.26](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.25...@kong-ui-public/metric-cards@0.1.26) (2023-03-23)


### Bug Fixes

* **metric-cards:** increase rounding factor for trend [MA-1404] ([#273](https://github.com/Kong/public-ui-components/issues/273)) ([51621e9](https://github.com/Kong/public-ui-components/commit/51621e97fe7bac6554874d54dd63896cb5b36fcf))





## [0.1.25](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.24...@kong-ui-public/metric-cards@0.1.25) (2023-03-23)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.24](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.23...@kong-ui-public/metric-cards@0.1.24) (2023-03-22)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.23](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.22...@kong-ui-public/metric-cards@0.1.23) (2023-03-22)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.22](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.21...@kong-ui-public/metric-cards@0.1.22) (2023-03-21)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.21](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.20...@kong-ui-public/metric-cards@0.1.21) (2023-03-18)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.20](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.19...@kong-ui-public/metric-cards@0.1.20) (2023-03-17)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.19](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.18...@kong-ui-public/metric-cards@0.1.19) (2023-03-15)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.18](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.17...@kong-ui-public/metric-cards@0.1.18) (2023-03-11)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.17](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.16...@kong-ui-public/metric-cards@0.1.17) (2023-03-10)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.16](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.15...@kong-ui-public/metric-cards@0.1.16) (2023-03-10)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.15](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.14...@kong-ui-public/metric-cards@0.1.15) (2023-03-10)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.14](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.13...@kong-ui-public/metric-cards@0.1.14) (2023-03-09)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.13](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.12...@kong-ui-public/metric-cards@0.1.13) (2023-03-09)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.12](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.11...@kong-ui-public/metric-cards@0.1.12) (2023-03-09)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.11](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.10...@kong-ui-public/metric-cards@0.1.11) (2023-03-09)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.10](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.9...@kong-ui-public/metric-cards@0.1.10) (2023-03-08)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.9](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.8...@kong-ui-public/metric-cards@0.1.9) (2023-03-07)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.8](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.7...@kong-ui-public/metric-cards@0.1.8) (2023-03-07)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.7](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.6...@kong-ui-public/metric-cards@0.1.7) (2023-03-02)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.6](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.5...@kong-ui-public/metric-cards@0.1.6) (2023-03-01)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.5](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.4...@kong-ui-public/metric-cards@0.1.5) (2023-03-01)


### Bug Fixes

* **metric-cards:** recursively define card size [MA-1446] ([#186](https://github.com/Kong/public-ui-components/issues/186)) ([f6abfc2](https://github.com/Kong/public-ui-components/commit/f6abfc2eb2730382da3140efadc6eb652b4fc18d))





## [0.1.4](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.3...@kong-ui-public/metric-cards@0.1.4) (2023-02-28)


### Bug Fixes

* **metric-cards:** add metriccardsize export [MA-1446] ([#184](https://github.com/Kong/public-ui-components/issues/184)) ([a207719](https://github.com/Kong/public-ui-components/commit/a207719b341056ce955f8c6039bb5f3944e7513a))





## [0.1.3](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.2...@kong-ui-public/metric-cards@0.1.3) (2023-02-28)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.2](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.1...@kong-ui-public/metric-cards@0.1.2) (2023-02-28)

**Note:** Version bump only for package @kong-ui-public/metric-cards





## [0.1.1](https://github.com/Kong/public-ui-components/compare/@kong-ui-public/metric-cards@0.1.0...@kong-ui-public/metric-cards@0.1.1) (2023-02-27)

**Note:** Version bump only for package @kong-ui-public/metric-cards





# 0.1.0 (2023-02-27)


### Features

* **metric-cards:** new metric card summary component [MA-1375] ([#112](https://github.com/Kong/public-ui-components/issues/112)) ([40b047a](https://github.com/Kong/public-ui-components/commit/40b047a413510a9432fe6f978b5c6ddc3511a8a1))
