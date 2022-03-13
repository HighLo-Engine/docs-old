## struct `highlo::HLStack` {#structhighlo_1_1_h_l_stack}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLStack`](#structhighlo_1_1_h_l_stack_aa6bd93ceb7834695fd1582c104b92232_1aa6bd93ceb7834695fd1582c104b92232)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~HLStack`](#structhighlo_1_1_h_l_stack_a5d41c10e6befc8cf1b58fdd0206591dd_1a5d41c10e6befc8cf1b58fdd0206591dd)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Push`](#structhighlo_1_1_h_l_stack_a128c4d7cd503175ff3349ac9fe976370_1a128c4d7cd503175ff3349ac9fe976370)`(T value)` | Appends a new element to the stack.
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Pop`](#structhighlo_1_1_h_l_stack_ae460544525f57db7c74ab5b0adf5c9be_1ae460544525f57db7c74ab5b0adf5c9be)`()` | Removes the current element from the stack.
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T `[`Top`](#structhighlo_1_1_h_l_stack_a5c719da09c3cf90d79f79801c002515f_1a5c719da09c3cf90d79f79801c002515f)`()` | Returns the current element from the stack.
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsEmpty`](#structhighlo_1_1_h_l_stack_af003bb26244c0f4c481f7c8edd0c4996_1af003bb26244c0f4c481f7c8edd0c4996)`()` | Returns true if the stack is empty.
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Size`](#structhighlo_1_1_h_l_stack_a5b205fcadc0f0faf6176001138fcbec6_1a5b205fcadc0f0faf6176001138fcbec6)`()` | Returns the size of the current stack.
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Clear`](#structhighlo_1_1_h_l_stack_a59f5c16b35f4484cd09bb7551de9f39b_1a59f5c16b35f4484cd09bb7551de9f39b)`()` | Clears the Stack.
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Print`](#structhighlo_1_1_h_l_stack_a5fc8993619f9207881ddf074d2c5b074_1a5fc8993619f9207881ddf074d2c5b074)`()` | Prints the Stack to the console.
`private `[`List`](docs-api/api-highlo--List.md#classhighlo_1_1_list)`< T > `[`m_List`](#structhighlo_1_1_h_l_stack_1aa3590f292ada7cd114f418e3b8886847) | 

### Members

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLStack`](#structhighlo_1_1_h_l_stack_aa6bd93ceb7834695fd1582c104b92232_1aa6bd93ceb7834695fd1582c104b92232)`()` {#structhighlo_1_1_h_l_stack_aa6bd93ceb7834695fd1582c104b92232_1aa6bd93ceb7834695fd1582c104b92232}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~HLStack`](#structhighlo_1_1_h_l_stack_a5d41c10e6befc8cf1b58fdd0206591dd_1a5d41c10e6befc8cf1b58fdd0206591dd)`()` {#structhighlo_1_1_h_l_stack_a5d41c10e6befc8cf1b58fdd0206591dd_1a5d41c10e6befc8cf1b58fdd0206591dd}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Push`](#structhighlo_1_1_h_l_stack_a128c4d7cd503175ff3349ac9fe976370_1a128c4d7cd503175ff3349ac9fe976370)`(T value)` {#structhighlo_1_1_h_l_stack_a128c4d7cd503175ff3349ac9fe976370_1a128c4d7cd503175ff3349ac9fe976370}

Appends a new element to the stack.

#### Parameters
* `value` The value which should be added to the stack.

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Pop`](#structhighlo_1_1_h_l_stack_ae460544525f57db7c74ab5b0adf5c9be_1ae460544525f57db7c74ab5b0adf5c9be)`()` {#structhighlo_1_1_h_l_stack_ae460544525f57db7c74ab5b0adf5c9be_1ae460544525f57db7c74ab5b0adf5c9be}

Removes the current element from the stack.

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T `[`Top`](#structhighlo_1_1_h_l_stack_a5c719da09c3cf90d79f79801c002515f_1a5c719da09c3cf90d79f79801c002515f)`()` {#structhighlo_1_1_h_l_stack_a5c719da09c3cf90d79f79801c002515f_1a5c719da09c3cf90d79f79801c002515f}

Returns the current element from the stack.

#### Returns
Returns the current element from the stack.

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsEmpty`](#structhighlo_1_1_h_l_stack_af003bb26244c0f4c481f7c8edd0c4996_1af003bb26244c0f4c481f7c8edd0c4996)`()` {#structhighlo_1_1_h_l_stack_af003bb26244c0f4c481f7c8edd0c4996_1af003bb26244c0f4c481f7c8edd0c4996}

Returns true if the stack is empty.

#### Returns
Returns true if the stack is empty.

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Size`](#structhighlo_1_1_h_l_stack_a5b205fcadc0f0faf6176001138fcbec6_1a5b205fcadc0f0faf6176001138fcbec6)`()` {#structhighlo_1_1_h_l_stack_a5b205fcadc0f0faf6176001138fcbec6_1a5b205fcadc0f0faf6176001138fcbec6}

Returns the size of the current stack.

#### Returns
Returns the size of the current stack.

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Clear`](#structhighlo_1_1_h_l_stack_a59f5c16b35f4484cd09bb7551de9f39b_1a59f5c16b35f4484cd09bb7551de9f39b)`()` {#structhighlo_1_1_h_l_stack_a59f5c16b35f4484cd09bb7551de9f39b_1a59f5c16b35f4484cd09bb7551de9f39b}

Clears the Stack.

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Print`](#structhighlo_1_1_h_l_stack_a5fc8993619f9207881ddf074d2c5b074_1a5fc8993619f9207881ddf074d2c5b074)`()` {#structhighlo_1_1_h_l_stack_a5fc8993619f9207881ddf074d2c5b074_1a5fc8993619f9207881ddf074d2c5b074}

Prints the Stack to the console.

#### `private `[`List`](docs-api/api-highlo--List.md#classhighlo_1_1_list)`< T > `[`m_List`](#structhighlo_1_1_h_l_stack_1aa3590f292ada7cd114f418e3b8886847) {#structhighlo_1_1_h_l_stack_1aa3590f292ada7cd114f418e3b8886847}

