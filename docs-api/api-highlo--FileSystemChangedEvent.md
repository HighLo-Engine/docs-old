## class `highlo::FileSystemChangedEvent` {#classhighlo_1_1_file_system_changed_event}

```
class highlo::FileSystemChangedEvent
  : public highlo::Event
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`FileSystemAction`](docs-api/api-highlo.md#namespacehighlo_aba1a2ba28fa7ecc59f1f736e4794641b_1aba1a2ba28fa7ecc59f1f736e4794641b)` `[`Action`](#classhighlo_1_1_file_system_changed_event_ab3b0ea0df45212cf737e060aed3f980e_1ab3b0ea0df45212cf737e060aed3f980e) | 
`public `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`FilePath`](#classhighlo_1_1_file_system_changed_event_aec65dc1f5f5a209d59098e4a0d5bad4e_1aec65dc1f5f5a209d59098e4a0d5bad4e) | 
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`OldName`](#classhighlo_1_1_file_system_changed_event_a49d40b1214aa12a716b82f328b73e6ab_1a49d40b1214aa12a716b82f328b73e6ab) | 
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`NewName`](#classhighlo_1_1_file_system_changed_event_a2745dc0f1ca49fedda40b68bfa9736b8_1a2745dc0f1ca49fedda40b68bfa9736b8) | 
`public bool `[`IsDirectory`](#classhighlo_1_1_file_system_changed_event_adbd65b1dc544da97036f6b2a16914c72_1adbd65b1dc544da97036f6b2a16914c72) | 
`public bool `[`Tracking`](#classhighlo_1_1_file_system_changed_event_a28c68377fea569732d5823d69d23aaf9_1a28c68377fea569732d5823d69d23aaf9) | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FileSystemChangedEvent`](#classhighlo_1_1_file_system_changed_event_a1fb2678ab7f00775f79c83752882422d_1a1fb2678ab7f00775f79c83752882422d)`() = default` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FileSystemChangedEvent`](#classhighlo_1_1_file_system_changed_event_a65b862ce5281afe88e01f1cce140c97c_1a65b862ce5281afe88e01f1cce140c97c)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & oldName,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & newName,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & path,`[`FileSystemAction`](docs-api/api-highlo.md#namespacehighlo_aba1a2ba28fa7ecc59f1f736e4794641b_1aba1a2ba28fa7ecc59f1f736e4794641b)` action,bool isDirectory)` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`ToString`](#classhighlo_1_1_file_system_changed_event_af5a7adfbac8cfae11f4c1848af9fd743_1af5a7adfbac8cfae11f4c1848af9fd743)`() const` | Converts the Name of the [Event](docs-api/api-highlo--Event.md#classhighlo_1_1_event) to a String.

### Members

#### `public `[`FileSystemAction`](docs-api/api-highlo.md#namespacehighlo_aba1a2ba28fa7ecc59f1f736e4794641b_1aba1a2ba28fa7ecc59f1f736e4794641b)` `[`Action`](#classhighlo_1_1_file_system_changed_event_ab3b0ea0df45212cf737e060aed3f980e_1ab3b0ea0df45212cf737e060aed3f980e) {#classhighlo_1_1_file_system_changed_event_ab3b0ea0df45212cf737e060aed3f980e_1ab3b0ea0df45212cf737e060aed3f980e}

#### `public `[`FileSystemPath`](docs-api/api-highlo--FileSystemPath.md#classhighlo_1_1_file_system_path)` `[`FilePath`](#classhighlo_1_1_file_system_changed_event_aec65dc1f5f5a209d59098e4a0d5bad4e_1aec65dc1f5f5a209d59098e4a0d5bad4e) {#classhighlo_1_1_file_system_changed_event_aec65dc1f5f5a209d59098e4a0d5bad4e_1aec65dc1f5f5a209d59098e4a0d5bad4e}

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`OldName`](#classhighlo_1_1_file_system_changed_event_a49d40b1214aa12a716b82f328b73e6ab_1a49d40b1214aa12a716b82f328b73e6ab) {#classhighlo_1_1_file_system_changed_event_a49d40b1214aa12a716b82f328b73e6ab_1a49d40b1214aa12a716b82f328b73e6ab}

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`NewName`](#classhighlo_1_1_file_system_changed_event_a2745dc0f1ca49fedda40b68bfa9736b8_1a2745dc0f1ca49fedda40b68bfa9736b8) {#classhighlo_1_1_file_system_changed_event_a2745dc0f1ca49fedda40b68bfa9736b8_1a2745dc0f1ca49fedda40b68bfa9736b8}

#### `public bool `[`IsDirectory`](#classhighlo_1_1_file_system_changed_event_adbd65b1dc544da97036f6b2a16914c72_1adbd65b1dc544da97036f6b2a16914c72) {#classhighlo_1_1_file_system_changed_event_adbd65b1dc544da97036f6b2a16914c72_1adbd65b1dc544da97036f6b2a16914c72}

#### `public bool `[`Tracking`](#classhighlo_1_1_file_system_changed_event_a28c68377fea569732d5823d69d23aaf9_1a28c68377fea569732d5823d69d23aaf9) {#classhighlo_1_1_file_system_changed_event_a28c68377fea569732d5823d69d23aaf9_1a28c68377fea569732d5823d69d23aaf9}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FileSystemChangedEvent`](#classhighlo_1_1_file_system_changed_event_a1fb2678ab7f00775f79c83752882422d_1a1fb2678ab7f00775f79c83752882422d)`() = default` {#classhighlo_1_1_file_system_changed_event_a1fb2678ab7f00775f79c83752882422d_1a1fb2678ab7f00775f79c83752882422d}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`FileSystemChangedEvent`](#classhighlo_1_1_file_system_changed_event_a65b862ce5281afe88e01f1cce140c97c_1a65b862ce5281afe88e01f1cce140c97c)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & oldName,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & newName,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & path,`[`FileSystemAction`](docs-api/api-highlo.md#namespacehighlo_aba1a2ba28fa7ecc59f1f736e4794641b_1aba1a2ba28fa7ecc59f1f736e4794641b)` action,bool isDirectory)` {#classhighlo_1_1_file_system_changed_event_a65b862ce5281afe88e01f1cce140c97c_1a65b862ce5281afe88e01f1cce140c97c}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`ToString`](#classhighlo_1_1_file_system_changed_event_af5a7adfbac8cfae11f4c1848af9fd743_1af5a7adfbac8cfae11f4c1848af9fd743)`() const` {#classhighlo_1_1_file_system_changed_event_af5a7adfbac8cfae11f4c1848af9fd743_1af5a7adfbac8cfae11f4c1848af9fd743}

Converts the Name of the [Event](docs-api/api-highlo--Event.md#classhighlo_1_1_event) to a String.

#### Returns
New FakeString with the Name of the correct EventName.

