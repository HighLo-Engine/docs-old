## class `highlo::ThreadRegistry` {#classhighlo_1_1_thread_registry}

```
class highlo::ThreadRegistry
  : public highlo::Singleton< ThreadRegistry >
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_thread_registry_ac86b952ade3cecf0ae036a01c8abecad_1ac86b952ade3cecf0ae036a01c8abecad)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Shutdown`](#classhighlo_1_1_thread_registry_a1ad48106baf1096c2cf6d08acfd05d2b_1a1ad48106baf1096c2cf6d08acfd05d2b)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * `[`GetThread`](#classhighlo_1_1_thread_registry_a1f2d9638cd02188d26dbdee3e2b550ee_1a1f2d9638cd02188d26dbdee3e2b550ee)`(`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` uuid)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`Count`](#classhighlo_1_1_thread_registry_a269dc0df4b7cc217b7932b88d3c4f225_1a269dc0df4b7cc217b7932b88d3c4f225)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`KillAll`](#classhighlo_1_1_thread_registry_a00191137c0465e5264d77ef5eacc2634_1a00191137c0465e5264d77ef5eacc2634)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Add`](#classhighlo_1_1_thread_registry_ae08ac428ec770b7b920c108f6f51531a_1ae08ac428ec770b7b920c108f6f51531a)`(`[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * thread)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Remove`](#classhighlo_1_1_thread_registry_aa6d7c18b413a50143bf3677ae0e36bec_1aa6d7c18b413a50143bf3677ae0e36bec)`(`[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * thread)` | 

### Members

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_thread_registry_ac86b952ade3cecf0ae036a01c8abecad_1ac86b952ade3cecf0ae036a01c8abecad)`()` {#classhighlo_1_1_thread_registry_ac86b952ade3cecf0ae036a01c8abecad_1ac86b952ade3cecf0ae036a01c8abecad}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Shutdown`](#classhighlo_1_1_thread_registry_a1ad48106baf1096c2cf6d08acfd05d2b_1a1ad48106baf1096c2cf6d08acfd05d2b)`()` {#classhighlo_1_1_thread_registry_a1ad48106baf1096c2cf6d08acfd05d2b_1a1ad48106baf1096c2cf6d08acfd05d2b}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * `[`GetThread`](#classhighlo_1_1_thread_registry_a1f2d9638cd02188d26dbdee3e2b550ee_1a1f2d9638cd02188d26dbdee3e2b550ee)`(`[`UUID`](docs-api/api-highlo--UUID.md#classhighlo_1_1_u_u_i_d)` uuid)` {#classhighlo_1_1_thread_registry_a1f2d9638cd02188d26dbdee3e2b550ee_1a1f2d9638cd02188d26dbdee3e2b550ee}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`Count`](#classhighlo_1_1_thread_registry_a269dc0df4b7cc217b7932b88d3c4f225_1a269dc0df4b7cc217b7932b88d3c4f225)`()` {#classhighlo_1_1_thread_registry_a269dc0df4b7cc217b7932b88d3c4f225_1a269dc0df4b7cc217b7932b88d3c4f225}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`KillAll`](#classhighlo_1_1_thread_registry_a00191137c0465e5264d77ef5eacc2634_1a00191137c0465e5264d77ef5eacc2634)`()` {#classhighlo_1_1_thread_registry_a00191137c0465e5264d77ef5eacc2634_1a00191137c0465e5264d77ef5eacc2634}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Add`](#classhighlo_1_1_thread_registry_ae08ac428ec770b7b920c108f6f51531a_1ae08ac428ec770b7b920c108f6f51531a)`(`[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * thread)` {#classhighlo_1_1_thread_registry_ae08ac428ec770b7b920c108f6f51531a_1ae08ac428ec770b7b920c108f6f51531a}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Remove`](#classhighlo_1_1_thread_registry_aa6d7c18b413a50143bf3677ae0e36bec_1aa6d7c18b413a50143bf3677ae0e36bec)`(`[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * thread)` {#classhighlo_1_1_thread_registry_aa6d7c18b413a50143bf3677ae0e36bec_1aa6d7c18b413a50143bf3677ae0e36bec}

