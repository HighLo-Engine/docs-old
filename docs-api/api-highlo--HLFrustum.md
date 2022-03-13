## struct `highlo::HLFrustum` {#structhighlo_1_1_h_l_frustum}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLPlane`](docs-api/api-highlo--HLPlane.md#structhighlo_1_1_h_l_plane)` `[`Planes`](#structhighlo_1_1_h_l_frustum_a09d5dc7a539a850edf6c39e245a0e570_1a09d5dc7a539a850edf6c39e245a0e570) | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLFrustum`](#structhighlo_1_1_h_l_frustum_a1ebe7f9dfa90a8afa18e9292f970c33a_1a1ebe7f9dfa90a8afa18e9292f970c33a)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLFrustum`](#structhighlo_1_1_h_l_frustum_a74e10b297488cb175b14c69efefde59b_1a74e10b297488cb175b14c69efefde59b)`(const glm::mat4 & mat)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#structhighlo_1_1_h_l_frustum_abb982e4ed5844f6067975f353ba35b51_1abb982e4ed5844f6067975f353ba35b51)`(const glm::mat4 & mat)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`SphereIntersection`](#structhighlo_1_1_h_l_frustum_a7fab63d193dacfa6d25481b5d636b19c_1a7fab63d193dacfa6d25481b5d636b19c)`(const glm::vec3 & center,float radius)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`AABBIntersection`](#structhighlo_1_1_h_l_frustum_a2d77aca709bc97b13fb3a66bb01cd9b1_1a2d77aca709bc97b13fb3a66bb01cd9b1)`(const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & aabb)` | 

### Members

#### `public `[`HLPlane`](docs-api/api-highlo--HLPlane.md#structhighlo_1_1_h_l_plane)` `[`Planes`](#structhighlo_1_1_h_l_frustum_a09d5dc7a539a850edf6c39e245a0e570_1a09d5dc7a539a850edf6c39e245a0e570) {#structhighlo_1_1_h_l_frustum_a09d5dc7a539a850edf6c39e245a0e570_1a09d5dc7a539a850edf6c39e245a0e570}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLFrustum`](#structhighlo_1_1_h_l_frustum_a1ebe7f9dfa90a8afa18e9292f970c33a_1a1ebe7f9dfa90a8afa18e9292f970c33a)`()` {#structhighlo_1_1_h_l_frustum_a1ebe7f9dfa90a8afa18e9292f970c33a_1a1ebe7f9dfa90a8afa18e9292f970c33a}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLFrustum`](#structhighlo_1_1_h_l_frustum_a74e10b297488cb175b14c69efefde59b_1a74e10b297488cb175b14c69efefde59b)`(const glm::mat4 & mat)` {#structhighlo_1_1_h_l_frustum_a74e10b297488cb175b14c69efefde59b_1a74e10b297488cb175b14c69efefde59b}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#structhighlo_1_1_h_l_frustum_abb982e4ed5844f6067975f353ba35b51_1abb982e4ed5844f6067975f353ba35b51)`(const glm::mat4 & mat)` {#structhighlo_1_1_h_l_frustum_abb982e4ed5844f6067975f353ba35b51_1abb982e4ed5844f6067975f353ba35b51}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`SphereIntersection`](#structhighlo_1_1_h_l_frustum_a7fab63d193dacfa6d25481b5d636b19c_1a7fab63d193dacfa6d25481b5d636b19c)`(const glm::vec3 & center,float radius)` {#structhighlo_1_1_h_l_frustum_a7fab63d193dacfa6d25481b5d636b19c_1a7fab63d193dacfa6d25481b5d636b19c}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`AABBIntersection`](#structhighlo_1_1_h_l_frustum_a2d77aca709bc97b13fb3a66bb01cd9b1_1a2d77aca709bc97b13fb3a66bb01cd9b1)`(const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & aabb)` {#structhighlo_1_1_h_l_frustum_a2d77aca709bc97b13fb3a66bb01cd9b1_1a2d77aca709bc97b13fb3a66bb01cd9b1}

