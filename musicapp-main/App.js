import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Touchable,
  TouchableOpacity
} from 'react-native';

import Navigator from './Routes/loginStack'


import { Drawer } from 'react-native-paper';

import TabNavigator from './screens/Navigator';

const { width: WIDTH } = Dimensions.get('window')

export default function App() {
  return (
   <Navigator/>
  );
}



