## class `highlo::UniqueReference` {#classhighlo_1_1_unique_reference}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_afb0f17d5f592c904286a3be887707832_1afb0f17d5f592c904286a3be887707832)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_accdf3b94190eb345b3bf5ecd899c8737_1accdf3b94190eb345b3bf5ecd899c8737)`(T * ptr)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_aaa62162a748bb08dd90110e843bf4e92_1aaa62162a748bb08dd90110e843bf4e92)`(std::nullptr_t)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~UniqueReference`](#classhighlo_1_1_unique_reference_a0aba907c6616b81fba0d952700acc955_1a0aba907c6616b81fba0d952700acc955)`()` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_a63e849f78e5d43146d7545c5414f318e_1a63e849f78e5d43146d7545c5414f318e)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)` &) = delete` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UniqueReference`](#classhighlo_1_1_unique_reference)` & `[`operator=`](#classhighlo_1_1_unique_reference_a7441937331e1ca69caa179dea078b2e5_1a7441937331e1ca69caa179dea078b2e5)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)` &) = delete` | 
`public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_a518df32ee7a13ac6fb62a2780acbeaed_1a518df32ee7a13ac6fb62a2780acbeaed)`(`[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T2 > && other)` | 
`public template<>`  <br/>`inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UniqueReference`](#classhighlo_1_1_unique_reference)` & `[`operator=`](#classhighlo_1_1_unique_reference_a41ed5ee85ca9a05771723d2bcd150885_1a41ed5ee85ca9a05771723d2bcd150885)`(`[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T2 > && other)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#classhighlo_1_1_unique_reference_a79bc3f1f165d3fc88c02b5abcc96a920_1a79bc3f1f165d3fc88c02b5abcc96a920)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T > & other) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#classhighlo_1_1_unique_reference_a14cc746fe06014315c75defe6f6a3890_1a14cc746fe06014315c75defe6f6a3890)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T > & other) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Equals`](#classhighlo_1_1_unique_reference_a9781408fe2affc5d9162f6c6a5dd70c1_1a9781408fe2affc5d9162f6c6a5dd70c1)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T > & other) const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsValid`](#classhighlo_1_1_unique_reference_a0a9f40764739d7ddb64facaefacca056_1a0a9f40764739d7ddb64facaefacca056)`() const` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Reset`](#classhighlo_1_1_unique_reference_aeec05ef40bb5536fae69277704239487_1aeec05ef40bb5536fae69277704239487)`(T * ptr)` | 
`public template<>`  <br/>`inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UniqueReference`](#classhighlo_1_1_unique_reference)`< T2 > `[`As`](#classhighlo_1_1_unique_reference_a63822c5ebf6d953cf06762f00b0d2ae1_1a63822c5ebf6d953cf06762f00b0d2ae1)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator bool`](#classhighlo_1_1_unique_reference_a9a58a929d179827a601e1a4f0c147686_1a9a58a929d179827a601e1a4f0c147686)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator bool`](#classhighlo_1_1_unique_reference_a5ef7fcf2f3c4e930c282d1cbc4f9e1ad_1a5ef7fcf2f3c4e930c282d1cbc4f9e1ad)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T * `[`operator->`](#classhighlo_1_1_unique_reference_a7efa4ecf891f94b11b5a0993b70055ca_1a7efa4ecf891f94b11b5a0993b70055ca)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const T * `[`operator->`](#classhighlo_1_1_unique_reference_a127d014e29b20fcd889ecf77eeba7839_1a127d014e29b20fcd889ecf77eeba7839)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T & `[`operator*`](#classhighlo_1_1_unique_reference_ac7e38805e2cbff194ca6e15f8fe7124a_1ac7e38805e2cbff194ca6e15f8fe7124a)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const T & `[`operator*`](#classhighlo_1_1_unique_reference_ad398a6268a7a2ae962e14df26e7f787b_1ad398a6268a7a2ae962e14df26e7f787b)`() const` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T * `[`Get`](#classhighlo_1_1_unique_reference_a79539c8e44989459f5927c8288762b20_1a79539c8e44989459f5927c8288762b20)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const T * `[`Get`](#classhighlo_1_1_unique_reference_ab984d161c08d0da900992b777d76a4e3_1ab984d161c08d0da900992b777d76a4e3)`() const` | 
`private T * `[`m_Data`](#classhighlo_1_1_unique_reference_1a868a62147ad27bb3e364b2447dab2a9d) | 
`public template<>`  <br/>`inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UniqueReference`](#classhighlo_1_1_unique_reference)`< T > `[`Create`](#classhighlo_1_1_unique_reference_aa9c0a62dc68137159f9520c72b3434f3_1aa9c0a62dc68137159f9520c72b3434f3)`(Args &&... args)` | 

### Members

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_afb0f17d5f592c904286a3be887707832_1afb0f17d5f592c904286a3be887707832)`()` {#classhighlo_1_1_unique_reference_afb0f17d5f592c904286a3be887707832_1afb0f17d5f592c904286a3be887707832}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_accdf3b94190eb345b3bf5ecd899c8737_1accdf3b94190eb345b3bf5ecd899c8737)`(T * ptr)` {#classhighlo_1_1_unique_reference_accdf3b94190eb345b3bf5ecd899c8737_1accdf3b94190eb345b3bf5ecd899c8737}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_aaa62162a748bb08dd90110e843bf4e92_1aaa62162a748bb08dd90110e843bf4e92)`(std::nullptr_t)` {#classhighlo_1_1_unique_reference_aaa62162a748bb08dd90110e843bf4e92_1aaa62162a748bb08dd90110e843bf4e92}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`~UniqueReference`](#classhighlo_1_1_unique_reference_a0aba907c6616b81fba0d952700acc955_1a0aba907c6616b81fba0d952700acc955)`()` {#classhighlo_1_1_unique_reference_a0aba907c6616b81fba0d952700acc955_1a0aba907c6616b81fba0d952700acc955}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_a63e849f78e5d43146d7545c5414f318e_1a63e849f78e5d43146d7545c5414f318e)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)` &) = delete` {#classhighlo_1_1_unique_reference_a63e849f78e5d43146d7545c5414f318e_1a63e849f78e5d43146d7545c5414f318e}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UniqueReference`](#classhighlo_1_1_unique_reference)` & `[`operator=`](#classhighlo_1_1_unique_reference_a7441937331e1ca69caa179dea078b2e5_1a7441937331e1ca69caa179dea078b2e5)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)` &) = delete` {#classhighlo_1_1_unique_reference_a7441937331e1ca69caa179dea078b2e5_1a7441937331e1ca69caa179dea078b2e5}

#### `public template<>`  <br/>`inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`UniqueReference`](#classhighlo_1_1_unique_reference_a518df32ee7a13ac6fb62a2780acbeaed_1a518df32ee7a13ac6fb62a2780acbeaed)`(`[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T2 > && other)` {#classhighlo_1_1_unique_reference_a518df32ee7a13ac6fb62a2780acbeaed_1a518df32ee7a13ac6fb62a2780acbeaed}

#### `public template<>`  <br/>`inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UniqueReference`](#classhighlo_1_1_unique_reference)` & `[`operator=`](#classhighlo_1_1_unique_reference_a41ed5ee85ca9a05771723d2bcd150885_1a41ed5ee85ca9a05771723d2bcd150885)`(`[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T2 > && other)` {#classhighlo_1_1_unique_reference_a41ed5ee85ca9a05771723d2bcd150885_1a41ed5ee85ca9a05771723d2bcd150885}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator==`](#classhighlo_1_1_unique_reference_a79bc3f1f165d3fc88c02b5abcc96a920_1a79bc3f1f165d3fc88c02b5abcc96a920)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T > & other) const` {#classhighlo_1_1_unique_reference_a79bc3f1f165d3fc88c02b5abcc96a920_1a79bc3f1f165d3fc88c02b5abcc96a920}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`operator!=`](#classhighlo_1_1_unique_reference_a14cc746fe06014315c75defe6f6a3890_1a14cc746fe06014315c75defe6f6a3890)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T > & other) const` {#classhighlo_1_1_unique_reference_a14cc746fe06014315c75defe6f6a3890_1a14cc746fe06014315c75defe6f6a3890}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`Equals`](#classhighlo_1_1_unique_reference_a9781408fe2affc5d9162f6c6a5dd70c1_1a9781408fe2affc5d9162f6c6a5dd70c1)`(const `[`UniqueReference`](#classhighlo_1_1_unique_reference)`< T > & other) const` {#classhighlo_1_1_unique_reference_a9781408fe2affc5d9162f6c6a5dd70c1_1a9781408fe2affc5d9162f6c6a5dd70c1}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsValid`](#classhighlo_1_1_unique_reference_a0a9f40764739d7ddb64facaefacca056_1a0a9f40764739d7ddb64facaefacca056)`() const` {#classhighlo_1_1_unique_reference_a0a9f40764739d7ddb64facaefacca056_1a0a9f40764739d7ddb64facaefacca056}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Reset`](#classhighlo_1_1_unique_reference_aeec05ef40bb5536fae69277704239487_1aeec05ef40bb5536fae69277704239487)`(T * ptr)` {#classhighlo_1_1_unique_reference_aeec05ef40bb5536fae69277704239487_1aeec05ef40bb5536fae69277704239487}

#### `public template<>`  <br/>`inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UniqueReference`](#classhighlo_1_1_unique_reference)`< T2 > `[`As`](#classhighlo_1_1_unique_reference_a63822c5ebf6d953cf06762f00b0d2ae1_1a63822c5ebf6d953cf06762f00b0d2ae1)`() const` {#classhighlo_1_1_unique_reference_a63822c5ebf6d953cf06762f00b0d2ae1_1a63822c5ebf6d953cf06762f00b0d2ae1}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator bool`](#classhighlo_1_1_unique_reference_a9a58a929d179827a601e1a4f0c147686_1a9a58a929d179827a601e1a4f0c147686)`()` {#classhighlo_1_1_unique_reference_a9a58a929d179827a601e1a4f0c147686_1a9a58a929d179827a601e1a4f0c147686}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`operator bool`](#classhighlo_1_1_unique_reference_a5ef7fcf2f3c4e930c282d1cbc4f9e1ad_1a5ef7fcf2f3c4e930c282d1cbc4f9e1ad)`() const` {#classhighlo_1_1_unique_reference_a5ef7fcf2f3c4e930c282d1cbc4f9e1ad_1a5ef7fcf2f3c4e930c282d1cbc4f9e1ad}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T * `[`operator->`](#classhighlo_1_1_unique_reference_a7efa4ecf891f94b11b5a0993b70055ca_1a7efa4ecf891f94b11b5a0993b70055ca)`()` {#classhighlo_1_1_unique_reference_a7efa4ecf891f94b11b5a0993b70055ca_1a7efa4ecf891f94b11b5a0993b70055ca}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const T * `[`operator->`](#classhighlo_1_1_unique_reference_a127d014e29b20fcd889ecf77eeba7839_1a127d014e29b20fcd889ecf77eeba7839)`() const` {#classhighlo_1_1_unique_reference_a127d014e29b20fcd889ecf77eeba7839_1a127d014e29b20fcd889ecf77eeba7839}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T & `[`operator*`](#classhighlo_1_1_unique_reference_ac7e38805e2cbff194ca6e15f8fe7124a_1ac7e38805e2cbff194ca6e15f8fe7124a)`()` {#classhighlo_1_1_unique_reference_ac7e38805e2cbff194ca6e15f8fe7124a_1ac7e38805e2cbff194ca6e15f8fe7124a}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const T & `[`operator*`](#classhighlo_1_1_unique_reference_ad398a6268a7a2ae962e14df26e7f787b_1ad398a6268a7a2ae962e14df26e7f787b)`() const` {#classhighlo_1_1_unique_reference_ad398a6268a7a2ae962e14df26e7f787b_1ad398a6268a7a2ae962e14df26e7f787b}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` T * `[`Get`](#classhighlo_1_1_unique_reference_a79539c8e44989459f5927c8288762b20_1a79539c8e44989459f5927c8288762b20)`()` {#classhighlo_1_1_unique_reference_a79539c8e44989459f5927c8288762b20_1a79539c8e44989459f5927c8288762b20}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const T * `[`Get`](#classhighlo_1_1_unique_reference_ab984d161c08d0da900992b777d76a4e3_1ab984d161c08d0da900992b777d76a4e3)`() const` {#classhighlo_1_1_unique_reference_ab984d161c08d0da900992b777d76a4e3_1ab984d161c08d0da900992b777d76a4e3}

#### `private T * `[`m_Data`](#classhighlo_1_1_unique_reference_1a868a62147ad27bb3e364b2447dab2a9d) {#classhighlo_1_1_unique_reference_1a868a62147ad27bb3e364b2447dab2a9d}

#### `public template<>`  <br/>`inline static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[UniqueReference`](#classhighlo_1_1_unique_reference)`< T > `[`Create`](#classhighlo_1_1_unique_reference_aa9c0a62dc68137159f9520c72b3434f3_1aa9c0a62dc68137159f9520c72b3434f3)`(Args &&... args)` {#classhighlo_1_1_unique_reference_aa9c0a62dc68137159f9520c72b3434f3_1aa9c0a62dc68137159f9520c72b3434f3}

