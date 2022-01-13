## class `highlo::Timer` {#classhighlo_1_1_timer}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Timer`](#classhighlo_1_1_timer_ac1d4629ac7050492e4c4474aff807bfb_1ac1d4629ac7050492e4c4474aff807bfb)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Timer`](#classhighlo_1_1_timer_ae22ef0f8c3e8b0f1a0de8c233a6c11e1_1ae22ef0f8c3e8b0f1a0de8c233a6c11e1)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Start`](#classhighlo_1_1_timer_a06540d67c11a3bb0478b0dd7e8f6a310_1a06540d67c11a3bb0478b0dd7e8f6a310)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Stop`](#classhighlo_1_1_timer_a5215c3967dee82fb322688658d5808f1_1a5215c3967dee82fb322688658d5808f1)`(bool shouldPrint)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetName`](#classhighlo_1_1_timer_a966c7e795e30baec0798df4ac0bfbb80_1a966c7e795e30baec0798df4ac0bfbb80)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetOutputString`](#classhighlo_1_1_timer_ac194e6117928535d6e707193bede85a6_1ac194e6117928535d6e707193bede85a6)`() const` | 
`private `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`m_Name`](#classhighlo_1_1_timer_1a5585b3b9e949e565a2b66be2f9aaff7e) | 
`private `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`m_OutputString`](#classhighlo_1_1_timer_1a00634bb97f55c29c94c9ff34eed4af50) | 
`private bool `[`m_Stopped`](#classhighlo_1_1_timer_1ace268d28361f15324d9fe59d99018294) | 
`private std::chrono::time_point< std::chrono::steady_clock > `[`m_StartPoint`](#classhighlo_1_1_timer_1a495e6bd7866df1a3e511d6dd09b04214) | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Sleep`](#classhighlo_1_1_timer_ae0c414b39419750add07fccc94b3824d_1ae0c414b39419750add07fccc94b3824d)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` seconds)` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Timer`](#classhighlo_1_1_timer_ac1d4629ac7050492e4c4474aff807bfb_1ac1d4629ac7050492e4c4474aff807bfb)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name)` {#classhighlo_1_1_timer_ac1d4629ac7050492e4c4474aff807bfb_1ac1d4629ac7050492e4c4474aff807bfb}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Timer`](#classhighlo_1_1_timer_ae22ef0f8c3e8b0f1a0de8c233a6c11e1_1ae22ef0f8c3e8b0f1a0de8c233a6c11e1)`()` {#classhighlo_1_1_timer_ae22ef0f8c3e8b0f1a0de8c233a6c11e1_1ae22ef0f8c3e8b0f1a0de8c233a6c11e1}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Start`](#classhighlo_1_1_timer_a06540d67c11a3bb0478b0dd7e8f6a310_1a06540d67c11a3bb0478b0dd7e8f6a310)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name)` {#classhighlo_1_1_timer_a06540d67c11a3bb0478b0dd7e8f6a310_1a06540d67c11a3bb0478b0dd7e8f6a310}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Stop`](#classhighlo_1_1_timer_a5215c3967dee82fb322688658d5808f1_1a5215c3967dee82fb322688658d5808f1)`(bool shouldPrint)` {#classhighlo_1_1_timer_a5215c3967dee82fb322688658d5808f1_1a5215c3967dee82fb322688658d5808f1}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetName`](#classhighlo_1_1_timer_a966c7e795e30baec0798df4ac0bfbb80_1a966c7e795e30baec0798df4ac0bfbb80)`() const` {#classhighlo_1_1_timer_a966c7e795e30baec0798df4ac0bfbb80_1a966c7e795e30baec0798df4ac0bfbb80}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetOutputString`](#classhighlo_1_1_timer_ac194e6117928535d6e707193bede85a6_1ac194e6117928535d6e707193bede85a6)`() const` {#classhighlo_1_1_timer_ac194e6117928535d6e707193bede85a6_1ac194e6117928535d6e707193bede85a6}

#### `private `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`m_Name`](#classhighlo_1_1_timer_1a5585b3b9e949e565a2b66be2f9aaff7e) {#classhighlo_1_1_timer_1a5585b3b9e949e565a2b66be2f9aaff7e}

#### `private `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`m_OutputString`](#classhighlo_1_1_timer_1a00634bb97f55c29c94c9ff34eed4af50) {#classhighlo_1_1_timer_1a00634bb97f55c29c94c9ff34eed4af50}

#### `private bool `[`m_Stopped`](#classhighlo_1_1_timer_1ace268d28361f15324d9fe59d99018294) {#classhighlo_1_1_timer_1ace268d28361f15324d9fe59d99018294}

#### `private std::chrono::time_point< std::chrono::steady_clock > `[`m_StartPoint`](#classhighlo_1_1_timer_1a495e6bd7866df1a3e511d6dd09b04214) {#classhighlo_1_1_timer_1a495e6bd7866df1a3e511d6dd09b04214}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Sleep`](#classhighlo_1_1_timer_ae0c414b39419750add07fccc94b3824d_1ae0c414b39419750add07fccc94b3824d)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` seconds)` {#classhighlo_1_1_timer_ae0c414b39419750add07fccc94b3824d_1ae0c414b39419750add07fccc94b3824d}

