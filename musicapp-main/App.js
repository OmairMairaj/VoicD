import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Touchable,
  TouchableOpacity,
  Button
} from 'react-native';
import loginStack from './Routes/loginStack'
import Signin from './screens/login';
import Signup from './screens/Signup';
import MainTabScreen from './screens/MainTabScreen';
import HomeStackScreen from './screens/MainTabScreen';
import SearchStackScreen from './screens/MainTabScreen';
import PlaylistStackScreen from './screens/MainTabScreen';
import ProfileStackScreen from './screens/MainTabScreen';

import TabNavigator from './screens/Navigator';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  //  <Navigator/>
   <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen}/>
        <Drawer.Screen name="Search" component={SearchStackScreen} />
        <Drawer.Screen name="Playlist" component={PlaylistStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator>
   </NavigationContainer>
  );
}



