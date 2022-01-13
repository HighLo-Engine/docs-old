## class `highlo::BufferLayout` {#classhighlo_1_1_buffer_layout}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`BufferLayout`](#classhighlo_1_1_buffer_layout_ae8aafbfb61fcc29f9ff37d4eac6bae35_1ae8aafbfb61fcc29f9ff37d4eac6bae35)`()` | 
`public inline  `[`BufferLayout`](#classhighlo_1_1_buffer_layout_a5e24ced52dbc16c0b4daafe19d92d0d2_1a5e24ced52dbc16c0b4daafe19d92d0d2)`(const std::initializer_list< `[`BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` > & elements)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetStride`](#classhighlo_1_1_buffer_layout_a4853957e44acfbfc7adb792dad0db3ba_1a4853957e44acfbfc7adb792dad0db3ba)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` > & `[`GetElements`](#classhighlo_1_1_buffer_layout_a144a00013c8c5e5b4766194bcd8847fc_1a144a00013c8c5e5b4766194bcd8847fc)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetElementCount`](#classhighlo_1_1_buffer_layout_a4f558396f9659fa6680de28c63296822_1a4f558396f9659fa6680de28c63296822)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` >::iterator `[`begin`](#classhighlo_1_1_buffer_layout_aa9a2af136225aec45dbd46d20c7a36bb_1aa9a2af136225aec45dbd46d20c7a36bb)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` >::iterator `[`end`](#classhighlo_1_1_buffer_layout_a7bfb45f13fea5f37c03d79425b07c813_1a7bfb45f13fea5f37c03d79425b07c813)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` >::const_iterator `[`begin`](#classhighlo_1_1_buffer_layout_ad62bfb9e69cb0edf8c097142252e059a_1ad62bfb9e69cb0edf8c097142252e059a)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` >::const_iterator `[`end`](#classhighlo_1_1_buffer_layout_aa1c63e145ec6b7ea7e4b4d857a2a8e3d_1aa1c63e145ec6b7ea7e4b4d857a2a8e3d)`() const` | 
`private std::vector< `[`BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` > `[`m_Elements`](#classhighlo_1_1_buffer_layout_1af3032e07956a3ed5391632e483f585a5) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_Stride`](#classhighlo_1_1_buffer_layout_1a0546feed94ce7541abe65ee4ae18a0e5) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CalculateOffsetsAndStride`](#classhighlo_1_1_buffer_layout_1a0dbc31051dc08b8893728b8a29c4d561)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetTextureLayout`](#classhighlo_1_1_buffer_layout_ae113c3d955c44aa37de2c5b3d635eb2e_1ae113c3d955c44aa37de2c5b3d635eb2e)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetLineLayout`](#classhighlo_1_1_buffer_layout_a93d03ee1db390134e23d2e804ccf80df_1a93d03ee1db390134e23d2e804ccf80df)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetCircleLayout`](#classhighlo_1_1_buffer_layout_addf99f5d74a3c49f76ab64c18163cac9_1addf99f5d74a3c49f76ab64c18163cac9)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetTextLayout`](#classhighlo_1_1_buffer_layout_aea1eb90144ed3fc7237f391f50314beb_1aea1eb90144ed3fc7237f391f50314beb)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetStaticShaderLayout`](#classhighlo_1_1_buffer_layout_abcf45748d37789734c787e58e573ad62_1abcf45748d37789734c787e58e573ad62)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetAnimatedShaderLayout`](#classhighlo_1_1_buffer_layout_ab248fca6e7c7d1208d93fdccfc07de61_1ab248fca6e7c7d1208d93fdccfc07de61)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetSkyboxLayout`](#classhighlo_1_1_buffer_layout_aa9f742e9c9a51e98fbea775a1809fc09_1aa9f742e9c9a51e98fbea775a1809fc09)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetGridLayout`](#classhighlo_1_1_buffer_layout_a630a27777cb2392983b529ced77dcedd_1a630a27777cb2392983b529ced77dcedd)`()` | 

### Members

#### `public inline  `[`BufferLayout`](#classhighlo_1_1_buffer_layout_ae8aafbfb61fcc29f9ff37d4eac6bae35_1ae8aafbfb61fcc29f9ff37d4eac6bae35)`()` {#classhighlo_1_1_buffer_layout_ae8aafbfb61fcc29f9ff37d4eac6bae35_1ae8aafbfb61fcc29f9ff37d4eac6bae35}

#### `public inline  `[`BufferLayout`](#classhighlo_1_1_buffer_layout_a5e24ced52dbc16c0b4daafe19d92d0d2_1a5e24ced52dbc16c0b4daafe19d92d0d2)`(const std::initializer_list< `[`BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` > & elements)` {#classhighlo_1_1_buffer_layout_a5e24ced52dbc16c0b4daafe19d92d0d2_1a5e24ced52dbc16c0b4daafe19d92d0d2}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetStride`](#classhighlo_1_1_buffer_layout_a4853957e44acfbfc7adb792dad0db3ba_1a4853957e44acfbfc7adb792dad0db3ba)`() const` {#classhighlo_1_1_buffer_layout_a4853957e44acfbfc7adb792dad0db3ba_1a4853957e44acfbfc7adb792dad0db3ba}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` > & `[`GetElements`](#classhighlo_1_1_buffer_layout_a144a00013c8c5e5b4766194bcd8847fc_1a144a00013c8c5e5b4766194bcd8847fc)`() const` {#classhighlo_1_1_buffer_layout_a144a00013c8c5e5b4766194bcd8847fc_1a144a00013c8c5e5b4766194bcd8847fc}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetElementCount`](#classhighlo_1_1_buffer_layout_a4f558396f9659fa6680de28c63296822_1a4f558396f9659fa6680de28c63296822)`() const` {#classhighlo_1_1_buffer_layout_a4f558396f9659fa6680de28c63296822_1a4f558396f9659fa6680de28c63296822}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` >::iterator `[`begin`](#classhighlo_1_1_buffer_layout_aa9a2af136225aec45dbd46d20c7a36bb_1aa9a2af136225aec45dbd46d20c7a36bb)`()` {#classhighlo_1_1_buffer_layout_aa9a2af136225aec45dbd46d20c7a36bb_1aa9a2af136225aec45dbd46d20c7a36bb}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` >::iterator `[`end`](#classhighlo_1_1_buffer_layout_a7bfb45f13fea5f37c03d79425b07c813_1a7bfb45f13fea5f37c03d79425b07c813)`()` {#classhighlo_1_1_buffer_layout_a7bfb45f13fea5f37c03d79425b07c813_1a7bfb45f13fea5f37c03d79425b07c813}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` >::const_iterator `[`begin`](#classhighlo_1_1_buffer_layout_ad62bfb9e69cb0edf8c097142252e059a_1ad62bfb9e69cb0edf8c097142252e059a)`() const` {#classhighlo_1_1_buffer_layout_ad62bfb9e69cb0edf8c097142252e059a_1ad62bfb9e69cb0edf8c097142252e059a}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` >::const_iterator `[`end`](#classhighlo_1_1_buffer_layout_aa1c63e145ec6b7ea7e4b4d857a2a8e3d_1aa1c63e145ec6b7ea7e4b4d857a2a8e3d)`() const` {#classhighlo_1_1_buffer_layout_aa1c63e145ec6b7ea7e4b4d857a2a8e3d_1aa1c63e145ec6b7ea7e4b4d857a2a8e3d}

#### `private std::vector< `[`BufferElement`](docs-api/api-highlo--BufferElement.md#structhighlo_1_1_buffer_element)` > `[`m_Elements`](#classhighlo_1_1_buffer_layout_1af3032e07956a3ed5391632e483f585a5) {#classhighlo_1_1_buffer_layout_1af3032e07956a3ed5391632e483f585a5}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_Stride`](#classhighlo_1_1_buffer_layout_1a0546feed94ce7541abe65ee4ae18a0e5) {#classhighlo_1_1_buffer_layout_1a0546feed94ce7541abe65ee4ae18a0e5}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CalculateOffsetsAndStride`](#classhighlo_1_1_buffer_layout_1a0dbc31051dc08b8893728b8a29c4d561)`()` {#classhighlo_1_1_buffer_layout_1a0dbc31051dc08b8893728b8a29c4d561}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetTextureLayout`](#classhighlo_1_1_buffer_layout_ae113c3d955c44aa37de2c5b3d635eb2e_1ae113c3d955c44aa37de2c5b3d635eb2e)`()` {#classhighlo_1_1_buffer_layout_ae113c3d955c44aa37de2c5b3d635eb2e_1ae113c3d955c44aa37de2c5b3d635eb2e}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetLineLayout`](#classhighlo_1_1_buffer_layout_a93d03ee1db390134e23d2e804ccf80df_1a93d03ee1db390134e23d2e804ccf80df)`()` {#classhighlo_1_1_buffer_layout_a93d03ee1db390134e23d2e804ccf80df_1a93d03ee1db390134e23d2e804ccf80df}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetCircleLayout`](#classhighlo_1_1_buffer_layout_addf99f5d74a3c49f76ab64c18163cac9_1addf99f5d74a3c49f76ab64c18163cac9)`()` {#classhighlo_1_1_buffer_layout_addf99f5d74a3c49f76ab64c18163cac9_1addf99f5d74a3c49f76ab64c18163cac9}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetTextLayout`](#classhighlo_1_1_buffer_layout_aea1eb90144ed3fc7237f391f50314beb_1aea1eb90144ed3fc7237f391f50314beb)`()` {#classhighlo_1_1_buffer_layout_aea1eb90144ed3fc7237f391f50314beb_1aea1eb90144ed3fc7237f391f50314beb}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetStaticShaderLayout`](#classhighlo_1_1_buffer_layout_abcf45748d37789734c787e58e573ad62_1abcf45748d37789734c787e58e573ad62)`()` {#classhighlo_1_1_buffer_layout_abcf45748d37789734c787e58e573ad62_1abcf45748d37789734c787e58e573ad62}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetAnimatedShaderLayout`](#classhighlo_1_1_buffer_layout_ab248fca6e7c7d1208d93fdccfc07de61_1ab248fca6e7c7d1208d93fdccfc07de61)`()` {#classhighlo_1_1_buffer_layout_ab248fca6e7c7d1208d93fdccfc07de61_1ab248fca6e7c7d1208d93fdccfc07de61}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetSkyboxLayout`](#classhighlo_1_1_buffer_layout_aa9f742e9c9a51e98fbea775a1809fc09_1aa9f742e9c9a51e98fbea775a1809fc09)`()` {#classhighlo_1_1_buffer_layout_aa9f742e9c9a51e98fbea775a1809fc09_1aa9f742e9c9a51e98fbea775a1809fc09}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BufferLayout`](#classhighlo_1_1_buffer_layout)` `[`GetGridLayout`](#classhighlo_1_1_buffer_layout_a630a27777cb2392983b529ced77dcedd_1a630a27777cb2392983b529ced77dcedd)`()` {#classhighlo_1_1_buffer_layout_a630a27777cb2392983b529ced77dcedd_1a630a27777cb2392983b529ced77dcedd}

