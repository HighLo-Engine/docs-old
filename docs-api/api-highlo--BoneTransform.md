## class `highlo::BoneTransform` {#classhighlo_1_1_bone_transform}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public glm::vec3 `[`Translation`](#classhighlo_1_1_bone_transform_a5f67d4abd3eb40cd2f34fc9c5530554c_1a5f67d4abd3eb40cd2f34fc9c5530554c) | 
`public glm::quat `[`Rotation`](#classhighlo_1_1_bone_transform_a9a1df3478c237883aca41adec3ebe55d_1a9a1df3478c237883aca41adec3ebe55d) | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`GetLocalTransform`](#classhighlo_1_1_bone_transform_a5a46bb3dbf92142c44c8aa2278a1999b_1a5a46bb3dbf92142c44c8aa2278a1999b)`()` | 
`public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BoneTransform`](#classhighlo_1_1_bone_transform)` `[`Interpolate`](#classhighlo_1_1_bone_transform_a8fd8739cc6f23d2825d5448129ad3235_1a8fd8739cc6f23d2825d5448129ad3235)`(`[`BoneTransform`](#classhighlo_1_1_bone_transform)` first,`[`BoneTransform`](#classhighlo_1_1_bone_transform)` second,float progression)` | 
`private static glm::quat `[`Interpolate`](#classhighlo_1_1_bone_transform_1ae9f8b437d9ca9315c95c39779ec87f5a)`(glm::quat a,glm::quat b,float blend)` | 

### Members

#### `public glm::vec3 `[`Translation`](#classhighlo_1_1_bone_transform_a5f67d4abd3eb40cd2f34fc9c5530554c_1a5f67d4abd3eb40cd2f34fc9c5530554c) {#classhighlo_1_1_bone_transform_a5f67d4abd3eb40cd2f34fc9c5530554c_1a5f67d4abd3eb40cd2f34fc9c5530554c}

#### `public glm::quat `[`Rotation`](#classhighlo_1_1_bone_transform_a9a1df3478c237883aca41adec3ebe55d_1a9a1df3478c237883aca41adec3ebe55d) {#classhighlo_1_1_bone_transform_a9a1df3478c237883aca41adec3ebe55d_1a9a1df3478c237883aca41adec3ebe55d}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[Transform`](docs-api/api-highlo--Transform.md#classhighlo_1_1_transform)` `[`GetLocalTransform`](#classhighlo_1_1_bone_transform_a5a46bb3dbf92142c44c8aa2278a1999b_1a5a46bb3dbf92142c44c8aa2278a1999b)`()` {#classhighlo_1_1_bone_transform_a5a46bb3dbf92142c44c8aa2278a1999b_1a5a46bb3dbf92142c44c8aa2278a1999b}

#### `public static `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[BoneTransform`](#classhighlo_1_1_bone_transform)` `[`Interpolate`](#classhighlo_1_1_bone_transform_a8fd8739cc6f23d2825d5448129ad3235_1a8fd8739cc6f23d2825d5448129ad3235)`(`[`BoneTransform`](#classhighlo_1_1_bone_transform)` first,`[`BoneTransform`](#classhighlo_1_1_bone_transform)` second,float progression)` {#classhighlo_1_1_bone_transform_a8fd8739cc6f23d2825d5448129ad3235_1a8fd8739cc6f23d2825d5448129ad3235}

#### `private static glm::quat `[`Interpolate`](#classhighlo_1_1_bone_transform_1ae9f8b437d9ca9315c95c39779ec87f5a)`(glm::quat a,glm::quat b,float blend)` {#classhighlo_1_1_bone_transform_1ae9f8b437d9ca9315c95c39779ec87f5a}

