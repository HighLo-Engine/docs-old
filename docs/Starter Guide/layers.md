---
sidebar_label: Application Layers
sidebar_position: 2
sidebar_class_name: different-layers
slug: /application-layers
---

# Splitting up the logic into different layers

The engine supports the concept of application layers. That means that you can implement a layer, that is responsible for a specific task.
This helps to keep the logic in your `YourApp` class simple and at a later time we will extend this concept, so that you will be able to assign a thread to each layer to make multithreading easier for you. 

Now lets see how to implement a new layer:

```cpp title="CustomLayer.h"
#include <HighLo.h>

class YourCustomLayer
{
public:

    YourCustomLayer()
        : highlo::ApplicationLayer("YourCustomLayerDebugName")
    {
    }

    virtual ~YourCustomLayer()
    {
    }

    // Called once when the layer gets pushed to the engines layerstack.
    virtual void OnAttach() override;

    // called once when the layer gets popped from the engines layerstack.
    virtual void OnDetach() override;

    // called once a frame to update the game logic
    virtual void OnUpdate(highlo::Timestep ts) override;

    // called once a frame to update the UI. (gets called after OnUpdate)
    virtual void OnUIRender(highlo::Timestep ts) override;

    // called whenever a event occurres in the engine,
    // can be used to register to specific events that matter to this layer
    virtual void OnEvent(highlo::Event &e) override;

    // called whenever the main rendering window gets resized,
    // providing the new width and the height of the resized window
    virtual void OnResize(uint32 width, uint32 height) override;
};
```

### Attaching the Layer into the Application Layerstack

Now that you have seen how you can implement your custom layer, you need to know how to attach this layer to the applications' layerstack. Only then your layer will be recognized and handled correctly.

To register this layer, you can use the `OnInitialize` function of your `YourApp` class. It should look like this:

```cpp title="YourApp.h"
#include <HighLo.h>
#include "CustomLayer.h"

class YourApp : public highlo::HLApplication
{
public:

    // ... constructors like above ...

	void OnInitialize() override
    {
        PushLayer(new YourCustomLayer());
    }

    // ... other overloaded functions like above ...
};
```

:::note

You do not have to clean up your allocated layer, when the engine shuts down it iterates through **all** attached layers and frees their memory automatically.

:::