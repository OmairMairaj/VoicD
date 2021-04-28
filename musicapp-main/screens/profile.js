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


const Profile = ({navigation}) => {
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Home</Text>
            <Button title="Go to Home Page" onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Profile;