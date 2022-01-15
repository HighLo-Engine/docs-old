---
sidebar_position: 1
sidebar_label: Introduction
sidebar_class_name: intro
---

# Introduction

## What is the HighLo-Engine and what makes it special?

The HighLo-Engine is a free Open Source GameEngine, that can either be used for real time games (as well as multiplayer games) or for movies by rendering the scene into a mp4 file or frame by frame into a directory.

We actively work on the engine, so you can see the current implemented features and the planned features in our [Trello Board](https://trello.com/b/HXJ2X0sb/highloengine)

## Getting started

We do not have any pre-built solutions yet because the engine is not released at the moment. We are highly working on getting the first release build up and running, please refer to our [Trello Board](https://trello.com/b/HXJ2X0sb/highloengine) for further roadmap plans.

<!---
To get started visit the [Download](https://www.highlo-engine.com/en/download) page of the engine and start downloading the LevelEditor, named **HighLoEdit**.

The Website should automatically detect your operating system and recommend the right download for you but if that fails you can also download the right version [manually](https://www.highlo-engine.com/en/downloads).
-->

## Build the engine from source

If you want to build the latest code or if you wish to contribute to our source, you can build the engine manually from source.
Just clone the code recursively (the `--recursive` option is very important to clone all 3rd party dependencies as well) and execute the provided python script.
The python script downloads 3rd party dependencies (mainly the current Vulkan SDK and Vulkan debug libs) and it also generates the visual studio solution.

These are all required commands:

```sh
git clone --recursive https://github.com/HighLo-Engine/HighLo-Engine.git/
```

```sh
cd HighLo-Engine/scripts
```

```sh
python ./GenerateEngine.py
# or
python3 ./GenerateEngine.py
```

After executing these steps you will find a `HighLo.sln` file in the root folder of the Engine. This file can be opened by Visual Studio 2022 (as well as older versions).

