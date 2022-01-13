## class `highlo::AssetBrowserItem` {#classhighlo_1_1_asset_browser_item}

```
class highlo::AssetBrowserItem
  : public highlo::AssetBrowserBaseItem
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`AssetBrowserItem`](#classhighlo_1_1_asset_browser_item_a43efcb6e890f06e2de4a262aaadeee83_1a43efcb6e890f06e2de4a262aaadeee83)`(const `[`AssetMetaData`](docs-api/api-highlo--AssetMetaData.md#structhighlo_1_1_asset_meta_data)` & metaData,const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & icon)` | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~AssetBrowserItem`](#classhighlo_1_1_asset_browser_item_aadbcb9215a7066c31ded70cd7f4775ab_1aadbcb9215a7066c31ded70cd7f4775ab)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [AssetMetaData`](docs-api/api-highlo--AssetMetaData.md#structhighlo_1_1_asset_meta_data)` & `[`GetAssetInfo`](#classhighlo_1_1_asset_browser_item_a0c930068d7f666678c8204b591d6b671_1a0c930068d7f666678c8204b591d6b671)`() const` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Delete`](#classhighlo_1_1_asset_browser_item_a9dc60d5d9347eff8d53bb363b5acdf45_1a9dc60d5d9347eff8d53bb363b5acdf45)`()` | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Move`](#classhighlo_1_1_asset_browser_item_a3e5adeb4ee777ba8a04b7b15633c0c53_1a3e5adeb4ee777ba8a04b7b15633c0c53)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & dest)` | 
`private `[`AssetMetaData`](docs-api/api-highlo--AssetMetaData.md#structhighlo_1_1_asset_meta_data)` `[`m_AssetInfo`](#classhighlo_1_1_asset_browser_item_1a63a899aaf39dc89262aaa7d435ddf443) | 
`private virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Activate`](#classhighlo_1_1_asset_browser_item_1a31b0ca628c10ecbf7e4ad3e09770bfb7)`(`[`AssetBrowserActionResult`](docs-api/api-highlo--AssetBrowserActionResult.md#structhighlo_1_1_asset_browser_action_result)` & actionResult)` | 
`private virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnRenamed`](#classhighlo_1_1_asset_browser_item_1a66b82da872e593915c4523912dc801f6)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & newName)` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`AssetBrowserItem`](#classhighlo_1_1_asset_browser_item_a43efcb6e890f06e2de4a262aaadeee83_1a43efcb6e890f06e2de4a262aaadeee83)`(const `[`AssetMetaData`](docs-api/api-highlo--AssetMetaData.md#structhighlo_1_1_asset_meta_data)` & metaData,const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > & icon)` {#classhighlo_1_1_asset_browser_item_a43efcb6e890f06e2de4a262aaadeee83_1a43efcb6e890f06e2de4a262aaadeee83}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~AssetBrowserItem`](#classhighlo_1_1_asset_browser_item_aadbcb9215a7066c31ded70cd7f4775ab_1aadbcb9215a7066c31ded70cd7f4775ab)`()` {#classhighlo_1_1_asset_browser_item_aadbcb9215a7066c31ded70cd7f4775ab_1aadbcb9215a7066c31ded70cd7f4775ab}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [AssetMetaData`](docs-api/api-highlo--AssetMetaData.md#structhighlo_1_1_asset_meta_data)` & `[`GetAssetInfo`](#classhighlo_1_1_asset_browser_item_a0c930068d7f666678c8204b591d6b671_1a0c930068d7f666678c8204b591d6b671)`() const` {#classhighlo_1_1_asset_browser_item_a0c930068d7f666678c8204b591d6b671_1a0c930068d7f666678c8204b591d6b671}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Delete`](#classhighlo_1_1_asset_browser_item_a9dc60d5d9347eff8d53bb363b5acdf45_1a9dc60d5d9347eff8d53bb363b5acdf45)`()` {#classhighlo_1_1_asset_browser_item_a9dc60d5d9347eff8d53bb363b5acdf45_1a9dc60d5d9347eff8d53bb363b5acdf45}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Move`](#classhighlo_1_1_asset_browser_item_a3e5adeb4ee777ba8a04b7b15633c0c53_1a3e5adeb4ee777ba8a04b7b15633c0c53)`(const `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` & dest)` {#classhighlo_1_1_asset_browser_item_a3e5adeb4ee777ba8a04b7b15633c0c53_1a3e5adeb4ee777ba8a04b7b15633c0c53}

#### `private `[`AssetMetaData`](docs-api/api-highlo--AssetMetaData.md#structhighlo_1_1_asset_meta_data)` `[`m_AssetInfo`](#classhighlo_1_1_asset_browser_item_1a63a899aaf39dc89262aaa7d435ddf443) {#classhighlo_1_1_asset_browser_item_1a63a899aaf39dc89262aaa7d435ddf443}

#### `private virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Activate`](#classhighlo_1_1_asset_browser_item_1a31b0ca628c10ecbf7e4ad3e09770bfb7)`(`[`AssetBrowserActionResult`](docs-api/api-highlo--AssetBrowserActionResult.md#structhighlo_1_1_asset_browser_action_result)` & actionResult)` {#classhighlo_1_1_asset_browser_item_1a31b0ca628c10ecbf7e4ad3e09770bfb7}

#### `private virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnRenamed`](#classhighlo_1_1_asset_browser_item_1a66b82da872e593915c4523912dc801f6)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & newName)` {#classhighlo_1_1_asset_browser_item_1a66b82da872e593915c4523912dc801f6}

