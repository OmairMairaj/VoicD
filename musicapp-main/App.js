import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import {
//   ImageBackground,
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Dimensions,
//   Touchable,
//   TouchableOpacity,
//   Button
// } from 'react-native';
// import loginStack from './Routes/loginStack'
// import Signin from './screens/login';
// import Signup from './screens/Signup';
// import MainTabScreen from './Routes/MainTabScreen';
// import HomeStackScreen from './Routes/MainTabScreen';
// import SearchStackScreen from './Routes/MainTabScreen';
// import PlaylistStackScreen from './Routes/MainTabScreen';
// import ProfileStackScreen from './Routes/MainTabScreen';

// import TabNavigator from './screens/TabNavigator';
import DrawerNavigator from './Routes/DrawerNavigator';

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
  //  <Navigator/>
   <NavigationContainer>
      <DrawerNavigator/>
   </NavigationContainer>
  );
}



