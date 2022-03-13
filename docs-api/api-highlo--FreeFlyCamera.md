## class `highlo::FreeFlyCamera` {#classhighlo_1_1_free_fly_camera}

```
class highlo::FreeFlyCamera
  : public highlo::Camera
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FreeFlyCamera`](#classhighlo_1_1_free_fly_camera_a56055d25a1a9206a9d486a190f213fe4_1a56055d25a1a9206a9d486a190f213fe4)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FreeFlyCamera`](#classhighlo_1_1_free_fly_camera_aaf0148d3fba7ca5625264bdd65100b6c_1aaf0148d3fba7ca5625264bdd65100b6c)`(const glm::mat4 & projectionMatrix)` | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~FreeFlyCamera`](#classhighlo_1_1_free_fly_camera_a958ade89a1eaab2296fd9f0c13f094d9_1a958ade89a1eaab2296fd9f0c13f094d9)`()` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_free_fly_camera_aebd784e836071659d18d85a4678d4170_1aebd784e836071659d18d85a4678d4170)`()` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_free_fly_camera_a7bf439ef63e35f5f0a8ce392b192f2a5_1a7bf439ef63e35f5f0a8ce392b192f2a5)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_free_fly_camera_a7a2de0f32e400310261bb51e9e0cd57b_1a7a2de0f32e400310261bb51e9e0cd57b)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewportSize`](#classhighlo_1_1_free_fly_camera_aa35a9232dde116984cba102259ecf6f4_1aa35a9232dde116984cba102259ecf6f4)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetUpDirection`](#classhighlo_1_1_free_fly_camera_a85802ce3d22e305cba65ef8777b763ba_1a85802ce3d22e305cba65ef8777b763ba)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetRightDirection`](#classhighlo_1_1_free_fly_camera_af342b2cde2ef95c6a3917b3f77b70345_1af342b2cde2ef95c6a3917b3f77b70345)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetForwardDirection`](#classhighlo_1_1_free_fly_camera_a90ea801660a062b72223cf83e4148c90_1a90ea801660a062b72223cf83e4148c90)`()` | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportWidth`](#classhighlo_1_1_free_fly_camera_1aaf4c0347d8897059dd10f407f6a58152) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportHeight`](#classhighlo_1_1_free_fly_camera_1a46e6b3bc1306ff719c780a1ab97b30f8) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`UpdateCameraView`](#classhighlo_1_1_free_fly_camera_1a1b52370bec7e92484d874bf1e9925bd5)`()` | 
`private float `[`MovementSpeed`](#classhighlo_1_1_free_fly_camera_1ae7f5c036d6d6983870b5c40f3aa53e51)`() const` | 
`private float `[`RotationSpeed`](#classhighlo_1_1_free_fly_camera_1ac69112a4550fcff8c0eb2621dc6d431c)`() const` | 
`private float `[`RunningSpeed`](#classhighlo_1_1_free_fly_camera_1ad60b39804084c04625ac4c51de1977d6)`() const` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FreeFlyCamera`](#classhighlo_1_1_free_fly_camera_a56055d25a1a9206a9d486a190f213fe4_1a56055d25a1a9206a9d486a190f213fe4)`()` {#classhighlo_1_1_free_fly_camera_a56055d25a1a9206a9d486a190f213fe4_1a56055d25a1a9206a9d486a190f213fe4}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FreeFlyCamera`](#classhighlo_1_1_free_fly_camera_aaf0148d3fba7ca5625264bdd65100b6c_1aaf0148d3fba7ca5625264bdd65100b6c)`(const glm::mat4 & projectionMatrix)` {#classhighlo_1_1_free_fly_camera_aaf0148d3fba7ca5625264bdd65100b6c_1aaf0148d3fba7ca5625264bdd65100b6c}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~FreeFlyCamera`](#classhighlo_1_1_free_fly_camera_a958ade89a1eaab2296fd9f0c13f094d9_1a958ade89a1eaab2296fd9f0c13f094d9)`()` {#classhighlo_1_1_free_fly_camera_a958ade89a1eaab2296fd9f0c13f094d9_1a958ade89a1eaab2296fd9f0c13f094d9}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_free_fly_camera_aebd784e836071659d18d85a4678d4170_1aebd784e836071659d18d85a4678d4170)`()` {#classhighlo_1_1_free_fly_camera_aebd784e836071659d18d85a4678d4170_1aebd784e836071659d18d85a4678d4170}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_free_fly_camera_a7bf439ef63e35f5f0a8ce392b192f2a5_1a7bf439ef63e35f5f0a8ce392b192f2a5)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` {#classhighlo_1_1_free_fly_camera_a7bf439ef63e35f5f0a8ce392b192f2a5_1a7bf439ef63e35f5f0a8ce392b192f2a5}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_free_fly_camera_a7a2de0f32e400310261bb51e9e0cd57b_1a7a2de0f32e400310261bb51e9e0cd57b)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_free_fly_camera_a7a2de0f32e400310261bb51e9e0cd57b_1a7a2de0f32e400310261bb51e9e0cd57b}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewportSize`](#classhighlo_1_1_free_fly_camera_aa35a9232dde116984cba102259ecf6f4_1aa35a9232dde116984cba102259ecf6f4)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_free_fly_camera_aa35a9232dde116984cba102259ecf6f4_1aa35a9232dde116984cba102259ecf6f4}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetUpDirection`](#classhighlo_1_1_free_fly_camera_a85802ce3d22e305cba65ef8777b763ba_1a85802ce3d22e305cba65ef8777b763ba)`()` {#classhighlo_1_1_free_fly_camera_a85802ce3d22e305cba65ef8777b763ba_1a85802ce3d22e305cba65ef8777b763ba}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetRightDirection`](#classhighlo_1_1_free_fly_camera_af342b2cde2ef95c6a3917b3f77b70345_1af342b2cde2ef95c6a3917b3f77b70345)`()` {#classhighlo_1_1_free_fly_camera_af342b2cde2ef95c6a3917b3f77b70345_1af342b2cde2ef95c6a3917b3f77b70345}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::vec3 `[`GetForwardDirection`](#classhighlo_1_1_free_fly_camera_a90ea801660a062b72223cf83e4148c90_1a90ea801660a062b72223cf83e4148c90)`()` {#classhighlo_1_1_free_fly_camera_a90ea801660a062b72223cf83e4148c90_1a90ea801660a062b72223cf83e4148c90}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportWidth`](#classhighlo_1_1_free_fly_camera_1aaf4c0347d8897059dd10f407f6a58152) {#classhighlo_1_1_free_fly_camera_1aaf4c0347d8897059dd10f407f6a58152}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportHeight`](#classhighlo_1_1_free_fly_camera_1a46e6b3bc1306ff719c780a1ab97b30f8) {#classhighlo_1_1_free_fly_camera_1a46e6b3bc1306ff719c780a1ab97b30f8}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`UpdateCameraView`](#classhighlo_1_1_free_fly_camera_1a1b52370bec7e92484d874bf1e9925bd5)`()` {#classhighlo_1_1_free_fly_camera_1a1b52370bec7e92484d874bf1e9925bd5}

#### `private float `[`MovementSpeed`](#classhighlo_1_1_free_fly_camera_1ae7f5c036d6d6983870b5c40f3aa53e51)`() const` {#classhighlo_1_1_free_fly_camera_1ae7f5c036d6d6983870b5c40f3aa53e51}

#### `private float `[`RotationSpeed`](#classhighlo_1_1_free_fly_camera_1ac69112a4550fcff8c0eb2621dc6d431c)`() const` {#classhighlo_1_1_free_fly_camera_1ac69112a4550fcff8c0eb2621dc6d431c}

#### `private float `[`RunningSpeed`](#classhighlo_1_1_free_fly_camera_1ad60b39804084c04625ac4c51de1977d6)`() const` {#classhighlo_1_1_free_fly_camera_1ad60b39804084c04625ac4c51de1977d6}

