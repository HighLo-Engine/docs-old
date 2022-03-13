## class `highlo::UI::ScopedColorStack` {#classhighlo_1_1_u_i_1_1_scoped_color_stack}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_ad04788604b35ddb14ec4ab46f53825f1_1ad04788604b35ddb14ec4ab46f53825f1)`(const `[`ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack)` &) = delete` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack)` & `[`operator=`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_a7e3c315777634276be40402fb781b21a_1a7e3c315777634276be40402fb781b21a)`(const `[`ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack)` &) = delete` | 
`public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_a1b7adfa5cce6eefdb25c8c6e8db77d80_1a1b7adfa5cce6eefdb25c8c6e8db77d80)`(`[`ImGuiCol`](#_im_gui_2imgui_8h_a1b0467ec582e731ae6292fef726fb5fe_1a1b0467ec582e731ae6292fef726fb5fe)` colorID,ColorType color,OtherColors &&... otherColorPairs)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_a2bccb5deffff7afe9a0c0414b6ec692d_1a2bccb5deffff7afe9a0c0414b6ec692d)`()` | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_Count`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_1a49907a994f17e876d4e79f0709fbc7b7) | 
`private template<>`  <br/>`inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`PushColor`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_1a2a27b99abc65be0e924b112e308b94ea)`(`[`ImGuiCol`](#_im_gui_2imgui_8h_a1b0467ec582e731ae6292fef726fb5fe_1a1b0467ec582e731ae6292fef726fb5fe)` id,ColorType color,OtherColors &&... otherColorPairs)` | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_ad04788604b35ddb14ec4ab46f53825f1_1ad04788604b35ddb14ec4ab46f53825f1)`(const `[`ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack)` &) = delete` {#classhighlo_1_1_u_i_1_1_scoped_color_stack_ad04788604b35ddb14ec4ab46f53825f1_1ad04788604b35ddb14ec4ab46f53825f1}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack)` & `[`operator=`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_a7e3c315777634276be40402fb781b21a_1a7e3c315777634276be40402fb781b21a)`(const `[`ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack)` &) = delete` {#classhighlo_1_1_u_i_1_1_scoped_color_stack_a7e3c315777634276be40402fb781b21a_1a7e3c315777634276be40402fb781b21a}

#### `public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_a1b7adfa5cce6eefdb25c8c6e8db77d80_1a1b7adfa5cce6eefdb25c8c6e8db77d80)`(`[`ImGuiCol`](#_im_gui_2imgui_8h_a1b0467ec582e731ae6292fef726fb5fe_1a1b0467ec582e731ae6292fef726fb5fe)` colorID,ColorType color,OtherColors &&... otherColorPairs)` {#classhighlo_1_1_u_i_1_1_scoped_color_stack_a1b7adfa5cce6eefdb25c8c6e8db77d80_1a1b7adfa5cce6eefdb25c8c6e8db77d80}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~ScopedColorStack`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_a2bccb5deffff7afe9a0c0414b6ec692d_1a2bccb5deffff7afe9a0c0414b6ec692d)`()` {#classhighlo_1_1_u_i_1_1_scoped_color_stack_a2bccb5deffff7afe9a0c0414b6ec692d_1a2bccb5deffff7afe9a0c0414b6ec692d}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_Count`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_1a49907a994f17e876d4e79f0709fbc7b7) {#classhighlo_1_1_u_i_1_1_scoped_color_stack_1a49907a994f17e876d4e79f0709fbc7b7}

#### `private template<>`  <br/>`inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`PushColor`](#classhighlo_1_1_u_i_1_1_scoped_color_stack_1a2a27b99abc65be0e924b112e308b94ea)`(`[`ImGuiCol`](#_im_gui_2imgui_8h_a1b0467ec582e731ae6292fef726fb5fe_1a1b0467ec582e731ae6292fef726fb5fe)` id,ColorType color,OtherColors &&... otherColorPairs)` {#classhighlo_1_1_u_i_1_1_scoped_color_stack_1a2a27b99abc65be0e924b112e308b94ea}

