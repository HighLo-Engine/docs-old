## class `highlo::IRunnable` {#classhighlo_1_1_i_runnable}

Defines the function scope for a [Runnable](docs-api/api-highlo--Runnable.md#classhighlo_1_1_runnable) function inside [Thread](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread) operations.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~IRunnable`](#classhighlo_1_1_i_runnable_a6f4f9690c8546c146b7b4e912848974e_1a6f4f9690c8546c146b7b4e912848974e)`()` | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Init`](#classhighlo_1_1_i_runnable_af219f0dac5eabda40d86fcbf535feceb_1af219f0dac5eabda40d86fcbf535feceb)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`Run`](#classhighlo_1_1_i_runnable_a74491029f9d8056c45c1a7abb74cc045_1a74491029f9d8056c45c1a7abb74cc045)`()` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Stop`](#classhighlo_1_1_i_runnable_a781b3bc78b5d8d8307e0e0c01be48aee_1a781b3bc78b5d8d8307e0e0c01be48aee)`()` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Exit`](#classhighlo_1_1_i_runnable_a021732512b0eeb27e67f91b564f4d73e_1a021732512b0eeb27e67f91b564f4d73e)`()` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AfterExit`](#classhighlo_1_1_i_runnable_a2a6cc1d1834c599364d02326e7373cc2_1a2a6cc1d1834c599364d02326e7373cc2)`(bool wasKilled)` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnThreadStart`](#classhighlo_1_1_i_runnable_a2a93c7cc335447ddd77984fbd1b449bf_1a2a93c7cc335447ddd77984fbd1b449bf)`()` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnThreadEnd`](#classhighlo_1_1_i_runnable_aebf6ec31d150f6d4932f38dac1adcdbb_1aebf6ec31d150f6d4932f38dac1adcdbb)`(`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` exitCode)` | 

### Members

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~IRunnable`](#classhighlo_1_1_i_runnable_a6f4f9690c8546c146b7b4e912848974e_1a6f4f9690c8546c146b7b4e912848974e)`()` {#classhighlo_1_1_i_runnable_a6f4f9690c8546c146b7b4e912848974e_1a6f4f9690c8546c146b7b4e912848974e}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Init`](#classhighlo_1_1_i_runnable_af219f0dac5eabda40d86fcbf535feceb_1af219f0dac5eabda40d86fcbf535feceb)`()` {#classhighlo_1_1_i_runnable_af219f0dac5eabda40d86fcbf535feceb_1af219f0dac5eabda40d86fcbf535feceb}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`Run`](#classhighlo_1_1_i_runnable_a74491029f9d8056c45c1a7abb74cc045_1a74491029f9d8056c45c1a7abb74cc045)`()` {#classhighlo_1_1_i_runnable_a74491029f9d8056c45c1a7abb74cc045_1a74491029f9d8056c45c1a7abb74cc045}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Stop`](#classhighlo_1_1_i_runnable_a781b3bc78b5d8d8307e0e0c01be48aee_1a781b3bc78b5d8d8307e0e0c01be48aee)`()` {#classhighlo_1_1_i_runnable_a781b3bc78b5d8d8307e0e0c01be48aee_1a781b3bc78b5d8d8307e0e0c01be48aee}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Exit`](#classhighlo_1_1_i_runnable_a021732512b0eeb27e67f91b564f4d73e_1a021732512b0eeb27e67f91b564f4d73e)`()` {#classhighlo_1_1_i_runnable_a021732512b0eeb27e67f91b564f4d73e_1a021732512b0eeb27e67f91b564f4d73e}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AfterExit`](#classhighlo_1_1_i_runnable_a2a6cc1d1834c599364d02326e7373cc2_1a2a6cc1d1834c599364d02326e7373cc2)`(bool wasKilled)` {#classhighlo_1_1_i_runnable_a2a6cc1d1834c599364d02326e7373cc2_1a2a6cc1d1834c599364d02326e7373cc2}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnThreadStart`](#classhighlo_1_1_i_runnable_a2a93c7cc335447ddd77984fbd1b449bf_1a2a93c7cc335447ddd77984fbd1b449bf)`()` {#classhighlo_1_1_i_runnable_a2a93c7cc335447ddd77984fbd1b449bf_1a2a93c7cc335447ddd77984fbd1b449bf}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnThreadEnd`](#classhighlo_1_1_i_runnable_aebf6ec31d150f6d4932f38dac1adcdbb_1aebf6ec31d150f6d4932f38dac1adcdbb)`(`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` exitCode)` {#classhighlo_1_1_i_runnable_aebf6ec31d150f6d4932f38dac1adcdbb_1aebf6ec31d150f6d4932f38dac1adcdbb}

