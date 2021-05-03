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
    Button,
    TouchableOpacity,
    NavigationContainer
} from 'react-native';

import bgImage from '../assets/homebackground.png'
import logo from '../assets/vd-logowhite.png'
import Icon from 'react-native-vector-icons/Ionicons'
 
import Home from '../screens/home';


const Search = ({navigation}) => {
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Search</Text>
            <Button title="Go to Playlist Page" onPress={() => navigation.navigate("Playlist")}/>
            <Button title="Go to Profile Page" onPress={() => navigation.navigate("Profile")}/>
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
            <Button title="Go to First Page" onPress={() => navigation.popToTop()}/>
        </View>
    )
}

export default Search;