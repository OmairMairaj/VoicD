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

import TabNavigator from './TabNavigator';
import Profile from '../screens/profile';

function Home({navigation}){
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Home</Text>
            <Button title="Go to Search Page" onPress={() => navigation.navigate("Search")}/>

            <Button title="Go to Playlist Page" onPress={() => navigation.navigate("Playlist")}/>

            <Button title="Go to Profile Page" onPress={() => navigation.navigate("Profile")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;