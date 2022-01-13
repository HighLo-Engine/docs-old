## struct `highlo::Color` {#structhighlo_1_1_color}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public float `[`R`](#structhighlo_1_1_color_afde90609b9d9adb771a8b0a0cb97cd3c_1afde90609b9d9adb771a8b0a0cb97cd3c) | 
`public float `[`G`](#structhighlo_1_1_color_ae9199109313fd3cd4557b164a3fbd981_1ae9199109313fd3cd4557b164a3fbd981) | 
`public float `[`B`](#structhighlo_1_1_color_a9b3569d2699b9cc61658d158bd414a23_1a9b3569d2699b9cc61658d158bd414a23) | 
`public float `[`A`](#structhighlo_1_1_color_aebff3d83ac0e3886bb37a1d36cbcb47b_1aebff3d83ac0e3886bb37a1d36cbcb47b) | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a7196c8033c3c501ea9942b486971b74f_1a7196c8033c3c501ea9942b486971b74f)`() = default` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a75a44a2b00dc77f1dad7d02d35bf312e_1a75a44a2b00dc77f1dad7d02d35bf312e)`(float r,float g,float b,float a)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a1a43b0cc23ca208e72d296778ea91edd_1a1a43b0cc23ca208e72d296778ea91edd)`(const glm::vec3 & rgb)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a074a30607e0d7e091ae54df059bf306e_1a074a30607e0d7e091ae54df059bf306e)`(const glm::vec4 & rgba)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Color`](#structhighlo_1_1_color_a1e6de66b5c5f639597e1dd8d5e3d2cca_1a1e6de66b5c5f639597e1dd8d5e3d2cca)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a675004b772e4b0b998b44661dd76fb8c_1a675004b772e4b0b998b44661dd76fb8c)`(const `[`Color`](#structhighlo_1_1_color)` &) = default` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Color`](#structhighlo_1_1_color)` & `[`operator=`](#structhighlo_1_1_color_a35c18e159958e17d49f4d7e5d822b0a5_1a35c18e159958e17d49f4d7e5d822b0a5)`(const `[`Color`](#structhighlo_1_1_color)` &) = default` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ToSRGB`](#structhighlo_1_1_color_a07231fee6cd10ddab88d695daa2c618f_1a07231fee6cd10ddab88d695daa2c618f)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`FromSRGB`](#structhighlo_1_1_color_ab5bdba387b24ba9bdea920d18eb5c294_1ab5bdba387b24ba9bdea920d18eb5c294)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#structhighlo_1_1_color_a2658bd04ff1a276f5a1e6c7151dffb7a_1a2658bd04ff1a276f5a1e6c7151dffb7a)`(const `[`Color`](#structhighlo_1_1_color)` & other) const` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#structhighlo_1_1_color_a1e91884050bcd4e1c43445ad5ac203df_1a1e91884050bcd4e1c43445ad5ac203df)`(const `[`Color`](#structhighlo_1_1_color)` & other) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator glm::vec4`](#structhighlo_1_1_color_aa138c3d24ca5d258006f697e6748edd6_1aa138c3d24ca5d258006f697e6748edd6)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator const glm::vec4`](#structhighlo_1_1_color_a030d9cff32a4bbfb136f42b508f13cb3_1a030d9cff32a4bbfb136f42b508f13cb3)`() const` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Color`](#structhighlo_1_1_color)` `[`ToSRGB`](#structhighlo_1_1_color_adbad48d8988fe09c610b94b9c8096e59_1adbad48d8988fe09c610b94b9c8096e59)`(const `[`Color`](#structhighlo_1_1_color)` & color)` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Color`](#structhighlo_1_1_color)` `[`FromSRGB`](#structhighlo_1_1_color_adb7c61b3ebc5689fa0b3d25a645746b9_1adb7c61b3ebc5689fa0b3d25a645746b9)`(const `[`Color`](#structhighlo_1_1_color)` & color)` | 

### Members

#### `public float `[`R`](#structhighlo_1_1_color_afde90609b9d9adb771a8b0a0cb97cd3c_1afde90609b9d9adb771a8b0a0cb97cd3c) {#structhighlo_1_1_color_afde90609b9d9adb771a8b0a0cb97cd3c_1afde90609b9d9adb771a8b0a0cb97cd3c}

#### `public float `[`G`](#structhighlo_1_1_color_ae9199109313fd3cd4557b164a3fbd981_1ae9199109313fd3cd4557b164a3fbd981) {#structhighlo_1_1_color_ae9199109313fd3cd4557b164a3fbd981_1ae9199109313fd3cd4557b164a3fbd981}

#### `public float `[`B`](#structhighlo_1_1_color_a9b3569d2699b9cc61658d158bd414a23_1a9b3569d2699b9cc61658d158bd414a23) {#structhighlo_1_1_color_a9b3569d2699b9cc61658d158bd414a23_1a9b3569d2699b9cc61658d158bd414a23}

#### `public float `[`A`](#structhighlo_1_1_color_aebff3d83ac0e3886bb37a1d36cbcb47b_1aebff3d83ac0e3886bb37a1d36cbcb47b) {#structhighlo_1_1_color_aebff3d83ac0e3886bb37a1d36cbcb47b_1aebff3d83ac0e3886bb37a1d36cbcb47b}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a7196c8033c3c501ea9942b486971b74f_1a7196c8033c3c501ea9942b486971b74f)`() = default` {#structhighlo_1_1_color_a7196c8033c3c501ea9942b486971b74f_1a7196c8033c3c501ea9942b486971b74f}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a75a44a2b00dc77f1dad7d02d35bf312e_1a75a44a2b00dc77f1dad7d02d35bf312e)`(float r,float g,float b,float a)` {#structhighlo_1_1_color_a75a44a2b00dc77f1dad7d02d35bf312e_1a75a44a2b00dc77f1dad7d02d35bf312e}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a1a43b0cc23ca208e72d296778ea91edd_1a1a43b0cc23ca208e72d296778ea91edd)`(const glm::vec3 & rgb)` {#structhighlo_1_1_color_a1a43b0cc23ca208e72d296778ea91edd_1a1a43b0cc23ca208e72d296778ea91edd}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a074a30607e0d7e091ae54df059bf306e_1a074a30607e0d7e091ae54df059bf306e)`(const glm::vec4 & rgba)` {#structhighlo_1_1_color_a074a30607e0d7e091ae54df059bf306e_1a074a30607e0d7e091ae54df059bf306e}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~Color`](#structhighlo_1_1_color_a1e6de66b5c5f639597e1dd8d5e3d2cca_1a1e6de66b5c5f639597e1dd8d5e3d2cca)`()` {#structhighlo_1_1_color_a1e6de66b5c5f639597e1dd8d5e3d2cca_1a1e6de66b5c5f639597e1dd8d5e3d2cca}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Color`](#structhighlo_1_1_color_a675004b772e4b0b998b44661dd76fb8c_1a675004b772e4b0b998b44661dd76fb8c)`(const `[`Color`](#structhighlo_1_1_color)` &) = default` {#structhighlo_1_1_color_a675004b772e4b0b998b44661dd76fb8c_1a675004b772e4b0b998b44661dd76fb8c}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Color`](#structhighlo_1_1_color)` & `[`operator=`](#structhighlo_1_1_color_a35c18e159958e17d49f4d7e5d822b0a5_1a35c18e159958e17d49f4d7e5d822b0a5)`(const `[`Color`](#structhighlo_1_1_color)` &) = default` {#structhighlo_1_1_color_a35c18e159958e17d49f4d7e5d822b0a5_1a35c18e159958e17d49f4d7e5d822b0a5}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ToSRGB`](#structhighlo_1_1_color_a07231fee6cd10ddab88d695daa2c618f_1a07231fee6cd10ddab88d695daa2c618f)`()` {#structhighlo_1_1_color_a07231fee6cd10ddab88d695daa2c618f_1a07231fee6cd10ddab88d695daa2c618f}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`FromSRGB`](#structhighlo_1_1_color_ab5bdba387b24ba9bdea920d18eb5c294_1ab5bdba387b24ba9bdea920d18eb5c294)`()` {#structhighlo_1_1_color_ab5bdba387b24ba9bdea920d18eb5c294_1ab5bdba387b24ba9bdea920d18eb5c294}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#structhighlo_1_1_color_a2658bd04ff1a276f5a1e6c7151dffb7a_1a2658bd04ff1a276f5a1e6c7151dffb7a)`(const `[`Color`](#structhighlo_1_1_color)` & other) const` {#structhighlo_1_1_color_a2658bd04ff1a276f5a1e6c7151dffb7a_1a2658bd04ff1a276f5a1e6c7151dffb7a}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#structhighlo_1_1_color_a1e91884050bcd4e1c43445ad5ac203df_1a1e91884050bcd4e1c43445ad5ac203df)`(const `[`Color`](#structhighlo_1_1_color)` & other) const` {#structhighlo_1_1_color_a1e91884050bcd4e1c43445ad5ac203df_1a1e91884050bcd4e1c43445ad5ac203df}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator glm::vec4`](#structhighlo_1_1_color_aa138c3d24ca5d258006f697e6748edd6_1aa138c3d24ca5d258006f697e6748edd6)`()` {#structhighlo_1_1_color_aa138c3d24ca5d258006f697e6748edd6_1aa138c3d24ca5d258006f697e6748edd6}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator const glm::vec4`](#structhighlo_1_1_color_a030d9cff32a4bbfb136f42b508f13cb3_1a030d9cff32a4bbfb136f42b508f13cb3)`() const` {#structhighlo_1_1_color_a030d9cff32a4bbfb136f42b508f13cb3_1a030d9cff32a4bbfb136f42b508f13cb3}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Color`](#structhighlo_1_1_color)` `[`ToSRGB`](#structhighlo_1_1_color_adbad48d8988fe09c610b94b9c8096e59_1adbad48d8988fe09c610b94b9c8096e59)`(const `[`Color`](#structhighlo_1_1_color)` & color)` {#structhighlo_1_1_color_adbad48d8988fe09c610b94b9c8096e59_1adbad48d8988fe09c610b94b9c8096e59}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Color`](#structhighlo_1_1_color)` `[`FromSRGB`](#structhighlo_1_1_color_adb7c61b3ebc5689fa0b3d25a645746b9_1adb7c61b3ebc5689fa0b3d25a645746b9)`(const `[`Color`](#structhighlo_1_1_color)` & color)` {#structhighlo_1_1_color_adb7c61b3ebc5689fa0b3d25a645746b9_1adb7c61b3ebc5689fa0b3d25a645746b9}

