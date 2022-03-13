## class `highlo::Transform` {#classhighlo_1_1_transform}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Transform`](#classhighlo_1_1_transform_a334006aa084fe910d9beccc9c38dadff_1a334006aa084fe910d9beccc9c38dadff)`() = default` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Transform`](#classhighlo_1_1_transform_a16380c14b69a00f5dd184ce55bf7dfbc_1a16380c14b69a00f5dd184ce55bf7dfbc)`(const glm::mat4 & transform)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Translate`](#classhighlo_1_1_transform_af1c75c898fd5d9028210b0d0f5057a38_1af1c75c898fd5d9028210b0d0f5057a38)`(const glm::vec3 & translation)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Scale`](#classhighlo_1_1_transform_a02df0b3631c47df02ab27fca1521901e_1a02df0b3631c47df02ab27fca1521901e)`(const glm::vec3 & scale)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Scale`](#classhighlo_1_1_transform_abd5fd4328b4a6a75885b756cce380448_1abd5fd4328b4a6a75885b756cce380448)`(float scale)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Rotate`](#classhighlo_1_1_transform_a4a1f6aec25bd7d24a36804f049e3c344_1a4a1f6aec25bd7d24a36804f049e3c344)`(float angle,const glm::vec3 & axis)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Rotate`](#classhighlo_1_1_transform_af6ecad69510ebd4fbeb1634f0baa090c_1af6ecad69510ebd4fbeb1634f0baa090c)`(const glm::quat & rotation)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPosition`](#classhighlo_1_1_transform_a9ed327c2052af736efbb7e83e66c09a1_1a9ed327c2052af736efbb7e83e66c09a1)`(const glm::vec3 & position)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRotation`](#classhighlo_1_1_transform_aacddc6929d2232cc84a337965ee985d0_1aacddc6929d2232cc84a337965ee985d0)`(const glm::vec3 & rotation)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetScale`](#classhighlo_1_1_transform_a0ac245d675de7dae1da275ce961bcf32_1a0ac245d675de7dae1da275ce961bcf32)`(const glm::vec3 & scale)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetScale`](#classhighlo_1_1_transform_ad663841f8eaabee20c19deb2078197f7_1ad663841f8eaabee20c19deb2078197f7)`(float scale)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetTransform`](#classhighlo_1_1_transform_aac8bbe37643ac81182f30ae8d22812fb_1aac8bbe37643ac81182f30ae8d22812fb)`(const glm::mat4 & transform)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 & `[`GetPosition`](#classhighlo_1_1_transform_a7aaf6aeba5d802bd99f6d3f01c635f60_1a7aaf6aeba5d802bd99f6d3f01c635f60)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 & `[`GetScale`](#classhighlo_1_1_transform_a5c0908b0295972677e36f3b0406e9f4d_1a5c0908b0295972677e36f3b0406e9f4d)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 & `[`GetRotation`](#classhighlo_1_1_transform_ab6db02a4553424e9fbc7312c7b77193f_1ab6db02a4553424e9fbc7312c7b77193f)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::quat `[`GetRotationAsQuat`](#classhighlo_1_1_transform_af302c62598c820aab073320efb005332_1af302c62598c820aab073320efb005332)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::mat4 & `[`GetTransform`](#classhighlo_1_1_transform_aca1eb60a34e68be8d4e43fef13dd8143_1aca1eb60a34e68be8d4e43fef13dd8143)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#classhighlo_1_1_transform_afa29f59f9516a109cbea9941d1fd976e_1afa29f59f9516a109cbea9941d1fd976e)`(const `[`Transform`](#classhighlo_1_1_transform)` & other) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#classhighlo_1_1_transform_a83d6b8b5ccf16abc133740813b7a56ed_1a83d6b8b5ccf16abc133740813b7a56ed)`(const `[`Transform`](#classhighlo_1_1_transform)` & other) const` | 
`private glm::vec3 `[`m_Position`](#classhighlo_1_1_transform_1a33df89ce5630da68a2ce0c921f991d9a) | 
`private glm::vec3 `[`m_Scale`](#classhighlo_1_1_transform_1ae83a4e9cc6c080dcd37cde2d53810a62) | 
`private glm::vec3 `[`m_Rotation`](#classhighlo_1_1_transform_1a21e072c6997e961830744c222be0c345) | 
`private glm::mat4 `[`m_Transform`](#classhighlo_1_1_transform_1a182e24e6f89a5c1035a86865186d73c6) | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` `[`Identity`](#classhighlo_1_1_transform_ad7298efe471593190876164f0b570101_1ad7298efe471593190876164f0b570101)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` `[`FromPosition`](#classhighlo_1_1_transform_a64f159e67346eacbded7f16c5bf32f17_1a64f159e67346eacbded7f16c5bf32f17)`(const glm::vec3 & position)` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` `[`FromRotation`](#classhighlo_1_1_transform_a2cc926459c52dfe3f2dda31e631a2cd4_1a2cc926459c52dfe3f2dda31e631a2cd4)`(const glm::vec3 & rotation)` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` `[`FromScale`](#classhighlo_1_1_transform_aa615f59c12aca53f12c82ec3b9d7451c_1aa615f59c12aca53f12c82ec3b9d7451c)`(const glm::vec3 & scale)` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Decompose`](#classhighlo_1_1_transform_a6d6cf9a6be0796fc666013b5dc8b30bd_1a6d6cf9a6be0796fc666013b5dc8b30bd)`(const glm::mat4 & transform,`[`Transform`](#classhighlo_1_1_transform)` & outTransform)` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Transform`](#classhighlo_1_1_transform_a334006aa084fe910d9beccc9c38dadff_1a334006aa084fe910d9beccc9c38dadff)`() = default` {#classhighlo_1_1_transform_a334006aa084fe910d9beccc9c38dadff_1a334006aa084fe910d9beccc9c38dadff}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Transform`](#classhighlo_1_1_transform_a16380c14b69a00f5dd184ce55bf7dfbc_1a16380c14b69a00f5dd184ce55bf7dfbc)`(const glm::mat4 & transform)` {#classhighlo_1_1_transform_a16380c14b69a00f5dd184ce55bf7dfbc_1a16380c14b69a00f5dd184ce55bf7dfbc}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Translate`](#classhighlo_1_1_transform_af1c75c898fd5d9028210b0d0f5057a38_1af1c75c898fd5d9028210b0d0f5057a38)`(const glm::vec3 & translation)` {#classhighlo_1_1_transform_af1c75c898fd5d9028210b0d0f5057a38_1af1c75c898fd5d9028210b0d0f5057a38}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Scale`](#classhighlo_1_1_transform_a02df0b3631c47df02ab27fca1521901e_1a02df0b3631c47df02ab27fca1521901e)`(const glm::vec3 & scale)` {#classhighlo_1_1_transform_a02df0b3631c47df02ab27fca1521901e_1a02df0b3631c47df02ab27fca1521901e}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Scale`](#classhighlo_1_1_transform_abd5fd4328b4a6a75885b756cce380448_1abd5fd4328b4a6a75885b756cce380448)`(float scale)` {#classhighlo_1_1_transform_abd5fd4328b4a6a75885b756cce380448_1abd5fd4328b4a6a75885b756cce380448}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Rotate`](#classhighlo_1_1_transform_a4a1f6aec25bd7d24a36804f049e3c344_1a4a1f6aec25bd7d24a36804f049e3c344)`(float angle,const glm::vec3 & axis)` {#classhighlo_1_1_transform_a4a1f6aec25bd7d24a36804f049e3c344_1a4a1f6aec25bd7d24a36804f049e3c344}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` & `[`Rotate`](#classhighlo_1_1_transform_af6ecad69510ebd4fbeb1634f0baa090c_1af6ecad69510ebd4fbeb1634f0baa090c)`(const glm::quat & rotation)` {#classhighlo_1_1_transform_af6ecad69510ebd4fbeb1634f0baa090c_1af6ecad69510ebd4fbeb1634f0baa090c}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetPosition`](#classhighlo_1_1_transform_a9ed327c2052af736efbb7e83e66c09a1_1a9ed327c2052af736efbb7e83e66c09a1)`(const glm::vec3 & position)` {#classhighlo_1_1_transform_a9ed327c2052af736efbb7e83e66c09a1_1a9ed327c2052af736efbb7e83e66c09a1}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRotation`](#classhighlo_1_1_transform_aacddc6929d2232cc84a337965ee985d0_1aacddc6929d2232cc84a337965ee985d0)`(const glm::vec3 & rotation)` {#classhighlo_1_1_transform_aacddc6929d2232cc84a337965ee985d0_1aacddc6929d2232cc84a337965ee985d0}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetScale`](#classhighlo_1_1_transform_a0ac245d675de7dae1da275ce961bcf32_1a0ac245d675de7dae1da275ce961bcf32)`(const glm::vec3 & scale)` {#classhighlo_1_1_transform_a0ac245d675de7dae1da275ce961bcf32_1a0ac245d675de7dae1da275ce961bcf32}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetScale`](#classhighlo_1_1_transform_ad663841f8eaabee20c19deb2078197f7_1ad663841f8eaabee20c19deb2078197f7)`(float scale)` {#classhighlo_1_1_transform_ad663841f8eaabee20c19deb2078197f7_1ad663841f8eaabee20c19deb2078197f7}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetTransform`](#classhighlo_1_1_transform_aac8bbe37643ac81182f30ae8d22812fb_1aac8bbe37643ac81182f30ae8d22812fb)`(const glm::mat4 & transform)` {#classhighlo_1_1_transform_aac8bbe37643ac81182f30ae8d22812fb_1aac8bbe37643ac81182f30ae8d22812fb}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 & `[`GetPosition`](#classhighlo_1_1_transform_a7aaf6aeba5d802bd99f6d3f01c635f60_1a7aaf6aeba5d802bd99f6d3f01c635f60)`() const` {#classhighlo_1_1_transform_a7aaf6aeba5d802bd99f6d3f01c635f60_1a7aaf6aeba5d802bd99f6d3f01c635f60}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 & `[`GetScale`](#classhighlo_1_1_transform_a5c0908b0295972677e36f3b0406e9f4d_1a5c0908b0295972677e36f3b0406e9f4d)`() const` {#classhighlo_1_1_transform_a5c0908b0295972677e36f3b0406e9f4d_1a5c0908b0295972677e36f3b0406e9f4d}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::vec3 & `[`GetRotation`](#classhighlo_1_1_transform_ab6db02a4553424e9fbc7312c7b77193f_1ab6db02a4553424e9fbc7312c7b77193f)`() const` {#classhighlo_1_1_transform_ab6db02a4553424e9fbc7312c7b77193f_1ab6db02a4553424e9fbc7312c7b77193f}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::quat `[`GetRotationAsQuat`](#classhighlo_1_1_transform_af302c62598c820aab073320efb005332_1af302c62598c820aab073320efb005332)`() const` {#classhighlo_1_1_transform_af302c62598c820aab073320efb005332_1af302c62598c820aab073320efb005332}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::mat4 & `[`GetTransform`](#classhighlo_1_1_transform_aca1eb60a34e68be8d4e43fef13dd8143_1aca1eb60a34e68be8d4e43fef13dd8143)`() const` {#classhighlo_1_1_transform_aca1eb60a34e68be8d4e43fef13dd8143_1aca1eb60a34e68be8d4e43fef13dd8143}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#classhighlo_1_1_transform_afa29f59f9516a109cbea9941d1fd976e_1afa29f59f9516a109cbea9941d1fd976e)`(const `[`Transform`](#classhighlo_1_1_transform)` & other) const` {#classhighlo_1_1_transform_afa29f59f9516a109cbea9941d1fd976e_1afa29f59f9516a109cbea9941d1fd976e}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#classhighlo_1_1_transform_a83d6b8b5ccf16abc133740813b7a56ed_1a83d6b8b5ccf16abc133740813b7a56ed)`(const `[`Transform`](#classhighlo_1_1_transform)` & other) const` {#classhighlo_1_1_transform_a83d6b8b5ccf16abc133740813b7a56ed_1a83d6b8b5ccf16abc133740813b7a56ed}

#### `private glm::vec3 `[`m_Position`](#classhighlo_1_1_transform_1a33df89ce5630da68a2ce0c921f991d9a) {#classhighlo_1_1_transform_1a33df89ce5630da68a2ce0c921f991d9a}

#### `private glm::vec3 `[`m_Scale`](#classhighlo_1_1_transform_1ae83a4e9cc6c080dcd37cde2d53810a62) {#classhighlo_1_1_transform_1ae83a4e9cc6c080dcd37cde2d53810a62}

#### `private glm::vec3 `[`m_Rotation`](#classhighlo_1_1_transform_1a21e072c6997e961830744c222be0c345) {#classhighlo_1_1_transform_1a21e072c6997e961830744c222be0c345}

#### `private glm::mat4 `[`m_Transform`](#classhighlo_1_1_transform_1a182e24e6f89a5c1035a86865186d73c6) {#classhighlo_1_1_transform_1a182e24e6f89a5c1035a86865186d73c6}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` `[`Identity`](#classhighlo_1_1_transform_ad7298efe471593190876164f0b570101_1ad7298efe471593190876164f0b570101)`()` {#classhighlo_1_1_transform_ad7298efe471593190876164f0b570101_1ad7298efe471593190876164f0b570101}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` `[`FromPosition`](#classhighlo_1_1_transform_a64f159e67346eacbded7f16c5bf32f17_1a64f159e67346eacbded7f16c5bf32f17)`(const glm::vec3 & position)` {#classhighlo_1_1_transform_a64f159e67346eacbded7f16c5bf32f17_1a64f159e67346eacbded7f16c5bf32f17}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` `[`FromRotation`](#classhighlo_1_1_transform_a2cc926459c52dfe3f2dda31e631a2cd4_1a2cc926459c52dfe3f2dda31e631a2cd4)`(const glm::vec3 & rotation)` {#classhighlo_1_1_transform_a2cc926459c52dfe3f2dda31e631a2cd4_1a2cc926459c52dfe3f2dda31e631a2cd4}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](#classhighlo_1_1_transform)` `[`FromScale`](#classhighlo_1_1_transform_aa615f59c12aca53f12c82ec3b9d7451c_1aa615f59c12aca53f12c82ec3b9d7451c)`(const glm::vec3 & scale)` {#classhighlo_1_1_transform_aa615f59c12aca53f12c82ec3b9d7451c_1aa615f59c12aca53f12c82ec3b9d7451c}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Decompose`](#classhighlo_1_1_transform_a6d6cf9a6be0796fc666013b5dc8b30bd_1a6d6cf9a6be0796fc666013b5dc8b30bd)`(const glm::mat4 & transform,`[`Transform`](#classhighlo_1_1_transform)` & outTransform)` {#classhighlo_1_1_transform_a6d6cf9a6be0796fc666013b5dc8b30bd_1a6d6cf9a6be0796fc666013b5dc8b30bd}

