## class `highlo::Asset` {#classhighlo_1_1_asset}

```
class highlo::Asset
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`AssetHandle`](docs-api/api-highlo.md#namespacehighlo_aba67a82f16d09f36ba19647352617e58_1aba67a82f16d09f36ba19647352617e58)` `[`Handle`](#classhighlo_1_1_asset_adb5554c02e2a6f4f7e02348980e79ecf_1adb5554c02e2a6f4f7e02348980e79ecf) | 
`public `[`uint16`](#_base_types_8h_a05f6b0ae8f6a6e135b0e290c25fe0e4e_1a05f6b0ae8f6a6e135b0e290c25fe0e4e)` `[`Flags`](#classhighlo_1_1_asset_a631107df952c10f32b4a45e2b9357d8c_1a631107df952c10f32b4a45e2b9357d8c) | 
`public inline virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Asset`](#classhighlo_1_1_asset_af372f66184655b3fa2a9d9e30f04ad1a_1af372f66184655b3fa2a9d9e30f04ad1a)`()` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_asset_a6b924858d1cee86fdc26d534facc7e8d_1a6b924858d1cee86fdc26d534facc7e8d)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsValid`](#classhighlo_1_1_asset_abbc695d1ae942f842574513986b5f067_1abbc695d1ae942f842574513986b5f067)`() const` | 
`public inline virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#classhighlo_1_1_asset_a0bede1cff736d94ce114291da21a096f_1a0bede1cff736d94ce114291da21a096f)`(const `[`Asset`](#classhighlo_1_1_asset)` & other) const` | 
`public inline virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#classhighlo_1_1_asset_a028e32c5b683abc06928e9caf0799bd4_1a028e32c5b683abc06928e9caf0799bd4)`(const `[`Asset`](#classhighlo_1_1_asset)` & other) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsFlagSet`](#classhighlo_1_1_asset_a385e8a3353e581dcc7687e2db68f6032_1a385e8a3353e581dcc7687e2db68f6032)`(`[`AssetFlag`](docs-api/api-highlo.md#namespacehighlo_a31ad04b314f1edf9c105dde932e32a0e_1a31ad04b314f1edf9c105dde932e32a0e)` flag) const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetFlag`](#classhighlo_1_1_asset_a37c2fd446c7e26305dc06a62f90e6d4d_1a37c2fd446c7e26305dc06a62f90e6d4d)`(`[`AssetFlag`](docs-api/api-highlo.md#namespacehighlo_a31ad04b314f1edf9c105dde932e32a0e_1a31ad04b314f1edf9c105dde932e32a0e)` flag,bool value)` | 
`public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_asset_a112de4d283076d3bcc76c4c94f9fb4d4_1a112de4d283076d3bcc76c4c94f9fb4d4)`()` | 

### Members

#### `public `[`AssetHandle`](docs-api/api-highlo.md#namespacehighlo_aba67a82f16d09f36ba19647352617e58_1aba67a82f16d09f36ba19647352617e58)` `[`Handle`](#classhighlo_1_1_asset_adb5554c02e2a6f4f7e02348980e79ecf_1adb5554c02e2a6f4f7e02348980e79ecf) {#classhighlo_1_1_asset_adb5554c02e2a6f4f7e02348980e79ecf_1adb5554c02e2a6f4f7e02348980e79ecf}

#### `public `[`uint16`](#_base_types_8h_a05f6b0ae8f6a6e135b0e290c25fe0e4e_1a05f6b0ae8f6a6e135b0e290c25fe0e4e)` `[`Flags`](#classhighlo_1_1_asset_a631107df952c10f32b4a45e2b9357d8c_1a631107df952c10f32b4a45e2b9357d8c) {#classhighlo_1_1_asset_a631107df952c10f32b4a45e2b9357d8c_1a631107df952c10f32b4a45e2b9357d8c}

#### `public inline virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Asset`](#classhighlo_1_1_asset_af372f66184655b3fa2a9d9e30f04ad1a_1af372f66184655b3fa2a9d9e30f04ad1a)`()` {#classhighlo_1_1_asset_af372f66184655b3fa2a9d9e30f04ad1a_1af372f66184655b3fa2a9d9e30f04ad1a}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetAssetType`](#classhighlo_1_1_asset_a6b924858d1cee86fdc26d534facc7e8d_1a6b924858d1cee86fdc26d534facc7e8d)`() const` {#classhighlo_1_1_asset_a6b924858d1cee86fdc26d534facc7e8d_1a6b924858d1cee86fdc26d534facc7e8d}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsValid`](#classhighlo_1_1_asset_abbc695d1ae942f842574513986b5f067_1abbc695d1ae942f842574513986b5f067)`() const` {#classhighlo_1_1_asset_abbc695d1ae942f842574513986b5f067_1abbc695d1ae942f842574513986b5f067}

#### `public inline virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#classhighlo_1_1_asset_a0bede1cff736d94ce114291da21a096f_1a0bede1cff736d94ce114291da21a096f)`(const `[`Asset`](#classhighlo_1_1_asset)` & other) const` {#classhighlo_1_1_asset_a0bede1cff736d94ce114291da21a096f_1a0bede1cff736d94ce114291da21a096f}

#### `public inline virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#classhighlo_1_1_asset_a028e32c5b683abc06928e9caf0799bd4_1a028e32c5b683abc06928e9caf0799bd4)`(const `[`Asset`](#classhighlo_1_1_asset)` & other) const` {#classhighlo_1_1_asset_a028e32c5b683abc06928e9caf0799bd4_1a028e32c5b683abc06928e9caf0799bd4}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsFlagSet`](#classhighlo_1_1_asset_a385e8a3353e581dcc7687e2db68f6032_1a385e8a3353e581dcc7687e2db68f6032)`(`[`AssetFlag`](docs-api/api-highlo.md#namespacehighlo_a31ad04b314f1edf9c105dde932e32a0e_1a31ad04b314f1edf9c105dde932e32a0e)` flag) const` {#classhighlo_1_1_asset_a385e8a3353e581dcc7687e2db68f6032_1a385e8a3353e581dcc7687e2db68f6032}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetFlag`](#classhighlo_1_1_asset_a37c2fd446c7e26305dc06a62f90e6d4d_1a37c2fd446c7e26305dc06a62f90e6d4d)`(`[`AssetFlag`](docs-api/api-highlo.md#namespacehighlo_a31ad04b314f1edf9c105dde932e32a0e_1a31ad04b314f1edf9c105dde932e32a0e)` flag,bool value)` {#classhighlo_1_1_asset_a37c2fd446c7e26305dc06a62f90e6d4d_1a37c2fd446c7e26305dc06a62f90e6d4d}

#### `public inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[AssetType`](docs-api/api-highlo.md#namespacehighlo_a7f9ada5660b422804de197333ed74ad2_1a7f9ada5660b422804de197333ed74ad2)` `[`GetStaticType`](#classhighlo_1_1_asset_a112de4d283076d3bcc76c4c94f9fb4d4_1a112de4d283076d3bcc76c4c94f9fb4d4)`()` {#classhighlo_1_1_asset_a112de4d283076d3bcc76c4c94f9fb4d4_1a112de4d283076d3bcc76c4c94f9fb4d4}

