## class `highlo::Service` {#classhighlo_1_1_service}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Name`](#classhighlo_1_1_service_a390e27beaec64fab7429915ecdb18158_1a390e27beaec64fab7429915ecdb18158) | 
`public `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`Order`](#classhighlo_1_1_service_a893da1e0b88a4b67f1c8ca91decc4cd2_1a893da1e0b88a4b67f1c8ca91decc4cd2) | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Service`](#classhighlo_1_1_service_a73242d7bff1aa55bef409449878cb2ba_1a73242d7bff1aa55bef409449878cb2ba)`() = default` | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Init`](#classhighlo_1_1_service_a295c5f8987089a6f690f965b817eed92_1a295c5f8987089a6f690f965b817eed92)`()` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_service_a88a64f39c02636139dfd8d24cdc771b3_1a88a64f39c02636139dfd8d24cdc771b3)`()` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Exit`](#classhighlo_1_1_service_a1e74de1bd20ae71345561177290070ad_1a1e74de1bd20ae71345561177290070ad)`()` | 
`protected `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Service`](#classhighlo_1_1_service_a2b0caecb97f97d98f4a187ca1419ca12_1a2b0caecb97f97d98f4a187ca1419ca12)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` order)` | 
`typedef `[`ServiceArray`](#classhighlo_1_1_service_ac3169272f52a689845aa788febbd56ba_1ac3169272f52a689845aa788febbd56ba) | 
`private bool `[`m_IsInitialized`](#classhighlo_1_1_service_1a41a32f7763b4f96b60b3aabdbee5a233) | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[ServiceArray`](#classhighlo_1_1_service_ac3169272f52a689845aa788febbd56ba_1ac3169272f52a689845aa788febbd56ba)` & `[`GetServices`](#classhighlo_1_1_service_a6efcd0d1cbc99efd3ce077b58de0c3e5_1a6efcd0d1cbc99efd3ce077b58de0c3e5)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Sort`](#classhighlo_1_1_service_ad0b4bb8ab516ccc6085a5c555832b826_1ad0b4bb8ab516ccc6085a5c555832b826)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnInit`](#classhighlo_1_1_service_ae53367e89b13fd41d6e2eb3eacba7388_1ae53367e89b13fd41d6e2eb3eacba7388)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnUpdate`](#classhighlo_1_1_service_a7d0492b046a48d8a704c5a42f0aa1614_1a7d0492b046a48d8a704c5a42f0aa1614)`(bool updateBackwards)` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnExit`](#classhighlo_1_1_service_a8ce708073312d5e1a62a5e354cd1a211_1a8ce708073312d5e1a62a5e354cd1a211)`()` | 

### Members

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Name`](#classhighlo_1_1_service_a390e27beaec64fab7429915ecdb18158_1a390e27beaec64fab7429915ecdb18158) {#classhighlo_1_1_service_a390e27beaec64fab7429915ecdb18158_1a390e27beaec64fab7429915ecdb18158}

#### `public `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`Order`](#classhighlo_1_1_service_a893da1e0b88a4b67f1c8ca91decc4cd2_1a893da1e0b88a4b67f1c8ca91decc4cd2) {#classhighlo_1_1_service_a893da1e0b88a4b67f1c8ca91decc4cd2_1a893da1e0b88a4b67f1c8ca91decc4cd2}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Service`](#classhighlo_1_1_service_a73242d7bff1aa55bef409449878cb2ba_1a73242d7bff1aa55bef409449878cb2ba)`() = default` {#classhighlo_1_1_service_a73242d7bff1aa55bef409449878cb2ba_1a73242d7bff1aa55bef409449878cb2ba}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Init`](#classhighlo_1_1_service_a295c5f8987089a6f690f965b817eed92_1a295c5f8987089a6f690f965b817eed92)`()` {#classhighlo_1_1_service_a295c5f8987089a6f690f965b817eed92_1a295c5f8987089a6f690f965b817eed92}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_service_a88a64f39c02636139dfd8d24cdc771b3_1a88a64f39c02636139dfd8d24cdc771b3)`()` {#classhighlo_1_1_service_a88a64f39c02636139dfd8d24cdc771b3_1a88a64f39c02636139dfd8d24cdc771b3}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Exit`](#classhighlo_1_1_service_a1e74de1bd20ae71345561177290070ad_1a1e74de1bd20ae71345561177290070ad)`()` {#classhighlo_1_1_service_a1e74de1bd20ae71345561177290070ad_1a1e74de1bd20ae71345561177290070ad}

#### `protected `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Service`](#classhighlo_1_1_service_a2b0caecb97f97d98f4a187ca1419ca12_1a2b0caecb97f97d98f4a187ca1419ca12)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` order)` {#classhighlo_1_1_service_a2b0caecb97f97d98f4a187ca1419ca12_1a2b0caecb97f97d98f4a187ca1419ca12}

#### `typedef `[`ServiceArray`](#classhighlo_1_1_service_ac3169272f52a689845aa788febbd56ba_1ac3169272f52a689845aa788febbd56ba) {#classhighlo_1_1_service_ac3169272f52a689845aa788febbd56ba_1ac3169272f52a689845aa788febbd56ba}

#### `private bool `[`m_IsInitialized`](#classhighlo_1_1_service_1a41a32f7763b4f96b60b3aabdbee5a233) {#classhighlo_1_1_service_1a41a32f7763b4f96b60b3aabdbee5a233}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[ServiceArray`](#classhighlo_1_1_service_ac3169272f52a689845aa788febbd56ba_1ac3169272f52a689845aa788febbd56ba)` & `[`GetServices`](#classhighlo_1_1_service_a6efcd0d1cbc99efd3ce077b58de0c3e5_1a6efcd0d1cbc99efd3ce077b58de0c3e5)`()` {#classhighlo_1_1_service_a6efcd0d1cbc99efd3ce077b58de0c3e5_1a6efcd0d1cbc99efd3ce077b58de0c3e5}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Sort`](#classhighlo_1_1_service_ad0b4bb8ab516ccc6085a5c555832b826_1ad0b4bb8ab516ccc6085a5c555832b826)`()` {#classhighlo_1_1_service_ad0b4bb8ab516ccc6085a5c555832b826_1ad0b4bb8ab516ccc6085a5c555832b826}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnInit`](#classhighlo_1_1_service_ae53367e89b13fd41d6e2eb3eacba7388_1ae53367e89b13fd41d6e2eb3eacba7388)`()` {#classhighlo_1_1_service_ae53367e89b13fd41d6e2eb3eacba7388_1ae53367e89b13fd41d6e2eb3eacba7388}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnUpdate`](#classhighlo_1_1_service_a7d0492b046a48d8a704c5a42f0aa1614_1a7d0492b046a48d8a704c5a42f0aa1614)`(bool updateBackwards)` {#classhighlo_1_1_service_a7d0492b046a48d8a704c5a42f0aa1614_1a7d0492b046a48d8a704c5a42f0aa1614}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnExit`](#classhighlo_1_1_service_a8ce708073312d5e1a62a5e354cd1a211_1a8ce708073312d5e1a62a5e354cd1a211)`()` {#classhighlo_1_1_service_a8ce708073312d5e1a62a5e354cd1a211_1a8ce708073312d5e1a62a5e354cd1a211}

