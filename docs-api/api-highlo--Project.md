## class `highlo::Project` {#classhighlo_1_1_project}

```
class highlo::Project
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Project`](#classhighlo_1_1_project_a2abd2fabf9fe4a6ea4f4aef8c11069ae_1a2abd2fabf9fe4a6ea4f4aef8c11069ae)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Project`](#classhighlo_1_1_project_a247e0857e2e6eff197f9c3a07317d04b_1a247e0857e2e6eff197f9c3a07317d04b)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [ProjectConfig`](docs-api/api-highlo--ProjectConfig.md#structhighlo_1_1_project_config)` & `[`GetConfig`](#classhighlo_1_1_project_afdd68fb255a921aba59e63462bade286_1afdd68fb255a921aba59e63462bade286)`() const` | 
`private `[`ProjectConfig`](docs-api/api-highlo--ProjectConfig.md#structhighlo_1_1_project_config)` `[`m_Config`](#classhighlo_1_1_project_1afdcb241855311591db9ca15cc509418e) | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Project`](#classhighlo_1_1_project)` > `[`GetActive`](#classhighlo_1_1_project_a8ccd81b1d15995226eef255340317b43_1a8ccd81b1d15995226eef255340317b43)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetActive`](#classhighlo_1_1_project_ac5d9e11f8449ea9b3db5598545b7cc97_1ac5d9e11f8449ea9b3db5598545b7cc97)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Project`](#classhighlo_1_1_project)` > project)` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetProjectName`](#classhighlo_1_1_project_adbee180787e7132c81a76a8ee1724e50_1adbee180787e7132c81a76a8ee1724e50)`()` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetProjectDirectory`](#classhighlo_1_1_project_a979b7bb57e380e32f0b4219bfab59ef6_1a979b7bb57e380e32f0b4219bfab59ef6)`()` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetAssetDirectory`](#classhighlo_1_1_project_a62b3dfb8512c14d1a3a20c70351cdeb4_1a62b3dfb8512c14d1a3a20c70351cdeb4)`()` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetAssetRegistryPath`](#classhighlo_1_1_project_aeb65e7484d7d30dbc87bff24d2f2921b_1aeb65e7484d7d30dbc87bff24d2f2921b)`()` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetMeshPath`](#classhighlo_1_1_project_a848e447b9a7efed3fd08f9f08125b449_1a848e447b9a7efed3fd08f9f08125b449)`()` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetCacheDirectory`](#classhighlo_1_1_project_ae348f46dfa5664c4c93af5b51e8628c3_1ae348f46dfa5664c4c93af5b51e8628c3)`()` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Project`](#classhighlo_1_1_project_a2abd2fabf9fe4a6ea4f4aef8c11069ae_1a2abd2fabf9fe4a6ea4f4aef8c11069ae)`()` {#classhighlo_1_1_project_a2abd2fabf9fe4a6ea4f4aef8c11069ae_1a2abd2fabf9fe4a6ea4f4aef8c11069ae}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Project`](#classhighlo_1_1_project_a247e0857e2e6eff197f9c3a07317d04b_1a247e0857e2e6eff197f9c3a07317d04b)`()` {#classhighlo_1_1_project_a247e0857e2e6eff197f9c3a07317d04b_1a247e0857e2e6eff197f9c3a07317d04b}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [ProjectConfig`](docs-api/api-highlo--ProjectConfig.md#structhighlo_1_1_project_config)` & `[`GetConfig`](#classhighlo_1_1_project_afdd68fb255a921aba59e63462bade286_1afdd68fb255a921aba59e63462bade286)`() const` {#classhighlo_1_1_project_afdd68fb255a921aba59e63462bade286_1afdd68fb255a921aba59e63462bade286}

#### `private `[`ProjectConfig`](docs-api/api-highlo--ProjectConfig.md#structhighlo_1_1_project_config)` `[`m_Config`](#classhighlo_1_1_project_1afdcb241855311591db9ca15cc509418e) {#classhighlo_1_1_project_1afdcb241855311591db9ca15cc509418e}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Project`](#classhighlo_1_1_project)` > `[`GetActive`](#classhighlo_1_1_project_a8ccd81b1d15995226eef255340317b43_1a8ccd81b1d15995226eef255340317b43)`()` {#classhighlo_1_1_project_a8ccd81b1d15995226eef255340317b43_1a8ccd81b1d15995226eef255340317b43}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetActive`](#classhighlo_1_1_project_ac5d9e11f8449ea9b3db5598545b7cc97_1ac5d9e11f8449ea9b3db5598545b7cc97)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Project`](#classhighlo_1_1_project)` > project)` {#classhighlo_1_1_project_ac5d9e11f8449ea9b3db5598545b7cc97_1ac5d9e11f8449ea9b3db5598545b7cc97}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetProjectName`](#classhighlo_1_1_project_adbee180787e7132c81a76a8ee1724e50_1adbee180787e7132c81a76a8ee1724e50)`()` {#classhighlo_1_1_project_adbee180787e7132c81a76a8ee1724e50_1adbee180787e7132c81a76a8ee1724e50}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetProjectDirectory`](#classhighlo_1_1_project_a979b7bb57e380e32f0b4219bfab59ef6_1a979b7bb57e380e32f0b4219bfab59ef6)`()` {#classhighlo_1_1_project_a979b7bb57e380e32f0b4219bfab59ef6_1a979b7bb57e380e32f0b4219bfab59ef6}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetAssetDirectory`](#classhighlo_1_1_project_a62b3dfb8512c14d1a3a20c70351cdeb4_1a62b3dfb8512c14d1a3a20c70351cdeb4)`()` {#classhighlo_1_1_project_a62b3dfb8512c14d1a3a20c70351cdeb4_1a62b3dfb8512c14d1a3a20c70351cdeb4}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetAssetRegistryPath`](#classhighlo_1_1_project_aeb65e7484d7d30dbc87bff24d2f2921b_1aeb65e7484d7d30dbc87bff24d2f2921b)`()` {#classhighlo_1_1_project_aeb65e7484d7d30dbc87bff24d2f2921b_1aeb65e7484d7d30dbc87bff24d2f2921b}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetMeshPath`](#classhighlo_1_1_project_a848e447b9a7efed3fd08f9f08125b449_1a848e447b9a7efed3fd08f9f08125b449)`()` {#classhighlo_1_1_project_a848e447b9a7efed3fd08f9f08125b449_1a848e447b9a7efed3fd08f9f08125b449}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`GetCacheDirectory`](#classhighlo_1_1_project_ae348f46dfa5664c4c93af5b51e8628c3_1ae348f46dfa5664c4c93af5b51e8628c3)`()` {#classhighlo_1_1_project_ae348f46dfa5664c4c93af5b51e8628c3_1ae348f46dfa5664c4c93af5b51e8628c3}

