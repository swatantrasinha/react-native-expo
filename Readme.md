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
- [X] node js
- [X] code editor like vscode
- [X] install "expo go" in andoroid/iOs physical device

### Start with code
<details>
    <summary>Steps to start with expo</summary>
    <p>

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

</p>
</details>

## Core Components   

This is official [Link](https://reactnative.dev/docs/components-and-apis) for core components to be used   

1. [View](https://reactnative.dev/docs/view)   
this is like **div** in jsx

2. [Text](https://reactnative.dev/docs/text)   
this is like **paragraph**, **heading**, **span** in jsx used to render string

Now in **index.tsx** we will clear the existing code for **Hello world** and write below code:  

```javascript
import { Text, View } from "react-native";

function HomeScreen() {
  return (
    <View>
      <Text style={{fontSize:24}}>Hello from Home Screen</Text>
      </View>
  )
}

export default HomeScreen;
```

Output is below:   

<img width="369" height="800" alt="image" src="https://github.com/user-attachments/assets/179d62c5-e489-4a25-aa5b-cf4db79f5f5a" />

3. [ScrollView](https://reactnative.dev/docs/scrollview)   

What is use of ScrollView when View is there ?   

In the above code of rendering text "Hello from Home Screen" once, we will make below changes to render it multiple times:   

```javascript
import { Text, View } from "react-native";

function HomeScreen() {
  return (
    <View>
    {
      [...Array(60)].map((_,i) => (
        <Text key={i} style={{fontSize:24}}>Hello from Home Screen{i+1}</Text>
    ))}
    </View>
  )
}

export default HomeScreen;

```
Here in output we will see that we are not able to scroll   
<img width="369" height="800" alt="image" src="https://github.com/user-attachments/assets/a5dbb78a-5638-45f6-9567-340e48d2b9cf" />

If we wrap our code in ScrollView instead of View   

```javascript
import { Text, ScrollView } from "react-native";

function HomeScreen() {
  return (
    <ScrollView>
    {
      [...Array(60)].map((_,i) => (
        <Text key={i} style={{fontSize:24}}>Hello from Home Screen{i+1}</Text>
    ))}
    </ScrollView>
  )
}

export default HomeScreen;
```

then it will fix the issue and we will be able to scroll   

<img width="369" height="800" alt="image" src="https://github.com/user-attachments/assets/07c3a336-410c-4c11-8ac5-e5e44fdf45a7" />


4. [Alert](https://reactnative.dev/docs/alert)   

This launches an alert dialog with the specified title and message. Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button.

5. [Switch](https://reactnative.dev/docs/switch)   

It renders a boolean input.
This is a controlled component that requires an onValueChange callback that updates the value prop in order for the component to reflect user actions. If the value prop is not updated, the component will continue to render the supplied value prop instead of the expected result of any user actions.

Now in **index.tsx** we will clear the existing code for **Hello world** and write below code:  
 

```javascript
import { useState } from "react";
import { Text, View, Button, Alert, Switch } from "react-native";

function HomeScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const pressMe = () => {
    Alert.alert("Button Clicked !!!");
  }

  return (
    <View>
      <Text style={{fontSize:24}}>Hello from Home Screen</Text>
      <Button title='Click Me' onPress={pressMe} />
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
    </View>
  );
}

export default HomeScreen;
```

Output is below:   
<img width="590" height="1280" alt="image" src="https://github.com/user-attachments/assets/65bb3c31-38df-42ad-9659-195d1acd5d8e" />

6. [TextInput](https://reactnative.dev/docs/textinput)   

here, TextArea feature is TextInput with multiline 

7. [Pressable](https://reactnative.dev/docs/pressable)

Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.   

How it works :

    On an element wrapped by Pressable:
        onPressIn is called when a press is activated.
        onPressOut is called when the press gesture is deactivated.

    After pressing onPressIn, one of two things will happen:

        The person will remove their finger, triggering onPressOut followed by onPress.
        If the person leaves their finger longer than 500 milliseconds before removing it, onLongPress is triggered. (onPressOut will still fire when they remove their finger.)



Output is below:   

<img width="369" height="800" alt="image" src="https://github.com/user-attachments/assets/ec6f0ce7-6759-41fe-9966-1cf113617c14" />   

8. [Image](https://reactnative.dev/docs/image)

Thisis React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.

Important Links for Image:   
    (a) [resizeMode](https://reactnative.dev/docs/image#resizemode)   
    (b) [resizeMethod](https://reactnative.dev/docs/image#resizemethod-android)   
    (c) [resizeMultiplier](https://reactnative.dev/docs/image#resizemultiplier-android)   
    










