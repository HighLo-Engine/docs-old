## class `highlo::Camera` {#classhighlo_1_1_camera}

```
class highlo::Camera
  : public highlo::ICamera
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Camera`](#classhighlo_1_1_camera_a919a688398fa726d7816e9dfad3db31f_1a919a688398fa726d7816e9dfad3db31f)`()` | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Camera`](#classhighlo_1_1_camera_a9e31bdfba7d765b3de0f876801eb701d_1a9e31bdfba7d765b3de0f876801eb701d)`() = default` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPerspective`](#classhighlo_1_1_camera_aa90d1df444dfe544a844fd5d8bf178fe_1aa90d1df444dfe544a844fd5d8bf178fe)`(float verticalFOV,float nearClip,float farClip)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographic`](#classhighlo_1_1_camera_ac91491edef8d3ce4689826dbb22b46ed_1ac91491edef8d3ce4689826dbb22b46ed)`(float width,float height,float size,float nearClip,float farClip)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographic`](#classhighlo_1_1_camera_a40fc866b31b280e3bcddd7697d056e19_1a40fc866b31b280e3bcddd7697d056e19)`(float size,float nearClip,float farClip)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewportSize`](#classhighlo_1_1_camera_a40ca2c24da9c86a0c519257d5bd2345c_1a40ca2c24da9c86a0c519257d5bd2345c)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPerspectiveFOV`](#classhighlo_1_1_camera_ad9d536aeae34b042cd164d2cfe160c1f_1ad9d536aeae34b042cd164d2cfe160c1f)`(float fov)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPerspectiveNearPlane`](#classhighlo_1_1_camera_a346d106352fc568167b82e90ef7d6400_1a346d106352fc568167b82e90ef7d6400)`(float nearPlane)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPerspectiveFarPlane`](#classhighlo_1_1_camera_ad20bb781e4a1f1623dda4b966b2797e5_1ad20bb781e4a1f1623dda4b966b2797e5)`(float farPlane)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographicSize`](#classhighlo_1_1_camera_a46bcf5271032c1496fbd64d6d599b8d8_1a46bcf5271032c1496fbd64d6d599b8d8)`(float size)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographicNearPlane`](#classhighlo_1_1_camera_a880f6ec0019a91ec387b96966b5214e3_1a880f6ec0019a91ec387b96966b5214e3)`(float nearPlane)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographicFarPlane`](#classhighlo_1_1_camera_ab5f3513ff713336c851671cfb96554c7_1ab5f3513ff713336c851671cfb96554c7)`(float farPlane)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetPerspectiveFOV`](#classhighlo_1_1_camera_aee7638876fd82f9781eb864b55fdf6dd_1aee7638876fd82f9781eb864b55fdf6dd)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetPerspectiveNearPlane`](#classhighlo_1_1_camera_a8101421c844996d5f3ab4a86c67acc8b_1a8101421c844996d5f3ab4a86c67acc8b)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetPerspectiveFarPlane`](#classhighlo_1_1_camera_ada6079cc29f851ab4a71d52585021c71_1ada6079cc29f851ab4a71d52585021c71)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetOrthographicSize`](#classhighlo_1_1_camera_adaaf79d8560b3a17ec66e703627672ad_1adaaf79d8560b3a17ec66e703627672ad)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetOrthographicNearPlane`](#classhighlo_1_1_camera_af724828ba03d0287dbb4e01032500921_1af724828ba03d0287dbb4e01032500921)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetOrthographicFarPlane`](#classhighlo_1_1_camera_aa2bb21a4a2c4f35dca5760f0731de385_1aa2bb21a4a2c4f35dca5760f0731de385)`() const` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`GetDirectionVectors`](#classhighlo_1_1_camera_aec79a41278020c5cfc65a870a933e48a_1aec79a41278020c5cfc65a870a933e48a)`(glm::vec3 & front,glm::vec3 & up,glm::vec3 & left)` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_camera_a27f62d1acaf156c12b8e869216439130_1a27f62d1acaf156c12b8e869216439130)`()` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_camera_a7bf46fbb5e67a58e364884e2fa4649ca_1a7bf46fbb5e67a58e364884e2fa4649ca)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_camera_a5b92f75417c5da4993bafc26f9326a24_1a5b92f75417c5da4993bafc26f9326a24)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` | 
`enum `[`ProjectionType`](#classhighlo_1_1_camera_a451c9140e17355eed5a4e89493c26bfa_1a451c9140e17355eed5a4e89493c26bfa) | 
`private `[`ProjectionType`](#classhighlo_1_1_camera_a451c9140e17355eed5a4e89493c26bfa_1a451c9140e17355eed5a4e89493c26bfa)` `[`m_ProjectionType`](#classhighlo_1_1_camera_1af7692694421607234d734310846b9f32) | 
`private float `[`m_PerspectiveFOV`](#classhighlo_1_1_camera_1ad14071a90896addd47335eb351b13753) | 
`private float `[`m_PerspectiveNear`](#classhighlo_1_1_camera_1a59ec95b0eafbf2796236ddc162649cb9) | 
`private float `[`m_PerspecticeFar`](#classhighlo_1_1_camera_1a2e6ba6bace69d0a81ebf1252871b894a) | 
`private float `[`m_OrthographicSize`](#classhighlo_1_1_camera_1a9938c3f35addc66dcaa89d54bc5d9c58) | 
`private float `[`m_OrthographicNear`](#classhighlo_1_1_camera_1a7cfa5ca92bca55b3cec71e34ed0a06df) | 
`private float `[`m_OrthographicFar`](#classhighlo_1_1_camera_1ac0f7f054128b9c31b743d914e4c9e869) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetProjectionInternal`](#classhighlo_1_1_camera_1a80ec6fbbe751915589ad5ae20f2cc6a8)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Camera`](#classhighlo_1_1_camera_a919a688398fa726d7816e9dfad3db31f_1a919a688398fa726d7816e9dfad3db31f)`()` {#classhighlo_1_1_camera_a919a688398fa726d7816e9dfad3db31f_1a919a688398fa726d7816e9dfad3db31f}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Camera`](#classhighlo_1_1_camera_a9e31bdfba7d765b3de0f876801eb701d_1a9e31bdfba7d765b3de0f876801eb701d)`() = default` {#classhighlo_1_1_camera_a9e31bdfba7d765b3de0f876801eb701d_1a9e31bdfba7d765b3de0f876801eb701d}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPerspective`](#classhighlo_1_1_camera_aa90d1df444dfe544a844fd5d8bf178fe_1aa90d1df444dfe544a844fd5d8bf178fe)`(float verticalFOV,float nearClip,float farClip)` {#classhighlo_1_1_camera_aa90d1df444dfe544a844fd5d8bf178fe_1aa90d1df444dfe544a844fd5d8bf178fe}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographic`](#classhighlo_1_1_camera_ac91491edef8d3ce4689826dbb22b46ed_1ac91491edef8d3ce4689826dbb22b46ed)`(float width,float height,float size,float nearClip,float farClip)` {#classhighlo_1_1_camera_ac91491edef8d3ce4689826dbb22b46ed_1ac91491edef8d3ce4689826dbb22b46ed}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographic`](#classhighlo_1_1_camera_a40fc866b31b280e3bcddd7697d056e19_1a40fc866b31b280e3bcddd7697d056e19)`(float size,float nearClip,float farClip)` {#classhighlo_1_1_camera_a40fc866b31b280e3bcddd7697d056e19_1a40fc866b31b280e3bcddd7697d056e19}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewportSize`](#classhighlo_1_1_camera_a40ca2c24da9c86a0c519257d5bd2345c_1a40ca2c24da9c86a0c519257d5bd2345c)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_camera_a40ca2c24da9c86a0c519257d5bd2345c_1a40ca2c24da9c86a0c519257d5bd2345c}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPerspectiveFOV`](#classhighlo_1_1_camera_ad9d536aeae34b042cd164d2cfe160c1f_1ad9d536aeae34b042cd164d2cfe160c1f)`(float fov)` {#classhighlo_1_1_camera_ad9d536aeae34b042cd164d2cfe160c1f_1ad9d536aeae34b042cd164d2cfe160c1f}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPerspectiveNearPlane`](#classhighlo_1_1_camera_a346d106352fc568167b82e90ef7d6400_1a346d106352fc568167b82e90ef7d6400)`(float nearPlane)` {#classhighlo_1_1_camera_a346d106352fc568167b82e90ef7d6400_1a346d106352fc568167b82e90ef7d6400}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPerspectiveFarPlane`](#classhighlo_1_1_camera_ad20bb781e4a1f1623dda4b966b2797e5_1ad20bb781e4a1f1623dda4b966b2797e5)`(float farPlane)` {#classhighlo_1_1_camera_ad20bb781e4a1f1623dda4b966b2797e5_1ad20bb781e4a1f1623dda4b966b2797e5}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographicSize`](#classhighlo_1_1_camera_a46bcf5271032c1496fbd64d6d599b8d8_1a46bcf5271032c1496fbd64d6d599b8d8)`(float size)` {#classhighlo_1_1_camera_a46bcf5271032c1496fbd64d6d599b8d8_1a46bcf5271032c1496fbd64d6d599b8d8}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographicNearPlane`](#classhighlo_1_1_camera_a880f6ec0019a91ec387b96966b5214e3_1a880f6ec0019a91ec387b96966b5214e3)`(float nearPlane)` {#classhighlo_1_1_camera_a880f6ec0019a91ec387b96966b5214e3_1a880f6ec0019a91ec387b96966b5214e3}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographicFarPlane`](#classhighlo_1_1_camera_ab5f3513ff713336c851671cfb96554c7_1ab5f3513ff713336c851671cfb96554c7)`(float farPlane)` {#classhighlo_1_1_camera_ab5f3513ff713336c851671cfb96554c7_1ab5f3513ff713336c851671cfb96554c7}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetPerspectiveFOV`](#classhighlo_1_1_camera_aee7638876fd82f9781eb864b55fdf6dd_1aee7638876fd82f9781eb864b55fdf6dd)`() const` {#classhighlo_1_1_camera_aee7638876fd82f9781eb864b55fdf6dd_1aee7638876fd82f9781eb864b55fdf6dd}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetPerspectiveNearPlane`](#classhighlo_1_1_camera_a8101421c844996d5f3ab4a86c67acc8b_1a8101421c844996d5f3ab4a86c67acc8b)`() const` {#classhighlo_1_1_camera_a8101421c844996d5f3ab4a86c67acc8b_1a8101421c844996d5f3ab4a86c67acc8b}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetPerspectiveFarPlane`](#classhighlo_1_1_camera_ada6079cc29f851ab4a71d52585021c71_1ada6079cc29f851ab4a71d52585021c71)`() const` {#classhighlo_1_1_camera_ada6079cc29f851ab4a71d52585021c71_1ada6079cc29f851ab4a71d52585021c71}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetOrthographicSize`](#classhighlo_1_1_camera_adaaf79d8560b3a17ec66e703627672ad_1adaaf79d8560b3a17ec66e703627672ad)`() const` {#classhighlo_1_1_camera_adaaf79d8560b3a17ec66e703627672ad_1adaaf79d8560b3a17ec66e703627672ad}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetOrthographicNearPlane`](#classhighlo_1_1_camera_af724828ba03d0287dbb4e01032500921_1af724828ba03d0287dbb4e01032500921)`() const` {#classhighlo_1_1_camera_af724828ba03d0287dbb4e01032500921_1af724828ba03d0287dbb4e01032500921}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetOrthographicFarPlane`](#classhighlo_1_1_camera_aa2bb21a4a2c4f35dca5760f0731de385_1aa2bb21a4a2c4f35dca5760f0731de385)`() const` {#classhighlo_1_1_camera_aa2bb21a4a2c4f35dca5760f0731de385_1aa2bb21a4a2c4f35dca5760f0731de385}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`GetDirectionVectors`](#classhighlo_1_1_camera_aec79a41278020c5cfc65a870a933e48a_1aec79a41278020c5cfc65a870a933e48a)`(glm::vec3 & front,glm::vec3 & up,glm::vec3 & left)` {#classhighlo_1_1_camera_aec79a41278020c5cfc65a870a933e48a_1aec79a41278020c5cfc65a870a933e48a}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_camera_a27f62d1acaf156c12b8e869216439130_1a27f62d1acaf156c12b8e869216439130)`()` {#classhighlo_1_1_camera_a27f62d1acaf156c12b8e869216439130_1a27f62d1acaf156c12b8e869216439130}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_camera_a7bf46fbb5e67a58e364884e2fa4649ca_1a7bf46fbb5e67a58e364884e2fa4649ca)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_camera_a7bf46fbb5e67a58e364884e2fa4649ca_1a7bf46fbb5e67a58e364884e2fa4649ca}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_camera_a5b92f75417c5da4993bafc26f9326a24_1a5b92f75417c5da4993bafc26f9326a24)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` {#classhighlo_1_1_camera_a5b92f75417c5da4993bafc26f9326a24_1a5b92f75417c5da4993bafc26f9326a24}

#### `enum `[`ProjectionType`](#classhighlo_1_1_camera_a451c9140e17355eed5a4e89493c26bfa_1a451c9140e17355eed5a4e89493c26bfa) {#classhighlo_1_1_camera_a451c9140e17355eed5a4e89493c26bfa_1a451c9140e17355eed5a4e89493c26bfa}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
Perspective            | 
Orthographic            | 

#### `private `[`ProjectionType`](#classhighlo_1_1_camera_a451c9140e17355eed5a4e89493c26bfa_1a451c9140e17355eed5a4e89493c26bfa)` `[`m_ProjectionType`](#classhighlo_1_1_camera_1af7692694421607234d734310846b9f32) {#classhighlo_1_1_camera_1af7692694421607234d734310846b9f32}

#### `private float `[`m_PerspectiveFOV`](#classhighlo_1_1_camera_1ad14071a90896addd47335eb351b13753) {#classhighlo_1_1_camera_1ad14071a90896addd47335eb351b13753}

#### `private float `[`m_PerspectiveNear`](#classhighlo_1_1_camera_1a59ec95b0eafbf2796236ddc162649cb9) {#classhighlo_1_1_camera_1a59ec95b0eafbf2796236ddc162649cb9}

#### `private float `[`m_PerspecticeFar`](#classhighlo_1_1_camera_1a2e6ba6bace69d0a81ebf1252871b894a) {#classhighlo_1_1_camera_1a2e6ba6bace69d0a81ebf1252871b894a}

#### `private float `[`m_OrthographicSize`](#classhighlo_1_1_camera_1a9938c3f35addc66dcaa89d54bc5d9c58) {#classhighlo_1_1_camera_1a9938c3f35addc66dcaa89d54bc5d9c58}

#### `private float `[`m_OrthographicNear`](#classhighlo_1_1_camera_1a7cfa5ca92bca55b3cec71e34ed0a06df) {#classhighlo_1_1_camera_1a7cfa5ca92bca55b3cec71e34ed0a06df}

#### `private float `[`m_OrthographicFar`](#classhighlo_1_1_camera_1ac0f7f054128b9c31b743d914e4c9e869) {#classhighlo_1_1_camera_1ac0f7f054128b9c31b743d914e4c9e869}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetProjectionInternal`](#classhighlo_1_1_camera_1a80ec6fbbe751915589ad5ae20f2cc6a8)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_camera_1a80ec6fbbe751915589ad5ae20f2cc6a8}

