---
title: Welcome to the HighLo-Engine!
description: This is the very first blog post!
slug: welcome-to-the-highlo-engine
authors: Can
tags: []
hide_table_of_contents: false
---

Hi! I am Can, one of the Core Developers of the HighLo-Engine! In this blog post I would like to present you the current state of our engine as well as future roadmap plans that are going to be implemented in the near future. So this blog post will only mention problems, that are fixable in a short term, a more detailed blog post with the long term problems/improvements will follow soon!

We plan of writing a blog post only regarding the architecture design of the engine as well! :)

The most recent screenshot of the editor (at the moment of me writing this blog post) is this:

![HighLo-Editor Screenshot](/img/blog/2022-01-14/HighLo-Editor-screenshot.PNG)

As you can see we also have a few bugs in this picture. The Red weird rectangle should be the text "Hello World!", but we got a alpha issue which leads to this look.
The AssetBrowser in the bottom of the picture is already working and shows the current directories in a yet hard-coded asset directory. But in the future you will be able to select a custom Asset directory of cause! Even though it is working right now, its implementation is not finished yet, because you will only be able to see and navigate through all directories, but without being able to see any files. This will be improved in the near future as well. 

The "SceneHierarchy panel" and the "Object properties panel" is not implemented yet, because the underlying asset managing system is missing a lot of features as well, which need to be implemented first before we can even think of implementing the UI for this :)

Now lets take a look at some older pictures, that show what rendering systems are already implemented:

![HighLo-Runtime Screenshot 1](/img/blog/2022-01-14/HighLo-Screenshot-1.png)
![HighLo-Runtime Screenshot 2](/img/blog/2022-01-14/HighLo-Screenshot-2.png)
![HighLo-Runtime Screenshot 3](/img/blog/2022-01-14/HighLo-Screenshot-3.png)
![HighLo-Runtime Screenshot 4](/img/blog/2022-01-14/HighLo-Screenshot-4.png)

These screenshots were taken from the Sandbox project, that is used to test the most recent implemented rendering features.
As you can see we wrote an implementation for HDR-Textures, that are used in the film- and in the games-industry to provide lighting information of a specific scene.

For example if you plan to shoot a live-action movie, with animated 3D models as well as real actors you will probably want to shoot a HDR texture with a DSLR Camera (or even phones nowadays) of the scene where you recorded your real actors. Now you can use this HDR-Texture in a 3D Software of your choice (Maya, Cinema 4D, Blender, ...) to get the lighting from this exact day you filmed your actors. This will improve the CGI in your movie a lot!

This technique also applies to games, because HDR textures provide lighting from real scenes, they improve the feeling the player gets when he walks around the virtual scene because everything feels more natural.

I hope you liked my first blog post! Thanks a lot for reading this far :)

If you have any questions or ideas for improvements, please do not hesitate to write a message to us! You can reach me directly <a href="https://www.cankarka.com/en/contact">here</a>.

