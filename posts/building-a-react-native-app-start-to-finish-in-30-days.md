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

I looked for front end inspiration on [dribbble.com](https://dribbble.com/shots) and found a couple shots that I liked. 

I want to keep the front end very simple and clean.

Day 2:

Set up environment and folder structure.

Create repo on github

Use the RN guidance for environment set up to get the project started (https://reactnative.dev/docs/environment-setup)

I am using the Expo CLI quickstart guidance.

```
expo init EventPlannerApp

cd EventPlannerApp
yarn start # you can also use: expo start
```

You'll see a subfolder created with your app name. You'll also see in the terminal that you will be prompted to choose a template. The choices are: blank, blank with typescript config, tabs with typescript config - has example screens and tabs using react navigation and minimal.

![](/images/image1.png)