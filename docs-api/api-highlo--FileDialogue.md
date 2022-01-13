## class `highlo::FileDialogue` {#classhighlo_1_1_file_dialogue}

```
class highlo::FileDialogue
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~FileDialogue`](#classhighlo_1_1_file_dialogue_a16fe05610a9a2a96afec5b13565f5b86_1a16fe05610a9a2a96afec5b13565f5b86)`() = default` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`SelectDirectory`](#classhighlo_1_1_file_dialogue_aaa1b0566d52df20d16f31e2428eb58f6_1aaa1b0566d52df20d16f31e2428eb58f6)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`SelectFile`](#classhighlo_1_1_file_dialogue_ac78f3bbb763e7388b2a7ccb7f398f34a_1ac78f3bbb763e7388b2a7ccb7f398f34a)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`SaveFile`](#classhighlo_1_1_file_dialogue_ad648f94e62c72212f89b4671155acb70_1ad648f94e62c72212f89b4671155acb70)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetFilter`](#classhighlo_1_1_file_dialogue_ad92543b405ca8cc01d39de3ab4d7b899_1ad92543b405ca8cc01d39de3ab4d7b899)`(const `[`FileDialogueFilter`](docs-api/api-highlo--FileDialogueFilter.md#classhighlo_1_1_file_dialogue_filter)` & filter)` | 
`protected `[`FileDialogueFilter`](docs-api/api-highlo--FileDialogueFilter.md#classhighlo_1_1_file_dialogue_filter)` `[`m_Filter`](#classhighlo_1_1_file_dialogue_a3b733a9b438a50b661be5f63ec7e86da_1a3b733a9b438a50b661be5f63ec7e86da) | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [FileDialogue`](#classhighlo_1_1_file_dialogue)` > `[`Create`](#classhighlo_1_1_file_dialogue_a3e9e0fcc3a5fcab75f8df7e9d0db5331_1a3e9e0fcc3a5fcab75f8df7e9d0db5331)`()` | 

### Members

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~FileDialogue`](#classhighlo_1_1_file_dialogue_a16fe05610a9a2a96afec5b13565f5b86_1a16fe05610a9a2a96afec5b13565f5b86)`() = default` {#classhighlo_1_1_file_dialogue_a16fe05610a9a2a96afec5b13565f5b86_1a16fe05610a9a2a96afec5b13565f5b86}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`SelectDirectory`](#classhighlo_1_1_file_dialogue_aaa1b0566d52df20d16f31e2428eb58f6_1aaa1b0566d52df20d16f31e2428eb58f6)`()` {#classhighlo_1_1_file_dialogue_aaa1b0566d52df20d16f31e2428eb58f6_1aaa1b0566d52df20d16f31e2428eb58f6}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`SelectFile`](#classhighlo_1_1_file_dialogue_ac78f3bbb763e7388b2a7ccb7f398f34a_1ac78f3bbb763e7388b2a7ccb7f398f34a)`()` {#classhighlo_1_1_file_dialogue_ac78f3bbb763e7388b2a7ccb7f398f34a_1ac78f3bbb763e7388b2a7ccb7f398f34a}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`SaveFile`](#classhighlo_1_1_file_dialogue_ad648f94e62c72212f89b4671155acb70_1ad648f94e62c72212f89b4671155acb70)`()` {#classhighlo_1_1_file_dialogue_ad648f94e62c72212f89b4671155acb70_1ad648f94e62c72212f89b4671155acb70}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetFilter`](#classhighlo_1_1_file_dialogue_ad92543b405ca8cc01d39de3ab4d7b899_1ad92543b405ca8cc01d39de3ab4d7b899)`(const `[`FileDialogueFilter`](docs-api/api-highlo--FileDialogueFilter.md#classhighlo_1_1_file_dialogue_filter)` & filter)` {#classhighlo_1_1_file_dialogue_ad92543b405ca8cc01d39de3ab4d7b899_1ad92543b405ca8cc01d39de3ab4d7b899}

#### `protected `[`FileDialogueFilter`](docs-api/api-highlo--FileDialogueFilter.md#classhighlo_1_1_file_dialogue_filter)` `[`m_Filter`](#classhighlo_1_1_file_dialogue_a3b733a9b438a50b661be5f63ec7e86da_1a3b733a9b438a50b661be5f63ec7e86da) {#classhighlo_1_1_file_dialogue_a3b733a9b438a50b661be5f63ec7e86da_1a3b733a9b438a50b661be5f63ec7e86da}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [FileDialogue`](#classhighlo_1_1_file_dialogue)` > `[`Create`](#classhighlo_1_1_file_dialogue_a3e9e0fcc3a5fcab75f8df7e9d0db5331_1a3e9e0fcc3a5fcab75f8df7e9d0db5331)`()` {#classhighlo_1_1_file_dialogue_a3e9e0fcc3a5fcab75f8df7e9d0db5331_1a3e9e0fcc3a5fcab75f8df7e9d0db5331}

