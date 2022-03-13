## class `highlo::DX11SwapChain` {#classhighlo_1_1_d_x11_swap_chain}

```
class highlo::DX11SwapChain
  : public highlo::SwapChain
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`DX11SwapChain`](#classhighlo_1_1_d_x11_swap_chain_a29ee82ccd86c7021e5b242f05e95a12b_1a29ee82ccd86c7021e5b242f05e95a12b)`()` | 
`public virtual  `[`~DX11SwapChain`](#classhighlo_1_1_d_x11_swap_chain_a3c6d2cafbc00d5e20f8323902b7d2502_1a3c6d2cafbc00d5e20f8323902b7d2502)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_d_x11_swap_chain_a7a63bedbe8e428b5f19ca90fe65f814a_1a7a63bedbe8e428b5f19ca90fe65f814a)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderingContext`](docs-api/api-highlo--RenderingContext.md#classhighlo_1_1_rendering_context)` > & context)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InitSurface`](#classhighlo_1_1_d_x11_swap_chain_a3bf85e59702b0e6d40c7a43a69e89534_1a3bf85e59702b0e6d40c7a43a69e89534)`(`[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * windowHandle)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Create`](#classhighlo_1_1_d_x11_swap_chain_aa7a4ede667c7f4cafa921b31cdc9fd2b_1aa7a4ede667c7f4cafa921b31cdc9fd2b)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` * width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` * height,bool vsync)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Cleanup`](#classhighlo_1_1_d_x11_swap_chain_a94d8f138d5f7e3e2ae364a70f139afb4_1a94d8f138d5f7e3e2ae364a70f139afb4)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnResize`](#classhighlo_1_1_d_x11_swap_chain_a5b4399ce0b9971665b07bcb3257e02df_1a5b4399ce0b9971665b07bcb3257e02df)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BeginFrame`](#classhighlo_1_1_d_x11_swap_chain_afefe343af3decd49a3bed65694e92f24_1afefe343af3decd49a3bed65694e92f24)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`EndFrame`](#classhighlo_1_1_d_x11_swap_chain_a99b24a0e5ee264e3e7e3cb8d53ec1877_1a99b24a0e5ee264e3e7e3cb8d53ec1877)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Present`](#classhighlo_1_1_d_x11_swap_chain_a9f3c3a4d85483ab8a1da3f7161896667_1a9f3c3a4d85483ab8a1da3f7161896667)`()` | 
`public virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetImageCount`](#classhighlo_1_1_d_x11_swap_chain_aa3cd04e31d5de393240cc48727638316_1aa3cd04e31d5de393240cc48727638316)`() const` | 
`public virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetWidth`](#classhighlo_1_1_d_x11_swap_chain_a2f0d4300f5282fbd87722b53b0607817_1a2f0d4300f5282fbd87722b53b0607817)`() const` | 
`public virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetHeight`](#classhighlo_1_1_d_x11_swap_chain_ad3eff722c3f9bd7e9e67f60236861856_1ad3eff722c3f9bd7e9e67f60236861856)`() const` | 
`public virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetCurrentBufferIndex`](#classhighlo_1_1_d_x11_swap_chain_a5753791276813543345b780e8101f998_1a5753791276813543345b780e8101f998)`() const` | 

### Members

#### `public  `[`DX11SwapChain`](#classhighlo_1_1_d_x11_swap_chain_a29ee82ccd86c7021e5b242f05e95a12b_1a29ee82ccd86c7021e5b242f05e95a12b)`()` {#classhighlo_1_1_d_x11_swap_chain_a29ee82ccd86c7021e5b242f05e95a12b_1a29ee82ccd86c7021e5b242f05e95a12b}

#### `public virtual  `[`~DX11SwapChain`](#classhighlo_1_1_d_x11_swap_chain_a3c6d2cafbc00d5e20f8323902b7d2502_1a3c6d2cafbc00d5e20f8323902b7d2502)`()` {#classhighlo_1_1_d_x11_swap_chain_a3c6d2cafbc00d5e20f8323902b7d2502_1a3c6d2cafbc00d5e20f8323902b7d2502}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_d_x11_swap_chain_a7a63bedbe8e428b5f19ca90fe65f814a_1a7a63bedbe8e428b5f19ca90fe65f814a)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderingContext`](docs-api/api-highlo--RenderingContext.md#classhighlo_1_1_rendering_context)` > & context)` {#classhighlo_1_1_d_x11_swap_chain_a7a63bedbe8e428b5f19ca90fe65f814a_1a7a63bedbe8e428b5f19ca90fe65f814a}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InitSurface`](#classhighlo_1_1_d_x11_swap_chain_a3bf85e59702b0e6d40c7a43a69e89534_1a3bf85e59702b0e6d40c7a43a69e89534)`(`[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * windowHandle)` {#classhighlo_1_1_d_x11_swap_chain_a3bf85e59702b0e6d40c7a43a69e89534_1a3bf85e59702b0e6d40c7a43a69e89534}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Create`](#classhighlo_1_1_d_x11_swap_chain_aa7a4ede667c7f4cafa921b31cdc9fd2b_1aa7a4ede667c7f4cafa921b31cdc9fd2b)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` * width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` * height,bool vsync)` {#classhighlo_1_1_d_x11_swap_chain_aa7a4ede667c7f4cafa921b31cdc9fd2b_1aa7a4ede667c7f4cafa921b31cdc9fd2b}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Cleanup`](#classhighlo_1_1_d_x11_swap_chain_a94d8f138d5f7e3e2ae364a70f139afb4_1a94d8f138d5f7e3e2ae364a70f139afb4)`()` {#classhighlo_1_1_d_x11_swap_chain_a94d8f138d5f7e3e2ae364a70f139afb4_1a94d8f138d5f7e3e2ae364a70f139afb4}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnResize`](#classhighlo_1_1_d_x11_swap_chain_a5b4399ce0b9971665b07bcb3257e02df_1a5b4399ce0b9971665b07bcb3257e02df)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_d_x11_swap_chain_a5b4399ce0b9971665b07bcb3257e02df_1a5b4399ce0b9971665b07bcb3257e02df}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BeginFrame`](#classhighlo_1_1_d_x11_swap_chain_afefe343af3decd49a3bed65694e92f24_1afefe343af3decd49a3bed65694e92f24)`()` {#classhighlo_1_1_d_x11_swap_chain_afefe343af3decd49a3bed65694e92f24_1afefe343af3decd49a3bed65694e92f24}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`EndFrame`](#classhighlo_1_1_d_x11_swap_chain_a99b24a0e5ee264e3e7e3cb8d53ec1877_1a99b24a0e5ee264e3e7e3cb8d53ec1877)`()` {#classhighlo_1_1_d_x11_swap_chain_a99b24a0e5ee264e3e7e3cb8d53ec1877_1a99b24a0e5ee264e3e7e3cb8d53ec1877}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Present`](#classhighlo_1_1_d_x11_swap_chain_a9f3c3a4d85483ab8a1da3f7161896667_1a9f3c3a4d85483ab8a1da3f7161896667)`()` {#classhighlo_1_1_d_x11_swap_chain_a9f3c3a4d85483ab8a1da3f7161896667_1a9f3c3a4d85483ab8a1da3f7161896667}

#### `public virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetImageCount`](#classhighlo_1_1_d_x11_swap_chain_aa3cd04e31d5de393240cc48727638316_1aa3cd04e31d5de393240cc48727638316)`() const` {#classhighlo_1_1_d_x11_swap_chain_aa3cd04e31d5de393240cc48727638316_1aa3cd04e31d5de393240cc48727638316}

#### `public virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetWidth`](#classhighlo_1_1_d_x11_swap_chain_a2f0d4300f5282fbd87722b53b0607817_1a2f0d4300f5282fbd87722b53b0607817)`() const` {#classhighlo_1_1_d_x11_swap_chain_a2f0d4300f5282fbd87722b53b0607817_1a2f0d4300f5282fbd87722b53b0607817}

#### `public virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetHeight`](#classhighlo_1_1_d_x11_swap_chain_ad3eff722c3f9bd7e9e67f60236861856_1ad3eff722c3f9bd7e9e67f60236861856)`() const` {#classhighlo_1_1_d_x11_swap_chain_ad3eff722c3f9bd7e9e67f60236861856_1ad3eff722c3f9bd7e9e67f60236861856}

#### `public virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetCurrentBufferIndex`](#classhighlo_1_1_d_x11_swap_chain_a5753791276813543345b780e8101f998_1a5753791276813543345b780e8101f998)`() const` {#classhighlo_1_1_d_x11_swap_chain_a5753791276813543345b780e8101f998_1a5753791276813543345b780e8101f998}

