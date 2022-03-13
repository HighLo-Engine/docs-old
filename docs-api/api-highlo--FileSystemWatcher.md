## class `highlo::FileSystemWatcher` {#classhighlo_1_1_file_system_watcher}

```
class highlo::FileSystemWatcher
  : public highlo::Singleton< FileSystemWatcher >
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Start`](#classhighlo_1_1_file_system_watcher_a821f9cb96dd5cf5f67e68881dc7b0148_1a821f9cb96dd5cf5f67e68881dc7b0148)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & filePath)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Stop`](#classhighlo_1_1_file_system_watcher_a28113c0961ab9bf6ebc96ca4daaaa46e_1a28113c0961ab9bf6ebc96ca4daaaa46e)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetWatchPath`](#classhighlo_1_1_file_system_watcher_a8ab37ae9319ef1ae4cc21621e20defe5_1a8ab37ae9319ef1ae4cc21621e20defe5)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & filePath)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DisableWatchUntilNextAction`](#classhighlo_1_1_file_system_watcher_a7e8c09fd9802d8058cbdd765c36d5165_1a7e8c09fd9802d8058cbdd765c36d5165)`()` | 
`private static `[`ULONG`](#_base_types_8h_af632da489ebc3708ec3ab6791ee53fa4_1af632da489ebc3708ec3ab6791ee53fa4)` `[`Watch`](#classhighlo_1_1_file_system_watcher_1a85af36b3feb085fc75c4866f5d28bb9d)`(`[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * param)` | 

### Members

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Start`](#classhighlo_1_1_file_system_watcher_a821f9cb96dd5cf5f67e68881dc7b0148_1a821f9cb96dd5cf5f67e68881dc7b0148)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & filePath)` {#classhighlo_1_1_file_system_watcher_a821f9cb96dd5cf5f67e68881dc7b0148_1a821f9cb96dd5cf5f67e68881dc7b0148}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Stop`](#classhighlo_1_1_file_system_watcher_a28113c0961ab9bf6ebc96ca4daaaa46e_1a28113c0961ab9bf6ebc96ca4daaaa46e)`()` {#classhighlo_1_1_file_system_watcher_a28113c0961ab9bf6ebc96ca4daaaa46e_1a28113c0961ab9bf6ebc96ca4daaaa46e}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetWatchPath`](#classhighlo_1_1_file_system_watcher_a8ab37ae9319ef1ae4cc21621e20defe5_1a8ab37ae9319ef1ae4cc21621e20defe5)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & filePath)` {#classhighlo_1_1_file_system_watcher_a8ab37ae9319ef1ae4cc21621e20defe5_1a8ab37ae9319ef1ae4cc21621e20defe5}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DisableWatchUntilNextAction`](#classhighlo_1_1_file_system_watcher_a7e8c09fd9802d8058cbdd765c36d5165_1a7e8c09fd9802d8058cbdd765c36d5165)`()` {#classhighlo_1_1_file_system_watcher_a7e8c09fd9802d8058cbdd765c36d5165_1a7e8c09fd9802d8058cbdd765c36d5165}

#### `private static `[`ULONG`](#_base_types_8h_af632da489ebc3708ec3ab6791ee53fa4_1af632da489ebc3708ec3ab6791ee53fa4)` `[`Watch`](#classhighlo_1_1_file_system_watcher_1a85af36b3feb085fc75c4866f5d28bb9d)`(`[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * param)` {#classhighlo_1_1_file_system_watcher_1a85af36b3feb085fc75c4866f5d28bb9d}

