## class `highlo::EditorCamera` {#classhighlo_1_1_editor_camera}

```
class highlo::EditorCamera
  : public highlo::Camera
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`EditorCamera`](#classhighlo_1_1_editor_camera_a073d46f35863ca9b00f1ae44fef0edab_1a073d46f35863ca9b00f1ae44fef0edab)`() = default` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`EditorCamera`](#classhighlo_1_1_editor_camera_ae20ada074ffbbdfcda2977d060422c63_1ae20ada074ffbbdfcda2977d060422c63)`(const glm::mat4 & projectionMatrix)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetActive`](#classhighlo_1_1_editor_camera_a6557e6d191038b9b8b58cc1dbb5d2972_1a6557e6d191038b9b8b58cc1dbb5d2972)`(bool active)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`GetActive`](#classhighlo_1_1_editor_camera_a6c7768896ae89ea3274b1691139d3c00_1a6c7768896ae89ea3274b1691139d3c00)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Focus`](#classhighlo_1_1_editor_camera_a6d81d3d80847eaad7be0db2b1ace6e35_1a6d81d3d80847eaad7be0db2b1ace6e35)`(const glm::vec3 & focusPoint)` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_editor_camera_a1735b4d36fd0a9d98b5a5abd51daaac3_1a1735b4d36fd0a9d98b5a5abd51daaac3)`()` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_editor_camera_a7a4c58ab815cc22a36be86d8f548f692_1a7a4c58ab815cc22a36be86d8f548f692)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_editor_camera_a24ebbbf4032f577f8c38d51dec1044a7_1a24ebbbf4032f577f8c38d51dec1044a7)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetDistance`](#classhighlo_1_1_editor_camera_af73576c346d95df31a1071cfd826fa52_1af73576c346d95df31a1071cfd826fa52)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetDistance`](#classhighlo_1_1_editor_camera_ac5e739bba3fc9f56ed87beb2f248b4eb_1ac5e739bba3fc9f56ed87beb2f248b4eb)`(float distance)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetProjection`](#classhighlo_1_1_editor_camera_a19d82a3b477b95f690af38f7ae3a2df1_1a19d82a3b477b95f690af38f7ae3a2df1)`(const glm::mat4 & projection)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetUpDirection`](#classhighlo_1_1_editor_camera_a877ecb6f160faba72767ebec265c33a1_1a877ecb6f160faba72767ebec265c33a1)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetRightDirection`](#classhighlo_1_1_editor_camera_ade0ed6b87c66e40fad635f9b14d7e8a7_1ade0ed6b87c66e40fad635f9b14d7e8a7)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetForwardDirection`](#classhighlo_1_1_editor_camera_ace4544c4646dc54691610a65989f86a9_1ace4544c4646dc54691610a65989f86a9)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::quat `[`GetOrientation`](#classhighlo_1_1_editor_camera_a13c397d59766dab7d5e1f61094bd1607_1a13c397d59766dab7d5e1f61094bd1607)`() const` | 
`private glm::vec3 `[`m_Rotation`](#classhighlo_1_1_editor_camera_1ac3324812758942f7948ca1cb848585f5) | 
`private glm::vec3 `[`m_FocalPoint`](#classhighlo_1_1_editor_camera_1a85794e90438e2f59ceeea06d7c4bc204) | 
`private bool `[`m_Panning`](#classhighlo_1_1_editor_camera_1a31ccdaf56954e6e365fa859791c491e2) | 
`private bool `[`m_Rotating`](#classhighlo_1_1_editor_camera_1a434000b1eb170369fc38d1a4a1290541) | 
`private bool `[`m_Active`](#classhighlo_1_1_editor_camera_1a4e2230aab867a37cd537b4946fa6f922) | 
`private glm::vec2 `[`m_InitialMousePosition`](#classhighlo_1_1_editor_camera_1ac031463ec31a08fa3886ae975acfd6f3) | 
`private glm::vec3 `[`m_InitialFocalPoint`](#classhighlo_1_1_editor_camera_1a488d93de49916fa71ca5d52788aa8524) | 
`private glm::vec3 `[`m_InitialRotation`](#classhighlo_1_1_editor_camera_1a2939373655e2b0e875682361e19cad12) | 
`private float `[`m_Distance`](#classhighlo_1_1_editor_camera_1a9e145f36b09dc710f1fe5222d5854ae6) | 
`private float `[`m_MinFocusDistance`](#classhighlo_1_1_editor_camera_1ae4601247ad58cc438f1ac2adb29344de) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportWidth`](#classhighlo_1_1_editor_camera_1ab8bc9b8fe3c07fe571cd37e5347f43e3) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportHeight`](#classhighlo_1_1_editor_camera_1ad4cf01a1a713d39a68009ec260638f30) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`UpdateCameraView`](#classhighlo_1_1_editor_camera_1ae967006970a0fbc3b09e7a47f3001f08)`()` | 
`private bool `[`OnMouseScrolled`](#classhighlo_1_1_editor_camera_1a3d53c06b50e506e5cc22e612c25e8b13)`(`[`MouseScrolledEvent`](docs-api/api-highlo--MouseScrolledEvent.md#classhighlo_1_1_mouse_scrolled_event)` & e)` | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`MousePan`](#classhighlo_1_1_editor_camera_1a875549ad29e452ca38f28a2237b54a9c)`(const glm::vec2 & delta)` | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`MouseRotate`](#classhighlo_1_1_editor_camera_1ab443271d27b514d10522f3ae109db543)`(const glm::vec2 & delta)` | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`MouseZoom`](#classhighlo_1_1_editor_camera_1a732147c5bddeb5213cea99ccf169f87d)`(float delta)` | 
`private glm::vec3 `[`CalculatePosition`](#classhighlo_1_1_editor_camera_1a431d3ddf7b029e68e4e74343b78722b3)`()` | 
`private std::pair< float, float > `[`PanSpeed`](#classhighlo_1_1_editor_camera_1a3401d9ea6e2f2c37b3479329034d9f69)`() const` | 
`private float `[`RotationSpeed`](#classhighlo_1_1_editor_camera_1af46c565cddf1d6563ff71e248b2c8bb5)`() const` | 
`private float `[`ZoomSpeed`](#classhighlo_1_1_editor_camera_1ac0c21533655cd4c1b2100c19dd82ece1)`() const` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`EditorCamera`](#classhighlo_1_1_editor_camera_a073d46f35863ca9b00f1ae44fef0edab_1a073d46f35863ca9b00f1ae44fef0edab)`() = default` {#classhighlo_1_1_editor_camera_a073d46f35863ca9b00f1ae44fef0edab_1a073d46f35863ca9b00f1ae44fef0edab}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`EditorCamera`](#classhighlo_1_1_editor_camera_ae20ada074ffbbdfcda2977d060422c63_1ae20ada074ffbbdfcda2977d060422c63)`(const glm::mat4 & projectionMatrix)` {#classhighlo_1_1_editor_camera_ae20ada074ffbbdfcda2977d060422c63_1ae20ada074ffbbdfcda2977d060422c63}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetActive`](#classhighlo_1_1_editor_camera_a6557e6d191038b9b8b58cc1dbb5d2972_1a6557e6d191038b9b8b58cc1dbb5d2972)`(bool active)` {#classhighlo_1_1_editor_camera_a6557e6d191038b9b8b58cc1dbb5d2972_1a6557e6d191038b9b8b58cc1dbb5d2972}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`GetActive`](#classhighlo_1_1_editor_camera_a6c7768896ae89ea3274b1691139d3c00_1a6c7768896ae89ea3274b1691139d3c00)`() const` {#classhighlo_1_1_editor_camera_a6c7768896ae89ea3274b1691139d3c00_1a6c7768896ae89ea3274b1691139d3c00}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Focus`](#classhighlo_1_1_editor_camera_a6d81d3d80847eaad7be0db2b1ace6e35_1a6d81d3d80847eaad7be0db2b1ace6e35)`(const glm::vec3 & focusPoint)` {#classhighlo_1_1_editor_camera_a6d81d3d80847eaad7be0db2b1ace6e35_1a6d81d3d80847eaad7be0db2b1ace6e35}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_editor_camera_a1735b4d36fd0a9d98b5a5abd51daaac3_1a1735b4d36fd0a9d98b5a5abd51daaac3)`()` {#classhighlo_1_1_editor_camera_a1735b4d36fd0a9d98b5a5abd51daaac3_1a1735b4d36fd0a9d98b5a5abd51daaac3}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_editor_camera_a7a4c58ab815cc22a36be86d8f548f692_1a7a4c58ab815cc22a36be86d8f548f692)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_editor_camera_a7a4c58ab815cc22a36be86d8f548f692_1a7a4c58ab815cc22a36be86d8f548f692}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_editor_camera_a24ebbbf4032f577f8c38d51dec1044a7_1a24ebbbf4032f577f8c38d51dec1044a7)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` {#classhighlo_1_1_editor_camera_a24ebbbf4032f577f8c38d51dec1044a7_1a24ebbbf4032f577f8c38d51dec1044a7}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetDistance`](#classhighlo_1_1_editor_camera_af73576c346d95df31a1071cfd826fa52_1af73576c346d95df31a1071cfd826fa52)`() const` {#classhighlo_1_1_editor_camera_af73576c346d95df31a1071cfd826fa52_1af73576c346d95df31a1071cfd826fa52}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetDistance`](#classhighlo_1_1_editor_camera_ac5e739bba3fc9f56ed87beb2f248b4eb_1ac5e739bba3fc9f56ed87beb2f248b4eb)`(float distance)` {#classhighlo_1_1_editor_camera_ac5e739bba3fc9f56ed87beb2f248b4eb_1ac5e739bba3fc9f56ed87beb2f248b4eb}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetProjection`](#classhighlo_1_1_editor_camera_a19d82a3b477b95f690af38f7ae3a2df1_1a19d82a3b477b95f690af38f7ae3a2df1)`(const glm::mat4 & projection)` {#classhighlo_1_1_editor_camera_a19d82a3b477b95f690af38f7ae3a2df1_1a19d82a3b477b95f690af38f7ae3a2df1}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetUpDirection`](#classhighlo_1_1_editor_camera_a877ecb6f160faba72767ebec265c33a1_1a877ecb6f160faba72767ebec265c33a1)`()` {#classhighlo_1_1_editor_camera_a877ecb6f160faba72767ebec265c33a1_1a877ecb6f160faba72767ebec265c33a1}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetRightDirection`](#classhighlo_1_1_editor_camera_ade0ed6b87c66e40fad635f9b14d7e8a7_1ade0ed6b87c66e40fad635f9b14d7e8a7)`()` {#classhighlo_1_1_editor_camera_ade0ed6b87c66e40fad635f9b14d7e8a7_1ade0ed6b87c66e40fad635f9b14d7e8a7}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetForwardDirection`](#classhighlo_1_1_editor_camera_ace4544c4646dc54691610a65989f86a9_1ace4544c4646dc54691610a65989f86a9)`()` {#classhighlo_1_1_editor_camera_ace4544c4646dc54691610a65989f86a9_1ace4544c4646dc54691610a65989f86a9}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::quat `[`GetOrientation`](#classhighlo_1_1_editor_camera_a13c397d59766dab7d5e1f61094bd1607_1a13c397d59766dab7d5e1f61094bd1607)`() const` {#classhighlo_1_1_editor_camera_a13c397d59766dab7d5e1f61094bd1607_1a13c397d59766dab7d5e1f61094bd1607}

#### `private glm::vec3 `[`m_Rotation`](#classhighlo_1_1_editor_camera_1ac3324812758942f7948ca1cb848585f5) {#classhighlo_1_1_editor_camera_1ac3324812758942f7948ca1cb848585f5}

#### `private glm::vec3 `[`m_FocalPoint`](#classhighlo_1_1_editor_camera_1a85794e90438e2f59ceeea06d7c4bc204) {#classhighlo_1_1_editor_camera_1a85794e90438e2f59ceeea06d7c4bc204}

#### `private bool `[`m_Panning`](#classhighlo_1_1_editor_camera_1a31ccdaf56954e6e365fa859791c491e2) {#classhighlo_1_1_editor_camera_1a31ccdaf56954e6e365fa859791c491e2}

#### `private bool `[`m_Rotating`](#classhighlo_1_1_editor_camera_1a434000b1eb170369fc38d1a4a1290541) {#classhighlo_1_1_editor_camera_1a434000b1eb170369fc38d1a4a1290541}

#### `private bool `[`m_Active`](#classhighlo_1_1_editor_camera_1a4e2230aab867a37cd537b4946fa6f922) {#classhighlo_1_1_editor_camera_1a4e2230aab867a37cd537b4946fa6f922}

#### `private glm::vec2 `[`m_InitialMousePosition`](#classhighlo_1_1_editor_camera_1ac031463ec31a08fa3886ae975acfd6f3) {#classhighlo_1_1_editor_camera_1ac031463ec31a08fa3886ae975acfd6f3}

#### `private glm::vec3 `[`m_InitialFocalPoint`](#classhighlo_1_1_editor_camera_1a488d93de49916fa71ca5d52788aa8524) {#classhighlo_1_1_editor_camera_1a488d93de49916fa71ca5d52788aa8524}

#### `private glm::vec3 `[`m_InitialRotation`](#classhighlo_1_1_editor_camera_1a2939373655e2b0e875682361e19cad12) {#classhighlo_1_1_editor_camera_1a2939373655e2b0e875682361e19cad12}

#### `private float `[`m_Distance`](#classhighlo_1_1_editor_camera_1a9e145f36b09dc710f1fe5222d5854ae6) {#classhighlo_1_1_editor_camera_1a9e145f36b09dc710f1fe5222d5854ae6}

#### `private float `[`m_MinFocusDistance`](#classhighlo_1_1_editor_camera_1ae4601247ad58cc438f1ac2adb29344de) {#classhighlo_1_1_editor_camera_1ae4601247ad58cc438f1ac2adb29344de}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportWidth`](#classhighlo_1_1_editor_camera_1ab8bc9b8fe3c07fe571cd37e5347f43e3) {#classhighlo_1_1_editor_camera_1ab8bc9b8fe3c07fe571cd37e5347f43e3}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportHeight`](#classhighlo_1_1_editor_camera_1ad4cf01a1a713d39a68009ec260638f30) {#classhighlo_1_1_editor_camera_1ad4cf01a1a713d39a68009ec260638f30}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`UpdateCameraView`](#classhighlo_1_1_editor_camera_1ae967006970a0fbc3b09e7a47f3001f08)`()` {#classhighlo_1_1_editor_camera_1ae967006970a0fbc3b09e7a47f3001f08}

#### `private bool `[`OnMouseScrolled`](#classhighlo_1_1_editor_camera_1a3d53c06b50e506e5cc22e612c25e8b13)`(`[`MouseScrolledEvent`](docs-api/api-highlo--MouseScrolledEvent.md#classhighlo_1_1_mouse_scrolled_event)` & e)` {#classhighlo_1_1_editor_camera_1a3d53c06b50e506e5cc22e612c25e8b13}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`MousePan`](#classhighlo_1_1_editor_camera_1a875549ad29e452ca38f28a2237b54a9c)`(const glm::vec2 & delta)` {#classhighlo_1_1_editor_camera_1a875549ad29e452ca38f28a2237b54a9c}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`MouseRotate`](#classhighlo_1_1_editor_camera_1ab443271d27b514d10522f3ae109db543)`(const glm::vec2 & delta)` {#classhighlo_1_1_editor_camera_1ab443271d27b514d10522f3ae109db543}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`MouseZoom`](#classhighlo_1_1_editor_camera_1a732147c5bddeb5213cea99ccf169f87d)`(float delta)` {#classhighlo_1_1_editor_camera_1a732147c5bddeb5213cea99ccf169f87d}

#### `private glm::vec3 `[`CalculatePosition`](#classhighlo_1_1_editor_camera_1a431d3ddf7b029e68e4e74343b78722b3)`()` {#classhighlo_1_1_editor_camera_1a431d3ddf7b029e68e4e74343b78722b3}

#### `private std::pair< float, float > `[`PanSpeed`](#classhighlo_1_1_editor_camera_1a3401d9ea6e2f2c37b3479329034d9f69)`() const` {#classhighlo_1_1_editor_camera_1a3401d9ea6e2f2c37b3479329034d9f69}

#### `private float `[`RotationSpeed`](#classhighlo_1_1_editor_camera_1af46c565cddf1d6563ff71e248b2c8bb5)`() const` {#classhighlo_1_1_editor_camera_1af46c565cddf1d6563ff71e248b2c8bb5}

#### `private float `[`ZoomSpeed`](#classhighlo_1_1_editor_camera_1ac0c21533655cd4c1b2100c19dd82ece1)`() const` {#classhighlo_1_1_editor_camera_1ac0c21533655cd4c1b2100c19dd82ece1}

