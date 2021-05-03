import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    NavigationContainer,
    Button
} from 'react-native';

import bgImage from '../assets/homebackground.png'
import logo from '../assets/vd-logowhite.png'
import Icon from 'react-native-vector-icons/Ionicons'

import TabNavigator from './Navigator';
import Profile from '../screens/profile';

const Playlist = ({navigation}) => {
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Playlist</Text>
            <Button title="Go to Search Page" onPress={() => navigation.navigate("Search")}/>
            <Button title="Go to Profile Page" onPress={() => navigation.navigate("Profile")}/>
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
            <Button title="Go to First Page" onPress={() => navigation.popToTop()}/>
        </View>
    );
};

export default Playlist;