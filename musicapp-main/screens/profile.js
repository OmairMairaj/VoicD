import { StatusBar } from 'expo-status-bar';
import React, { Component, useState} from 'react';

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
    SafeAreaView,
    FlatList,
    Animated,
} from 'react-native';

import pic from '../assets/profilepic.jpeg';
import homebg from '../assets/homebackground.png'

import Home from '../screens/home';
import { ScrollView } from 'react-native-gesture-handler';

//const { width: WIDTH } = Dimensions.get('window')
const { width, height } = Dimensions.get('screen');

const listTab = [
    {
        status: 'playlist'
    },
    {
        status: 'followers'
    },
    {
        status: 'followings'
    },
]

const Profile = ({ navigation }) => {
    const [status, setStatus] = useState('playlist')
    const setStatusFilter = status => {
        setStatus(status)
    }

    return (
        <ImageBackground source={homebg} style={styles.backgroundContainer}>
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <View style={styles.profileImage}>
                            <Image source={pic} style={styles.image} resizeMode="center" />
                        </View>
                        <View style={styles.nameInfo}>
                            <Text style={styles.name}>Maryam Altaf</Text>
                            <Text style={styles.username}>emmvi</Text>
                        </View>
                    </View>

                    <View style={styles.listTab}>
                        <TouchableOpacity style={styles.editBtn}>
                            <Text style={styles.btnText}>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editBtn}>
                            <Text style={styles.btnText}>Logout</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listTab}>
                        {
                            listTab.map(e => (
                                <TouchableOpacity
                                    style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                                    onPress = {() => setStatusFilter(e.status)}
                                    >
                                    <Text style={styles.textTab}>{e.status}</Text>
                                </TouchableOpacity>

                            ))
                        }

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

    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        overflow: "hidden",
        marginLeft: 40,
        marginTop: 50
    },

    image: {
        flex: 1,
        width: 120,
        height: 120,
        borderRadius: 100,
        //marginLeft: 60,
        //marginTop: 40
    },

    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        //textAlign: 'center'
    },

    username: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 5,
        //fontWeight: '700',
        //textAlign: 'center'
    },

    nameInfo: {
        overflow: "hidden",
        //paddingTop: -300,
        marginLeft: 200,
        //marginRight: 40,
        justifyContent: 'center',
        transform:
            [{ translateY: -85 }]
    },

    editBtn: {
        width: Dimensions.get('window').width / 2.4,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
       // marginLeft: 20,
        borderWidth: 1,
        borderColor: 'white',
        margin: 10,
        marginTop: -20,
        marginBottom: 10
    },

    btnText: {
        color: 'white',
        fontSize: 16,
        //fontWeight: '900',
        textAlign: 'center'
    },

    // logoutBtn: {
    //     width: Dimensions.get('window').width / 3.2,
    //     height: 40,
    //     borderRadius: 25,
    //     backgroundColor: 'rgba(255,255,255,0.2)',
    //     justifyContent: 'center',
    //     marginLeft: 20,
    //     borderWidth: 1,
    //     borderColor: 'white',
    //     transform:
    //         [{ translateY: -40 }],
    //     marginLeft: 200,
    // },

    listTab: {
        //flex: 1,
        //backgroundColor: 'yellow',
        padding: 10,
        flexDirection: 'row',
        //justifyContent: 'center'
        alignSelf: 'center',
        marginBottom: 20
    },

    btnTab: {
        width: Dimensions.get('window').width / 3.2,
        flexDirection: 'row',
        //borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        //borderColor: 'black',
        padding: 10,
        justifyContent: 'center',

    },

    textTab: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: '600',
        color: 'white'
    },

    btnTabActive: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,

    }



});

export default Profile;