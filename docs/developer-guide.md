---
title: Developer starter guide
sidebar_position: 2
sidebar_class_name: dev-starter-guide
---

# Developer Guide

In this user guide you will find basic information of how to interact with the engine's API in your C++ application.
This user guide is meant to be for other **developers**, not users who just want to use the engine.

If you are looking for these kind of guides please refer to the **Tutorials** page of this documentation.

## Creating your first demo application

In this section you will learn what is needed to run a minimal example and get a black window up and running.

### The Main class

The engine has a Application class, that is used to control the hole engine. It holds the main game loop, handles all events and is responsible for updating all attached layers and the client application. In order to attach you client application to this main class, you have to implement a custom class that extends from the application class and implements all virtual functions like this:

```cpp title="YourApp.h"
#include <HighLo.h>

class YourApp : public highlo::HLApplication
{
public:

    // This constructor is used to start the engine without any custom startup settings.
    // If you choose to use this version of the constructor,
    // the engine will start with it's default startup settings.
    YourApp()
        : highlo::HLApplication()
    {
    }

    // This constructor is used to provide custom startup settings for the engine.
    // If you choose to use this version of the custructor,
    // the engine will start with your startup settings.
    YourApp(const highlo::ApplicationSettings &settings)
        : highlo::HLApplication(settings)
    {
    }

    // called once when the engine gets initialized, your custom initialization code goes into this function
	void OnInitialize() override;

    // called once a frame, your custom per-frame code goes into this function
	void OnUpdate(highlo::Timestep timestep) override;

    // called once when the user closed the application,
    // your custom exit code goes here
    // (this should be used to free any existing pointers that were allocated on the heap before)
	void OnShutdown() override;

    // called whenever a event occurred in the application,
    // to see a list of possible events please refer to the events section.
	void OnEvent(highlo::Event &e) override;

    // called once a frame, after the OnUpdate method. Your UI code should go into this function.
	void OnUIRender(highlo::Timestep timestep) override;

    // called whenever the main window gets resized by the user,
    // providing the new width and the height of the resized window.
	void OnResize(uint32 width, uint32 height) override;
};
```

### The Main file

After implementing your custom application class you will need a entry point for your application. Keep in mind that you **do not** need a standard main function, instead you will have to implement the `CreateApp` function that is provided by the engine.

Your main file could look like this:

```cpp title="Main.cpp"
#include "YourApp.h"

highlo::HLApplication *highlo::CreateApp(int argc, char **argv)
{
	return new YourApp();
}
```

If you wish to modify some of the initial startup settings you can provide them into your demo application as well.

```cpp title="Main.cpp"
#include "YourApp.h"

highlo::HLApplication *highlo::CreateApp(int argc, char **argv)
{
    highlo::ApplicationSettings settings;
    settings.Headless = false;                  // Determines whether to show a rendering window or not; false means show the window.
    settings.WindowTitle = "Your App Title";    // Determines the window title
    settings.WindowWidth = 1280;                // Determines the width of the shown window
    settings.WindowHeight = 720;                // Determines the height of the shown window
	return new YourApp(settings);
}
```

If you do not wish to implement the command line arguments yourself, we have implemented a Helper class that does handle them for you.

This example shows the usage of the command line helper class:

```cpp title="Main.cpp"
#include "YourApp.h"

highlo::HLApplication *highlo::CreateApp(int argc, char **argv)
{
	highlo::utils::CommandLineHelper cmdHelper(argc, argv);
	return new YourApp(cmdHelper.GetAppSettings());
}
```

### Splitting up the logic into different layers

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

## Creating Scenes

**This feature is not implemented yet**

## Creating default shapes/models

**This feature is not implemented yet**

## Importing Assets

**This feature is not implemented yet**

## Rendering into a file

**This feature is not implemented yet**

