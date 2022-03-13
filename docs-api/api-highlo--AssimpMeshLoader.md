## class `highlo::AssimpMeshLoader` {#classhighlo_1_1_assimp_mesh_loader}

```
class highlo::AssimpMeshLoader
  : public highlo::MeshLoader
```

Represents a mesh that is specific to Assimp's format

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`AssimpMeshLoader`](#classhighlo_1_1_assimp_mesh_loader_a2e26b5f608b0c7071959075c22a3df93_1a2e26b5f608b0c7071959075c22a3df93)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > & shader)` | 
`public virtual  `[`~AssimpMeshLoader`](#classhighlo_1_1_assimp_mesh_loader_a1383d67fdef4acb955766069f505e9ef_1a1383d67fdef4acb955766069f505e9ef)`()` | 
`public inline virtual const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > & `[`GetVertexBuffer`](#classhighlo_1_1_assimp_mesh_loader_a5599ed1e382d127359845303d0620398_1a5599ed1e382d127359845303d0620398)`() const` | 
`public inline virtual const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > & `[`GetIndexBuffer`](#classhighlo_1_1_assimp_mesh_loader_a0ae0324fd85845f56c38d3c233962d43_1a0ae0324fd85845f56c38d3c233962d43)`() const` | 
`public inline virtual const `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` & `[`GetLayout`](#classhighlo_1_1_assimp_mesh_loader_a52135aa560100139716e4ef81f472c2a_1a52135aa560100139716e4ef81f472c2a)`() const` | 
`public inline virtual const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > & `[`GetMaterials`](#classhighlo_1_1_assimp_mesh_loader_aa24fc8c521cd46c65aeb187b947ce890_1aa24fc8c521cd46c65aeb187b947ce890)`() const` | 
`public inline virtual const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetTextures`](#classhighlo_1_1_assimp_mesh_loader_a83094e85270465bf3da028467cb16376_1a83094e85270465bf3da028467cb16376)`() const` | 
`public inline virtual const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetNormalMaps`](#classhighlo_1_1_assimp_mesh_loader_aa5cf4b60b5180074f9b91de15edf136a_1aa5cf4b60b5180074f9b91de15edf136a)`() const` | 
`public inline virtual const glm::mat4 & `[`GetInverseTransform`](#classhighlo_1_1_assimp_mesh_loader_a6ae468fd9aa64e0bbc7569074a3602f4_1a6ae468fd9aa64e0bbc7569074a3602f4)`() const` | 
`public inline virtual const std::vector< glm::mat4 > & `[`GetBoneTransforms`](#classhighlo_1_1_assimp_mesh_loader_aa97700631c16e53be772de6d40c0259e_1aa97700631c16e53be772de6d40c0259e)`() const` | 
`public inline virtual const std::unordered_map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), std::vector< [Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > > & `[`GetTriangleCache`](#classhighlo_1_1_assimp_mesh_loader_a67169c7f1a2a2b1ece4e72a9ce382d29_1a67169c7f1a2a2b1ece4e72a9ce382d29)`() const` | 
`public inline virtual const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & `[`GetSubmeshes`](#classhighlo_1_1_assimp_mesh_loader_a6037051b40bdfa9b1ceae883bed0a1c7_1a6037051b40bdfa9b1ceae883bed0a1c7)`() const` | 
`public inline virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetBoneCount`](#classhighlo_1_1_assimp_mesh_loader_adcd0206845e857f0384924bfd48255e5_1adcd0206845e857f0384924bfd48255e5)`() const` | 
`public inline virtual const std::unordered_map< `[`HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetBoneMappings`](#classhighlo_1_1_assimp_mesh_loader_a94608bb0ece7079e863108b17a991b98_1a94608bb0ece7079e863108b17a991b98)`() const` | 
`public inline virtual const std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > & `[`GetBoneInfos`](#classhighlo_1_1_assimp_mesh_loader_a506357f3065914781b622d81e7945594_1a506357f3065914781b622d81e7945594)`() const` | 
`public inline virtual bool `[`IsAnimated`](#classhighlo_1_1_assimp_mesh_loader_a7b1ceab7564f0e6bae6b97a37e1bfb12_1a7b1ceab7564f0e6bae6b97a37e1bfb12)`() const` | 
`public inline virtual const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & `[`GetFilePath`](#classhighlo_1_1_assimp_mesh_loader_a62afec88c5264790c975ccdb4c0d9f32_1a62afec88c5264790c975ccdb4c0d9f32)`() const` | 
`public inline virtual const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & `[`GetBoundingBox`](#classhighlo_1_1_assimp_mesh_loader_a0b39bd227b2f13d5a50351962df1fb34_1a0b39bd227b2f13d5a50351962df1fb34)`() const` | 
`public inline virtual const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & `[`GetStaticVertices`](#classhighlo_1_1_assimp_mesh_loader_a192a8123c4b03831cfc501afea07a894_1a192a8123c4b03831cfc501afea07a894)`() const` | 
`public inline virtual const std::vector< `[`AnimatedVertex`](docs-api/api-highlo--AnimatedVertex.md#structhighlo_1_1_animated_vertex)` > & `[`GetAnimatedVertices`](#classhighlo_1_1_assimp_mesh_loader_a0fc5958a6e873799d1978b80037c370a_1a0fc5958a6e873799d1978b80037c370a)`() const` | 
`public inline virtual const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & `[`GetIndices`](#classhighlo_1_1_assimp_mesh_loader_a3dafd0bab8e6bf89c81a1c0caaed447c_1a3dafd0bab8e6bf89c81a1c0caaed447c)`() const` | 
`public inline virtual float `[`GetTicksPerSecond`](#classhighlo_1_1_assimp_mesh_loader_a16e0d351a1bd0d141b1c5eb6d76f89e4_1a16e0d351a1bd0d141b1c5eb6d76f89e4)`() const` | 
`public inline virtual float `[`GetAnimationDuration`](#classhighlo_1_1_assimp_mesh_loader_af4600bba9f218a8d115b5305adc9b2c3_1af4600bba9f218a8d115b5305adc9b2c3)`() const` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ManipulateBoneTransform`](#classhighlo_1_1_assimp_mesh_loader_a73ba74a94b1c9174c2e087e46bfaff6c_1a73ba74a94b1c9174c2e087e46bfaff6c)`(float time,std::vector< glm::mat4 > & outTransforms)` | 
`private `[`UniqueRef`](docs-api/api-highlo.md#namespacehighlo_abbd03b2aec2efeb953fbd4ab8448819d_1abbd03b2aec2efeb953fbd4ab8448819d)`< Assimp::Importer > `[`m_Importer`](#classhighlo_1_1_assimp_mesh_loader_1a5b53e32c49856d42efa7e41781f903c8) | 
`private const aiScene * `[`m_Scene`](#classhighlo_1_1_assimp_mesh_loader_1a467775baa4dc0a2df248f938de04ee4c) | 
`private std::unordered_map< aiNode *, std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > > `[`m_NodeMap`](#classhighlo_1_1_assimp_mesh_loader_1aca42501c71409c6a3d2e363d20662c69) | 
`private `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`m_FilePath`](#classhighlo_1_1_assimp_mesh_loader_1a188a7c0493308b93f7f4795f4a17e643) | 
`private std::vector< glm::mat4 > `[`m_BoneTransforms`](#classhighlo_1_1_assimp_mesh_loader_1a270ff1acaac81e6cf2978ad88e40c9e2) | 
`private std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > `[`m_StaticVertices`](#classhighlo_1_1_assimp_mesh_loader_1a0318a87ab9c0151ddb7a4a8cff5d3bed) | 
`private std::vector< `[`AnimatedVertex`](docs-api/api-highlo--AnimatedVertex.md#structhighlo_1_1_animated_vertex)` > `[`m_AnimatedVertices`](#classhighlo_1_1_assimp_mesh_loader_1ac42dc49dc01242b1b15a42513b44b7c9) | 
`private std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > `[`m_Indices`](#classhighlo_1_1_assimp_mesh_loader_1a6d12eeb28f1eef47d109f73c877a7b95) | 
`private std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > `[`m_Submeshes`](#classhighlo_1_1_assimp_mesh_loader_1aae9acc7555dd057d64b2852622c9ea91) | 
`private std::unordered_map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), std::vector< [Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > > `[`m_TriangleCache`](#classhighlo_1_1_assimp_mesh_loader_1a9ffb2c0144fef08d1ec94b35fe03fc58) | 
`private glm::mat4 `[`m_InverseTransform`](#classhighlo_1_1_assimp_mesh_loader_1a690f30b9428719b071a321c2ab185c6e) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > `[`m_VertexBuffer`](#classhighlo_1_1_assimp_mesh_loader_1a9dd304217b140d11bb1bcd43a467d42c) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > `[`m_IndexBuffer`](#classhighlo_1_1_assimp_mesh_loader_1af66d79c9e4f60f0e786135a665d852ca) | 
`private `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` `[`m_Layout`](#classhighlo_1_1_assimp_mesh_loader_1a9cc7c1608f3d9618a2768c86babe79f0) | 
`private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > `[`m_Materials`](#classhighlo_1_1_assimp_mesh_loader_1a0661eca293ef4db76dfa0c297204666e) | 
`private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`m_Textures`](#classhighlo_1_1_assimp_mesh_loader_1ad8719f59e5240dccf0c1540a10279cc8) | 
`private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`m_NormalMaps`](#classhighlo_1_1_assimp_mesh_loader_1a9f71aedbef793c0cddf5c39aba2b09c5) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_BoneCount`](#classhighlo_1_1_assimp_mesh_loader_1a978364f24226afa062d8899a244417e5) | 
`private std::unordered_map< `[`HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`m_BoneMapping`](#classhighlo_1_1_assimp_mesh_loader_1a29d5a5a26c8ca2259b2551bc090cc22f) | 
`private std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > `[`m_BoneInfos`](#classhighlo_1_1_assimp_mesh_loader_1ac571146094ff988da4dbeccc293aa207) | 
`private bool `[`m_IsAnimated`](#classhighlo_1_1_assimp_mesh_loader_1a918e69048320c3db48c5df20b78d8e6a) | 
`private float `[`m_AnimationDuration`](#classhighlo_1_1_assimp_mesh_loader_1abdc787eea6eecc142b9cfb10c091d115) | 
`private float `[`m_TicksPerSecond`](#classhighlo_1_1_assimp_mesh_loader_1a3423164302a4707d530c62304ce00b6e) | 
`private `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` `[`m_BoundingBox`](#classhighlo_1_1_assimp_mesh_loader_1a63c09d102a4c0bfe5f96d30e7e44a150) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_MeshImportFlags`](#classhighlo_1_1_assimp_mesh_loader_1ae1c13b272d2dc8b04ac9aee932e10ddb) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BoneTransform`](#classhighlo_1_1_assimp_mesh_loader_1a90f397fd7a31170f17b0c42689e97250)`(float time)` | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ReadNodeHierarchy`](#classhighlo_1_1_assimp_mesh_loader_1a9d41032ed8770d547b0256339eb0dd01)`(float animTime,const aiNode * node,const glm::mat4 & parentTransform)` | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`TraverseNodes`](#classhighlo_1_1_assimp_mesh_loader_1a6ffcc8fda733b83a6fe625d27c861f17)`(aiNode * node,const glm::mat4 & parentTransform,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` level)` | 
`private const aiNodeAnim * `[`FindNodeAnim`](#classhighlo_1_1_assimp_mesh_loader_1ae5e06b577b7f6dbe4fd5b94b2402d06c)`(const aiAnimation * anim,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name)` | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`FindPosition`](#classhighlo_1_1_assimp_mesh_loader_1aefcad61e4a77ef61807681b21cbe4356)`(float animTime,const aiNodeAnim * anim)` | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`FindScale`](#classhighlo_1_1_assimp_mesh_loader_1a1d05badab600cbb933f2753386a98917)`(float animTime,const aiNodeAnim * anim)` | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`FindRotation`](#classhighlo_1_1_assimp_mesh_loader_1a258cec924af99309b8ce71146a58c4bd)`(float animTime,const aiNodeAnim * anim)` | 
`private glm::vec3 `[`InterpolateTranslation`](#classhighlo_1_1_assimp_mesh_loader_1aa3a3a60822be2dd269c6bfbd67d98e9c)`(float animTime,const aiNodeAnim * anim)` | 
`private glm::vec3 `[`InterpolateScale`](#classhighlo_1_1_assimp_mesh_loader_1a11c236f665530dda3d3fd665fda29e53)`(float animTime,const aiNodeAnim * anim)` | 
`private glm::quat `[`InterpolateRotation`](#classhighlo_1_1_assimp_mesh_loader_1a89159ca14ee6bb4a794d601c323d9aab)`(float animTime,const aiNodeAnim * anim)` | 

### Members

#### `public  `[`AssimpMeshLoader`](#classhighlo_1_1_assimp_mesh_loader_a2e26b5f608b0c7071959075c22a3df93_1a2e26b5f608b0c7071959075c22a3df93)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & filePath,const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Shader`](docs-api/api-highlo--Shader.md#classhighlo_1_1_shader)` > & shader)` {#classhighlo_1_1_assimp_mesh_loader_a2e26b5f608b0c7071959075c22a3df93_1a2e26b5f608b0c7071959075c22a3df93}

#### `public virtual  `[`~AssimpMeshLoader`](#classhighlo_1_1_assimp_mesh_loader_a1383d67fdef4acb955766069f505e9ef_1a1383d67fdef4acb955766069f505e9ef)`()` {#classhighlo_1_1_assimp_mesh_loader_a1383d67fdef4acb955766069f505e9ef_1a1383d67fdef4acb955766069f505e9ef}

#### `public inline virtual const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > & `[`GetVertexBuffer`](#classhighlo_1_1_assimp_mesh_loader_a5599ed1e382d127359845303d0620398_1a5599ed1e382d127359845303d0620398)`() const` {#classhighlo_1_1_assimp_mesh_loader_a5599ed1e382d127359845303d0620398_1a5599ed1e382d127359845303d0620398}

#### `public inline virtual const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > & `[`GetIndexBuffer`](#classhighlo_1_1_assimp_mesh_loader_a0ae0324fd85845f56c38d3c233962d43_1a0ae0324fd85845f56c38d3c233962d43)`() const` {#classhighlo_1_1_assimp_mesh_loader_a0ae0324fd85845f56c38d3c233962d43_1a0ae0324fd85845f56c38d3c233962d43}

#### `public inline virtual const `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` & `[`GetLayout`](#classhighlo_1_1_assimp_mesh_loader_a52135aa560100139716e4ef81f472c2a_1a52135aa560100139716e4ef81f472c2a)`() const` {#classhighlo_1_1_assimp_mesh_loader_a52135aa560100139716e4ef81f472c2a_1a52135aa560100139716e4ef81f472c2a}

#### `public inline virtual const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > & `[`GetMaterials`](#classhighlo_1_1_assimp_mesh_loader_aa24fc8c521cd46c65aeb187b947ce890_1aa24fc8c521cd46c65aeb187b947ce890)`() const` {#classhighlo_1_1_assimp_mesh_loader_aa24fc8c521cd46c65aeb187b947ce890_1aa24fc8c521cd46c65aeb187b947ce890}

#### `public inline virtual const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetTextures`](#classhighlo_1_1_assimp_mesh_loader_a83094e85270465bf3da028467cb16376_1a83094e85270465bf3da028467cb16376)`() const` {#classhighlo_1_1_assimp_mesh_loader_a83094e85270465bf3da028467cb16376_1a83094e85270465bf3da028467cb16376}

#### `public inline virtual const std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > & `[`GetNormalMaps`](#classhighlo_1_1_assimp_mesh_loader_aa5cf4b60b5180074f9b91de15edf136a_1aa5cf4b60b5180074f9b91de15edf136a)`() const` {#classhighlo_1_1_assimp_mesh_loader_aa5cf4b60b5180074f9b91de15edf136a_1aa5cf4b60b5180074f9b91de15edf136a}

#### `public inline virtual const glm::mat4 & `[`GetInverseTransform`](#classhighlo_1_1_assimp_mesh_loader_a6ae468fd9aa64e0bbc7569074a3602f4_1a6ae468fd9aa64e0bbc7569074a3602f4)`() const` {#classhighlo_1_1_assimp_mesh_loader_a6ae468fd9aa64e0bbc7569074a3602f4_1a6ae468fd9aa64e0bbc7569074a3602f4}

#### `public inline virtual const std::vector< glm::mat4 > & `[`GetBoneTransforms`](#classhighlo_1_1_assimp_mesh_loader_aa97700631c16e53be772de6d40c0259e_1aa97700631c16e53be772de6d40c0259e)`() const` {#classhighlo_1_1_assimp_mesh_loader_aa97700631c16e53be772de6d40c0259e_1aa97700631c16e53be772de6d40c0259e}

#### `public inline virtual const std::unordered_map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), std::vector< [Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > > & `[`GetTriangleCache`](#classhighlo_1_1_assimp_mesh_loader_a67169c7f1a2a2b1ece4e72a9ce382d29_1a67169c7f1a2a2b1ece4e72a9ce382d29)`() const` {#classhighlo_1_1_assimp_mesh_loader_a67169c7f1a2a2b1ece4e72a9ce382d29_1a67169c7f1a2a2b1ece4e72a9ce382d29}

#### `public inline virtual const std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > & `[`GetSubmeshes`](#classhighlo_1_1_assimp_mesh_loader_a6037051b40bdfa9b1ceae883bed0a1c7_1a6037051b40bdfa9b1ceae883bed0a1c7)`() const` {#classhighlo_1_1_assimp_mesh_loader_a6037051b40bdfa9b1ceae883bed0a1c7_1a6037051b40bdfa9b1ceae883bed0a1c7}

#### `public inline virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetBoneCount`](#classhighlo_1_1_assimp_mesh_loader_adcd0206845e857f0384924bfd48255e5_1adcd0206845e857f0384924bfd48255e5)`() const` {#classhighlo_1_1_assimp_mesh_loader_adcd0206845e857f0384924bfd48255e5_1adcd0206845e857f0384924bfd48255e5}

#### `public inline virtual const std::unordered_map< `[`HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > & `[`GetBoneMappings`](#classhighlo_1_1_assimp_mesh_loader_a94608bb0ece7079e863108b17a991b98_1a94608bb0ece7079e863108b17a991b98)`() const` {#classhighlo_1_1_assimp_mesh_loader_a94608bb0ece7079e863108b17a991b98_1a94608bb0ece7079e863108b17a991b98}

#### `public inline virtual const std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > & `[`GetBoneInfos`](#classhighlo_1_1_assimp_mesh_loader_a506357f3065914781b622d81e7945594_1a506357f3065914781b622d81e7945594)`() const` {#classhighlo_1_1_assimp_mesh_loader_a506357f3065914781b622d81e7945594_1a506357f3065914781b622d81e7945594}

#### `public inline virtual bool `[`IsAnimated`](#classhighlo_1_1_assimp_mesh_loader_a7b1ceab7564f0e6bae6b97a37e1bfb12_1a7b1ceab7564f0e6bae6b97a37e1bfb12)`() const` {#classhighlo_1_1_assimp_mesh_loader_a7b1ceab7564f0e6bae6b97a37e1bfb12_1a7b1ceab7564f0e6bae6b97a37e1bfb12}

#### `public inline virtual const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & `[`GetFilePath`](#classhighlo_1_1_assimp_mesh_loader_a62afec88c5264790c975ccdb4c0d9f32_1a62afec88c5264790c975ccdb4c0d9f32)`() const` {#classhighlo_1_1_assimp_mesh_loader_a62afec88c5264790c975ccdb4c0d9f32_1a62afec88c5264790c975ccdb4c0d9f32}

#### `public inline virtual const `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` & `[`GetBoundingBox`](#classhighlo_1_1_assimp_mesh_loader_a0b39bd227b2f13d5a50351962df1fb34_1a0b39bd227b2f13d5a50351962df1fb34)`() const` {#classhighlo_1_1_assimp_mesh_loader_a0b39bd227b2f13d5a50351962df1fb34_1a0b39bd227b2f13d5a50351962df1fb34}

#### `public inline virtual const std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > & `[`GetStaticVertices`](#classhighlo_1_1_assimp_mesh_loader_a192a8123c4b03831cfc501afea07a894_1a192a8123c4b03831cfc501afea07a894)`() const` {#classhighlo_1_1_assimp_mesh_loader_a192a8123c4b03831cfc501afea07a894_1a192a8123c4b03831cfc501afea07a894}

#### `public inline virtual const std::vector< `[`AnimatedVertex`](docs-api/api-highlo--AnimatedVertex.md#structhighlo_1_1_animated_vertex)` > & `[`GetAnimatedVertices`](#classhighlo_1_1_assimp_mesh_loader_a0fc5958a6e873799d1978b80037c370a_1a0fc5958a6e873799d1978b80037c370a)`() const` {#classhighlo_1_1_assimp_mesh_loader_a0fc5958a6e873799d1978b80037c370a_1a0fc5958a6e873799d1978b80037c370a}

#### `public inline virtual const std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > & `[`GetIndices`](#classhighlo_1_1_assimp_mesh_loader_a3dafd0bab8e6bf89c81a1c0caaed447c_1a3dafd0bab8e6bf89c81a1c0caaed447c)`() const` {#classhighlo_1_1_assimp_mesh_loader_a3dafd0bab8e6bf89c81a1c0caaed447c_1a3dafd0bab8e6bf89c81a1c0caaed447c}

#### `public inline virtual float `[`GetTicksPerSecond`](#classhighlo_1_1_assimp_mesh_loader_a16e0d351a1bd0d141b1c5eb6d76f89e4_1a16e0d351a1bd0d141b1c5eb6d76f89e4)`() const` {#classhighlo_1_1_assimp_mesh_loader_a16e0d351a1bd0d141b1c5eb6d76f89e4_1a16e0d351a1bd0d141b1c5eb6d76f89e4}

#### `public inline virtual float `[`GetAnimationDuration`](#classhighlo_1_1_assimp_mesh_loader_af4600bba9f218a8d115b5305adc9b2c3_1af4600bba9f218a8d115b5305adc9b2c3)`() const` {#classhighlo_1_1_assimp_mesh_loader_af4600bba9f218a8d115b5305adc9b2c3_1af4600bba9f218a8d115b5305adc9b2c3}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ManipulateBoneTransform`](#classhighlo_1_1_assimp_mesh_loader_a73ba74a94b1c9174c2e087e46bfaff6c_1a73ba74a94b1c9174c2e087e46bfaff6c)`(float time,std::vector< glm::mat4 > & outTransforms)` {#classhighlo_1_1_assimp_mesh_loader_a73ba74a94b1c9174c2e087e46bfaff6c_1a73ba74a94b1c9174c2e087e46bfaff6c}

#### `private `[`UniqueRef`](docs-api/api-highlo.md#namespacehighlo_abbd03b2aec2efeb953fbd4ab8448819d_1abbd03b2aec2efeb953fbd4ab8448819d)`< Assimp::Importer > `[`m_Importer`](#classhighlo_1_1_assimp_mesh_loader_1a5b53e32c49856d42efa7e41781f903c8) {#classhighlo_1_1_assimp_mesh_loader_1a5b53e32c49856d42efa7e41781f903c8}

#### `private const aiScene * `[`m_Scene`](#classhighlo_1_1_assimp_mesh_loader_1a467775baa4dc0a2df248f938de04ee4c) {#classhighlo_1_1_assimp_mesh_loader_1a467775baa4dc0a2df248f938de04ee4c}

#### `private std::unordered_map< aiNode *, std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > > `[`m_NodeMap`](#classhighlo_1_1_assimp_mesh_loader_1aca42501c71409c6a3d2e363d20662c69) {#classhighlo_1_1_assimp_mesh_loader_1aca42501c71409c6a3d2e363d20662c69}

#### `private `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`m_FilePath`](#classhighlo_1_1_assimp_mesh_loader_1a188a7c0493308b93f7f4795f4a17e643) {#classhighlo_1_1_assimp_mesh_loader_1a188a7c0493308b93f7f4795f4a17e643}

#### `private std::vector< glm::mat4 > `[`m_BoneTransforms`](#classhighlo_1_1_assimp_mesh_loader_1a270ff1acaac81e6cf2978ad88e40c9e2) {#classhighlo_1_1_assimp_mesh_loader_1a270ff1acaac81e6cf2978ad88e40c9e2}

#### `private std::vector< `[`Vertex`](docs-api/api-highlo--Vertex.md#structhighlo_1_1_vertex)` > `[`m_StaticVertices`](#classhighlo_1_1_assimp_mesh_loader_1a0318a87ab9c0151ddb7a4a8cff5d3bed) {#classhighlo_1_1_assimp_mesh_loader_1a0318a87ab9c0151ddb7a4a8cff5d3bed}

#### `private std::vector< `[`AnimatedVertex`](docs-api/api-highlo--AnimatedVertex.md#structhighlo_1_1_animated_vertex)` > `[`m_AnimatedVertices`](#classhighlo_1_1_assimp_mesh_loader_1ac42dc49dc01242b1b15a42513b44b7c9) {#classhighlo_1_1_assimp_mesh_loader_1ac42dc49dc01242b1b15a42513b44b7c9}

#### `private std::vector< `[`VertexIndex`](docs-api/api-highlo--VertexIndex.md#structhighlo_1_1_vertex_index)` > `[`m_Indices`](#classhighlo_1_1_assimp_mesh_loader_1a6d12eeb28f1eef47d109f73c877a7b95) {#classhighlo_1_1_assimp_mesh_loader_1a6d12eeb28f1eef47d109f73c877a7b95}

#### `private std::vector< `[`Mesh`](docs-api/api-highlo--Mesh.md#structhighlo_1_1_mesh)` > `[`m_Submeshes`](#classhighlo_1_1_assimp_mesh_loader_1aae9acc7555dd057d64b2852622c9ea91) {#classhighlo_1_1_assimp_mesh_loader_1aae9acc7555dd057d64b2852622c9ea91}

#### `private std::unordered_map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), std::vector< [Triangle`](docs-api/api-highlo--Triangle.md#structhighlo_1_1_triangle)` > > `[`m_TriangleCache`](#classhighlo_1_1_assimp_mesh_loader_1a9ffb2c0144fef08d1ec94b35fe03fc58) {#classhighlo_1_1_assimp_mesh_loader_1a9ffb2c0144fef08d1ec94b35fe03fc58}

#### `private glm::mat4 `[`m_InverseTransform`](#classhighlo_1_1_assimp_mesh_loader_1a690f30b9428719b071a321c2ab185c6e) {#classhighlo_1_1_assimp_mesh_loader_1a690f30b9428719b071a321c2ab185c6e}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [VertexBuffer`](docs-api/api-highlo--VertexBuffer.md#classhighlo_1_1_vertex_buffer)` > `[`m_VertexBuffer`](#classhighlo_1_1_assimp_mesh_loader_1a9dd304217b140d11bb1bcd43a467d42c) {#classhighlo_1_1_assimp_mesh_loader_1a9dd304217b140d11bb1bcd43a467d42c}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [IndexBuffer`](docs-api/api-highlo--IndexBuffer.md#classhighlo_1_1_index_buffer)` > `[`m_IndexBuffer`](#classhighlo_1_1_assimp_mesh_loader_1af66d79c9e4f60f0e786135a665d852ca) {#classhighlo_1_1_assimp_mesh_loader_1af66d79c9e4f60f0e786135a665d852ca}

#### `private `[`BufferLayout`](docs-api/api-highlo--BufferLayout.md#classhighlo_1_1_buffer_layout)` `[`m_Layout`](#classhighlo_1_1_assimp_mesh_loader_1a9cc7c1608f3d9618a2768c86babe79f0) {#classhighlo_1_1_assimp_mesh_loader_1a9cc7c1608f3d9618a2768c86babe79f0}

#### `private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Material`](docs-api/api-highlo--Material.md#classhighlo_1_1_material)` > > `[`m_Materials`](#classhighlo_1_1_assimp_mesh_loader_1a0661eca293ef4db76dfa0c297204666e) {#classhighlo_1_1_assimp_mesh_loader_1a0661eca293ef4db76dfa0c297204666e}

#### `private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`m_Textures`](#classhighlo_1_1_assimp_mesh_loader_1ad8719f59e5240dccf0c1540a10279cc8) {#classhighlo_1_1_assimp_mesh_loader_1ad8719f59e5240dccf0c1540a10279cc8}

#### `private std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`m_NormalMaps`](#classhighlo_1_1_assimp_mesh_loader_1a9f71aedbef793c0cddf5c39aba2b09c5) {#classhighlo_1_1_assimp_mesh_loader_1a9f71aedbef793c0cddf5c39aba2b09c5}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_BoneCount`](#classhighlo_1_1_assimp_mesh_loader_1a978364f24226afa062d8899a244417e5) {#classhighlo_1_1_assimp_mesh_loader_1a978364f24226afa062d8899a244417e5}

#### `private std::unordered_map< `[`HLString](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538), [uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`m_BoneMapping`](#classhighlo_1_1_assimp_mesh_loader_1a29d5a5a26c8ca2259b2551bc090cc22f) {#classhighlo_1_1_assimp_mesh_loader_1a29d5a5a26c8ca2259b2551bc090cc22f}

#### `private std::vector< `[`BoneInfo`](docs-api/api-highlo--BoneInfo.md#structhighlo_1_1_bone_info)` > `[`m_BoneInfos`](#classhighlo_1_1_assimp_mesh_loader_1ac571146094ff988da4dbeccc293aa207) {#classhighlo_1_1_assimp_mesh_loader_1ac571146094ff988da4dbeccc293aa207}

#### `private bool `[`m_IsAnimated`](#classhighlo_1_1_assimp_mesh_loader_1a918e69048320c3db48c5df20b78d8e6a) {#classhighlo_1_1_assimp_mesh_loader_1a918e69048320c3db48c5df20b78d8e6a}

#### `private float `[`m_AnimationDuration`](#classhighlo_1_1_assimp_mesh_loader_1abdc787eea6eecc142b9cfb10c091d115) {#classhighlo_1_1_assimp_mesh_loader_1abdc787eea6eecc142b9cfb10c091d115}

#### `private float `[`m_TicksPerSecond`](#classhighlo_1_1_assimp_mesh_loader_1a3423164302a4707d530c62304ce00b6e) {#classhighlo_1_1_assimp_mesh_loader_1a3423164302a4707d530c62304ce00b6e}

#### `private `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` `[`m_BoundingBox`](#classhighlo_1_1_assimp_mesh_loader_1a63c09d102a4c0bfe5f96d30e7e44a150) {#classhighlo_1_1_assimp_mesh_loader_1a63c09d102a4c0bfe5f96d30e7e44a150}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_MeshImportFlags`](#classhighlo_1_1_assimp_mesh_loader_1ae1c13b272d2dc8b04ac9aee932e10ddb) {#classhighlo_1_1_assimp_mesh_loader_1ae1c13b272d2dc8b04ac9aee932e10ddb}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BoneTransform`](#classhighlo_1_1_assimp_mesh_loader_1a90f397fd7a31170f17b0c42689e97250)`(float time)` {#classhighlo_1_1_assimp_mesh_loader_1a90f397fd7a31170f17b0c42689e97250}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ReadNodeHierarchy`](#classhighlo_1_1_assimp_mesh_loader_1a9d41032ed8770d547b0256339eb0dd01)`(float animTime,const aiNode * node,const glm::mat4 & parentTransform)` {#classhighlo_1_1_assimp_mesh_loader_1a9d41032ed8770d547b0256339eb0dd01}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`TraverseNodes`](#classhighlo_1_1_assimp_mesh_loader_1a6ffcc8fda733b83a6fe625d27c861f17)`(aiNode * node,const glm::mat4 & parentTransform,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` level)` {#classhighlo_1_1_assimp_mesh_loader_1a6ffcc8fda733b83a6fe625d27c861f17}

#### `private const aiNodeAnim * `[`FindNodeAnim`](#classhighlo_1_1_assimp_mesh_loader_1ae5e06b577b7f6dbe4fd5b94b2402d06c)`(const aiAnimation * anim,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name)` {#classhighlo_1_1_assimp_mesh_loader_1ae5e06b577b7f6dbe4fd5b94b2402d06c}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`FindPosition`](#classhighlo_1_1_assimp_mesh_loader_1aefcad61e4a77ef61807681b21cbe4356)`(float animTime,const aiNodeAnim * anim)` {#classhighlo_1_1_assimp_mesh_loader_1aefcad61e4a77ef61807681b21cbe4356}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`FindScale`](#classhighlo_1_1_assimp_mesh_loader_1a1d05badab600cbb933f2753386a98917)`(float animTime,const aiNodeAnim * anim)` {#classhighlo_1_1_assimp_mesh_loader_1a1d05badab600cbb933f2753386a98917}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`FindRotation`](#classhighlo_1_1_assimp_mesh_loader_1a258cec924af99309b8ce71146a58c4bd)`(float animTime,const aiNodeAnim * anim)` {#classhighlo_1_1_assimp_mesh_loader_1a258cec924af99309b8ce71146a58c4bd}

#### `private glm::vec3 `[`InterpolateTranslation`](#classhighlo_1_1_assimp_mesh_loader_1aa3a3a60822be2dd269c6bfbd67d98e9c)`(float animTime,const aiNodeAnim * anim)` {#classhighlo_1_1_assimp_mesh_loader_1aa3a3a60822be2dd269c6bfbd67d98e9c}

#### `private glm::vec3 `[`InterpolateScale`](#classhighlo_1_1_assimp_mesh_loader_1a11c236f665530dda3d3fd665fda29e53)`(float animTime,const aiNodeAnim * anim)` {#classhighlo_1_1_assimp_mesh_loader_1a11c236f665530dda3d3fd665fda29e53}

#### `private glm::quat `[`InterpolateRotation`](#classhighlo_1_1_assimp_mesh_loader_1a89159ca14ee6bb4a794d601c323d9aab)`(float animTime,const aiNodeAnim * anim)` {#classhighlo_1_1_assimp_mesh_loader_1a89159ca14ee6bb4a794d601c323d9aab}

