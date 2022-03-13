## class `highlo::ThreadStartingEvent` {#classhighlo_1_1_thread_starting_event}

```
class highlo::ThreadStartingEvent
  : public highlo::Event
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ThreadStartingEvent`](#classhighlo_1_1_thread_starting_event_a1477983c6294211295192af11590f77a_1a1477983c6294211295192af11590f77a)`(`[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * thread)` | 
`public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`ToString`](#classhighlo_1_1_thread_starting_event_a2f1119a15c893f5d5f63f190e53599c0_1a2f1119a15c893f5d5f63f190e53599c0)`() const` | Converts the Name of the [Event](docs-api/api-highlo--Event.md#classhighlo_1_1_event) to a String.
`private `[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * `[`m_Thread`](#classhighlo_1_1_thread_starting_event_1ad9b048add0221b78f101dbbc7fb8095f) | 

### Members

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ThreadStartingEvent`](#classhighlo_1_1_thread_starting_event_a1477983c6294211295192af11590f77a_1a1477983c6294211295192af11590f77a)`(`[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * thread)` {#classhighlo_1_1_thread_starting_event_a1477983c6294211295192af11590f77a_1a1477983c6294211295192af11590f77a}

#### `public inline virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`ToString`](#classhighlo_1_1_thread_starting_event_a2f1119a15c893f5d5f63f190e53599c0_1a2f1119a15c893f5d5f63f190e53599c0)`() const` {#classhighlo_1_1_thread_starting_event_a2f1119a15c893f5d5f63f190e53599c0_1a2f1119a15c893f5d5f63f190e53599c0}

Converts the Name of the [Event](docs-api/api-highlo--Event.md#classhighlo_1_1_event) to a String.

#### Returns
New FakeString with the Name of the correct EventName.

#### `private `[`Thread`](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread)` * `[`m_Thread`](#classhighlo_1_1_thread_starting_event_1ad9b048add0221b78f101dbbc7fb8095f) {#classhighlo_1_1_thread_starting_event_1ad9b048add0221b78f101dbbc7fb8095f}

