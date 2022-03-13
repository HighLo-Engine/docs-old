# page `md_C__Dev_HighLo_Engine_HighLo_Engine_HighLo_src_Engine_ImGui_ImGui_misc_freetype_README` {#md__c___dev__high_lo__engine__high_lo__engine__high_lo_src__engine__im_gui__im_gui_misc_freetype__r_e_a_d_m_e}

Build font atlases using FreeType instead of stb_truetype (which is the default font rasterizer). <br/>
by @vuhdo, @mikesart, @ocornut.

{#md__c___dev__high_lo__engine__high_lo__engine__high_lo_src__engine__im_gui__im_gui_misc_freetype__r_e_a_d_m_e_1autotoc_md1}

### Usage
Usage

1. Get latest FreeType binaries or build yourself (under Windows you may use vcpkg with `vcpkg install freetype --triplet=x64-windows`, `vcpkg integrate install`).

1. Add [imgui_freetype.h](#imgui__freetype_8h)/cpp alongside your project files.

1. Add `#define IMGUI_ENABLE_FREETYPE` in your [imconfig.h](https://github.com/ocornut/imgui/blob/master/imconfig.h) file

{#md__c___dev__high_lo__engine__high_lo__engine__high_lo_src__engine__im_gui__im_gui_misc_freetype__r_e_a_d_m_e_1autotoc_md2}

### About Gamma Correct Blending
About Gamma Correct BlendingFreeType assumes blending in linear space rather than gamma space. See FreeType note for [FT_Render_Glyph](https://www.freetype.org/freetype2/docs/reference/ft2-base_interface.html#FT_Render_Glyph). For correct results you need to be using sRGB and convert to linear space in the pixel shader output. The default Dear [ImGui](docs-api/api-ImGui.md#namespace_im_gui) styles will be impacted by this change (alpha values will need tweaking).

{#md__c___dev__high_lo__engine__high_lo__engine__high_lo_src__engine__im_gui__im_gui_misc_freetype__r_e_a_d_m_e_1autotoc_md3}

### Testbed for toying with settings (for developers)
Testbed for toying with settings (for developers)See [https://gist.github.com/ocornut/b3a9ecf13502fd818799a452969649ad](https://gist.github.com/ocornut/b3a9ecf13502fd818799a452969649ad)

{#md__c___dev__high_lo__engine__high_lo__engine__high_lo_src__engine__im_gui__im_gui_misc_freetype__r_e_a_d_m_e_1autotoc_md4}

### Known issues
Known issues

* Oversampling settins are ignored but also not so much necessary with the higher quality rendering.

{#md__c___dev__high_lo__engine__high_lo__engine__high_lo_src__engine__im_gui__im_gui_misc_freetype__r_e_a_d_m_e_1autotoc_md5}

### Comparaison
ComparaisonSmall, thin anti-aliased fonts are typically benefiting a lots from Freetype's hinting: 

{#md__c___dev__high_lo__engine__high_lo__engine__high_lo_src__engine__im_gui__im_gui_misc_freetype__r_e_a_d_m_e_1autotoc_md6}

### Colorful glyphs/emojis
Colorful glyphs/emojisYou can use the `ImGuiFreeTypeBuilderFlags_LoadColor` flag to load certain colorful glyphs. See ["Using Colorful Glyphs/Emojis"](https://github.com/ocornut/imgui/edit/master/docs/FONTS.md#using-colorful-glyphsemojis) section of FONTS.md.

