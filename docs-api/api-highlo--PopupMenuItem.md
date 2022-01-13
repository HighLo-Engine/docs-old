## struct `highlo::PopupMenuItem` {#structhighlo_1_1_popup_menu_item}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Name`](#structhighlo_1_1_popup_menu_item_ae482ae66fbcc98b2747b99f8cfffe254_1ae482ae66fbcc98b2747b99f8cfffe254) | 
`public `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`ID`](#structhighlo_1_1_popup_menu_item_a5e8352fa3bb1523ad48a842a42e7c322_1a5e8352fa3bb1523ad48a842a42e7c322) | 
`public bool `[`Visible`](#structhighlo_1_1_popup_menu_item_ad5f6d212a6c3d9c20ecd24ecff13f236_1ad5f6d212a6c3d9c20ecd24ecff13f236) | 
`public bool `[`Separator`](#structhighlo_1_1_popup_menu_item_adf770c8dba047dbb4a158a3a6a420c31_1adf770c8dba047dbb4a158a3a6a420c31) | 
`public bool `[`IsSubmenu`](#structhighlo_1_1_popup_menu_item_a94d5ff3d9189cbbaa1ba1614f4e34946_1a94d5ff3d9189cbbaa1ba1614f4e34946) | 
`public `[`PopupItemCallback`](docs-api/api-highlo.md#namespacehighlo_acb294123e75ed83d40f15ddf44f64d92_1acb294123e75ed83d40f15ddf44f64d92)` `[`Callback`](#structhighlo_1_1_popup_menu_item_ab00e5367de60c76c26f900857b10c8d1_1ab00e5367de60c76c26f900857b10c8d1) | 
`public std::vector< `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item)` > `[`SubMenuItems`](#structhighlo_1_1_popup_menu_item_aef365be78549a108cba9eb35e26673b9_1aef365be78549a108cba9eb35e26673b9) | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item_a387ac62b522ce901346490eff5710dea_1a387ac62b522ce901346490eff5710dea)`() = default` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item_a2530c1822ecc044dc17e9f3a2480fa81_1a2530c1822ecc044dc17e9f3a2480fa81)`(const `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item)` &) = default` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item_a512a7bc623c36484605c142bed91607a_1a512a7bc623c36484605c142bed91607a)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` id,`[`PopupItemCallback`](docs-api/api-highlo.md#namespacehighlo_acb294123e75ed83d40f15ddf44f64d92_1acb294123e75ed83d40f15ddf44f64d92)` callback,bool visible,bool separator)` | 

### Members

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Name`](#structhighlo_1_1_popup_menu_item_ae482ae66fbcc98b2747b99f8cfffe254_1ae482ae66fbcc98b2747b99f8cfffe254) {#structhighlo_1_1_popup_menu_item_ae482ae66fbcc98b2747b99f8cfffe254_1ae482ae66fbcc98b2747b99f8cfffe254}

#### `public `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`ID`](#structhighlo_1_1_popup_menu_item_a5e8352fa3bb1523ad48a842a42e7c322_1a5e8352fa3bb1523ad48a842a42e7c322) {#structhighlo_1_1_popup_menu_item_a5e8352fa3bb1523ad48a842a42e7c322_1a5e8352fa3bb1523ad48a842a42e7c322}

#### `public bool `[`Visible`](#structhighlo_1_1_popup_menu_item_ad5f6d212a6c3d9c20ecd24ecff13f236_1ad5f6d212a6c3d9c20ecd24ecff13f236) {#structhighlo_1_1_popup_menu_item_ad5f6d212a6c3d9c20ecd24ecff13f236_1ad5f6d212a6c3d9c20ecd24ecff13f236}

#### `public bool `[`Separator`](#structhighlo_1_1_popup_menu_item_adf770c8dba047dbb4a158a3a6a420c31_1adf770c8dba047dbb4a158a3a6a420c31) {#structhighlo_1_1_popup_menu_item_adf770c8dba047dbb4a158a3a6a420c31_1adf770c8dba047dbb4a158a3a6a420c31}

#### `public bool `[`IsSubmenu`](#structhighlo_1_1_popup_menu_item_a94d5ff3d9189cbbaa1ba1614f4e34946_1a94d5ff3d9189cbbaa1ba1614f4e34946) {#structhighlo_1_1_popup_menu_item_a94d5ff3d9189cbbaa1ba1614f4e34946_1a94d5ff3d9189cbbaa1ba1614f4e34946}

#### `public `[`PopupItemCallback`](docs-api/api-highlo.md#namespacehighlo_acb294123e75ed83d40f15ddf44f64d92_1acb294123e75ed83d40f15ddf44f64d92)` `[`Callback`](#structhighlo_1_1_popup_menu_item_ab00e5367de60c76c26f900857b10c8d1_1ab00e5367de60c76c26f900857b10c8d1) {#structhighlo_1_1_popup_menu_item_ab00e5367de60c76c26f900857b10c8d1_1ab00e5367de60c76c26f900857b10c8d1}

#### `public std::vector< `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item)` > `[`SubMenuItems`](#structhighlo_1_1_popup_menu_item_aef365be78549a108cba9eb35e26673b9_1aef365be78549a108cba9eb35e26673b9) {#structhighlo_1_1_popup_menu_item_aef365be78549a108cba9eb35e26673b9_1aef365be78549a108cba9eb35e26673b9}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item_a387ac62b522ce901346490eff5710dea_1a387ac62b522ce901346490eff5710dea)`() = default` {#structhighlo_1_1_popup_menu_item_a387ac62b522ce901346490eff5710dea_1a387ac62b522ce901346490eff5710dea}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item_a2530c1822ecc044dc17e9f3a2480fa81_1a2530c1822ecc044dc17e9f3a2480fa81)`(const `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item)` &) = default` {#structhighlo_1_1_popup_menu_item_a2530c1822ecc044dc17e9f3a2480fa81_1a2530c1822ecc044dc17e9f3a2480fa81}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`PopupMenuItem`](#structhighlo_1_1_popup_menu_item_a512a7bc623c36484605c142bed91607a_1a512a7bc623c36484605c142bed91607a)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` id,`[`PopupItemCallback`](docs-api/api-highlo.md#namespacehighlo_acb294123e75ed83d40f15ddf44f64d92_1acb294123e75ed83d40f15ddf44f64d92)` callback,bool visible,bool separator)` {#structhighlo_1_1_popup_menu_item_a512a7bc623c36484605c142bed91607a_1a512a7bc623c36484605c142bed91607a}

