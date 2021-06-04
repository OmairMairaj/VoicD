import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Audio} from 'expo-av';
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
    Button,
    SafeAreaView,
    ScrollView
} from 'react-native';

import bgImage from '../assets/homebackground.png'
import logo from '../assets/vd-logowhite.png'
import Icon from 'react-native-vector-icons/Ionicons'

import TabNavigator from './TabNavigator';
import Profile from '../screens/profile';

import homebg from '../assets/homebackground.png'
import { FlatList } from 'react-native-gesture-handler';

import song2 from '../assets/song2.jpg'

const { width, height } = Dimensions.get('screen');

function Home({ navigation }) {
    return (
        // <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
        //     <Text>Home</Text>
        //     <Button title="Go to Search Page" onPress={() => navigation.navigate("Search")}/>

        //     <Button title="Go to Playlist Page" onPress={() => navigation.navigate("Playlist")}/>

        //     <Button title="Go to Profile Page" onPress={() => navigation.navigate("Profile")}/>
        // </View>
        <ImageBackground source={homebg} style={styles.backgroundContainer}>
            <SafeAreaView>
                <ScrollView>   
                    <View>
                        <Text style={styles.heading}>Recently Played</Text>
                        {/* <Image source={albumpic} style={styles.image} /> */}
                        <ScrollView style={styles.albumTab} horizontal={true}>
                            <TouchableOpacity style={styles.editBtn}>
                                <Image source={song2} style={styles.songpic} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.editBtn}>
                                <Image source={song2} style={styles.songpic} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.editBtn}>
                                <Image source={song2} style={styles.songpic} />
                            </TouchableOpacity><TouchableOpacity style={styles.editBtn}>
                                <Image source={song2} style={styles.songpic} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.editBtn}>
                                <Image source={song2} style={styles.songpic} />
                            </TouchableOpacity>
                        </ScrollView>

                        <Text style={styles.heading}>Most Played</Text>
                        <ScrollView style={styles.albumTab} horizontal={true}>
                            <TouchableOpacity style={styles.editBtn}>
                                <Image source={song2} style={styles.songpic} />
                            </TouchableOpacity>
                        </ScrollView>

                        <Text style={styles.heading}>Liked Songs</Text>
                        <ScrollView style={styles.albumTab} horizontal={true}>
                            <TouchableOpacity style={styles.editBtn}>
                                <Image source={song2} style={styles.songpic} />
                            </TouchableOpacity>
                        </ScrollView>

                        <Text style={styles.heading}>For You</Text>
                        <ScrollView style={styles.albumTab} horizontal={true}>
                            <TouchableOpacity style={styles.editBtn}>
                                <Image source={song2} style={styles.songpic} />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>


    );
};

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    heading: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        //textAlign: 'center'
        marginTop: 20,
        marginLeft: 20
    },


    albumTab: {
        //flex: 1,
        //backgroundColor: 'yellow',
        //padding: 10,
        flexDirection: 'row',
        //justifyContent: 'center'
        //alignSelf: 'center',
        marginBottom: 20
    },

    songpic: {
        width: 100,
        height: 100,
        marginLeft: 20,
        marginTop: 20
    }
});

export default Home;