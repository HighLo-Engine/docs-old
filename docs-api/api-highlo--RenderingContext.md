## class `highlo::RenderingContext` {#classhighlo_1_1_rendering_context}

```
class highlo::RenderingContext
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~RenderingContext`](#classhighlo_1_1_rendering_context_a69d3981ed37ab9c1cfa7ac5e27b4714b_1a69d3981ed37ab9c1cfa7ac5e27b4714b)`() = default` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_rendering_context_a7767e241522b3ea6b5c65723ed4e5a74_1a7767e241522b3ea6b5c65723ed4e5a74)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SwapBuffers`](#classhighlo_1_1_rendering_context_abe0ce224d6382f76293d9a1aa138bbba_1abe0ce224d6382f76293d9a1aa138bbba)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`MakeCurrent`](#classhighlo_1_1_rendering_context_a10080b79b084c178c1818bfc605580d5_1a10080b79b084c178c1818bfc605580d5)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetSwapInterval`](#classhighlo_1_1_rendering_context_ab183ab275b550d02d73ed1ce088289ae_1ab183ab275b550d02d73ed1ce088289ae)`(bool bEnabled)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`GetCurrentContext`](#classhighlo_1_1_rendering_context_aaf117f1a66aaa4a9d599b1b1ddc1f3c2_1aaf117f1a66aaa4a9d599b1b1ddc1f3c2)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderingContext`](#classhighlo_1_1_rendering_context)` > `[`Create`](#classhighlo_1_1_rendering_context_aecf156447674657712c8155f5b90b168_1aecf156447674657712c8155f5b90b168)`(`[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * handle,`[`WindowData`](docs-api/api-highlo--WindowData.md#structhighlo_1_1_window_data)` & data)` | 

### Members

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~RenderingContext`](#classhighlo_1_1_rendering_context_a69d3981ed37ab9c1cfa7ac5e27b4714b_1a69d3981ed37ab9c1cfa7ac5e27b4714b)`() = default` {#classhighlo_1_1_rendering_context_a69d3981ed37ab9c1cfa7ac5e27b4714b_1a69d3981ed37ab9c1cfa7ac5e27b4714b}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_rendering_context_a7767e241522b3ea6b5c65723ed4e5a74_1a7767e241522b3ea6b5c65723ed4e5a74)`()` {#classhighlo_1_1_rendering_context_a7767e241522b3ea6b5c65723ed4e5a74_1a7767e241522b3ea6b5c65723ed4e5a74}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SwapBuffers`](#classhighlo_1_1_rendering_context_abe0ce224d6382f76293d9a1aa138bbba_1abe0ce224d6382f76293d9a1aa138bbba)`()` {#classhighlo_1_1_rendering_context_abe0ce224d6382f76293d9a1aa138bbba_1abe0ce224d6382f76293d9a1aa138bbba}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`MakeCurrent`](#classhighlo_1_1_rendering_context_a10080b79b084c178c1818bfc605580d5_1a10080b79b084c178c1818bfc605580d5)`()` {#classhighlo_1_1_rendering_context_a10080b79b084c178c1818bfc605580d5_1a10080b79b084c178c1818bfc605580d5}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetSwapInterval`](#classhighlo_1_1_rendering_context_ab183ab275b550d02d73ed1ce088289ae_1ab183ab275b550d02d73ed1ce088289ae)`(bool bEnabled)` {#classhighlo_1_1_rendering_context_ab183ab275b550d02d73ed1ce088289ae_1ab183ab275b550d02d73ed1ce088289ae}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`GetCurrentContext`](#classhighlo_1_1_rendering_context_aaf117f1a66aaa4a9d599b1b1ddc1f3c2_1aaf117f1a66aaa4a9d599b1b1ddc1f3c2)`()` {#classhighlo_1_1_rendering_context_aaf117f1a66aaa4a9d599b1b1ddc1f3c2_1aaf117f1a66aaa4a9d599b1b1ddc1f3c2}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderingContext`](#classhighlo_1_1_rendering_context)` > `[`Create`](#classhighlo_1_1_rendering_context_aecf156447674657712c8155f5b90b168_1aecf156447674657712c8155f5b90b168)`(`[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * handle,`[`WindowData`](docs-api/api-highlo--WindowData.md#structhighlo_1_1_window_data)` & data)` {#classhighlo_1_1_rendering_context_aecf156447674657712c8155f5b90b168_1aecf156447674657712c8155f5b90b168}

