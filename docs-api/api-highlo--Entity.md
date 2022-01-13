## class `highlo::Entity` {#classhighlo_1_1_entity}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Entity`](#classhighlo_1_1_entity_a9e7b1ba29340203d7390fd2f2577c0cd_1a9e7b1ba29340203d7390fd2f2577c0cd)`() = default` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Entity`](#classhighlo_1_1_entity_a1a0effca0e6e3b49c9c9d542f8c66814_1a1a0effca0e6e3b49c9c9d542f8c66814)`(`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` sceneID,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & tag)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Entity`](#classhighlo_1_1_entity_a292e3f2041ac686b35d3c36cdb923a2e_1a292e3f2041ac686b35d3c36cdb923a2e)`(`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` sceneID,`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` entityID)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Entity`](#classhighlo_1_1_entity_ace67463b0a5e9f9fa7e36e6011f39a09_1ace67463b0a5e9f9fa7e36e6011f39a09)`(const `[`Entity`](#classhighlo_1_1_entity)` & other)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Entity`](#classhighlo_1_1_entity)` `[`operator=`](#classhighlo_1_1_entity_a66901245b4b136fb2f897d3bdc40a6fb_1a66901245b4b136fb2f897d3bdc40a6fb)`(const `[`Entity`](#classhighlo_1_1_entity)` & other)` | 
`public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T * `[`AddComponent`](#classhighlo_1_1_entity_a9cd9531bbb6459f7ff7b56573e5fb084_1a9cd9531bbb6459f7ff7b56573e5fb084)`()` | 
`public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T * `[`GetComponent`](#classhighlo_1_1_entity_a39f215d4935c687c37434ddc83fb7c21_1a39f215d4935c687c37434ddc83fb7c21)`() const` | 
`public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasComponent`](#classhighlo_1_1_entity_a86a2a1a3de8504084854957065089e7f_1a86a2a1a3de8504084854957065089e7f)`() const` | 
`public template<>`  <br/>`inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RemoveComponent`](#classhighlo_1_1_entity_aba19b5c7a122aca2c5465605712876bd_1aba19b5c7a122aca2c5465605712876bd)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` `[`GetUUID`](#classhighlo_1_1_entity_a4dd20f7a2ea7751b6baf6e6a9524fd1c_1a4dd20f7a2ea7751b6baf6e6a9524fd1c)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetTransform`](#classhighlo_1_1_entity_a039743869d8d524d78f9224fea92eb5c_1a039743869d8d524d78f9224fea92eb5c)`(const `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & transform)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & `[`Transform`](#classhighlo_1_1_entity_a815a4deac84f1168ebc8884c72089eca_1a815a4deac84f1168ebc8884c72089eca)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [highlo::Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & `[`Transform`](#classhighlo_1_1_entity_ab7cbef60b3269e2b925340f395a7fd70_1ab7cbef60b3269e2b925340f395a7fd70)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`Tag`](#classhighlo_1_1_entity_a600992892d75bb9ba00799bbde96fda6_1a600992892d75bb9ba00799bbde96fda6)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetParent`](#classhighlo_1_1_entity_a97d03f7d781d9fb7885d0fd4ec6cf5fe_1a97d03f7d781d9fb7885d0fd4ec6cf5fe)`(`[`Entity`](#classhighlo_1_1_entity)` other)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` > & `[`Children`](#classhighlo_1_1_entity_ad65d0408d807afe72dfe04d91d4f33ab_1ad65d0408d807afe72dfe04d91d4f33ab)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const std::vector< [UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` > & `[`Children`](#classhighlo_1_1_entity_a91f8c47b51b8ba88beabda7a5a031773_1a91f8c47b51b8ba88beabda7a5a031773)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetParentUUID`](#classhighlo_1_1_entity_a08728c4329d42cbf9ca76744cbfd0706_1a08728c4329d42cbf9ca76744cbfd0706)`(`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` uuid)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` `[`GetParentUUID`](#classhighlo_1_1_entity_a8c8b3dea1ba0e846e79801e2d33e4cd4_1a8c8b3dea1ba0e846e79801e2d33e4cd4)`() const` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasParent`](#classhighlo_1_1_entity_a66a80618ec200c5e9b1848339fd77cf3_1a66a80618ec200c5e9b1848339fd77cf3)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Entity`](#classhighlo_1_1_entity)` `[`GetParent`](#classhighlo_1_1_entity_aee82e858a6afb0afd792301cfccdb343_1aee82e858a6afb0afd792301cfccdb343)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`RemoveChild`](#classhighlo_1_1_entity_aa8f127af507949d1a6d7dd6d64d2016d_1aa8f127af507949d1a6d7dd6d64d2016d)`(`[`Entity`](#classhighlo_1_1_entity)` child)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsAncesterOf`](#classhighlo_1_1_entity_a46a2b8bd11dcc279dd851d134f4a6665_1a46a2b8bd11dcc279dd851d134f4a6665)`(`[`Entity`](#classhighlo_1_1_entity)` other)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsDescendantOf`](#classhighlo_1_1_entity_a3c6ff8358a6504b3fbd83a5bae1b563d_1a3c6ff8358a6504b3fbd83a5bae1b563d)`(`[`Entity`](#classhighlo_1_1_entity)` other)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#classhighlo_1_1_entity_a55d287b940f77a16112817806eb09191_1a55d287b940f77a16112817806eb09191)`(const `[`Entity`](#classhighlo_1_1_entity)` & other) const` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#classhighlo_1_1_entity_ac9edae7cd9669cd1a464fbd61a72b83f_1ac9edae7cd9669cd1a464fbd61a72b83f)`(const `[`Entity`](#classhighlo_1_1_entity)` & other) const` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator bool`](#classhighlo_1_1_entity_a3b4c8c079b2e3a2a28b3d77736d8e6a4_1a3b4c8c079b2e3a2a28b3d77736d8e6a4)`() const` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator uint64`](#classhighlo_1_1_entity_ab9efcaeeb93fb5a2202b9a2cf88985e2_1ab9efcaeeb93fb5a2202b9a2cf88985e2)`() const` | 
`private bool `[`m_Initialized`](#classhighlo_1_1_entity_1a9f936ac32ee8b34a7d8f0a3507269091) | 
`private `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`m_Tag`](#classhighlo_1_1_entity_1afc82c61f7f12f3cefb7a40aa6eb4c990) | 
`private const `[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` `[`m_ID`](#classhighlo_1_1_entity_1ae447a36824ada86e561f0ebf759ac1c9) | 
`private `[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` `[`m_SceneID`](#classhighlo_1_1_entity_1af5b2e3c17c31a5cca95c6e78bfa6d5dd) | 
`private `[`TransformComponent`](docs-api/api-highlo--TransformComponent.md#structhighlo_1_1_transform_component)` * `[`m_TransformComponent`](#classhighlo_1_1_entity_1ac2eb6abed68e485f084c920d803d8792) | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Entity`](#classhighlo_1_1_entity_a9e7b1ba29340203d7390fd2f2577c0cd_1a9e7b1ba29340203d7390fd2f2577c0cd)`() = default` {#classhighlo_1_1_entity_a9e7b1ba29340203d7390fd2f2577c0cd_1a9e7b1ba29340203d7390fd2f2577c0cd}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Entity`](#classhighlo_1_1_entity_a1a0effca0e6e3b49c9c9d542f8c66814_1a1a0effca0e6e3b49c9c9d542f8c66814)`(`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` sceneID,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & tag)` {#classhighlo_1_1_entity_a1a0effca0e6e3b49c9c9d542f8c66814_1a1a0effca0e6e3b49c9c9d542f8c66814}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Entity`](#classhighlo_1_1_entity_a292e3f2041ac686b35d3c36cdb923a2e_1a292e3f2041ac686b35d3c36cdb923a2e)`(`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` sceneID,`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` entityID)` {#classhighlo_1_1_entity_a292e3f2041ac686b35d3c36cdb923a2e_1a292e3f2041ac686b35d3c36cdb923a2e}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Entity`](#classhighlo_1_1_entity_ace67463b0a5e9f9fa7e36e6011f39a09_1ace67463b0a5e9f9fa7e36e6011f39a09)`(const `[`Entity`](#classhighlo_1_1_entity)` & other)` {#classhighlo_1_1_entity_ace67463b0a5e9f9fa7e36e6011f39a09_1ace67463b0a5e9f9fa7e36e6011f39a09}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Entity`](#classhighlo_1_1_entity)` `[`operator=`](#classhighlo_1_1_entity_a66901245b4b136fb2f897d3bdc40a6fb_1a66901245b4b136fb2f897d3bdc40a6fb)`(const `[`Entity`](#classhighlo_1_1_entity)` & other)` {#classhighlo_1_1_entity_a66901245b4b136fb2f897d3bdc40a6fb_1a66901245b4b136fb2f897d3bdc40a6fb}

#### `public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T * `[`AddComponent`](#classhighlo_1_1_entity_a9cd9531bbb6459f7ff7b56573e5fb084_1a9cd9531bbb6459f7ff7b56573e5fb084)`()` {#classhighlo_1_1_entity_a9cd9531bbb6459f7ff7b56573e5fb084_1a9cd9531bbb6459f7ff7b56573e5fb084}

#### `public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T * `[`GetComponent`](#classhighlo_1_1_entity_a39f215d4935c687c37434ddc83fb7c21_1a39f215d4935c687c37434ddc83fb7c21)`() const` {#classhighlo_1_1_entity_a39f215d4935c687c37434ddc83fb7c21_1a39f215d4935c687c37434ddc83fb7c21}

#### `public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasComponent`](#classhighlo_1_1_entity_a86a2a1a3de8504084854957065089e7f_1a86a2a1a3de8504084854957065089e7f)`() const` {#classhighlo_1_1_entity_a86a2a1a3de8504084854957065089e7f_1a86a2a1a3de8504084854957065089e7f}

#### `public template<>`  <br/>`inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RemoveComponent`](#classhighlo_1_1_entity_aba19b5c7a122aca2c5465605712876bd_1aba19b5c7a122aca2c5465605712876bd)`()` {#classhighlo_1_1_entity_aba19b5c7a122aca2c5465605712876bd_1aba19b5c7a122aca2c5465605712876bd}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` `[`GetUUID`](#classhighlo_1_1_entity_a4dd20f7a2ea7751b6baf6e6a9524fd1c_1a4dd20f7a2ea7751b6baf6e6a9524fd1c)`() const` {#classhighlo_1_1_entity_a4dd20f7a2ea7751b6baf6e6a9524fd1c_1a4dd20f7a2ea7751b6baf6e6a9524fd1c}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetTransform`](#classhighlo_1_1_entity_a039743869d8d524d78f9224fea92eb5c_1a039743869d8d524d78f9224fea92eb5c)`(const `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & transform)` {#classhighlo_1_1_entity_a039743869d8d524d78f9224fea92eb5c_1a039743869d8d524d78f9224fea92eb5c}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & `[`Transform`](#classhighlo_1_1_entity_a815a4deac84f1168ebc8884c72089eca_1a815a4deac84f1168ebc8884c72089eca)`()` {#classhighlo_1_1_entity_a815a4deac84f1168ebc8884c72089eca_1a815a4deac84f1168ebc8884c72089eca}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [highlo::Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & `[`Transform`](#classhighlo_1_1_entity_ab7cbef60b3269e2b925340f395a7fd70_1ab7cbef60b3269e2b925340f395a7fd70)`() const` {#classhighlo_1_1_entity_ab7cbef60b3269e2b925340f395a7fd70_1ab7cbef60b3269e2b925340f395a7fd70}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`Tag`](#classhighlo_1_1_entity_a600992892d75bb9ba00799bbde96fda6_1a600992892d75bb9ba00799bbde96fda6)`() const` {#classhighlo_1_1_entity_a600992892d75bb9ba00799bbde96fda6_1a600992892d75bb9ba00799bbde96fda6}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetParent`](#classhighlo_1_1_entity_a97d03f7d781d9fb7885d0fd4ec6cf5fe_1a97d03f7d781d9fb7885d0fd4ec6cf5fe)`(`[`Entity`](#classhighlo_1_1_entity)` other)` {#classhighlo_1_1_entity_a97d03f7d781d9fb7885d0fd4ec6cf5fe_1a97d03f7d781d9fb7885d0fd4ec6cf5fe}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) std::vector< [UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` > & `[`Children`](#classhighlo_1_1_entity_ad65d0408d807afe72dfe04d91d4f33ab_1ad65d0408d807afe72dfe04d91d4f33ab)`()` {#classhighlo_1_1_entity_ad65d0408d807afe72dfe04d91d4f33ab_1ad65d0408d807afe72dfe04d91d4f33ab}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const std::vector< [UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` > & `[`Children`](#classhighlo_1_1_entity_a91f8c47b51b8ba88beabda7a5a031773_1a91f8c47b51b8ba88beabda7a5a031773)`() const` {#classhighlo_1_1_entity_a91f8c47b51b8ba88beabda7a5a031773_1a91f8c47b51b8ba88beabda7a5a031773}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetParentUUID`](#classhighlo_1_1_entity_a08728c4329d42cbf9ca76744cbfd0706_1a08728c4329d42cbf9ca76744cbfd0706)`(`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` uuid)` {#classhighlo_1_1_entity_a08728c4329d42cbf9ca76744cbfd0706_1a08728c4329d42cbf9ca76744cbfd0706}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` `[`GetParentUUID`](#classhighlo_1_1_entity_a8c8b3dea1ba0e846e79801e2d33e4cd4_1a8c8b3dea1ba0e846e79801e2d33e4cd4)`() const` {#classhighlo_1_1_entity_a8c8b3dea1ba0e846e79801e2d33e4cd4_1a8c8b3dea1ba0e846e79801e2d33e4cd4}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasParent`](#classhighlo_1_1_entity_a66a80618ec200c5e9b1848339fd77cf3_1a66a80618ec200c5e9b1848339fd77cf3)`() const` {#classhighlo_1_1_entity_a66a80618ec200c5e9b1848339fd77cf3_1a66a80618ec200c5e9b1848339fd77cf3}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Entity`](#classhighlo_1_1_entity)` `[`GetParent`](#classhighlo_1_1_entity_aee82e858a6afb0afd792301cfccdb343_1aee82e858a6afb0afd792301cfccdb343)`()` {#classhighlo_1_1_entity_aee82e858a6afb0afd792301cfccdb343_1aee82e858a6afb0afd792301cfccdb343}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`RemoveChild`](#classhighlo_1_1_entity_aa8f127af507949d1a6d7dd6d64d2016d_1aa8f127af507949d1a6d7dd6d64d2016d)`(`[`Entity`](#classhighlo_1_1_entity)` child)` {#classhighlo_1_1_entity_aa8f127af507949d1a6d7dd6d64d2016d_1aa8f127af507949d1a6d7dd6d64d2016d}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsAncesterOf`](#classhighlo_1_1_entity_a46a2b8bd11dcc279dd851d134f4a6665_1a46a2b8bd11dcc279dd851d134f4a6665)`(`[`Entity`](#classhighlo_1_1_entity)` other)` {#classhighlo_1_1_entity_a46a2b8bd11dcc279dd851d134f4a6665_1a46a2b8bd11dcc279dd851d134f4a6665}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsDescendantOf`](#classhighlo_1_1_entity_a3c6ff8358a6504b3fbd83a5bae1b563d_1a3c6ff8358a6504b3fbd83a5bae1b563d)`(`[`Entity`](#classhighlo_1_1_entity)` other)` {#classhighlo_1_1_entity_a3c6ff8358a6504b3fbd83a5bae1b563d_1a3c6ff8358a6504b3fbd83a5bae1b563d}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#classhighlo_1_1_entity_a55d287b940f77a16112817806eb09191_1a55d287b940f77a16112817806eb09191)`(const `[`Entity`](#classhighlo_1_1_entity)` & other) const` {#classhighlo_1_1_entity_a55d287b940f77a16112817806eb09191_1a55d287b940f77a16112817806eb09191}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#classhighlo_1_1_entity_ac9edae7cd9669cd1a464fbd61a72b83f_1ac9edae7cd9669cd1a464fbd61a72b83f)`(const `[`Entity`](#classhighlo_1_1_entity)` & other) const` {#classhighlo_1_1_entity_ac9edae7cd9669cd1a464fbd61a72b83f_1ac9edae7cd9669cd1a464fbd61a72b83f}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator bool`](#classhighlo_1_1_entity_a3b4c8c079b2e3a2a28b3d77736d8e6a4_1a3b4c8c079b2e3a2a28b3d77736d8e6a4)`() const` {#classhighlo_1_1_entity_a3b4c8c079b2e3a2a28b3d77736d8e6a4_1a3b4c8c079b2e3a2a28b3d77736d8e6a4}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator uint64`](#classhighlo_1_1_entity_ab9efcaeeb93fb5a2202b9a2cf88985e2_1ab9efcaeeb93fb5a2202b9a2cf88985e2)`() const` {#classhighlo_1_1_entity_ab9efcaeeb93fb5a2202b9a2cf88985e2_1ab9efcaeeb93fb5a2202b9a2cf88985e2}

#### `private bool `[`m_Initialized`](#classhighlo_1_1_entity_1a9f936ac32ee8b34a7d8f0a3507269091) {#classhighlo_1_1_entity_1a9f936ac32ee8b34a7d8f0a3507269091}

#### `private `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`m_Tag`](#classhighlo_1_1_entity_1afc82c61f7f12f3cefb7a40aa6eb4c990) {#classhighlo_1_1_entity_1afc82c61f7f12f3cefb7a40aa6eb4c990}

#### `private const `[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` `[`m_ID`](#classhighlo_1_1_entity_1ae447a36824ada86e561f0ebf759ac1c9) {#classhighlo_1_1_entity_1ae447a36824ada86e561f0ebf759ac1c9}

#### `private `[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` `[`m_SceneID`](#classhighlo_1_1_entity_1af5b2e3c17c31a5cca95c6e78bfa6d5dd) {#classhighlo_1_1_entity_1af5b2e3c17c31a5cca95c6e78bfa6d5dd}

#### `private `[`TransformComponent`](docs-api/api-highlo--TransformComponent.md#structhighlo_1_1_transform_component)` * `[`m_TransformComponent`](#classhighlo_1_1_entity_1ac2eb6abed68e485f084c920d803d8792) {#classhighlo_1_1_entity_1ac2eb6abed68e485f084c920d803d8792}

