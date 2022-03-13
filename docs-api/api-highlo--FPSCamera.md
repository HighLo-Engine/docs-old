## class `highlo::FPSCamera` {#classhighlo_1_1_f_p_s_camera}

```
class highlo::FPSCamera
  : public highlo::Camera
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FPSCamera`](#classhighlo_1_1_f_p_s_camera_a81302635a77668189dcc6cf73e8c9271_1a81302635a77668189dcc6cf73e8c9271)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FPSCamera`](#classhighlo_1_1_f_p_s_camera_a3a7da0746237c28cb3962a23f6e650dc_1a3a7da0746237c28cb3962a23f6e650dc)`(const glm::mat4 & projectionMatrix)` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_f_p_s_camera_a776da84cd6c5754e3bfc1fb8220b32ac_1a776da84cd6c5754e3bfc1fb8220b32ac)`()` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_f_p_s_camera_a57bf852cf5df22d29c699c40982babac_1a57bf852cf5df22d29c699c40982babac)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_f_p_s_camera_ab7551e2300c6998f32117b5d19775cae_1ab7551e2300c6998f32117b5d19775cae)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewportSize`](#classhighlo_1_1_f_p_s_camera_a4bc5b2a442e206d658428ac5fed64008_1a4bc5b2a442e206d658428ac5fed64008)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetUpDirection`](#classhighlo_1_1_f_p_s_camera_aa5e723fd4fc5a09ed44e5fd0313b55c8_1aa5e723fd4fc5a09ed44e5fd0313b55c8)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetRightDirection`](#classhighlo_1_1_f_p_s_camera_a78d4e6a4b00f95b933fddb3bba24004b_1a78d4e6a4b00f95b933fddb3bba24004b)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetForwardDirection`](#classhighlo_1_1_f_p_s_camera_ace5e756707dfc4c83b8709f32601f69a_1ace5e756707dfc4c83b8709f32601f69a)`()` | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportWidth`](#classhighlo_1_1_f_p_s_camera_1afd2265338bab0753ff200af90fb5e686) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportHeight`](#classhighlo_1_1_f_p_s_camera_1a1ee960ca667f7a4c1efa0a22e6a4e2cf) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`UpdateCameraView`](#classhighlo_1_1_f_p_s_camera_1a3fdec27384352ecc73f896bd56629deb)`()` | 
`private float `[`MovementSpeed`](#classhighlo_1_1_f_p_s_camera_1a196845f601166e914ddc98df20b7ea4e)`() const` | 
`private float `[`RotationSpeed`](#classhighlo_1_1_f_p_s_camera_1a84e2f5ad5e6bba2f6c9704603e298a53)`() const` | 
`private float `[`RunningSpeed`](#classhighlo_1_1_f_p_s_camera_1ac5f9763c452adaee9d1883715a8bda0e)`() const` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FPSCamera`](#classhighlo_1_1_f_p_s_camera_a81302635a77668189dcc6cf73e8c9271_1a81302635a77668189dcc6cf73e8c9271)`()` {#classhighlo_1_1_f_p_s_camera_a81302635a77668189dcc6cf73e8c9271_1a81302635a77668189dcc6cf73e8c9271}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FPSCamera`](#classhighlo_1_1_f_p_s_camera_a3a7da0746237c28cb3962a23f6e650dc_1a3a7da0746237c28cb3962a23f6e650dc)`(const glm::mat4 & projectionMatrix)` {#classhighlo_1_1_f_p_s_camera_a3a7da0746237c28cb3962a23f6e650dc_1a3a7da0746237c28cb3962a23f6e650dc}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_f_p_s_camera_a776da84cd6c5754e3bfc1fb8220b32ac_1a776da84cd6c5754e3bfc1fb8220b32ac)`()` {#classhighlo_1_1_f_p_s_camera_a776da84cd6c5754e3bfc1fb8220b32ac_1a776da84cd6c5754e3bfc1fb8220b32ac}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_f_p_s_camera_a57bf852cf5df22d29c699c40982babac_1a57bf852cf5df22d29c699c40982babac)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` {#classhighlo_1_1_f_p_s_camera_a57bf852cf5df22d29c699c40982babac_1a57bf852cf5df22d29c699c40982babac}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_f_p_s_camera_ab7551e2300c6998f32117b5d19775cae_1ab7551e2300c6998f32117b5d19775cae)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_f_p_s_camera_ab7551e2300c6998f32117b5d19775cae_1ab7551e2300c6998f32117b5d19775cae}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewportSize`](#classhighlo_1_1_f_p_s_camera_a4bc5b2a442e206d658428ac5fed64008_1a4bc5b2a442e206d658428ac5fed64008)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_f_p_s_camera_a4bc5b2a442e206d658428ac5fed64008_1a4bc5b2a442e206d658428ac5fed64008}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetUpDirection`](#classhighlo_1_1_f_p_s_camera_aa5e723fd4fc5a09ed44e5fd0313b55c8_1aa5e723fd4fc5a09ed44e5fd0313b55c8)`()` {#classhighlo_1_1_f_p_s_camera_aa5e723fd4fc5a09ed44e5fd0313b55c8_1aa5e723fd4fc5a09ed44e5fd0313b55c8}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetRightDirection`](#classhighlo_1_1_f_p_s_camera_a78d4e6a4b00f95b933fddb3bba24004b_1a78d4e6a4b00f95b933fddb3bba24004b)`()` {#classhighlo_1_1_f_p_s_camera_a78d4e6a4b00f95b933fddb3bba24004b_1a78d4e6a4b00f95b933fddb3bba24004b}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetForwardDirection`](#classhighlo_1_1_f_p_s_camera_ace5e756707dfc4c83b8709f32601f69a_1ace5e756707dfc4c83b8709f32601f69a)`()` {#classhighlo_1_1_f_p_s_camera_ace5e756707dfc4c83b8709f32601f69a_1ace5e756707dfc4c83b8709f32601f69a}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportWidth`](#classhighlo_1_1_f_p_s_camera_1afd2265338bab0753ff200af90fb5e686) {#classhighlo_1_1_f_p_s_camera_1afd2265338bab0753ff200af90fb5e686}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportHeight`](#classhighlo_1_1_f_p_s_camera_1a1ee960ca667f7a4c1efa0a22e6a4e2cf) {#classhighlo_1_1_f_p_s_camera_1a1ee960ca667f7a4c1efa0a22e6a4e2cf}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`UpdateCameraView`](#classhighlo_1_1_f_p_s_camera_1a3fdec27384352ecc73f896bd56629deb)`()` {#classhighlo_1_1_f_p_s_camera_1a3fdec27384352ecc73f896bd56629deb}

#### `private float `[`MovementSpeed`](#classhighlo_1_1_f_p_s_camera_1a196845f601166e914ddc98df20b7ea4e)`() const` {#classhighlo_1_1_f_p_s_camera_1a196845f601166e914ddc98df20b7ea4e}

#### `private float `[`RotationSpeed`](#classhighlo_1_1_f_p_s_camera_1a84e2f5ad5e6bba2f6c9704603e298a53)`() const` {#classhighlo_1_1_f_p_s_camera_1a84e2f5ad5e6bba2f6c9704603e298a53}

#### `private float `[`RunningSpeed`](#classhighlo_1_1_f_p_s_camera_1ac5f9763c452adaee9d1883715a8bda0e)`() const` {#classhighlo_1_1_f_p_s_camera_1ac5f9763c452adaee9d1883715a8bda0e}

