## struct `highlo::AABB` {#structhighlo_1_1_a_a_b_b}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public glm::vec3 `[`Min`](#structhighlo_1_1_a_a_b_b_af360275670587a0edda2ca5c99111998_1af360275670587a0edda2ca5c99111998) | 
`public glm::vec3 `[`Max`](#structhighlo_1_1_a_a_b_b_a6f5134290b601724296a2461447d4381_1a6f5134290b601724296a2461447d4381) | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`AABB`](#structhighlo_1_1_a_a_b_b_a549bf8300ac1c9fa40778c9ce83b0c7a_1a549bf8300ac1c9fa40778c9ce83b0c7a)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`AABB`](#structhighlo_1_1_a_a_b_b_adf8793764da21e2f61a73411d28c7dbc_1adf8793764da21e2f61a73411d28c7dbc)`(const glm::vec3 & min,const glm::vec3 & max)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Width`](#structhighlo_1_1_a_a_b_b_a4d79998235eac7aaad47bef3666fb483_1a4d79998235eac7aaad47bef3666fb483)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Height`](#structhighlo_1_1_a_a_b_b_a43b93ec61b5b11b26a89de3cf1cb4e41_1a43b93ec61b5b11b26a89de3cf1cb4e41)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Depth`](#structhighlo_1_1_a_a_b_b_aca0a73554020810465d48517078a5f37_1aca0a73554020810465d48517078a5f37)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`X`](#structhighlo_1_1_a_a_b_b_a16113db7ee3cfead12304481ebf26437_1a16113db7ee3cfead12304481ebf26437)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Y`](#structhighlo_1_1_a_a_b_b_ac3c452fa8378b78e99f8491ee7c6eea9_1ac3c452fa8378b78e99f8491ee7c6eea9)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Z`](#structhighlo_1_1_a_a_b_b_aecc0bfb363e08dd18f0d20afcbf73b45_1aecc0bfb363e08dd18f0d20afcbf73b45)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsEmpty`](#structhighlo_1_1_a_a_b_b_a87130639d3c1e737ef9aea6245336860_1a87130639d3c1e737ef9aea6245336860)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Clear`](#structhighlo_1_1_a_a_b_b_ab72525547a0394b17e7362664071601a_1ab72525547a0394b17e7362664071601a)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Add`](#structhighlo_1_1_a_a_b_b_a81ca027fbe40378127c95359bb4b92d2_1a81ca027fbe40378127c95359bb4b92d2)`(const glm::vec3 & coordinate)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Add`](#structhighlo_1_1_a_a_b_b_a39f9d3a110803c02345f89b6f3c27a64_1a39f9d3a110803c02345f89b6f3c27a64)`(float x,float y,float z)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Add`](#structhighlo_1_1_a_a_b_b_afc5e7206f2ff1a82ae7d4fd0d08296f9_1afc5e7206f2ff1a82ae7d4fd0d08296f9)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & other)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Set`](#structhighlo_1_1_a_a_b_b_a44d1d8b00f846e4d2eeffd76d0105c00_1a44d1d8b00f846e4d2eeffd76d0105c00)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & other)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Translate`](#structhighlo_1_1_a_a_b_b_a67118ca72322be2193c17d6f2266165e_1a67118ca72322be2193c17d6f2266165e)`(float x,float y,float z)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Translate`](#structhighlo_1_1_a_a_b_b_a1c59b6fbe76c6459ee5636bc24a28ee5_1a1c59b6fbe76c6459ee5636bc24a28ee5)`(const glm::vec3 & translation)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AABB`](#structhighlo_1_1_a_a_b_b)` `[`Translated`](#structhighlo_1_1_a_a_b_b_a5ab4213846799f9e5489c73ac12cea4a_1a5ab4213846799f9e5489c73ac12cea4a)`(const glm::vec3 & translation) const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AABB`](#structhighlo_1_1_a_a_b_b)` `[`Scaled`](#structhighlo_1_1_a_a_b_b_aeee2945aefa78883c6e0f37cfe06d9e7_1aeee2945aefa78883c6e0f37cfe06d9e7)`(const glm::vec3 & scale) const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AABB`](#structhighlo_1_1_a_a_b_b)` `[`Transformed`](#structhighlo_1_1_a_a_b_b_a241c9eddf500aa82c93ee739bf8dcb36_1a241c9eddf500aa82c93ee739bf8dcb36)`(const glm::vec3 & translation,const glm::vec3 & scale)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Set`](#structhighlo_1_1_a_a_b_b_a4b3dac6fbab6fd050a25fdcfb544807d_1a4b3dac6fbab6fd050a25fdcfb544807d)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & other,const glm::vec3 & translation)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`UpdateDimensions`](#structhighlo_1_1_a_a_b_b_ae5ec327ade96b7704d9b3f0b54e98986_1ae5ec327ade96b7704d9b3f0b54e98986)`(const glm::vec3 & min,const glm::vec3 & max)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` std::vector< glm::vec3 > `[`GetCorners`](#structhighlo_1_1_a_a_b_b_a611615a71c2ee5318a7291ae81489d6d_1a611615a71c2ee5318a7291ae81489d6d)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetRadius`](#structhighlo_1_1_a_a_b_b_aa75055143e932dc631cb66d3707c3ba4_1aa75055143e932dc631cb66d3707c3ba4)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsOutside`](#structhighlo_1_1_a_a_b_b_ae83be3d6c58890a5e6da913b56bc87c5_1ae83be3d6c58890a5e6da913b56bc87c5)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & other) const` | 
`public inline static `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsOutside`](#structhighlo_1_1_a_a_b_b_a7e893c1c18a1ffd640103058eff8be5c_1a7e893c1c18a1ffd640103058eff8be5c)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & left,const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & right)` | 

### Members

#### `public glm::vec3 `[`Min`](#structhighlo_1_1_a_a_b_b_af360275670587a0edda2ca5c99111998_1af360275670587a0edda2ca5c99111998) {#structhighlo_1_1_a_a_b_b_af360275670587a0edda2ca5c99111998_1af360275670587a0edda2ca5c99111998}

#### `public glm::vec3 `[`Max`](#structhighlo_1_1_a_a_b_b_a6f5134290b601724296a2461447d4381_1a6f5134290b601724296a2461447d4381) {#structhighlo_1_1_a_a_b_b_a6f5134290b601724296a2461447d4381_1a6f5134290b601724296a2461447d4381}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`AABB`](#structhighlo_1_1_a_a_b_b_a549bf8300ac1c9fa40778c9ce83b0c7a_1a549bf8300ac1c9fa40778c9ce83b0c7a)`()` {#structhighlo_1_1_a_a_b_b_a549bf8300ac1c9fa40778c9ce83b0c7a_1a549bf8300ac1c9fa40778c9ce83b0c7a}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`AABB`](#structhighlo_1_1_a_a_b_b_adf8793764da21e2f61a73411d28c7dbc_1adf8793764da21e2f61a73411d28c7dbc)`(const glm::vec3 & min,const glm::vec3 & max)` {#structhighlo_1_1_a_a_b_b_adf8793764da21e2f61a73411d28c7dbc_1adf8793764da21e2f61a73411d28c7dbc}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Width`](#structhighlo_1_1_a_a_b_b_a4d79998235eac7aaad47bef3666fb483_1a4d79998235eac7aaad47bef3666fb483)`() const` {#structhighlo_1_1_a_a_b_b_a4d79998235eac7aaad47bef3666fb483_1a4d79998235eac7aaad47bef3666fb483}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Height`](#structhighlo_1_1_a_a_b_b_a43b93ec61b5b11b26a89de3cf1cb4e41_1a43b93ec61b5b11b26a89de3cf1cb4e41)`() const` {#structhighlo_1_1_a_a_b_b_a43b93ec61b5b11b26a89de3cf1cb4e41_1a43b93ec61b5b11b26a89de3cf1cb4e41}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Depth`](#structhighlo_1_1_a_a_b_b_aca0a73554020810465d48517078a5f37_1aca0a73554020810465d48517078a5f37)`() const` {#structhighlo_1_1_a_a_b_b_aca0a73554020810465d48517078a5f37_1aca0a73554020810465d48517078a5f37}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`X`](#structhighlo_1_1_a_a_b_b_a16113db7ee3cfead12304481ebf26437_1a16113db7ee3cfead12304481ebf26437)`() const` {#structhighlo_1_1_a_a_b_b_a16113db7ee3cfead12304481ebf26437_1a16113db7ee3cfead12304481ebf26437}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Y`](#structhighlo_1_1_a_a_b_b_ac3c452fa8378b78e99f8491ee7c6eea9_1ac3c452fa8378b78e99f8491ee7c6eea9)`() const` {#structhighlo_1_1_a_a_b_b_ac3c452fa8378b78e99f8491ee7c6eea9_1ac3c452fa8378b78e99f8491ee7c6eea9}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`Z`](#structhighlo_1_1_a_a_b_b_aecc0bfb363e08dd18f0d20afcbf73b45_1aecc0bfb363e08dd18f0d20afcbf73b45)`() const` {#structhighlo_1_1_a_a_b_b_aecc0bfb363e08dd18f0d20afcbf73b45_1aecc0bfb363e08dd18f0d20afcbf73b45}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsEmpty`](#structhighlo_1_1_a_a_b_b_a87130639d3c1e737ef9aea6245336860_1a87130639d3c1e737ef9aea6245336860)`() const` {#structhighlo_1_1_a_a_b_b_a87130639d3c1e737ef9aea6245336860_1a87130639d3c1e737ef9aea6245336860}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Clear`](#structhighlo_1_1_a_a_b_b_ab72525547a0394b17e7362664071601a_1ab72525547a0394b17e7362664071601a)`()` {#structhighlo_1_1_a_a_b_b_ab72525547a0394b17e7362664071601a_1ab72525547a0394b17e7362664071601a}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Add`](#structhighlo_1_1_a_a_b_b_a81ca027fbe40378127c95359bb4b92d2_1a81ca027fbe40378127c95359bb4b92d2)`(const glm::vec3 & coordinate)` {#structhighlo_1_1_a_a_b_b_a81ca027fbe40378127c95359bb4b92d2_1a81ca027fbe40378127c95359bb4b92d2}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Add`](#structhighlo_1_1_a_a_b_b_a39f9d3a110803c02345f89b6f3c27a64_1a39f9d3a110803c02345f89b6f3c27a64)`(float x,float y,float z)` {#structhighlo_1_1_a_a_b_b_a39f9d3a110803c02345f89b6f3c27a64_1a39f9d3a110803c02345f89b6f3c27a64}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Add`](#structhighlo_1_1_a_a_b_b_afc5e7206f2ff1a82ae7d4fd0d08296f9_1afc5e7206f2ff1a82ae7d4fd0d08296f9)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & other)` {#structhighlo_1_1_a_a_b_b_afc5e7206f2ff1a82ae7d4fd0d08296f9_1afc5e7206f2ff1a82ae7d4fd0d08296f9}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Set`](#structhighlo_1_1_a_a_b_b_a44d1d8b00f846e4d2eeffd76d0105c00_1a44d1d8b00f846e4d2eeffd76d0105c00)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & other)` {#structhighlo_1_1_a_a_b_b_a44d1d8b00f846e4d2eeffd76d0105c00_1a44d1d8b00f846e4d2eeffd76d0105c00}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Translate`](#structhighlo_1_1_a_a_b_b_a67118ca72322be2193c17d6f2266165e_1a67118ca72322be2193c17d6f2266165e)`(float x,float y,float z)` {#structhighlo_1_1_a_a_b_b_a67118ca72322be2193c17d6f2266165e_1a67118ca72322be2193c17d6f2266165e}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Translate`](#structhighlo_1_1_a_a_b_b_a1c59b6fbe76c6459ee5636bc24a28ee5_1a1c59b6fbe76c6459ee5636bc24a28ee5)`(const glm::vec3 & translation)` {#structhighlo_1_1_a_a_b_b_a1c59b6fbe76c6459ee5636bc24a28ee5_1a1c59b6fbe76c6459ee5636bc24a28ee5}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AABB`](#structhighlo_1_1_a_a_b_b)` `[`Translated`](#structhighlo_1_1_a_a_b_b_a5ab4213846799f9e5489c73ac12cea4a_1a5ab4213846799f9e5489c73ac12cea4a)`(const glm::vec3 & translation) const` {#structhighlo_1_1_a_a_b_b_a5ab4213846799f9e5489c73ac12cea4a_1a5ab4213846799f9e5489c73ac12cea4a}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AABB`](#structhighlo_1_1_a_a_b_b)` `[`Scaled`](#structhighlo_1_1_a_a_b_b_aeee2945aefa78883c6e0f37cfe06d9e7_1aeee2945aefa78883c6e0f37cfe06d9e7)`(const glm::vec3 & scale) const` {#structhighlo_1_1_a_a_b_b_aeee2945aefa78883c6e0f37cfe06d9e7_1aeee2945aefa78883c6e0f37cfe06d9e7}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AABB`](#structhighlo_1_1_a_a_b_b)` `[`Transformed`](#structhighlo_1_1_a_a_b_b_a241c9eddf500aa82c93ee739bf8dcb36_1a241c9eddf500aa82c93ee739bf8dcb36)`(const glm::vec3 & translation,const glm::vec3 & scale)` {#structhighlo_1_1_a_a_b_b_a241c9eddf500aa82c93ee739bf8dcb36_1a241c9eddf500aa82c93ee739bf8dcb36}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Set`](#structhighlo_1_1_a_a_b_b_a4b3dac6fbab6fd050a25fdcfb544807d_1a4b3dac6fbab6fd050a25fdcfb544807d)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & other,const glm::vec3 & translation)` {#structhighlo_1_1_a_a_b_b_a4b3dac6fbab6fd050a25fdcfb544807d_1a4b3dac6fbab6fd050a25fdcfb544807d}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`UpdateDimensions`](#structhighlo_1_1_a_a_b_b_ae5ec327ade96b7704d9b3f0b54e98986_1ae5ec327ade96b7704d9b3f0b54e98986)`(const glm::vec3 & min,const glm::vec3 & max)` {#structhighlo_1_1_a_a_b_b_ae5ec327ade96b7704d9b3f0b54e98986_1ae5ec327ade96b7704d9b3f0b54e98986}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` std::vector< glm::vec3 > `[`GetCorners`](#structhighlo_1_1_a_a_b_b_a611615a71c2ee5318a7291ae81489d6d_1a611615a71c2ee5318a7291ae81489d6d)`()` {#structhighlo_1_1_a_a_b_b_a611615a71c2ee5318a7291ae81489d6d_1a611615a71c2ee5318a7291ae81489d6d}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` float `[`GetRadius`](#structhighlo_1_1_a_a_b_b_aa75055143e932dc631cb66d3707c3ba4_1aa75055143e932dc631cb66d3707c3ba4)`() const` {#structhighlo_1_1_a_a_b_b_aa75055143e932dc631cb66d3707c3ba4_1aa75055143e932dc631cb66d3707c3ba4}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsOutside`](#structhighlo_1_1_a_a_b_b_ae83be3d6c58890a5e6da913b56bc87c5_1ae83be3d6c58890a5e6da913b56bc87c5)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & other) const` {#structhighlo_1_1_a_a_b_b_ae83be3d6c58890a5e6da913b56bc87c5_1ae83be3d6c58890a5e6da913b56bc87c5}

#### `public inline static `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsOutside`](#structhighlo_1_1_a_a_b_b_a7e893c1c18a1ffd640103058eff8be5c_1a7e893c1c18a1ffd640103058eff8be5c)`(const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & left,const `[`AABB`](#structhighlo_1_1_a_a_b_b)` & right)` {#structhighlo_1_1_a_a_b_b_a7e893c1c18a1ffd640103058eff8be5c_1a7e893c1c18a1ffd640103058eff8be5c}
