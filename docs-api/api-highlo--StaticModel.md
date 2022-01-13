## class `highlo::StaticModel` {#classhighlo_1_1_static_model}

```
class highlo::StaticModel
  : public highlo::Asset
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  explicit `[`StaticModel`](#classhighlo_1_1_static_model_a5979503488fb12ba773037e44af886ff_1a5979503488fb12ba773037e44af886ff)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & mesh)` | 
`public  `[`StaticModel`](#classhighlo_1_1_static_model_a2b9ec8ac8bf6889a8f68dd3fab334a24_1a2b9ec8ac8bf6889a8f68dd3fab334a24)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & mesh,const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & subMeshIndices)` | 
`public  `[`StaticModel`](#classhighlo_1_1_static_model_ad12c005287cb8cb1c34691fd64220c7b_1ad12c005287cb8cb1c34691fd64220c7b)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [StaticModel`](#classhighlo_1_1_static_model)` > & other)` | 
`public virtual  `[`~StaticModel`](#classhighlo_1_1_static_model_a08bfa8ca74f819af53918429068ad785_1a08bfa8ca74f819af53918429068ad785)`()` | 
`public inline std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetSubmeshIndices`](#classhighlo_1_1_static_model_a1a277224d6540e30fc534a03e5a9c682_1a1a277224d6540e30fc534a03e5a9c682)`()` | 
`public inline const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetSubmeshIndices`](#classhighlo_1_1_static_model_ac2a0fe2edee42fbb3f15d2d3bcd97fe0_1ac2a0fe2edee42fbb3f15d2d3bcd97fe0)`() const` | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetSubmeshIndices`](#classhighlo_1_1_static_model_a78e329a05ef42506cdc36696ccc982be_1a78e329a05ef42506cdc36696ccc982be)`(const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & submeshIndices)` | 
`public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & `[`Get`](#classhighlo_1_1_static_model_a4d56d2d6ce23b21de0d7a0f722d295a5_1a4d56d2d6ce23b21de0d7a0f722d295a5)`()` | 
`public inline const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & `[`Get`](#classhighlo_1_1_static_model_adf8f97ea5f18427e8eb0df72c8889fa4_1adf8f97ea5f18427e8eb0df72c8889fa4)`() const` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Set`](#classhighlo_1_1_static_model_ac12a7de43d93b6a1ede04d35dd8c6aa1_1ac12a7de43d93b6a1ede04d35dd8c6aa1)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & subMesh)` | 
`public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialTable`](docs-api/api-highlo--MaterialTable.md#classhighlo_1_1_material_table)` > `[`GetMaterials`](#classhighlo_1_1_static_model_afabe6a6b17ae01a67f5d654ee45e157b_1afabe6a6b17ae01a67f5d654ee45e157b)`() const` | 
`public inline virtual `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_static_model_a23a74d407aaa972b85b86411ade28825_1a23a74d407aaa972b85b86411ade28825)`() const` | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > `[`m_MeshFile`](#classhighlo_1_1_static_model_1a9cfa8ab1693e50359912f569e78d4fe5) | 
`private std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`m_SubMeshIndices`](#classhighlo_1_1_static_model_1a74530bf9a53393fb8556638a62f34518) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialTable`](docs-api/api-highlo--MaterialTable.md#classhighlo_1_1_material_table)` > `[`m_Materials`](#classhighlo_1_1_static_model_1a99c3577a9a644b494caba406c6886186) | 
`public inline static `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_static_model_a2547eaf9da66262149589d4a9c8e9409_1a2547eaf9da66262149589d4a9c8e9409)`()` | 

### Members

#### `public  explicit `[`StaticModel`](#classhighlo_1_1_static_model_a5979503488fb12ba773037e44af886ff_1a5979503488fb12ba773037e44af886ff)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & mesh)` {#classhighlo_1_1_static_model_a5979503488fb12ba773037e44af886ff_1a5979503488fb12ba773037e44af886ff}

#### `public  `[`StaticModel`](#classhighlo_1_1_static_model_a2b9ec8ac8bf6889a8f68dd3fab334a24_1a2b9ec8ac8bf6889a8f68dd3fab334a24)`(`[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & mesh,const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & subMeshIndices)` {#classhighlo_1_1_static_model_a2b9ec8ac8bf6889a8f68dd3fab334a24_1a2b9ec8ac8bf6889a8f68dd3fab334a24}

#### `public  `[`StaticModel`](#classhighlo_1_1_static_model_ad12c005287cb8cb1c34691fd64220c7b_1ad12c005287cb8cb1c34691fd64220c7b)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [StaticModel`](#classhighlo_1_1_static_model)` > & other)` {#classhighlo_1_1_static_model_ad12c005287cb8cb1c34691fd64220c7b_1ad12c005287cb8cb1c34691fd64220c7b}

#### `public virtual  `[`~StaticModel`](#classhighlo_1_1_static_model_a08bfa8ca74f819af53918429068ad785_1a08bfa8ca74f819af53918429068ad785)`()` {#classhighlo_1_1_static_model_a08bfa8ca74f819af53918429068ad785_1a08bfa8ca74f819af53918429068ad785}

#### `public inline std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetSubmeshIndices`](#classhighlo_1_1_static_model_a1a277224d6540e30fc534a03e5a9c682_1a1a277224d6540e30fc534a03e5a9c682)`()` {#classhighlo_1_1_static_model_a1a277224d6540e30fc534a03e5a9c682_1a1a277224d6540e30fc534a03e5a9c682}

#### `public inline const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetSubmeshIndices`](#classhighlo_1_1_static_model_ac2a0fe2edee42fbb3f15d2d3bcd97fe0_1ac2a0fe2edee42fbb3f15d2d3bcd97fe0)`() const` {#classhighlo_1_1_static_model_ac2a0fe2edee42fbb3f15d2d3bcd97fe0_1ac2a0fe2edee42fbb3f15d2d3bcd97fe0}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetSubmeshIndices`](#classhighlo_1_1_static_model_a78e329a05ef42506cdc36696ccc982be_1a78e329a05ef42506cdc36696ccc982be)`(const std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & submeshIndices)` {#classhighlo_1_1_static_model_a78e329a05ef42506cdc36696ccc982be_1a78e329a05ef42506cdc36696ccc982be}

#### `public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & `[`Get`](#classhighlo_1_1_static_model_a4d56d2d6ce23b21de0d7a0f722d295a5_1a4d56d2d6ce23b21de0d7a0f722d295a5)`()` {#classhighlo_1_1_static_model_a4d56d2d6ce23b21de0d7a0f722d295a5_1a4d56d2d6ce23b21de0d7a0f722d295a5}

#### `public inline const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & `[`Get`](#classhighlo_1_1_static_model_adf8f97ea5f18427e8eb0df72c8889fa4_1adf8f97ea5f18427e8eb0df72c8889fa4)`() const` {#classhighlo_1_1_static_model_adf8f97ea5f18427e8eb0df72c8889fa4_1adf8f97ea5f18427e8eb0df72c8889fa4}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Set`](#classhighlo_1_1_static_model_ac12a7de43d93b6a1ede04d35dd8c6aa1_1ac12a7de43d93b6a1ede04d35dd8c6aa1)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > & subMesh)` {#classhighlo_1_1_static_model_ac12a7de43d93b6a1ede04d35dd8c6aa1_1ac12a7de43d93b6a1ede04d35dd8c6aa1}

#### `public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialTable`](docs-api/api-highlo--MaterialTable.md#classhighlo_1_1_material_table)` > `[`GetMaterials`](#classhighlo_1_1_static_model_afabe6a6b17ae01a67f5d654ee45e157b_1afabe6a6b17ae01a67f5d654ee45e157b)`() const` {#classhighlo_1_1_static_model_afabe6a6b17ae01a67f5d654ee45e157b_1afabe6a6b17ae01a67f5d654ee45e157b}

#### `public inline virtual `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_static_model_a23a74d407aaa972b85b86411ade28825_1a23a74d407aaa972b85b86411ade28825)`() const` {#classhighlo_1_1_static_model_a23a74d407aaa972b85b86411ade28825_1a23a74d407aaa972b85b86411ade28825}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](docs-api/api-highlo--MeshFile.md#classhighlo_1_1_mesh_file)` > `[`m_MeshFile`](#classhighlo_1_1_static_model_1a9cfa8ab1693e50359912f569e78d4fe5) {#classhighlo_1_1_static_model_1a9cfa8ab1693e50359912f569e78d4fe5}

#### `private std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`m_SubMeshIndices`](#classhighlo_1_1_static_model_1a74530bf9a53393fb8556638a62f34518) {#classhighlo_1_1_static_model_1a74530bf9a53393fb8556638a62f34518}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MaterialTable`](docs-api/api-highlo--MaterialTable.md#classhighlo_1_1_material_table)` > `[`m_Materials`](#classhighlo_1_1_static_model_1a99c3577a9a644b494caba406c6886186) {#classhighlo_1_1_static_model_1a99c3577a9a644b494caba406c6886186}

#### `public inline static `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_static_model_a2547eaf9da66262149589d4a9c8e9409_1a2547eaf9da66262149589d4a9c8e9409)`()` {#classhighlo_1_1_static_model_a2547eaf9da66262149589d4a9c8e9409_1a2547eaf9da66262149589d4a9c8e9409}

