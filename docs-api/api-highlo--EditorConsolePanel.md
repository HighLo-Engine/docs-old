## class `highlo::EditorConsolePanel` {#classhighlo_1_1_editor_console_panel}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`EditorConsolePanel`](#classhighlo_1_1_editor_console_panel_a88662259ca0722d5cf6aa170be2de911_1a88662259ca0722d5cf6aa170be2de911)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~EditorConsolePanel`](#classhighlo_1_1_editor_console_panel_aab2312c5df5b7b49c3c2a23cc55021bf_1aab2312c5df5b7b49c3c2a23cc55021bf)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnUIRender`](#classhighlo_1_1_editor_console_panel_a9608537f679d3d0fb6b55cb7b1598e48_1a9608537f679d3d0fb6b55cb7b1598e48)`(bool * show)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnScenePlay`](#classhighlo_1_1_editor_console_panel_a6ff1564b446bdbf848e32702fcada580_1a6ff1564b446bdbf848e32702fcada580)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ClearConsole`](#classhighlo_1_1_editor_console_panel_a6829cd974c1dce80bfe2b816f4b2ca51_1a6829cd974c1dce80bfe2b816f4b2ca51)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsConsoleCleared`](#classhighlo_1_1_editor_console_panel_ac49e3dda6734fc88181b5eaa81e3f45b_1ac49e3dda6734fc88181b5eaa81e3f45b)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetMessageFilter`](#classhighlo_1_1_editor_console_panel_ac4851eaf8f354e72a4feb6cb15ccb58b_1ac4851eaf8f354e72a4feb6cb15ccb58b)`(`[`ConsoleMessage::LogLevel`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message_acee23e5ae2b7b5c4a987557d04a84dd6_1acee23e5ae2b7b5c4a987557d04a84dd6)` level,bool enabled)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasMessageFilter`](#classhighlo_1_1_editor_console_panel_aad9c7a258603bbe68890e3b27a0e5bf1_1aad9c7a258603bbe68890e3b27a0e5bf1)`(`[`ConsoleMessage::LogLevel`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message_acee23e5ae2b7b5c4a987557d04a84dd6_1acee23e5ae2b7b5c4a987557d04a84dd6)` level) const` | 
`private bool `[`m_ShouldClearOnPlay`](#classhighlo_1_1_editor_console_panel_1a4ac922d776c8ef2670f56ae769958f95) | 
`private bool `[`m_CollapseMessages`](#classhighlo_1_1_editor_console_panel_1ad8f694becc1d67a56b27dcc9f67393c8) | 
`private bool `[`m_NewMessageAdded`](#classhighlo_1_1_editor_console_panel_1ac19f2dd068558e0dfa13aad03d3b0cfa) | 
`private std::array< `[`ConsoleMessage`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message)`, s_MessageBufferCapacity > `[`m_MessageBuffer`](#classhighlo_1_1_editor_console_panel_1a5db7deb70a3f4bdede691ee61613c542) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_MessageBufferBegin`](#classhighlo_1_1_editor_console_panel_1a666a43db5a8a0e7f5ac3027dee9d7dae) | 
`private `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`m_MessageFilters`](#classhighlo_1_1_editor_console_panel_1a101160203117a7d1107ab4bc42929b90) | 
`private `[`ConsoleMessage`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message)` * `[`m_SelectedMessage`](#classhighlo_1_1_editor_console_panel_1a419e04d8bcf4d783e65349a948e9d5f7) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_ErrorIcon`](#classhighlo_1_1_editor_console_panel_1a14ab7a000a3a1d58437f9c4bc56ddc9c) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_WarningIcon`](#classhighlo_1_1_editor_console_panel_1aeae7cc3479d6524a98dcf84eeac99553) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_InfoIcon`](#classhighlo_1_1_editor_console_panel_1a1cfcdb93c1b70f71f7b03b58a84b06c8) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_TraceIcon`](#classhighlo_1_1_editor_console_panel_1acafbcd75c59d395ecbd57799e81b6015) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RenderMenu`](#classhighlo_1_1_editor_console_panel_1a82db638f30eb4a8d127400884efd0070)`()` | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RenderConsole`](#classhighlo_1_1_editor_console_panel_1a03be764dc5e87c7c547cdee84ffd5de8)`()` | 
`private static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`PushMessage`](#classhighlo_1_1_editor_console_panel_1a65a7ce6e15f3d5ac238cf53e690318a5)`(const `[`ConsoleMessage`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message)` & message)` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`EditorConsolePanel`](#classhighlo_1_1_editor_console_panel_a88662259ca0722d5cf6aa170be2de911_1a88662259ca0722d5cf6aa170be2de911)`()` {#classhighlo_1_1_editor_console_panel_a88662259ca0722d5cf6aa170be2de911_1a88662259ca0722d5cf6aa170be2de911}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~EditorConsolePanel`](#classhighlo_1_1_editor_console_panel_aab2312c5df5b7b49c3c2a23cc55021bf_1aab2312c5df5b7b49c3c2a23cc55021bf)`()` {#classhighlo_1_1_editor_console_panel_aab2312c5df5b7b49c3c2a23cc55021bf_1aab2312c5df5b7b49c3c2a23cc55021bf}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnUIRender`](#classhighlo_1_1_editor_console_panel_a9608537f679d3d0fb6b55cb7b1598e48_1a9608537f679d3d0fb6b55cb7b1598e48)`(bool * show)` {#classhighlo_1_1_editor_console_panel_a9608537f679d3d0fb6b55cb7b1598e48_1a9608537f679d3d0fb6b55cb7b1598e48}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnScenePlay`](#classhighlo_1_1_editor_console_panel_a6ff1564b446bdbf848e32702fcada580_1a6ff1564b446bdbf848e32702fcada580)`()` {#classhighlo_1_1_editor_console_panel_a6ff1564b446bdbf848e32702fcada580_1a6ff1564b446bdbf848e32702fcada580}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ClearConsole`](#classhighlo_1_1_editor_console_panel_a6829cd974c1dce80bfe2b816f4b2ca51_1a6829cd974c1dce80bfe2b816f4b2ca51)`()` {#classhighlo_1_1_editor_console_panel_a6829cd974c1dce80bfe2b816f4b2ca51_1a6829cd974c1dce80bfe2b816f4b2ca51}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsConsoleCleared`](#classhighlo_1_1_editor_console_panel_ac49e3dda6734fc88181b5eaa81e3f45b_1ac49e3dda6734fc88181b5eaa81e3f45b)`() const` {#classhighlo_1_1_editor_console_panel_ac49e3dda6734fc88181b5eaa81e3f45b_1ac49e3dda6734fc88181b5eaa81e3f45b}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetMessageFilter`](#classhighlo_1_1_editor_console_panel_ac4851eaf8f354e72a4feb6cb15ccb58b_1ac4851eaf8f354e72a4feb6cb15ccb58b)`(`[`ConsoleMessage::LogLevel`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message_acee23e5ae2b7b5c4a987557d04a84dd6_1acee23e5ae2b7b5c4a987557d04a84dd6)` level,bool enabled)` {#classhighlo_1_1_editor_console_panel_ac4851eaf8f354e72a4feb6cb15ccb58b_1ac4851eaf8f354e72a4feb6cb15ccb58b}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`HasMessageFilter`](#classhighlo_1_1_editor_console_panel_aad9c7a258603bbe68890e3b27a0e5bf1_1aad9c7a258603bbe68890e3b27a0e5bf1)`(`[`ConsoleMessage::LogLevel`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message_acee23e5ae2b7b5c4a987557d04a84dd6_1acee23e5ae2b7b5c4a987557d04a84dd6)` level) const` {#classhighlo_1_1_editor_console_panel_aad9c7a258603bbe68890e3b27a0e5bf1_1aad9c7a258603bbe68890e3b27a0e5bf1}

#### `private bool `[`m_ShouldClearOnPlay`](#classhighlo_1_1_editor_console_panel_1a4ac922d776c8ef2670f56ae769958f95) {#classhighlo_1_1_editor_console_panel_1a4ac922d776c8ef2670f56ae769958f95}

#### `private bool `[`m_CollapseMessages`](#classhighlo_1_1_editor_console_panel_1ad8f694becc1d67a56b27dcc9f67393c8) {#classhighlo_1_1_editor_console_panel_1ad8f694becc1d67a56b27dcc9f67393c8}

#### `private bool `[`m_NewMessageAdded`](#classhighlo_1_1_editor_console_panel_1ac19f2dd068558e0dfa13aad03d3b0cfa) {#classhighlo_1_1_editor_console_panel_1ac19f2dd068558e0dfa13aad03d3b0cfa}

#### `private std::array< `[`ConsoleMessage`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message)`, s_MessageBufferCapacity > `[`m_MessageBuffer`](#classhighlo_1_1_editor_console_panel_1a5db7deb70a3f4bdede691ee61613c542) {#classhighlo_1_1_editor_console_panel_1a5db7deb70a3f4bdede691ee61613c542}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_MessageBufferBegin`](#classhighlo_1_1_editor_console_panel_1a666a43db5a8a0e7f5ac3027dee9d7dae) {#classhighlo_1_1_editor_console_panel_1a666a43db5a8a0e7f5ac3027dee9d7dae}

#### `private `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`m_MessageFilters`](#classhighlo_1_1_editor_console_panel_1a101160203117a7d1107ab4bc42929b90) {#classhighlo_1_1_editor_console_panel_1a101160203117a7d1107ab4bc42929b90}

#### `private `[`ConsoleMessage`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message)` * `[`m_SelectedMessage`](#classhighlo_1_1_editor_console_panel_1a419e04d8bcf4d783e65349a948e9d5f7) {#classhighlo_1_1_editor_console_panel_1a419e04d8bcf4d783e65349a948e9d5f7}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_ErrorIcon`](#classhighlo_1_1_editor_console_panel_1a14ab7a000a3a1d58437f9c4bc56ddc9c) {#classhighlo_1_1_editor_console_panel_1a14ab7a000a3a1d58437f9c4bc56ddc9c}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_WarningIcon`](#classhighlo_1_1_editor_console_panel_1aeae7cc3479d6524a98dcf84eeac99553) {#classhighlo_1_1_editor_console_panel_1aeae7cc3479d6524a98dcf84eeac99553}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_InfoIcon`](#classhighlo_1_1_editor_console_panel_1a1cfcdb93c1b70f71f7b03b58a84b06c8) {#classhighlo_1_1_editor_console_panel_1a1cfcdb93c1b70f71f7b03b58a84b06c8}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`m_TraceIcon`](#classhighlo_1_1_editor_console_panel_1acafbcd75c59d395ecbd57799e81b6015) {#classhighlo_1_1_editor_console_panel_1acafbcd75c59d395ecbd57799e81b6015}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RenderMenu`](#classhighlo_1_1_editor_console_panel_1a82db638f30eb4a8d127400884efd0070)`()` {#classhighlo_1_1_editor_console_panel_1a82db638f30eb4a8d127400884efd0070}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RenderConsole`](#classhighlo_1_1_editor_console_panel_1a03be764dc5e87c7c547cdee84ffd5de8)`()` {#classhighlo_1_1_editor_console_panel_1a03be764dc5e87c7c547cdee84ffd5de8}

#### `private static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`PushMessage`](#classhighlo_1_1_editor_console_panel_1a65a7ce6e15f3d5ac238cf53e690318a5)`(const `[`ConsoleMessage`](docs-api/api-highlo--ConsoleMessage.md#classhighlo_1_1_console_message)` & message)` {#classhighlo_1_1_editor_console_panel_1a65a7ce6e15f3d5ac238cf53e690318a5}

