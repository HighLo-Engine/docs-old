# namespace `ImStb` {#namespace_im_stb}

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public static int `[`STB_TEXTEDIT_STRINGLEN`](#namespace_im_stb_a145e13c813b64de1d6b124fbdb0a8911_1a145e13c813b64de1d6b124fbdb0a8911)`(const `[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj)`            | 
`public static `[`ImWchar`](#_im_gui_2imgui_8h_a1ecb49ee827c39a982f1e1467910d020_1a1ecb49ee827c39a982f1e1467910d020)` `[`STB_TEXTEDIT_GETCHAR`](#namespace_im_stb_a6b8da9e495d9edcbe283793fb81b2c23_1a6b8da9e495d9edcbe283793fb81b2c23)`(const `[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int idx)`            | 
`public static float `[`STB_TEXTEDIT_GETWIDTH`](#namespace_im_stb_a0f7912ed04140f7deb98a81163ca919d_1a0f7912ed04140f7deb98a81163ca919d)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int line_start_idx,int char_idx)`            | 
`public static int `[`STB_TEXTEDIT_KEYTOTEXT`](#namespace_im_stb_a294857d9864178e0005adf73a76f1820_1a294857d9864178e0005adf73a76f1820)`(int key)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`STB_TEXTEDIT_LAYOUTROW`](#namespace_im_stb_ab4b8a7af0c0063874a6f7ed7e6d0bec9_1ab4b8a7af0c0063874a6f7ed7e6d0bec9)`(`[`StbTexteditRow`](docs-api/api-StbTexteditRow.md#struct_stb_textedit_row)` * r,`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int line_start_idx)`            | 
`public static bool `[`is_separator`](#namespace_im_stb_a2884d6bcfd0fba8eb8e322c2507aed5a_1a2884d6bcfd0fba8eb8e322c2507aed5a)`(unsigned int c)`            | 
`public static int `[`is_word_boundary_from_right`](#namespace_im_stb_ab7f998a5fc7a1f6cab073a2392e786c3_1ab7f998a5fc7a1f6cab073a2392e786c3)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int idx)`            | 
`public static int `[`STB_TEXTEDIT_MOVEWORDLEFT_IMPL`](#namespace_im_stb_aa17450e2c20f846067d1aee8dbaaf976_1aa17450e2c20f846067d1aee8dbaaf976)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int idx)`            | 
`public static int `[`STB_TEXTEDIT_MOVEWORDRIGHT_IMPL`](#namespace_im_stb_a591af6c724a8088d03687aba81098ae9_1a591af6c724a8088d03687aba81098ae9)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int idx)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`STB_TEXTEDIT_DELETECHARS`](#namespace_im_stb_a46ef9d2dbe0c4a1a8b98792c496289db_1a46ef9d2dbe0c4a1a8b98792c496289db)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int pos,int n)`            | 
`public static bool `[`STB_TEXTEDIT_INSERTCHARS`](#namespace_im_stb_a863995f7025cdc7ecbd7d7f382844b06_1a863995f7025cdc7ecbd7d7f382844b06)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int pos,const `[`ImWchar`](#_im_gui_2imgui_8h_a1ecb49ee827c39a982f1e1467910d020_1a1ecb49ee827c39a982f1e1467910d020)` * new_text,int new_text_len)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`stb_textedit_replace`](#namespace_im_stb_a6a268e5fd6b32c631f6014fd2250070a_1a6a268e5fd6b32c631f6014fd2250070a)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * str,`[`STB_TexteditState`](docs-api/api-STB_TexteditState.md#struct_s_t_b___textedit_state)` * state,const `[`STB_TEXTEDIT_CHARTYPE`](#imstb__textedit_8h_a6e64031a061922e3a48d88fd8623f4c3_1a6e64031a061922e3a48d88fd8623f4c3)` * text,int text_len)`            | 

## Members

#### `public static int `[`STB_TEXTEDIT_STRINGLEN`](#namespace_im_stb_a145e13c813b64de1d6b124fbdb0a8911_1a145e13c813b64de1d6b124fbdb0a8911)`(const `[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj)` {#namespace_im_stb_a145e13c813b64de1d6b124fbdb0a8911_1a145e13c813b64de1d6b124fbdb0a8911}

#### `public static `[`ImWchar`](#_im_gui_2imgui_8h_a1ecb49ee827c39a982f1e1467910d020_1a1ecb49ee827c39a982f1e1467910d020)` `[`STB_TEXTEDIT_GETCHAR`](#namespace_im_stb_a6b8da9e495d9edcbe283793fb81b2c23_1a6b8da9e495d9edcbe283793fb81b2c23)`(const `[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int idx)` {#namespace_im_stb_a6b8da9e495d9edcbe283793fb81b2c23_1a6b8da9e495d9edcbe283793fb81b2c23}

#### `public static float `[`STB_TEXTEDIT_GETWIDTH`](#namespace_im_stb_a0f7912ed04140f7deb98a81163ca919d_1a0f7912ed04140f7deb98a81163ca919d)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int line_start_idx,int char_idx)` {#namespace_im_stb_a0f7912ed04140f7deb98a81163ca919d_1a0f7912ed04140f7deb98a81163ca919d}

#### `public static int `[`STB_TEXTEDIT_KEYTOTEXT`](#namespace_im_stb_a294857d9864178e0005adf73a76f1820_1a294857d9864178e0005adf73a76f1820)`(int key)` {#namespace_im_stb_a294857d9864178e0005adf73a76f1820_1a294857d9864178e0005adf73a76f1820}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`STB_TEXTEDIT_LAYOUTROW`](#namespace_im_stb_ab4b8a7af0c0063874a6f7ed7e6d0bec9_1ab4b8a7af0c0063874a6f7ed7e6d0bec9)`(`[`StbTexteditRow`](docs-api/api-StbTexteditRow.md#struct_stb_textedit_row)` * r,`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int line_start_idx)` {#namespace_im_stb_ab4b8a7af0c0063874a6f7ed7e6d0bec9_1ab4b8a7af0c0063874a6f7ed7e6d0bec9}

#### `public static bool `[`is_separator`](#namespace_im_stb_a2884d6bcfd0fba8eb8e322c2507aed5a_1a2884d6bcfd0fba8eb8e322c2507aed5a)`(unsigned int c)` {#namespace_im_stb_a2884d6bcfd0fba8eb8e322c2507aed5a_1a2884d6bcfd0fba8eb8e322c2507aed5a}

#### `public static int `[`is_word_boundary_from_right`](#namespace_im_stb_ab7f998a5fc7a1f6cab073a2392e786c3_1ab7f998a5fc7a1f6cab073a2392e786c3)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int idx)` {#namespace_im_stb_ab7f998a5fc7a1f6cab073a2392e786c3_1ab7f998a5fc7a1f6cab073a2392e786c3}

#### `public static int `[`STB_TEXTEDIT_MOVEWORDLEFT_IMPL`](#namespace_im_stb_aa17450e2c20f846067d1aee8dbaaf976_1aa17450e2c20f846067d1aee8dbaaf976)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int idx)` {#namespace_im_stb_aa17450e2c20f846067d1aee8dbaaf976_1aa17450e2c20f846067d1aee8dbaaf976}

#### `public static int `[`STB_TEXTEDIT_MOVEWORDRIGHT_IMPL`](#namespace_im_stb_a591af6c724a8088d03687aba81098ae9_1a591af6c724a8088d03687aba81098ae9)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int idx)` {#namespace_im_stb_a591af6c724a8088d03687aba81098ae9_1a591af6c724a8088d03687aba81098ae9}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`STB_TEXTEDIT_DELETECHARS`](#namespace_im_stb_a46ef9d2dbe0c4a1a8b98792c496289db_1a46ef9d2dbe0c4a1a8b98792c496289db)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int pos,int n)` {#namespace_im_stb_a46ef9d2dbe0c4a1a8b98792c496289db_1a46ef9d2dbe0c4a1a8b98792c496289db}

#### `public static bool `[`STB_TEXTEDIT_INSERTCHARS`](#namespace_im_stb_a863995f7025cdc7ecbd7d7f382844b06_1a863995f7025cdc7ecbd7d7f382844b06)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * obj,int pos,const `[`ImWchar`](#_im_gui_2imgui_8h_a1ecb49ee827c39a982f1e1467910d020_1a1ecb49ee827c39a982f1e1467910d020)` * new_text,int new_text_len)` {#namespace_im_stb_a863995f7025cdc7ecbd7d7f382844b06_1a863995f7025cdc7ecbd7d7f382844b06}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`stb_textedit_replace`](#namespace_im_stb_a6a268e5fd6b32c631f6014fd2250070a_1a6a268e5fd6b32c631f6014fd2250070a)`(`[`ImGuiInputTextState`](docs-api/api-ImGuiInputTextState.md#struct_im_gui_input_text_state)` * str,`[`STB_TexteditState`](docs-api/api-STB_TexteditState.md#struct_s_t_b___textedit_state)` * state,const `[`STB_TEXTEDIT_CHARTYPE`](#imstb__textedit_8h_a6e64031a061922e3a48d88fd8623f4c3_1a6e64031a061922e3a48d88fd8623f4c3)` * text,int text_len)` {#namespace_im_stb_a6a268e5fd6b32c631f6014fd2250070a_1a6a268e5fd6b32c631f6014fd2250070a}

