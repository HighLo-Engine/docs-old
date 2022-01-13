## class `highlo::MeshFile` {#classhighlo_1_1_mesh_file}

```
class highlo::MeshFile
  : public highlo::Asset
```

Represents an actual asset file on the disk

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a823ce7460eb94ef85259a15d7af7a529_1a823ce7460eb94ef85259a15d7af7a529)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,bool shouldBeAnimated)` | 
`public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a3b3d8ff53a21506b21f958ea7d4c403a_1a3b3d8ff53a21506b21f958ea7d4c403a)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices)` | 
`public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a4d315449efdf94dca5551a480c97aacc_1a4d315449efdf94dca5551a480c97aacc)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & aabb)` | 
`public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a94c8d5ec0bb000c18cdbf30d23704e53_1a94c8d5ec0bb000c18cdbf30d23704e53)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & transform)` | 
`public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a446ac1c098e039f0d6bd28005ae5d432_1a446ac1c098e039f0d6bd28005ae5d432)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & subMeshes)` | 
`public virtual  `[`~MeshFile`](#classhighlo_1_1_mesh_file_a36a4b4b7539d5c510787f6af51807147_1a36a4b4b7539d5c510787f6af51807147)`()` | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DumpVertexBuffer`](#classhighlo_1_1_mesh_file_af0bbed38a6c6587936e7f2e23ac05b36_1af0bbed38a6c6587936e7f2e23ac05b36)`()` | 
`public inline std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & `[`GetSubmeshes`](#classhighlo_1_1_mesh_file_a9933729faf7b811b92eb5068c8a4eeef_1a9933729faf7b811b92eb5068c8a4eeef)`()` | 
`public inline const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & `[`GetSubmeshes`](#classhighlo_1_1_mesh_file_acf35f2af2f1a11fb3b7e39066ea486ce_1acf35f2af2f1a11fb3b7e39066ea486ce)`() const` | 
`public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`GetMeshShader`](#classhighlo_1_1_mesh_file_ac158f62896fd9112e590ba68cf6148d4_1ac158f62896fd9112e590ba68cf6148d4)`()` | 
`public inline std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > & `[`GetMaterials`](#classhighlo_1_1_mesh_file_a315791c2f0c84a76485768a581552c07_1a315791c2f0c84a76485768a581552c07)`()` | 
`public inline const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > & `[`GetMaterials`](#classhighlo_1_1_mesh_file_a8b8646e4457a65aa3a65a984c791585f_1a8b8646e4457a65aa3a65a984c791585f)`() const` | 
`public inline const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetTextures`](#classhighlo_1_1_mesh_file_a565760a3b93f99ac503c36d96639c752_1a565760a3b93f99ac503c36d96639c752)`() const` | 
`public inline const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & `[`GetFilePath`](#classhighlo_1_1_mesh_file_a93a63806b658c0d715259c167e1c5b9c_1a93a63806b658c0d715259c167e1c5b9c)`() const` | 
`public inline const std::vector< `[`Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > `[`GetTriangleCache`](#classhighlo_1_1_mesh_file_a6d4a1b6c7d40321fa235b58f919b0694_1a6d4a1b6c7d40321fa235b58f919b0694)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` index) const` | 
`public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > `[`GetVertexBuffer`](#classhighlo_1_1_mesh_file_a89ef2aaffaf1c4536754832cb3446b24_1a89ef2aaffaf1c4536754832cb3446b24)`()` | 
`public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > `[`GetIndexBuffer`](#classhighlo_1_1_mesh_file_a8b016411aae76de2669bf852b1bc52b2_1a8b016411aae76de2669bf852b1bc52b2)`()` | 
`public inline const `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` & `[`GetVertexBufferLayout`](#classhighlo_1_1_mesh_file_ad829aa0264e4fb4aaaa725f1c97beb00_1ad829aa0264e4fb4aaaa725f1c97beb00)`() const` | 
`public inline const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & `[`GetBoundingBox`](#classhighlo_1_1_mesh_file_a5b93407fc49a84cd96b80ce88d140dbb_1a5b93407fc49a84cd96b80ce88d140dbb)`() const` | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ManipulateBoneTransform`](#classhighlo_1_1_mesh_file_ad701da9ff9d7c0ba9ea7eee739ae7e24_1ad701da9ff9d7c0ba9ea7eee739ae7e24)`(float time)` | 
`public inline virtual `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_mesh_file_a56bdf3fcb5c6574fde20cfa70f70e6f4_1a56bdf3fcb5c6574fde20cfa70f70e6f4)`() const` | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshLoader`](docs-api/api-highlo--MeshLoader.md#classhighlo_1_1_mesh_loader)` > `[`m_MeshLoader`](#classhighlo_1_1_mesh_file_1a5d7d04c901775344957aaff7c7b6fca3) | 
`private `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`m_FilePath`](#classhighlo_1_1_mesh_file_1a95c2d42e2f18966771c142bd8443fc35) | 
`private std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > `[`m_SubMeshes`](#classhighlo_1_1_mesh_file_1a81182c7ebe2f734202938b232c203bce) | 
`private `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`m_InverseTransform`](#classhighlo_1_1_mesh_file_1a615fafad90bd78ae58f63bb24230811e) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > `[`m_VertexBuffer`](#classhighlo_1_1_mesh_file_1a5cdcd4ff31330543cc0ca1bade70e905) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > `[`m_IndexBuffer`](#classhighlo_1_1_mesh_file_1aa107ef913fc5bc06633de71bc6adfb5b) | 
`private `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` `[`m_VertexBufferLayout`](#classhighlo_1_1_mesh_file_1a835726e678dca177d88163627f86e5f8) | 
`private std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > `[`m_StaticVertices`](#classhighlo_1_1_mesh_file_1a00cf99e86c67833fa58c0500144f3a32) | 
`private std::vector< `[`AnimatedVertex`](docs-api/api-highlo--AnimatedVertex.md#structhighlo_1_1_animated_vertex)` > `[`m_AnimatedVertices`](#classhighlo_1_1_mesh_file_1aa529d295bbc932376d4c6d24ff123fb2) | 
`private std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > `[`m_Indices`](#classhighlo_1_1_mesh_file_1a9386bccb84d6f504acf605ca5322f833) | 
`private std::unordered_map< `[`HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`m_BoneMapping`](#classhighlo_1_1_mesh_file_1ae415a56f1895b9a32ad9b85ff30458a3) | 
`private std::vector< glm::mat4 > `[`m_BoneTransforms`](#classhighlo_1_1_mesh_file_1a6c2fd0261cb10cb7117d2413ebae12f2) | 
`private std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > `[`m_BoneInfos`](#classhighlo_1_1_mesh_file_1aff65fae2e2c0891135bd238d9afc976d) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_BoneCount`](#classhighlo_1_1_mesh_file_1a87180a19c19e893800b0151137a48b6a) | 
`private `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` `[`m_BoundingBox`](#classhighlo_1_1_mesh_file_1a86133a0786983c3d2c394f463fc158e9) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`m_MeshShader`](#classhighlo_1_1_mesh_file_1a57c69d5ba41131d8ee5c8ae7e8a08200) | 
`private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`m_Textures`](#classhighlo_1_1_mesh_file_1aaa3e9f58f1373f6e8d4e8ecbe88abe14) | 
`private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`m_NormalMaps`](#classhighlo_1_1_mesh_file_1a0fad659ee91521d6f4ba75c7ff972960) | 
`private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > `[`m_Materials`](#classhighlo_1_1_mesh_file_1a883ded0798c581049a6e9799f1b5dca4) | 
`private std::unordered_map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), std::vector< [Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > > `[`m_TriangleCache`](#classhighlo_1_1_mesh_file_1a1eb89e13563f7256037cda65aa8b2e1d) | 
`private bool `[`m_IsAnimated`](#classhighlo_1_1_mesh_file_1a982548fa97f53b4c1a9bd5ffabdd2f2c) | 
`private bool `[`m_AnimIsPlaying`](#classhighlo_1_1_mesh_file_1a5b0ff3b830d7dc54ee74c3f9d6c73f18) | 
`private float `[`m_TimeMuliplier`](#classhighlo_1_1_mesh_file_1a4fc0ee9ff8c41da469bd31b58b4c5c7b) | 
`private float `[`m_AnimationDuration`](#classhighlo_1_1_mesh_file_1ab6e12c043460f1f8b7f92821cb5dd07f) | 
`private float `[`m_TicksPerSecond`](#classhighlo_1_1_mesh_file_1a4c3182e18cd5d17b522e94ea32803161) | 
`public inline static `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_mesh_file_a34b27bc35d30fb5cc9b497b14e6b54bf_1a34b27bc35d30fb5cc9b497b14e6b54bf)`()` | 
`public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a0299aae89a6baa1abf527e82b3c6956a_1a0299aae89a6baa1abf527e82b3c6956a)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,bool shouldBeAnimated)` | 
`public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a9e85f027ffc456b71f0980e80b23b0cc_1a9e85f027ffc456b71f0980e80b23b0cc)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices)` | 
`public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a01e348299982ab1dfd82f749addc881a_1a01e348299982ab1dfd82f749addc881a)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & aabb)` | 
`public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a1c11cdeb0002e52d8c93ee4c82b663d9_1a1c11cdeb0002e52d8c93ee4c82b663d9)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & transform)` | 
`public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a51dae9eea7aa23b00aaf8d40f0fee0a1_1a51dae9eea7aa23b00aaf8d40f0fee0a1)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & subMeshes)` | 

### Members

#### `public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a823ce7460eb94ef85259a15d7af7a529_1a823ce7460eb94ef85259a15d7af7a529)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,bool shouldBeAnimated)` {#classhighlo_1_1_mesh_file_a823ce7460eb94ef85259a15d7af7a529_1a823ce7460eb94ef85259a15d7af7a529}

#### `public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a3b3d8ff53a21506b21f958ea7d4c403a_1a3b3d8ff53a21506b21f958ea7d4c403a)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices)` {#classhighlo_1_1_mesh_file_a3b3d8ff53a21506b21f958ea7d4c403a_1a3b3d8ff53a21506b21f958ea7d4c403a}

#### `public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a4d315449efdf94dca5551a480c97aacc_1a4d315449efdf94dca5551a480c97aacc)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & aabb)` {#classhighlo_1_1_mesh_file_a4d315449efdf94dca5551a480c97aacc_1a4d315449efdf94dca5551a480c97aacc}

#### `public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a94c8d5ec0bb000c18cdbf30d23704e53_1a94c8d5ec0bb000c18cdbf30d23704e53)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & transform)` {#classhighlo_1_1_mesh_file_a94c8d5ec0bb000c18cdbf30d23704e53_1a94c8d5ec0bb000c18cdbf30d23704e53}

#### `public  `[`MeshFile`](#classhighlo_1_1_mesh_file_a446ac1c098e039f0d6bd28005ae5d432_1a446ac1c098e039f0d6bd28005ae5d432)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & subMeshes)` {#classhighlo_1_1_mesh_file_a446ac1c098e039f0d6bd28005ae5d432_1a446ac1c098e039f0d6bd28005ae5d432}

#### `public virtual  `[`~MeshFile`](#classhighlo_1_1_mesh_file_a36a4b4b7539d5c510787f6af51807147_1a36a4b4b7539d5c510787f6af51807147)`()` {#classhighlo_1_1_mesh_file_a36a4b4b7539d5c510787f6af51807147_1a36a4b4b7539d5c510787f6af51807147}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DumpVertexBuffer`](#classhighlo_1_1_mesh_file_af0bbed38a6c6587936e7f2e23ac05b36_1af0bbed38a6c6587936e7f2e23ac05b36)`()` {#classhighlo_1_1_mesh_file_af0bbed38a6c6587936e7f2e23ac05b36_1af0bbed38a6c6587936e7f2e23ac05b36}

#### `public inline std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & `[`GetSubmeshes`](#classhighlo_1_1_mesh_file_a9933729faf7b811b92eb5068c8a4eeef_1a9933729faf7b811b92eb5068c8a4eeef)`()` {#classhighlo_1_1_mesh_file_a9933729faf7b811b92eb5068c8a4eeef_1a9933729faf7b811b92eb5068c8a4eeef}

#### `public inline const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & `[`GetSubmeshes`](#classhighlo_1_1_mesh_file_acf35f2af2f1a11fb3b7e39066ea486ce_1acf35f2af2f1a11fb3b7e39066ea486ce)`() const` {#classhighlo_1_1_mesh_file_acf35f2af2f1a11fb3b7e39066ea486ce_1acf35f2af2f1a11fb3b7e39066ea486ce}

#### `public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`GetMeshShader`](#classhighlo_1_1_mesh_file_ac158f62896fd9112e590ba68cf6148d4_1ac158f62896fd9112e590ba68cf6148d4)`()` {#classhighlo_1_1_mesh_file_ac158f62896fd9112e590ba68cf6148d4_1ac158f62896fd9112e590ba68cf6148d4}

#### `public inline std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > & `[`GetMaterials`](#classhighlo_1_1_mesh_file_a315791c2f0c84a76485768a581552c07_1a315791c2f0c84a76485768a581552c07)`()` {#classhighlo_1_1_mesh_file_a315791c2f0c84a76485768a581552c07_1a315791c2f0c84a76485768a581552c07}

#### `public inline const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > & `[`GetMaterials`](#classhighlo_1_1_mesh_file_a8b8646e4457a65aa3a65a984c791585f_1a8b8646e4457a65aa3a65a984c791585f)`() const` {#classhighlo_1_1_mesh_file_a8b8646e4457a65aa3a65a984c791585f_1a8b8646e4457a65aa3a65a984c791585f}

#### `public inline const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetTextures`](#classhighlo_1_1_mesh_file_a565760a3b93f99ac503c36d96639c752_1a565760a3b93f99ac503c36d96639c752)`() const` {#classhighlo_1_1_mesh_file_a565760a3b93f99ac503c36d96639c752_1a565760a3b93f99ac503c36d96639c752}

#### `public inline const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & `[`GetFilePath`](#classhighlo_1_1_mesh_file_a93a63806b658c0d715259c167e1c5b9c_1a93a63806b658c0d715259c167e1c5b9c)`() const` {#classhighlo_1_1_mesh_file_a93a63806b658c0d715259c167e1c5b9c_1a93a63806b658c0d715259c167e1c5b9c}

#### `public inline const std::vector< `[`Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > `[`GetTriangleCache`](#classhighlo_1_1_mesh_file_a6d4a1b6c7d40321fa235b58f919b0694_1a6d4a1b6c7d40321fa235b58f919b0694)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` index) const` {#classhighlo_1_1_mesh_file_a6d4a1b6c7d40321fa235b58f919b0694_1a6d4a1b6c7d40321fa235b58f919b0694}

#### `public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > `[`GetVertexBuffer`](#classhighlo_1_1_mesh_file_a89ef2aaffaf1c4536754832cb3446b24_1a89ef2aaffaf1c4536754832cb3446b24)`()` {#classhighlo_1_1_mesh_file_a89ef2aaffaf1c4536754832cb3446b24_1a89ef2aaffaf1c4536754832cb3446b24}

#### `public inline `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > `[`GetIndexBuffer`](#classhighlo_1_1_mesh_file_a8b016411aae76de2669bf852b1bc52b2_1a8b016411aae76de2669bf852b1bc52b2)`()` {#classhighlo_1_1_mesh_file_a8b016411aae76de2669bf852b1bc52b2_1a8b016411aae76de2669bf852b1bc52b2}

#### `public inline const `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` & `[`GetVertexBufferLayout`](#classhighlo_1_1_mesh_file_ad829aa0264e4fb4aaaa725f1c97beb00_1ad829aa0264e4fb4aaaa725f1c97beb00)`() const` {#classhighlo_1_1_mesh_file_ad829aa0264e4fb4aaaa725f1c97beb00_1ad829aa0264e4fb4aaaa725f1c97beb00}

#### `public inline const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & `[`GetBoundingBox`](#classhighlo_1_1_mesh_file_a5b93407fc49a84cd96b80ce88d140dbb_1a5b93407fc49a84cd96b80ce88d140dbb)`() const` {#classhighlo_1_1_mesh_file_a5b93407fc49a84cd96b80ce88d140dbb_1a5b93407fc49a84cd96b80ce88d140dbb}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ManipulateBoneTransform`](#classhighlo_1_1_mesh_file_ad701da9ff9d7c0ba9ea7eee739ae7e24_1ad701da9ff9d7c0ba9ea7eee739ae7e24)`(float time)` {#classhighlo_1_1_mesh_file_ad701da9ff9d7c0ba9ea7eee739ae7e24_1ad701da9ff9d7c0ba9ea7eee739ae7e24}

#### `public inline virtual `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_mesh_file_a56bdf3fcb5c6574fde20cfa70f70e6f4_1a56bdf3fcb5c6574fde20cfa70f70e6f4)`() const` {#classhighlo_1_1_mesh_file_a56bdf3fcb5c6574fde20cfa70f70e6f4_1a56bdf3fcb5c6574fde20cfa70f70e6f4}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshLoader`](docs-api/api-highlo--MeshLoader.md#classhighlo_1_1_mesh_loader)` > `[`m_MeshLoader`](#classhighlo_1_1_mesh_file_1a5d7d04c901775344957aaff7c7b6fca3) {#classhighlo_1_1_mesh_file_1a5d7d04c901775344957aaff7c7b6fca3}

#### `private `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`m_FilePath`](#classhighlo_1_1_mesh_file_1a95c2d42e2f18966771c142bd8443fc35) {#classhighlo_1_1_mesh_file_1a95c2d42e2f18966771c142bd8443fc35}

#### `private std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > `[`m_SubMeshes`](#classhighlo_1_1_mesh_file_1a81182c7ebe2f734202938b232c203bce) {#classhighlo_1_1_mesh_file_1a81182c7ebe2f734202938b232c203bce}

#### `private `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`m_InverseTransform`](#classhighlo_1_1_mesh_file_1a615fafad90bd78ae58f63bb24230811e) {#classhighlo_1_1_mesh_file_1a615fafad90bd78ae58f63bb24230811e}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > `[`m_VertexBuffer`](#classhighlo_1_1_mesh_file_1a5cdcd4ff31330543cc0ca1bade70e905) {#classhighlo_1_1_mesh_file_1a5cdcd4ff31330543cc0ca1bade70e905}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > `[`m_IndexBuffer`](#classhighlo_1_1_mesh_file_1aa107ef913fc5bc06633de71bc6adfb5b) {#classhighlo_1_1_mesh_file_1aa107ef913fc5bc06633de71bc6adfb5b}

#### `private `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` `[`m_VertexBufferLayout`](#classhighlo_1_1_mesh_file_1a835726e678dca177d88163627f86e5f8) {#classhighlo_1_1_mesh_file_1a835726e678dca177d88163627f86e5f8}

#### `private std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > `[`m_StaticVertices`](#classhighlo_1_1_mesh_file_1a00cf99e86c67833fa58c0500144f3a32) {#classhighlo_1_1_mesh_file_1a00cf99e86c67833fa58c0500144f3a32}

#### `private std::vector< `[`AnimatedVertex`](docs-api/api-highlo--AnimatedVertex.md#structhighlo_1_1_animated_vertex)` > `[`m_AnimatedVertices`](#classhighlo_1_1_mesh_file_1aa529d295bbc932376d4c6d24ff123fb2) {#classhighlo_1_1_mesh_file_1aa529d295bbc932376d4c6d24ff123fb2}

#### `private std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > `[`m_Indices`](#classhighlo_1_1_mesh_file_1a9386bccb84d6f504acf605ca5322f833) {#classhighlo_1_1_mesh_file_1a9386bccb84d6f504acf605ca5322f833}

#### `private std::unordered_map< `[`HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`m_BoneMapping`](#classhighlo_1_1_mesh_file_1ae415a56f1895b9a32ad9b85ff30458a3) {#classhighlo_1_1_mesh_file_1ae415a56f1895b9a32ad9b85ff30458a3}

#### `private std::vector< glm::mat4 > `[`m_BoneTransforms`](#classhighlo_1_1_mesh_file_1a6c2fd0261cb10cb7117d2413ebae12f2) {#classhighlo_1_1_mesh_file_1a6c2fd0261cb10cb7117d2413ebae12f2}

#### `private std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > `[`m_BoneInfos`](#classhighlo_1_1_mesh_file_1aff65fae2e2c0891135bd238d9afc976d) {#classhighlo_1_1_mesh_file_1aff65fae2e2c0891135bd238d9afc976d}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_BoneCount`](#classhighlo_1_1_mesh_file_1a87180a19c19e893800b0151137a48b6a) {#classhighlo_1_1_mesh_file_1a87180a19c19e893800b0151137a48b6a}

#### `private `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` `[`m_BoundingBox`](#classhighlo_1_1_mesh_file_1a86133a0786983c3d2c394f463fc158e9) {#classhighlo_1_1_mesh_file_1a86133a0786983c3d2c394f463fc158e9}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > `[`m_MeshShader`](#classhighlo_1_1_mesh_file_1a57c69d5ba41131d8ee5c8ae7e8a08200) {#classhighlo_1_1_mesh_file_1a57c69d5ba41131d8ee5c8ae7e8a08200}

#### `private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`m_Textures`](#classhighlo_1_1_mesh_file_1aaa3e9f58f1373f6e8d4e8ecbe88abe14) {#classhighlo_1_1_mesh_file_1aaa3e9f58f1373f6e8d4e8ecbe88abe14}

#### `private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`m_NormalMaps`](#classhighlo_1_1_mesh_file_1a0fad659ee91521d6f4ba75c7ff972960) {#classhighlo_1_1_mesh_file_1a0fad659ee91521d6f4ba75c7ff972960}

#### `private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > `[`m_Materials`](#classhighlo_1_1_mesh_file_1a883ded0798c581049a6e9799f1b5dca4) {#classhighlo_1_1_mesh_file_1a883ded0798c581049a6e9799f1b5dca4}

#### `private std::unordered_map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), std::vector< [Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > > `[`m_TriangleCache`](#classhighlo_1_1_mesh_file_1a1eb89e13563f7256037cda65aa8b2e1d) {#classhighlo_1_1_mesh_file_1a1eb89e13563f7256037cda65aa8b2e1d}

#### `private bool `[`m_IsAnimated`](#classhighlo_1_1_mesh_file_1a982548fa97f53b4c1a9bd5ffabdd2f2c) {#classhighlo_1_1_mesh_file_1a982548fa97f53b4c1a9bd5ffabdd2f2c}

#### `private bool `[`m_AnimIsPlaying`](#classhighlo_1_1_mesh_file_1a5b0ff3b830d7dc54ee74c3f9d6c73f18) {#classhighlo_1_1_mesh_file_1a5b0ff3b830d7dc54ee74c3f9d6c73f18}

#### `private float `[`m_TimeMuliplier`](#classhighlo_1_1_mesh_file_1a4fc0ee9ff8c41da469bd31b58b4c5c7b) {#classhighlo_1_1_mesh_file_1a4fc0ee9ff8c41da469bd31b58b4c5c7b}

#### `private float `[`m_AnimationDuration`](#classhighlo_1_1_mesh_file_1ab6e12c043460f1f8b7f92821cb5dd07f) {#classhighlo_1_1_mesh_file_1ab6e12c043460f1f8b7f92821cb5dd07f}

#### `private float `[`m_TicksPerSecond`](#classhighlo_1_1_mesh_file_1a4c3182e18cd5d17b522e94ea32803161) {#classhighlo_1_1_mesh_file_1a4c3182e18cd5d17b522e94ea32803161}

#### `public inline static `[`AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_mesh_file_a34b27bc35d30fb5cc9b497b14e6b54bf_1a34b27bc35d30fb5cc9b497b14e6b54bf)`()` {#classhighlo_1_1_mesh_file_a34b27bc35d30fb5cc9b497b14e6b54bf_1a34b27bc35d30fb5cc9b497b14e6b54bf}

#### `public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a0299aae89a6baa1abf527e82b3c6956a_1a0299aae89a6baa1abf527e82b3c6956a)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,bool shouldBeAnimated)` {#classhighlo_1_1_mesh_file_a0299aae89a6baa1abf527e82b3c6956a_1a0299aae89a6baa1abf527e82b3c6956a}

#### `public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a9e85f027ffc456b71f0980e80b23b0cc_1a9e85f027ffc456b71f0980e80b23b0cc)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices)` {#classhighlo_1_1_mesh_file_a9e85f027ffc456b71f0980e80b23b0cc_1a9e85f027ffc456b71f0980e80b23b0cc}

#### `public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a01e348299982ab1dfd82f749addc881a_1a01e348299982ab1dfd82f749addc881a)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & aabb)` {#classhighlo_1_1_mesh_file_a01e348299982ab1dfd82f749addc881a_1a01e348299982ab1dfd82f749addc881a}

#### `public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a1c11cdeb0002e52d8c93ee4c82b663d9_1a1c11cdeb0002e52d8c93ee4c82b663d9)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` & transform)` {#classhighlo_1_1_mesh_file_a1c11cdeb0002e52d8c93ee4c82b663d9_1a1c11cdeb0002e52d8c93ee4c82b663d9}

#### `public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshFile`](#classhighlo_1_1_mesh_file)` > `[`Create`](#classhighlo_1_1_mesh_file_a51dae9eea7aa23b00aaf8d40f0fee0a1_1a51dae9eea7aa23b00aaf8d40f0fee0a1)`(const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & vertices,const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & indices,const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & subMeshes)` {#classhighlo_1_1_mesh_file_a51dae9eea7aa23b00aaf8d40f0fee0a1_1a51dae9eea7aa23b00aaf8d40f0fee0a1}

