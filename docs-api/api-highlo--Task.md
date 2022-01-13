## class `highlo::Task` {#classhighlo_1_1_task}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`HL_NON_COPYABLE`](#classhighlo_1_1_task_adc044642564ee7851fa5d6eef0aafa6a_1adc044642564ee7851fa5d6eef0aafa6a)`(`[`Task`](#classhighlo_1_1_task)`)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) HL_FORCE_INLINE [TaskState`](docs-api/api-highlo.md#namespacehighlo_aae07ecc26240aafb239ccd26ee119c94_1aae07ecc26240aafb239ccd26ee119c94)` `[`GetState`](#classhighlo_1_1_task_a3a31e04e843263a1fda4557b3144d9e5_1a3a31e04e843263a1fda4557b3144d9e5)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) HL_FORCE_INLINE [Task`](#classhighlo_1_1_task)` * `[`GetNextTask`](#classhighlo_1_1_task_aa76192d3d06aa40815ab17d386f62e5f_1aa76192d3d06aa40815ab17d386f62e5f)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsCanceled`](#classhighlo_1_1_task_a4e5724f4f799f882d4b277b10b6d2c94_1a4e5724f4f799f882d4b277b10b6d2c94)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsFailed`](#classhighlo_1_1_task_a2bbcec26af6d255257c23b1d262906d9_1a2bbcec26af6d255257c23b1d262906d9)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsQueued`](#classhighlo_1_1_task_a86b7c380480b35fe188e873726ae568d_1a86b7c380480b35fe188e873726ae568d)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsRunning`](#classhighlo_1_1_task_a6918ce2b0df0ef817cb7f20597fbb50c_1a6918ce2b0df0ef817cb7f20597fbb50c)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsFinished`](#classhighlo_1_1_task_a773ca09e68af4042fdf313a06c3a3d06_1a773ca09e68af4042fdf313a06c3a3d06)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`HasEnded`](#classhighlo_1_1_task_a79885700918ad7ca24991ecb5d88215b_1a79885700918ad7ca24991ecb5d88215b)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`HasBeenCanceled`](#classhighlo_1_1_task_aed74b04f64a4178a159d533224d4ce2f_1aed74b04f64a4178a159d533224d4ce2f)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Start`](#classhighlo_1_1_task_a999369d0ad9602f525bac1482544bb85_1a999369d0ad9602f525bac1482544bb85)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Cancel`](#classhighlo_1_1_task_a7505174be50a57762185bd89329228d3_1a7505174be50a57762185bd89329228d3)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Task`](#classhighlo_1_1_task)` * `[`ContinueWith`](#classhighlo_1_1_task_a498b1ae73fa50fa9131a2e78b33a56fb_1a498b1ae73fa50fa9131a2e78b33a56fb)`(`[`Task`](#classhighlo_1_1_task)` * task)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Task`](#classhighlo_1_1_task)` * `[`StartNew`](#classhighlo_1_1_task_a47727960078e65f9c3601aec761558f3_1a47727960078e65f9c3601aec761558f3)`(`[`Task`](#classhighlo_1_1_task)` * task)` | 
`protected `[`int64`](#_base_types_8h_a87dc1c46a17e3ee6037afdb6aef76632_1a87dc1c46a17e3ee6037afdb6aef76632)` `[`m_CancelFlag`](#classhighlo_1_1_task_a3f95c270cf2fd10837712f6812244d89_1a3f95c270cf2fd10837712f6812244d89) | 
`protected `[`TaskState`](docs-api/api-highlo.md#namespacehighlo_aae07ecc26240aafb239ccd26ee119c94_1aae07ecc26240aafb239ccd26ee119c94)` `[`m_State`](#classhighlo_1_1_task_aad95caee6dc53ad3dbf83df38ebc766c_1aad95caee6dc53ad3dbf83df38ebc766c) | 
`protected `[`Task`](#classhighlo_1_1_task)` * `[`m_NextTask`](#classhighlo_1_1_task_a3cf954bb75b1792e518409e0daa5f12e_1a3cf954bb75b1792e518409e0daa5f12e) | 
`protected `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Execute`](#classhighlo_1_1_task_aa1ff2a532f89362d4c4556d9232adb33_1aa1ff2a532f89362d4c4556d9232adb33)`()` | 
`protected `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Wait`](#classhighlo_1_1_task_a6ae82ce35f7e3055ae9d3cd3d5b41122_1a6ae82ce35f7e3055ae9d3cd3d5b41122)`(double timeInMilliseconds) const` | 
`protected `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Run`](#classhighlo_1_1_task_acd1b1416eed2d04af951550bd8cf11d8_1acd1b1416eed2d04af951550bd8cf11d8)`()` | 
`protected `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Enqueue`](#classhighlo_1_1_task_a885e13e4612398a9077e5e898a89dce1_1a885e13e4612398a9077e5e898a89dce1)`()` | 
`protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnStart`](#classhighlo_1_1_task_a63454a964eb847bc54d0c822bb4fc8ac_1a63454a964eb847bc54d0c822bb4fc8ac)`()` | 
`protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEnd`](#classhighlo_1_1_task_ad432b2aa642ceb35733e0d48ce3994fb_1ad432b2aa642ceb35733e0d48ce3994fb)`()` | 
`protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnFinish`](#classhighlo_1_1_task_ad9c0c544e438a1c772678825094be9fb_1ad9c0c544e438a1c772678825094be9fb)`()` | 
`protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnFail`](#classhighlo_1_1_task_a4d4407c6dce86cc3d87954310096f96e_1a4d4407c6dce86cc3d87954310096f96e)`()` | 
`protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnCancel`](#classhighlo_1_1_task_aafc82983fa2b50e2be0149147840fe1a_1aafc82983fa2b50e2be0149147840fe1a)`()` | 
`public template<>`  <br/>`inline static `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`WaitAll`](#classhighlo_1_1_task_a56a5bf8dde6fe0efaba8ddc63829df70_1a56a5bf8dde6fe0efaba8ddc63829df70)`(std::vector< T * > & tasks,double timeoutInMilliseconds)` | 
`public template<>`  <br/>`inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CancelAll`](#classhighlo_1_1_task_ae5d8169ce148e8994045c9e66c5594d5_1ae5d8169ce148e8994045c9e66c5594d5)`(std::vector< T * > & tasks)` | 

### Members

#### `public  `[`HL_NON_COPYABLE`](#classhighlo_1_1_task_adc044642564ee7851fa5d6eef0aafa6a_1adc044642564ee7851fa5d6eef0aafa6a)`(`[`Task`](#classhighlo_1_1_task)`)` {#classhighlo_1_1_task_adc044642564ee7851fa5d6eef0aafa6a_1adc044642564ee7851fa5d6eef0aafa6a}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) HL_FORCE_INLINE [TaskState`](docs-api/api-highlo.md#namespacehighlo_aae07ecc26240aafb239ccd26ee119c94_1aae07ecc26240aafb239ccd26ee119c94)` `[`GetState`](#classhighlo_1_1_task_a3a31e04e843263a1fda4557b3144d9e5_1a3a31e04e843263a1fda4557b3144d9e5)`() const` {#classhighlo_1_1_task_a3a31e04e843263a1fda4557b3144d9e5_1a3a31e04e843263a1fda4557b3144d9e5}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) HL_FORCE_INLINE [Task`](#classhighlo_1_1_task)` * `[`GetNextTask`](#classhighlo_1_1_task_aa76192d3d06aa40815ab17d386f62e5f_1aa76192d3d06aa40815ab17d386f62e5f)`() const` {#classhighlo_1_1_task_aa76192d3d06aa40815ab17d386f62e5f_1aa76192d3d06aa40815ab17d386f62e5f}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsCanceled`](#classhighlo_1_1_task_a4e5724f4f799f882d4b277b10b6d2c94_1a4e5724f4f799f882d4b277b10b6d2c94)`() const` {#classhighlo_1_1_task_a4e5724f4f799f882d4b277b10b6d2c94_1a4e5724f4f799f882d4b277b10b6d2c94}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsFailed`](#classhighlo_1_1_task_a2bbcec26af6d255257c23b1d262906d9_1a2bbcec26af6d255257c23b1d262906d9)`() const` {#classhighlo_1_1_task_a2bbcec26af6d255257c23b1d262906d9_1a2bbcec26af6d255257c23b1d262906d9}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsQueued`](#classhighlo_1_1_task_a86b7c380480b35fe188e873726ae568d_1a86b7c380480b35fe188e873726ae568d)`() const` {#classhighlo_1_1_task_a86b7c380480b35fe188e873726ae568d_1a86b7c380480b35fe188e873726ae568d}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsRunning`](#classhighlo_1_1_task_a6918ce2b0df0ef817cb7f20597fbb50c_1a6918ce2b0df0ef817cb7f20597fbb50c)`() const` {#classhighlo_1_1_task_a6918ce2b0df0ef817cb7f20597fbb50c_1a6918ce2b0df0ef817cb7f20597fbb50c}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`IsFinished`](#classhighlo_1_1_task_a773ca09e68af4042fdf313a06c3a3d06_1a773ca09e68af4042fdf313a06c3a3d06)`() const` {#classhighlo_1_1_task_a773ca09e68af4042fdf313a06c3a3d06_1a773ca09e68af4042fdf313a06c3a3d06}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`HasEnded`](#classhighlo_1_1_task_a79885700918ad7ca24991ecb5d88215b_1a79885700918ad7ca24991ecb5d88215b)`() const` {#classhighlo_1_1_task_a79885700918ad7ca24991ecb5d88215b_1a79885700918ad7ca24991ecb5d88215b}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` HL_FORCE_INLINE bool `[`HasBeenCanceled`](#classhighlo_1_1_task_aed74b04f64a4178a159d533224d4ce2f_1aed74b04f64a4178a159d533224d4ce2f)`() const` {#classhighlo_1_1_task_aed74b04f64a4178a159d533224d4ce2f_1aed74b04f64a4178a159d533224d4ce2f}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Start`](#classhighlo_1_1_task_a999369d0ad9602f525bac1482544bb85_1a999369d0ad9602f525bac1482544bb85)`()` {#classhighlo_1_1_task_a999369d0ad9602f525bac1482544bb85_1a999369d0ad9602f525bac1482544bb85}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Cancel`](#classhighlo_1_1_task_a7505174be50a57762185bd89329228d3_1a7505174be50a57762185bd89329228d3)`()` {#classhighlo_1_1_task_a7505174be50a57762185bd89329228d3_1a7505174be50a57762185bd89329228d3}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Task`](#classhighlo_1_1_task)` * `[`ContinueWith`](#classhighlo_1_1_task_a498b1ae73fa50fa9131a2e78b33a56fb_1a498b1ae73fa50fa9131a2e78b33a56fb)`(`[`Task`](#classhighlo_1_1_task)` * task)` {#classhighlo_1_1_task_a498b1ae73fa50fa9131a2e78b33a56fb_1a498b1ae73fa50fa9131a2e78b33a56fb}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Task`](#classhighlo_1_1_task)` * `[`StartNew`](#classhighlo_1_1_task_a47727960078e65f9c3601aec761558f3_1a47727960078e65f9c3601aec761558f3)`(`[`Task`](#classhighlo_1_1_task)` * task)` {#classhighlo_1_1_task_a47727960078e65f9c3601aec761558f3_1a47727960078e65f9c3601aec761558f3}

#### `protected `[`int64`](#_base_types_8h_a87dc1c46a17e3ee6037afdb6aef76632_1a87dc1c46a17e3ee6037afdb6aef76632)` `[`m_CancelFlag`](#classhighlo_1_1_task_a3f95c270cf2fd10837712f6812244d89_1a3f95c270cf2fd10837712f6812244d89) {#classhighlo_1_1_task_a3f95c270cf2fd10837712f6812244d89_1a3f95c270cf2fd10837712f6812244d89}

#### `protected `[`TaskState`](docs-api/api-highlo.md#namespacehighlo_aae07ecc26240aafb239ccd26ee119c94_1aae07ecc26240aafb239ccd26ee119c94)` `[`m_State`](#classhighlo_1_1_task_aad95caee6dc53ad3dbf83df38ebc766c_1aad95caee6dc53ad3dbf83df38ebc766c) {#classhighlo_1_1_task_aad95caee6dc53ad3dbf83df38ebc766c_1aad95caee6dc53ad3dbf83df38ebc766c}

#### `protected `[`Task`](#classhighlo_1_1_task)` * `[`m_NextTask`](#classhighlo_1_1_task_a3cf954bb75b1792e518409e0daa5f12e_1a3cf954bb75b1792e518409e0daa5f12e) {#classhighlo_1_1_task_a3cf954bb75b1792e518409e0daa5f12e_1a3cf954bb75b1792e518409e0daa5f12e}

#### `protected `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Execute`](#classhighlo_1_1_task_aa1ff2a532f89362d4c4556d9232adb33_1aa1ff2a532f89362d4c4556d9232adb33)`()` {#classhighlo_1_1_task_aa1ff2a532f89362d4c4556d9232adb33_1aa1ff2a532f89362d4c4556d9232adb33}

#### `protected `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Wait`](#classhighlo_1_1_task_a6ae82ce35f7e3055ae9d3cd3d5b41122_1a6ae82ce35f7e3055ae9d3cd3d5b41122)`(double timeInMilliseconds) const` {#classhighlo_1_1_task_a6ae82ce35f7e3055ae9d3cd3d5b41122_1a6ae82ce35f7e3055ae9d3cd3d5b41122}

#### `protected `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Run`](#classhighlo_1_1_task_acd1b1416eed2d04af951550bd8cf11d8_1acd1b1416eed2d04af951550bd8cf11d8)`()` {#classhighlo_1_1_task_acd1b1416eed2d04af951550bd8cf11d8_1acd1b1416eed2d04af951550bd8cf11d8}

#### `protected `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Enqueue`](#classhighlo_1_1_task_a885e13e4612398a9077e5e898a89dce1_1a885e13e4612398a9077e5e898a89dce1)`()` {#classhighlo_1_1_task_a885e13e4612398a9077e5e898a89dce1_1a885e13e4612398a9077e5e898a89dce1}

#### `protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnStart`](#classhighlo_1_1_task_a63454a964eb847bc54d0c822bb4fc8ac_1a63454a964eb847bc54d0c822bb4fc8ac)`()` {#classhighlo_1_1_task_a63454a964eb847bc54d0c822bb4fc8ac_1a63454a964eb847bc54d0c822bb4fc8ac}

#### `protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnEnd`](#classhighlo_1_1_task_ad432b2aa642ceb35733e0d48ce3994fb_1ad432b2aa642ceb35733e0d48ce3994fb)`()` {#classhighlo_1_1_task_ad432b2aa642ceb35733e0d48ce3994fb_1ad432b2aa642ceb35733e0d48ce3994fb}

#### `protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnFinish`](#classhighlo_1_1_task_ad9c0c544e438a1c772678825094be9fb_1ad9c0c544e438a1c772678825094be9fb)`()` {#classhighlo_1_1_task_ad9c0c544e438a1c772678825094be9fb_1ad9c0c544e438a1c772678825094be9fb}

#### `protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnFail`](#classhighlo_1_1_task_a4d4407c6dce86cc3d87954310096f96e_1a4d4407c6dce86cc3d87954310096f96e)`()` {#classhighlo_1_1_task_a4d4407c6dce86cc3d87954310096f96e_1a4d4407c6dce86cc3d87954310096f96e}

#### `protected virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnCancel`](#classhighlo_1_1_task_aafc82983fa2b50e2be0149147840fe1a_1aafc82983fa2b50e2be0149147840fe1a)`()` {#classhighlo_1_1_task_aafc82983fa2b50e2be0149147840fe1a_1aafc82983fa2b50e2be0149147840fe1a}

#### `public template<>`  <br/>`inline static `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`WaitAll`](#classhighlo_1_1_task_a56a5bf8dde6fe0efaba8ddc63829df70_1a56a5bf8dde6fe0efaba8ddc63829df70)`(std::vector< T * > & tasks,double timeoutInMilliseconds)` {#classhighlo_1_1_task_a56a5bf8dde6fe0efaba8ddc63829df70_1a56a5bf8dde6fe0efaba8ddc63829df70}

#### `public template<>`  <br/>`inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CancelAll`](#classhighlo_1_1_task_ae5d8169ce148e8994045c9e66c5594d5_1ae5d8169ce148e8994045c9e66c5594d5)`(std::vector< T * > & tasks)` {#classhighlo_1_1_task_ae5d8169ce148e8994045c9e66c5594d5_1ae5d8169ce148e8994045c9e66c5594d5}
