## class `highlo::WindowsWindow` {#classhighlo_1_1_windows_window}

```
class highlo::WindowsWindow
  : public highlo::Window
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`WindowsWindow`](#classhighlo_1_1_windows_window_aa7e34750235a2f346cfba7d7c3ca73f6_1aa7e34750235a2f346cfba7d7c3ca73f6)`(const `[`WindowData`](docs-api/api-highlo--WindowData.md#structhighlo_1_1_window_data)` & properties)` | 
`public  `[`~WindowsWindow`](#classhighlo_1_1_windows_window_a6ebe669c2d472332bab58be251fd919c_1a6ebe669c2d472332bab58be251fd919c)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetEventCallback`](#classhighlo_1_1_windows_window_a6e4a9e8e42413c31b23496f34db7498a_1a6e4a9e8e42413c31b23496f34db7498a)`(const `[`EventCallbackFn`](docs-api/api-highlo.md#namespacehighlo_a08969138d276ba535b63cb7967ab944f_1a08969138d276ba535b63cb7967ab944f)` & callback)` | 
`public virtual const `[`EventCallbackFn`](docs-api/api-highlo.md#namespacehighlo_a08969138d276ba535b63cb7967ab944f_1a08969138d276ba535b63cb7967ab944f)` & `[`GetEventCallback`](#classhighlo_1_1_windows_window_a2fbaa34c66759f65089357d1a998dadb_1a2fbaa34c66759f65089357d1a998dadb)`() const` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_windows_window_a2371c28faf7162ba3da316626832cad9_1a2371c28faf7162ba3da316626832cad9)`()` | 
`public inline virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetWidth`](#classhighlo_1_1_windows_window_a81ccebb3719436d1ae0ae6deceeb1cb4_1a81ccebb3719436d1ae0ae6deceeb1cb4)`()` | 
`public inline virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetHeight`](#classhighlo_1_1_windows_window_a023a86944ea3cba5a8a0f9ee698170a8_1a023a86944ea3cba5a8a0f9ee698170a8)`()` | 
`public inline virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`GetNativeHandle`](#classhighlo_1_1_windows_window_a88e46b5d751359bfef1b57d0cf98dbbb_1a88e46b5d751359bfef1b57d0cf98dbbb)`()` | 
`public inline virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`GetNativeContext`](#classhighlo_1_1_windows_window_a43852f2068daa60c123985d0f4fc12cb_1a43852f2068daa60c123985d0f4fc12cb)`()` | 
`public inline virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`GetNativeCursor`](#classhighlo_1_1_windows_window_a24b5190d74df31beab56f5c8542ff982_1a24b5190d74df31beab56f5c8542ff982)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetWindowIcon`](#classhighlo_1_1_windows_window_a6f3dced4a0e79b3324066e761d4f7534_1a6f3dced4a0e79b3324066e761d4f7534)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & path,bool flip)` | 
`public virtual std::pair< `[`int32](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481), [int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` > `[`GetWindowDimensions`](#classhighlo_1_1_windows_window_aea7f16743023203fb596d4fa22d0281c_1aea7f16743023203fb596d4fa22d0281c)`()` | 
`public virtual std::pair< `[`int32](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481), [int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` > `[`GetWindowPosition`](#classhighlo_1_1_windows_window_ad4a7d29a39d70abb01b0cc5b45426993_1ad4a7d29a39d70abb01b0cc5b45426993)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CloseWindow`](#classhighlo_1_1_windows_window_a2cf846e265aab6f0f66ae97632510785_1a2cf846e265aab6f0f66ae97632510785)`()` | 
`public virtual `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`ShowMessageBox`](#classhighlo_1_1_windows_window_ad69e8f6c95c11a489b7e7b850f9c7783_1ad69e8f6c95c11a489b7e7b850f9c7783)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & title,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & msg,`[`WindowMessageButtonType`](docs-api/api-highlo.md#namespacehighlo_a633a075aa499eeec6f7b734f48300041_1a633a075aa499eeec6f7b734f48300041)` btnType,`[`WindowMessageIcon`](docs-api/api-highlo.md#namespacehighlo_ae5e6b69bb45c7a98c987e697924b7b9f_1ae5e6b69bb45c7a98c987e697924b7b9f)` icon)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetMenuBar`](#classhighlo_1_1_windows_window_acb99beaa1c36ca5fd388fc63bd769e4a_1acb99beaa1c36ca5fd388fc63bd769e4a)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MenuBar`](docs-api/api-highlo--MenuBar.md#classhighlo_1_1_menu_bar)` > & bar)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetVSync`](#classhighlo_1_1_windows_window_ae6e25f9856333e91e95f78f661cfbcf0_1ae6e25f9856333e91e95f78f661cfbcf0)`(bool bEnabled)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetVisible`](#classhighlo_1_1_windows_window_a063dc1324e97e4ccb91d4b5807f66d99_1a063dc1324e97e4ccb91d4b5807f66d99)`(bool bVisible)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetFocus`](#classhighlo_1_1_windows_window_a86775ee29b7ff5fe34dda9a72748c7c9_1a86775ee29b7ff5fe34dda9a72748c7c9)`(bool bEnabled)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetFullscreen`](#classhighlo_1_1_windows_window_a31159948157a51ddb5525e41a3ae0e6b_1a31159948157a51ddb5525e41a3ae0e6b)`(bool bEnabled)` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ShowCursor`](#classhighlo_1_1_windows_window_a23132210f4df8de48fd2b47efd4d6487_1a23132210f4df8de48fd2b47efd4d6487)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HideCursor`](#classhighlo_1_1_windows_window_af2886a61a411b5d26ba9d476279e9acf_1af2886a61a411b5d26ba9d476279e9acf)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Maximize`](#classhighlo_1_1_windows_window_a81a716994ba9859244a7ac022b8b8931_1a81a716994ba9859244a7ac022b8b8931)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CenterWindow`](#classhighlo_1_1_windows_window_adc8cedb1cf540df2fe7f0725383f597b_1adc8cedb1cf540df2fe7f0725383f597b)`()` | 
`public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetTitle`](#classhighlo_1_1_windows_window_a35f3a6639d4e4b1c925a5c70b269cddc_1a35f3a6639d4e4b1c925a5c70b269cddc)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & title)` | 
`public inline virtual bool `[`IsVisible`](#classhighlo_1_1_windows_window_a7c7d7d1d2b9e59021e23389f1e9d7494_1a7c7d7d1d2b9e59021e23389f1e9d7494)`()` | 
`public inline virtual bool `[`IsCursorHidden`](#classhighlo_1_1_windows_window_aff17fed4edca439c5997ab54b715fef1_1aff17fed4edca439c5997ab54b715fef1)`()` | 
`public inline virtual bool `[`IsMaximized`](#classhighlo_1_1_windows_window_afd2f9d988864333ef3ca2d786f6468f3_1afd2f9d988864333ef3ca2d786f6468f3)`()` | 
`public inline virtual bool `[`IsFullscreen`](#classhighlo_1_1_windows_window_a44e8bc135728ab5a9f876cb5ebd7756f_1a44e8bc135728ab5a9f876cb5ebd7756f)`()` | 
`public inline virtual bool `[`IsCentered`](#classhighlo_1_1_windows_window_a623796ac6b066e830cc7559a2e9b951f_1a623796ac6b066e830cc7559a2e9b951f)`()` | 
`public virtual bool `[`HasMenuBar`](#classhighlo_1_1_windows_window_ad79e6e0a6c07a66aa7d2211ce61c9c18_1ad79e6e0a6c07a66aa7d2211ce61c9c18)`()` | 
`public inline virtual const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetTitle`](#classhighlo_1_1_windows_window_a7ae09815dbd24df4b229e148218b7a4d_1a7ae09815dbd24df4b229e148218b7a4d)`()` | 
`public inline virtual const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MenuBar`](docs-api/api-highlo--MenuBar.md#classhighlo_1_1_menu_bar)` > & `[`GetMenuBar`](#classhighlo_1_1_windows_window_a87c160991bd9cc0b42b8bc722cc1d2ea_1a87c160991bd9cc0b42b8bc722cc1d2ea)`() const` | 
`public virtual bool `[`IsFocused`](#classhighlo_1_1_windows_window_a16dfa0427fa52464a11ca208ffd14f8e_1a16dfa0427fa52464a11ca208ffd14f8e)`()` | 
`public inline virtual const `[`WindowData`](docs-api/api-highlo--WindowData.md#structhighlo_1_1_window_data)` & `[`GetProperties`](#classhighlo_1_1_windows_window_afaa8aa0c164cbc73d570eb948a7cb52d_1afaa8aa0c164cbc73d570eb948a7cb52d)`() const` | 
`public inline virtual `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderingContext`](docs-api/api-highlo--RenderingContext.md#classhighlo_1_1_rendering_context)` > `[`GetContext`](#classhighlo_1_1_windows_window_aac2a70287fb485ebd71ab473429ce8ca_1aac2a70287fb485ebd71ab473429ce8ca)`()` | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnResize`](#classhighlo_1_1_windows_window_a6473e0232120be0dab564eccb5fa3570_1a6473e0232120be0dab564eccb5fa3570)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` | 
`private `[`WindowData`](docs-api/api-highlo--WindowData.md#structhighlo_1_1_window_data)` `[`m_Properties`](#classhighlo_1_1_windows_window_1a4723588fb220346a6bd059d434c4637a) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderingContext`](docs-api/api-highlo--RenderingContext.md#classhighlo_1_1_rendering_context)` > `[`m_Context`](#classhighlo_1_1_windows_window_1a8035b497477d22f2b0777dd1fdc7649a) | 
`private HWND `[`m_NativeHandle`](#classhighlo_1_1_windows_window_1a231ede5439ffb8651b8ae11ce878e94e) | 
`private HICON `[`m_WindowIcon`](#classhighlo_1_1_windows_window_1a53ac21ebf2d02e30ea96108ccca43553) | 
`private HCURSOR `[`m_Cursor`](#classhighlo_1_1_windows_window_1a9ee351500de8b9ef3f0b992556010d7c) | 
`private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MenuBar`](docs-api/api-highlo--MenuBar.md#classhighlo_1_1_menu_bar)` > `[`m_MenuBar`](#classhighlo_1_1_windows_window_1aafdac84bab92f9aaba6d8c204354d8c9) | 
`private bool `[`m_CursorLocked`](#classhighlo_1_1_windows_window_1a4fbce4eb4b433cc013efdf39296be51d) | 
`private `[`WindowCallbackData`](docs-api/api-highlo--WindowCallbackData.md#structhighlo_1_1_window_callback_data)` `[`m_CallbackData`](#classhighlo_1_1_windows_window_1ad2defe2792ca1e1942c8ddc38e344760) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_windows_window_1ab3cbe05490a9b2513d294a3a342323b3)`()` | 

### Members

#### `public  `[`WindowsWindow`](#classhighlo_1_1_windows_window_aa7e34750235a2f346cfba7d7c3ca73f6_1aa7e34750235a2f346cfba7d7c3ca73f6)`(const `[`WindowData`](docs-api/api-highlo--WindowData.md#structhighlo_1_1_window_data)` & properties)` {#classhighlo_1_1_windows_window_aa7e34750235a2f346cfba7d7c3ca73f6_1aa7e34750235a2f346cfba7d7c3ca73f6}

#### `public  `[`~WindowsWindow`](#classhighlo_1_1_windows_window_a6ebe669c2d472332bab58be251fd919c_1a6ebe669c2d472332bab58be251fd919c)`()` {#classhighlo_1_1_windows_window_a6ebe669c2d472332bab58be251fd919c_1a6ebe669c2d472332bab58be251fd919c}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetEventCallback`](#classhighlo_1_1_windows_window_a6e4a9e8e42413c31b23496f34db7498a_1a6e4a9e8e42413c31b23496f34db7498a)`(const `[`EventCallbackFn`](docs-api/api-highlo.md#namespacehighlo_a08969138d276ba535b63cb7967ab944f_1a08969138d276ba535b63cb7967ab944f)` & callback)` {#classhighlo_1_1_windows_window_a6e4a9e8e42413c31b23496f34db7498a_1a6e4a9e8e42413c31b23496f34db7498a}

#### `public virtual const `[`EventCallbackFn`](docs-api/api-highlo.md#namespacehighlo_a08969138d276ba535b63cb7967ab944f_1a08969138d276ba535b63cb7967ab944f)` & `[`GetEventCallback`](#classhighlo_1_1_windows_window_a2fbaa34c66759f65089357d1a998dadb_1a2fbaa34c66759f65089357d1a998dadb)`() const` {#classhighlo_1_1_windows_window_a2fbaa34c66759f65089357d1a998dadb_1a2fbaa34c66759f65089357d1a998dadb}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_windows_window_a2371c28faf7162ba3da316626832cad9_1a2371c28faf7162ba3da316626832cad9)`()` {#classhighlo_1_1_windows_window_a2371c28faf7162ba3da316626832cad9_1a2371c28faf7162ba3da316626832cad9}

#### `public inline virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetWidth`](#classhighlo_1_1_windows_window_a81ccebb3719436d1ae0ae6deceeb1cb4_1a81ccebb3719436d1ae0ae6deceeb1cb4)`()` {#classhighlo_1_1_windows_window_a81ccebb3719436d1ae0ae6deceeb1cb4_1a81ccebb3719436d1ae0ae6deceeb1cb4}

#### `public inline virtual `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`GetHeight`](#classhighlo_1_1_windows_window_a023a86944ea3cba5a8a0f9ee698170a8_1a023a86944ea3cba5a8a0f9ee698170a8)`()` {#classhighlo_1_1_windows_window_a023a86944ea3cba5a8a0f9ee698170a8_1a023a86944ea3cba5a8a0f9ee698170a8}

#### `public inline virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`GetNativeHandle`](#classhighlo_1_1_windows_window_a88e46b5d751359bfef1b57d0cf98dbbb_1a88e46b5d751359bfef1b57d0cf98dbbb)`()` {#classhighlo_1_1_windows_window_a88e46b5d751359bfef1b57d0cf98dbbb_1a88e46b5d751359bfef1b57d0cf98dbbb}

#### `public inline virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`GetNativeContext`](#classhighlo_1_1_windows_window_a43852f2068daa60c123985d0f4fc12cb_1a43852f2068daa60c123985d0f4fc12cb)`()` {#classhighlo_1_1_windows_window_a43852f2068daa60c123985d0f4fc12cb_1a43852f2068daa60c123985d0f4fc12cb}

#### `public inline virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` * `[`GetNativeCursor`](#classhighlo_1_1_windows_window_a24b5190d74df31beab56f5c8542ff982_1a24b5190d74df31beab56f5c8542ff982)`()` {#classhighlo_1_1_windows_window_a24b5190d74df31beab56f5c8542ff982_1a24b5190d74df31beab56f5c8542ff982}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetWindowIcon`](#classhighlo_1_1_windows_window_a6f3dced4a0e79b3324066e761d4f7534_1a6f3dced4a0e79b3324066e761d4f7534)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & path,bool flip)` {#classhighlo_1_1_windows_window_a6f3dced4a0e79b3324066e761d4f7534_1a6f3dced4a0e79b3324066e761d4f7534}

#### `public virtual std::pair< `[`int32](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481), [int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` > `[`GetWindowDimensions`](#classhighlo_1_1_windows_window_aea7f16743023203fb596d4fa22d0281c_1aea7f16743023203fb596d4fa22d0281c)`()` {#classhighlo_1_1_windows_window_aea7f16743023203fb596d4fa22d0281c_1aea7f16743023203fb596d4fa22d0281c}

#### `public virtual std::pair< `[`int32](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481), [int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` > `[`GetWindowPosition`](#classhighlo_1_1_windows_window_ad4a7d29a39d70abb01b0cc5b45426993_1ad4a7d29a39d70abb01b0cc5b45426993)`()` {#classhighlo_1_1_windows_window_ad4a7d29a39d70abb01b0cc5b45426993_1ad4a7d29a39d70abb01b0cc5b45426993}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CloseWindow`](#classhighlo_1_1_windows_window_a2cf846e265aab6f0f66ae97632510785_1a2cf846e265aab6f0f66ae97632510785)`()` {#classhighlo_1_1_windows_window_a2cf846e265aab6f0f66ae97632510785_1a2cf846e265aab6f0f66ae97632510785}

#### `public virtual `[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`ShowMessageBox`](#classhighlo_1_1_windows_window_ad69e8f6c95c11a489b7e7b850f9c7783_1ad69e8f6c95c11a489b7e7b850f9c7783)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & title,const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & msg,`[`WindowMessageButtonType`](docs-api/api-highlo.md#namespacehighlo_a633a075aa499eeec6f7b734f48300041_1a633a075aa499eeec6f7b734f48300041)` btnType,`[`WindowMessageIcon`](docs-api/api-highlo.md#namespacehighlo_ae5e6b69bb45c7a98c987e697924b7b9f_1ae5e6b69bb45c7a98c987e697924b7b9f)` icon)` {#classhighlo_1_1_windows_window_ad69e8f6c95c11a489b7e7b850f9c7783_1ad69e8f6c95c11a489b7e7b850f9c7783}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetMenuBar`](#classhighlo_1_1_windows_window_acb99beaa1c36ca5fd388fc63bd769e4a_1acb99beaa1c36ca5fd388fc63bd769e4a)`(const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MenuBar`](docs-api/api-highlo--MenuBar.md#classhighlo_1_1_menu_bar)` > & bar)` {#classhighlo_1_1_windows_window_acb99beaa1c36ca5fd388fc63bd769e4a_1acb99beaa1c36ca5fd388fc63bd769e4a}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetVSync`](#classhighlo_1_1_windows_window_ae6e25f9856333e91e95f78f661cfbcf0_1ae6e25f9856333e91e95f78f661cfbcf0)`(bool bEnabled)` {#classhighlo_1_1_windows_window_ae6e25f9856333e91e95f78f661cfbcf0_1ae6e25f9856333e91e95f78f661cfbcf0}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetVisible`](#classhighlo_1_1_windows_window_a063dc1324e97e4ccb91d4b5807f66d99_1a063dc1324e97e4ccb91d4b5807f66d99)`(bool bVisible)` {#classhighlo_1_1_windows_window_a063dc1324e97e4ccb91d4b5807f66d99_1a063dc1324e97e4ccb91d4b5807f66d99}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetFocus`](#classhighlo_1_1_windows_window_a86775ee29b7ff5fe34dda9a72748c7c9_1a86775ee29b7ff5fe34dda9a72748c7c9)`(bool bEnabled)` {#classhighlo_1_1_windows_window_a86775ee29b7ff5fe34dda9a72748c7c9_1a86775ee29b7ff5fe34dda9a72748c7c9}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetFullscreen`](#classhighlo_1_1_windows_window_a31159948157a51ddb5525e41a3ae0e6b_1a31159948157a51ddb5525e41a3ae0e6b)`(bool bEnabled)` {#classhighlo_1_1_windows_window_a31159948157a51ddb5525e41a3ae0e6b_1a31159948157a51ddb5525e41a3ae0e6b}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ShowCursor`](#classhighlo_1_1_windows_window_a23132210f4df8de48fd2b47efd4d6487_1a23132210f4df8de48fd2b47efd4d6487)`()` {#classhighlo_1_1_windows_window_a23132210f4df8de48fd2b47efd4d6487_1a23132210f4df8de48fd2b47efd4d6487}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HideCursor`](#classhighlo_1_1_windows_window_af2886a61a411b5d26ba9d476279e9acf_1af2886a61a411b5d26ba9d476279e9acf)`()` {#classhighlo_1_1_windows_window_af2886a61a411b5d26ba9d476279e9acf_1af2886a61a411b5d26ba9d476279e9acf}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Maximize`](#classhighlo_1_1_windows_window_a81a716994ba9859244a7ac022b8b8931_1a81a716994ba9859244a7ac022b8b8931)`()` {#classhighlo_1_1_windows_window_a81a716994ba9859244a7ac022b8b8931_1a81a716994ba9859244a7ac022b8b8931}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CenterWindow`](#classhighlo_1_1_windows_window_adc8cedb1cf540df2fe7f0725383f597b_1adc8cedb1cf540df2fe7f0725383f597b)`()` {#classhighlo_1_1_windows_window_adc8cedb1cf540df2fe7f0725383f597b_1adc8cedb1cf540df2fe7f0725383f597b}

#### `public virtual `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetTitle`](#classhighlo_1_1_windows_window_a35f3a6639d4e4b1c925a5c70b269cddc_1a35f3a6639d4e4b1c925a5c70b269cddc)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & title)` {#classhighlo_1_1_windows_window_a35f3a6639d4e4b1c925a5c70b269cddc_1a35f3a6639d4e4b1c925a5c70b269cddc}

#### `public inline virtual bool `[`IsVisible`](#classhighlo_1_1_windows_window_a7c7d7d1d2b9e59021e23389f1e9d7494_1a7c7d7d1d2b9e59021e23389f1e9d7494)`()` {#classhighlo_1_1_windows_window_a7c7d7d1d2b9e59021e23389f1e9d7494_1a7c7d7d1d2b9e59021e23389f1e9d7494}

#### `public inline virtual bool `[`IsCursorHidden`](#classhighlo_1_1_windows_window_aff17fed4edca439c5997ab54b715fef1_1aff17fed4edca439c5997ab54b715fef1)`()` {#classhighlo_1_1_windows_window_aff17fed4edca439c5997ab54b715fef1_1aff17fed4edca439c5997ab54b715fef1}

#### `public inline virtual bool `[`IsMaximized`](#classhighlo_1_1_windows_window_afd2f9d988864333ef3ca2d786f6468f3_1afd2f9d988864333ef3ca2d786f6468f3)`()` {#classhighlo_1_1_windows_window_afd2f9d988864333ef3ca2d786f6468f3_1afd2f9d988864333ef3ca2d786f6468f3}

#### `public inline virtual bool `[`IsFullscreen`](#classhighlo_1_1_windows_window_a44e8bc135728ab5a9f876cb5ebd7756f_1a44e8bc135728ab5a9f876cb5ebd7756f)`()` {#classhighlo_1_1_windows_window_a44e8bc135728ab5a9f876cb5ebd7756f_1a44e8bc135728ab5a9f876cb5ebd7756f}

#### `public inline virtual bool `[`IsCentered`](#classhighlo_1_1_windows_window_a623796ac6b066e830cc7559a2e9b951f_1a623796ac6b066e830cc7559a2e9b951f)`()` {#classhighlo_1_1_windows_window_a623796ac6b066e830cc7559a2e9b951f_1a623796ac6b066e830cc7559a2e9b951f}

#### `public virtual bool `[`HasMenuBar`](#classhighlo_1_1_windows_window_ad79e6e0a6c07a66aa7d2211ce61c9c18_1ad79e6e0a6c07a66aa7d2211ce61c9c18)`()` {#classhighlo_1_1_windows_window_ad79e6e0a6c07a66aa7d2211ce61c9c18_1ad79e6e0a6c07a66aa7d2211ce61c9c18}

#### `public inline virtual const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & `[`GetTitle`](#classhighlo_1_1_windows_window_a7ae09815dbd24df4b229e148218b7a4d_1a7ae09815dbd24df4b229e148218b7a4d)`()` {#classhighlo_1_1_windows_window_a7ae09815dbd24df4b229e148218b7a4d_1a7ae09815dbd24df4b229e148218b7a4d}

#### `public inline virtual const `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MenuBar`](docs-api/api-highlo--MenuBar.md#classhighlo_1_1_menu_bar)` > & `[`GetMenuBar`](#classhighlo_1_1_windows_window_a87c160991bd9cc0b42b8bc722cc1d2ea_1a87c160991bd9cc0b42b8bc722cc1d2ea)`() const` {#classhighlo_1_1_windows_window_a87c160991bd9cc0b42b8bc722cc1d2ea_1a87c160991bd9cc0b42b8bc722cc1d2ea}

#### `public virtual bool `[`IsFocused`](#classhighlo_1_1_windows_window_a16dfa0427fa52464a11ca208ffd14f8e_1a16dfa0427fa52464a11ca208ffd14f8e)`()` {#classhighlo_1_1_windows_window_a16dfa0427fa52464a11ca208ffd14f8e_1a16dfa0427fa52464a11ca208ffd14f8e}

#### `public inline virtual const `[`WindowData`](docs-api/api-highlo--WindowData.md#structhighlo_1_1_window_data)` & `[`GetProperties`](#classhighlo_1_1_windows_window_afaa8aa0c164cbc73d570eb948a7cb52d_1afaa8aa0c164cbc73d570eb948a7cb52d)`() const` {#classhighlo_1_1_windows_window_afaa8aa0c164cbc73d570eb948a7cb52d_1afaa8aa0c164cbc73d570eb948a7cb52d}

#### `public inline virtual `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderingContext`](docs-api/api-highlo--RenderingContext.md#classhighlo_1_1_rendering_context)` > `[`GetContext`](#classhighlo_1_1_windows_window_aac2a70287fb485ebd71ab473429ce8ca_1aac2a70287fb485ebd71ab473429ce8ca)`()` {#classhighlo_1_1_windows_window_aac2a70287fb485ebd71ab473429ce8ca_1aac2a70287fb485ebd71ab473429ce8ca}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OnResize`](#classhighlo_1_1_windows_window_a6473e0232120be0dab564eccb5fa3570_1a6473e0232120be0dab564eccb5fa3570)`(`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` width,`[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` height)` {#classhighlo_1_1_windows_window_a6473e0232120be0dab564eccb5fa3570_1a6473e0232120be0dab564eccb5fa3570}

#### `private `[`WindowData`](docs-api/api-highlo--WindowData.md#structhighlo_1_1_window_data)` `[`m_Properties`](#classhighlo_1_1_windows_window_1a4723588fb220346a6bd059d434c4637a) {#classhighlo_1_1_windows_window_1a4723588fb220346a6bd059d434c4637a}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [RenderingContext`](docs-api/api-highlo--RenderingContext.md#classhighlo_1_1_rendering_context)` > `[`m_Context`](#classhighlo_1_1_windows_window_1a8035b497477d22f2b0777dd1fdc7649a) {#classhighlo_1_1_windows_window_1a8035b497477d22f2b0777dd1fdc7649a}

#### `private HWND `[`m_NativeHandle`](#classhighlo_1_1_windows_window_1a231ede5439ffb8651b8ae11ce878e94e) {#classhighlo_1_1_windows_window_1a231ede5439ffb8651b8ae11ce878e94e}

#### `private HICON `[`m_WindowIcon`](#classhighlo_1_1_windows_window_1a53ac21ebf2d02e30ea96108ccca43553) {#classhighlo_1_1_windows_window_1a53ac21ebf2d02e30ea96108ccca43553}

#### `private HCURSOR `[`m_Cursor`](#classhighlo_1_1_windows_window_1a9ee351500de8b9ef3f0b992556010d7c) {#classhighlo_1_1_windows_window_1a9ee351500de8b9ef3f0b992556010d7c}

#### `private `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [MenuBar`](docs-api/api-highlo--MenuBar.md#classhighlo_1_1_menu_bar)` > `[`m_MenuBar`](#classhighlo_1_1_windows_window_1aafdac84bab92f9aaba6d8c204354d8c9) {#classhighlo_1_1_windows_window_1aafdac84bab92f9aaba6d8c204354d8c9}

#### `private bool `[`m_CursorLocked`](#classhighlo_1_1_windows_window_1a4fbce4eb4b433cc013efdf39296be51d) {#classhighlo_1_1_windows_window_1a4fbce4eb4b433cc013efdf39296be51d}

#### `private `[`WindowCallbackData`](docs-api/api-highlo--WindowCallbackData.md#structhighlo_1_1_window_callback_data)` `[`m_CallbackData`](#classhighlo_1_1_windows_window_1ad2defe2792ca1e1942c8ddc38e344760) {#classhighlo_1_1_windows_window_1ad2defe2792ca1e1942c8ddc38e344760}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Init`](#classhighlo_1_1_windows_window_1ab3cbe05490a9b2513d294a3a342323b3)`()` {#classhighlo_1_1_windows_window_1ab3cbe05490a9b2513d294a3a342323b3}

