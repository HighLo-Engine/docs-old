## class `highlo::Runnable` {#classhighlo_1_1_runnable}

```
class highlo::Runnable
  : public highlo::IRunnable
```

Represents a function that can be run inside a [Thread](docs-api/api-highlo--Thread.md#classhighlo_1_1_thread) operation.

### Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Runnable`](#classhighlo_1_1_runnable_a7b5c07055ea208b293ee4aa57279fd01_1a7b5c07055ea208b293ee4aa57279fd01)`(const `[`RunnableCallback`](docs-api/api-highlo.md#namespacehighlo_a20f703a7ab1ada19fc41b81cfb3bb440_1a20f703a7ab1ada19fc41b81cfb3bb440)` & callback,bool autoDelete)` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`Run`](#classhighlo_1_1_runnable_a384be67df980b1aef00ef304129c382f_1a384be67df980b1aef00ef304129c382f)`()` | 
`public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AfterExit`](#classhighlo_1_1_runnable_afc01010cd5d9324b4bbe9990082511c6_1afc01010cd5d9324b4bbe9990082511c6)`(bool wasKilled)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetCallback`](#classhighlo_1_1_runnable_a6132b30b0233fcab154bc93e225024b1_1a6132b30b0233fcab154bc93e225024b1)`(const `[`RunnableCallback`](docs-api/api-highlo.md#namespacehighlo_a20f703a7ab1ada19fc41b81cfb3bb440_1a20f703a7ab1ada19fc41b81cfb3bb440)` & callback)` | 
`public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ShouldAutoDeleteAfterJob`](#classhighlo_1_1_runnable_a4cacb9327e47e7de9d4e5bcd71f5ce61_1a4cacb9327e47e7de9d4e5bcd71f5ce61)`(bool autoDelete)` | 
`private bool `[`m_AutoDelete`](#classhighlo_1_1_runnable_1a28e2cdfd43ac4d2e76d218df62d317b2) | 
`private `[`RunnableCallback`](docs-api/api-highlo.md#namespacehighlo_a20f703a7ab1ada19fc41b81cfb3bb440_1a20f703a7ab1ada19fc41b81cfb3bb440)` `[`m_CallbackFn`](#classhighlo_1_1_runnable_1ad57ef7e48e62154e69a2e6bbfa1f920c) | 

### Members

#### `public `[`HLAPI`](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)` `[`Runnable`](#classhighlo_1_1_runnable_a7b5c07055ea208b293ee4aa57279fd01_1a7b5c07055ea208b293ee4aa57279fd01)`(const `[`RunnableCallback`](docs-api/api-highlo.md#namespacehighlo_a20f703a7ab1ada19fc41b81cfb3bb440_1a20f703a7ab1ada19fc41b81cfb3bb440)` & callback,bool autoDelete)` {#classhighlo_1_1_runnable_a7b5c07055ea208b293ee4aa57279fd01_1a7b5c07055ea208b293ee4aa57279fd01}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[int32`](#_base_types_8h_a43d43196463bde49cb067f5c20ab8481_1a43d43196463bde49cb067f5c20ab8481)` `[`Run`](#classhighlo_1_1_runnable_a384be67df980b1aef00ef304129c382f_1a384be67df980b1aef00ef304129c382f)`()` {#classhighlo_1_1_runnable_a384be67df980b1aef00ef304129c382f_1a384be67df980b1aef00ef304129c382f}

#### `public virtual `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`AfterExit`](#classhighlo_1_1_runnable_afc01010cd5d9324b4bbe9990082511c6_1afc01010cd5d9324b4bbe9990082511c6)`(bool wasKilled)` {#classhighlo_1_1_runnable_afc01010cd5d9324b4bbe9990082511c6_1afc01010cd5d9324b4bbe9990082511c6}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`SetCallback`](#classhighlo_1_1_runnable_a6132b30b0233fcab154bc93e225024b1_1a6132b30b0233fcab154bc93e225024b1)`(const `[`RunnableCallback`](docs-api/api-highlo.md#namespacehighlo_a20f703a7ab1ada19fc41b81cfb3bb440_1a20f703a7ab1ada19fc41b81cfb3bb440)` & callback)` {#classhighlo_1_1_runnable_a6132b30b0233fcab154bc93e225024b1_1a6132b30b0233fcab154bc93e225024b1}

#### `public `[`HLAPI](#_core_8h_a1d2309cd37fc69b9129facf43df916ea_1a1d2309cd37fc69b9129facf43df916ea)[void`](#imgui__impl__opengl3__loader_8h_ac668e7cffd9e2e9cfee428b9b2f34fa7_1ac668e7cffd9e2e9cfee428b9b2f34fa7)` `[`ShouldAutoDeleteAfterJob`](#classhighlo_1_1_runnable_a4cacb9327e47e7de9d4e5bcd71f5ce61_1a4cacb9327e47e7de9d4e5bcd71f5ce61)`(bool autoDelete)` {#classhighlo_1_1_runnable_a4cacb9327e47e7de9d4e5bcd71f5ce61_1a4cacb9327e47e7de9d4e5bcd71f5ce61}

#### `private bool `[`m_AutoDelete`](#classhighlo_1_1_runnable_1a28e2cdfd43ac4d2e76d218df62d317b2) {#classhighlo_1_1_runnable_1a28e2cdfd43ac4d2e76d218df62d317b2}

#### `private `[`RunnableCallback`](docs-api/api-highlo.md#namespacehighlo_a20f703a7ab1ada19fc41b81cfb3bb440_1a20f703a7ab1ada19fc41b81cfb3bb440)` `[`m_CallbackFn`](#classhighlo_1_1_runnable_1ad57ef7e48e62154e69a2e6bbfa1f920c) {#classhighlo_1_1_runnable_1ad57ef7e48e62154e69a2e6bbfa1f920c}

