## class `highlo::Skybox` {#classhighlo_1_1_skybox}

```
class highlo::Skybox
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Skybox`](#classhighlo_1_1_skybox_a0fe431b7d760828d548c03abadf6bef7_1a0fe431b7d760828d548c03abadf6bef7)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture3D`](docs-api/api-highlo--Texture3D.md#classhighlo_1_1_texture3_d)` > & `[`GetTexture`](#classhighlo_1_1_skybox_ad7b34c438728eb520e25f144d9f42361_1ad7b34c438728eb520e25f144d9f42361)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetTexture`](#classhighlo_1_1_skybox_a576bfe655617624d7972001900a72dfc_1a576bfe655617624d7972001900a72dfc)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture3D`](docs-api/api-highlo--Texture3D.md#classhighlo_1_1_texture3_d)` > texture)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Render`](#classhighlo_1_1_skybox_aef8989aff9567dd40c8c394522cdc038_1aef8989aff9567dd40c8c394522cdc038)`(`[`ICamera`](docs-api/api-highlo--ICamera.md#classhighlo_1_1_i_camera)` & camera)` | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture3D`](docs-api/api-highlo--Texture3D.md#classhighlo_1_1_texture3_d)` > `[`m_Texture`](#classhighlo_1_1_skybox_1a6665b6c98d4550b1cb7084466b3900f3) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`m_Shader`](#classhighlo_1_1_skybox_1ac3c7b1eb70708058927f6ffcc81e32ca) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [StaticModel`](docs-api/api-highlo--StaticModel.md#classhighlo_1_1_static_model)` > `[`m_Mesh`](#classhighlo_1_1_skybox_1a38f8f2d8589766835072024924a34b4d) | 
`private VS_SceneData `[`m_SceneData`](#classhighlo_1_1_skybox_1a2664db760dbde2589b80b08954c0deee) | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Skybox`](#classhighlo_1_1_skybox)` > `[`Create`](#classhighlo_1_1_skybox_ab712996829069348f86d7b8223dbfd4e_1ab712996829069348f86d7b8223dbfd4e)`()` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Skybox`](#classhighlo_1_1_skybox_a0fe431b7d760828d548c03abadf6bef7_1a0fe431b7d760828d548c03abadf6bef7)`()` {#classhighlo_1_1_skybox_a0fe431b7d760828d548c03abadf6bef7_1a0fe431b7d760828d548c03abadf6bef7}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture3D`](docs-api/api-highlo--Texture3D.md#classhighlo_1_1_texture3_d)` > & `[`GetTexture`](#classhighlo_1_1_skybox_ad7b34c438728eb520e25f144d9f42361_1ad7b34c438728eb520e25f144d9f42361)`() const` {#classhighlo_1_1_skybox_ad7b34c438728eb520e25f144d9f42361_1ad7b34c438728eb520e25f144d9f42361}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetTexture`](#classhighlo_1_1_skybox_a576bfe655617624d7972001900a72dfc_1a576bfe655617624d7972001900a72dfc)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture3D`](docs-api/api-highlo--Texture3D.md#classhighlo_1_1_texture3_d)` > texture)` {#classhighlo_1_1_skybox_a576bfe655617624d7972001900a72dfc_1a576bfe655617624d7972001900a72dfc}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Render`](#classhighlo_1_1_skybox_aef8989aff9567dd40c8c394522cdc038_1aef8989aff9567dd40c8c394522cdc038)`(`[`ICamera`](docs-api/api-highlo--ICamera.md#classhighlo_1_1_i_camera)` & camera)` {#classhighlo_1_1_skybox_aef8989aff9567dd40c8c394522cdc038_1aef8989aff9567dd40c8c394522cdc038}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture3D`](docs-api/api-highlo--Texture3D.md#classhighlo_1_1_texture3_d)` > `[`m_Texture`](#classhighlo_1_1_skybox_1a6665b6c98d4550b1cb7084466b3900f3) {#classhighlo_1_1_skybox_1a6665b6c98d4550b1cb7084466b3900f3}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`m_Shader`](#classhighlo_1_1_skybox_1ac3c7b1eb70708058927f6ffcc81e32ca) {#classhighlo_1_1_skybox_1ac3c7b1eb70708058927f6ffcc81e32ca}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [StaticModel`](docs-api/api-highlo--StaticModel.md#classhighlo_1_1_static_model)` > `[`m_Mesh`](#classhighlo_1_1_skybox_1a38f8f2d8589766835072024924a34b4d) {#classhighlo_1_1_skybox_1a38f8f2d8589766835072024924a34b4d}

#### `private VS_SceneData `[`m_SceneData`](#classhighlo_1_1_skybox_1a2664db760dbde2589b80b08954c0deee) {#classhighlo_1_1_skybox_1a2664db760dbde2589b80b08954c0deee}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Skybox`](#classhighlo_1_1_skybox)` > `[`Create`](#classhighlo_1_1_skybox_ab712996829069348f86d7b8223dbfd4e_1ab712996829069348f86d7b8223dbfd4e)`()` {#classhighlo_1_1_skybox_ab712996829069348f86d7b8223dbfd4e_1ab712996829069348f86d7b8223dbfd4e}

