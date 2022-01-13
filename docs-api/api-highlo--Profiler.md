## class `highlo::Profiler` {#classhighlo_1_1_profiler}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`HL_NON_COPYABLE`](#classhighlo_1_1_profiler_aa1811c01f619202f7c2e7e331c53a26f_1aa1811c01f619202f7c2e7e331c53a26f)`(`[`Profiler`](#classhighlo_1_1_profiler)`)` | 
`public  `[`HL_NON_MOVABLE`](#classhighlo_1_1_profiler_a7e903bacf8e85e3570c406c09962b80f_1a7e903bacf8e85e3570c406c09962b80f)`(`[`Profiler`](#classhighlo_1_1_profiler)`)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BeginSession`](#classhighlo_1_1_profiler_af8e321420758775d0e09bee35555bace_1af8e321420758775d0e09bee35555bace)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & filePath)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`EndSession`](#classhighlo_1_1_profiler_afe0663de37add1f9f1f9e5ab957868fa_1afe0663de37add1f9f1f9e5ab957868fa)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`WriteProfile`](#classhighlo_1_1_profiler_a44a153f948665fb63d9b2f1ac1cdcb61_1a44a153f948665fb63d9b2f1ac1cdcb61)`(const `[`ProfileResult`](docs-api/api-highlo--ProfileResult.md#structhighlo_1_1_profile_result)` & result)` | 
`private std::mutex `[`m_Mutex`](#classhighlo_1_1_profiler_1a819ec70ae87f6ac11e650d79aca58fbe) | 
`private std::ofstream `[`m_OutputStream`](#classhighlo_1_1_profiler_1a09115f66017e0eb85b41221bec527a69) | 
`private `[`ProfilerSession`](docs-api/api-highlo--ProfilerSession.md#structhighlo_1_1_profiler_session)` * `[`m_CurrentSession`](#classhighlo_1_1_profiler_1a860acec95f8b317aa7f8fc8f7cc18933) | 
`private inline  `[`Profiler`](#classhighlo_1_1_profiler_1a18aa5164a6bdb98ac5ac53f395292756)`()` | 
`private inline  `[`~Profiler`](#classhighlo_1_1_profiler_1af9eb7edf3821608de50fe0fd84dd3c28)`()` | 
`private inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`WriteHeader`](#classhighlo_1_1_profiler_1a3524fdbc874d067a2ab4568b41b7ba1f)`()` | 
`private inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`WriteFooter`](#classhighlo_1_1_profiler_1a3ae3d8cb895234a5857f9268470da162)`()` | 
`private inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`EndSessionInternal`](#classhighlo_1_1_profiler_1a197c8c2f62a3c45ec861d162e5f72e61)`()` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Profiler`](#classhighlo_1_1_profiler)` & `[`Get`](#classhighlo_1_1_profiler_a49d1bebf03736d0c50bb47799946d6fc_1a49d1bebf03736d0c50bb47799946d6fc)`()` | 

### Members

#### `public  `[`HL_NON_COPYABLE`](#classhighlo_1_1_profiler_aa1811c01f619202f7c2e7e331c53a26f_1aa1811c01f619202f7c2e7e331c53a26f)`(`[`Profiler`](#classhighlo_1_1_profiler)`)` {#classhighlo_1_1_profiler_aa1811c01f619202f7c2e7e331c53a26f_1aa1811c01f619202f7c2e7e331c53a26f}

#### `public  `[`HL_NON_MOVABLE`](#classhighlo_1_1_profiler_a7e903bacf8e85e3570c406c09962b80f_1a7e903bacf8e85e3570c406c09962b80f)`(`[`Profiler`](#classhighlo_1_1_profiler)`)` {#classhighlo_1_1_profiler_a7e903bacf8e85e3570c406c09962b80f_1a7e903bacf8e85e3570c406c09962b80f}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BeginSession`](#classhighlo_1_1_profiler_af8e321420758775d0e09bee35555bace_1af8e321420758775d0e09bee35555bace)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & filePath)` {#classhighlo_1_1_profiler_af8e321420758775d0e09bee35555bace_1af8e321420758775d0e09bee35555bace}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`EndSession`](#classhighlo_1_1_profiler_afe0663de37add1f9f1f9e5ab957868fa_1afe0663de37add1f9f1f9e5ab957868fa)`()` {#classhighlo_1_1_profiler_afe0663de37add1f9f1f9e5ab957868fa_1afe0663de37add1f9f1f9e5ab957868fa}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`WriteProfile`](#classhighlo_1_1_profiler_a44a153f948665fb63d9b2f1ac1cdcb61_1a44a153f948665fb63d9b2f1ac1cdcb61)`(const `[`ProfileResult`](docs-api/api-highlo--ProfileResult.md#structhighlo_1_1_profile_result)` & result)` {#classhighlo_1_1_profiler_a44a153f948665fb63d9b2f1ac1cdcb61_1a44a153f948665fb63d9b2f1ac1cdcb61}

#### `private std::mutex `[`m_Mutex`](#classhighlo_1_1_profiler_1a819ec70ae87f6ac11e650d79aca58fbe) {#classhighlo_1_1_profiler_1a819ec70ae87f6ac11e650d79aca58fbe}

#### `private std::ofstream `[`m_OutputStream`](#classhighlo_1_1_profiler_1a09115f66017e0eb85b41221bec527a69) {#classhighlo_1_1_profiler_1a09115f66017e0eb85b41221bec527a69}

#### `private `[`ProfilerSession`](docs-api/api-highlo--ProfilerSession.md#structhighlo_1_1_profiler_session)` * `[`m_CurrentSession`](#classhighlo_1_1_profiler_1a860acec95f8b317aa7f8fc8f7cc18933) {#classhighlo_1_1_profiler_1a860acec95f8b317aa7f8fc8f7cc18933}

#### `private inline  `[`Profiler`](#classhighlo_1_1_profiler_1a18aa5164a6bdb98ac5ac53f395292756)`()` {#classhighlo_1_1_profiler_1a18aa5164a6bdb98ac5ac53f395292756}

#### `private inline  `[`~Profiler`](#classhighlo_1_1_profiler_1af9eb7edf3821608de50fe0fd84dd3c28)`()` {#classhighlo_1_1_profiler_1af9eb7edf3821608de50fe0fd84dd3c28}

#### `private inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`WriteHeader`](#classhighlo_1_1_profiler_1a3524fdbc874d067a2ab4568b41b7ba1f)`()` {#classhighlo_1_1_profiler_1a3524fdbc874d067a2ab4568b41b7ba1f}

#### `private inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`WriteFooter`](#classhighlo_1_1_profiler_1a3ae3d8cb895234a5857f9268470da162)`()` {#classhighlo_1_1_profiler_1a3ae3d8cb895234a5857f9268470da162}

#### `private inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`EndSessionInternal`](#classhighlo_1_1_profiler_1a197c8c2f62a3c45ec861d162e5f72e61)`()` {#classhighlo_1_1_profiler_1a197c8c2f62a3c45ec861d162e5f72e61}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Profiler`](#classhighlo_1_1_profiler)` & `[`Get`](#classhighlo_1_1_profiler_a49d1bebf03736d0c50bb47799946d6fc_1a49d1bebf03736d0c50bb47799946d6fc)`()` {#classhighlo_1_1_profiler_a49d1bebf03736d0c50bb47799946d6fc_1a49d1bebf03736d0c50bb47799946d6fc}

