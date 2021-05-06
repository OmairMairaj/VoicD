import React from 'react';
import { View, Text, Button, Dimensions,TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import bgImage from '../assets/background.jpg'
import logo from '../assets/vd-logo.png'
import homebg from '../assets/homebackground.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Splash = ({navigation}) => {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Animatable.Image
                    animation="bounceIn"
                    duration={3000}
                    source={logo}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                </View>
                <Animatable.View style={styles.footer} animation="fadeInUpBig">
                    <Text style={styles.title}>Come listen to your favorite songs.</Text>
                    <Text style={styles.text}>Sign in with your account</Text>
                    <View styles={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={()=> navigation.navigate("Login")}>
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons name="navigate-next" color="#fff" size={20}/>
                    </TouchableOpacity>
                    </View>
                    
                </Animatable.View>
            </View>
        </ImageBackground>
    );
};

export default Splash;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    container: {
        flex:1,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#1b0b3a',
        // backgroundColor: {homebg},
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 50,
    },
    logo: {
        width: height_logo*1.35,
        height: height_logo,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        color: "grey",
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: '#60114B',
        marginTop: 40,
        marginLeft: 30
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});