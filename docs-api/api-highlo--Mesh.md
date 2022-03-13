## struct `highlo::Mesh` {#structhighlo_1_1_mesh}

Represents a mesh inside of a model (this is basically a submesh)

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`BaseVertex`](#structhighlo_1_1_mesh_a71484190f3dea529ac71c23ab34ebdd5_1a71484190f3dea529ac71c23ab34ebdd5) | 
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`BaseIndex`](#structhighlo_1_1_mesh_a4a1bd3fe34c55f92ae82c72a2e9286f5_1a4a1bd3fe34c55f92ae82c72a2e9286f5) | 
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`MaterialIndex`](#structhighlo_1_1_mesh_a9e2ebacc941bf0dd3d751e0cc1e0b05a_1a9e2ebacc941bf0dd3d751e0cc1e0b05a) | 
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`IndexCount`](#structhighlo_1_1_mesh_a7adc707f3e72628346165fb959d5b813_1a7adc707f3e72628346165fb959d5b813) | 
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`VertexCount`](#structhighlo_1_1_mesh_a38965ed7364f32aa182f4378ed56710e_1a38965ed7364f32aa182f4378ed56710e) | 
`public `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`WorldTransform`](#structhighlo_1_1_mesh_a3611a33787fbabd47c778fd82727c0eb_1a3611a33787fbabd47c778fd82727c0eb) | 
`public `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`LocalTransform`](#structhighlo_1_1_mesh_af3ccd3daf4bbb07f3666fc4e41f04650_1af3ccd3daf4bbb07f3666fc4e41f04650) | 
`public `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` `[`BoundingBox`](#structhighlo_1_1_mesh_ae60400e9a69a8b0428472efd0f3553e0_1ae60400e9a69a8b0428472efd0f3553e0) | 
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`NodeName`](#structhighlo_1_1_mesh_a706ca4fd9bb02c4dc3302128ef7389bd_1a706ca4fd9bb02c4dc3302128ef7389bd) | 
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`MeshName`](#structhighlo_1_1_mesh_a4627d8accd3a7601492d1c0cca9d37ff_1a4627d8accd3a7601492d1c0cca9d37ff) | 

### Members

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`BaseVertex`](#structhighlo_1_1_mesh_a71484190f3dea529ac71c23ab34ebdd5_1a71484190f3dea529ac71c23ab34ebdd5) {#structhighlo_1_1_mesh_a71484190f3dea529ac71c23ab34ebdd5_1a71484190f3dea529ac71c23ab34ebdd5}

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`BaseIndex`](#structhighlo_1_1_mesh_a4a1bd3fe34c55f92ae82c72a2e9286f5_1a4a1bd3fe34c55f92ae82c72a2e9286f5) {#structhighlo_1_1_mesh_a4a1bd3fe34c55f92ae82c72a2e9286f5_1a4a1bd3fe34c55f92ae82c72a2e9286f5}

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`MaterialIndex`](#structhighlo_1_1_mesh_a9e2ebacc941bf0dd3d751e0cc1e0b05a_1a9e2ebacc941bf0dd3d751e0cc1e0b05a) {#structhighlo_1_1_mesh_a9e2ebacc941bf0dd3d751e0cc1e0b05a_1a9e2ebacc941bf0dd3d751e0cc1e0b05a}

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`IndexCount`](#structhighlo_1_1_mesh_a7adc707f3e72628346165fb959d5b813_1a7adc707f3e72628346165fb959d5b813) {#structhighlo_1_1_mesh_a7adc707f3e72628346165fb959d5b813_1a7adc707f3e72628346165fb959d5b813}

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`VertexCount`](#structhighlo_1_1_mesh_a38965ed7364f32aa182f4378ed56710e_1a38965ed7364f32aa182f4378ed56710e) {#structhighlo_1_1_mesh_a38965ed7364f32aa182f4378ed56710e_1a38965ed7364f32aa182f4378ed56710e}

#### `public `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`WorldTransform`](#structhighlo_1_1_mesh_a3611a33787fbabd47c778fd82727c0eb_1a3611a33787fbabd47c778fd82727c0eb) {#structhighlo_1_1_mesh_a3611a33787fbabd47c778fd82727c0eb_1a3611a33787fbabd47c778fd82727c0eb}

#### `public `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`LocalTransform`](#structhighlo_1_1_mesh_af3ccd3daf4bbb07f3666fc4e41f04650_1af3ccd3daf4bbb07f3666fc4e41f04650) {#structhighlo_1_1_mesh_af3ccd3daf4bbb07f3666fc4e41f04650_1af3ccd3daf4bbb07f3666fc4e41f04650}

#### `public `[`AABB`](docs-api/api-highlo--AABB.md#structhighlo_1_1_a_a_b_b)` `[`BoundingBox`](#structhighlo_1_1_mesh_ae60400e9a69a8b0428472efd0f3553e0_1ae60400e9a69a8b0428472efd0f3553e0) {#structhighlo_1_1_mesh_ae60400e9a69a8b0428472efd0f3553e0_1ae60400e9a69a8b0428472efd0f3553e0}

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`NodeName`](#structhighlo_1_1_mesh_a706ca4fd9bb02c4dc3302128ef7389bd_1a706ca4fd9bb02c4dc3302128ef7389bd) {#structhighlo_1_1_mesh_a706ca4fd9bb02c4dc3302128ef7389bd_1a706ca4fd9bb02c4dc3302128ef7389bd}

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`MeshName`](#structhighlo_1_1_mesh_a4627d8accd3a7601492d1c0cca9d37ff_1a4627d8accd3a7601492d1c0cca9d37ff) {#structhighlo_1_1_mesh_a4627d8accd3a7601492d1c0cca9d37ff_1a4627d8accd3a7601492d1c0cca9d37ff}

