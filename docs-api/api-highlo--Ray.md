## struct `highlo::Ray` {#structhighlo_1_1_ray}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public glm::vec3 `[`Origin`](#structhighlo_1_1_ray_a1458eaf58be0f12f1760250a37422c37_1a1458eaf58be0f12f1760250a37422c37) | 
`public glm::vec3 `[`Direction`](#structhighlo_1_1_ray_a44b9443cd328c2b3ebce351db7413759_1a44b9443cd328c2b3ebce351db7413759) | 
`public inline  `[`Ray`](#structhighlo_1_1_ray_a520b00d2ada440e926e41c2e43a8724c_1a520b00d2ada440e926e41c2e43a8724c)`(const glm::vec3 & origin,const glm::vec3 & direction)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IntersectsAABB`](#structhighlo_1_1_ray_a5e9335bc77403986d548904cf97b7598_1a5e9335bc77403986d548904cf97b7598)`(const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & aabb,float & t) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IntersectsTriangle`](#structhighlo_1_1_ray_a9551fdc2cd48ef355b680ce0d81bfad7_1a9551fdc2cd48ef355b680ce0d81bfad7)`(const glm::vec3 & A,const glm::vec3 & B,const glm::vec3 & C,float & t)` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ray`](#structhighlo_1_1_ray)` `[`Zero`](#structhighlo_1_1_ray_a3c93d7b5df226d5b74b38136f1f0f370_1a3c93d7b5df226d5b74b38136f1f0f370)`()` | 

### Members

#### `public glm::vec3 `[`Origin`](#structhighlo_1_1_ray_a1458eaf58be0f12f1760250a37422c37_1a1458eaf58be0f12f1760250a37422c37) {#structhighlo_1_1_ray_a1458eaf58be0f12f1760250a37422c37_1a1458eaf58be0f12f1760250a37422c37}

#### `public glm::vec3 `[`Direction`](#structhighlo_1_1_ray_a44b9443cd328c2b3ebce351db7413759_1a44b9443cd328c2b3ebce351db7413759) {#structhighlo_1_1_ray_a44b9443cd328c2b3ebce351db7413759_1a44b9443cd328c2b3ebce351db7413759}

#### `public inline  `[`Ray`](#structhighlo_1_1_ray_a520b00d2ada440e926e41c2e43a8724c_1a520b00d2ada440e926e41c2e43a8724c)`(const glm::vec3 & origin,const glm::vec3 & direction)` {#structhighlo_1_1_ray_a520b00d2ada440e926e41c2e43a8724c_1a520b00d2ada440e926e41c2e43a8724c}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IntersectsAABB`](#structhighlo_1_1_ray_a5e9335bc77403986d548904cf97b7598_1a5e9335bc77403986d548904cf97b7598)`(const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & aabb,float & t) const` {#structhighlo_1_1_ray_a5e9335bc77403986d548904cf97b7598_1a5e9335bc77403986d548904cf97b7598}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IntersectsTriangle`](#structhighlo_1_1_ray_a9551fdc2cd48ef355b680ce0d81bfad7_1a9551fdc2cd48ef355b680ce0d81bfad7)`(const glm::vec3 & A,const glm::vec3 & B,const glm::vec3 & C,float & t)` {#structhighlo_1_1_ray_a9551fdc2cd48ef355b680ce0d81bfad7_1a9551fdc2cd48ef355b680ce0d81bfad7}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ray`](#structhighlo_1_1_ray)` `[`Zero`](#structhighlo_1_1_ray_a3c93d7b5df226d5b74b38136f1f0f370_1a3c93d7b5df226d5b74b38136f1f0f370)`()` {#structhighlo_1_1_ray_a3c93d7b5df226d5b74b38136f1f0f370_1a3c93d7b5df226d5b74b38136f1f0f370}

