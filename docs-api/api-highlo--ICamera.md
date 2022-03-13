## class `highlo::ICamera` {#classhighlo_1_1_i_camera}

```
class highlo::ICamera
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ICamera`](#classhighlo_1_1_i_camera_aa847909ebf0436935455c973a0fa9e8c_1aa847909ebf0436935455c973a0fa9e8c)`() = default` | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~ICamera`](#classhighlo_1_1_i_camera_aa2659674c4fbf0676303f8848dc0fa63_1aa2659674c4fbf0676303f8848dc0fa63)`() = default` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_i_camera_ab0a3d6da4011b231145e7b06e4d1515c_1ab0a3d6da4011b231145e7b06e4d1515c)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_i_camera_aee3e7d4033a66e0c4af14cf71e57fb3b_1aee3e7d4033a66e0c4af14cf71e57fb3b)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_i_camera_ad4c69d7e491349e34557e00ec10694de_1ad4c69d7e491349e34557e00ec10694de)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::mat4 & `[`GetProjection`](#classhighlo_1_1_i_camera_add3e568fb8815d97c1af6249d261a5e1_1add3e568fb8815d97c1af6249d261a5e1)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::mat4 & `[`GetViewMatrix`](#classhighlo_1_1_i_camera_ac212669307acf77bbacb05a837e80929_1ac212669307acf77bbacb05a837e80929)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::mat4 `[`GetViewProjectionMatrix`](#classhighlo_1_1_i_camera_ae7ee14b28c1ec81e07b5e2e5b28c7a91_1ae7ee14b28c1ec81e07b5e2e5b28c7a91)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`GetViewProjectionMatrix`](#classhighlo_1_1_i_camera_ab7f270a2b8ad752c6d6f3ac810ebdc62_1ab7f270a2b8ad752c6d6f3ac810ebdc62)`(glm::mat4 & out)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 & `[`GetPosition`](#classhighlo_1_1_i_camera_af4e79a71135f753003a7d74154097756_1af4e79a71135f753003a7d74154097756)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 `[`GetYawPitchRoll`](#classhighlo_1_1_i_camera_a92fb380dc88db3a3cc9409c959f713ef_1a92fb380dc88db3a3cc9409c959f713ef)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const float `[`GetYaw`](#classhighlo_1_1_i_camera_a897f6db38d4b039342ad1879c148e862_1a897f6db38d4b039342ad1879c148e862)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const float `[`GetPitch`](#classhighlo_1_1_i_camera_abe7ad8d51bcf8e03db89b83052e71850_1abe7ad8d51bcf8e03db89b83052e71850)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const float `[`GetRoll`](#classhighlo_1_1_i_camera_ad0a1a37a71e0e494a5500b194198931d_1ad0a1a37a71e0e494a5500b194198931d)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPosition`](#classhighlo_1_1_i_camera_ac774941b9d6fa49eabc00bfad6415d6c_1ac774941b9d6fa49eabc00bfad6415d6c)`(const glm::vec3 & position)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetYawPitchRoll`](#classhighlo_1_1_i_camera_a9df61e52fcf1f16ad7316f2e39698776_1a9df61e52fcf1f16ad7316f2e39698776)`(const glm::vec3 & orientation)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetProjectionMatrix`](#classhighlo_1_1_i_camera_ae6dcbe99b726971ca881c43d36883fe3_1ae6dcbe99b726971ca881c43d36883fe3)`(const glm::mat4 & projectionMatrix)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewMatrix`](#classhighlo_1_1_i_camera_a9591d04e1ebd5172480c5323acc31b8b_1a9591d04e1ebd5172480c5323acc31b8b)`(const glm::mat4 & viewMatrix)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetYaw`](#classhighlo_1_1_i_camera_a466b54bbaa532ab64cc55319e9ce39f7_1a466b54bbaa532ab64cc55319e9ce39f7)`(float yaw)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPitch`](#classhighlo_1_1_i_camera_a8b5d8b39bf669911aa3a1fe5e089d4de_1a8b5d8b39bf669911aa3a1fe5e089d4de)`(float pitch)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRoll`](#classhighlo_1_1_i_camera_a9aa89b985ff7bffe92d382216dbaaded_1a9aa89b985ff7bffe92d382216dbaaded)`(float roll)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InvertPitch`](#classhighlo_1_1_i_camera_af538c6d80e4b1a528fa5f2da7921a745_1af538c6d80e4b1a528fa5f2da7921a745)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetExposure`](#classhighlo_1_1_i_camera_a15878170df93a0d737131a06bee67a86_1a15878170df93a0d737131a06bee67a86)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float & `[`GetExposure`](#classhighlo_1_1_i_camera_a3a67932c096e9fac16b7f4377b5d9775_1a3a67932c096e9fac16b7f4377b5d9775)`()` | 
`protected glm::mat4 `[`m_ProjectionMatrix`](#classhighlo_1_1_i_camera_a8dc75e9d0cfacacc1c5a91098b0ea1e4_1a8dc75e9d0cfacacc1c5a91098b0ea1e4) | 
`protected glm::mat4 `[`m_ViewMatrix`](#classhighlo_1_1_i_camera_aa089ab87c47ee03a6a16049dfda05892_1aa089ab87c47ee03a6a16049dfda05892) | 
`protected glm::vec3 `[`m_Position`](#classhighlo_1_1_i_camera_a9709a17fbc930f9ce27f8d0a9e9eaf68_1a9709a17fbc930f9ce27f8d0a9e9eaf68) | 
`protected float `[`m_Yaw`](#classhighlo_1_1_i_camera_a04871aa450e4c6407fb57918d0d78079_1a04871aa450e4c6407fb57918d0d78079) | 
`protected float `[`m_Pitch`](#classhighlo_1_1_i_camera_a2355cd32fb753a3b1349116470e8671d_1a2355cd32fb753a3b1349116470e8671d) | 
`protected float `[`m_Roll`](#classhighlo_1_1_i_camera_ab80f95cb176db0690c8880eb27799ea6_1ab80f95cb176db0690c8880eb27799ea6) | 
`protected float `[`m_Exposure`](#classhighlo_1_1_i_camera_abb1b7ee992960053848732bdcbf98b9e_1abb1b7ee992960053848732bdcbf98b9e) | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ICamera`](#classhighlo_1_1_i_camera_aa847909ebf0436935455c973a0fa9e8c_1aa847909ebf0436935455c973a0fa9e8c)`() = default` {#classhighlo_1_1_i_camera_aa847909ebf0436935455c973a0fa9e8c_1aa847909ebf0436935455c973a0fa9e8c}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~ICamera`](#classhighlo_1_1_i_camera_aa2659674c4fbf0676303f8848dc0fa63_1aa2659674c4fbf0676303f8848dc0fa63)`() = default` {#classhighlo_1_1_i_camera_aa2659674c4fbf0676303f8848dc0fa63_1aa2659674c4fbf0676303f8848dc0fa63}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_i_camera_ab0a3d6da4011b231145e7b06e4d1515c_1ab0a3d6da4011b231145e7b06e4d1515c)`()` {#classhighlo_1_1_i_camera_ab0a3d6da4011b231145e7b06e4d1515c_1ab0a3d6da4011b231145e7b06e4d1515c}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnWindowResize`](#classhighlo_1_1_i_camera_aee3e7d4033a66e0c4af14cf71e57fb3b_1aee3e7d4033a66e0c4af14cf71e57fb3b)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_i_camera_aee3e7d4033a66e0c4af14cf71e57fb3b_1aee3e7d4033a66e0c4af14cf71e57fb3b}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEvent`](#classhighlo_1_1_i_camera_ad4c69d7e491349e34557e00ec10694de_1ad4c69d7e491349e34557e00ec10694de)`(`[`Event`](docs-api/api-highlo--Event.md#classhighlo_1_1_event)` & e)` {#classhighlo_1_1_i_camera_ad4c69d7e491349e34557e00ec10694de_1ad4c69d7e491349e34557e00ec10694de}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::mat4 & `[`GetProjection`](#classhighlo_1_1_i_camera_add3e568fb8815d97c1af6249d261a5e1_1add3e568fb8815d97c1af6249d261a5e1)`() const` {#classhighlo_1_1_i_camera_add3e568fb8815d97c1af6249d261a5e1_1add3e568fb8815d97c1af6249d261a5e1}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::mat4 & `[`GetViewMatrix`](#classhighlo_1_1_i_camera_ac212669307acf77bbacb05a837e80929_1ac212669307acf77bbacb05a837e80929)`() const` {#classhighlo_1_1_i_camera_ac212669307acf77bbacb05a837e80929_1ac212669307acf77bbacb05a837e80929}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::mat4 `[`GetViewProjectionMatrix`](#classhighlo_1_1_i_camera_ae7ee14b28c1ec81e07b5e2e5b28c7a91_1ae7ee14b28c1ec81e07b5e2e5b28c7a91)`()` {#classhighlo_1_1_i_camera_ae7ee14b28c1ec81e07b5e2e5b28c7a91_1ae7ee14b28c1ec81e07b5e2e5b28c7a91}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`GetViewProjectionMatrix`](#classhighlo_1_1_i_camera_ab7f270a2b8ad752c6d6f3ac810ebdc62_1ab7f270a2b8ad752c6d6f3ac810ebdc62)`(glm::mat4 & out)` {#classhighlo_1_1_i_camera_ab7f270a2b8ad752c6d6f3ac810ebdc62_1ab7f270a2b8ad752c6d6f3ac810ebdc62}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 & `[`GetPosition`](#classhighlo_1_1_i_camera_af4e79a71135f753003a7d74154097756_1af4e79a71135f753003a7d74154097756)`() const` {#classhighlo_1_1_i_camera_af4e79a71135f753003a7d74154097756_1af4e79a71135f753003a7d74154097756}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 `[`GetYawPitchRoll`](#classhighlo_1_1_i_camera_a92fb380dc88db3a3cc9409c959f713ef_1a92fb380dc88db3a3cc9409c959f713ef)`() const` {#classhighlo_1_1_i_camera_a92fb380dc88db3a3cc9409c959f713ef_1a92fb380dc88db3a3cc9409c959f713ef}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const float `[`GetYaw`](#classhighlo_1_1_i_camera_a897f6db38d4b039342ad1879c148e862_1a897f6db38d4b039342ad1879c148e862)`() const` {#classhighlo_1_1_i_camera_a897f6db38d4b039342ad1879c148e862_1a897f6db38d4b039342ad1879c148e862}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const float `[`GetPitch`](#classhighlo_1_1_i_camera_abe7ad8d51bcf8e03db89b83052e71850_1abe7ad8d51bcf8e03db89b83052e71850)`() const` {#classhighlo_1_1_i_camera_abe7ad8d51bcf8e03db89b83052e71850_1abe7ad8d51bcf8e03db89b83052e71850}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const float `[`GetRoll`](#classhighlo_1_1_i_camera_ad0a1a37a71e0e494a5500b194198931d_1ad0a1a37a71e0e494a5500b194198931d)`() const` {#classhighlo_1_1_i_camera_ad0a1a37a71e0e494a5500b194198931d_1ad0a1a37a71e0e494a5500b194198931d}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPosition`](#classhighlo_1_1_i_camera_ac774941b9d6fa49eabc00bfad6415d6c_1ac774941b9d6fa49eabc00bfad6415d6c)`(const glm::vec3 & position)` {#classhighlo_1_1_i_camera_ac774941b9d6fa49eabc00bfad6415d6c_1ac774941b9d6fa49eabc00bfad6415d6c}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetYawPitchRoll`](#classhighlo_1_1_i_camera_a9df61e52fcf1f16ad7316f2e39698776_1a9df61e52fcf1f16ad7316f2e39698776)`(const glm::vec3 & orientation)` {#classhighlo_1_1_i_camera_a9df61e52fcf1f16ad7316f2e39698776_1a9df61e52fcf1f16ad7316f2e39698776}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetProjectionMatrix`](#classhighlo_1_1_i_camera_ae6dcbe99b726971ca881c43d36883fe3_1ae6dcbe99b726971ca881c43d36883fe3)`(const glm::mat4 & projectionMatrix)` {#classhighlo_1_1_i_camera_ae6dcbe99b726971ca881c43d36883fe3_1ae6dcbe99b726971ca881c43d36883fe3}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewMatrix`](#classhighlo_1_1_i_camera_a9591d04e1ebd5172480c5323acc31b8b_1a9591d04e1ebd5172480c5323acc31b8b)`(const glm::mat4 & viewMatrix)` {#classhighlo_1_1_i_camera_a9591d04e1ebd5172480c5323acc31b8b_1a9591d04e1ebd5172480c5323acc31b8b}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetYaw`](#classhighlo_1_1_i_camera_a466b54bbaa532ab64cc55319e9ce39f7_1a466b54bbaa532ab64cc55319e9ce39f7)`(float yaw)` {#classhighlo_1_1_i_camera_a466b54bbaa532ab64cc55319e9ce39f7_1a466b54bbaa532ab64cc55319e9ce39f7}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPitch`](#classhighlo_1_1_i_camera_a8b5d8b39bf669911aa3a1fe5e089d4de_1a8b5d8b39bf669911aa3a1fe5e089d4de)`(float pitch)` {#classhighlo_1_1_i_camera_a8b5d8b39bf669911aa3a1fe5e089d4de_1a8b5d8b39bf669911aa3a1fe5e089d4de}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRoll`](#classhighlo_1_1_i_camera_a9aa89b985ff7bffe92d382216dbaaded_1a9aa89b985ff7bffe92d382216dbaaded)`(float roll)` {#classhighlo_1_1_i_camera_a9aa89b985ff7bffe92d382216dbaaded_1a9aa89b985ff7bffe92d382216dbaaded}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InvertPitch`](#classhighlo_1_1_i_camera_af538c6d80e4b1a528fa5f2da7921a745_1af538c6d80e4b1a528fa5f2da7921a745)`()` {#classhighlo_1_1_i_camera_af538c6d80e4b1a528fa5f2da7921a745_1af538c6d80e4b1a528fa5f2da7921a745}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetExposure`](#classhighlo_1_1_i_camera_a15878170df93a0d737131a06bee67a86_1a15878170df93a0d737131a06bee67a86)`() const` {#classhighlo_1_1_i_camera_a15878170df93a0d737131a06bee67a86_1a15878170df93a0d737131a06bee67a86}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float & `[`GetExposure`](#classhighlo_1_1_i_camera_a3a67932c096e9fac16b7f4377b5d9775_1a3a67932c096e9fac16b7f4377b5d9775)`()` {#classhighlo_1_1_i_camera_a3a67932c096e9fac16b7f4377b5d9775_1a3a67932c096e9fac16b7f4377b5d9775}

#### `protected glm::mat4 `[`m_ProjectionMatrix`](#classhighlo_1_1_i_camera_a8dc75e9d0cfacacc1c5a91098b0ea1e4_1a8dc75e9d0cfacacc1c5a91098b0ea1e4) {#classhighlo_1_1_i_camera_a8dc75e9d0cfacacc1c5a91098b0ea1e4_1a8dc75e9d0cfacacc1c5a91098b0ea1e4}

#### `protected glm::mat4 `[`m_ViewMatrix`](#classhighlo_1_1_i_camera_aa089ab87c47ee03a6a16049dfda05892_1aa089ab87c47ee03a6a16049dfda05892) {#classhighlo_1_1_i_camera_aa089ab87c47ee03a6a16049dfda05892_1aa089ab87c47ee03a6a16049dfda05892}

#### `protected glm::vec3 `[`m_Position`](#classhighlo_1_1_i_camera_a9709a17fbc930f9ce27f8d0a9e9eaf68_1a9709a17fbc930f9ce27f8d0a9e9eaf68) {#classhighlo_1_1_i_camera_a9709a17fbc930f9ce27f8d0a9e9eaf68_1a9709a17fbc930f9ce27f8d0a9e9eaf68}

#### `protected float `[`m_Yaw`](#classhighlo_1_1_i_camera_a04871aa450e4c6407fb57918d0d78079_1a04871aa450e4c6407fb57918d0d78079) {#classhighlo_1_1_i_camera_a04871aa450e4c6407fb57918d0d78079_1a04871aa450e4c6407fb57918d0d78079}

#### `protected float `[`m_Pitch`](#classhighlo_1_1_i_camera_a2355cd32fb753a3b1349116470e8671d_1a2355cd32fb753a3b1349116470e8671d) {#classhighlo_1_1_i_camera_a2355cd32fb753a3b1349116470e8671d_1a2355cd32fb753a3b1349116470e8671d}

#### `protected float `[`m_Roll`](#classhighlo_1_1_i_camera_ab80f95cb176db0690c8880eb27799ea6_1ab80f95cb176db0690c8880eb27799ea6) {#classhighlo_1_1_i_camera_ab80f95cb176db0690c8880eb27799ea6_1ab80f95cb176db0690c8880eb27799ea6}

#### `protected float `[`m_Exposure`](#classhighlo_1_1_i_camera_abb1b7ee992960053848732bdcbf98b9e_1abb1b7ee992960053848732bdcbf98b9e) {#classhighlo_1_1_i_camera_abb1b7ee992960053848732bdcbf98b9e_1abb1b7ee992960053848732bdcbf98b9e}

