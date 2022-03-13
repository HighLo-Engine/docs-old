## struct `ImGuizmo::Context` {#struct_im_guizmo_1_1_context}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`ImDrawList`](docs-api/api-ImDrawList.md#struct_im_draw_list)` * `[`mDrawList`](#struct_im_guizmo_1_1_context_acff2e42d4201a6db0562ceeb9eb633ce_1acff2e42d4201a6db0562ceeb9eb633ce) | 
`public `[`MODE`](docs-api/api-ImGuizmo.md#namespace_im_guizmo_a555eafa3970d08a1afb7b47bce89d05a_1a555eafa3970d08a1afb7b47bce89d05a)` `[`mMode`](#struct_im_guizmo_1_1_context_ae3c169029891f362d7e7f041d5b192c8_1ae3c169029891f362d7e7f041d5b192c8) | 
`public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mViewMat`](#struct_im_guizmo_1_1_context_a2429d91033333412a211fb532538d8c0_1a2429d91033333412a211fb532538d8c0) | 
`public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mProjectionMat`](#struct_im_guizmo_1_1_context_af776e56954aeff6f1e7b1e9f134e9f5c_1af776e56954aeff6f1e7b1e9f134e9f5c) | 
`public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mModel`](#struct_im_guizmo_1_1_context_a9468947554eaba6d819022ad05d5efa3_1a9468947554eaba6d819022ad05d5efa3) | 
`public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mModelInverse`](#struct_im_guizmo_1_1_context_a81c78c6a663dbde86aa49cf071f7e2ba_1a81c78c6a663dbde86aa49cf071f7e2ba) | 
`public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mModelSource`](#struct_im_guizmo_1_1_context_ac335458f9e2244c0789a5f8234a9c8b3_1ac335458f9e2244c0789a5f8234a9c8b3) | 
`public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mModelSourceInverse`](#struct_im_guizmo_1_1_context_a7a2d2e54e3a1ef826a6e90a7d3bb4ed1_1a7a2d2e54e3a1ef826a6e90a7d3bb4ed1) | 
`public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mMVP`](#struct_im_guizmo_1_1_context_a4b24e69e18cba7911ece87ca5f5f586c_1a4b24e69e18cba7911ece87ca5f5f586c) | 
`public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mViewProjection`](#struct_im_guizmo_1_1_context_a7e02b21ad24a59ddba41fd1b9f3f13b5_1a7e02b21ad24a59ddba41fd1b9f3f13b5) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mModelScaleOrigin`](#struct_im_guizmo_1_1_context_a8755da08bfdebd440205c6b8d78e2ce9_1a8755da08bfdebd440205c6b8d78e2ce9) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mCameraEye`](#struct_im_guizmo_1_1_context_a4038eecfc14af895e101e177cbc1b318_1a4038eecfc14af895e101e177cbc1b318) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mCameraRight`](#struct_im_guizmo_1_1_context_a0a0e14b1f3d85dbc4cd6c0e8fc100b80_1a0a0e14b1f3d85dbc4cd6c0e8fc100b80) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mCameraDir`](#struct_im_guizmo_1_1_context_ab78696cf4074e8b605bc029ab808783b_1ab78696cf4074e8b605bc029ab808783b) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mCameraUp`](#struct_im_guizmo_1_1_context_ad2e640bbbae2c7c3e73c40629f505ed1_1ad2e640bbbae2c7c3e73c40629f505ed1) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mRayOrigin`](#struct_im_guizmo_1_1_context_a0a6f80eb79c651e9bb35fdbe7708c0c4_1a0a6f80eb79c651e9bb35fdbe7708c0c4) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mRayVector`](#struct_im_guizmo_1_1_context_a8d7976b68698a58a5c103bda9bbdf022_1a8d7976b68698a58a5c103bda9bbdf022) | 
`public float `[`mRadiusSquareCenter`](#struct_im_guizmo_1_1_context_a946c6ed6d25b25d5fc9c5b3d9b17497a_1a946c6ed6d25b25d5fc9c5b3d9b17497a) | 
`public `[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` `[`mScreenSquareCenter`](#struct_im_guizmo_1_1_context_a1f48ef948eaccea3f2f951bd5784f7a1_1a1f48ef948eaccea3f2f951bd5784f7a1) | 
`public `[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` `[`mScreenSquareMin`](#struct_im_guizmo_1_1_context_a8169e5426fc37c281ba938d105a41b61_1a8169e5426fc37c281ba938d105a41b61) | 
`public `[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` `[`mScreenSquareMax`](#struct_im_guizmo_1_1_context_ad900e053f1214e6139220cba1cfd20e1_1ad900e053f1214e6139220cba1cfd20e1) | 
`public float `[`mScreenFactor`](#struct_im_guizmo_1_1_context_a570ecdbedbd1d024630be1301e4ea3d6_1a570ecdbedbd1d024630be1301e4ea3d6) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mRelativeOrigin`](#struct_im_guizmo_1_1_context_a190969a963855e387dab5833aab79d78_1a190969a963855e387dab5833aab79d78) | 
`public bool `[`mbUsing`](#struct_im_guizmo_1_1_context_a72ccc5bedfd988bed6f603c785240274_1a72ccc5bedfd988bed6f603c785240274) | 
`public bool `[`mbEnable`](#struct_im_guizmo_1_1_context_a0406abf17620e4915a72ea3397583e2b_1a0406abf17620e4915a72ea3397583e2b) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mTranslationPlan`](#struct_im_guizmo_1_1_context_ad39d227ef844b8c5b1548a3bb58636f5_1ad39d227ef844b8c5b1548a3bb58636f5) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mTranslationPlanOrigin`](#struct_im_guizmo_1_1_context_a79f023187b3f0876f0f0bb7c225c1618_1a79f023187b3f0876f0f0bb7c225c1618) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mMatrixOrigin`](#struct_im_guizmo_1_1_context_a94115698f81bc21c36f7688137445d71_1a94115698f81bc21c36f7688137445d71) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mRotationVectorSource`](#struct_im_guizmo_1_1_context_ab59f464330b02277bbebd72278ebe75a_1ab59f464330b02277bbebd72278ebe75a) | 
`public float `[`mRotationAngle`](#struct_im_guizmo_1_1_context_aae64567b714b96ec6f675fa21d5343d9_1aae64567b714b96ec6f675fa21d5343d9) | 
`public float `[`mRotationAngleOrigin`](#struct_im_guizmo_1_1_context_a7d0f1ea2cbab24614629e05b06f2be5d_1a7d0f1ea2cbab24614629e05b06f2be5d) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mScale`](#struct_im_guizmo_1_1_context_a6fa14796982f463fde9c8918182fcf60_1a6fa14796982f463fde9c8918182fcf60) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mScaleValueOrigin`](#struct_im_guizmo_1_1_context_a844c8dafd7bb4cb2df055ce13d2364ae_1a844c8dafd7bb4cb2df055ce13d2364ae) | 
`public float `[`mSaveMousePosx`](#struct_im_guizmo_1_1_context_a137e4458d7a5ea6de1365d2718f16d0f_1a137e4458d7a5ea6de1365d2718f16d0f) | 
`public bool `[`mBelowAxisLimit`](#struct_im_guizmo_1_1_context_afbf779a71ba56635a4d3040a567540dd_1afbf779a71ba56635a4d3040a567540dd) | 
`public bool `[`mBelowPlaneLimit`](#struct_im_guizmo_1_1_context_a8bd4b8c3dd6bab61dcdf5ae6d95b0e03_1a8bd4b8c3dd6bab61dcdf5ae6d95b0e03) | 
`public float `[`mAxisFactor`](#struct_im_guizmo_1_1_context_a23bdd4bc91e44f70afe3016e413dd418_1a23bdd4bc91e44f70afe3016e413dd418) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mBoundsPivot`](#struct_im_guizmo_1_1_context_a9124fcb5c3e2202864302f941326661f_1a9124fcb5c3e2202864302f941326661f) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mBoundsAnchor`](#struct_im_guizmo_1_1_context_abe893ca82aeadcd13a44b49c3d04c753_1abe893ca82aeadcd13a44b49c3d04c753) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mBoundsPlan`](#struct_im_guizmo_1_1_context_ad1871c2dfc16c76eaae7120c47f5c1b2_1ad1871c2dfc16c76eaae7120c47f5c1b2) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mBoundsLocalPivot`](#struct_im_guizmo_1_1_context_aa3fb7b39a6d0ee9a2c465f11cceda877_1aa3fb7b39a6d0ee9a2c465f11cceda877) | 
`public int `[`mBoundsBestAxis`](#struct_im_guizmo_1_1_context_ae581c807a1d8300dc4acdc8fbf2cfb5c_1ae581c807a1d8300dc4acdc8fbf2cfb5c) | 
`public int `[`mBoundsAxis`](#struct_im_guizmo_1_1_context_adfa61b1aa44aaa9b9366e07aa8bb1f95_1adfa61b1aa44aaa9b9366e07aa8bb1f95) | 
`public bool `[`mbUsingBounds`](#struct_im_guizmo_1_1_context_ac50c315c5b44529d52a5b801c97f0030_1ac50c315c5b44529d52a5b801c97f0030) | 
`public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mBoundsMatrix`](#struct_im_guizmo_1_1_context_a0c2da0dacb9021790d114d5a8d3e0204_1a0c2da0dacb9021790d114d5a8d3e0204) | 
`public int `[`mCurrentOperation`](#struct_im_guizmo_1_1_context_a9b40b65b457800c4f838a64b91d51139_1a9b40b65b457800c4f838a64b91d51139) | 
`public float `[`mX`](#struct_im_guizmo_1_1_context_af68e9e0576aef58ec22cafdb287586bc_1af68e9e0576aef58ec22cafdb287586bc) | 
`public float `[`mY`](#struct_im_guizmo_1_1_context_a0fc78e3196cd4c2e608432087ac40a87_1a0fc78e3196cd4c2e608432087ac40a87) | 
`public float `[`mWidth`](#struct_im_guizmo_1_1_context_abe2aadc5ca543332702c50b1417fe273_1abe2aadc5ca543332702c50b1417fe273) | 
`public float `[`mHeight`](#struct_im_guizmo_1_1_context_a09024e7b8dced936ef7e60f385116060_1a09024e7b8dced936ef7e60f385116060) | 
`public float `[`mXMax`](#struct_im_guizmo_1_1_context_a3b8fe979e51c614a628d1273653a6c8f_1a3b8fe979e51c614a628d1273653a6c8f) | 
`public float `[`mYMax`](#struct_im_guizmo_1_1_context_ac347c7f7534f0296673430f91e4256a5_1ac347c7f7534f0296673430f91e4256a5) | 
`public float `[`mDisplayRatio`](#struct_im_guizmo_1_1_context_a5bc1e2260a179f27ba4a70f9a4d657ae_1a5bc1e2260a179f27ba4a70f9a4d657ae) | 
`public bool `[`mIsOrthographic`](#struct_im_guizmo_1_1_context_a6f4d1c77e84636ea268709b9af50458a_1a6f4d1c77e84636ea268709b9af50458a) | 
`public inline  `[`Context`](#struct_im_guizmo_1_1_context_ad1f3d2dca5d36481ae02e0d5c1395c08_1ad1f3d2dca5d36481ae02e0d5c1395c08)`()` | 

### Members

#### `public `[`ImDrawList`](docs-api/api-ImDrawList.md#struct_im_draw_list)` * `[`mDrawList`](#struct_im_guizmo_1_1_context_acff2e42d4201a6db0562ceeb9eb633ce_1acff2e42d4201a6db0562ceeb9eb633ce) {#struct_im_guizmo_1_1_context_acff2e42d4201a6db0562ceeb9eb633ce_1acff2e42d4201a6db0562ceeb9eb633ce}

#### `public `[`MODE`](docs-api/api-ImGuizmo.md#namespace_im_guizmo_a555eafa3970d08a1afb7b47bce89d05a_1a555eafa3970d08a1afb7b47bce89d05a)` `[`mMode`](#struct_im_guizmo_1_1_context_ae3c169029891f362d7e7f041d5b192c8_1ae3c169029891f362d7e7f041d5b192c8) {#struct_im_guizmo_1_1_context_ae3c169029891f362d7e7f041d5b192c8_1ae3c169029891f362d7e7f041d5b192c8}

#### `public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mViewMat`](#struct_im_guizmo_1_1_context_a2429d91033333412a211fb532538d8c0_1a2429d91033333412a211fb532538d8c0) {#struct_im_guizmo_1_1_context_a2429d91033333412a211fb532538d8c0_1a2429d91033333412a211fb532538d8c0}

#### `public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mProjectionMat`](#struct_im_guizmo_1_1_context_af776e56954aeff6f1e7b1e9f134e9f5c_1af776e56954aeff6f1e7b1e9f134e9f5c) {#struct_im_guizmo_1_1_context_af776e56954aeff6f1e7b1e9f134e9f5c_1af776e56954aeff6f1e7b1e9f134e9f5c}

#### `public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mModel`](#struct_im_guizmo_1_1_context_a9468947554eaba6d819022ad05d5efa3_1a9468947554eaba6d819022ad05d5efa3) {#struct_im_guizmo_1_1_context_a9468947554eaba6d819022ad05d5efa3_1a9468947554eaba6d819022ad05d5efa3}

#### `public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mModelInverse`](#struct_im_guizmo_1_1_context_a81c78c6a663dbde86aa49cf071f7e2ba_1a81c78c6a663dbde86aa49cf071f7e2ba) {#struct_im_guizmo_1_1_context_a81c78c6a663dbde86aa49cf071f7e2ba_1a81c78c6a663dbde86aa49cf071f7e2ba}

#### `public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mModelSource`](#struct_im_guizmo_1_1_context_ac335458f9e2244c0789a5f8234a9c8b3_1ac335458f9e2244c0789a5f8234a9c8b3) {#struct_im_guizmo_1_1_context_ac335458f9e2244c0789a5f8234a9c8b3_1ac335458f9e2244c0789a5f8234a9c8b3}

#### `public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mModelSourceInverse`](#struct_im_guizmo_1_1_context_a7a2d2e54e3a1ef826a6e90a7d3bb4ed1_1a7a2d2e54e3a1ef826a6e90a7d3bb4ed1) {#struct_im_guizmo_1_1_context_a7a2d2e54e3a1ef826a6e90a7d3bb4ed1_1a7a2d2e54e3a1ef826a6e90a7d3bb4ed1}

#### `public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mMVP`](#struct_im_guizmo_1_1_context_a4b24e69e18cba7911ece87ca5f5f586c_1a4b24e69e18cba7911ece87ca5f5f586c) {#struct_im_guizmo_1_1_context_a4b24e69e18cba7911ece87ca5f5f586c_1a4b24e69e18cba7911ece87ca5f5f586c}

#### `public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mViewProjection`](#struct_im_guizmo_1_1_context_a7e02b21ad24a59ddba41fd1b9f3f13b5_1a7e02b21ad24a59ddba41fd1b9f3f13b5) {#struct_im_guizmo_1_1_context_a7e02b21ad24a59ddba41fd1b9f3f13b5_1a7e02b21ad24a59ddba41fd1b9f3f13b5}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mModelScaleOrigin`](#struct_im_guizmo_1_1_context_a8755da08bfdebd440205c6b8d78e2ce9_1a8755da08bfdebd440205c6b8d78e2ce9) {#struct_im_guizmo_1_1_context_a8755da08bfdebd440205c6b8d78e2ce9_1a8755da08bfdebd440205c6b8d78e2ce9}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mCameraEye`](#struct_im_guizmo_1_1_context_a4038eecfc14af895e101e177cbc1b318_1a4038eecfc14af895e101e177cbc1b318) {#struct_im_guizmo_1_1_context_a4038eecfc14af895e101e177cbc1b318_1a4038eecfc14af895e101e177cbc1b318}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mCameraRight`](#struct_im_guizmo_1_1_context_a0a0e14b1f3d85dbc4cd6c0e8fc100b80_1a0a0e14b1f3d85dbc4cd6c0e8fc100b80) {#struct_im_guizmo_1_1_context_a0a0e14b1f3d85dbc4cd6c0e8fc100b80_1a0a0e14b1f3d85dbc4cd6c0e8fc100b80}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mCameraDir`](#struct_im_guizmo_1_1_context_ab78696cf4074e8b605bc029ab808783b_1ab78696cf4074e8b605bc029ab808783b) {#struct_im_guizmo_1_1_context_ab78696cf4074e8b605bc029ab808783b_1ab78696cf4074e8b605bc029ab808783b}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mCameraUp`](#struct_im_guizmo_1_1_context_ad2e640bbbae2c7c3e73c40629f505ed1_1ad2e640bbbae2c7c3e73c40629f505ed1) {#struct_im_guizmo_1_1_context_ad2e640bbbae2c7c3e73c40629f505ed1_1ad2e640bbbae2c7c3e73c40629f505ed1}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mRayOrigin`](#struct_im_guizmo_1_1_context_a0a6f80eb79c651e9bb35fdbe7708c0c4_1a0a6f80eb79c651e9bb35fdbe7708c0c4) {#struct_im_guizmo_1_1_context_a0a6f80eb79c651e9bb35fdbe7708c0c4_1a0a6f80eb79c651e9bb35fdbe7708c0c4}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mRayVector`](#struct_im_guizmo_1_1_context_a8d7976b68698a58a5c103bda9bbdf022_1a8d7976b68698a58a5c103bda9bbdf022) {#struct_im_guizmo_1_1_context_a8d7976b68698a58a5c103bda9bbdf022_1a8d7976b68698a58a5c103bda9bbdf022}

#### `public float `[`mRadiusSquareCenter`](#struct_im_guizmo_1_1_context_a946c6ed6d25b25d5fc9c5b3d9b17497a_1a946c6ed6d25b25d5fc9c5b3d9b17497a) {#struct_im_guizmo_1_1_context_a946c6ed6d25b25d5fc9c5b3d9b17497a_1a946c6ed6d25b25d5fc9c5b3d9b17497a}

#### `public `[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` `[`mScreenSquareCenter`](#struct_im_guizmo_1_1_context_a1f48ef948eaccea3f2f951bd5784f7a1_1a1f48ef948eaccea3f2f951bd5784f7a1) {#struct_im_guizmo_1_1_context_a1f48ef948eaccea3f2f951bd5784f7a1_1a1f48ef948eaccea3f2f951bd5784f7a1}

#### `public `[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` `[`mScreenSquareMin`](#struct_im_guizmo_1_1_context_a8169e5426fc37c281ba938d105a41b61_1a8169e5426fc37c281ba938d105a41b61) {#struct_im_guizmo_1_1_context_a8169e5426fc37c281ba938d105a41b61_1a8169e5426fc37c281ba938d105a41b61}

#### `public `[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` `[`mScreenSquareMax`](#struct_im_guizmo_1_1_context_ad900e053f1214e6139220cba1cfd20e1_1ad900e053f1214e6139220cba1cfd20e1) {#struct_im_guizmo_1_1_context_ad900e053f1214e6139220cba1cfd20e1_1ad900e053f1214e6139220cba1cfd20e1}

#### `public float `[`mScreenFactor`](#struct_im_guizmo_1_1_context_a570ecdbedbd1d024630be1301e4ea3d6_1a570ecdbedbd1d024630be1301e4ea3d6) {#struct_im_guizmo_1_1_context_a570ecdbedbd1d024630be1301e4ea3d6_1a570ecdbedbd1d024630be1301e4ea3d6}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mRelativeOrigin`](#struct_im_guizmo_1_1_context_a190969a963855e387dab5833aab79d78_1a190969a963855e387dab5833aab79d78) {#struct_im_guizmo_1_1_context_a190969a963855e387dab5833aab79d78_1a190969a963855e387dab5833aab79d78}

#### `public bool `[`mbUsing`](#struct_im_guizmo_1_1_context_a72ccc5bedfd988bed6f603c785240274_1a72ccc5bedfd988bed6f603c785240274) {#struct_im_guizmo_1_1_context_a72ccc5bedfd988bed6f603c785240274_1a72ccc5bedfd988bed6f603c785240274}

#### `public bool `[`mbEnable`](#struct_im_guizmo_1_1_context_a0406abf17620e4915a72ea3397583e2b_1a0406abf17620e4915a72ea3397583e2b) {#struct_im_guizmo_1_1_context_a0406abf17620e4915a72ea3397583e2b_1a0406abf17620e4915a72ea3397583e2b}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mTranslationPlan`](#struct_im_guizmo_1_1_context_ad39d227ef844b8c5b1548a3bb58636f5_1ad39d227ef844b8c5b1548a3bb58636f5) {#struct_im_guizmo_1_1_context_ad39d227ef844b8c5b1548a3bb58636f5_1ad39d227ef844b8c5b1548a3bb58636f5}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mTranslationPlanOrigin`](#struct_im_guizmo_1_1_context_a79f023187b3f0876f0f0bb7c225c1618_1a79f023187b3f0876f0f0bb7c225c1618) {#struct_im_guizmo_1_1_context_a79f023187b3f0876f0f0bb7c225c1618_1a79f023187b3f0876f0f0bb7c225c1618}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mMatrixOrigin`](#struct_im_guizmo_1_1_context_a94115698f81bc21c36f7688137445d71_1a94115698f81bc21c36f7688137445d71) {#struct_im_guizmo_1_1_context_a94115698f81bc21c36f7688137445d71_1a94115698f81bc21c36f7688137445d71}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mRotationVectorSource`](#struct_im_guizmo_1_1_context_ab59f464330b02277bbebd72278ebe75a_1ab59f464330b02277bbebd72278ebe75a) {#struct_im_guizmo_1_1_context_ab59f464330b02277bbebd72278ebe75a_1ab59f464330b02277bbebd72278ebe75a}

#### `public float `[`mRotationAngle`](#struct_im_guizmo_1_1_context_aae64567b714b96ec6f675fa21d5343d9_1aae64567b714b96ec6f675fa21d5343d9) {#struct_im_guizmo_1_1_context_aae64567b714b96ec6f675fa21d5343d9_1aae64567b714b96ec6f675fa21d5343d9}

#### `public float `[`mRotationAngleOrigin`](#struct_im_guizmo_1_1_context_a7d0f1ea2cbab24614629e05b06f2be5d_1a7d0f1ea2cbab24614629e05b06f2be5d) {#struct_im_guizmo_1_1_context_a7d0f1ea2cbab24614629e05b06f2be5d_1a7d0f1ea2cbab24614629e05b06f2be5d}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mScale`](#struct_im_guizmo_1_1_context_a6fa14796982f463fde9c8918182fcf60_1a6fa14796982f463fde9c8918182fcf60) {#struct_im_guizmo_1_1_context_a6fa14796982f463fde9c8918182fcf60_1a6fa14796982f463fde9c8918182fcf60}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mScaleValueOrigin`](#struct_im_guizmo_1_1_context_a844c8dafd7bb4cb2df055ce13d2364ae_1a844c8dafd7bb4cb2df055ce13d2364ae) {#struct_im_guizmo_1_1_context_a844c8dafd7bb4cb2df055ce13d2364ae_1a844c8dafd7bb4cb2df055ce13d2364ae}

#### `public float `[`mSaveMousePosx`](#struct_im_guizmo_1_1_context_a137e4458d7a5ea6de1365d2718f16d0f_1a137e4458d7a5ea6de1365d2718f16d0f) {#struct_im_guizmo_1_1_context_a137e4458d7a5ea6de1365d2718f16d0f_1a137e4458d7a5ea6de1365d2718f16d0f}

#### `public bool `[`mBelowAxisLimit`](#struct_im_guizmo_1_1_context_afbf779a71ba56635a4d3040a567540dd_1afbf779a71ba56635a4d3040a567540dd) {#struct_im_guizmo_1_1_context_afbf779a71ba56635a4d3040a567540dd_1afbf779a71ba56635a4d3040a567540dd}

#### `public bool `[`mBelowPlaneLimit`](#struct_im_guizmo_1_1_context_a8bd4b8c3dd6bab61dcdf5ae6d95b0e03_1a8bd4b8c3dd6bab61dcdf5ae6d95b0e03) {#struct_im_guizmo_1_1_context_a8bd4b8c3dd6bab61dcdf5ae6d95b0e03_1a8bd4b8c3dd6bab61dcdf5ae6d95b0e03}

#### `public float `[`mAxisFactor`](#struct_im_guizmo_1_1_context_a23bdd4bc91e44f70afe3016e413dd418_1a23bdd4bc91e44f70afe3016e413dd418) {#struct_im_guizmo_1_1_context_a23bdd4bc91e44f70afe3016e413dd418_1a23bdd4bc91e44f70afe3016e413dd418}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mBoundsPivot`](#struct_im_guizmo_1_1_context_a9124fcb5c3e2202864302f941326661f_1a9124fcb5c3e2202864302f941326661f) {#struct_im_guizmo_1_1_context_a9124fcb5c3e2202864302f941326661f_1a9124fcb5c3e2202864302f941326661f}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mBoundsAnchor`](#struct_im_guizmo_1_1_context_abe893ca82aeadcd13a44b49c3d04c753_1abe893ca82aeadcd13a44b49c3d04c753) {#struct_im_guizmo_1_1_context_abe893ca82aeadcd13a44b49c3d04c753_1abe893ca82aeadcd13a44b49c3d04c753}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mBoundsPlan`](#struct_im_guizmo_1_1_context_ad1871c2dfc16c76eaae7120c47f5c1b2_1ad1871c2dfc16c76eaae7120c47f5c1b2) {#struct_im_guizmo_1_1_context_ad1871c2dfc16c76eaae7120c47f5c1b2_1ad1871c2dfc16c76eaae7120c47f5c1b2}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`mBoundsLocalPivot`](#struct_im_guizmo_1_1_context_aa3fb7b39a6d0ee9a2c465f11cceda877_1aa3fb7b39a6d0ee9a2c465f11cceda877) {#struct_im_guizmo_1_1_context_aa3fb7b39a6d0ee9a2c465f11cceda877_1aa3fb7b39a6d0ee9a2c465f11cceda877}

#### `public int `[`mBoundsBestAxis`](#struct_im_guizmo_1_1_context_ae581c807a1d8300dc4acdc8fbf2cfb5c_1ae581c807a1d8300dc4acdc8fbf2cfb5c) {#struct_im_guizmo_1_1_context_ae581c807a1d8300dc4acdc8fbf2cfb5c_1ae581c807a1d8300dc4acdc8fbf2cfb5c}

#### `public int `[`mBoundsAxis`](#struct_im_guizmo_1_1_context_adfa61b1aa44aaa9b9366e07aa8bb1f95_1adfa61b1aa44aaa9b9366e07aa8bb1f95) {#struct_im_guizmo_1_1_context_adfa61b1aa44aaa9b9366e07aa8bb1f95_1adfa61b1aa44aaa9b9366e07aa8bb1f95}

#### `public bool `[`mbUsingBounds`](#struct_im_guizmo_1_1_context_ac50c315c5b44529d52a5b801c97f0030_1ac50c315c5b44529d52a5b801c97f0030) {#struct_im_guizmo_1_1_context_ac50c315c5b44529d52a5b801c97f0030_1ac50c315c5b44529d52a5b801c97f0030}

#### `public `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` `[`mBoundsMatrix`](#struct_im_guizmo_1_1_context_a0c2da0dacb9021790d114d5a8d3e0204_1a0c2da0dacb9021790d114d5a8d3e0204) {#struct_im_guizmo_1_1_context_a0c2da0dacb9021790d114d5a8d3e0204_1a0c2da0dacb9021790d114d5a8d3e0204}

#### `public int `[`mCurrentOperation`](#struct_im_guizmo_1_1_context_a9b40b65b457800c4f838a64b91d51139_1a9b40b65b457800c4f838a64b91d51139) {#struct_im_guizmo_1_1_context_a9b40b65b457800c4f838a64b91d51139_1a9b40b65b457800c4f838a64b91d51139}

#### `public float `[`mX`](#struct_im_guizmo_1_1_context_af68e9e0576aef58ec22cafdb287586bc_1af68e9e0576aef58ec22cafdb287586bc) {#struct_im_guizmo_1_1_context_af68e9e0576aef58ec22cafdb287586bc_1af68e9e0576aef58ec22cafdb287586bc}

#### `public float `[`mY`](#struct_im_guizmo_1_1_context_a0fc78e3196cd4c2e608432087ac40a87_1a0fc78e3196cd4c2e608432087ac40a87) {#struct_im_guizmo_1_1_context_a0fc78e3196cd4c2e608432087ac40a87_1a0fc78e3196cd4c2e608432087ac40a87}

#### `public float `[`mWidth`](#struct_im_guizmo_1_1_context_abe2aadc5ca543332702c50b1417fe273_1abe2aadc5ca543332702c50b1417fe273) {#struct_im_guizmo_1_1_context_abe2aadc5ca543332702c50b1417fe273_1abe2aadc5ca543332702c50b1417fe273}

#### `public float `[`mHeight`](#struct_im_guizmo_1_1_context_a09024e7b8dced936ef7e60f385116060_1a09024e7b8dced936ef7e60f385116060) {#struct_im_guizmo_1_1_context_a09024e7b8dced936ef7e60f385116060_1a09024e7b8dced936ef7e60f385116060}

#### `public float `[`mXMax`](#struct_im_guizmo_1_1_context_a3b8fe979e51c614a628d1273653a6c8f_1a3b8fe979e51c614a628d1273653a6c8f) {#struct_im_guizmo_1_1_context_a3b8fe979e51c614a628d1273653a6c8f_1a3b8fe979e51c614a628d1273653a6c8f}

#### `public float `[`mYMax`](#struct_im_guizmo_1_1_context_ac347c7f7534f0296673430f91e4256a5_1ac347c7f7534f0296673430f91e4256a5) {#struct_im_guizmo_1_1_context_ac347c7f7534f0296673430f91e4256a5_1ac347c7f7534f0296673430f91e4256a5}

#### `public float `[`mDisplayRatio`](#struct_im_guizmo_1_1_context_a5bc1e2260a179f27ba4a70f9a4d657ae_1a5bc1e2260a179f27ba4a70f9a4d657ae) {#struct_im_guizmo_1_1_context_a5bc1e2260a179f27ba4a70f9a4d657ae_1a5bc1e2260a179f27ba4a70f9a4d657ae}

#### `public bool `[`mIsOrthographic`](#struct_im_guizmo_1_1_context_a6f4d1c77e84636ea268709b9af50458a_1a6f4d1c77e84636ea268709b9af50458a) {#struct_im_guizmo_1_1_context_a6f4d1c77e84636ea268709b9af50458a_1a6f4d1c77e84636ea268709b9af50458a}

#### `public inline  `[`Context`](#struct_im_guizmo_1_1_context_ad1f3d2dca5d36481ae02e0d5c1395c08_1ad1f3d2dca5d36481ae02e0d5c1395c08)`()` {#struct_im_guizmo_1_1_context_ad1f3d2dca5d36481ae02e0d5c1395c08_1ad1f3d2dca5d36481ae02e0d5c1395c08}

