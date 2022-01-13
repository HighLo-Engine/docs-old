## struct `highlo::MenuItem` {#structhighlo_1_1_menu_item}

```
struct highlo::MenuItem
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Name`](#structhighlo_1_1_menu_item_a27d22cbaff9431ab2fe6671018b5995f_1a27d22cbaff9431ab2fe6671018b5995f) | 
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Shortcut`](#structhighlo_1_1_menu_item_a51a0d7756fc31a5776b8eed99f1cdb2b_1a51a0d7756fc31a5776b8eed99f1cdb2b) | 
`public `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`ID`](#structhighlo_1_1_menu_item_a48cbb0e8085e75957eec8c79266caa04_1a48cbb0e8085e75957eec8c79266caa04) | 
`public bool `[`Visible`](#structhighlo_1_1_menu_item_a7c07a220b35cd5e6068ece965a1de653_1a7c07a220b35cd5e6068ece965a1de653) | 
`public bool `[`Separator`](#structhighlo_1_1_menu_item_a97e866b4f00a56de8fc2d4779825b94a_1a97e866b4f00a56de8fc2d4779825b94a) | 
`public bool `[`IsSubmenu`](#structhighlo_1_1_menu_item_aa45425219426dc4e010455752e2d1477_1aa45425219426dc4e010455752e2d1477) | 
`public bool `[`IsSelected`](#structhighlo_1_1_menu_item_abf7a0907ada0e7002a912f03b79cebde_1abf7a0907ada0e7002a912f03b79cebde) | 
`public `[`MenuItemCallback`](docs-api/api-highlo.md#namespacehighlo_a9281d709bf5dbf230c9ec7fdc5c43ef3_1a9281d709bf5dbf230c9ec7fdc5c43ef3)` `[`Callback`](#structhighlo_1_1_menu_item_af609b62b73b6b379af76e1c3b880ddc8_1af609b62b73b6b379af76e1c3b880ddc8) | 
`public std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MenuItem`](#structhighlo_1_1_menu_item)` > > `[`SubmenuItems`](#structhighlo_1_1_menu_item_aa4377cbcfb7f8986232ce1666c264721_1aa4377cbcfb7f8986232ce1666c264721) | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MenuItem`](#structhighlo_1_1_menu_item_a92b2fe35504740474a7f49e4dfd354bc_1a92b2fe35504740474a7f49e4dfd354bc)`() = default` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MenuItem`](#structhighlo_1_1_menu_item_a242c9cd54a80c01fda06626c647f21be_1a242c9cd54a80c01fda06626c647f21be)`(const `[`MenuItem`](#structhighlo_1_1_menu_item)` &) = default` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[MenuItem`](#structhighlo_1_1_menu_item)` & `[`operator=`](#structhighlo_1_1_menu_item_ab8bf5ef0115e8100af8979bde9978bac_1ab8bf5ef0115e8100af8979bde9978bac)`(const `[`MenuItem`](#structhighlo_1_1_menu_item)` &) = default` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MenuItem`](#structhighlo_1_1_menu_item_a60a14e224ddd68fb19571f6669b751dc_1a60a14e224ddd68fb19571f6669b751dc)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` id,const `[`MenuItemCallback`](docs-api/api-highlo.md#namespacehighlo_a9281d709bf5dbf230c9ec7fdc5c43ef3_1a9281d709bf5dbf230c9ec7fdc5c43ef3)` & callback,bool visible,bool separator)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#structhighlo_1_1_menu_item_afcc22477f9e3ec3af376b1004423f98f_1afcc22477f9e3ec3af376b1004423f98f)`(const `[`MenuItem`](#structhighlo_1_1_menu_item)` & other) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#structhighlo_1_1_menu_item_a583f32e6741049256d01e8c9d74bdcf0_1a583f32e6741049256d01e8c9d74bdcf0)`(const `[`MenuItem`](#structhighlo_1_1_menu_item)` & other) const` | 

### Members

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Name`](#structhighlo_1_1_menu_item_a27d22cbaff9431ab2fe6671018b5995f_1a27d22cbaff9431ab2fe6671018b5995f) {#structhighlo_1_1_menu_item_a27d22cbaff9431ab2fe6671018b5995f_1a27d22cbaff9431ab2fe6671018b5995f}

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Shortcut`](#structhighlo_1_1_menu_item_a51a0d7756fc31a5776b8eed99f1cdb2b_1a51a0d7756fc31a5776b8eed99f1cdb2b) {#structhighlo_1_1_menu_item_a51a0d7756fc31a5776b8eed99f1cdb2b_1a51a0d7756fc31a5776b8eed99f1cdb2b}

#### `public `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`ID`](#structhighlo_1_1_menu_item_a48cbb0e8085e75957eec8c79266caa04_1a48cbb0e8085e75957eec8c79266caa04) {#structhighlo_1_1_menu_item_a48cbb0e8085e75957eec8c79266caa04_1a48cbb0e8085e75957eec8c79266caa04}

#### `public bool `[`Visible`](#structhighlo_1_1_menu_item_a7c07a220b35cd5e6068ece965a1de653_1a7c07a220b35cd5e6068ece965a1de653) {#structhighlo_1_1_menu_item_a7c07a220b35cd5e6068ece965a1de653_1a7c07a220b35cd5e6068ece965a1de653}

#### `public bool `[`Separator`](#structhighlo_1_1_menu_item_a97e866b4f00a56de8fc2d4779825b94a_1a97e866b4f00a56de8fc2d4779825b94a) {#structhighlo_1_1_menu_item_a97e866b4f00a56de8fc2d4779825b94a_1a97e866b4f00a56de8fc2d4779825b94a}

#### `public bool `[`IsSubmenu`](#structhighlo_1_1_menu_item_aa45425219426dc4e010455752e2d1477_1aa45425219426dc4e010455752e2d1477) {#structhighlo_1_1_menu_item_aa45425219426dc4e010455752e2d1477_1aa45425219426dc4e010455752e2d1477}

#### `public bool `[`IsSelected`](#structhighlo_1_1_menu_item_abf7a0907ada0e7002a912f03b79cebde_1abf7a0907ada0e7002a912f03b79cebde) {#structhighlo_1_1_menu_item_abf7a0907ada0e7002a912f03b79cebde_1abf7a0907ada0e7002a912f03b79cebde}

#### `public `[`MenuItemCallback`](docs-api/api-highlo.md#namespacehighlo_a9281d709bf5dbf230c9ec7fdc5c43ef3_1a9281d709bf5dbf230c9ec7fdc5c43ef3)` `[`Callback`](#structhighlo_1_1_menu_item_af609b62b73b6b379af76e1c3b880ddc8_1af609b62b73b6b379af76e1c3b880ddc8) {#structhighlo_1_1_menu_item_af609b62b73b6b379af76e1c3b880ddc8_1af609b62b73b6b379af76e1c3b880ddc8}

#### `public std::vector< `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MenuItem`](#structhighlo_1_1_menu_item)` > > `[`SubmenuItems`](#structhighlo_1_1_menu_item_aa4377cbcfb7f8986232ce1666c264721_1aa4377cbcfb7f8986232ce1666c264721) {#structhighlo_1_1_menu_item_aa4377cbcfb7f8986232ce1666c264721_1aa4377cbcfb7f8986232ce1666c264721}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MenuItem`](#structhighlo_1_1_menu_item_a92b2fe35504740474a7f49e4dfd354bc_1a92b2fe35504740474a7f49e4dfd354bc)`() = default` {#structhighlo_1_1_menu_item_a92b2fe35504740474a7f49e4dfd354bc_1a92b2fe35504740474a7f49e4dfd354bc}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MenuItem`](#structhighlo_1_1_menu_item_a242c9cd54a80c01fda06626c647f21be_1a242c9cd54a80c01fda06626c647f21be)`(const `[`MenuItem`](#structhighlo_1_1_menu_item)` &) = default` {#structhighlo_1_1_menu_item_a242c9cd54a80c01fda06626c647f21be_1a242c9cd54a80c01fda06626c647f21be}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[MenuItem`](#structhighlo_1_1_menu_item)` & `[`operator=`](#structhighlo_1_1_menu_item_ab8bf5ef0115e8100af8979bde9978bac_1ab8bf5ef0115e8100af8979bde9978bac)`(const `[`MenuItem`](#structhighlo_1_1_menu_item)` &) = default` {#structhighlo_1_1_menu_item_ab8bf5ef0115e8100af8979bde9978bac_1ab8bf5ef0115e8100af8979bde9978bac}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`MenuItem`](#structhighlo_1_1_menu_item_a60a14e224ddd68fb19571f6669b751dc_1a60a14e224ddd68fb19571f6669b751dc)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` id,const `[`MenuItemCallback`](docs-api/api-highlo.md#namespacehighlo_a9281d709bf5dbf230c9ec7fdc5c43ef3_1a9281d709bf5dbf230c9ec7fdc5c43ef3)` & callback,bool visible,bool separator)` {#structhighlo_1_1_menu_item_a60a14e224ddd68fb19571f6669b751dc_1a60a14e224ddd68fb19571f6669b751dc}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#structhighlo_1_1_menu_item_afcc22477f9e3ec3af376b1004423f98f_1afcc22477f9e3ec3af376b1004423f98f)`(const `[`MenuItem`](#structhighlo_1_1_menu_item)` & other) const` {#structhighlo_1_1_menu_item_afcc22477f9e3ec3af376b1004423f98f_1afcc22477f9e3ec3af376b1004423f98f}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#structhighlo_1_1_menu_item_a583f32e6741049256d01e8c9d74bdcf0_1a583f32e6741049256d01e8c9d74bdcf0)`(const `[`MenuItem`](#structhighlo_1_1_menu_item)` & other) const` {#structhighlo_1_1_menu_item_a583f32e6741049256d01e8c9d74bdcf0_1a583f32e6741049256d01e8c9d74bdcf0}

