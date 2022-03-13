## class `highlo::ComputePipeline` {#classhighlo_1_1_compute_pipeline}

```
class highlo::ComputePipeline
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~ComputePipeline`](#classhighlo_1_1_compute_pipeline_a5fca3d4f07b3b3f4d19391aed570b688_1a5fca3d4f07b3b3f4d19391aed570b688)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Begin`](#classhighlo_1_1_compute_pipeline_a40f482a730ce302ae40cbbc077219d9d_1a40f482a730ce302ae40cbbc077219d9d)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [CommandBuffer`](docs-api/api-highlo--CommandBuffer.md#classhighlo_1_1_command_buffer)` > renderCommandBuffer)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`End`](#classhighlo_1_1_compute_pipeline_a9e7c81175ca1b86ac22944c9d20d0f0e_1a9e7c81175ca1b86ac22944c9d20d0f0e)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Invalidate`](#classhighlo_1_1_compute_pipeline_a40275a6e44b1b439d1867f8b7a4d5861_1a40275a6e44b1b439d1867f8b7a4d5861)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`GetShader`](#classhighlo_1_1_compute_pipeline_af0591ca91d996a20edb8f7529524f715_1af0591ca91d996a20edb8f7529524f715)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [ComputePipeline`](#classhighlo_1_1_compute_pipeline)` > `[`Create`](#classhighlo_1_1_compute_pipeline_a687e9290172a92968291b99744e52879_1a687e9290172a92968291b99744e52879)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > computeShader)` | 

### Members

#### `public inline virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~ComputePipeline`](#classhighlo_1_1_compute_pipeline_a5fca3d4f07b3b3f4d19391aed570b688_1a5fca3d4f07b3b3f4d19391aed570b688)`()` {#classhighlo_1_1_compute_pipeline_a5fca3d4f07b3b3f4d19391aed570b688_1a5fca3d4f07b3b3f4d19391aed570b688}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Begin`](#classhighlo_1_1_compute_pipeline_a40f482a730ce302ae40cbbc077219d9d_1a40f482a730ce302ae40cbbc077219d9d)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [CommandBuffer`](docs-api/api-highlo--CommandBuffer.md#classhighlo_1_1_command_buffer)` > renderCommandBuffer)` {#classhighlo_1_1_compute_pipeline_a40f482a730ce302ae40cbbc077219d9d_1a40f482a730ce302ae40cbbc077219d9d}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`End`](#classhighlo_1_1_compute_pipeline_a9e7c81175ca1b86ac22944c9d20d0f0e_1a9e7c81175ca1b86ac22944c9d20d0f0e)`()` {#classhighlo_1_1_compute_pipeline_a9e7c81175ca1b86ac22944c9d20d0f0e_1a9e7c81175ca1b86ac22944c9d20d0f0e}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Invalidate`](#classhighlo_1_1_compute_pipeline_a40275a6e44b1b439d1867f8b7a4d5861_1a40275a6e44b1b439d1867f8b7a4d5861)`()` {#classhighlo_1_1_compute_pipeline_a40275a6e44b1b439d1867f8b7a4d5861_1a40275a6e44b1b439d1867f8b7a4d5861}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`GetShader`](#classhighlo_1_1_compute_pipeline_af0591ca91d996a20edb8f7529524f715_1af0591ca91d996a20edb8f7529524f715)`()` {#classhighlo_1_1_compute_pipeline_af0591ca91d996a20edb8f7529524f715_1af0591ca91d996a20edb8f7529524f715}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [ComputePipeline`](#classhighlo_1_1_compute_pipeline)` > `[`Create`](#classhighlo_1_1_compute_pipeline_a687e9290172a92968291b99744e52879_1a687e9290172a92968291b99744e52879)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > computeShader)` {#classhighlo_1_1_compute_pipeline_a687e9290172a92968291b99744e52879_1a687e9290172a92968291b99744e52879}

