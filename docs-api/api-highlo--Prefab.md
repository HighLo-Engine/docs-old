## class `highlo::Prefab` {#classhighlo_1_1_prefab}

```
class highlo::Prefab
  : public highlo::Asset
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Prefab`](#classhighlo_1_1_prefab_ad023c77595886617012c48fa75940ed8_1ad023c77595886617012c48fa75940ed8)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Prefab`](#classhighlo_1_1_prefab_a8646fc17ba916a44cdc4845270f51e4e_1a8646fc17ba916a44cdc4845270f51e4e)`(`[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` e)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Prefab`](#classhighlo_1_1_prefab_ad02a121bacf262723ddd302df40f9dc5_1ad02a121bacf262723ddd302df40f9dc5)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Create`](#classhighlo_1_1_prefab_a1877e4f9cccd85c2cc068aa5a0a549a4_1a1877e4f9cccd85c2cc068aa5a0a549a4)`(`[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` e,bool serialize)` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_prefab_ad883298792d68b0bc1d17c74f494d7f1_1ad883298792d68b0bc1d17c74f494d7f1)`() const` | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Scene`](docs-api/api-highlo--Scene.md#classhighlo_1_1_scene)` > `[`m_Scene`](#classhighlo_1_1_prefab_1a1b89a8b097cfb1f2cb226007d3cf3bdd) | 
`private `[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` `[`m_Entity`](#classhighlo_1_1_prefab_1ae7de0af20aa8d758046155a279f5f335) | 
`private `[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` `[`CreatePrefabFromEntity`](#classhighlo_1_1_prefab_1a549d638dce66a96bbaa393aee7bb8d54)`(`[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` entity)` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_prefab_ae38e7cb07eae0f14976d43742829c066_1ae38e7cb07eae0f14976d43742829c066)`()` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Prefab`](#classhighlo_1_1_prefab_ad023c77595886617012c48fa75940ed8_1ad023c77595886617012c48fa75940ed8)`()` {#classhighlo_1_1_prefab_ad023c77595886617012c48fa75940ed8_1ad023c77595886617012c48fa75940ed8}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Prefab`](#classhighlo_1_1_prefab_a8646fc17ba916a44cdc4845270f51e4e_1a8646fc17ba916a44cdc4845270f51e4e)`(`[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` e)` {#classhighlo_1_1_prefab_a8646fc17ba916a44cdc4845270f51e4e_1a8646fc17ba916a44cdc4845270f51e4e}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Prefab`](#classhighlo_1_1_prefab_ad02a121bacf262723ddd302df40f9dc5_1ad02a121bacf262723ddd302df40f9dc5)`()` {#classhighlo_1_1_prefab_ad02a121bacf262723ddd302df40f9dc5_1ad02a121bacf262723ddd302df40f9dc5}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Create`](#classhighlo_1_1_prefab_a1877e4f9cccd85c2cc068aa5a0a549a4_1a1877e4f9cccd85c2cc068aa5a0a549a4)`(`[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` e,bool serialize)` {#classhighlo_1_1_prefab_a1877e4f9cccd85c2cc068aa5a0a549a4_1a1877e4f9cccd85c2cc068aa5a0a549a4}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_prefab_ad883298792d68b0bc1d17c74f494d7f1_1ad883298792d68b0bc1d17c74f494d7f1)`() const` {#classhighlo_1_1_prefab_ad883298792d68b0bc1d17c74f494d7f1_1ad883298792d68b0bc1d17c74f494d7f1}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Scene`](docs-api/api-highlo--Scene.md#classhighlo_1_1_scene)` > `[`m_Scene`](#classhighlo_1_1_prefab_1a1b89a8b097cfb1f2cb226007d3cf3bdd) {#classhighlo_1_1_prefab_1a1b89a8b097cfb1f2cb226007d3cf3bdd}

#### `private `[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` `[`m_Entity`](#classhighlo_1_1_prefab_1ae7de0af20aa8d758046155a279f5f335) {#classhighlo_1_1_prefab_1ae7de0af20aa8d758046155a279f5f335}

#### `private `[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` `[`CreatePrefabFromEntity`](#classhighlo_1_1_prefab_1a549d638dce66a96bbaa393aee7bb8d54)`(`[`Entity`](docs-api/api-highlo--Entity.md#classhighlo_1_1_entity)` entity)` {#classhighlo_1_1_prefab_1a549d638dce66a96bbaa393aee7bb8d54}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_prefab_ae38e7cb07eae0f14976d43742829c066_1ae38e7cb07eae0f14976d43742829c066)`()` {#classhighlo_1_1_prefab_ae38e7cb07eae0f14976d43742829c066_1ae38e7cb07eae0f14976d43742829c066}

