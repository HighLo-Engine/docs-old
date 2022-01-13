## class `highlo::ThreadEndingEvent` {#classhighlo_1_1_thread_ending_event}

```
class highlo::ThreadEndingEvent
  : public highlo::Event
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ThreadEndingEvent`](#classhighlo_1_1_thread_ending_event_a66b411455bd726806624d6be4b67baa6_1a66b411455bd726806624d6be4b67baa6)`(`[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * thread,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` exitCode)` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`ToString`](#classhighlo_1_1_thread_ending_event_afd1f3a351cb1b30347add2dad438997f_1afd1f3a351cb1b30347add2dad438997f)`() const` | Converts the Name of the [Event](docs-api/api-highlo--Event.md#classhighlo_1_1_event) to a String.
`private `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`m_ExitCode`](#classhighlo_1_1_thread_ending_event_1a625f868bbf86efe5fd33943e96f962e6) | 
`private `[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * `[`m_Thread`](#classhighlo_1_1_thread_ending_event_1a26ff9918c04fce60b22820bbd47e29a3) | 

### Members

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ThreadEndingEvent`](#classhighlo_1_1_thread_ending_event_a66b411455bd726806624d6be4b67baa6_1a66b411455bd726806624d6be4b67baa6)`(`[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * thread,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` exitCode)` {#classhighlo_1_1_thread_ending_event_a66b411455bd726806624d6be4b67baa6_1a66b411455bd726806624d6be4b67baa6}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`ToString`](#classhighlo_1_1_thread_ending_event_afd1f3a351cb1b30347add2dad438997f_1afd1f3a351cb1b30347add2dad438997f)`() const` {#classhighlo_1_1_thread_ending_event_afd1f3a351cb1b30347add2dad438997f_1afd1f3a351cb1b30347add2dad438997f}

Converts the Name of the [Event](docs-api/api-highlo--Event.md#classhighlo_1_1_event) to a String.

#### Returns
New FakeString with the Name of the correct EventName.

#### `private `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`m_ExitCode`](#classhighlo_1_1_thread_ending_event_1a625f868bbf86efe5fd33943e96f962e6) {#classhighlo_1_1_thread_ending_event_1a625f868bbf86efe5fd33943e96f962e6}

#### `private `[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * `[`m_Thread`](#classhighlo_1_1_thread_ending_event_1a26ff9918c04fce60b22820bbd47e29a3) {#classhighlo_1_1_thread_ending_event_1a26ff9918c04fce60b22820bbd47e29a3}

