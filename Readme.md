# Mobile app development

- Android
- iOS

## Types of Mobile Dev
- Native Development
    - Android : use -> java,kotlin
    - iOS : use -> Swift, Objective C

- Cross-platform Development: single code base for android and iOS - use flutter, react native

## React native Official Doc: https://reactnative.dev/
As per the official doc, the best way to experience React Native is through a Framework like **Expo** - [Click](https://expo.dev/)

<img width="1345" height="934" alt="image" src="https://github.com/user-attachments/assets/43baa143-be00-4493-b031-5ee30c0f81c1" />


### What is expo?
Its a full stack react native framework with powerful cloud services to help us move faster at every stage of app lifecycle.
(basically provides tool to ease react-native journey)

### Why Expo ? 
- No Android Studio/ Xcode needed
- run app instantly on your phone
- pre build featurs(camera,locations, sensors etc)


### Environment setup for Expo
- node js
- code editor like vscode
- install "expo go" in andoroid/iOs physical device

### Start with code

1. give command   

> npx create-expo-app@latest

- give name of the app as **expo-crash-course**

**See the various files and folder created**

2. give reset command using bun

> bun run reset-project

- when it asks: Do you want to move existing files to /app-example instead of deleting them? (Y/n) --> Select **n**

3. now give command to install

> npm i

4. Now give below command 

> bunx expo start   

Note if there is any network related then give below command and then above command in point 4   
> EXPO_OFFLINE=1 bunx expo start

5. We will see QR code 
we can scan it and see output as below: 
<img width="369" height="800" alt="image" src="https://github.com/user-attachments/assets/885474df-f9c7-4331-b8d4-d8cdc10669b4" />


7. now in **app** folder inside **index.tsx** file, change below:   

   ~<Text>Edit app/index.tsx to edit this screen.</Text>~   
   to    
   <Text>Hello World </Text>
   
The output in mobile device will be changed to below:

<img width="369" height="800" alt="image" src="https://github.com/user-attachments/assets/3f0802c6-0906-4bee-a444-54ed32a5bffe" />

## Core Components




