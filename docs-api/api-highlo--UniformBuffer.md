## class `highlo::UniformBuffer` {#classhighlo_1_1_uniform_buffer}

```
class highlo::UniformBuffer
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~UniformBuffer`](#classhighlo_1_1_uniform_buffer_a672528312a5d76e7000c9485331f525a_1a672528312a5d76e7000c9485331f525a)`() = default` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Bind`](#classhighlo_1_1_uniform_buffer_a8c9afa5ffc1290c663385add334ab0a6_1a8c9afa5ffc1290c663385add334ab0a6)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Unbind`](#classhighlo_1_1_uniform_buffer_a3473ddd7037b98122456a8a4ade3b8e7_1a3473ddd7037b98122456a8a4ade3b8e7)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetData`](#classhighlo_1_1_uniform_buffer_ae499291ebdc40b38ad6415b55ad28e15_1ae499291ebdc40b38ad6415b55ad28e15)`(const `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * data,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` size,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` offset)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetBinding`](#classhighlo_1_1_uniform_buffer_a97ff88fc3a5441bb00f365effdd34770_1a97ff88fc3a5441bb00f365effdd34770)`() const` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [UniformBuffer`](#classhighlo_1_1_uniform_buffer)` > `[`Create`](#classhighlo_1_1_uniform_buffer_a0ff362b5ff580438dde6f0b482a2d506_1a0ff362b5ff580438dde6f0b482a2d506)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` size,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` binding)` | 

### Members

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~UniformBuffer`](#classhighlo_1_1_uniform_buffer_a672528312a5d76e7000c9485331f525a_1a672528312a5d76e7000c9485331f525a)`() = default` {#classhighlo_1_1_uniform_buffer_a672528312a5d76e7000c9485331f525a_1a672528312a5d76e7000c9485331f525a}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Bind`](#classhighlo_1_1_uniform_buffer_a8c9afa5ffc1290c663385add334ab0a6_1a8c9afa5ffc1290c663385add334ab0a6)`() const` {#classhighlo_1_1_uniform_buffer_a8c9afa5ffc1290c663385add334ab0a6_1a8c9afa5ffc1290c663385add334ab0a6}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Unbind`](#classhighlo_1_1_uniform_buffer_a3473ddd7037b98122456a8a4ade3b8e7_1a3473ddd7037b98122456a8a4ade3b8e7)`() const` {#classhighlo_1_1_uniform_buffer_a3473ddd7037b98122456a8a4ade3b8e7_1a3473ddd7037b98122456a8a4ade3b8e7}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetData`](#classhighlo_1_1_uniform_buffer_ae499291ebdc40b38ad6415b55ad28e15_1ae499291ebdc40b38ad6415b55ad28e15)`(const `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * data,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` size,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` offset)` {#classhighlo_1_1_uniform_buffer_ae499291ebdc40b38ad6415b55ad28e15_1ae499291ebdc40b38ad6415b55ad28e15}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetBinding`](#classhighlo_1_1_uniform_buffer_a97ff88fc3a5441bb00f365effdd34770_1a97ff88fc3a5441bb00f365effdd34770)`() const` {#classhighlo_1_1_uniform_buffer_a97ff88fc3a5441bb00f365effdd34770_1a97ff88fc3a5441bb00f365effdd34770}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [UniformBuffer`](#classhighlo_1_1_uniform_buffer)` > `[`Create`](#classhighlo_1_1_uniform_buffer_a0ff362b5ff580438dde6f0b482a2d506_1a0ff362b5ff580438dde6f0b482a2d506)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` size,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` binding)` {#classhighlo_1_1_uniform_buffer_a0ff362b5ff580438dde6f0b482a2d506_1a0ff362b5ff580438dde6f0b482a2d506}

