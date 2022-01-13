## class `highlo::RenderCommandQueue` {#classhighlo_1_1_render_command_queue}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`RenderCommandQueue`](#classhighlo_1_1_render_command_queue_a2102203ed2d79ff795cc71a0c4d59f6f_1a2102203ed2d79ff795cc71a0c4d59f6f)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~RenderCommandQueue`](#classhighlo_1_1_render_command_queue_a3a5762bec765d942fc7651f9ecde239f_1a3a5762bec765d942fc7651f9ecde239f)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`Allocate`](#classhighlo_1_1_render_command_queue_ac85f1850646fb33738da945620f933a9_1ac85f1850646fb33738da945620f933a9)`(`[`RenderCommandFn`](#classhighlo_1_1_render_command_queue_a38793bceaf1e8570ef1f3d0bd21b2405_1a38793bceaf1e8570ef1f3d0bd21b2405)` func,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` size)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Execute`](#classhighlo_1_1_render_command_queue_ab0989427d4fb1e811db425401870704e_1ab0989427d4fb1e811db425401870704e)`()` | 
`typedef `[`RenderCommandFn`](#classhighlo_1_1_render_command_queue_a38793bceaf1e8570ef1f3d0bd21b2405_1a38793bceaf1e8570ef1f3d0bd21b2405) | 
`private `[`uint8`](#_base_types_8h_adde6aaee8457bee49c2a92621fe22b79_1adde6aaee8457bee49c2a92621fe22b79)` * `[`m_CommandBuffer`](#classhighlo_1_1_render_command_queue_1ac144f75a5b41bc353c63881110bd67e3) | 
`private `[`uint8`](#_base_types_8h_adde6aaee8457bee49c2a92621fe22b79_1adde6aaee8457bee49c2a92621fe22b79)` * `[`m_CommandBufferPtr`](#classhighlo_1_1_render_command_queue_1a16e3dd6c55ec1a7c909db552baf960f4) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_CommandCount`](#classhighlo_1_1_render_command_queue_1a313c9387554ef7ce7d465c959e2ed17a) | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`RenderCommandQueue`](#classhighlo_1_1_render_command_queue_a2102203ed2d79ff795cc71a0c4d59f6f_1a2102203ed2d79ff795cc71a0c4d59f6f)`()` {#classhighlo_1_1_render_command_queue_a2102203ed2d79ff795cc71a0c4d59f6f_1a2102203ed2d79ff795cc71a0c4d59f6f}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~RenderCommandQueue`](#classhighlo_1_1_render_command_queue_a3a5762bec765d942fc7651f9ecde239f_1a3a5762bec765d942fc7651f9ecde239f)`()` {#classhighlo_1_1_render_command_queue_a3a5762bec765d942fc7651f9ecde239f_1a3a5762bec765d942fc7651f9ecde239f}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`Allocate`](#classhighlo_1_1_render_command_queue_ac85f1850646fb33738da945620f933a9_1ac85f1850646fb33738da945620f933a9)`(`[`RenderCommandFn`](#classhighlo_1_1_render_command_queue_a38793bceaf1e8570ef1f3d0bd21b2405_1a38793bceaf1e8570ef1f3d0bd21b2405)` func,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` size)` {#classhighlo_1_1_render_command_queue_ac85f1850646fb33738da945620f933a9_1ac85f1850646fb33738da945620f933a9}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Execute`](#classhighlo_1_1_render_command_queue_ab0989427d4fb1e811db425401870704e_1ab0989427d4fb1e811db425401870704e)`()` {#classhighlo_1_1_render_command_queue_ab0989427d4fb1e811db425401870704e_1ab0989427d4fb1e811db425401870704e}

#### `typedef `[`RenderCommandFn`](#classhighlo_1_1_render_command_queue_a38793bceaf1e8570ef1f3d0bd21b2405_1a38793bceaf1e8570ef1f3d0bd21b2405) {#classhighlo_1_1_render_command_queue_a38793bceaf1e8570ef1f3d0bd21b2405_1a38793bceaf1e8570ef1f3d0bd21b2405}

#### `private `[`uint8`](#_base_types_8h_adde6aaee8457bee49c2a92621fe22b79_1adde6aaee8457bee49c2a92621fe22b79)` * `[`m_CommandBuffer`](#classhighlo_1_1_render_command_queue_1ac144f75a5b41bc353c63881110bd67e3) {#classhighlo_1_1_render_command_queue_1ac144f75a5b41bc353c63881110bd67e3}

#### `private `[`uint8`](#_base_types_8h_adde6aaee8457bee49c2a92621fe22b79_1adde6aaee8457bee49c2a92621fe22b79)` * `[`m_CommandBufferPtr`](#classhighlo_1_1_render_command_queue_1a16e3dd6c55ec1a7c909db552baf960f4) {#classhighlo_1_1_render_command_queue_1a16e3dd6c55ec1a7c909db552baf960f4}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_CommandCount`](#classhighlo_1_1_render_command_queue_1a313c9387554ef7ce7d465c959e2ed17a) {#classhighlo_1_1_render_command_queue_1a313c9387554ef7ce7d465c959e2ed17a}

