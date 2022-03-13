## struct `highlo::AnimatedVertex` {#structhighlo_1_1_animated_vertex}

Represents a animated [Vertex](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex) position

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public glm::vec3 `[`Position`](#structhighlo_1_1_animated_vertex_af5551e4b349154f2e3e442f1e92eefdf_1af5551e4b349154f2e3e442f1e92eefdf) | 
`public glm::vec3 `[`Normal`](#structhighlo_1_1_animated_vertex_aa141a787240fded7f4b09ababdbc267f_1aa141a787240fded7f4b09ababdbc267f) | 
`public glm::vec3 `[`Tangent`](#structhighlo_1_1_animated_vertex_ad6f47b728b03f7575e1e053b9f2184cb_1ad6f47b728b03f7575e1e053b9f2184cb) | 
`public glm::vec3 `[`BiNormal`](#structhighlo_1_1_animated_vertex_a41626665e5c33293a4c0c7c9c995808a_1a41626665e5c33293a4c0c7c9c995808a) | 
`public glm::vec2 `[`TexCoord`](#structhighlo_1_1_animated_vertex_a5a1a35c639f30771e86624b3b32ca7d9_1a5a1a35c639f30771e86624b3b32ca7d9) | 
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`BoneIds`](#structhighlo_1_1_animated_vertex_a0a6d1f75043f154b2b4ec000f946093a_1a0a6d1f75043f154b2b4ec000f946093a) | 
`public float `[`BoneWeights`](#structhighlo_1_1_animated_vertex_aaa3e89d404deaf8843a9a7ffe1ac828f_1aaa3e89d404deaf8843a9a7ffe1ac828f) | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#structhighlo_1_1_animated_vertex_a81189061f2998250b3fffd9bdba89e40_1a81189061f2998250b3fffd9bdba89e40)`(const `[`AnimatedVertex`](#structhighlo_1_1_animated_vertex)` & other) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#structhighlo_1_1_animated_vertex_a7f86d20d43d7185365b7dea80bcd6655_1a7f86d20d43d7185365b7dea80bcd6655)`(const `[`AnimatedVertex`](#structhighlo_1_1_animated_vertex)` & other) const` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AddBone`](#structhighlo_1_1_animated_vertex_a0a3ea088f8fd62e97fb3c7122ddeef81_1a0a3ea088f8fd62e97fb3c7122ddeef81)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` id,float weight)` | 

### Members

#### `public glm::vec3 `[`Position`](#structhighlo_1_1_animated_vertex_af5551e4b349154f2e3e442f1e92eefdf_1af5551e4b349154f2e3e442f1e92eefdf) {#structhighlo_1_1_animated_vertex_af5551e4b349154f2e3e442f1e92eefdf_1af5551e4b349154f2e3e442f1e92eefdf}

#### `public glm::vec3 `[`Normal`](#structhighlo_1_1_animated_vertex_aa141a787240fded7f4b09ababdbc267f_1aa141a787240fded7f4b09ababdbc267f) {#structhighlo_1_1_animated_vertex_aa141a787240fded7f4b09ababdbc267f_1aa141a787240fded7f4b09ababdbc267f}

#### `public glm::vec3 `[`Tangent`](#structhighlo_1_1_animated_vertex_ad6f47b728b03f7575e1e053b9f2184cb_1ad6f47b728b03f7575e1e053b9f2184cb) {#structhighlo_1_1_animated_vertex_ad6f47b728b03f7575e1e053b9f2184cb_1ad6f47b728b03f7575e1e053b9f2184cb}

#### `public glm::vec3 `[`BiNormal`](#structhighlo_1_1_animated_vertex_a41626665e5c33293a4c0c7c9c995808a_1a41626665e5c33293a4c0c7c9c995808a) {#structhighlo_1_1_animated_vertex_a41626665e5c33293a4c0c7c9c995808a_1a41626665e5c33293a4c0c7c9c995808a}

#### `public glm::vec2 `[`TexCoord`](#structhighlo_1_1_animated_vertex_a5a1a35c639f30771e86624b3b32ca7d9_1a5a1a35c639f30771e86624b3b32ca7d9) {#structhighlo_1_1_animated_vertex_a5a1a35c639f30771e86624b3b32ca7d9_1a5a1a35c639f30771e86624b3b32ca7d9}

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`BoneIds`](#structhighlo_1_1_animated_vertex_a0a6d1f75043f154b2b4ec000f946093a_1a0a6d1f75043f154b2b4ec000f946093a) {#structhighlo_1_1_animated_vertex_a0a6d1f75043f154b2b4ec000f946093a_1a0a6d1f75043f154b2b4ec000f946093a}

#### `public float `[`BoneWeights`](#structhighlo_1_1_animated_vertex_aaa3e89d404deaf8843a9a7ffe1ac828f_1aaa3e89d404deaf8843a9a7ffe1ac828f) {#structhighlo_1_1_animated_vertex_aaa3e89d404deaf8843a9a7ffe1ac828f_1aaa3e89d404deaf8843a9a7ffe1ac828f}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#structhighlo_1_1_animated_vertex_a81189061f2998250b3fffd9bdba89e40_1a81189061f2998250b3fffd9bdba89e40)`(const `[`AnimatedVertex`](#structhighlo_1_1_animated_vertex)` & other) const` {#structhighlo_1_1_animated_vertex_a81189061f2998250b3fffd9bdba89e40_1a81189061f2998250b3fffd9bdba89e40}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#structhighlo_1_1_animated_vertex_a7f86d20d43d7185365b7dea80bcd6655_1a7f86d20d43d7185365b7dea80bcd6655)`(const `[`AnimatedVertex`](#structhighlo_1_1_animated_vertex)` & other) const` {#structhighlo_1_1_animated_vertex_a7f86d20d43d7185365b7dea80bcd6655_1a7f86d20d43d7185365b7dea80bcd6655}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AddBone`](#structhighlo_1_1_animated_vertex_a0a3ea088f8fd62e97fb3c7122ddeef81_1a0a3ea088f8fd62e97fb3c7122ddeef81)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` id,float weight)` {#structhighlo_1_1_animated_vertex_a0a3ea088f8fd62e97fb3c7122ddeef81_1a0a3ea088f8fd62e97fb3c7122ddeef81}

