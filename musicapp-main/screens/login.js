import { StatusBar } from 'expo-status-bar';
import React, { Component, createRef, useState } from 'react';

import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  Touchable,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import { AuthContext } from '../components/context';
import bgImage from '../assets/background.jpg'
import logo from '../assets/vd-logo.png'
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage';

const { width: WIDTH } = Dimensions.get('window')

const Signin = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [showPass, setShowPass] = React.useState(true);
  const [press, setPress] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errortext, setErrortext] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  // const signinAPI = () => {
  //   var url = "http://192.168.100.5:2000/api/signin";
  //   setErrortext('');
  //   if (!email) {
  //     alert('Please fill Email');
  //     return;
  //   }
  //   if (!password) {
  //     alert('Please fill Password');
  //     return;
  //   }
  //   setLoading(true);
  //   let d = {userEmail: email, userPassword: password};
  //   let data = [d];
  //   fetch(url, {
  //     mode: 'no-cors',
  //     method: "POST",
  //     headers: {
  //       "Access-Control-Allow-Origin":"*",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data),
  //   })
      // .then((res) => {
      //   console.log(res.json()),
      //   console.log("Login Successful"),
      //   alert("Login Successful!");
      // })
      // .catch((error) => console.error("Error : ", error))
      // .then((response) => console.log("Success :", response));
      // .then((response) => response.json())
      // .then((response) => {
        //Hide Loader
        // setLoading(false);
        // console.log(response);
        // If server response message same as Data Matched
      //   if (response.status === 'success') {
      //     AsyncStorage.setItem('user_id', response.data.email);
      //     console.log(response.data.email);
      //     navigation.replace('DrawerNavigator');
      //   } else {
      //     setErrortext(response.msg);
      //     console.log('Please check your email id or password');
      //   }
      // })
      // .catch((error) => {
        //Hide Loader
  //       setLoading(false);
  //       console.error(error);
  //     });
  // }

  const checkShowPass = () => {
    if (press == false) {
      setShowPass(false);
      setPress(true);
    }
    else {
      setShowPass(true);
      setPress(false);
    }
  }

  const loginHandle = (userName, password) =>{
    signIn(email, password);
    console.log(email);
    console.log(password);
  }


  // render() {
    return (
     // <ScrollView>
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} resizeMode="stretch"/>
          </View>
          <View style={styles.inputContainer}>
            <Icon name={'ios-person-outline'} size={25} color={'rgba(255,255,255,0.7)'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Enter Email'} paddingLeft={60}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
              returnKeyType="next"
              onChangeText={(UserEmail) =>
                setEmail(UserEmail)
              }
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name={'ios-key-outline'} size={25} color={'rgba(255,255,255,0.7)'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Password'} paddingLeft={60}
              onChangeText={(UserPassword) =>
                setPassword(UserPassword)
              }
              secureTextEntry={showPass}
              keyboardType="default"
              onSubmitEditing={Keyboard.dismiss}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
              returnKeyType="next"
            />
            <TouchableOpacity style={styles.btnEye}
              onPress={() => checkShowPass()}>
              <Icon name={press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'}
                size={26} color={'rgba(255,255,255,0.7)'} />
            </TouchableOpacity>

            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}

            <TouchableOpacity style={styles.btnLogin}
            onPress={() => {
              console.log(email);
              console.log(password);
              loginHandle(email, password)
            }}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signup}>Don't have a VoicD Account? Sign up</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
     // </ScrollView>
    );
  }

  export default Signin;

// }



const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,

  },

  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },

  logo: {
    width: height_logo*1.15,
    height: height_logo*.75,
    // width: 120,
    // height: 120,
    //paddingBottom:100
    //translateY:-40

  },

  LogoText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '500',
    //marginTop: 10,
    opacity: 0.7
  },

  inputContainer: {
    marginTop: 10,

  },

  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 43
  },

  btnEye: {
    position: 'absolute',
    top: 8,
    right: 43
  },

  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#60114B',
    justifyContent: 'center',
    margin: 20
  },

  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    //fontWeight: '900',
    textAlign: 'center'
  },
  signup: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center'
  }


});
