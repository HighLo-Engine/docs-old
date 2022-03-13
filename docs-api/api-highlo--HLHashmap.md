## class `highlo::HLHashmap` {#classhighlo_1_1_h_l_hashmap}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLHashmap`](#classhighlo_1_1_h_l_hashmap_a983251293047fcf41c026c6cd4fbc903_1a983251293047fcf41c026c6cd4fbc903)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~HLHashmap`](#classhighlo_1_1_h_l_hashmap_a50f6cb8234d3137373448c3b97586f83_1a50f6cb8234d3137373448c3b97586f83)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasKey`](#classhighlo_1_1_h_l_hashmap_a89a9bb2e6076f3152d1479c6df5c872a_1a89a9bb2e6076f3152d1479c6df5c872a)`(const KeyType & key)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasValue`](#classhighlo_1_1_h_l_hashmap_a5505b921d36ba65d6e79ae97807de034_1a5505b921d36ba65d6e79ae97807de034)`(const ValueType & value)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Put`](#classhighlo_1_1_h_l_hashmap_a6d618ea1db87ce12e2ff136db9973d18_1a6d618ea1db87ce12e2ff136db9973d18)`(const KeyType & key,const ValueType & value)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Set`](#classhighlo_1_1_h_l_hashmap_a3a94f422ddea38679456cc50f5044fa6_1a3a94f422ddea38679456cc50f5044fa6)`(const KeyType & key,const ValueType & value)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Remove`](#classhighlo_1_1_h_l_hashmap_a5a447e5409e814fc687a5adda537ba2d_1a5a447e5409e814fc687a5adda537ba2d)`(const KeyType & key,const ValueType & value)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Remove`](#classhighlo_1_1_h_l_hashmap_ab034102f239d96fd4b0b4350ef56fcb1_1ab034102f239d96fd4b0b4350ef56fcb1)`(const KeyType & key)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RemoveAll`](#classhighlo_1_1_h_l_hashmap_a1137dd057d6d10f354b10a4406ec8809_1a1137dd057d6d10f354b10a4406ec8809)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`RemoveFirst`](#classhighlo_1_1_h_l_hashmap_a5159ffdca99eb4d5c497f3cd8f22d7ad_1a5159ffdca99eb4d5c497f3cd8f22d7ad)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`RemoveLast`](#classhighlo_1_1_h_l_hashmap_a306378f173df44047351c93f7977fe36_1a306378f173df44047351c93f7977fe36)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`Find`](#classhighlo_1_1_h_l_hashmap_a17c12fb761b00b3e5e1db9f8b34cba94_1a17c12fb761b00b3e5e1db9f8b34cba94)`(const KeyType & key)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`GetFirst`](#classhighlo_1_1_h_l_hashmap_afca84bb91e686b88aa7154e8875e5738_1afca84bb91e686b88aa7154e8875e5738)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`GetLast`](#classhighlo_1_1_h_l_hashmap_a79ed806905a2c034dbdffb9703e86f3e_1a79ed806905a2c034dbdffb9703e86f3e)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`GetAt`](#classhighlo_1_1_h_l_hashmap_a1acec6b707959da0c206a7eb2431f70c_1a1acec6b707959da0c206a7eb2431f70c)`(`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` i)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` KeyType & `[`GetKey`](#classhighlo_1_1_h_l_hashmap_aa20f6f943e9c9338b7fa5ec010f1df7a_1aa20f6f943e9c9338b7fa5ec010f1df7a)`(`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` i)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsEmpty`](#classhighlo_1_1_h_l_hashmap_a7b0c285c21d5178a6911a8bb765fbacb_1a7b0c285c21d5178a6911a8bb765fbacb)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Size`](#classhighlo_1_1_h_l_hashmap_a61056cfd0421abb2d4ccc2250b3c9560_1a61056cfd0421abb2d4ccc2250b3c9560)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Print`](#classhighlo_1_1_h_l_hashmap_ae4839d8f1cc19a453c0e6da138afe35b_1ae4839d8f1cc19a453c0e6da138afe35b)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`operator[]`](#classhighlo_1_1_h_l_hashmap_abc7e632ba351dba4403774fe5314db82_1abc7e632ba351dba4403774fe5314db82)`(const KeyType & key)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const ValueType & `[`operator[]`](#classhighlo_1_1_h_l_hashmap_a10a3f3652d0a94cc54fb8b45e8a36090_1a10a3f3652d0a94cc54fb8b45e8a36090)`(const KeyType & key) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`operator[]`](#classhighlo_1_1_h_l_hashmap_aedf4455a2f8560e808897a7b30293365_1aedf4455a2f8560e808897a7b30293365)`(size_t i)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const ValueType & `[`operator[]`](#classhighlo_1_1_h_l_hashmap_a391dbd1ea7f1f7b7be985aeaa2679009_1a391dbd1ea7f1f7b7be985aeaa2679009)`(size_t i) const` | 
`private std::vector< std::pair< KeyType, ValueType > > `[`m_Elements`](#classhighlo_1_1_h_l_hashmap_1a5473c211db1710496c02f0690705ee51) | 

### Members

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`HLHashmap`](#classhighlo_1_1_h_l_hashmap_a983251293047fcf41c026c6cd4fbc903_1a983251293047fcf41c026c6cd4fbc903)`()` {#classhighlo_1_1_h_l_hashmap_a983251293047fcf41c026c6cd4fbc903_1a983251293047fcf41c026c6cd4fbc903}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~HLHashmap`](#classhighlo_1_1_h_l_hashmap_a50f6cb8234d3137373448c3b97586f83_1a50f6cb8234d3137373448c3b97586f83)`()` {#classhighlo_1_1_h_l_hashmap_a50f6cb8234d3137373448c3b97586f83_1a50f6cb8234d3137373448c3b97586f83}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasKey`](#classhighlo_1_1_h_l_hashmap_a89a9bb2e6076f3152d1479c6df5c872a_1a89a9bb2e6076f3152d1479c6df5c872a)`(const KeyType & key)` {#classhighlo_1_1_h_l_hashmap_a89a9bb2e6076f3152d1479c6df5c872a_1a89a9bb2e6076f3152d1479c6df5c872a}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasValue`](#classhighlo_1_1_h_l_hashmap_a5505b921d36ba65d6e79ae97807de034_1a5505b921d36ba65d6e79ae97807de034)`(const ValueType & value)` {#classhighlo_1_1_h_l_hashmap_a5505b921d36ba65d6e79ae97807de034_1a5505b921d36ba65d6e79ae97807de034}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Put`](#classhighlo_1_1_h_l_hashmap_a6d618ea1db87ce12e2ff136db9973d18_1a6d618ea1db87ce12e2ff136db9973d18)`(const KeyType & key,const ValueType & value)` {#classhighlo_1_1_h_l_hashmap_a6d618ea1db87ce12e2ff136db9973d18_1a6d618ea1db87ce12e2ff136db9973d18}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Set`](#classhighlo_1_1_h_l_hashmap_a3a94f422ddea38679456cc50f5044fa6_1a3a94f422ddea38679456cc50f5044fa6)`(const KeyType & key,const ValueType & value)` {#classhighlo_1_1_h_l_hashmap_a3a94f422ddea38679456cc50f5044fa6_1a3a94f422ddea38679456cc50f5044fa6}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Remove`](#classhighlo_1_1_h_l_hashmap_a5a447e5409e814fc687a5adda537ba2d_1a5a447e5409e814fc687a5adda537ba2d)`(const KeyType & key,const ValueType & value)` {#classhighlo_1_1_h_l_hashmap_a5a447e5409e814fc687a5adda537ba2d_1a5a447e5409e814fc687a5adda537ba2d}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Remove`](#classhighlo_1_1_h_l_hashmap_ab034102f239d96fd4b0b4350ef56fcb1_1ab034102f239d96fd4b0b4350ef56fcb1)`(const KeyType & key)` {#classhighlo_1_1_h_l_hashmap_ab034102f239d96fd4b0b4350ef56fcb1_1ab034102f239d96fd4b0b4350ef56fcb1}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RemoveAll`](#classhighlo_1_1_h_l_hashmap_a1137dd057d6d10f354b10a4406ec8809_1a1137dd057d6d10f354b10a4406ec8809)`()` {#classhighlo_1_1_h_l_hashmap_a1137dd057d6d10f354b10a4406ec8809_1a1137dd057d6d10f354b10a4406ec8809}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`RemoveFirst`](#classhighlo_1_1_h_l_hashmap_a5159ffdca99eb4d5c497f3cd8f22d7ad_1a5159ffdca99eb4d5c497f3cd8f22d7ad)`()` {#classhighlo_1_1_h_l_hashmap_a5159ffdca99eb4d5c497f3cd8f22d7ad_1a5159ffdca99eb4d5c497f3cd8f22d7ad}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`RemoveLast`](#classhighlo_1_1_h_l_hashmap_a306378f173df44047351c93f7977fe36_1a306378f173df44047351c93f7977fe36)`()` {#classhighlo_1_1_h_l_hashmap_a306378f173df44047351c93f7977fe36_1a306378f173df44047351c93f7977fe36}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`Find`](#classhighlo_1_1_h_l_hashmap_a17c12fb761b00b3e5e1db9f8b34cba94_1a17c12fb761b00b3e5e1db9f8b34cba94)`(const KeyType & key)` {#classhighlo_1_1_h_l_hashmap_a17c12fb761b00b3e5e1db9f8b34cba94_1a17c12fb761b00b3e5e1db9f8b34cba94}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`GetFirst`](#classhighlo_1_1_h_l_hashmap_afca84bb91e686b88aa7154e8875e5738_1afca84bb91e686b88aa7154e8875e5738)`()` {#classhighlo_1_1_h_l_hashmap_afca84bb91e686b88aa7154e8875e5738_1afca84bb91e686b88aa7154e8875e5738}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`GetLast`](#classhighlo_1_1_h_l_hashmap_a79ed806905a2c034dbdffb9703e86f3e_1a79ed806905a2c034dbdffb9703e86f3e)`()` {#classhighlo_1_1_h_l_hashmap_a79ed806905a2c034dbdffb9703e86f3e_1a79ed806905a2c034dbdffb9703e86f3e}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`GetAt`](#classhighlo_1_1_h_l_hashmap_a1acec6b707959da0c206a7eb2431f70c_1a1acec6b707959da0c206a7eb2431f70c)`(`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` i)` {#classhighlo_1_1_h_l_hashmap_a1acec6b707959da0c206a7eb2431f70c_1a1acec6b707959da0c206a7eb2431f70c}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` KeyType & `[`GetKey`](#classhighlo_1_1_h_l_hashmap_aa20f6f943e9c9338b7fa5ec010f1df7a_1aa20f6f943e9c9338b7fa5ec010f1df7a)`(`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` i)` {#classhighlo_1_1_h_l_hashmap_aa20f6f943e9c9338b7fa5ec010f1df7a_1aa20f6f943e9c9338b7fa5ec010f1df7a}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsEmpty`](#classhighlo_1_1_h_l_hashmap_a7b0c285c21d5178a6911a8bb765fbacb_1a7b0c285c21d5178a6911a8bb765fbacb)`()` {#classhighlo_1_1_h_l_hashmap_a7b0c285c21d5178a6911a8bb765fbacb_1a7b0c285c21d5178a6911a8bb765fbacb}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Size`](#classhighlo_1_1_h_l_hashmap_a61056cfd0421abb2d4ccc2250b3c9560_1a61056cfd0421abb2d4ccc2250b3c9560)`()` {#classhighlo_1_1_h_l_hashmap_a61056cfd0421abb2d4ccc2250b3c9560_1a61056cfd0421abb2d4ccc2250b3c9560}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Print`](#classhighlo_1_1_h_l_hashmap_ae4839d8f1cc19a453c0e6da138afe35b_1ae4839d8f1cc19a453c0e6da138afe35b)`()` {#classhighlo_1_1_h_l_hashmap_ae4839d8f1cc19a453c0e6da138afe35b_1ae4839d8f1cc19a453c0e6da138afe35b}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`operator[]`](#classhighlo_1_1_h_l_hashmap_abc7e632ba351dba4403774fe5314db82_1abc7e632ba351dba4403774fe5314db82)`(const KeyType & key)` {#classhighlo_1_1_h_l_hashmap_abc7e632ba351dba4403774fe5314db82_1abc7e632ba351dba4403774fe5314db82}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const ValueType & `[`operator[]`](#classhighlo_1_1_h_l_hashmap_a10a3f3652d0a94cc54fb8b45e8a36090_1a10a3f3652d0a94cc54fb8b45e8a36090)`(const KeyType & key) const` {#classhighlo_1_1_h_l_hashmap_a10a3f3652d0a94cc54fb8b45e8a36090_1a10a3f3652d0a94cc54fb8b45e8a36090}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` ValueType & `[`operator[]`](#classhighlo_1_1_h_l_hashmap_aedf4455a2f8560e808897a7b30293365_1aedf4455a2f8560e808897a7b30293365)`(size_t i)` {#classhighlo_1_1_h_l_hashmap_aedf4455a2f8560e808897a7b30293365_1aedf4455a2f8560e808897a7b30293365}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const ValueType & `[`operator[]`](#classhighlo_1_1_h_l_hashmap_a391dbd1ea7f1f7b7be985aeaa2679009_1a391dbd1ea7f1f7b7be985aeaa2679009)`(size_t i) const` {#classhighlo_1_1_h_l_hashmap_a391dbd1ea7f1f7b7be985aeaa2679009_1a391dbd1ea7f1f7b7be985aeaa2679009}

#### `private std::vector< std::pair< KeyType, ValueType > > `[`m_Elements`](#classhighlo_1_1_h_l_hashmap_1a5473c211db1710496c02f0690705ee51) {#classhighlo_1_1_h_l_hashmap_1a5473c211db1710496c02f0690705ee51}

