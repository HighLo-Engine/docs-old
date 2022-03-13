## class `highlo::Font` {#classhighlo_1_1_font}

```
class highlo::Font
  : public highlo::Asset
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Font`](#classhighlo_1_1_font_a2e81ec471388ed0c61e5c2228cdd5435_1a2e81ec471388ed0c61e5c2228cdd5435)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & path)` | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Font`](#classhighlo_1_1_font_a066ee60bf985eca558181ef2e07caed5_1a066ee60bf985eca558181ef2e07caed5)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & `[`GetTextureAtlas`](#classhighlo_1_1_font_a73498d6305f8b2163bcd39f6777e33a2_1a73498d6305f8b2163bcd39f6777e33a2)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & `[`GetTextureAtlas`](#classhighlo_1_1_font_a8f230465028bc5d042fa14340acec710_1a8f230465028bc5d042fa14340acec710)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[MSDFData`](docs-api/api-highlo--MSDFData.md#structhighlo_1_1_m_s_d_f_data)` * `[`GetMSDFData`](#classhighlo_1_1_font_a6ff7178564494fcc24f57812368a95ee_1a6ff7178564494fcc24f57812368a95ee)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [MSDFData`](docs-api/api-highlo--MSDFData.md#structhighlo_1_1_m_s_d_f_data)` * `[`GetMSDFData`](#classhighlo_1_1_font_a3acc5aeeaf6268915171dcc1e59aa5e7_1a3acc5aeeaf6268915171dcc1e59aa5e7)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetName`](#classhighlo_1_1_font_a4fc45e304941819cf751b3de4591f193_1a4fc45e304941819cf751b3de4591f193)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetName`](#classhighlo_1_1_font_a101d02815a6221c4d3945fb3f7d0268c_1a101d02815a6221c4d3945fb3f7d0268c)`() const` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_font_ae82ac35820135e06404d5e469da71538_1ae82ac35820135e06404d5e469da71538)`() const` | 
`private `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`m_FilePath`](#classhighlo_1_1_font_1ab855ff7c5ea8a7d125c9f1a2b67d328b) | 
`private `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`m_FontName`](#classhighlo_1_1_font_1a04d5c1960e63a910184b66e65b1ccead) | 
`private `[`MSDFData`](docs-api/api-highlo--MSDFData.md#structhighlo_1_1_m_s_d_f_data)` * `[`m_MSDFData`](#classhighlo_1_1_font_1a56faadc13060d176462d289c1c5df124) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_TextureAtlas`](#classhighlo_1_1_font_1a2456bac99aa3fbd3998eb2a4ec42504e) | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_font_a02dbff24493e6980e50c2881925accf8_1a02dbff24493e6980e50c2881925accf8)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Font`](#classhighlo_1_1_font)` > `[`Create`](#classhighlo_1_1_font_a1a69dee68450f876d7a63f8e6109307c_1a1a69dee68450f876d7a63f8e6109307c)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & path)` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Font`](#classhighlo_1_1_font_a2e81ec471388ed0c61e5c2228cdd5435_1a2e81ec471388ed0c61e5c2228cdd5435)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & path)` {#classhighlo_1_1_font_a2e81ec471388ed0c61e5c2228cdd5435_1a2e81ec471388ed0c61e5c2228cdd5435}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Font`](#classhighlo_1_1_font_a066ee60bf985eca558181ef2e07caed5_1a066ee60bf985eca558181ef2e07caed5)`()` {#classhighlo_1_1_font_a066ee60bf985eca558181ef2e07caed5_1a066ee60bf985eca558181ef2e07caed5}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & `[`GetTextureAtlas`](#classhighlo_1_1_font_a73498d6305f8b2163bcd39f6777e33a2_1a73498d6305f8b2163bcd39f6777e33a2)`()` {#classhighlo_1_1_font_a73498d6305f8b2163bcd39f6777e33a2_1a73498d6305f8b2163bcd39f6777e33a2}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & `[`GetTextureAtlas`](#classhighlo_1_1_font_a8f230465028bc5d042fa14340acec710_1a8f230465028bc5d042fa14340acec710)`() const` {#classhighlo_1_1_font_a8f230465028bc5d042fa14340acec710_1a8f230465028bc5d042fa14340acec710}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[MSDFData`](docs-api/api-highlo--MSDFData.md#structhighlo_1_1_m_s_d_f_data)` * `[`GetMSDFData`](#classhighlo_1_1_font_a6ff7178564494fcc24f57812368a95ee_1a6ff7178564494fcc24f57812368a95ee)`()` {#classhighlo_1_1_font_a6ff7178564494fcc24f57812368a95ee_1a6ff7178564494fcc24f57812368a95ee}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [MSDFData`](docs-api/api-highlo--MSDFData.md#structhighlo_1_1_m_s_d_f_data)` * `[`GetMSDFData`](#classhighlo_1_1_font_a3acc5aeeaf6268915171dcc1e59aa5e7_1a3acc5aeeaf6268915171dcc1e59aa5e7)`() const` {#classhighlo_1_1_font_a3acc5aeeaf6268915171dcc1e59aa5e7_1a3acc5aeeaf6268915171dcc1e59aa5e7}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetName`](#classhighlo_1_1_font_a4fc45e304941819cf751b3de4591f193_1a4fc45e304941819cf751b3de4591f193)`()` {#classhighlo_1_1_font_a4fc45e304941819cf751b3de4591f193_1a4fc45e304941819cf751b3de4591f193}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetName`](#classhighlo_1_1_font_a101d02815a6221c4d3945fb3f7d0268c_1a101d02815a6221c4d3945fb3f7d0268c)`() const` {#classhighlo_1_1_font_a101d02815a6221c4d3945fb3f7d0268c_1a101d02815a6221c4d3945fb3f7d0268c}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_font_ae82ac35820135e06404d5e469da71538_1ae82ac35820135e06404d5e469da71538)`() const` {#classhighlo_1_1_font_ae82ac35820135e06404d5e469da71538_1ae82ac35820135e06404d5e469da71538}

#### `private `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`m_FilePath`](#classhighlo_1_1_font_1ab855ff7c5ea8a7d125c9f1a2b67d328b) {#classhighlo_1_1_font_1ab855ff7c5ea8a7d125c9f1a2b67d328b}

#### `private `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`m_FontName`](#classhighlo_1_1_font_1a04d5c1960e63a910184b66e65b1ccead) {#classhighlo_1_1_font_1a04d5c1960e63a910184b66e65b1ccead}

#### `private `[`MSDFData`](docs-api/api-highlo--MSDFData.md#structhighlo_1_1_m_s_d_f_data)` * `[`m_MSDFData`](#classhighlo_1_1_font_1a56faadc13060d176462d289c1c5df124) {#classhighlo_1_1_font_1a56faadc13060d176462d289c1c5df124}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_TextureAtlas`](#classhighlo_1_1_font_1a2456bac99aa3fbd3998eb2a4ec42504e) {#classhighlo_1_1_font_1a2456bac99aa3fbd3998eb2a4ec42504e}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_font_a02dbff24493e6980e50c2881925accf8_1a02dbff24493e6980e50c2881925accf8)`()` {#classhighlo_1_1_font_a02dbff24493e6980e50c2881925accf8_1a02dbff24493e6980e50c2881925accf8}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Font`](#classhighlo_1_1_font)` > `[`Create`](#classhighlo_1_1_font_a1a69dee68450f876d7a63f8e6109307c_1a1a69dee68450f876d7a63f8e6109307c)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & path)` {#classhighlo_1_1_font_a1a69dee68450f876d7a63f8e6109307c_1a1a69dee68450f876d7a63f8e6109307c}

