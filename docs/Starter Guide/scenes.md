---
sidebar_label: Scenes
sidebar_position: 3
sidebar_class_name: scenes
slug: /scenes
---

# Scenes

You have a few different options, to generate a new scene programmatically.

The first is to generate a empty Scene like this:
```cpp title="YourApp.h"
#include <HighLo.h>

class YourApp : public highlo::HLApplication
{
public:

    YourApp()
        : highlo::HLApplication()
    {
    }

	void OnInitialize() override
    {
        // This creates a new scene which is completely empty 
        m_Scene = Scene::CreateEmpty();
    }

	void OnUpdate(highlo::Timestep timestep) override;
	void OnShutdown() override;
	void OnEvent(highlo::Event &e) override;
	void OnUIRender(highlo::Timestep timestep) override;
	void OnResize(uint32 width, uint32 height) override;

private:

    Ref<Scene> m_Scene = nullptr;
};
```

The other option is to provide the scene name in the `Create` function like this:

```cpp title="YourApp.h"
#include <HighLo.h>

class YourApp : public highlo::HLApplication
{
public:

    YourApp()
        : highlo::HLApplication()
    {
    }

	void OnInitialize() override
    {
        m_Scene = Scene::Create("Your first scene name");
    }

	void OnUpdate(highlo::Timestep timestep) override;
	void OnShutdown() override;
	void OnEvent(highlo::Event &e) override;
	void OnUIRender(highlo::Timestep timestep) override;
	void OnResize(uint32 width, uint32 height) override;

private:

    Ref<Scene> m_Scene = nullptr;
};
```

### Updating a scene

To update a scene you have to keep track of your current scene state yourself. For that purpose you can create a custom SceneState Enum, that contains your States you wish to have. 
To be able to render something onto the screen, you have to create an instance of the `SceneRenderer` as well. The scene takes the renderer and renders its contents into the RenderPasses owned by the SceneRenderer. A complete example is shown below:

```cpp title="YourApp.h"
#include <HighLo.h>

enum class SceneState
{
    Play  = 0,
    Pause = 1,
};

class YourApp : public highlo::HLApplication
{
public:

    YourApp()
        : highlo::HLApplication()
    {
    }

	void OnInitialize() override
    {
        m_Scene = Scene::Create("Your first scene name");
        m_ViewportRenderer = Ref<SceneRenderer>::Create(m_Scene);
    }

	void OnUpdate(highlo::Timestep timestep) override
    {
        switch (m_SceneState)
        {
            case SceneState::Play:
            {
                // Update scene entities
                m_Scene->UpdateScene(timestep);

			    // Render scene content
			    m_Scene->OnUpdateRuntime(m_ViewportRenderer, timestep);
                break;
            }

            case SceneState::Pause:
            {
                // Render last scene content without updating any transforms or attributes
                m_Scene->OnUpdateRuntime(m_ViewportRenderer, timestep);
                break;
            }
        }

	    SceneRenderer::WaitForThreads();
    }

	void OnShutdown() override;
	void OnEvent(highlo::Event &e) override;
	void OnUIRender(highlo::Timestep timestep) override;

	void OnResize(uint32 width, uint32 height) override
    {
        m_ViewportRenderer->SetViewportSize(width, height);
    }

private:

    Ref<Scene> m_Scene = nullptr;
    Ref<SceneRenderer> m_ViewportRenderer = nullptr;
    SceneState m_SceneState = SceneState::Play;
};
```

### Receiving events on a scene

To receive events on your scene you just have to forward the event object into your scene instance.

```cpp title="YourApp.h"
#include <HighLo.h>

class YourApp : public highlo::HLApplication
{
public:

    YourApp()
        : highlo::HLApplication()
    {
    }

	void OnInitialize() override
    {
        m_Scene = Scene::Create("Your first scene name");
    }

	void OnUpdate(highlo::Timestep timestep) override;
	void OnShutdown() override;
	
    void OnEvent(highlo::Event &e) override
    {
        m_Scene->OnEvent(e);
    }

	void OnUIRender(highlo::Timestep timestep) override;
	void OnResize(uint32 width, uint32 height) override;

private:

    Ref<Scene> m_Scene = nullptr;
};
```

