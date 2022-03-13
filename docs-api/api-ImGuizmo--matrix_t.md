## struct `ImGuizmo::matrix_t` {#struct_im_guizmo_1_1matrix__t}

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public float `[`m`](#struct_im_guizmo_1_1matrix__t_a7f6ad32a1864ff5291d67be7539c8f55_1a7f6ad32a1864ff5291d67be7539c8f55) | 
`public float `[`m16`](#struct_im_guizmo_1_1matrix__t_a070790f9f04503c83ad39f9b19407e33_1a070790f9f04503c83ad39f9b19407e33) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`right`](#struct_im_guizmo_1_1matrix__t_a17a3ed700147d0855fb70be17216908c_1a17a3ed700147d0855fb70be17216908c) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`up`](#struct_im_guizmo_1_1matrix__t_a17320520922ec2d948b747c0556ef07f_1a17320520922ec2d948b747c0556ef07f) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`dir`](#struct_im_guizmo_1_1matrix__t_a55fdfc1fbbbcb1e1a55baa298a69bc56_1a55fdfc1fbbbcb1e1a55baa298a69bc56) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`position`](#struct_im_guizmo_1_1matrix__t_aebd17fa4e2068a4bf5b54b7bcc19a56b_1aebd17fa4e2068a4bf5b54b7bcc19a56b) | 
`public struct ImGuizmo::matrix_t::@13::@15 `[`v`](#struct_im_guizmo_1_1matrix__t_aebc1b43c005724bc767765f74588779d_1aebc1b43c005724bc767765f74588779d) | 
`public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`component`](#struct_im_guizmo_1_1matrix__t_a9f9fb5364a1c06969c4a5858b36bd571_1a9f9fb5364a1c06969c4a5858b36bd571) | 
`public union ImGuizmo::matrix_t::@13 `[`@14`](#struct_im_guizmo_1_1matrix__t_a1e6afe3a1974cc6c6a0733a7f53e50c5_1a1e6afe3a1974cc6c6a0733a7f53e50c5) | 
`public inline  `[`matrix_t`](#struct_im_guizmo_1_1matrix__t_a4cfcfb1fb32dc0374b4efe6386e0f38f_1a4cfcfb1fb32dc0374b4efe6386e0f38f)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & other)` | 
`public inline  `[`matrix_t`](#struct_im_guizmo_1_1matrix__t_a9a759ebc82a934015c2b9c0efac2971e_1a9a759ebc82a934015c2b9c0efac2971e)`()` | 
`public inline  `[`operator float *`](#struct_im_guizmo_1_1matrix__t_ae74791bb79c7db048e8dc9dd05e20041_1ae74791bb79c7db048e8dc9dd05e20041)`()` | 
`public inline  `[`operator const float *`](#struct_im_guizmo_1_1matrix__t_acb468e18fd0c5fc542c8657134904433_1acb468e18fd0c5fc542c8657134904433)`() const` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Translation`](#struct_im_guizmo_1_1matrix__t_a1a91d7a06f60933bc28ff9151c77f551_1a1a91d7a06f60933bc28ff9151c77f551)`(float _x,float _y,float _z)` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Translation`](#struct_im_guizmo_1_1matrix__t_a04b5638ef08243c6e163cc04ffcf4c9e_1a04b5638ef08243c6e163cc04ffcf4c9e)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & vt)` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Scale`](#struct_im_guizmo_1_1matrix__t_aacc1c879e8fe430e3fd2f0cb7c15b8aa_1aacc1c879e8fe430e3fd2f0cb7c15b8aa)`(float _x,float _y,float _z)` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Scale`](#struct_im_guizmo_1_1matrix__t_a4205ea7ee6dbe647b1dc38b3ee762c12_1a4205ea7ee6dbe647b1dc38b3ee762c12)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & s)` | 
`public inline `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & `[`operator*=`](#struct_im_guizmo_1_1matrix__t_a476a63de9dee9e09bab156c699c8dfd1_1a476a63de9dee9e09bab156c699c8dfd1)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & mat)` | 
`public inline `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` `[`operator*`](#struct_im_guizmo_1_1matrix__t_a0bb4e839a562b18faa4616e4a34c84a1_1a0bb4e839a562b18faa4616e4a34c84a1)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & mat) const` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Multiply`](#struct_im_guizmo_1_1matrix__t_a4560240b060601a46e475a57a6489ba9_1a4560240b060601a46e475a57a6489ba9)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & matrix)` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Multiply`](#struct_im_guizmo_1_1matrix__t_a4ae8db368c3fbf9acf04657f5086e3b5_1a4ae8db368c3fbf9acf04657f5086e3b5)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & m1,const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & m2)` | 
`public inline float `[`GetDeterminant`](#struct_im_guizmo_1_1matrix__t_a56d2d5ba7efc096d369aae01ef0e1da8_1a56d2d5ba7efc096d369aae01ef0e1da8)`() const` | 
`public float `[`Inverse`](#struct_im_guizmo_1_1matrix__t_a8a0e24127eb60b7b4e0049488569c567_1a8a0e24127eb60b7b4e0049488569c567)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & srcMatrix,bool affine)` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetToIdentity`](#struct_im_guizmo_1_1matrix__t_a8cd97c2ad39c86dde89a62aaddc7b9ec_1a8cd97c2ad39c86dde89a62aaddc7b9ec)`()` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Transpose`](#struct_im_guizmo_1_1matrix__t_a514fce5c5b98086bc435e6e89672a2fe_1a514fce5c5b98086bc435e6e89672a2fe)`()` | 
`public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RotationAxis`](#struct_im_guizmo_1_1matrix__t_abb6c29d0bcc5e884b68a666a204730db_1abb6c29d0bcc5e884b68a666a204730db)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & axis,float angle)` | 
`public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OrthoNormalize`](#struct_im_guizmo_1_1matrix__t_a230d5d19800a0aca753e1c324dcda9d7_1a230d5d19800a0aca753e1c324dcda9d7)`()` | 

### Members

#### `public float `[`m`](#struct_im_guizmo_1_1matrix__t_a7f6ad32a1864ff5291d67be7539c8f55_1a7f6ad32a1864ff5291d67be7539c8f55) {#struct_im_guizmo_1_1matrix__t_a7f6ad32a1864ff5291d67be7539c8f55_1a7f6ad32a1864ff5291d67be7539c8f55}

#### `public float `[`m16`](#struct_im_guizmo_1_1matrix__t_a070790f9f04503c83ad39f9b19407e33_1a070790f9f04503c83ad39f9b19407e33) {#struct_im_guizmo_1_1matrix__t_a070790f9f04503c83ad39f9b19407e33_1a070790f9f04503c83ad39f9b19407e33}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`right`](#struct_im_guizmo_1_1matrix__t_a17a3ed700147d0855fb70be17216908c_1a17a3ed700147d0855fb70be17216908c) {#struct_im_guizmo_1_1matrix__t_a17a3ed700147d0855fb70be17216908c_1a17a3ed700147d0855fb70be17216908c}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`up`](#struct_im_guizmo_1_1matrix__t_a17320520922ec2d948b747c0556ef07f_1a17320520922ec2d948b747c0556ef07f) {#struct_im_guizmo_1_1matrix__t_a17320520922ec2d948b747c0556ef07f_1a17320520922ec2d948b747c0556ef07f}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`dir`](#struct_im_guizmo_1_1matrix__t_a55fdfc1fbbbcb1e1a55baa298a69bc56_1a55fdfc1fbbbcb1e1a55baa298a69bc56) {#struct_im_guizmo_1_1matrix__t_a55fdfc1fbbbcb1e1a55baa298a69bc56_1a55fdfc1fbbbcb1e1a55baa298a69bc56}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`position`](#struct_im_guizmo_1_1matrix__t_aebd17fa4e2068a4bf5b54b7bcc19a56b_1aebd17fa4e2068a4bf5b54b7bcc19a56b) {#struct_im_guizmo_1_1matrix__t_aebd17fa4e2068a4bf5b54b7bcc19a56b_1aebd17fa4e2068a4bf5b54b7bcc19a56b}

#### `public struct ImGuizmo::matrix_t::@13::@15 `[`v`](#struct_im_guizmo_1_1matrix__t_aebc1b43c005724bc767765f74588779d_1aebc1b43c005724bc767765f74588779d) {#struct_im_guizmo_1_1matrix__t_aebc1b43c005724bc767765f74588779d_1aebc1b43c005724bc767765f74588779d}

#### `public `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` `[`component`](#struct_im_guizmo_1_1matrix__t_a9f9fb5364a1c06969c4a5858b36bd571_1a9f9fb5364a1c06969c4a5858b36bd571) {#struct_im_guizmo_1_1matrix__t_a9f9fb5364a1c06969c4a5858b36bd571_1a9f9fb5364a1c06969c4a5858b36bd571}

#### `public union ImGuizmo::matrix_t::@13 `[`@14`](#struct_im_guizmo_1_1matrix__t_a1e6afe3a1974cc6c6a0733a7f53e50c5_1a1e6afe3a1974cc6c6a0733a7f53e50c5) {#struct_im_guizmo_1_1matrix__t_a1e6afe3a1974cc6c6a0733a7f53e50c5_1a1e6afe3a1974cc6c6a0733a7f53e50c5}

#### `public inline  `[`matrix_t`](#struct_im_guizmo_1_1matrix__t_a4cfcfb1fb32dc0374b4efe6386e0f38f_1a4cfcfb1fb32dc0374b4efe6386e0f38f)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & other)` {#struct_im_guizmo_1_1matrix__t_a4cfcfb1fb32dc0374b4efe6386e0f38f_1a4cfcfb1fb32dc0374b4efe6386e0f38f}

#### `public inline  `[`matrix_t`](#struct_im_guizmo_1_1matrix__t_a9a759ebc82a934015c2b9c0efac2971e_1a9a759ebc82a934015c2b9c0efac2971e)`()` {#struct_im_guizmo_1_1matrix__t_a9a759ebc82a934015c2b9c0efac2971e_1a9a759ebc82a934015c2b9c0efac2971e}

#### `public inline  `[`operator float *`](#struct_im_guizmo_1_1matrix__t_ae74791bb79c7db048e8dc9dd05e20041_1ae74791bb79c7db048e8dc9dd05e20041)`()` {#struct_im_guizmo_1_1matrix__t_ae74791bb79c7db048e8dc9dd05e20041_1ae74791bb79c7db048e8dc9dd05e20041}

#### `public inline  `[`operator const float *`](#struct_im_guizmo_1_1matrix__t_acb468e18fd0c5fc542c8657134904433_1acb468e18fd0c5fc542c8657134904433)`() const` {#struct_im_guizmo_1_1matrix__t_acb468e18fd0c5fc542c8657134904433_1acb468e18fd0c5fc542c8657134904433}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Translation`](#struct_im_guizmo_1_1matrix__t_a1a91d7a06f60933bc28ff9151c77f551_1a1a91d7a06f60933bc28ff9151c77f551)`(float _x,float _y,float _z)` {#struct_im_guizmo_1_1matrix__t_a1a91d7a06f60933bc28ff9151c77f551_1a1a91d7a06f60933bc28ff9151c77f551}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Translation`](#struct_im_guizmo_1_1matrix__t_a04b5638ef08243c6e163cc04ffcf4c9e_1a04b5638ef08243c6e163cc04ffcf4c9e)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & vt)` {#struct_im_guizmo_1_1matrix__t_a04b5638ef08243c6e163cc04ffcf4c9e_1a04b5638ef08243c6e163cc04ffcf4c9e}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Scale`](#struct_im_guizmo_1_1matrix__t_aacc1c879e8fe430e3fd2f0cb7c15b8aa_1aacc1c879e8fe430e3fd2f0cb7c15b8aa)`(float _x,float _y,float _z)` {#struct_im_guizmo_1_1matrix__t_aacc1c879e8fe430e3fd2f0cb7c15b8aa_1aacc1c879e8fe430e3fd2f0cb7c15b8aa}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Scale`](#struct_im_guizmo_1_1matrix__t_a4205ea7ee6dbe647b1dc38b3ee762c12_1a4205ea7ee6dbe647b1dc38b3ee762c12)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & s)` {#struct_im_guizmo_1_1matrix__t_a4205ea7ee6dbe647b1dc38b3ee762c12_1a4205ea7ee6dbe647b1dc38b3ee762c12}

#### `public inline `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & `[`operator*=`](#struct_im_guizmo_1_1matrix__t_a476a63de9dee9e09bab156c699c8dfd1_1a476a63de9dee9e09bab156c699c8dfd1)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & mat)` {#struct_im_guizmo_1_1matrix__t_a476a63de9dee9e09bab156c699c8dfd1_1a476a63de9dee9e09bab156c699c8dfd1}

#### `public inline `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` `[`operator*`](#struct_im_guizmo_1_1matrix__t_a0bb4e839a562b18faa4616e4a34c84a1_1a0bb4e839a562b18faa4616e4a34c84a1)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & mat) const` {#struct_im_guizmo_1_1matrix__t_a0bb4e839a562b18faa4616e4a34c84a1_1a0bb4e839a562b18faa4616e4a34c84a1}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Multiply`](#struct_im_guizmo_1_1matrix__t_a4560240b060601a46e475a57a6489ba9_1a4560240b060601a46e475a57a6489ba9)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & matrix)` {#struct_im_guizmo_1_1matrix__t_a4560240b060601a46e475a57a6489ba9_1a4560240b060601a46e475a57a6489ba9}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Multiply`](#struct_im_guizmo_1_1matrix__t_a4ae8db368c3fbf9acf04657f5086e3b5_1a4ae8db368c3fbf9acf04657f5086e3b5)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & m1,const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & m2)` {#struct_im_guizmo_1_1matrix__t_a4ae8db368c3fbf9acf04657f5086e3b5_1a4ae8db368c3fbf9acf04657f5086e3b5}

#### `public inline float `[`GetDeterminant`](#struct_im_guizmo_1_1matrix__t_a56d2d5ba7efc096d369aae01ef0e1da8_1a56d2d5ba7efc096d369aae01ef0e1da8)`() const` {#struct_im_guizmo_1_1matrix__t_a56d2d5ba7efc096d369aae01ef0e1da8_1a56d2d5ba7efc096d369aae01ef0e1da8}

#### `public float `[`Inverse`](#struct_im_guizmo_1_1matrix__t_a8a0e24127eb60b7b4e0049488569c567_1a8a0e24127eb60b7b4e0049488569c567)`(const `[`matrix_t`](#struct_im_guizmo_1_1matrix__t)` & srcMatrix,bool affine)` {#struct_im_guizmo_1_1matrix__t_a8a0e24127eb60b7b4e0049488569c567_1a8a0e24127eb60b7b4e0049488569c567}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetToIdentity`](#struct_im_guizmo_1_1matrix__t_a8cd97c2ad39c86dde89a62aaddc7b9ec_1a8cd97c2ad39c86dde89a62aaddc7b9ec)`()` {#struct_im_guizmo_1_1matrix__t_a8cd97c2ad39c86dde89a62aaddc7b9ec_1a8cd97c2ad39c86dde89a62aaddc7b9ec}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`Transpose`](#struct_im_guizmo_1_1matrix__t_a514fce5c5b98086bc435e6e89672a2fe_1a514fce5c5b98086bc435e6e89672a2fe)`()` {#struct_im_guizmo_1_1matrix__t_a514fce5c5b98086bc435e6e89672a2fe_1a514fce5c5b98086bc435e6e89672a2fe}

#### `public `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`RotationAxis`](#struct_im_guizmo_1_1matrix__t_abb6c29d0bcc5e884b68a666a204730db_1abb6c29d0bcc5e884b68a666a204730db)`(const `[`vec_t`](docs-api/api-ImGuizmo--vec_t.md#struct_im_guizmo_1_1vec__t)` & axis,float angle)` {#struct_im_guizmo_1_1matrix__t_abb6c29d0bcc5e884b68a666a204730db_1abb6c29d0bcc5e884b68a666a204730db}

#### `public inline `[`void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`OrthoNormalize`](#struct_im_guizmo_1_1matrix__t_a230d5d19800a0aca753e1c324dcda9d7_1a230d5d19800a0aca753e1c324dcda9d7)`()` {#struct_im_guizmo_1_1matrix__t_a230d5d19800a0aca753e1c324dcda9d7_1a230d5d19800a0aca753e1c324dcda9d7}

