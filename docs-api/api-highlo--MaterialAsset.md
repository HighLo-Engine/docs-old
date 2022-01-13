## class `highlo::MaterialAsset` {#classhighlo_1_1_material_asset}

```
class highlo::MaterialAsset
  : public highlo::Asset
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MaterialAsset`](#classhighlo_1_1_material_asset_a934b275604901903f8605746d9a60094_1a934b275604901903f8605746d9a60094)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MaterialAsset`](#classhighlo_1_1_material_asset_acf88eb60d205eac1b196f5508e6e4616_1acf88eb60d205eac1b196f5508e6e4616)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > & material)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~MaterialAsset`](#classhighlo_1_1_material_asset_aa69ad012484a743e7e58e5313ea86d89_1aa69ad012484a743e7e58e5313ea86d89)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 & `[`GetDiffuseColor`](#classhighlo_1_1_material_asset_a1827bba3a3ee9775b559f1be6ed46cf5_1a1827bba3a3ee9775b559f1be6ed46cf5)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetDiffuseColor`](#classhighlo_1_1_material_asset_a2a42d30cd4111b39a7cca3ccb4d42ddf_1a2a42d30cd4111b39a7cca3ccb4d42ddf)`(const glm::vec3 & value)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float & `[`GetMetalness`](#classhighlo_1_1_material_asset_a1f0189468e8a72ddce9d5c98800a1e9b_1a1f0189468e8a72ddce9d5c98800a1e9b)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetMetalness`](#classhighlo_1_1_material_asset_a39aa38f532d0c2f91bfb5ebb91283fbd_1a39aa38f532d0c2f91bfb5ebb91283fbd)`(float value)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float & `[`GetRoughness`](#classhighlo_1_1_material_asset_a1c968bda72e7aeff4ef881a575ee8e66_1a1c968bda72e7aeff4ef881a575ee8e66)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRoughness`](#classhighlo_1_1_material_asset_ad1c264f92f12faa15bfcfcbc959b2bcb_1ad1c264f92f12faa15bfcfcbc959b2bcb)`(float value)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float & `[`GetEmission`](#classhighlo_1_1_material_asset_a4da6eac3d374dcd296c6a44de5891d28_1a4da6eac3d374dcd296c6a44de5891d28)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetEmission`](#classhighlo_1_1_material_asset_a2eccefc4b45d3f1ae99253721e667219_1a2eccefc4b45d3f1ae99253721e667219)`(float value)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetDiffuseMap`](#classhighlo_1_1_material_asset_ac31b3652340264958c2c17aaa3cd5f99_1ac31b3652340264958c2c17aaa3cd5f99)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetDiffuseMap`](#classhighlo_1_1_material_asset_ae8cd76e1871bf9cd37af8c404188890e_1ae8cd76e1871bf9cd37af8c404188890e)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & texture)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ClearDiffuseMap`](#classhighlo_1_1_material_asset_ae25d3f5ae0935b1490ada2cf0b198b8f_1ae25d3f5ae0935b1490ada2cf0b198b8f)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetNormalMap`](#classhighlo_1_1_material_asset_a1edd7fdedc8d578a5d65c3b9b0ef2e67_1a1edd7fdedc8d578a5d65c3b9b0ef2e67)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetNormalMap`](#classhighlo_1_1_material_asset_ae183ab4836e121f6da29caf51f9f035c_1ae183ab4836e121f6da29caf51f9f035c)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & texture)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ClearNormalMap`](#classhighlo_1_1_material_asset_a67f126825d66888bad45f646529fea66_1a67f126825d66888bad45f646529fea66)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsUsingNormalMap`](#classhighlo_1_1_material_asset_a674bb5f7802a252228165780789cf38e_1a674bb5f7802a252228165780789cf38e)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetUsingNormalMap`](#classhighlo_1_1_material_asset_ac52b5a7a0dd23243fe1d3a6cc1a2fb7f_1ac52b5a7a0dd23243fe1d3a6cc1a2fb7f)`(bool value)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetMetalnessMap`](#classhighlo_1_1_material_asset_a6b0e6d6fae64a96e58aba159031d5846_1a6b0e6d6fae64a96e58aba159031d5846)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetMetalnessMap`](#classhighlo_1_1_material_asset_a680748e2e1816080a52f781875466d7b_1a680748e2e1816080a52f781875466d7b)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & texture)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CleartMetalnessMap`](#classhighlo_1_1_material_asset_ae90f91d8057ab5c0122bcf1e3bb37be8_1ae90f91d8057ab5c0122bcf1e3bb37be8)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetRoughnessMap`](#classhighlo_1_1_material_asset_ad1f77e8afa733c5b39c88a452ddb875f_1ad1f77e8afa733c5b39c88a452ddb875f)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRoughnessMap`](#classhighlo_1_1_material_asset_aa03d12ada27358cd9bee54b1a6cd7b7f_1aa03d12ada27358cd9bee54b1a6cd7b7f)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & texture)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ClearRoughnessMap`](#classhighlo_1_1_material_asset_a22284898cef27dfdc6abc4260cea4d30_1a22284898cef27dfdc6abc4260cea4d30)`()` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_material_asset_a6135d1df8ca55d6d3f6bbd8533608b65_1a6135d1df8ca55d6d3f6bbd8533608b65)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > & `[`GetMaterial`](#classhighlo_1_1_material_asset_ab4b3f65166c3ed5f371fc460d64d1a29_1ab4b3f65166c3ed5f371fc460d64d1a29)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > & `[`GetMaterial`](#classhighlo_1_1_material_asset_a6939db7112b3a8c799d76b7ababa37fb_1a6939db7112b3a8c799d76b7ababa37fb)`() const` | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_Material`](#classhighlo_1_1_material_asset_1a832974bac51257296b2dd05a4f120161) | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_material_asset_ac14186193052d0fa12fbee0767e3baf2_1ac14186193052d0fa12fbee0767e3baf2)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialAsset`](#classhighlo_1_1_material_asset)` > `[`Create`](#classhighlo_1_1_material_asset_ad13d1cc49cf331055239be9b02d2c0a0_1ad13d1cc49cf331055239be9b02d2c0a0)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialAsset`](#classhighlo_1_1_material_asset)` > `[`Create`](#classhighlo_1_1_material_asset_a7d3452411a92bc1d2ce8eb1025754343_1a7d3452411a92bc1d2ce8eb1025754343)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > & material)` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MaterialAsset`](#classhighlo_1_1_material_asset_a934b275604901903f8605746d9a60094_1a934b275604901903f8605746d9a60094)`()` {#classhighlo_1_1_material_asset_a934b275604901903f8605746d9a60094_1a934b275604901903f8605746d9a60094}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MaterialAsset`](#classhighlo_1_1_material_asset_acf88eb60d205eac1b196f5508e6e4616_1acf88eb60d205eac1b196f5508e6e4616)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > & material)` {#classhighlo_1_1_material_asset_acf88eb60d205eac1b196f5508e6e4616_1acf88eb60d205eac1b196f5508e6e4616}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~MaterialAsset`](#classhighlo_1_1_material_asset_aa69ad012484a743e7e58e5313ea86d89_1aa69ad012484a743e7e58e5313ea86d89)`()` {#classhighlo_1_1_material_asset_aa69ad012484a743e7e58e5313ea86d89_1aa69ad012484a743e7e58e5313ea86d89}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 & `[`GetDiffuseColor`](#classhighlo_1_1_material_asset_a1827bba3a3ee9775b559f1be6ed46cf5_1a1827bba3a3ee9775b559f1be6ed46cf5)`()` {#classhighlo_1_1_material_asset_a1827bba3a3ee9775b559f1be6ed46cf5_1a1827bba3a3ee9775b559f1be6ed46cf5}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetDiffuseColor`](#classhighlo_1_1_material_asset_a2a42d30cd4111b39a7cca3ccb4d42ddf_1a2a42d30cd4111b39a7cca3ccb4d42ddf)`(const glm::vec3 & value)` {#classhighlo_1_1_material_asset_a2a42d30cd4111b39a7cca3ccb4d42ddf_1a2a42d30cd4111b39a7cca3ccb4d42ddf}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float & `[`GetMetalness`](#classhighlo_1_1_material_asset_a1f0189468e8a72ddce9d5c98800a1e9b_1a1f0189468e8a72ddce9d5c98800a1e9b)`()` {#classhighlo_1_1_material_asset_a1f0189468e8a72ddce9d5c98800a1e9b_1a1f0189468e8a72ddce9d5c98800a1e9b}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetMetalness`](#classhighlo_1_1_material_asset_a39aa38f532d0c2f91bfb5ebb91283fbd_1a39aa38f532d0c2f91bfb5ebb91283fbd)`(float value)` {#classhighlo_1_1_material_asset_a39aa38f532d0c2f91bfb5ebb91283fbd_1a39aa38f532d0c2f91bfb5ebb91283fbd}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float & `[`GetRoughness`](#classhighlo_1_1_material_asset_a1c968bda72e7aeff4ef881a575ee8e66_1a1c968bda72e7aeff4ef881a575ee8e66)`()` {#classhighlo_1_1_material_asset_a1c968bda72e7aeff4ef881a575ee8e66_1a1c968bda72e7aeff4ef881a575ee8e66}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRoughness`](#classhighlo_1_1_material_asset_ad1c264f92f12faa15bfcfcbc959b2bcb_1ad1c264f92f12faa15bfcfcbc959b2bcb)`(float value)` {#classhighlo_1_1_material_asset_ad1c264f92f12faa15bfcfcbc959b2bcb_1ad1c264f92f12faa15bfcfcbc959b2bcb}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float & `[`GetEmission`](#classhighlo_1_1_material_asset_a4da6eac3d374dcd296c6a44de5891d28_1a4da6eac3d374dcd296c6a44de5891d28)`()` {#classhighlo_1_1_material_asset_a4da6eac3d374dcd296c6a44de5891d28_1a4da6eac3d374dcd296c6a44de5891d28}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetEmission`](#classhighlo_1_1_material_asset_a2eccefc4b45d3f1ae99253721e667219_1a2eccefc4b45d3f1ae99253721e667219)`(float value)` {#classhighlo_1_1_material_asset_a2eccefc4b45d3f1ae99253721e667219_1a2eccefc4b45d3f1ae99253721e667219}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetDiffuseMap`](#classhighlo_1_1_material_asset_ac31b3652340264958c2c17aaa3cd5f99_1ac31b3652340264958c2c17aaa3cd5f99)`()` {#classhighlo_1_1_material_asset_ac31b3652340264958c2c17aaa3cd5f99_1ac31b3652340264958c2c17aaa3cd5f99}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetDiffuseMap`](#classhighlo_1_1_material_asset_ae8cd76e1871bf9cd37af8c404188890e_1ae8cd76e1871bf9cd37af8c404188890e)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & texture)` {#classhighlo_1_1_material_asset_ae8cd76e1871bf9cd37af8c404188890e_1ae8cd76e1871bf9cd37af8c404188890e}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ClearDiffuseMap`](#classhighlo_1_1_material_asset_ae25d3f5ae0935b1490ada2cf0b198b8f_1ae25d3f5ae0935b1490ada2cf0b198b8f)`()` {#classhighlo_1_1_material_asset_ae25d3f5ae0935b1490ada2cf0b198b8f_1ae25d3f5ae0935b1490ada2cf0b198b8f}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetNormalMap`](#classhighlo_1_1_material_asset_a1edd7fdedc8d578a5d65c3b9b0ef2e67_1a1edd7fdedc8d578a5d65c3b9b0ef2e67)`()` {#classhighlo_1_1_material_asset_a1edd7fdedc8d578a5d65c3b9b0ef2e67_1a1edd7fdedc8d578a5d65c3b9b0ef2e67}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetNormalMap`](#classhighlo_1_1_material_asset_ae183ab4836e121f6da29caf51f9f035c_1ae183ab4836e121f6da29caf51f9f035c)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & texture)` {#classhighlo_1_1_material_asset_ae183ab4836e121f6da29caf51f9f035c_1ae183ab4836e121f6da29caf51f9f035c}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ClearNormalMap`](#classhighlo_1_1_material_asset_a67f126825d66888bad45f646529fea66_1a67f126825d66888bad45f646529fea66)`()` {#classhighlo_1_1_material_asset_a67f126825d66888bad45f646529fea66_1a67f126825d66888bad45f646529fea66}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsUsingNormalMap`](#classhighlo_1_1_material_asset_a674bb5f7802a252228165780789cf38e_1a674bb5f7802a252228165780789cf38e)`()` {#classhighlo_1_1_material_asset_a674bb5f7802a252228165780789cf38e_1a674bb5f7802a252228165780789cf38e}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetUsingNormalMap`](#classhighlo_1_1_material_asset_ac52b5a7a0dd23243fe1d3a6cc1a2fb7f_1ac52b5a7a0dd23243fe1d3a6cc1a2fb7f)`(bool value)` {#classhighlo_1_1_material_asset_ac52b5a7a0dd23243fe1d3a6cc1a2fb7f_1ac52b5a7a0dd23243fe1d3a6cc1a2fb7f}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetMetalnessMap`](#classhighlo_1_1_material_asset_a6b0e6d6fae64a96e58aba159031d5846_1a6b0e6d6fae64a96e58aba159031d5846)`()` {#classhighlo_1_1_material_asset_a6b0e6d6fae64a96e58aba159031d5846_1a6b0e6d6fae64a96e58aba159031d5846}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetMetalnessMap`](#classhighlo_1_1_material_asset_a680748e2e1816080a52f781875466d7b_1a680748e2e1816080a52f781875466d7b)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & texture)` {#classhighlo_1_1_material_asset_a680748e2e1816080a52f781875466d7b_1a680748e2e1816080a52f781875466d7b}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CleartMetalnessMap`](#classhighlo_1_1_material_asset_ae90f91d8057ab5c0122bcf1e3bb37be8_1ae90f91d8057ab5c0122bcf1e3bb37be8)`()` {#classhighlo_1_1_material_asset_ae90f91d8057ab5c0122bcf1e3bb37be8_1ae90f91d8057ab5c0122bcf1e3bb37be8}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetRoughnessMap`](#classhighlo_1_1_material_asset_ad1f77e8afa733c5b39c88a452ddb875f_1ad1f77e8afa733c5b39c88a452ddb875f)`()` {#classhighlo_1_1_material_asset_ad1f77e8afa733c5b39c88a452ddb875f_1ad1f77e8afa733c5b39c88a452ddb875f}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRoughnessMap`](#classhighlo_1_1_material_asset_aa03d12ada27358cd9bee54b1a6cd7b7f_1aa03d12ada27358cd9bee54b1a6cd7b7f)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & texture)` {#classhighlo_1_1_material_asset_aa03d12ada27358cd9bee54b1a6cd7b7f_1aa03d12ada27358cd9bee54b1a6cd7b7f}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ClearRoughnessMap`](#classhighlo_1_1_material_asset_a22284898cef27dfdc6abc4260cea4d30_1a22284898cef27dfdc6abc4260cea4d30)`()` {#classhighlo_1_1_material_asset_a22284898cef27dfdc6abc4260cea4d30_1a22284898cef27dfdc6abc4260cea4d30}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_material_asset_a6135d1df8ca55d6d3f6bbd8533608b65_1a6135d1df8ca55d6d3f6bbd8533608b65)`() const` {#classhighlo_1_1_material_asset_a6135d1df8ca55d6d3f6bbd8533608b65_1a6135d1df8ca55d6d3f6bbd8533608b65}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > & `[`GetMaterial`](#classhighlo_1_1_material_asset_ab4b3f65166c3ed5f371fc460d64d1a29_1ab4b3f65166c3ed5f371fc460d64d1a29)`()` {#classhighlo_1_1_material_asset_ab4b3f65166c3ed5f371fc460d64d1a29_1ab4b3f65166c3ed5f371fc460d64d1a29}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > & `[`GetMaterial`](#classhighlo_1_1_material_asset_a6939db7112b3a8c799d76b7ababa37fb_1a6939db7112b3a8c799d76b7ababa37fb)`() const` {#classhighlo_1_1_material_asset_a6939db7112b3a8c799d76b7ababa37fb_1a6939db7112b3a8c799d76b7ababa37fb}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_Material`](#classhighlo_1_1_material_asset_1a832974bac51257296b2dd05a4f120161) {#classhighlo_1_1_material_asset_1a832974bac51257296b2dd05a4f120161}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_material_asset_ac14186193052d0fa12fbee0767e3baf2_1ac14186193052d0fa12fbee0767e3baf2)`()` {#classhighlo_1_1_material_asset_ac14186193052d0fa12fbee0767e3baf2_1ac14186193052d0fa12fbee0767e3baf2}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialAsset`](#classhighlo_1_1_material_asset)` > `[`Create`](#classhighlo_1_1_material_asset_ad13d1cc49cf331055239be9b02d2c0a0_1ad13d1cc49cf331055239be9b02d2c0a0)`()` {#classhighlo_1_1_material_asset_ad13d1cc49cf331055239be9b02d2c0a0_1ad13d1cc49cf331055239be9b02d2c0a0}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialAsset`](#classhighlo_1_1_material_asset)` > `[`Create`](#classhighlo_1_1_material_asset_a7d3452411a92bc1d2ce8eb1025754343_1a7d3452411a92bc1d2ce8eb1025754343)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > & material)` {#classhighlo_1_1_material_asset_a7d3452411a92bc1d2ce8eb1025754343_1a7d3452411a92bc1d2ce8eb1025754343}
