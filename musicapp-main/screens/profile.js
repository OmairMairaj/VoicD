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
    NavigationContainer,
    SafeAreaView
} from 'react-native';

import pic from '../assets/profilepic.jpeg';
import homebg from '../assets/homebackground.png'
 
import Home from '../screens/home';
import { ScrollView } from 'react-native-gesture-handler';


const Profile = ({navigation}) => {
    return (
        <ImageBackground source = {homebg} style = {styles.backgroundContainer}>
        <SafeAreaView>
            <ScrollView>
                
           
                <View >
                    <View style = {styles.profileImage}>
                       
                        <Image source = {pic} style = {styles.image} resizeMode = "center"/>
                    </View>
                </View>
               
            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    profileImage : {
        width : 170,
        height : 200,
        borderRadius: 100,
        overflow: "hidden",
       
        
    },
    image : {
        flex : 1,
        width : 120,
        height : 120,
        borderRadius : 600,
        marginLeft: 25,
        marginTop : 20

    }
});

export default Profile;