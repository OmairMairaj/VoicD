import React from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from "react-native-vector-icons/MaterialIcons";

import pic from '../assets/profilepic.jpeg';
import user from '../data/user';

const { width, height } = Dimensions.get('screen');


const Settings = ({ navigation }) => {
    return (
        // <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
        //     <Text>Settings</Text>
        //     <Button title="Go Back" onPress={() => navigation.goBack()}/>
        // </View>

        <View style={styles.backgroundContainer}>
            <SafeAreaView style = {{color : '#ffffff'}}>
                <ScrollView >
                    <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back-ios" size={28} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.profileBtn} onPress = {() => {navigation.navigate("Profile")}}>
                        <View style={styles.profileImage}>
                            <Image source={user.pic} style={styles.image} resizeMode="center" />
                        </View>
                        <View style={styles.nameInfo}>
                            <Text style={styles.name}>{user.firstName+" "+user.LastName}</Text>
                            <Text style={styles.username}>View Profile</Text>
                        </View>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Data Server</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Account</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Playback</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Explict Content</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Devices</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Car</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Social</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Voice Assistants & Apps</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Audio Quality</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Storage</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Notifications</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Advertisments</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>Local Files</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText}>About</Text>
                        <View style={styles.righticon}>
                            <Icon name="arrow-back-ios" size={25} color="black" />
                        </View>
                    </TouchableOpacity>


                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({

    backgroundContainer: {
        
        width: null,
        height: null,
        color : '#ffffff'
        
    },

    icon: {
        marginTop: 20,
        marginLeft: 15
    },

    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 100,
        overflow: "hidden",
        //marginLeft: 40,
        //marginTop: 50
    },

    image: {
        flex: 1,
        width: 70,
        height: 70,
        borderRadius: 100,
        //marginLeft: 60,
        //marginTop: 40
    },

    name: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        //textAlign: 'center'
    },

    username: {
        color: 'black',
        fontSize: 16,
        //fontStyle: 'italic',
        marginTop: 5,
        //fontWeight: '700',
        //textAlign: 'center'
    },

    nameInfo: {
        overflow: "hidden",
        //paddingTop: -300,
        marginLeft: -60,
        width: 130
        //marginRight: 40,
        //justifyContent: 'center',
        //transform:
        //  [{ translateY: -85 }]
    },

    profileBtn: {
        justifyContent: 'space-between',
        flexDirection: "row",
        marginRight: width - 140,
        //marginLeft: 20,
        //marginTop: 20
        padding: 20,
        alignItems: 'center',
        marginBottom: 40,
    },

    righticon: {
        transform: [
            { scaleX: -1 }
        ],
        marginRight: width - 600,
        //position: 'absolute',
    },

    btnText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        width: 200

    },

    btn: {
        justifyContent: 'space-between',
        flexDirection: "row",
        marginRight: width - 120,
        marginLeft: 20,
        marginBottom: 30,
        //padding: 20,
        alignItems: 'center',
        //marginBottom: 30,
        color : "#ffffff"
    },


});

export default Settings;