## class `highlo::Shader` {#classhighlo_1_1_shader}

```
class highlo::Shader
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Reload`](#classhighlo_1_1_shader_afb4f55f1ef7e89446cc1f6ebdc9dab97_1afb4f55f1ef7e89446cc1f6ebdc9dab97)`(bool forceCompile)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` `[`GetHash`](#classhighlo_1_1_shader_a8b731da2f84fb954ddc1a0e06bf9f9b3_1a8b731da2f84fb954ddc1a0e06bf9f9b3)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Bind`](#classhighlo_1_1_shader_ad64561691e1157b1b8d11ea46b227ef2_1ad64561691e1157b1b8d11ea46b227ef2)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Unbind`](#classhighlo_1_1_shader_a3e67038ae63773d2967e0788c5944ff8_1a3e67038ae63773d2967e0788c5944ff8)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AddShaderReloadedCallback`](#classhighlo_1_1_shader_ac4d89ef95445cd22c9b36996a85a3178_1ac4d89ef95445cd22c9b36996a85a3178)`(const `[`ShaderReloadedCallback`](#classhighlo_1_1_shader_aa7cedabac0b9feca4046a2dedddab248_1aa7cedabac0b9feca4046a2dedddab248)` & callback)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetName`](#classhighlo_1_1_shader_ad00e8723bd53b81ddda735ae2f471c15_1ad00e8723bd53b81ddda735ae2f471c15)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLRendererID`](#_core_8h_a64678224f8e9a09b55c60e7a9e5998e0_1a64678224f8e9a09b55c60e7a9e5998e0)` `[`GetRendererID`](#classhighlo_1_1_shader_ac5eed177a28809a0fbc661e329bf992f_1ac5eed177a28809a0fbc661e329bf992f)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const std::unordered_map< [HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [ShaderBuffer`](docs-api/api-highlo--ShaderBuffer.md#structhighlo_1_1_shader_buffer)` > & `[`GetShaderBuffers`](#classhighlo_1_1_shader_a9d210e4d56d81f21876e87b69c01fa0d_1a9d210e4d56d81f21876e87b69c01fa0d)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const std::unordered_map< [HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [ShaderResourceDeclaration`](docs-api/api-highlo--ShaderResourceDeclaration.md#classhighlo_1_1_shader_resource_declaration)` > & `[`GetResources`](#classhighlo_1_1_shader_ae43913decce778395925d693f18ac0e8_1ae43913decce778395925d693f18ac0e8)`() const` | 
`typedef `[`ShaderReloadedCallback`](#classhighlo_1_1_shader_aa7cedabac0b9feca4046a2dedddab248_1aa7cedabac0b9feca4046a2dedddab248) | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](#classhighlo_1_1_shader)` > `[`Create`](#classhighlo_1_1_shader_a4785ec34d24b08c2ee93780d8aaf11b2_1a4785ec34d24b08c2ee93780d8aaf11b2)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,bool forceCompile)` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](#classhighlo_1_1_shader)` > `[`CreateFromString`](#classhighlo_1_1_shader_a8ae4084fe21e94b8430968fdccff0433_1a8ae4084fe21e94b8430968fdccff0433)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & source)` | 

### Members

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Reload`](#classhighlo_1_1_shader_afb4f55f1ef7e89446cc1f6ebdc9dab97_1afb4f55f1ef7e89446cc1f6ebdc9dab97)`(bool forceCompile)` {#classhighlo_1_1_shader_afb4f55f1ef7e89446cc1f6ebdc9dab97_1afb4f55f1ef7e89446cc1f6ebdc9dab97}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` `[`GetHash`](#classhighlo_1_1_shader_a8b731da2f84fb954ddc1a0e06bf9f9b3_1a8b731da2f84fb954ddc1a0e06bf9f9b3)`() const` {#classhighlo_1_1_shader_a8b731da2f84fb954ddc1a0e06bf9f9b3_1a8b731da2f84fb954ddc1a0e06bf9f9b3}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Bind`](#classhighlo_1_1_shader_ad64561691e1157b1b8d11ea46b227ef2_1ad64561691e1157b1b8d11ea46b227ef2)`() const` {#classhighlo_1_1_shader_ad64561691e1157b1b8d11ea46b227ef2_1ad64561691e1157b1b8d11ea46b227ef2}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Unbind`](#classhighlo_1_1_shader_a3e67038ae63773d2967e0788c5944ff8_1a3e67038ae63773d2967e0788c5944ff8)`()` {#classhighlo_1_1_shader_a3e67038ae63773d2967e0788c5944ff8_1a3e67038ae63773d2967e0788c5944ff8}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AddShaderReloadedCallback`](#classhighlo_1_1_shader_ac4d89ef95445cd22c9b36996a85a3178_1ac4d89ef95445cd22c9b36996a85a3178)`(const `[`ShaderReloadedCallback`](#classhighlo_1_1_shader_aa7cedabac0b9feca4046a2dedddab248_1aa7cedabac0b9feca4046a2dedddab248)` & callback)` {#classhighlo_1_1_shader_ac4d89ef95445cd22c9b36996a85a3178_1ac4d89ef95445cd22c9b36996a85a3178}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetName`](#classhighlo_1_1_shader_ad00e8723bd53b81ddda735ae2f471c15_1ad00e8723bd53b81ddda735ae2f471c15)`() const` {#classhighlo_1_1_shader_ad00e8723bd53b81ddda735ae2f471c15_1ad00e8723bd53b81ddda735ae2f471c15}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLRendererID`](#_core_8h_a64678224f8e9a09b55c60e7a9e5998e0_1a64678224f8e9a09b55c60e7a9e5998e0)` `[`GetRendererID`](#classhighlo_1_1_shader_ac5eed177a28809a0fbc661e329bf992f_1ac5eed177a28809a0fbc661e329bf992f)`() const` {#classhighlo_1_1_shader_ac5eed177a28809a0fbc661e329bf992f_1ac5eed177a28809a0fbc661e329bf992f}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const std::unordered_map< [HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [ShaderBuffer`](docs-api/api-highlo--ShaderBuffer.md#structhighlo_1_1_shader_buffer)` > & `[`GetShaderBuffers`](#classhighlo_1_1_shader_a9d210e4d56d81f21876e87b69c01fa0d_1a9d210e4d56d81f21876e87b69c01fa0d)`() const` {#classhighlo_1_1_shader_a9d210e4d56d81f21876e87b69c01fa0d_1a9d210e4d56d81f21876e87b69c01fa0d}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const std::unordered_map< [HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [ShaderResourceDeclaration`](docs-api/api-highlo--ShaderResourceDeclaration.md#classhighlo_1_1_shader_resource_declaration)` > & `[`GetResources`](#classhighlo_1_1_shader_ae43913decce778395925d693f18ac0e8_1ae43913decce778395925d693f18ac0e8)`() const` {#classhighlo_1_1_shader_ae43913decce778395925d693f18ac0e8_1ae43913decce778395925d693f18ac0e8}

#### `typedef `[`ShaderReloadedCallback`](#classhighlo_1_1_shader_aa7cedabac0b9feca4046a2dedddab248_1aa7cedabac0b9feca4046a2dedddab248) {#classhighlo_1_1_shader_aa7cedabac0b9feca4046a2dedddab248_1aa7cedabac0b9feca4046a2dedddab248}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](#classhighlo_1_1_shader)` > `[`Create`](#classhighlo_1_1_shader_a4785ec34d24b08c2ee93780d8aaf11b2_1a4785ec34d24b08c2ee93780d8aaf11b2)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,bool forceCompile)` {#classhighlo_1_1_shader_a4785ec34d24b08c2ee93780d8aaf11b2_1a4785ec34d24b08c2ee93780d8aaf11b2}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](#classhighlo_1_1_shader)` > `[`CreateFromString`](#classhighlo_1_1_shader_a8ae4084fe21e94b8430968fdccff0433_1a8ae4084fe21e94b8430968fdccff0433)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & source)` {#classhighlo_1_1_shader_a8ae4084fe21e94b8430968fdccff0433_1a8ae4084fe21e94b8430968fdccff0433}
