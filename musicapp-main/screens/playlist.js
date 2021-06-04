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
 
import { Searchbar } from 'react-native-paper';
//import {SearchBar} from 'react-native-elements';
 
const { width, height } = Dimensions.get('screen');
 
function Playlist({ navigation }) {
    return (
        <ImageBackground source={homebg} style={styles.backgroundContainer}>
            <SafeAreaView>
                <ScrollView>
                    <Searchbar
                        placeholder="Search in playlist"
                        //backgroundContainer="black"
                        onChangeText={(string) => {
                            this.state.search = string
                            console.log(this.state.search)
                            this.handleSearch(this.state.search)
                        }}
                    >
                    </Searchbar>
                    
                    <View>
                        <TouchableOpacity style={styles.playlist}>
                            <View style={styles.songpic} >
                                <MaterialCommunityIcons name="playlist-plus" size={60} color="white" overflow="hidden" />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.songname}>Create Playlist</Text>
                                <Text style={styles.name}>abc </Text>
                            </View>
                        </TouchableOpacity>
 
                        <TouchableOpacity style={styles.playlist}>
                            <View style={styles.songpic} >
                                <MaterialCommunityIcons name="cards-heart" size={60} color="white" overflow="hidden" />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.songname}>Liked Songs</Text>
                                <Text style={styles.name}>69 songs</Text>
                            </View>
                        </TouchableOpacity>
 
                        <TouchableOpacity style={styles.playlist}>
                            <View style={styles.songpic} >
                                <MaterialCommunityIcons size={60} color="white" overflow="hidden" />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.songname}>Sad Songs</Text>
                                <Text style={styles.name}>by Maryam</Text>
                            </View>
                        </TouchableOpacity>
 
 
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
    songname: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        //textAlign: 'center'
        //marginTop: 20,
        marginLeft: 20,
        //marginRight: 50,
        //position: 'relative',
        //alignItems: "center"
    },
 
    name: {
        color: 'white',
        fontSize: 16,
        //fontWeight: '500',
        //textAlign: 'center'
        //marginTop: 20,
        marginLeft: 20,
        //marginRight: 50,
        //position: 'relative',
        //alignItems: "center"
    },
 
    // textContainer: {
    //     marginRight: 50
    // },
 
    songpic: {
        width: 130,
        height: 130,
        //marginLeft: 20,
        //marginTop: 20,
        borderColor: 'white',
        borderWidth: 2,
        //overflow: 'hidden',
        //position: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    playlist: {
        //position: 'flex',
        //justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        //flex: 1,
        padding: 20,
        marginRight: width - 140
    }
});
 
export default Playlist;

