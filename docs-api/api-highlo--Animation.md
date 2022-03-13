## class `highlo::Animation` {#classhighlo_1_1_animation}

```
class highlo::Animation
  : public highlo::IsSharedReference
```

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Name`](#classhighlo_1_1_animation_ae09420ee9d1ad984b30323c3d8b420ec_1ae09420ee9d1ad984b30323c3d8b420ec) | 
`public float `[`Duration`](#classhighlo_1_1_animation_ab035e9e052a409a91bdba75b28dd0a9b_1ab035e9e052a409a91bdba75b28dd0a9b) | 
`public float `[`TicksPerSecond`](#classhighlo_1_1_animation_ad604f5f8f625eaf76c1f2a3acea4a950_1ad604f5f8f625eaf76c1f2a3acea4a950) | 
`public float `[`AnimationSpeed`](#classhighlo_1_1_animation_a129ca3ab929884a74429216f9d8a53ee_1a129ca3ab929884a74429216f9d8a53ee) | 
`public float `[`CurrentAnimationTime`](#classhighlo_1_1_animation_a6e09ce7b567c4c910118e24d273cb853_1a6e09ce7b567c4c910118e24d273cb853) | 
`public float `[`AnimationSpeedDenominator`](#classhighlo_1_1_animation_aebd1268762297a5f8d23abea86b9aab6_1aebd1268762297a5f8d23abea86b9aab6) | 
`public bool `[`ShouldLoopAnimation`](#classhighlo_1_1_animation_a5f35363c2aca4da5cfb0ab198e36ba6c_1a5f35363c2aca4da5cfb0ab198e36ba6c) | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Animation`](#classhighlo_1_1_animation_a90fa1faf13000d98e47e16ccdb2d0ab0_1a90fa1faf13000d98e47e16ccdb2d0ab0)`() = default` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Animation`](#classhighlo_1_1_animation_aec0c6ccba9bc72fd8fd7c53f44bb79ce_1aec0c6ccba9bc72fd8fd7c53f44bb79ce)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,float duration,float ticksPerSecond,glm::mat4 inverseTransform,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` boneCount,`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` rootBone,glm::mat4 correctionMatrix)` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsPlaying`](#classhighlo_1_1_animation_a374efa782c1a795290c6db3636d31e01_1a374efa782c1a795290c6db3636d31e01)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Play`](#classhighlo_1_1_animation_a03b53c5cb180e54c22e2bf1131676f58_1a03b53c5cb180e54c22e2bf1131676f58)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Pause`](#classhighlo_1_1_animation_a6db1796a5839bda3f90c0b2ac6db0e53_1a6db1796a5839bda3f90c0b2ac6db0e53)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Stop`](#classhighlo_1_1_animation_aa60eb227d577c5b38ebf0fc85dfd82ae_1aa60eb227d577c5b38ebf0fc85dfd82ae)`()` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_animation_a33e99b8647cee1e534f2b8c24d09b376_1a33e99b8647cee1e534f2b8c24d09b376)`(`[`Timestep`](docs-api/api-highlo.md#namespacehighlo_ac84bb12650f6f41e650f8b0e43d2b24b_1ac84bb12650f6f41e650f8b0e43d2b24b)` ts)` | 
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::mat4 * `[`GetCurrentPoseTransforms`](#classhighlo_1_1_animation_a2324faa6bc9f8adb2f141ab4adcb4126_1a2324faa6bc9f8adb2f141ab4adcb4126)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::mat4 & `[`GetCorrectionMatrix`](#classhighlo_1_1_animation_acc6a97c7b1d8556a3dd8b175fdfc243f_1acc6a97c7b1d8556a3dd8b175fdfc243f)`()` | 
`public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::mat4 & `[`GetCorrectionMatrix`](#classhighlo_1_1_animation_a180b176635a9b5197a76f8affd308a55_1a180b176635a9b5197a76f8affd308a55)`() const` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` * `[`FindBone`](#classhighlo_1_1_animation_a652aad55c35b4f6c4d7b0dcfe5a46ffb_1a652aad55c35b4f6c4d7b0dcfe5a46ffb)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ForEachBone`](#classhighlo_1_1_animation_ac05185ae2c255475969af01e17fd7cb3_1ac05185ae2c255475969af01e17fd7cb3)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone,const std::function< `[`void](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)([Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone) &)`> & lambda)` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & `[`GetRootBone`](#classhighlo_1_1_animation_a51881a65d03dd14d1f6ea6b4804caa90_1a51881a65d03dd14d1f6ea6b4804caa90)`()` | 
`public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & `[`GetRootBone`](#classhighlo_1_1_animation_ae44e875ea2533801d2379c618ab58e08_1ae44e875ea2533801d2379c618ab58e08)`() const` | 
`private glm::mat4 `[`m_InverseTransform`](#classhighlo_1_1_animation_1a1ad041d1188c5a11e8748a9d8ba524b2) | 
`private glm::mat4 `[`m_CorrectionMatrix`](#classhighlo_1_1_animation_1a399f79a18343c91834bf173f88ca1a83) | 
`private `[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` `[`m_RootBone`](#classhighlo_1_1_animation_1a77a92f8a05d4645f6cd84607b0097f2e) | 
`private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_BoneCount`](#classhighlo_1_1_animation_1ac57a024dd931e1f0eeba8925129c361a) | 
`private bool `[`m_IsPlaying`](#classhighlo_1_1_animation_1aa1acf7a231f3c86065f0436ff19571e8) | 
`private glm::mat4 `[`m_BoneFrameTransforms`](#classhighlo_1_1_animation_1ad7129c212f2b71b8b37b5d3077edd275) | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CalculateFinalBoneTransforms`](#classhighlo_1_1_animation_1a9bd4116402fbcb063120fdf048b1c66a)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone,glm::mat4 parentTransform,float animation_time)` | 
`private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AddBoneTransform`](#classhighlo_1_1_animation_1a2ca97fa8025e1c0e488c2a941636a32f)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone)` | 
`private std::pair< `[`uint64](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad), [uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` > `[`GetPreviousAndNextFrames`](#classhighlo_1_1_animation_1a1cc31e8d6e0e1c518c8141b0ef8cb97b)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone,float animation_time)` | 
`private float `[`CalculateProgression`](#classhighlo_1_1_animation_1ae0e6621f5f1d9e1f3eab6bcb14ab761a)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone,`[`uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` previous_frame_index,`[`uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` next_frame_index,float animation_time)` | 
`private `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`InterpolatePoses`](#classhighlo_1_1_animation_1a60878cf67966f9cf85fa693913307e00)`(`[`BoneTransform`](docs-api/api-highlo--BoneTransform.md#classhighlo_1_1_bone_transform)` previous_pose,`[`BoneTransform`](docs-api/api-highlo--BoneTransform.md#classhighlo_1_1_bone_transform)` next_pose,float progression)` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Animation`](#classhighlo_1_1_animation)` > `[`Create`](#classhighlo_1_1_animation_ac5a49048e3bd3b419861e632d45ffaa2_1ac5a49048e3bd3b419861e632d45ffaa2)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,float duration,float ticksPerSecond,glm::mat4 inverseTransform,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` boneCount,`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` rootBone,glm::mat4 correctionMatrix)` | 

### Members

#### `public `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` `[`Name`](#classhighlo_1_1_animation_ae09420ee9d1ad984b30323c3d8b420ec_1ae09420ee9d1ad984b30323c3d8b420ec) {#classhighlo_1_1_animation_ae09420ee9d1ad984b30323c3d8b420ec_1ae09420ee9d1ad984b30323c3d8b420ec}

#### `public float `[`Duration`](#classhighlo_1_1_animation_ab035e9e052a409a91bdba75b28dd0a9b_1ab035e9e052a409a91bdba75b28dd0a9b) {#classhighlo_1_1_animation_ab035e9e052a409a91bdba75b28dd0a9b_1ab035e9e052a409a91bdba75b28dd0a9b}

#### `public float `[`TicksPerSecond`](#classhighlo_1_1_animation_ad604f5f8f625eaf76c1f2a3acea4a950_1ad604f5f8f625eaf76c1f2a3acea4a950) {#classhighlo_1_1_animation_ad604f5f8f625eaf76c1f2a3acea4a950_1ad604f5f8f625eaf76c1f2a3acea4a950}

#### `public float `[`AnimationSpeed`](#classhighlo_1_1_animation_a129ca3ab929884a74429216f9d8a53ee_1a129ca3ab929884a74429216f9d8a53ee) {#classhighlo_1_1_animation_a129ca3ab929884a74429216f9d8a53ee_1a129ca3ab929884a74429216f9d8a53ee}

#### `public float `[`CurrentAnimationTime`](#classhighlo_1_1_animation_a6e09ce7b567c4c910118e24d273cb853_1a6e09ce7b567c4c910118e24d273cb853) {#classhighlo_1_1_animation_a6e09ce7b567c4c910118e24d273cb853_1a6e09ce7b567c4c910118e24d273cb853}

#### `public float `[`AnimationSpeedDenominator`](#classhighlo_1_1_animation_aebd1268762297a5f8d23abea86b9aab6_1aebd1268762297a5f8d23abea86b9aab6) {#classhighlo_1_1_animation_aebd1268762297a5f8d23abea86b9aab6_1aebd1268762297a5f8d23abea86b9aab6}

#### `public bool `[`ShouldLoopAnimation`](#classhighlo_1_1_animation_a5f35363c2aca4da5cfb0ab198e36ba6c_1a5f35363c2aca4da5cfb0ab198e36ba6c) {#classhighlo_1_1_animation_a5f35363c2aca4da5cfb0ab198e36ba6c_1a5f35363c2aca4da5cfb0ab198e36ba6c}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Animation`](#classhighlo_1_1_animation_a90fa1faf13000d98e47e16ccdb2d0ab0_1a90fa1faf13000d98e47e16ccdb2d0ab0)`() = default` {#classhighlo_1_1_animation_a90fa1faf13000d98e47e16ccdb2d0ab0_1a90fa1faf13000d98e47e16ccdb2d0ab0}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Animation`](#classhighlo_1_1_animation_aec0c6ccba9bc72fd8fd7c53f44bb79ce_1aec0c6ccba9bc72fd8fd7c53f44bb79ce)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,float duration,float ticksPerSecond,glm::mat4 inverseTransform,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` boneCount,`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` rootBone,glm::mat4 correctionMatrix)` {#classhighlo_1_1_animation_aec0c6ccba9bc72fd8fd7c53f44bb79ce_1aec0c6ccba9bc72fd8fd7c53f44bb79ce}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` bool `[`IsPlaying`](#classhighlo_1_1_animation_a374efa782c1a795290c6db3636d31e01_1a374efa782c1a795290c6db3636d31e01)`() const` {#classhighlo_1_1_animation_a374efa782c1a795290c6db3636d31e01_1a374efa782c1a795290c6db3636d31e01}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Play`](#classhighlo_1_1_animation_a03b53c5cb180e54c22e2bf1131676f58_1a03b53c5cb180e54c22e2bf1131676f58)`()` {#classhighlo_1_1_animation_a03b53c5cb180e54c22e2bf1131676f58_1a03b53c5cb180e54c22e2bf1131676f58}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Pause`](#classhighlo_1_1_animation_a6db1796a5839bda3f90c0b2ac6db0e53_1a6db1796a5839bda3f90c0b2ac6db0e53)`()` {#classhighlo_1_1_animation_a6db1796a5839bda3f90c0b2ac6db0e53_1a6db1796a5839bda3f90c0b2ac6db0e53}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Stop`](#classhighlo_1_1_animation_aa60eb227d577c5b38ebf0fc85dfd82ae_1aa60eb227d577c5b38ebf0fc85dfd82ae)`()` {#classhighlo_1_1_animation_aa60eb227d577c5b38ebf0fc85dfd82ae_1aa60eb227d577c5b38ebf0fc85dfd82ae}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Update`](#classhighlo_1_1_animation_a33e99b8647cee1e534f2b8c24d09b376_1a33e99b8647cee1e534f2b8c24d09b376)`(`[`Timestep`](docs-api/api-highlo.md#namespacehighlo_ac84bb12650f6f41e650f8b0e43d2b24b_1ac84bb12650f6f41e650f8b0e43d2b24b)` ts)` {#classhighlo_1_1_animation_a33e99b8647cee1e534f2b8c24d09b376_1a33e99b8647cee1e534f2b8c24d09b376}

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::mat4 * `[`GetCurrentPoseTransforms`](#classhighlo_1_1_animation_a2324faa6bc9f8adb2f141ab4adcb4126_1a2324faa6bc9f8adb2f141ab4adcb4126)`()` {#classhighlo_1_1_animation_a2324faa6bc9f8adb2f141ab4adcb4126_1a2324faa6bc9f8adb2f141ab4adcb4126}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` glm::mat4 & `[`GetCorrectionMatrix`](#classhighlo_1_1_animation_acc6a97c7b1d8556a3dd8b175fdfc243f_1acc6a97c7b1d8556a3dd8b175fdfc243f)`()` {#classhighlo_1_1_animation_acc6a97c7b1d8556a3dd8b175fdfc243f_1acc6a97c7b1d8556a3dd8b175fdfc243f}

#### `public inline `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` const glm::mat4 & `[`GetCorrectionMatrix`](#classhighlo_1_1_animation_a180b176635a9b5197a76f8affd308a55_1a180b176635a9b5197a76f8affd308a55)`() const` {#classhighlo_1_1_animation_a180b176635a9b5197a76f8affd308a55_1a180b176635a9b5197a76f8affd308a55}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` * `[`FindBone`](#classhighlo_1_1_animation_a652aad55c35b4f6c4d7b0dcfe5a46ffb_1a652aad55c35b4f6c4d7b0dcfe5a46ffb)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name)` {#classhighlo_1_1_animation_a652aad55c35b4f6c4d7b0dcfe5a46ffb_1a652aad55c35b4f6c4d7b0dcfe5a46ffb}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ForEachBone`](#classhighlo_1_1_animation_ac05185ae2c255475969af01e17fd7cb3_1ac05185ae2c255475969af01e17fd7cb3)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone,const std::function< `[`void](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)([Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone) &)`> & lambda)` {#classhighlo_1_1_animation_ac05185ae2c255475969af01e17fd7cb3_1ac05185ae2c255475969af01e17fd7cb3}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & `[`GetRootBone`](#classhighlo_1_1_animation_a51881a65d03dd14d1f6ea6b4804caa90_1a51881a65d03dd14d1f6ea6b4804caa90)`()` {#classhighlo_1_1_animation_a51881a65d03dd14d1f6ea6b4804caa90_1a51881a65d03dd14d1f6ea6b4804caa90}

#### `public inline `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea) const [Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & `[`GetRootBone`](#classhighlo_1_1_animation_ae44e875ea2533801d2379c618ab58e08_1ae44e875ea2533801d2379c618ab58e08)`() const` {#classhighlo_1_1_animation_ae44e875ea2533801d2379c618ab58e08_1ae44e875ea2533801d2379c618ab58e08}

#### `private glm::mat4 `[`m_InverseTransform`](#classhighlo_1_1_animation_1a1ad041d1188c5a11e8748a9d8ba524b2) {#classhighlo_1_1_animation_1a1ad041d1188c5a11e8748a9d8ba524b2}

#### `private glm::mat4 `[`m_CorrectionMatrix`](#classhighlo_1_1_animation_1a399f79a18343c91834bf173f88ca1a83) {#classhighlo_1_1_animation_1a399f79a18343c91834bf173f88ca1a83}

#### `private `[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` `[`m_RootBone`](#classhighlo_1_1_animation_1a77a92f8a05d4645f6cd84607b0097f2e) {#classhighlo_1_1_animation_1a77a92f8a05d4645f6cd84607b0097f2e}

#### `private `[`uint32`](#_base_types_8h_a1134b580f8da4de94ca6b1de4d37975e_1a1134b580f8da4de94ca6b1de4d37975e)` `[`m_BoneCount`](#classhighlo_1_1_animation_1ac57a024dd931e1f0eeba8925129c361a) {#classhighlo_1_1_animation_1ac57a024dd931e1f0eeba8925129c361a}

#### `private bool `[`m_IsPlaying`](#classhighlo_1_1_animation_1aa1acf7a231f3c86065f0436ff19571e8) {#classhighlo_1_1_animation_1aa1acf7a231f3c86065f0436ff19571e8}

#### `private glm::mat4 `[`m_BoneFrameTransforms`](#classhighlo_1_1_animation_1ad7129c212f2b71b8b37b5d3077edd275) {#classhighlo_1_1_animation_1ad7129c212f2b71b8b37b5d3077edd275}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`CalculateFinalBoneTransforms`](#classhighlo_1_1_animation_1a9bd4116402fbcb063120fdf048b1c66a)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone,glm::mat4 parentTransform,float animation_time)` {#classhighlo_1_1_animation_1a9bd4116402fbcb063120fdf048b1c66a}

#### `private `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AddBoneTransform`](#classhighlo_1_1_animation_1a2ca97fa8025e1c0e488c2a941636a32f)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone)` {#classhighlo_1_1_animation_1a2ca97fa8025e1c0e488c2a941636a32f}

#### `private std::pair< `[`uint64](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad), [uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` > `[`GetPreviousAndNextFrames`](#classhighlo_1_1_animation_1a1cc31e8d6e0e1c518c8141b0ef8cb97b)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone,float animation_time)` {#classhighlo_1_1_animation_1a1cc31e8d6e0e1c518c8141b0ef8cb97b}

#### `private float `[`CalculateProgression`](#classhighlo_1_1_animation_1ae0e6621f5f1d9e1f3eab6bcb14ab761a)`(`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` & bone,`[`uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` previous_frame_index,`[`uint64`](#_base_types_8h_a29940ae63ec06c9998bba873e25407ad_1a29940ae63ec06c9998bba873e25407ad)` next_frame_index,float animation_time)` {#classhighlo_1_1_animation_1ae0e6621f5f1d9e1f3eab6bcb14ab761a}

#### `private `[`Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`InterpolatePoses`](#classhighlo_1_1_animation_1a60878cf67966f9cf85fa693913307e00)`(`[`BoneTransform`](docs-api/api-highlo--BoneTransform.md#classhighlo_1_1_bone_transform)` previous_pose,`[`BoneTransform`](docs-api/api-highlo--BoneTransform.md#classhighlo_1_1_bone_transform)` next_pose,float progression)` {#classhighlo_1_1_animation_1a60878cf67966f9cf85fa693913307e00}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Ref](docs-api/api-highlo.md#namespacehighlo_a487a959d9631925fcb62bb6e76a0cffa_1a487a959d9631925fcb62bb6e76a0cffa)< [Animation`](#classhighlo_1_1_animation)` > `[`Create`](#classhighlo_1_1_animation_ac5a49048e3bd3b419861e632d45ffaa2_1ac5a49048e3bd3b419861e632d45ffaa2)`(const `[`HLString`](docs-api/api-highlo.md#namespacehighlo_aae9b5b2474b992680f5555779f4bd538_1aae9b5b2474b992680f5555779f4bd538)` & name,float duration,float ticksPerSecond,glm::mat4 inverseTransform,`[`int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` boneCount,`[`Bone`](docs-api/api-highlo--Bone.md#structhighlo_1_1_bone)` rootBone,glm::mat4 correctionMatrix)` {#classhighlo_1_1_animation_ac5a49048e3bd3b419861e632d45ffaa2_1ac5a49048e3bd3b419861e632d45ffaa2}

