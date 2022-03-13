## class `highlo::utils::CommandLineHelper` {#classhighlo_1_1utils_1_1_command_line_helper}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`CommandLineHelper`](#classhighlo_1_1utils_1_1_command_line_helper_af349a02d4f3bc176b24ebec7a6e5194c_1af349a02d4f3bc176b24ebec7a6e5194c)`()` | 
`public  `[`CommandLineHelper`](#classhighlo_1_1utils_1_1_command_line_helper_a37aecd76f316960a748f0cc7bf56519d_1a37aecd76f316960a748f0cc7bf56519d)`(`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` argc,char * argv)` | 
`public virtual  `[`~CommandLineHelper`](#classhighlo_1_1utils_1_1_command_line_helper_a92c2e22dc60e4dd867b819ff5c6c6f04_1a92c2e22dc60e4dd867b819ff5c6c6f04)`()` | 
`public inline bool `[`ShouldShowHelpMenu`](#classhighlo_1_1utils_1_1_command_line_helper_a65d35bc80848ad29a8da058bcf20f127_1a65d35bc80848ad29a8da058bcf20f127)`() const` | 
`public inline bool `[`ShouldShowVersion`](#classhighlo_1_1utils_1_1_command_line_helper_a45d736b089b98248b464f2f896427092_1a45d736b089b98248b464f2f896427092)`() const` | 
`public inline `[`ApplicationSettings`](docs-api/api-highlo--ApplicationSettings.md#structhighlo_1_1_application_settings)` & `[`GetAppSettings`](#classhighlo_1_1utils_1_1_command_line_helper_ace2077c3fc8169a90c217af2c2c3324c_1ace2077c3fc8169a90c217af2c2c3324c)`()` | 
`public inline const `[`ApplicationSettings`](docs-api/api-highlo--ApplicationSettings.md#structhighlo_1_1_application_settings)` & `[`GetAppSettings`](#classhighlo_1_1utils_1_1_command_line_helper_ad5a69607f226cb7f0664adf6d283fed0_1ad5a69607f226cb7f0664adf6d283fed0)`() const` | 
`public inline std::vector< `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` > & `[`GetRawArguments`](#classhighlo_1_1utils_1_1_command_line_helper_a7a278415e1d40c16b2c3dcb5160a9dcd_1a7a278415e1d40c16b2c3dcb5160a9dcd)`()` | 
`public inline const std::vector< `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` > & `[`GetRawArguments`](#classhighlo_1_1utils_1_1_command_line_helper_a91dee714475e0ea449f1dc8d2a5007e5_1a91dee714475e0ea449f1dc8d2a5007e5)`() const` | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Parse`](#classhighlo_1_1utils_1_1_command_line_helper_aa0c94a614fc3e28b2f09327999e24e65_1aa0c94a614fc3e28b2f09327999e24e65)`()` | 
`private std::vector< `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` > `[`m_Arguments`](#classhighlo_1_1utils_1_1_command_line_helper_1a11b6780dfa2b7db10b959ab1f88a43ef) | 
`private bool `[`m_HelpFlag`](#classhighlo_1_1utils_1_1_command_line_helper_1abd2972a1595e94c674fe5f97713965b6) | 
`private bool `[`m_VersionFlag`](#classhighlo_1_1utils_1_1_command_line_helper_1a5efe413fcb6061e553ba6f48cd89401d) | 
`private `[`ApplicationSettings`](docs-api/api-highlo--ApplicationSettings.md#structhighlo_1_1_application_settings)` `[`m_Settings`](#classhighlo_1_1utils_1_1_command_line_helper_1a22907a66cff158cfbcd2c8165ae6a012) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ResetStates`](#classhighlo_1_1utils_1_1_command_line_helper_1af643b90c5bc2645da12053e17c76f972)`()` | 

### Members

#### `public  `[`CommandLineHelper`](#classhighlo_1_1utils_1_1_command_line_helper_af349a02d4f3bc176b24ebec7a6e5194c_1af349a02d4f3bc176b24ebec7a6e5194c)`()` {#classhighlo_1_1utils_1_1_command_line_helper_af349a02d4f3bc176b24ebec7a6e5194c_1af349a02d4f3bc176b24ebec7a6e5194c}

#### `public  `[`CommandLineHelper`](#classhighlo_1_1utils_1_1_command_line_helper_a37aecd76f316960a748f0cc7bf56519d_1a37aecd76f316960a748f0cc7bf56519d)`(`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` argc,char * argv)` {#classhighlo_1_1utils_1_1_command_line_helper_a37aecd76f316960a748f0cc7bf56519d_1a37aecd76f316960a748f0cc7bf56519d}

#### `public virtual  `[`~CommandLineHelper`](#classhighlo_1_1utils_1_1_command_line_helper_a92c2e22dc60e4dd867b819ff5c6c6f04_1a92c2e22dc60e4dd867b819ff5c6c6f04)`()` {#classhighlo_1_1utils_1_1_command_line_helper_a92c2e22dc60e4dd867b819ff5c6c6f04_1a92c2e22dc60e4dd867b819ff5c6c6f04}

#### `public inline bool `[`ShouldShowHelpMenu`](#classhighlo_1_1utils_1_1_command_line_helper_a65d35bc80848ad29a8da058bcf20f127_1a65d35bc80848ad29a8da058bcf20f127)`() const` {#classhighlo_1_1utils_1_1_command_line_helper_a65d35bc80848ad29a8da058bcf20f127_1a65d35bc80848ad29a8da058bcf20f127}

#### `public inline bool `[`ShouldShowVersion`](#classhighlo_1_1utils_1_1_command_line_helper_a45d736b089b98248b464f2f896427092_1a45d736b089b98248b464f2f896427092)`() const` {#classhighlo_1_1utils_1_1_command_line_helper_a45d736b089b98248b464f2f896427092_1a45d736b089b98248b464f2f896427092}

#### `public inline `[`ApplicationSettings`](docs-api/api-highlo--ApplicationSettings.md#structhighlo_1_1_application_settings)` & `[`GetAppSettings`](#classhighlo_1_1utils_1_1_command_line_helper_ace2077c3fc8169a90c217af2c2c3324c_1ace2077c3fc8169a90c217af2c2c3324c)`()` {#classhighlo_1_1utils_1_1_command_line_helper_ace2077c3fc8169a90c217af2c2c3324c_1ace2077c3fc8169a90c217af2c2c3324c}

#### `public inline const `[`ApplicationSettings`](docs-api/api-highlo--ApplicationSettings.md#structhighlo_1_1_application_settings)` & `[`GetAppSettings`](#classhighlo_1_1utils_1_1_command_line_helper_ad5a69607f226cb7f0664adf6d283fed0_1ad5a69607f226cb7f0664adf6d283fed0)`() const` {#classhighlo_1_1utils_1_1_command_line_helper_ad5a69607f226cb7f0664adf6d283fed0_1ad5a69607f226cb7f0664adf6d283fed0}

#### `public inline std::vector< `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` > & `[`GetRawArguments`](#classhighlo_1_1utils_1_1_command_line_helper_a7a278415e1d40c16b2c3dcb5160a9dcd_1a7a278415e1d40c16b2c3dcb5160a9dcd)`()` {#classhighlo_1_1utils_1_1_command_line_helper_a7a278415e1d40c16b2c3dcb5160a9dcd_1a7a278415e1d40c16b2c3dcb5160a9dcd}

#### `public inline const std::vector< `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` > & `[`GetRawArguments`](#classhighlo_1_1utils_1_1_command_line_helper_a91dee714475e0ea449f1dc8d2a5007e5_1a91dee714475e0ea449f1dc8d2a5007e5)`() const` {#classhighlo_1_1utils_1_1_command_line_helper_a91dee714475e0ea449f1dc8d2a5007e5_1a91dee714475e0ea449f1dc8d2a5007e5}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Parse`](#classhighlo_1_1utils_1_1_command_line_helper_aa0c94a614fc3e28b2f09327999e24e65_1aa0c94a614fc3e28b2f09327999e24e65)`()` {#classhighlo_1_1utils_1_1_command_line_helper_aa0c94a614fc3e28b2f09327999e24e65_1aa0c94a614fc3e28b2f09327999e24e65}

#### `private std::vector< `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` > `[`m_Arguments`](#classhighlo_1_1utils_1_1_command_line_helper_1a11b6780dfa2b7db10b959ab1f88a43ef) {#classhighlo_1_1utils_1_1_command_line_helper_1a11b6780dfa2b7db10b959ab1f88a43ef}

#### `private bool `[`m_HelpFlag`](#classhighlo_1_1utils_1_1_command_line_helper_1abd2972a1595e94c674fe5f97713965b6) {#classhighlo_1_1utils_1_1_command_line_helper_1abd2972a1595e94c674fe5f97713965b6}

#### `private bool `[`m_VersionFlag`](#classhighlo_1_1utils_1_1_command_line_helper_1a5efe413fcb6061e553ba6f48cd89401d) {#classhighlo_1_1utils_1_1_command_line_helper_1a5efe413fcb6061e553ba6f48cd89401d}

#### `private `[`ApplicationSettings`](docs-api/api-highlo--ApplicationSettings.md#structhighlo_1_1_application_settings)` `[`m_Settings`](#classhighlo_1_1utils_1_1_command_line_helper_1a22907a66cff158cfbcd2c8165ae6a012) {#classhighlo_1_1utils_1_1_command_line_helper_1a22907a66cff158cfbcd2c8165ae6a012}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ResetStates`](#classhighlo_1_1utils_1_1_command_line_helper_1af643b90c5bc2645da12053e17c76f972)`()` {#classhighlo_1_1utils_1_1_command_line_helper_1af643b90c5bc2645da12053e17c76f972}

