## class `highlo::HLQueue` {#classhighlo_1_1_h_l_queue}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLQueue`](#classhighlo_1_1_h_l_queue_a444a40444c8bc03e3d4d5d99c01ba894_1a444a40444c8bc03e3d4d5d99c01ba894)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~HLQueue`](#classhighlo_1_1_h_l_queue_a87ff0851dbe3dbdad52df05b0ce8f491_1a87ff0851dbe3dbdad52df05b0ce8f491)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Enqueue`](#classhighlo_1_1_h_l_queue_a8880d25b389fba6738a8ee234439cbfc_1a8880d25b389fba6738a8ee234439cbfc)`(const T & value)` | Appends a new item to the Queue.
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Dequeue`](#classhighlo_1_1_h_l_queue_a0352eca54fbcd06d9cd4b418dab5825d_1a0352eca54fbcd06d9cd4b418dab5825d)`()` | Removes the last element from the Queue.
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T `[`Front`](#classhighlo_1_1_h_l_queue_a1c8460c2dc3e7ef2f17960fe31d9c353_1a1c8460c2dc3e7ef2f17960fe31d9c353)`()` | Returns the current element from the Queue.
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsEmpty`](#classhighlo_1_1_h_l_queue_a8f20361fe2630c979dba44a20a75acfa_1a8f20361fe2630c979dba44a20a75acfa)`()` | Returns true if the Queue is empty.
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Size`](#classhighlo_1_1_h_l_queue_a0a0e1ecfecf980b62f9ec9815c0856c7_1a0a0e1ecfecf980b62f9ec9815c0856c7)`()` | Returns the size of the current Queue.
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Clear`](#classhighlo_1_1_h_l_queue_a22e93b05a86747feca25d30bc8860b5b_1a22e93b05a86747feca25d30bc8860b5b)`()` | Clears the Queue.
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Print`](#classhighlo_1_1_h_l_queue_ab79e271e747cb777cf30e26c18d40172_1ab79e271e747cb777cf30e26c18d40172)`()` | Prints the Queue to the console.
`private `[`List`](docs-api/api-highlo--List.md#classhighlo_1_1_list)`< T > `[`m_List`](#classhighlo_1_1_h_l_queue_1a5dabc4e4792e67a16c7a626402aefa3d) | 

### Members

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLQueue`](#classhighlo_1_1_h_l_queue_a444a40444c8bc03e3d4d5d99c01ba894_1a444a40444c8bc03e3d4d5d99c01ba894)`()` {#classhighlo_1_1_h_l_queue_a444a40444c8bc03e3d4d5d99c01ba894_1a444a40444c8bc03e3d4d5d99c01ba894}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~HLQueue`](#classhighlo_1_1_h_l_queue_a87ff0851dbe3dbdad52df05b0ce8f491_1a87ff0851dbe3dbdad52df05b0ce8f491)`()` {#classhighlo_1_1_h_l_queue_a87ff0851dbe3dbdad52df05b0ce8f491_1a87ff0851dbe3dbdad52df05b0ce8f491}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Enqueue`](#classhighlo_1_1_h_l_queue_a8880d25b389fba6738a8ee234439cbfc_1a8880d25b389fba6738a8ee234439cbfc)`(const T & value)` {#classhighlo_1_1_h_l_queue_a8880d25b389fba6738a8ee234439cbfc_1a8880d25b389fba6738a8ee234439cbfc}

Appends a new item to the Queue.

#### Parameters
* `value` The Value which should be added to the Queue.

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Dequeue`](#classhighlo_1_1_h_l_queue_a0352eca54fbcd06d9cd4b418dab5825d_1a0352eca54fbcd06d9cd4b418dab5825d)`()` {#classhighlo_1_1_h_l_queue_a0352eca54fbcd06d9cd4b418dab5825d_1a0352eca54fbcd06d9cd4b418dab5825d}

Removes the last element from the Queue.

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T `[`Front`](#classhighlo_1_1_h_l_queue_a1c8460c2dc3e7ef2f17960fe31d9c353_1a1c8460c2dc3e7ef2f17960fe31d9c353)`()` {#classhighlo_1_1_h_l_queue_a1c8460c2dc3e7ef2f17960fe31d9c353_1a1c8460c2dc3e7ef2f17960fe31d9c353}

Returns the current element from the Queue.

#### Returns
Returns the current element from the Queue.

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsEmpty`](#classhighlo_1_1_h_l_queue_a8f20361fe2630c979dba44a20a75acfa_1a8f20361fe2630c979dba44a20a75acfa)`()` {#classhighlo_1_1_h_l_queue_a8f20361fe2630c979dba44a20a75acfa_1a8f20361fe2630c979dba44a20a75acfa}

Returns true if the Queue is empty.

#### Returns
Returns true if the Queue is empty.

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Size`](#classhighlo_1_1_h_l_queue_a0a0e1ecfecf980b62f9ec9815c0856c7_1a0a0e1ecfecf980b62f9ec9815c0856c7)`()` {#classhighlo_1_1_h_l_queue_a0a0e1ecfecf980b62f9ec9815c0856c7_1a0a0e1ecfecf980b62f9ec9815c0856c7}

Returns the size of the current Queue.

#### Returns
Returns the size of the current Queue.

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Clear`](#classhighlo_1_1_h_l_queue_a22e93b05a86747feca25d30bc8860b5b_1a22e93b05a86747feca25d30bc8860b5b)`()` {#classhighlo_1_1_h_l_queue_a22e93b05a86747feca25d30bc8860b5b_1a22e93b05a86747feca25d30bc8860b5b}

Clears the Queue.

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Print`](#classhighlo_1_1_h_l_queue_ab79e271e747cb777cf30e26c18d40172_1ab79e271e747cb777cf30e26c18d40172)`()` {#classhighlo_1_1_h_l_queue_ab79e271e747cb777cf30e26c18d40172_1ab79e271e747cb777cf30e26c18d40172}

Prints the Queue to the console.

#### `private `[`List`](docs-api/api-highlo--List.md#classhighlo_1_1_list)`< T > `[`m_List`](#classhighlo_1_1_h_l_queue_1a5dabc4e4792e67a16c7a626402aefa3d) {#classhighlo_1_1_h_l_queue_1a5dabc4e4792e67a16c7a626402aefa3d}

