## class `highlo::SceneRenderer` {#classhighlo_1_1_scene_renderer}

```
class highlo::SceneRenderer
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`SceneRenderer`](#classhighlo_1_1_scene_renderer_a85ed654fe25a5fc21935d9a5297adb67_1a85ed654fe25a5fc21935d9a5297adb67)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Scene`](docs-api/api-highlo--Scene.md#classhighlo_1_1_scene)` > & scene,`[`SceneRendererSpecification`](docs-api/api-highlo--SceneRendererSpecification.md#structhighlo_1_1_scene_renderer_specification)` & specification)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~SceneRenderer`](#classhighlo_1_1_scene_renderer_a189d475da344fe334862f5f7d7c52ed8_1a189d475da344fe334862f5f7d7c52ed8)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_scene_renderer_a717dc41c72f39df3bd45020548ea35e7_1a717dc41c72f39df3bd45020548ea35e7)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetScene`](#classhighlo_1_1_scene_renderer_a1ec1b211c03781c0e905ae2df4921ccf_1a1ec1b211c03781c0e905ae2df4921ccf)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Scene`](docs-api/api-highlo--Scene.md#classhighlo_1_1_scene)` > scene)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewportSize`](#classhighlo_1_1_scene_renderer_a5cdd85ee26badb2d12da4dca0f77da79_1a5cdd85ee26badb2d12da4dca0f77da79)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetClearColor`](#classhighlo_1_1_scene_renderer_a10f7429c5b7a5e74cf5fddfeb0463ae9_1a10f7429c5b7a5e74cf5fddfeb0463ae9)`(const glm::vec4 & color)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetLineWidth`](#classhighlo_1_1_scene_renderer_af34ae7a08c42635b09f71150cc2e6a2c_1af34ae7a08c42635b09f71150cc2e6a2c)`(float width)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BeginScene`](#classhighlo_1_1_scene_renderer_a0d913a4995a567e18672312fbaebb4c9_1a0d913a4995a567e18672312fbaebb4c9)`(const `[`Camera`](docs-api/api-highlo--Camera.md#classhighlo_1_1_camera)` & camera)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`EndScene`](#classhighlo_1_1_scene_renderer_a751621fe946410d119700af64a674615_1a751621fe946410d119700af64a674615)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[SceneRendererOptions`](docs-api/api-highlo--SceneRendererOptions.md#structhighlo_1_1_scene_renderer_options)` & `[`GetOptions`](#classhighlo_1_1_scene_renderer_a79652470bce05bec02564a26b984b25d_1a79652470bce05bec02564a26b984b25d)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderPass`](docs-api/api-highlo--RenderPass.md#classhighlo_1_1_render_pass)` > `[`GetFinalRenderPass`](#classhighlo_1_1_scene_renderer_a7f57a3c444ee50234633fabc996a6efe_1a7f57a3c444ee50234633fabc996a6efe)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetFinalRenderTexture`](#classhighlo_1_1_scene_renderer_aaa8914795de9cf64f826209bba93cfd3_1aaa8914795de9cf64f826209bba93cfd3)`()` | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportWidth`](#classhighlo_1_1_scene_renderer_1a9c8b94c75f9457127ba513ce90f4e856) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportHeight`](#classhighlo_1_1_scene_renderer_1aeae6237fd73b101840b0bef768f30003) | 
`private float `[`m_InvertedViewportWidth`](#classhighlo_1_1_scene_renderer_1a3251237043627a00a2d4ec50fc1caa2c) | 
`private float `[`m_InvertedViewportHeight`](#classhighlo_1_1_scene_renderer_1a9269c63b10113b6f4de013a5e4dd46cf) | 
`private bool `[`m_NeedsResize`](#classhighlo_1_1_scene_renderer_1af6894e1a046e198f64271e7d956760d2) | 
`private bool `[`m_Active`](#classhighlo_1_1_scene_renderer_1a45d6731dd8c0e72283d670e6bee6f798) | 
`private float `[`m_LineWidth`](#classhighlo_1_1_scene_renderer_1abd1061756cb092fe084a974c0e5beb76) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Scene`](docs-api/api-highlo--Scene.md#classhighlo_1_1_scene)` > `[`m_Scene`](#classhighlo_1_1_scene_renderer_1aeb360fdcc20865396f2d444ec0469a7b) | 
`private `[`SceneRendererSpecification`](docs-api/api-highlo--SceneRendererSpecification.md#structhighlo_1_1_scene_renderer_specification)` `[`m_Specification`](#classhighlo_1_1_scene_renderer_1a649c025c26e3d926e1f45a826d0f65e4) | 
`private `[`SceneRendererOptions`](docs-api/api-highlo--SceneRendererOptions.md#structhighlo_1_1_scene_renderer_options)` `[`m_RendererOptions`](#classhighlo_1_1_scene_renderer_1a97ed591f441725c3277532c133676b67) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderPass`](docs-api/api-highlo--RenderPass.md#classhighlo_1_1_render_pass)` > `[`m_CompositeRenderPass`](#classhighlo_1_1_scene_renderer_1a1732ef72cf380ba3775547dbb3a0a949) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexArray`](docs-api/api-highlo--VertexArray.md#classhighlo_1_1_vertex_array)` > `[`m_GridVertexArray`](#classhighlo_1_1_scene_renderer_1ac15632f6003cacf7b33e0576742855f0) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`m_GridShader`](#classhighlo_1_1_scene_renderer_1a89030f7feb3ad93db1635bfa78a27871) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_GridMaterial`](#classhighlo_1_1_scene_renderer_1a8902ba668ad7d7e1e8bad3f38bee82a5) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_WireframeMaterial`](#classhighlo_1_1_scene_renderer_1aaa7e2cb09577c73608f192578fea291d) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_OutlineMaterial`](#classhighlo_1_1_scene_renderer_1a92f26aa0290a9879f5f9fbc06dcadd64) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_OutlineAnimMaterial`](#classhighlo_1_1_scene_renderer_1abe34eeb3970752996be8516d092326ce) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_ColliderMaterial`](#classhighlo_1_1_scene_renderer_1a1b40832ceeec8f693b7be45306c069ee) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InitGrid`](#classhighlo_1_1_scene_renderer_1a0308d64307823a8fec9a7917a1046c88)`()` | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InitSkybox`](#classhighlo_1_1_scene_renderer_1a748f2535f025fdf75b80ff14fbaa8d12)`()` | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InitCompositePass`](#classhighlo_1_1_scene_renderer_1a5909a2858be81a9dbb3d2fc27cf67edf)`()` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`SceneRenderer`](#classhighlo_1_1_scene_renderer_a85ed654fe25a5fc21935d9a5297adb67_1a85ed654fe25a5fc21935d9a5297adb67)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Scene`](docs-api/api-highlo--Scene.md#classhighlo_1_1_scene)` > & scene,`[`SceneRendererSpecification`](docs-api/api-highlo--SceneRendererSpecification.md#structhighlo_1_1_scene_renderer_specification)` & specification)` {#classhighlo_1_1_scene_renderer_a85ed654fe25a5fc21935d9a5297adb67_1a85ed654fe25a5fc21935d9a5297adb67}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~SceneRenderer`](#classhighlo_1_1_scene_renderer_a189d475da344fe334862f5f7d7c52ed8_1a189d475da344fe334862f5f7d7c52ed8)`()` {#classhighlo_1_1_scene_renderer_a189d475da344fe334862f5f7d7c52ed8_1a189d475da344fe334862f5f7d7c52ed8}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_scene_renderer_a717dc41c72f39df3bd45020548ea35e7_1a717dc41c72f39df3bd45020548ea35e7)`()` {#classhighlo_1_1_scene_renderer_a717dc41c72f39df3bd45020548ea35e7_1a717dc41c72f39df3bd45020548ea35e7}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetScene`](#classhighlo_1_1_scene_renderer_a1ec1b211c03781c0e905ae2df4921ccf_1a1ec1b211c03781c0e905ae2df4921ccf)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Scene`](docs-api/api-highlo--Scene.md#classhighlo_1_1_scene)` > scene)` {#classhighlo_1_1_scene_renderer_a1ec1b211c03781c0e905ae2df4921ccf_1a1ec1b211c03781c0e905ae2df4921ccf}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetViewportSize`](#classhighlo_1_1_scene_renderer_a5cdd85ee26badb2d12da4dca0f77da79_1a5cdd85ee26badb2d12da4dca0f77da79)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_scene_renderer_a5cdd85ee26badb2d12da4dca0f77da79_1a5cdd85ee26badb2d12da4dca0f77da79}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetClearColor`](#classhighlo_1_1_scene_renderer_a10f7429c5b7a5e74cf5fddfeb0463ae9_1a10f7429c5b7a5e74cf5fddfeb0463ae9)`(const glm::vec4 & color)` {#classhighlo_1_1_scene_renderer_a10f7429c5b7a5e74cf5fddfeb0463ae9_1a10f7429c5b7a5e74cf5fddfeb0463ae9}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetLineWidth`](#classhighlo_1_1_scene_renderer_af34ae7a08c42635b09f71150cc2e6a2c_1af34ae7a08c42635b09f71150cc2e6a2c)`(float width)` {#classhighlo_1_1_scene_renderer_af34ae7a08c42635b09f71150cc2e6a2c_1af34ae7a08c42635b09f71150cc2e6a2c}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BeginScene`](#classhighlo_1_1_scene_renderer_a0d913a4995a567e18672312fbaebb4c9_1a0d913a4995a567e18672312fbaebb4c9)`(const `[`Camera`](docs-api/api-highlo--Camera.md#classhighlo_1_1_camera)` & camera)` {#classhighlo_1_1_scene_renderer_a0d913a4995a567e18672312fbaebb4c9_1a0d913a4995a567e18672312fbaebb4c9}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`EndScene`](#classhighlo_1_1_scene_renderer_a751621fe946410d119700af64a674615_1a751621fe946410d119700af64a674615)`()` {#classhighlo_1_1_scene_renderer_a751621fe946410d119700af64a674615_1a751621fe946410d119700af64a674615}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[SceneRendererOptions`](docs-api/api-highlo--SceneRendererOptions.md#structhighlo_1_1_scene_renderer_options)` & `[`GetOptions`](#classhighlo_1_1_scene_renderer_a79652470bce05bec02564a26b984b25d_1a79652470bce05bec02564a26b984b25d)`()` {#classhighlo_1_1_scene_renderer_a79652470bce05bec02564a26b984b25d_1a79652470bce05bec02564a26b984b25d}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderPass`](docs-api/api-highlo--RenderPass.md#classhighlo_1_1_render_pass)` > `[`GetFinalRenderPass`](#classhighlo_1_1_scene_renderer_a7f57a3c444ee50234633fabc996a6efe_1a7f57a3c444ee50234633fabc996a6efe)`()` {#classhighlo_1_1_scene_renderer_a7f57a3c444ee50234633fabc996a6efe_1a7f57a3c444ee50234633fabc996a6efe}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`GetFinalRenderTexture`](#classhighlo_1_1_scene_renderer_aaa8914795de9cf64f826209bba93cfd3_1aaa8914795de9cf64f826209bba93cfd3)`()` {#classhighlo_1_1_scene_renderer_aaa8914795de9cf64f826209bba93cfd3_1aaa8914795de9cf64f826209bba93cfd3}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportWidth`](#classhighlo_1_1_scene_renderer_1a9c8b94c75f9457127ba513ce90f4e856) {#classhighlo_1_1_scene_renderer_1a9c8b94c75f9457127ba513ce90f4e856}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_ViewportHeight`](#classhighlo_1_1_scene_renderer_1aeae6237fd73b101840b0bef768f30003) {#classhighlo_1_1_scene_renderer_1aeae6237fd73b101840b0bef768f30003}

#### `private float `[`m_InvertedViewportWidth`](#classhighlo_1_1_scene_renderer_1a3251237043627a00a2d4ec50fc1caa2c) {#classhighlo_1_1_scene_renderer_1a3251237043627a00a2d4ec50fc1caa2c}

#### `private float `[`m_InvertedViewportHeight`](#classhighlo_1_1_scene_renderer_1a9269c63b10113b6f4de013a5e4dd46cf) {#classhighlo_1_1_scene_renderer_1a9269c63b10113b6f4de013a5e4dd46cf}

#### `private bool `[`m_NeedsResize`](#classhighlo_1_1_scene_renderer_1af6894e1a046e198f64271e7d956760d2) {#classhighlo_1_1_scene_renderer_1af6894e1a046e198f64271e7d956760d2}

#### `private bool `[`m_Active`](#classhighlo_1_1_scene_renderer_1a45d6731dd8c0e72283d670e6bee6f798) {#classhighlo_1_1_scene_renderer_1a45d6731dd8c0e72283d670e6bee6f798}

#### `private float `[`m_LineWidth`](#classhighlo_1_1_scene_renderer_1abd1061756cb092fe084a974c0e5beb76) {#classhighlo_1_1_scene_renderer_1abd1061756cb092fe084a974c0e5beb76}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Scene`](docs-api/api-highlo--Scene.md#classhighlo_1_1_scene)` > `[`m_Scene`](#classhighlo_1_1_scene_renderer_1aeb360fdcc20865396f2d444ec0469a7b) {#classhighlo_1_1_scene_renderer_1aeb360fdcc20865396f2d444ec0469a7b}

#### `private `[`SceneRendererSpecification`](docs-api/api-highlo--SceneRendererSpecification.md#structhighlo_1_1_scene_renderer_specification)` `[`m_Specification`](#classhighlo_1_1_scene_renderer_1a649c025c26e3d926e1f45a826d0f65e4) {#classhighlo_1_1_scene_renderer_1a649c025c26e3d926e1f45a826d0f65e4}

#### `private `[`SceneRendererOptions`](docs-api/api-highlo--SceneRendererOptions.md#structhighlo_1_1_scene_renderer_options)` `[`m_RendererOptions`](#classhighlo_1_1_scene_renderer_1a97ed591f441725c3277532c133676b67) {#classhighlo_1_1_scene_renderer_1a97ed591f441725c3277532c133676b67}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderPass`](docs-api/api-highlo--RenderPass.md#classhighlo_1_1_render_pass)` > `[`m_CompositeRenderPass`](#classhighlo_1_1_scene_renderer_1a1732ef72cf380ba3775547dbb3a0a949) {#classhighlo_1_1_scene_renderer_1a1732ef72cf380ba3775547dbb3a0a949}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexArray`](docs-api/api-highlo--VertexArray.md#classhighlo_1_1_vertex_array)` > `[`m_GridVertexArray`](#classhighlo_1_1_scene_renderer_1ac15632f6003cacf7b33e0576742855f0) {#classhighlo_1_1_scene_renderer_1ac15632f6003cacf7b33e0576742855f0}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`m_GridShader`](#classhighlo_1_1_scene_renderer_1a89030f7feb3ad93db1635bfa78a27871) {#classhighlo_1_1_scene_renderer_1a89030f7feb3ad93db1635bfa78a27871}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_GridMaterial`](#classhighlo_1_1_scene_renderer_1a8902ba668ad7d7e1e8bad3f38bee82a5) {#classhighlo_1_1_scene_renderer_1a8902ba668ad7d7e1e8bad3f38bee82a5}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_WireframeMaterial`](#classhighlo_1_1_scene_renderer_1aaa7e2cb09577c73608f192578fea291d) {#classhighlo_1_1_scene_renderer_1aaa7e2cb09577c73608f192578fea291d}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_OutlineMaterial`](#classhighlo_1_1_scene_renderer_1a92f26aa0290a9879f5f9fbc06dcadd64) {#classhighlo_1_1_scene_renderer_1a92f26aa0290a9879f5f9fbc06dcadd64}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_OutlineAnimMaterial`](#classhighlo_1_1_scene_renderer_1abe34eeb3970752996be8516d092326ce) {#classhighlo_1_1_scene_renderer_1abe34eeb3970752996be8516d092326ce}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > `[`m_ColliderMaterial`](#classhighlo_1_1_scene_renderer_1a1b40832ceeec8f693b7be45306c069ee) {#classhighlo_1_1_scene_renderer_1a1b40832ceeec8f693b7be45306c069ee}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InitGrid`](#classhighlo_1_1_scene_renderer_1a0308d64307823a8fec9a7917a1046c88)`()` {#classhighlo_1_1_scene_renderer_1a0308d64307823a8fec9a7917a1046c88}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InitSkybox`](#classhighlo_1_1_scene_renderer_1a748f2535f025fdf75b80ff14fbaa8d12)`()` {#classhighlo_1_1_scene_renderer_1a748f2535f025fdf75b80ff14fbaa8d12}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`InitCompositePass`](#classhighlo_1_1_scene_renderer_1a5909a2858be81a9dbb3d2fc27cf67edf)`()` {#classhighlo_1_1_scene_renderer_1a5909a2858be81a9dbb3d2fc27cf67edf}

