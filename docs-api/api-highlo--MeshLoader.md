## class `highlo::MeshLoader` {#classhighlo_1_1_mesh_loader}

```
class highlo::MeshLoader
  : public highlo::IsSharedReference
```

Interface to import a model or an animation of any type

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline virtual  `[`~MeshLoader`](#classhighlo_1_1_mesh_loader_a14b7fcdd1eba8d87344b1ac9ecc9afcb_1a14b7fcdd1eba8d87344b1ac9ecc9afcb)`()` | 
`public const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > & `[`GetVertexBuffer`](#classhighlo_1_1_mesh_loader_a8e356a5f15215ffa32267cceb39ad501_1a8e356a5f15215ffa32267cceb39ad501)`() const` | 
`public const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > & `[`GetIndexBuffer`](#classhighlo_1_1_mesh_loader_a6ce89bf26b9043a0c38ad261ae19ae68_1a6ce89bf26b9043a0c38ad261ae19ae68)`() const` | 
`public const `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` & `[`GetLayout`](#classhighlo_1_1_mesh_loader_a71a4dc5eb42b0400f2e5a43be7c4f50a_1a71a4dc5eb42b0400f2e5a43be7c4f50a)`() const` | 
`public const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > & `[`GetMaterials`](#classhighlo_1_1_mesh_loader_a43e6584be728a9b5004b735c5daf2c01_1a43e6584be728a9b5004b735c5daf2c01)`() const` | 
`public const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetTextures`](#classhighlo_1_1_mesh_loader_a040203332871623724e1c9292bd82077_1a040203332871623724e1c9292bd82077)`() const` | 
`public const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetNormalMaps`](#classhighlo_1_1_mesh_loader_ab6f564163834e04fa8a6f9355fac8aaf_1ab6f564163834e04fa8a6f9355fac8aaf)`() const` | 
`public const glm::mat4 & `[`GetInverseTransform`](#classhighlo_1_1_mesh_loader_af9e6228be720550992b971aa6a4fcc2f_1af9e6228be720550992b971aa6a4fcc2f)`() const` | 
`public const std::vector< glm::mat4 > & `[`GetBoneTransforms`](#classhighlo_1_1_mesh_loader_a2e0346131cd10afa9841fdc6e36182ad_1a2e0346131cd10afa9841fdc6e36182ad)`() const` | 
`public const std::unordered_map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), std::vector< [Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > > & `[`GetTriangleCache`](#classhighlo_1_1_mesh_loader_a976a0e914fdf608b88748c7cbe90c757_1a976a0e914fdf608b88748c7cbe90c757)`() const` | 
`public const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & `[`GetSubmeshes`](#classhighlo_1_1_mesh_loader_a6bd0f519ad38c092a8ca78b8bf744b24_1a6bd0f519ad38c092a8ca78b8bf744b24)`() const` | 
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetBoneCount`](#classhighlo_1_1_mesh_loader_a73dc57e194b8cf2da69c1016b8d46fcb_1a73dc57e194b8cf2da69c1016b8d46fcb)`() const` | 
`public const std::unordered_map< `[`HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetBoneMappings`](#classhighlo_1_1_mesh_loader_ad35d0a92da009a06b365a918cd8b3fee_1ad35d0a92da009a06b365a918cd8b3fee)`() const` | 
`public const std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > & `[`GetBoneInfos`](#classhighlo_1_1_mesh_loader_a025dc44890a664802ca6a67ef7367732_1a025dc44890a664802ca6a67ef7367732)`() const` | 
`public bool `[`IsAnimated`](#classhighlo_1_1_mesh_loader_a6e28c5295ee6123101156899370fae8b_1a6e28c5295ee6123101156899370fae8b)`() const` | 
`public const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & `[`GetFilePath`](#classhighlo_1_1_mesh_loader_aa6856b09fe6b149f49a27adfa3cc32cd_1aa6856b09fe6b149f49a27adfa3cc32cd)`() const` | 
`public const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & `[`GetBoundingBox`](#classhighlo_1_1_mesh_loader_ac2da0c68d1c1a005a61b7dcd34631e27_1ac2da0c68d1c1a005a61b7dcd34631e27)`() const` | 
`public const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & `[`GetStaticVertices`](#classhighlo_1_1_mesh_loader_a51a74fe9eef8699b77359741304cad6b_1a51a74fe9eef8699b77359741304cad6b)`() const` | 
`public const std::vector< `[`AnimatedVertex`](docs-api/api-highlo--AnimatedVertex.md#structhighlo_1_1_animated_vertex)` > & `[`GetAnimatedVertices`](#classhighlo_1_1_mesh_loader_ad4a2d74ebcd028f030c6c99405c019a6_1ad4a2d74ebcd028f030c6c99405c019a6)`() const` | 
`public const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & `[`GetIndices`](#classhighlo_1_1_mesh_loader_ab49a82105d5f56b4f286f503dd0945c0_1ab49a82105d5f56b4f286f503dd0945c0)`() const` | 
`public float `[`GetTicksPerSecond`](#classhighlo_1_1_mesh_loader_a864ed27e55373f1f542d57c4488b194b_1a864ed27e55373f1f542d57c4488b194b)`() const` | 
`public float `[`GetAnimationDuration`](#classhighlo_1_1_mesh_loader_a659d0c4b78f8390c629f731f70b6c9b4_1a659d0c4b78f8390c629f731f70b6c9b4)`() const` | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ManipulateBoneTransform`](#classhighlo_1_1_mesh_loader_a0fbc7acceba3c0e136e01dff94e39bdf_1a0fbc7acceba3c0e136e01dff94e39bdf)`(float time,std::vector< glm::mat4 > & outTransforms)` | 
`public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshLoader`](#classhighlo_1_1_mesh_loader)` > `[`Create`](#classhighlo_1_1_mesh_loader_ae515bb09d3e7b047748ef77dcfcff89d_1ae515bb09d3e7b047748ef77dcfcff89d)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > & shader)` | 

### Members

#### `public inline virtual  `[`~MeshLoader`](#classhighlo_1_1_mesh_loader_a14b7fcdd1eba8d87344b1ac9ecc9afcb_1a14b7fcdd1eba8d87344b1ac9ecc9afcb)`()` {#classhighlo_1_1_mesh_loader_a14b7fcdd1eba8d87344b1ac9ecc9afcb_1a14b7fcdd1eba8d87344b1ac9ecc9afcb}

#### `public const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > & `[`GetVertexBuffer`](#classhighlo_1_1_mesh_loader_a8e356a5f15215ffa32267cceb39ad501_1a8e356a5f15215ffa32267cceb39ad501)`() const` {#classhighlo_1_1_mesh_loader_a8e356a5f15215ffa32267cceb39ad501_1a8e356a5f15215ffa32267cceb39ad501}

#### `public const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > & `[`GetIndexBuffer`](#classhighlo_1_1_mesh_loader_a6ce89bf26b9043a0c38ad261ae19ae68_1a6ce89bf26b9043a0c38ad261ae19ae68)`() const` {#classhighlo_1_1_mesh_loader_a6ce89bf26b9043a0c38ad261ae19ae68_1a6ce89bf26b9043a0c38ad261ae19ae68}

#### `public const `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` & `[`GetLayout`](#classhighlo_1_1_mesh_loader_a71a4dc5eb42b0400f2e5a43be7c4f50a_1a71a4dc5eb42b0400f2e5a43be7c4f50a)`() const` {#classhighlo_1_1_mesh_loader_a71a4dc5eb42b0400f2e5a43be7c4f50a_1a71a4dc5eb42b0400f2e5a43be7c4f50a}

#### `public const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > & `[`GetMaterials`](#classhighlo_1_1_mesh_loader_a43e6584be728a9b5004b735c5daf2c01_1a43e6584be728a9b5004b735c5daf2c01)`() const` {#classhighlo_1_1_mesh_loader_a43e6584be728a9b5004b735c5daf2c01_1a43e6584be728a9b5004b735c5daf2c01}

#### `public const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetTextures`](#classhighlo_1_1_mesh_loader_a040203332871623724e1c9292bd82077_1a040203332871623724e1c9292bd82077)`() const` {#classhighlo_1_1_mesh_loader_a040203332871623724e1c9292bd82077_1a040203332871623724e1c9292bd82077}

#### `public const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetNormalMaps`](#classhighlo_1_1_mesh_loader_ab6f564163834e04fa8a6f9355fac8aaf_1ab6f564163834e04fa8a6f9355fac8aaf)`() const` {#classhighlo_1_1_mesh_loader_ab6f564163834e04fa8a6f9355fac8aaf_1ab6f564163834e04fa8a6f9355fac8aaf}

#### `public const glm::mat4 & `[`GetInverseTransform`](#classhighlo_1_1_mesh_loader_af9e6228be720550992b971aa6a4fcc2f_1af9e6228be720550992b971aa6a4fcc2f)`() const` {#classhighlo_1_1_mesh_loader_af9e6228be720550992b971aa6a4fcc2f_1af9e6228be720550992b971aa6a4fcc2f}

#### `public const std::vector< glm::mat4 > & `[`GetBoneTransforms`](#classhighlo_1_1_mesh_loader_a2e0346131cd10afa9841fdc6e36182ad_1a2e0346131cd10afa9841fdc6e36182ad)`() const` {#classhighlo_1_1_mesh_loader_a2e0346131cd10afa9841fdc6e36182ad_1a2e0346131cd10afa9841fdc6e36182ad}

#### `public const std::unordered_map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), std::vector< [Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > > & `[`GetTriangleCache`](#classhighlo_1_1_mesh_loader_a976a0e914fdf608b88748c7cbe90c757_1a976a0e914fdf608b88748c7cbe90c757)`() const` {#classhighlo_1_1_mesh_loader_a976a0e914fdf608b88748c7cbe90c757_1a976a0e914fdf608b88748c7cbe90c757}

#### `public const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & `[`GetSubmeshes`](#classhighlo_1_1_mesh_loader_a6bd0f519ad38c092a8ca78b8bf744b24_1a6bd0f519ad38c092a8ca78b8bf744b24)`() const` {#classhighlo_1_1_mesh_loader_a6bd0f519ad38c092a8ca78b8bf744b24_1a6bd0f519ad38c092a8ca78b8bf744b24}

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetBoneCount`](#classhighlo_1_1_mesh_loader_a73dc57e194b8cf2da69c1016b8d46fcb_1a73dc57e194b8cf2da69c1016b8d46fcb)`() const` {#classhighlo_1_1_mesh_loader_a73dc57e194b8cf2da69c1016b8d46fcb_1a73dc57e194b8cf2da69c1016b8d46fcb}

#### `public const std::unordered_map< `[`HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetBoneMappings`](#classhighlo_1_1_mesh_loader_ad35d0a92da009a06b365a918cd8b3fee_1ad35d0a92da009a06b365a918cd8b3fee)`() const` {#classhighlo_1_1_mesh_loader_ad35d0a92da009a06b365a918cd8b3fee_1ad35d0a92da009a06b365a918cd8b3fee}

#### `public const std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > & `[`GetBoneInfos`](#classhighlo_1_1_mesh_loader_a025dc44890a664802ca6a67ef7367732_1a025dc44890a664802ca6a67ef7367732)`() const` {#classhighlo_1_1_mesh_loader_a025dc44890a664802ca6a67ef7367732_1a025dc44890a664802ca6a67ef7367732}

#### `public bool `[`IsAnimated`](#classhighlo_1_1_mesh_loader_a6e28c5295ee6123101156899370fae8b_1a6e28c5295ee6123101156899370fae8b)`() const` {#classhighlo_1_1_mesh_loader_a6e28c5295ee6123101156899370fae8b_1a6e28c5295ee6123101156899370fae8b}

#### `public const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & `[`GetFilePath`](#classhighlo_1_1_mesh_loader_aa6856b09fe6b149f49a27adfa3cc32cd_1aa6856b09fe6b149f49a27adfa3cc32cd)`() const` {#classhighlo_1_1_mesh_loader_aa6856b09fe6b149f49a27adfa3cc32cd_1aa6856b09fe6b149f49a27adfa3cc32cd}

#### `public const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & `[`GetBoundingBox`](#classhighlo_1_1_mesh_loader_ac2da0c68d1c1a005a61b7dcd34631e27_1ac2da0c68d1c1a005a61b7dcd34631e27)`() const` {#classhighlo_1_1_mesh_loader_ac2da0c68d1c1a005a61b7dcd34631e27_1ac2da0c68d1c1a005a61b7dcd34631e27}

#### `public const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & `[`GetStaticVertices`](#classhighlo_1_1_mesh_loader_a51a74fe9eef8699b77359741304cad6b_1a51a74fe9eef8699b77359741304cad6b)`() const` {#classhighlo_1_1_mesh_loader_a51a74fe9eef8699b77359741304cad6b_1a51a74fe9eef8699b77359741304cad6b}

#### `public const std::vector< `[`AnimatedVertex`](docs-api/api-highlo--AnimatedVertex.md#structhighlo_1_1_animated_vertex)` > & `[`GetAnimatedVertices`](#classhighlo_1_1_mesh_loader_ad4a2d74ebcd028f030c6c99405c019a6_1ad4a2d74ebcd028f030c6c99405c019a6)`() const` {#classhighlo_1_1_mesh_loader_ad4a2d74ebcd028f030c6c99405c019a6_1ad4a2d74ebcd028f030c6c99405c019a6}

#### `public const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & `[`GetIndices`](#classhighlo_1_1_mesh_loader_ab49a82105d5f56b4f286f503dd0945c0_1ab49a82105d5f56b4f286f503dd0945c0)`() const` {#classhighlo_1_1_mesh_loader_ab49a82105d5f56b4f286f503dd0945c0_1ab49a82105d5f56b4f286f503dd0945c0}

#### `public float `[`GetTicksPerSecond`](#classhighlo_1_1_mesh_loader_a864ed27e55373f1f542d57c4488b194b_1a864ed27e55373f1f542d57c4488b194b)`() const` {#classhighlo_1_1_mesh_loader_a864ed27e55373f1f542d57c4488b194b_1a864ed27e55373f1f542d57c4488b194b}

#### `public float `[`GetAnimationDuration`](#classhighlo_1_1_mesh_loader_a659d0c4b78f8390c629f731f70b6c9b4_1a659d0c4b78f8390c629f731f70b6c9b4)`() const` {#classhighlo_1_1_mesh_loader_a659d0c4b78f8390c629f731f70b6c9b4_1a659d0c4b78f8390c629f731f70b6c9b4}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ManipulateBoneTransform`](#classhighlo_1_1_mesh_loader_a0fbc7acceba3c0e136e01dff94e39bdf_1a0fbc7acceba3c0e136e01dff94e39bdf)`(float time,std::vector< glm::mat4 > & outTransforms)` {#classhighlo_1_1_mesh_loader_a0fbc7acceba3c0e136e01dff94e39bdf_1a0fbc7acceba3c0e136e01dff94e39bdf}

#### `public static `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MeshLoader`](#classhighlo_1_1_mesh_loader)` > `[`Create`](#classhighlo_1_1_mesh_loader_ae515bb09d3e7b047748ef77dcfcff89d_1ae515bb09d3e7b047748ef77dcfcff89d)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > & shader)` {#classhighlo_1_1_mesh_loader_ae515bb09d3e7b047748ef77dcfcff89d_1ae515bb09d3e7b047748ef77dcfcff89d}

