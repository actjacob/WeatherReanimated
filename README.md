Packages for Project Setup
As will be stated you can use NPM or Yarn.

Here are the packages that we will be installing.

React Navigation

yarn add @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler

OR

npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler

React Native Skia

yarn add @shopify/react-native-skia

OR

npm install @shopify/react-native-skia

React Reanimated

yarn add react-native-reanimated

OR

npm install react-native-reanimated

Bottom Sheet

yarn add @gorhom/bottom-sheet

OR

npm install @gorhom/bottom-sheet

Expo Libraries for Fonts & Blur

yarn add expo-splash-screen expo-font expo-blur

OR

npm install expo-splash-screen expo-font expo-blur

Expo Location

yarn add expo-location

OR

npm install expo-location

Babel.config plugin

plugins: [
'react-native-reanimated/plugin',
],

If you don't have a Babel.config
Firstly you need to write CMD
echo.>babel.config.js

App.json

"plugins": [
[
"expo-location",
{
"locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
}
]
],

11. EAS Build/Development Build
    Kütüphane çakışmalarını nasıl çözeceğimizi ve projeye herhangi bir yerel kodu nasıl entegre edeceğimizi anlatan geliştirme derlemeleri hakkında konuşalım.

    npx expo prebuild
