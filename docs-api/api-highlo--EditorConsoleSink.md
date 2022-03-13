## class `highlo::EditorConsoleSink` {#classhighlo_1_1_editor_console_sink}

```
class highlo::EditorConsoleSink
  : public spdlog::sinks::base_sink< std::mutex >
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` explicit `[`EditorConsoleSink`](#classhighlo_1_1_editor_console_sink_a0547a23461a2f27d250c70b707b3f9a3_1a0547a23461a2f27d250c70b707b3f9a3)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` bufferCapacity)` | 
`public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~EditorConsoleSink`](#classhighlo_1_1_editor_console_sink_a31f6f46d6e3c8e3e4700f7e8fb00355e_1a31f6f46d6e3c8e3e4700f7e8fb00355e)`() = default` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`EditorConsoleSink`](#classhighlo_1_1_editor_console_sink_af0195b3af468269053992606f9b92db4_1af0195b3af468269053992606f9b92db4)`(const `[`EditorConsoleSink`](#classhighlo_1_1_editor_console_sink)` &) = default` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[EditorConsoleSink`](#classhighlo_1_1_editor_console_sink)` & `[`operator=`](#classhighlo_1_1_editor_console_sink_a2744f45a20081243e604f5cefb9d886f_1a2744f45a20081243e604f5cefb9d886f)`(const `[`EditorConsoleSink`](#classhighlo_1_1_editor_console_sink)` &) = default` | 
`protected `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`sink_it_`](#classhighlo_1_1_editor_console_sink_aa8d5367746a197f9a3b55faf45f55dde_1aa8d5367746a197f9a3b55faf45f55dde)`(const spdlog::details::log_msg & msg)` | 
`protected `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`flush_`](#classhighlo_1_1_editor_console_sink_a3e95a4100f7d64c137635be6ac6ce1e5_1a3e95a4100f7d64c137635be6ac6ce1e5)`()` | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_MessageBufferCapacity`](#classhighlo_1_1_editor_console_sink_1a27f169e67717753d3e6d9610bfca5e87) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_MessageCount`](#classhighlo_1_1_editor_console_sink_1ab054c968f768ec84d2b44e745d41cec6) | 
`private std::vector< `[`ConsoleMessage`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message)` > `[`m_MessageBuffer`](#classhighlo_1_1_editor_console_sink_1a52dd31e5189096e3f73b79f0956e8064) | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` explicit `[`EditorConsoleSink`](#classhighlo_1_1_editor_console_sink_a0547a23461a2f27d250c70b707b3f9a3_1a0547a23461a2f27d250c70b707b3f9a3)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` bufferCapacity)` {#classhighlo_1_1_editor_console_sink_a0547a23461a2f27d250c70b707b3f9a3_1a0547a23461a2f27d250c70b707b3f9a3}

#### `public virtual `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~EditorConsoleSink`](#classhighlo_1_1_editor_console_sink_a31f6f46d6e3c8e3e4700f7e8fb00355e_1a31f6f46d6e3c8e3e4700f7e8fb00355e)`() = default` {#classhighlo_1_1_editor_console_sink_a31f6f46d6e3c8e3e4700f7e8fb00355e_1a31f6f46d6e3c8e3e4700f7e8fb00355e}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`EditorConsoleSink`](#classhighlo_1_1_editor_console_sink_af0195b3af468269053992606f9b92db4_1af0195b3af468269053992606f9b92db4)`(const `[`EditorConsoleSink`](#classhighlo_1_1_editor_console_sink)` &) = default` {#classhighlo_1_1_editor_console_sink_af0195b3af468269053992606f9b92db4_1af0195b3af468269053992606f9b92db4}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[EditorConsoleSink`](#classhighlo_1_1_editor_console_sink)` & `[`operator=`](#classhighlo_1_1_editor_console_sink_a2744f45a20081243e604f5cefb9d886f_1a2744f45a20081243e604f5cefb9d886f)`(const `[`EditorConsoleSink`](#classhighlo_1_1_editor_console_sink)` &) = default` {#classhighlo_1_1_editor_console_sink_a2744f45a20081243e604f5cefb9d886f_1a2744f45a20081243e604f5cefb9d886f}

#### `protected `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`sink_it_`](#classhighlo_1_1_editor_console_sink_aa8d5367746a197f9a3b55faf45f55dde_1aa8d5367746a197f9a3b55faf45f55dde)`(const spdlog::details::log_msg & msg)` {#classhighlo_1_1_editor_console_sink_aa8d5367746a197f9a3b55faf45f55dde_1aa8d5367746a197f9a3b55faf45f55dde}

#### `protected `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`flush_`](#classhighlo_1_1_editor_console_sink_a3e95a4100f7d64c137635be6ac6ce1e5_1a3e95a4100f7d64c137635be6ac6ce1e5)`()` {#classhighlo_1_1_editor_console_sink_a3e95a4100f7d64c137635be6ac6ce1e5_1a3e95a4100f7d64c137635be6ac6ce1e5}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_MessageBufferCapacity`](#classhighlo_1_1_editor_console_sink_1a27f169e67717753d3e6d9610bfca5e87) {#classhighlo_1_1_editor_console_sink_1a27f169e67717753d3e6d9610bfca5e87}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_MessageCount`](#classhighlo_1_1_editor_console_sink_1ab054c968f768ec84d2b44e745d41cec6) {#classhighlo_1_1_editor_console_sink_1ab054c968f768ec84d2b44e745d41cec6}

#### `private std::vector< `[`ConsoleMessage`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message)` > `[`m_MessageBuffer`](#classhighlo_1_1_editor_console_sink_1a52dd31e5189096e3f73b79f0956e8064) {#classhighlo_1_1_editor_console_sink_1a52dd31e5189096e3f73b79f0956e8064}

