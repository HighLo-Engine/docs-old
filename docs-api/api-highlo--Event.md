## class `highlo::Event` {#classhighlo_1_1_event}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public bool `[`m_Handled`](#classhighlo_1_1_event_acbdec60b6b9e693074e25155692849c2_1acbdec60b6b9e693074e25155692849c2) | Indicates whether the [Event](#classhighlo_1_1_event) has been handled or not.
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[EventType`](docs-api/api-highlo.md#namespacehighlo_a0781ce3e8c4fe0839071ce84ca97eef7_1a0781ce3e8c4fe0839071ce84ca97eef7)` `[`GetEventType`](#classhighlo_1_1_event_a81a881d069c931686dfe7c04bfaf3695_1a81a881d069c931686dfe7c04bfaf3695)`() const` | Is going to be implemented by the actual Events.
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const char * `[`GetName`](#classhighlo_1_1_event_a4dfbc8f127bd2d6eac644c82d42b741d_1a4dfbc8f127bd2d6eac644c82d42b741d)`() const` | * Is going to be implemented by the actual Events.
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` int `[`GetCategoryFlags`](#classhighlo_1_1_event_ae30f0a43f0da5d2593bdc7a2459ab183_1ae30f0a43f0da5d2593bdc7a2459ab183)`() const` | Is going to be implemented by the actual Events.
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`ToString`](#classhighlo_1_1_event_a465516dc002f081027557da77becaa16_1a465516dc002f081027557da77becaa16)`() const` | Converts the Name of the [Event](#classhighlo_1_1_event) to a String.
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsInCategory`](#classhighlo_1_1_event_a41259874f6ccb616bbd0fff4bada8367_1a41259874f6ccb616bbd0fff4bada8367)`(`[`EventCategory`](docs-api/api-highlo.md#namespacehighlo_a6bf61b32c3e02b1dc99916c1e71978b6_1a6bf61b32c3e02b1dc99916c1e71978b6)` c)` | Tells if the provided EventCategory is set in the implementing EventSubClass.

### Members

#### `public bool `[`m_Handled`](#classhighlo_1_1_event_acbdec60b6b9e693074e25155692849c2_1acbdec60b6b9e693074e25155692849c2) {#classhighlo_1_1_event_acbdec60b6b9e693074e25155692849c2_1acbdec60b6b9e693074e25155692849c2}

Indicates whether the [Event](#classhighlo_1_1_event) has been handled or not.

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[EventType`](docs-api/api-highlo.md#namespacehighlo_a0781ce3e8c4fe0839071ce84ca97eef7_1a0781ce3e8c4fe0839071ce84ca97eef7)` `[`GetEventType`](#classhighlo_1_1_event_a81a881d069c931686dfe7c04bfaf3695_1a81a881d069c931686dfe7c04bfaf3695)`() const` {#classhighlo_1_1_event_a81a881d069c931686dfe7c04bfaf3695_1a81a881d069c931686dfe7c04bfaf3695}

Is going to be implemented by the actual Events.

#### Returns
Returns the correct EventType after it gets implemented by the subclass.

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const char * `[`GetName`](#classhighlo_1_1_event_a4dfbc8f127bd2d6eac644c82d42b741d_1a4dfbc8f127bd2d6eac644c82d42b741d)`() const` {#classhighlo_1_1_event_a4dfbc8f127bd2d6eac644c82d42b741d_1a4dfbc8f127bd2d6eac644c82d42b741d}

* Is going to be implemented by the actual Events.

#### Returns
Returns the Name of the [Event](#classhighlo_1_1_event) after it gets implemented by the subclass.

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` int `[`GetCategoryFlags`](#classhighlo_1_1_event_ae30f0a43f0da5d2593bdc7a2459ab183_1ae30f0a43f0da5d2593bdc7a2459ab183)`() const` {#classhighlo_1_1_event_ae30f0a43f0da5d2593bdc7a2459ab183_1ae30f0a43f0da5d2593bdc7a2459ab183}

Is going to be implemented by the actual Events.

#### Returns
Returns the CategoryFlags of the [Event](#classhighlo_1_1_event) after it gets implemented by the subclass.

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`ToString`](#classhighlo_1_1_event_a465516dc002f081027557da77becaa16_1a465516dc002f081027557da77becaa16)`() const` {#classhighlo_1_1_event_a465516dc002f081027557da77becaa16_1a465516dc002f081027557da77becaa16}

Converts the Name of the [Event](#classhighlo_1_1_event) to a String.

#### Returns
New FakeString with the Name of the correct EventName.

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsInCategory`](#classhighlo_1_1_event_a41259874f6ccb616bbd0fff4bada8367_1a41259874f6ccb616bbd0fff4bada8367)`(`[`EventCategory`](docs-api/api-highlo.md#namespacehighlo_a6bf61b32c3e02b1dc99916c1e71978b6_1a6bf61b32c3e02b1dc99916c1e71978b6)` c)` {#classhighlo_1_1_event_a41259874f6ccb616bbd0fff4bada8367_1a41259874f6ccb616bbd0fff4bada8367}

Tells if the provided EventCategory is set in the implementing EventSubClass.

#### Parameters
* `c` the Category which should be checked whether it is part of the EventSubClass. 

#### Returns
Returns true if the Category is a part of the EventCategories.

