---
layout: blog
title: Building a React Native App - Start to Finish in 30 Days
featured: true
date: 2021-08-31T14:56:11.436Z
---
This challenge is inspired by instamobile.com's [10 Best React Native App Ideas for Beginners](https://www.instamobile.io/react-native-tutorials/react-native-app-ideas-beginners/) blog post. I want to create a react native app from start to finish in 30 days.

What is React Native?

Day 1:

I reviewed the blog post and picked a project - the events planner app.

I reviewed the suggested features that can be implemented as a beginner. I will stick with the suggested features for now. 

Researched steps to planning an event.

I looked for front end inspiration on [dribbble.com](https://dribbble.com/shots) and found a couple shots that I liked. 

I want to keep the front end very simple and clean.

Day 2 & 3:

Set up environment and folder structure.

Create repo on github

Use the RN guidance for environment set up to get the project started (https://reactnative.dev/docs/environment-setup)

I am using the Expo CLI quickstart guidance.

```
expo init EventPlannerApp
```

You'll see a subfolder created with your app name. You'll also see in the terminal that you will be prompted to choose a template. The choices are: blank, blank with typescript config, tabs with typescript config - has example screens and tabs using react navigation and minimal. I am choosing blank.

![](/images/image1.png)

Once the template has been selected and dependencies installed, you should see the following folder structure:

![](/images/image2.png)

\*explain the folder structure\*

Before starting the application, we will set up our git repository. First create a git repo on github.com. We will be using the "…or push an existing repository from the command line" commands. Copy these commands.

CD into your app's folder. 

Paste the commands that you copied from "…or push an existing repository from the command line".

Now you can make changes locally and push them to your github repo. 

Now, let's start the application. I will be using Expo start.

```
cd EventPlannerApp
yarn start # you can also use: expo start

#to run a specific environment, you can use 
#one of the commands below:
# - yarn android
# - yarn ios
# - yarn web
```

You can view your device by installing the Expo client app on your phone or by running your app on a simulator or virtual device. The former is easier and gets you started quicker. The later is out of the scope of this post. If you want to run your app on the iOS Simulator or an Android Virtual Device, please refer to the instructions for "React Native CLI Quickstart" to learn how to install Xcode or set up your Android development environment.

A new window will pop up in your browser.

![](/images/image3.png)

If you have installed the Expo Client app on your phone, you can scan the QR code, and it will open your app. If you have simulators installed on your computer, you can  press a (android), i (ios), or w (web), to access those simulators. 

On your phone or emulator you should see:

\*add image 4 and 5\*

Now you can see your changes in the emulator.

**Folder Structure**

I am going to add a few folders to the structure we have already.

\-components 

\-navigation

\-screens

\*\*\*add the purpose of each folder & image 6\*\*\*