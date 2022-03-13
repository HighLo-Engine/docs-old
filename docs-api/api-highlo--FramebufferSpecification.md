## struct `highlo::FramebufferSpecification` {#structhighlo_1_1_framebuffer_specification}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public float `[`Scale`](#structhighlo_1_1_framebuffer_specification_aa47207221191909a43bec31c361c3d61_1aa47207221191909a43bec31c361c3d61) | 
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Width`](#structhighlo_1_1_framebuffer_specification_ac6158587bd0eee62da973046dc7e394a_1ac6158587bd0eee62da973046dc7e394a) | 
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Height`](#structhighlo_1_1_framebuffer_specification_abc306aef1a355ebb2b87c6c6335b1ce5_1abc306aef1a355ebb2b87c6c6335b1ce5) | 
`public glm::vec4 `[`ClearColor`](#structhighlo_1_1_framebuffer_specification_a7ad53b9a60478643c7557ec35297832b_1a7ad53b9a60478643c7557ec35297832b) | 
`public `[`FramebufferAttachmentSpecification`](docs-api/api-highlo--FramebufferAttachmentSpecification.md#structhighlo_1_1_framebuffer_attachment_specification)` `[`Attachments`](#structhighlo_1_1_framebuffer_specification_aceda3f75cc9db7695ef6fab8752e0395_1aceda3f75cc9db7695ef6fab8752e0395) | 
`public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Samples`](#structhighlo_1_1_framebuffer_specification_a2229dab742b37a86978a00848f730b82_1a2229dab742b37a86978a00848f730b82) | 
`public bool `[`ClearOnLoad`](#structhighlo_1_1_framebuffer_specification_a0017f6b3448650dca64458c62454ea74_1a0017f6b3448650dca64458c62454ea74) | 
`public bool `[`NoResize`](#structhighlo_1_1_framebuffer_specification_a5fe6fe07e5c0c4bb93b362d0650c1f1b_1a5fe6fe07e5c0c4bb93b362d0650c1f1b) | 
`public bool `[`SwapChainTarget`](#structhighlo_1_1_framebuffer_specification_a4c326d34a5ffabf61f00fec10e501ff8_1a4c326d34a5ffabf61f00fec10e501ff8) | 
`public bool `[`Blend`](#structhighlo_1_1_framebuffer_specification_ae7b7d721cde75554050186fe4f10ef91_1ae7b7d721cde75554050186fe4f10ef91) | 
`public `[`FramebufferBlendMode`](docs-api/api-highlo.md#namespacehighlo_ac957b887a2abf09fc8c98114cbf80304_1ac957b887a2abf09fc8c98114cbf80304)` `[`BlendMode`](#structhighlo_1_1_framebuffer_specification_a19d833ae137105489df843326bd9f902_1a19d833ae137105489df843326bd9f902) | 
`public `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`ExistingImage`](#structhighlo_1_1_framebuffer_specification_a507fb2b6228e9a099b1f153e7a82e7d9_1a507fb2b6228e9a099b1f153e7a82e7d9) | 
`public std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`ExistingImageLayers`](#structhighlo_1_1_framebuffer_specification_a359616f51e62b9f54c9ca463b3afe729_1a359616f51e62b9f54c9ca463b3afe729) | 
`public std::map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), [Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`ExistingImages`](#structhighlo_1_1_framebuffer_specification_a688923989713171602d37b66dde7b4a4_1a688923989713171602d37b66dde7b4a4) | 
`public `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Framebuffer`](docs-api/api-highlo--Framebuffer.md#classhighlo_1_1_framebuffer)` > `[`ExistingFramebuffer`](#structhighlo_1_1_framebuffer_specification_a143d92d98e08f08f67db7d8a30ce0195_1a143d92d98e08f08f67db7d8a30ce0195) | 
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`DebugName`](#structhighlo_1_1_framebuffer_specification_a1d29837d991613ceb0b97df3250e91a6_1a1d29837d991613ceb0b97df3250e91a6) | 

### Members

#### `public float `[`Scale`](#structhighlo_1_1_framebuffer_specification_aa47207221191909a43bec31c361c3d61_1aa47207221191909a43bec31c361c3d61) {#structhighlo_1_1_framebuffer_specification_aa47207221191909a43bec31c361c3d61_1aa47207221191909a43bec31c361c3d61}

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Width`](#structhighlo_1_1_framebuffer_specification_ac6158587bd0eee62da973046dc7e394a_1ac6158587bd0eee62da973046dc7e394a) {#structhighlo_1_1_framebuffer_specification_ac6158587bd0eee62da973046dc7e394a_1ac6158587bd0eee62da973046dc7e394a}

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Height`](#structhighlo_1_1_framebuffer_specification_abc306aef1a355ebb2b87c6c6335b1ce5_1abc306aef1a355ebb2b87c6c6335b1ce5) {#structhighlo_1_1_framebuffer_specification_abc306aef1a355ebb2b87c6c6335b1ce5_1abc306aef1a355ebb2b87c6c6335b1ce5}

#### `public glm::vec4 `[`ClearColor`](#structhighlo_1_1_framebuffer_specification_a7ad53b9a60478643c7557ec35297832b_1a7ad53b9a60478643c7557ec35297832b) {#structhighlo_1_1_framebuffer_specification_a7ad53b9a60478643c7557ec35297832b_1a7ad53b9a60478643c7557ec35297832b}

#### `public `[`FramebufferAttachmentSpecification`](docs-api/api-highlo--FramebufferAttachmentSpecification.md#structhighlo_1_1_framebuffer_attachment_specification)` `[`Attachments`](#structhighlo_1_1_framebuffer_specification_aceda3f75cc9db7695ef6fab8752e0395_1aceda3f75cc9db7695ef6fab8752e0395) {#structhighlo_1_1_framebuffer_specification_aceda3f75cc9db7695ef6fab8752e0395_1aceda3f75cc9db7695ef6fab8752e0395}

#### `public `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`Samples`](#structhighlo_1_1_framebuffer_specification_a2229dab742b37a86978a00848f730b82_1a2229dab742b37a86978a00848f730b82) {#structhighlo_1_1_framebuffer_specification_a2229dab742b37a86978a00848f730b82_1a2229dab742b37a86978a00848f730b82}

#### `public bool `[`ClearOnLoad`](#structhighlo_1_1_framebuffer_specification_a0017f6b3448650dca64458c62454ea74_1a0017f6b3448650dca64458c62454ea74) {#structhighlo_1_1_framebuffer_specification_a0017f6b3448650dca64458c62454ea74_1a0017f6b3448650dca64458c62454ea74}

#### `public bool `[`NoResize`](#structhighlo_1_1_framebuffer_specification_a5fe6fe07e5c0c4bb93b362d0650c1f1b_1a5fe6fe07e5c0c4bb93b362d0650c1f1b) {#structhighlo_1_1_framebuffer_specification_a5fe6fe07e5c0c4bb93b362d0650c1f1b_1a5fe6fe07e5c0c4bb93b362d0650c1f1b}

#### `public bool `[`SwapChainTarget`](#structhighlo_1_1_framebuffer_specification_a4c326d34a5ffabf61f00fec10e501ff8_1a4c326d34a5ffabf61f00fec10e501ff8) {#structhighlo_1_1_framebuffer_specification_a4c326d34a5ffabf61f00fec10e501ff8_1a4c326d34a5ffabf61f00fec10e501ff8}

#### `public bool `[`Blend`](#structhighlo_1_1_framebuffer_specification_ae7b7d721cde75554050186fe4f10ef91_1ae7b7d721cde75554050186fe4f10ef91) {#structhighlo_1_1_framebuffer_specification_ae7b7d721cde75554050186fe4f10ef91_1ae7b7d721cde75554050186fe4f10ef91}

#### `public `[`FramebufferBlendMode`](docs-api/api-highlo.md#namespacehighlo_ac957b887a2abf09fc8c98114cbf80304_1ac957b887a2abf09fc8c98114cbf80304)` `[`BlendMode`](#structhighlo_1_1_framebuffer_specification_a19d833ae137105489df843326bd9f902_1a19d833ae137105489df843326bd9f902) {#structhighlo_1_1_framebuffer_specification_a19d833ae137105489df843326bd9f902_1a19d833ae137105489df843326bd9f902}

#### `public `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > `[`ExistingImage`](#structhighlo_1_1_framebuffer_specification_a507fb2b6228e9a099b1f153e7a82e7d9_1a507fb2b6228e9a099b1f153e7a82e7d9) {#structhighlo_1_1_framebuffer_specification_a507fb2b6228e9a099b1f153e7a82e7d9_1a507fb2b6228e9a099b1f153e7a82e7d9}

#### `public std::vector< `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` > `[`ExistingImageLayers`](#structhighlo_1_1_framebuffer_specification_a359616f51e62b9f54c9ca463b3afe729_1a359616f51e62b9f54c9ca463b3afe729) {#structhighlo_1_1_framebuffer_specification_a359616f51e62b9f54c9ca463b3afe729_1a359616f51e62b9f54c9ca463b3afe729}

#### `public std::map< `[`uint32](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e), [Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Texture2D`](docs-api/api-highlo--Texture2D.md#classhighlo_1_1_texture2_d)` > > `[`ExistingImages`](#structhighlo_1_1_framebuffer_specification_a688923989713171602d37b66dde7b4a4_1a688923989713171602d37b66dde7b4a4) {#structhighlo_1_1_framebuffer_specification_a688923989713171602d37b66dde7b4a4_1a688923989713171602d37b66dde7b4a4}

#### `public `[`Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Framebuffer`](docs-api/api-highlo--Framebuffer.md#classhighlo_1_1_framebuffer)` > `[`ExistingFramebuffer`](#structhighlo_1_1_framebuffer_specification_a143d92d98e08f08f67db7d8a30ce0195_1a143d92d98e08f08f67db7d8a30ce0195) {#structhighlo_1_1_framebuffer_specification_a143d92d98e08f08f67db7d8a30ce0195_1a143d92d98e08f08f67db7d8a30ce0195}

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`DebugName`](#structhighlo_1_1_framebuffer_specification_a1d29837d991613ceb0b97df3250e91a6_1a1d29837d991613ceb0b97df3250e91a6) {#structhighlo_1_1_framebuffer_specification_a1d29837d991613ceb0b97df3250e91a6_1a1d29837d991613ceb0b97df3250e91a6}

