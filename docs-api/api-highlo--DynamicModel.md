## class `highlo::DynamicModel` {#classhighlo_1_1_dynamic_model}

```
class highlo::DynamicModel
  : public highlo::Asset
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`DynamicModel`](#classhighlo_1_1_dynamic_model_af0fdc0ef1401a9433f5272751b352bd3_1af0fdc0ef1401a9433f5272751b352bd3)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & mesh)` | 
`public  `[`DynamicModel`](#classhighlo_1_1_dynamic_model_a511b5aab22725f1202e9923015a421c6_1a511b5aab22725f1202e9923015a421c6)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & mesh,const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & submeshIndices)` | 
`public  `[`DynamicModel`](#classhighlo_1_1_dynamic_model_ae3740cf15a93a7242fd04a364837d9d6_1ae3740cf15a93a7242fd04a364837d9d6)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [DynamicModel`](#classhighlo_1_1_dynamic_model)` > & other)` | 
`public virtual  `[`~DynamicModel`](#classhighlo_1_1_dynamic_model_a53623a4e472a638f5f63731e93c288c0_1a53623a4e472a638f5f63731e93c288c0)`()` | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnUpdate`](#classhighlo_1_1_dynamic_model_ab3665921648ab1f0f9a197c536e554ff_1ab3665921648ab1f0f9a197c536e554ff)`(`[`Timestep`](docs-api/api-highlo.md#namespacehighlo_ac84bb12650f6f41e650f8b0e43d2b24b_1ac84bb12650f6f41e650f8b0e43d2b24b)` ts)` | 
`public inline std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetSubmeshIndices`](#classhighlo_1_1_dynamic_model_a3575ad7eab9199753565b36d8ec49950_1a3575ad7eab9199753565b36d8ec49950)`()` | 
`public inline const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetSubmeshIndices`](#classhighlo_1_1_dynamic_model_a07c8c79e67b034430e1defd0a44745df_1a07c8c79e67b034430e1defd0a44745df)`() const` | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetSubmeshIndices`](#classhighlo_1_1_dynamic_model_a0061f684badc613b6f54eba8f839a2bb_1a0061f684badc613b6f54eba8f839a2bb)`(const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & indices)` | 
`public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & `[`Get`](#classhighlo_1_1_dynamic_model_ac1d723d8b00aad70fa6f4ff29668948a_1ac1d723d8b00aad70fa6f4ff29668948a)`()` | 
`public inline const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & `[`Get`](#classhighlo_1_1_dynamic_model_aaa44a54c2bd1f31077715244636cbfc0_1aaa44a54c2bd1f31077715244636cbfc0)`() const` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Set`](#classhighlo_1_1_dynamic_model_a22e9b8faf795f27d696a942430e55248_1a22e9b8faf795f27d696a942430e55248)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & subMesh)` | 
`public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialTable`](docs-api/api-highlo--MaterialTable.md#classhighlo_1_1_material_table)` > `[`GetMaterials`](#classhighlo_1_1_dynamic_model_a0feeda9829ec94380b6e46ba42bab40d_1a0feeda9829ec94380b6e46ba42bab40d)`() const` | 
`public inline virtual `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_dynamic_model_a7b861c429bf7944c8b8ec682584f7600_1a7b861c429bf7944c8b8ec682584f7600)`() const` | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > `[`m_MeshFile`](#classhighlo_1_1_dynamic_model_1a9584aa78313bafb2c11d70a7660019ec) | 
`private std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`m_SubMeshIndices`](#classhighlo_1_1_dynamic_model_1aa5115ec230bfc74477f3faf3eb7bc2aa) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_BoneCount`](#classhighlo_1_1_dynamic_model_1a22b0edaff6e206aaf4295020d2a1ea4a) | 
`private std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > `[`m_BoneInfos`](#classhighlo_1_1_dynamic_model_1a72a98d8e22b68102340262507e8a5175) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialTable`](docs-api/api-highlo--MaterialTable.md#classhighlo_1_1_material_table)` > `[`m_Materials`](#classhighlo_1_1_dynamic_model_1a6d751d0939c2c3e16b378f9489c5eb40) | 
`private bool `[`m_IsAnimated`](#classhighlo_1_1_dynamic_model_1a6d6f47efed238d730f36f08bc22becd7) | 
`private bool `[`m_AnimationPlaying`](#classhighlo_1_1_dynamic_model_1abd132861b31c5ec19df84932f6f9267e) | 
`private float `[`m_AnimationTime`](#classhighlo_1_1_dynamic_model_1ab5b7449702075d5bc6623ea039e3e2c6) | 
`private float `[`m_WorldTime`](#classhighlo_1_1_dynamic_model_1a3104e718bc18ad0d12c5cb0167c2c1e1) | 
`private float `[`m_TimeMultiplier`](#classhighlo_1_1_dynamic_model_1a0927a186191c18dd4379342449f4a223) | 
`public inline static `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_dynamic_model_a2fde94043f70180178612f09ec232a66_1a2fde94043f70180178612f09ec232a66)`()` | 

### Members

#### `public  explicit `[`DynamicModel`](#classhighlo_1_1_dynamic_model_af0fdc0ef1401a9433f5272751b352bd3_1af0fdc0ef1401a9433f5272751b352bd3)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & mesh)` {#classhighlo_1_1_dynamic_model_af0fdc0ef1401a9433f5272751b352bd3_1af0fdc0ef1401a9433f5272751b352bd3}

#### `public  `[`DynamicModel`](#classhighlo_1_1_dynamic_model_a511b5aab22725f1202e9923015a421c6_1a511b5aab22725f1202e9923015a421c6)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & mesh,const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & submeshIndices)` {#classhighlo_1_1_dynamic_model_a511b5aab22725f1202e9923015a421c6_1a511b5aab22725f1202e9923015a421c6}

#### `public  `[`DynamicModel`](#classhighlo_1_1_dynamic_model_ae3740cf15a93a7242fd04a364837d9d6_1ae3740cf15a93a7242fd04a364837d9d6)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [DynamicModel`](#classhighlo_1_1_dynamic_model)` > & other)` {#classhighlo_1_1_dynamic_model_ae3740cf15a93a7242fd04a364837d9d6_1ae3740cf15a93a7242fd04a364837d9d6}

#### `public virtual  `[`~DynamicModel`](#classhighlo_1_1_dynamic_model_a53623a4e472a638f5f63731e93c288c0_1a53623a4e472a638f5f63731e93c288c0)`()` {#classhighlo_1_1_dynamic_model_a53623a4e472a638f5f63731e93c288c0_1a53623a4e472a638f5f63731e93c288c0}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnUpdate`](#classhighlo_1_1_dynamic_model_ab3665921648ab1f0f9a197c536e554ff_1ab3665921648ab1f0f9a197c536e554ff)`(`[`Timestep`](docs-api/api-highlo.md#namespacehighlo_ac84bb12650f6f41e650f8b0e43d2b24b_1ac84bb12650f6f41e650f8b0e43d2b24b)` ts)` {#classhighlo_1_1_dynamic_model_ab3665921648ab1f0f9a197c536e554ff_1ab3665921648ab1f0f9a197c536e554ff}

#### `public inline std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetSubmeshIndices`](#classhighlo_1_1_dynamic_model_a3575ad7eab9199753565b36d8ec49950_1a3575ad7eab9199753565b36d8ec49950)`()` {#classhighlo_1_1_dynamic_model_a3575ad7eab9199753565b36d8ec49950_1a3575ad7eab9199753565b36d8ec49950}

#### `public inline const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetSubmeshIndices`](#classhighlo_1_1_dynamic_model_a07c8c79e67b034430e1defd0a44745df_1a07c8c79e67b034430e1defd0a44745df)`() const` {#classhighlo_1_1_dynamic_model_a07c8c79e67b034430e1defd0a44745df_1a07c8c79e67b034430e1defd0a44745df}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetSubmeshIndices`](#classhighlo_1_1_dynamic_model_a0061f684badc613b6f54eba8f839a2bb_1a0061f684badc613b6f54eba8f839a2bb)`(const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & indices)` {#classhighlo_1_1_dynamic_model_a0061f684badc613b6f54eba8f839a2bb_1a0061f684badc613b6f54eba8f839a2bb}

#### `public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & `[`Get`](#classhighlo_1_1_dynamic_model_ac1d723d8b00aad70fa6f4ff29668948a_1ac1d723d8b00aad70fa6f4ff29668948a)`()` {#classhighlo_1_1_dynamic_model_ac1d723d8b00aad70fa6f4ff29668948a_1ac1d723d8b00aad70fa6f4ff29668948a}

#### `public inline const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & `[`Get`](#classhighlo_1_1_dynamic_model_aaa44a54c2bd1f31077715244636cbfc0_1aaa44a54c2bd1f31077715244636cbfc0)`() const` {#classhighlo_1_1_dynamic_model_aaa44a54c2bd1f31077715244636cbfc0_1aaa44a54c2bd1f31077715244636cbfc0}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Set`](#classhighlo_1_1_dynamic_model_a22e9b8faf795f27d696a942430e55248_1a22e9b8faf795f27d696a942430e55248)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & subMesh)` {#classhighlo_1_1_dynamic_model_a22e9b8faf795f27d696a942430e55248_1a22e9b8faf795f27d696a942430e55248}

#### `public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialTable`](docs-api/api-highlo--MaterialTable.md#classhighlo_1_1_material_table)` > `[`GetMaterials`](#classhighlo_1_1_dynamic_model_a0feeda9829ec94380b6e46ba42bab40d_1a0feeda9829ec94380b6e46ba42bab40d)`() const` {#classhighlo_1_1_dynamic_model_a0feeda9829ec94380b6e46ba42bab40d_1a0feeda9829ec94380b6e46ba42bab40d}

#### `public inline virtual `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_dynamic_model_a7b861c429bf7944c8b8ec682584f7600_1a7b861c429bf7944c8b8ec682584f7600)`() const` {#classhighlo_1_1_dynamic_model_a7b861c429bf7944c8b8ec682584f7600_1a7b861c429bf7944c8b8ec682584f7600}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > `[`m_MeshFile`](#classhighlo_1_1_dynamic_model_1a9584aa78313bafb2c11d70a7660019ec) {#classhighlo_1_1_dynamic_model_1a9584aa78313bafb2c11d70a7660019ec}

#### `private std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`m_SubMeshIndices`](#classhighlo_1_1_dynamic_model_1aa5115ec230bfc74477f3faf3eb7bc2aa) {#classhighlo_1_1_dynamic_model_1aa5115ec230bfc74477f3faf3eb7bc2aa}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_BoneCount`](#classhighlo_1_1_dynamic_model_1a22b0edaff6e206aaf4295020d2a1ea4a) {#classhighlo_1_1_dynamic_model_1a22b0edaff6e206aaf4295020d2a1ea4a}

#### `private std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > `[`m_BoneInfos`](#classhighlo_1_1_dynamic_model_1a72a98d8e22b68102340262507e8a5175) {#classhighlo_1_1_dynamic_model_1a72a98d8e22b68102340262507e8a5175}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialTable`](docs-api/api-highlo--MaterialTable.md#classhighlo_1_1_material_table)` > `[`m_Materials`](#classhighlo_1_1_dynamic_model_1a6d751d0939c2c3e16b378f9489c5eb40) {#classhighlo_1_1_dynamic_model_1a6d751d0939c2c3e16b378f9489c5eb40}

#### `private bool `[`m_IsAnimated`](#classhighlo_1_1_dynamic_model_1a6d6f47efed238d730f36f08bc22becd7) {#classhighlo_1_1_dynamic_model_1a6d6f47efed238d730f36f08bc22becd7}

#### `private bool `[`m_AnimationPlaying`](#classhighlo_1_1_dynamic_model_1abd132861b31c5ec19df84932f6f9267e) {#classhighlo_1_1_dynamic_model_1abd132861b31c5ec19df84932f6f9267e}

#### `private float `[`m_AnimationTime`](#classhighlo_1_1_dynamic_model_1ab5b7449702075d5bc6623ea039e3e2c6) {#classhighlo_1_1_dynamic_model_1ab5b7449702075d5bc6623ea039e3e2c6}

#### `private float `[`m_WorldTime`](#classhighlo_1_1_dynamic_model_1a3104e718bc18ad0d12c5cb0167c2c1e1) {#classhighlo_1_1_dynamic_model_1a3104e718bc18ad0d12c5cb0167c2c1e1}

#### `private float `[`m_TimeMultiplier`](#classhighlo_1_1_dynamic_model_1a0927a186191c18dd4379342449f4a223) {#classhighlo_1_1_dynamic_model_1a0927a186191c18dd4379342449f4a223}

#### `public inline static `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_dynamic_model_a2fde94043f70180178612f09ec232a66_1a2fde94043f70180178612f09ec232a66)`()` {#classhighlo_1_1_dynamic_model_a2fde94043f70180178612f09ec232a66_1a2fde94043f70180178612f09ec232a66}

