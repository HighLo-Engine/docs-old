# namespace `ImGuizmo` {#namespace_im_guizmo}

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`enum `[`MOVETYPE`](#namespace_im_guizmo_aaafcad940e54fe7f6baf60b29bc89df3_1aaafcad940e54fe7f6baf60b29bc89df3)            | 
`enum `[`OPERATION`](#namespace_im_guizmo_a3559e88fd6409ce121ee4d9847867cd1_1a3559e88fd6409ce121ee4d9847867cd1)            | 
`enum `[`MODE`](#namespace_im_guizmo_a555eafa3970d08a1afb7b47bce89d05a_1a555eafa3970d08a1afb7b47bce89d05a)            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`FPU_MatrixF_x_MatrixF`](#namespace_im_guizmo_a680af3a5ed2fc3f9b8f97738c9c569ee_1a680af3a5ed2fc3f9b8f97738c9c569ee)`(const float * a,const float * b,float * r)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Frustum`](#namespace_im_guizmo_add8ac3134a68cd0fff28e6056a2f6fdc_1add8ac3134a68cd0fff28e6056a2f6fdc)`(float left,float right,float bottom,float top,float znear,float zfar,float * m16)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Perspective`](#namespace_im_guizmo_a7827d6bdb722d82924cd005072317507_1a7827d6bdb722d82924cd005072317507)`(float fovyInDegrees,float aspectRatio,float znear,float zfar,float * m16)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Cross`](#namespace_im_guizmo_a4ce35a6d2e403a221701a2e8801d5642_1a4ce35a6d2e403a221701a2e8801d5642)`(const float * a,const float * b,float * r)`            | 
`public float `[`Dot`](#namespace_im_guizmo_aaf7169590757c87a75b7ea5e55bb1e9c_1aaf7169590757c87a75b7ea5e55bb1e9c)`(const float * a,const float * b)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Normalize`](#namespace_im_guizmo_ac921d7551433294879d511fdff43666a_1ac921d7551433294879d511fdff43666a)`(const float * a,float * r)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`LookAt`](#namespace_im_guizmo_adcc417632f77742b2c7d4bf20251b6c7_1adcc417632f77742b2c7d4bf20251b6c7)`(const float * eye,const float * at,const float * up,float * m16)`            | 
`public template<>`  <br/>`T `[`Clamp`](#namespace_im_guizmo_a558cc18ff519a761fa7bca5b5f37146d_1a558cc18ff519a761fa7bca5b5f37146d)`(T x,T y,T z)`            | 
`public template<>`  <br/>`T `[`max`](#namespace_im_guizmo_a0f74448b3175fca54b42a180c5475146_1a0f74448b3175fca54b42a180c5475146)`(T x,T y)`            | 
`public template<>`  <br/>`T `[`min`](#namespace_im_guizmo_a4328433ac685d1b796ba38b82ffba4f2_1a4328433ac685d1b796ba38b82ffba4f2)`(T x,T y)`            | 
`public template<>`  <br/>`bool `[`IsWithin`](#namespace_im_guizmo_a2739ff3837dd31bdac068a456c8b3e61_1a2739ff3837dd31bdac068a456c8b3e61)`(T x,T y,T z)`            | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`makeVect`](#namespace_im_guizmo_a640be01f179c80230cd4b7ee9b298456_1a640be01f179c80230cd4b7ee9b298456)`(float _x,float _y,float _z,float _w)`            | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`makeVect`](#namespace_im_guizmo_a3a4bb5bb52148e39024256b1c17a3701_1a3a4bb5bb52148e39024256b1c17a3701)`(`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` v)`            | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`Normalized`](#namespace_im_guizmo_a1619646543d1daf5ef5b8edc6060dd81_1a1619646543d1daf5ef5b8edc6060dd81)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v)`            | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`Cross`](#namespace_im_guizmo_a5d44a0a59b1be514df303d3050d00638_1a5d44a0a59b1be514df303d3050d00638)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v1,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v2)`            | 
`public float `[`Dot`](#namespace_im_guizmo_a90cad63b0185f78fcb28e68689085cac_1a90cad63b0185f78fcb28e68689085cac)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v1,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v2)`            | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`BuildPlan`](#namespace_im_guizmo_a9957d966cf6e46e6d9a9915d94c6bad9_1a9957d966cf6e46e6d9a9915d94c6bad9)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & p_point1,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & p_normal)`            | 
`public static int `[`GetMoveType`](#namespace_im_guizmo_aa259584865fbf5a16f8cfb754728b269_1aa259584865fbf5a16f8cfb754728b269)`(`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` * gizmoHitProportion)`            | 
`public static int `[`GetRotateType`](#namespace_im_guizmo_a1698197c360c8753072ad473e8d775c6_1a1698197c360c8753072ad473e8d775c6)`()`            | 
`public static int `[`GetScaleType`](#namespace_im_guizmo_a2e1395d73ccd5726455d82d0b7902cac_1a2e1395d73ccd5726455d82d0b7902cac)`()`            | 
`public static `[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` `[`worldToPos`](#namespace_im_guizmo_abb3202afd314281c19295b1ba03f9665_1abb3202afd314281c19295b1ba03f9665)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & worldPos,const `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` & mat,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` position,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` size)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeCameraRay`](#namespace_im_guizmo_a2a49b7afd89c853316c331957562ca35_1a2a49b7afd89c853316c331957562ca35)`(`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & rayOrigin,`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & rayDir,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` position,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` size)`            | 
`public static float `[`GetSegmentLengthClipSpace`](#namespace_im_guizmo_a672e34453f8e0303f8d268e29422fe1d_1a672e34453f8e0303f8d268e29422fe1d)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & start,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & end)`            | 
`public static float `[`GetParallelogram`](#namespace_im_guizmo_a6c9d9890fd2ec8a222b526c1f5290e10_1a6c9d9890fd2ec8a222b526c1f5290e10)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & ptO,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & ptA,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & ptB)`            | 
`public inline `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`PointOnSegment`](#namespace_im_guizmo_afa103333ff11245ca16915bf610f2911_1afa103333ff11245ca16915bf610f2911)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & point,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & vertPos1,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & vertPos2)`            | 
`public static float `[`IntersectRayPlane`](#namespace_im_guizmo_afcffd45f3c36d533705237a661a4b332_1afcffd45f3c36d533705237a661a4b332)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & rOrigin,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & rVector,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & plan)`            | 
`public static bool `[`IsInContextRect`](#namespace_im_guizmo_a3f7680b123eddcae730a33367795f901_1a3f7680b123eddcae730a33367795f901)`(`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` p)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRect`](#namespace_im_guizmo_a69d48f6bcb57c99e0b995ebdcb790d5b_1a69d48f6bcb57c99e0b995ebdcb790d5b)`(float x,float y,float width,float height)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographic`](#namespace_im_guizmo_a45c4330923c4d998dfd5202fadb30670_1a45c4330923c4d998dfd5202fadb30670)`(bool isOrthographic)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetDrawlist`](#namespace_im_guizmo_a4c2edaa770641b630433d4294d536452_1a4c2edaa770641b630433d4294d536452)`()`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BeginFrame`](#namespace_im_guizmo_aea50c7f81d47c99386f6295af150320c_1aea50c7f81d47c99386f6295af150320c)`()`            | 
`public bool `[`IsUsing`](#namespace_im_guizmo_a40c220f60d792ca57bda10a6d440e7ab_1a40c220f60d792ca57bda10a6d440e7ab)`()`            | 
`public bool `[`IsOver`](#namespace_im_guizmo_af44ff2a61ca1758043fb908dc3d1ec63_1af44ff2a61ca1758043fb908dc3d1ec63)`()`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Enable`](#namespace_im_guizmo_adb3922cdf2f3b5cb672d59dbd293b72e_1adb3922cdf2f3b5cb672d59dbd293b72e)`(bool enable)`            | 
`public static float `[`GetUniform`](#namespace_im_guizmo_a6259fe79c48c47e6dc11511cf9479e47_1a6259fe79c48c47e6dc11511cf9479e47)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & position,const `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` & mat)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeContext`](#namespace_im_guizmo_ada8d9e037d6a4bb8399093c11f988135_1ada8d9e037d6a4bb8399093c11f988135)`(const float * view,const float * projection,float * matrix,`[`MODE`](#namespace_im_guizmo_a555eafa3970d08a1afb7b47bce89d05a_1a555eafa3970d08a1afb7b47bce89d05a)` mode)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeColors`](#namespace_im_guizmo_a04598d3d31c4925efa3d341ec15b2d62_1a04598d3d31c4925efa3d341ec15b2d62)`(`[`ImU32`](#_im_gui_2imgui_8h_a118cff4eeb8d00e7d07ce3d6460eed36_1a118cff4eeb8d00e7d07ce3d6460eed36)` * colors,int type,`[`OPERATION`](#namespace_im_guizmo_a3559e88fd6409ce121ee4d9847867cd1_1a3559e88fd6409ce121ee4d9847867cd1)` operation)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeTripodAxisAndVisibility`](#namespace_im_guizmo_abf64e5189af3402036c3bc58b91a48df_1abf64e5189af3402036c3bc58b91a48df)`(int axisIndex,`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & dirAxis,`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & dirPlaneX,`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & dirPlaneY,bool & belowAxisLimit,bool & belowPlaneLimit)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeSnap`](#namespace_im_guizmo_a92bcd3b47781cb634bf55b63d22ba31e_1a92bcd3b47781cb634bf55b63d22ba31e)`(float * value,float snap)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeSnap`](#namespace_im_guizmo_a208cb5f9e99d759a3e197447903f1d83_1a208cb5f9e99d759a3e197447903f1d83)`(`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & value,float * snap)`            | 
`public static float `[`ComputeAngleOnPlan`](#namespace_im_guizmo_a3c0b45d8b3bea5b4a61bff24b900474e_1a3c0b45d8b3bea5b4a61bff24b900474e)`()`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawRotationGizmo`](#namespace_im_guizmo_a7b61a70dfe560938c8b948113b7abfda_1a7b61a70dfe560938c8b948113b7abfda)`(int type)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawHatchedAxis`](#namespace_im_guizmo_aac9c9eab06e6f72be4ef405d800ac48d_1aac9c9eab06e6f72be4ef405d800ac48d)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & axis)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawScaleGizmo`](#namespace_im_guizmo_a7153eeca78fd5dff6d8fce36ec6ba8f5_1a7153eeca78fd5dff6d8fce36ec6ba8f5)`(int type)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawTranslationGizmo`](#namespace_im_guizmo_a4c82f8f1856584d7b938b2c9f50b8732_1a4c82f8f1856584d7b938b2c9f50b8732)`(int type)`            | 
`public static bool `[`CanActivate`](#namespace_im_guizmo_aa077cf24bd11603c77ab04278ddc18f4_1aa077cf24bd11603c77ab04278ddc18f4)`()`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HandleAndDrawLocalBounds`](#namespace_im_guizmo_aa41708bcd5e9b24d862f511eab51909c_1aa41708bcd5e9b24d862f511eab51909c)`(float * bounds,`[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` * matrix,float * snapValues,`[`OPERATION`](#namespace_im_guizmo_a3559e88fd6409ce121ee4d9847867cd1_1a3559e88fd6409ce121ee4d9847867cd1)` operation)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HandleTranslation`](#namespace_im_guizmo_af1ff4f9bb83a8415b1c0c6a44a87dc25_1af1ff4f9bb83a8415b1c0c6a44a87dc25)`(float * matrix,float * deltaMatrix,int & type,float * snap)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HandleScale`](#namespace_im_guizmo_afb163ee9180bbc57ebdd2a70f1c26465_1afb163ee9180bbc57ebdd2a70f1c26465)`(float * matrix,float * deltaMatrix,int & type,float * snap)`            | 
`public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HandleRotation`](#namespace_im_guizmo_ad8220e757a6c484d6fb7812415bbe6ae_1ad8220e757a6c484d6fb7812415bbe6ae)`(float * matrix,float * deltaMatrix,int & type,float * snap)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DecomposeMatrixToComponents`](#namespace_im_guizmo_a53ca6ac6424ad8d35862444510bf3ad2_1a53ca6ac6424ad8d35862444510bf3ad2)`(const float * matrix,float * translation,float * rotation,float * scale)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RecomposeMatrixFromComponents`](#namespace_im_guizmo_a5d04da79377f80a5e6791262b0136f59_1a5d04da79377f80a5e6791262b0136f59)`(const float * translation,const float * rotation,const float * scale,float * matrix)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Manipulate`](#namespace_im_guizmo_ab4c35a3e40befe7014d2456c52d47ccf_1ab4c35a3e40befe7014d2456c52d47ccf)`(const float * view,const float * projection,`[`OPERATION`](#namespace_im_guizmo_a3559e88fd6409ce121ee4d9847867cd1_1a3559e88fd6409ce121ee4d9847867cd1)` operation,`[`MODE`](#namespace_im_guizmo_a555eafa3970d08a1afb7b47bce89d05a_1a555eafa3970d08a1afb7b47bce89d05a)` mode,float * matrix,float * deltaMatrix,float * snap,float * localBounds,float * boundsSnap)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawCube`](#namespace_im_guizmo_a9cbbf448762684bf1fb3bfaa1e9dd832_1a9cbbf448762684bf1fb3bfaa1e9dd832)`(const float * view,const float * projection,const float * matrix)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawGrid`](#namespace_im_guizmo_ac3b3ddf927b904dc238b208f0343a911_1ac3b3ddf927b904dc238b208f0343a911)`(const float * view,const float * projection,const float * matrix,const float gridSize)`            | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ViewManipulate`](#namespace_im_guizmo_aae13b0b77ac0879283eb3f4920625547_1aae13b0b77ac0879283eb3f4920625547)`(float * view,float length,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` position,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` size,`[`ImU32`](#_im_gui_2imgui_8h_a118cff4eeb8d00e7d07ce3d6460eed36_1a118cff4eeb8d00e7d07ce3d6460eed36)` backgroundColor)`            | 
`struct `[`ImGuizmo::vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t) | 
`struct `[`ImGuizmo::matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t) | 
`struct `[`ImGuizmo::Context`](docs-api/api-ImGuizmo--Context.md#struct_im_guizmo_1_1_context) | 

## Members

#### `enum `[`MOVETYPE`](#namespace_im_guizmo_aaafcad940e54fe7f6baf60b29bc89df3_1aaafcad940e54fe7f6baf60b29bc89df3) {#namespace_im_guizmo_aaafcad940e54fe7f6baf60b29bc89df3_1aaafcad940e54fe7f6baf60b29bc89df3}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
NONE            | 
MOVE_X            | 
MOVE_Y            | 
MOVE_Z            | 
MOVE_YZ            | 
MOVE_ZX            | 
MOVE_XY            | 
MOVE_SCREEN            | 
ROTATE_X            | 
ROTATE_Y            | 
ROTATE_Z            | 
ROTATE_SCREEN            | 
SCALE_X            | 
SCALE_Y            | 
SCALE_Z            | 
SCALE_XYZ            | 

#### `enum `[`OPERATION`](#namespace_im_guizmo_a3559e88fd6409ce121ee4d9847867cd1_1a3559e88fd6409ce121ee4d9847867cd1) {#namespace_im_guizmo_a3559e88fd6409ce121ee4d9847867cd1_1a3559e88fd6409ce121ee4d9847867cd1}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
TRANSLATE            | 
ROTATE            | 
SCALE            | 
BOUNDS            | 

#### `enum `[`MODE`](#namespace_im_guizmo_a555eafa3970d08a1afb7b47bce89d05a_1a555eafa3970d08a1afb7b47bce89d05a) {#namespace_im_guizmo_a555eafa3970d08a1afb7b47bce89d05a_1a555eafa3970d08a1afb7b47bce89d05a}

 Values                         | Descriptions                                
--------------------------------|---------------------------------------------
LOCAL            | 
WORLD            | 

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`FPU_MatrixF_x_MatrixF`](#namespace_im_guizmo_a680af3a5ed2fc3f9b8f97738c9c569ee_1a680af3a5ed2fc3f9b8f97738c9c569ee)`(const float * a,const float * b,float * r)` {#namespace_im_guizmo_a680af3a5ed2fc3f9b8f97738c9c569ee_1a680af3a5ed2fc3f9b8f97738c9c569ee}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Frustum`](#namespace_im_guizmo_add8ac3134a68cd0fff28e6056a2f6fdc_1add8ac3134a68cd0fff28e6056a2f6fdc)`(float left,float right,float bottom,float top,float znear,float zfar,float * m16)` {#namespace_im_guizmo_add8ac3134a68cd0fff28e6056a2f6fdc_1add8ac3134a68cd0fff28e6056a2f6fdc}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Perspective`](#namespace_im_guizmo_a7827d6bdb722d82924cd005072317507_1a7827d6bdb722d82924cd005072317507)`(float fovyInDegrees,float aspectRatio,float znear,float zfar,float * m16)` {#namespace_im_guizmo_a7827d6bdb722d82924cd005072317507_1a7827d6bdb722d82924cd005072317507}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Cross`](#namespace_im_guizmo_a4ce35a6d2e403a221701a2e8801d5642_1a4ce35a6d2e403a221701a2e8801d5642)`(const float * a,const float * b,float * r)` {#namespace_im_guizmo_a4ce35a6d2e403a221701a2e8801d5642_1a4ce35a6d2e403a221701a2e8801d5642}

#### `public float `[`Dot`](#namespace_im_guizmo_aaf7169590757c87a75b7ea5e55bb1e9c_1aaf7169590757c87a75b7ea5e55bb1e9c)`(const float * a,const float * b)` {#namespace_im_guizmo_aaf7169590757c87a75b7ea5e55bb1e9c_1aaf7169590757c87a75b7ea5e55bb1e9c}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Normalize`](#namespace_im_guizmo_ac921d7551433294879d511fdff43666a_1ac921d7551433294879d511fdff43666a)`(const float * a,float * r)` {#namespace_im_guizmo_ac921d7551433294879d511fdff43666a_1ac921d7551433294879d511fdff43666a}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`LookAt`](#namespace_im_guizmo_adcc417632f77742b2c7d4bf20251b6c7_1adcc417632f77742b2c7d4bf20251b6c7)`(const float * eye,const float * at,const float * up,float * m16)` {#namespace_im_guizmo_adcc417632f77742b2c7d4bf20251b6c7_1adcc417632f77742b2c7d4bf20251b6c7}

#### `public template<>`  <br/>`T `[`Clamp`](#namespace_im_guizmo_a558cc18ff519a761fa7bca5b5f37146d_1a558cc18ff519a761fa7bca5b5f37146d)`(T x,T y,T z)` {#namespace_im_guizmo_a558cc18ff519a761fa7bca5b5f37146d_1a558cc18ff519a761fa7bca5b5f37146d}

#### `public template<>`  <br/>`T `[`max`](#namespace_im_guizmo_a0f74448b3175fca54b42a180c5475146_1a0f74448b3175fca54b42a180c5475146)`(T x,T y)` {#namespace_im_guizmo_a0f74448b3175fca54b42a180c5475146_1a0f74448b3175fca54b42a180c5475146}

#### `public template<>`  <br/>`T `[`min`](#namespace_im_guizmo_a4328433ac685d1b796ba38b82ffba4f2_1a4328433ac685d1b796ba38b82ffba4f2)`(T x,T y)` {#namespace_im_guizmo_a4328433ac685d1b796ba38b82ffba4f2_1a4328433ac685d1b796ba38b82ffba4f2}

#### `public template<>`  <br/>`bool `[`IsWithin`](#namespace_im_guizmo_a2739ff3837dd31bdac068a456c8b3e61_1a2739ff3837dd31bdac068a456c8b3e61)`(T x,T y,T z)` {#namespace_im_guizmo_a2739ff3837dd31bdac068a456c8b3e61_1a2739ff3837dd31bdac068a456c8b3e61}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`makeVect`](#namespace_im_guizmo_a640be01f179c80230cd4b7ee9b298456_1a640be01f179c80230cd4b7ee9b298456)`(float _x,float _y,float _z,float _w)` {#namespace_im_guizmo_a640be01f179c80230cd4b7ee9b298456_1a640be01f179c80230cd4b7ee9b298456}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`makeVect`](#namespace_im_guizmo_a3a4bb5bb52148e39024256b1c17a3701_1a3a4bb5bb52148e39024256b1c17a3701)`(`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` v)` {#namespace_im_guizmo_a3a4bb5bb52148e39024256b1c17a3701_1a3a4bb5bb52148e39024256b1c17a3701}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`Normalized`](#namespace_im_guizmo_a1619646543d1daf5ef5b8edc6060dd81_1a1619646543d1daf5ef5b8edc6060dd81)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v)` {#namespace_im_guizmo_a1619646543d1daf5ef5b8edc6060dd81_1a1619646543d1daf5ef5b8edc6060dd81}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`Cross`](#namespace_im_guizmo_a5d44a0a59b1be514df303d3050d00638_1a5d44a0a59b1be514df303d3050d00638)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v1,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v2)` {#namespace_im_guizmo_a5d44a0a59b1be514df303d3050d00638_1a5d44a0a59b1be514df303d3050d00638}

#### `public float `[`Dot`](#namespace_im_guizmo_a90cad63b0185f78fcb28e68689085cac_1a90cad63b0185f78fcb28e68689085cac)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v1,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & v2)` {#namespace_im_guizmo_a90cad63b0185f78fcb28e68689085cac_1a90cad63b0185f78fcb28e68689085cac}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`BuildPlan`](#namespace_im_guizmo_a9957d966cf6e46e6d9a9915d94c6bad9_1a9957d966cf6e46e6d9a9915d94c6bad9)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & p_point1,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & p_normal)` {#namespace_im_guizmo_a9957d966cf6e46e6d9a9915d94c6bad9_1a9957d966cf6e46e6d9a9915d94c6bad9}

#### `public static int `[`GetMoveType`](#namespace_im_guizmo_aa259584865fbf5a16f8cfb754728b269_1aa259584865fbf5a16f8cfb754728b269)`(`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` * gizmoHitProportion)` {#namespace_im_guizmo_aa259584865fbf5a16f8cfb754728b269_1aa259584865fbf5a16f8cfb754728b269}

#### `public static int `[`GetRotateType`](#namespace_im_guizmo_a1698197c360c8753072ad473e8d775c6_1a1698197c360c8753072ad473e8d775c6)`()` {#namespace_im_guizmo_a1698197c360c8753072ad473e8d775c6_1a1698197c360c8753072ad473e8d775c6}

#### `public static int `[`GetScaleType`](#namespace_im_guizmo_a2e1395d73ccd5726455d82d0b7902cac_1a2e1395d73ccd5726455d82d0b7902cac)`()` {#namespace_im_guizmo_a2e1395d73ccd5726455d82d0b7902cac_1a2e1395d73ccd5726455d82d0b7902cac}

#### `public static `[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` `[`worldToPos`](#namespace_im_guizmo_abb3202afd314281c19295b1ba03f9665_1abb3202afd314281c19295b1ba03f9665)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & worldPos,const `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` & mat,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` position,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` size)` {#namespace_im_guizmo_abb3202afd314281c19295b1ba03f9665_1abb3202afd314281c19295b1ba03f9665}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeCameraRay`](#namespace_im_guizmo_a2a49b7afd89c853316c331957562ca35_1a2a49b7afd89c853316c331957562ca35)`(`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & rayOrigin,`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & rayDir,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` position,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` size)` {#namespace_im_guizmo_a2a49b7afd89c853316c331957562ca35_1a2a49b7afd89c853316c331957562ca35}

#### `public static float `[`GetSegmentLengthClipSpace`](#namespace_im_guizmo_a672e34453f8e0303f8d268e29422fe1d_1a672e34453f8e0303f8d268e29422fe1d)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & start,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & end)` {#namespace_im_guizmo_a672e34453f8e0303f8d268e29422fe1d_1a672e34453f8e0303f8d268e29422fe1d}

#### `public static float `[`GetParallelogram`](#namespace_im_guizmo_a6c9d9890fd2ec8a222b526c1f5290e10_1a6c9d9890fd2ec8a222b526c1f5290e10)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & ptO,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & ptA,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & ptB)` {#namespace_im_guizmo_a6c9d9890fd2ec8a222b526c1f5290e10_1a6c9d9890fd2ec8a222b526c1f5290e10}

#### `public inline `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`PointOnSegment`](#namespace_im_guizmo_afa103333ff11245ca16915bf610f2911_1afa103333ff11245ca16915bf610f2911)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & point,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & vertPos1,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & vertPos2)` {#namespace_im_guizmo_afa103333ff11245ca16915bf610f2911_1afa103333ff11245ca16915bf610f2911}

#### `public static float `[`IntersectRayPlane`](#namespace_im_guizmo_afcffd45f3c36d533705237a661a4b332_1afcffd45f3c36d533705237a661a4b332)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & rOrigin,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & rVector,const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & plan)` {#namespace_im_guizmo_afcffd45f3c36d533705237a661a4b332_1afcffd45f3c36d533705237a661a4b332}

#### `public static bool `[`IsInContextRect`](#namespace_im_guizmo_a3f7680b123eddcae730a33367795f901_1a3f7680b123eddcae730a33367795f901)`(`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` p)` {#namespace_im_guizmo_a3f7680b123eddcae730a33367795f901_1a3f7680b123eddcae730a33367795f901}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetRect`](#namespace_im_guizmo_a69d48f6bcb57c99e0b995ebdcb790d5b_1a69d48f6bcb57c99e0b995ebdcb790d5b)`(float x,float y,float width,float height)` {#namespace_im_guizmo_a69d48f6bcb57c99e0b995ebdcb790d5b_1a69d48f6bcb57c99e0b995ebdcb790d5b}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetOrthographic`](#namespace_im_guizmo_a45c4330923c4d998dfd5202fadb30670_1a45c4330923c4d998dfd5202fadb30670)`(bool isOrthographic)` {#namespace_im_guizmo_a45c4330923c4d998dfd5202fadb30670_1a45c4330923c4d998dfd5202fadb30670}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetDrawlist`](#namespace_im_guizmo_a4c2edaa770641b630433d4294d536452_1a4c2edaa770641b630433d4294d536452)`()` {#namespace_im_guizmo_a4c2edaa770641b630433d4294d536452_1a4c2edaa770641b630433d4294d536452}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`BeginFrame`](#namespace_im_guizmo_aea50c7f81d47c99386f6295af150320c_1aea50c7f81d47c99386f6295af150320c)`()` {#namespace_im_guizmo_aea50c7f81d47c99386f6295af150320c_1aea50c7f81d47c99386f6295af150320c}

#### `public bool `[`IsUsing`](#namespace_im_guizmo_a40c220f60d792ca57bda10a6d440e7ab_1a40c220f60d792ca57bda10a6d440e7ab)`()` {#namespace_im_guizmo_a40c220f60d792ca57bda10a6d440e7ab_1a40c220f60d792ca57bda10a6d440e7ab}

#### `public bool `[`IsOver`](#namespace_im_guizmo_af44ff2a61ca1758043fb908dc3d1ec63_1af44ff2a61ca1758043fb908dc3d1ec63)`()` {#namespace_im_guizmo_af44ff2a61ca1758043fb908dc3d1ec63_1af44ff2a61ca1758043fb908dc3d1ec63}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Enable`](#namespace_im_guizmo_adb3922cdf2f3b5cb672d59dbd293b72e_1adb3922cdf2f3b5cb672d59dbd293b72e)`(bool enable)` {#namespace_im_guizmo_adb3922cdf2f3b5cb672d59dbd293b72e_1adb3922cdf2f3b5cb672d59dbd293b72e}

#### `public static float `[`GetUniform`](#namespace_im_guizmo_a6259fe79c48c47e6dc11511cf9479e47_1a6259fe79c48c47e6dc11511cf9479e47)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & position,const `[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` & mat)` {#namespace_im_guizmo_a6259fe79c48c47e6dc11511cf9479e47_1a6259fe79c48c47e6dc11511cf9479e47}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeContext`](#namespace_im_guizmo_ada8d9e037d6a4bb8399093c11f988135_1ada8d9e037d6a4bb8399093c11f988135)`(const float * view,const float * projection,float * matrix,`[`MODE`](#namespace_im_guizmo_a555eafa3970d08a1afb7b47bce89d05a_1a555eafa3970d08a1afb7b47bce89d05a)` mode)` {#namespace_im_guizmo_ada8d9e037d6a4bb8399093c11f988135_1ada8d9e037d6a4bb8399093c11f988135}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeColors`](#namespace_im_guizmo_a04598d3d31c4925efa3d341ec15b2d62_1a04598d3d31c4925efa3d341ec15b2d62)`(`[`ImU32`](#_im_gui_2imgui_8h_a118cff4eeb8d00e7d07ce3d6460eed36_1a118cff4eeb8d00e7d07ce3d6460eed36)` * colors,int type,`[`OPERATION`](#namespace_im_guizmo_a3559e88fd6409ce121ee4d9847867cd1_1a3559e88fd6409ce121ee4d9847867cd1)` operation)` {#namespace_im_guizmo_a04598d3d31c4925efa3d341ec15b2d62_1a04598d3d31c4925efa3d341ec15b2d62}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeTripodAxisAndVisibility`](#namespace_im_guizmo_abf64e5189af3402036c3bc58b91a48df_1abf64e5189af3402036c3bc58b91a48df)`(int axisIndex,`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & dirAxis,`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & dirPlaneX,`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & dirPlaneY,bool & belowAxisLimit,bool & belowPlaneLimit)` {#namespace_im_guizmo_abf64e5189af3402036c3bc58b91a48df_1abf64e5189af3402036c3bc58b91a48df}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeSnap`](#namespace_im_guizmo_a92bcd3b47781cb634bf55b63d22ba31e_1a92bcd3b47781cb634bf55b63d22ba31e)`(float * value,float snap)` {#namespace_im_guizmo_a92bcd3b47781cb634bf55b63d22ba31e_1a92bcd3b47781cb634bf55b63d22ba31e}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ComputeSnap`](#namespace_im_guizmo_a208cb5f9e99d759a3e197447903f1d83_1a208cb5f9e99d759a3e197447903f1d83)`(`[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & value,float * snap)` {#namespace_im_guizmo_a208cb5f9e99d759a3e197447903f1d83_1a208cb5f9e99d759a3e197447903f1d83}

#### `public static float `[`ComputeAngleOnPlan`](#namespace_im_guizmo_a3c0b45d8b3bea5b4a61bff24b900474e_1a3c0b45d8b3bea5b4a61bff24b900474e)`()` {#namespace_im_guizmo_a3c0b45d8b3bea5b4a61bff24b900474e_1a3c0b45d8b3bea5b4a61bff24b900474e}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawRotationGizmo`](#namespace_im_guizmo_a7b61a70dfe560938c8b948113b7abfda_1a7b61a70dfe560938c8b948113b7abfda)`(int type)` {#namespace_im_guizmo_a7b61a70dfe560938c8b948113b7abfda_1a7b61a70dfe560938c8b948113b7abfda}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawHatchedAxis`](#namespace_im_guizmo_aac9c9eab06e6f72be4ef405d800ac48d_1aac9c9eab06e6f72be4ef405d800ac48d)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & axis)` {#namespace_im_guizmo_aac9c9eab06e6f72be4ef405d800ac48d_1aac9c9eab06e6f72be4ef405d800ac48d}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawScaleGizmo`](#namespace_im_guizmo_a7153eeca78fd5dff6d8fce36ec6ba8f5_1a7153eeca78fd5dff6d8fce36ec6ba8f5)`(int type)` {#namespace_im_guizmo_a7153eeca78fd5dff6d8fce36ec6ba8f5_1a7153eeca78fd5dff6d8fce36ec6ba8f5}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawTranslationGizmo`](#namespace_im_guizmo_a4c82f8f1856584d7b938b2c9f50b8732_1a4c82f8f1856584d7b938b2c9f50b8732)`(int type)` {#namespace_im_guizmo_a4c82f8f1856584d7b938b2c9f50b8732_1a4c82f8f1856584d7b938b2c9f50b8732}

#### `public static bool `[`CanActivate`](#namespace_im_guizmo_aa077cf24bd11603c77ab04278ddc18f4_1aa077cf24bd11603c77ab04278ddc18f4)`()` {#namespace_im_guizmo_aa077cf24bd11603c77ab04278ddc18f4_1aa077cf24bd11603c77ab04278ddc18f4}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HandleAndDrawLocalBounds`](#namespace_im_guizmo_aa41708bcd5e9b24d862f511eab51909c_1aa41708bcd5e9b24d862f511eab51909c)`(float * bounds,`[`matrix_t`](docs-api/api-ImGuizmo--matrix_t.md#struct_im_guizmo_1_1matrix__t)` * matrix,float * snapValues,`[`OPERATION`](#namespace_im_guizmo_a3559e88fd6409ce121ee4d9847867cd1_1a3559e88fd6409ce121ee4d9847867cd1)` operation)` {#namespace_im_guizmo_aa41708bcd5e9b24d862f511eab51909c_1aa41708bcd5e9b24d862f511eab51909c}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HandleTranslation`](#namespace_im_guizmo_af1ff4f9bb83a8415b1c0c6a44a87dc25_1af1ff4f9bb83a8415b1c0c6a44a87dc25)`(float * matrix,float * deltaMatrix,int & type,float * snap)` {#namespace_im_guizmo_af1ff4f9bb83a8415b1c0c6a44a87dc25_1af1ff4f9bb83a8415b1c0c6a44a87dc25}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HandleScale`](#namespace_im_guizmo_afb163ee9180bbc57ebdd2a70f1c26465_1afb163ee9180bbc57ebdd2a70f1c26465)`(float * matrix,float * deltaMatrix,int & type,float * snap)` {#namespace_im_guizmo_afb163ee9180bbc57ebdd2a70f1c26465_1afb163ee9180bbc57ebdd2a70f1c26465}

#### `public static `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`HandleRotation`](#namespace_im_guizmo_ad8220e757a6c484d6fb7812415bbe6ae_1ad8220e757a6c484d6fb7812415bbe6ae)`(float * matrix,float * deltaMatrix,int & type,float * snap)` {#namespace_im_guizmo_ad8220e757a6c484d6fb7812415bbe6ae_1ad8220e757a6c484d6fb7812415bbe6ae}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DecomposeMatrixToComponents`](#namespace_im_guizmo_a53ca6ac6424ad8d35862444510bf3ad2_1a53ca6ac6424ad8d35862444510bf3ad2)`(const float * matrix,float * translation,float * rotation,float * scale)` {#namespace_im_guizmo_a53ca6ac6424ad8d35862444510bf3ad2_1a53ca6ac6424ad8d35862444510bf3ad2}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RecomposeMatrixFromComponents`](#namespace_im_guizmo_a5d04da79377f80a5e6791262b0136f59_1a5d04da79377f80a5e6791262b0136f59)`(const float * translation,const float * rotation,const float * scale,float * matrix)` {#namespace_im_guizmo_a5d04da79377f80a5e6791262b0136f59_1a5d04da79377f80a5e6791262b0136f59}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Manipulate`](#namespace_im_guizmo_ab4c35a3e40befe7014d2456c52d47ccf_1ab4c35a3e40befe7014d2456c52d47ccf)`(const float * view,const float * projection,`[`OPERATION`](#namespace_im_guizmo_a3559e88fd6409ce121ee4d9847867cd1_1a3559e88fd6409ce121ee4d9847867cd1)` operation,`[`MODE`](#namespace_im_guizmo_a555eafa3970d08a1afb7b47bce89d05a_1a555eafa3970d08a1afb7b47bce89d05a)` mode,float * matrix,float * deltaMatrix,float * snap,float * localBounds,float * boundsSnap)` {#namespace_im_guizmo_ab4c35a3e40befe7014d2456c52d47ccf_1ab4c35a3e40befe7014d2456c52d47ccf}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawCube`](#namespace_im_guizmo_a9cbbf448762684bf1fb3bfaa1e9dd832_1a9cbbf448762684bf1fb3bfaa1e9dd832)`(const float * view,const float * projection,const float * matrix)` {#namespace_im_guizmo_a9cbbf448762684bf1fb3bfaa1e9dd832_1a9cbbf448762684bf1fb3bfaa1e9dd832}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`DrawGrid`](#namespace_im_guizmo_ac3b3ddf927b904dc238b208f0343a911_1ac3b3ddf927b904dc238b208f0343a911)`(const float * view,const float * projection,const float * matrix,const float gridSize)` {#namespace_im_guizmo_ac3b3ddf927b904dc238b208f0343a911_1ac3b3ddf927b904dc238b208f0343a911}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ViewManipulate`](#namespace_im_guizmo_aae13b0b77ac0879283eb3f4920625547_1aae13b0b77ac0879283eb3f4920625547)`(float * view,float length,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` position,`[`ImVec2`](docs-api/api-ImVec2.md#struct_im_vec2)` size,`[`ImU32`](#_im_gui_2imgui_8h_a118cff4eeb8d00e7d07ce3d6460eed36_1a118cff4eeb8d00e7d07ce3d6460eed36)` backgroundColor)` {#namespace_im_guizmo_aae13b0b77ac0879283eb3f4920625547_1aae13b0b77ac0879283eb3f4920625547}

