## struct `highlo::ApplicationSettings` {#structhighlo_1_1_application_settings}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public bool `[`Headless`](#structhighlo_1_1_application_settings_aaacd3be002c11f6c0500daed6009f751_1aaacd3be002c11f6c0500daed6009f751) | Determines whether the engine should launch without a rendering window (useful for game-servers)
`public bool `[`Fullscreen`](#structhighlo_1_1_application_settings_ab8ebca97944d02e3b249796161eb0a26_1ab8ebca97944d02e3b249796161eb0a26) | Determines whether the engine should start in fullscreen mode, if Headless is false
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`WindowWidth`](#structhighlo_1_1_application_settings_aee8761f21191db09f64c83bd4ebefc2a_1aee8761f21191db09f64c83bd4ebefc2a) | Determines the width of the window, if Headless is false
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`WindowHeight`](#structhighlo_1_1_application_settings_ab074bfe3ed16fa2bf5a1d657ea63a3a0_1ab074bfe3ed16fa2bf5a1d657ea63a3a0) | Determines the height of the window, if Headless is false
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`WindowTitle`](#structhighlo_1_1_application_settings_a5df9f4a7dec74c014e60185f2138cd4f_1a5df9f4a7dec74c014e60185f2138cd4f) | Determines the window title, if Headless is false
`public bool `[`NoLog`](#structhighlo_1_1_application_settings_a2faa0c21473d42bbd1ef1e519f91b9b3_1a2faa0c21473d42bbd1ef1e519f91b9b3) | Disables the log output into a file
`public bool `[`Maximized`](#structhighlo_1_1_application_settings_a13c57c31a343be6f8e66f3fb1f877297_1a13c57c31a343be6f8e66f3fb1f877297) | Determines, whether the rendering window should be maximized, if Headless is false
`public bool `[`VSync`](#structhighlo_1_1_application_settings_ad0d10fdfbd40c28ed657d869f2eac92a_1ad0d10fdfbd40c28ed657d869f2eac92a) | Determines, whether the framerate should be locked to the maximum display framerate, if Headless is false
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`RenderingAPI`](#structhighlo_1_1_application_settings_a5b1201a2a14465eff1f3849d4001f130_1a5b1201a2a14465eff1f3849d4001f130) | Determines the rendering api that should be used in the backend to render, if Headless is false.
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`WindowAPI`](#structhighlo_1_1_application_settings_a2e6092a1f6d6bd1a135f672cc6e8f673_1a2e6092a1f6d6bd1a135f672cc6e8f673) | Determines the window api that should be used to display the window. Valid values are 'GLFW' or 'native'.
`public `[`uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` `[`MainThreadID`](#structhighlo_1_1_application_settings_a2f199585b23083c62d6a181ac9687d51_1a2f199585b23083c62d6a181ac9687d51) | Determines the Main [Thread](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread) ID of the main thread
`public `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`CacheRegistryPath`](#structhighlo_1_1_application_settings_a17d9ee5d90dbedfcad2e40d03edf5179_1a17d9ee5d90dbedfcad2e40d03edf5179) | Determines the path to the cache config. The Cache config stores all hashes for later comparison
`public `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`ProjectPath`](#structhighlo_1_1_application_settings_adec32f85b769290e4eec30237caeb3d0_1adec32f85b769290e4eec30237caeb3d0) | Determines the path to the startup project for the Editor.

### Members

#### `public bool `[`Headless`](#structhighlo_1_1_application_settings_aaacd3be002c11f6c0500daed6009f751_1aaacd3be002c11f6c0500daed6009f751) {#structhighlo_1_1_application_settings_aaacd3be002c11f6c0500daed6009f751_1aaacd3be002c11f6c0500daed6009f751}

Determines whether the engine should launch without a rendering window (useful for game-servers)

#### `public bool `[`Fullscreen`](#structhighlo_1_1_application_settings_ab8ebca97944d02e3b249796161eb0a26_1ab8ebca97944d02e3b249796161eb0a26) {#structhighlo_1_1_application_settings_ab8ebca97944d02e3b249796161eb0a26_1ab8ebca97944d02e3b249796161eb0a26}

Determines whether the engine should start in fullscreen mode, if Headless is false

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`WindowWidth`](#structhighlo_1_1_application_settings_aee8761f21191db09f64c83bd4ebefc2a_1aee8761f21191db09f64c83bd4ebefc2a) {#structhighlo_1_1_application_settings_aee8761f21191db09f64c83bd4ebefc2a_1aee8761f21191db09f64c83bd4ebefc2a}

Determines the width of the window, if Headless is false

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`WindowHeight`](#structhighlo_1_1_application_settings_ab074bfe3ed16fa2bf5a1d657ea63a3a0_1ab074bfe3ed16fa2bf5a1d657ea63a3a0) {#structhighlo_1_1_application_settings_ab074bfe3ed16fa2bf5a1d657ea63a3a0_1ab074bfe3ed16fa2bf5a1d657ea63a3a0}

Determines the height of the window, if Headless is false

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`WindowTitle`](#structhighlo_1_1_application_settings_a5df9f4a7dec74c014e60185f2138cd4f_1a5df9f4a7dec74c014e60185f2138cd4f) {#structhighlo_1_1_application_settings_a5df9f4a7dec74c014e60185f2138cd4f_1a5df9f4a7dec74c014e60185f2138cd4f}

Determines the window title, if Headless is false

#### `public bool `[`NoLog`](#structhighlo_1_1_application_settings_a2faa0c21473d42bbd1ef1e519f91b9b3_1a2faa0c21473d42bbd1ef1e519f91b9b3) {#structhighlo_1_1_application_settings_a2faa0c21473d42bbd1ef1e519f91b9b3_1a2faa0c21473d42bbd1ef1e519f91b9b3}

Disables the log output into a file

#### `public bool `[`Maximized`](#structhighlo_1_1_application_settings_a13c57c31a343be6f8e66f3fb1f877297_1a13c57c31a343be6f8e66f3fb1f877297) {#structhighlo_1_1_application_settings_a13c57c31a343be6f8e66f3fb1f877297_1a13c57c31a343be6f8e66f3fb1f877297}

Determines, whether the rendering window should be maximized, if Headless is false

#### `public bool `[`VSync`](#structhighlo_1_1_application_settings_ad0d10fdfbd40c28ed657d869f2eac92a_1ad0d10fdfbd40c28ed657d869f2eac92a) {#structhighlo_1_1_application_settings_ad0d10fdfbd40c28ed657d869f2eac92a_1ad0d10fdfbd40c28ed657d869f2eac92a}

Determines, whether the framerate should be locked to the maximum display framerate, if Headless is false

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`RenderingAPI`](#structhighlo_1_1_application_settings_a5b1201a2a14465eff1f3849d4001f130_1a5b1201a2a14465eff1f3849d4001f130) {#structhighlo_1_1_application_settings_a5b1201a2a14465eff1f3849d4001f130_1a5b1201a2a14465eff1f3849d4001f130}

Determines the rendering api that should be used in the backend to render, if Headless is false.

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`WindowAPI`](#structhighlo_1_1_application_settings_a2e6092a1f6d6bd1a135f672cc6e8f673_1a2e6092a1f6d6bd1a135f672cc6e8f673) {#structhighlo_1_1_application_settings_a2e6092a1f6d6bd1a135f672cc6e8f673_1a2e6092a1f6d6bd1a135f672cc6e8f673}

Determines the window api that should be used to display the window. Valid values are 'GLFW' or 'native'.

#### `public `[`uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` `[`MainThreadID`](#structhighlo_1_1_application_settings_a2f199585b23083c62d6a181ac9687d51_1a2f199585b23083c62d6a181ac9687d51) {#structhighlo_1_1_application_settings_a2f199585b23083c62d6a181ac9687d51_1a2f199585b23083c62d6a181ac9687d51}

Determines the Main [Thread](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread) ID of the main thread

#### `public `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`CacheRegistryPath`](#structhighlo_1_1_application_settings_a17d9ee5d90dbedfcad2e40d03edf5179_1a17d9ee5d90dbedfcad2e40d03edf5179) {#structhighlo_1_1_application_settings_a17d9ee5d90dbedfcad2e40d03edf5179_1a17d9ee5d90dbedfcad2e40d03edf5179}

Determines the path to the cache config. The Cache config stores all hashes for later comparison

#### `public `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`ProjectPath`](#structhighlo_1_1_application_settings_adec32f85b769290e4eec30237caeb3d0_1adec32f85b769290e4eec30237caeb3d0) {#structhighlo_1_1_application_settings_adec32f85b769290e4eec30237caeb3d0_1adec32f85b769290e4eec30237caeb3d0}

Determines the path to the startup project for the Editor.

