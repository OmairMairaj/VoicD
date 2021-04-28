import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

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
  TouchableOpacity
} from 'react-native';

import bgImage from '../assets/background.jpg'
import logo from '../assets/vd-logowhite.png'
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')

export default class Example extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      status: '',
      showPass: true,
      press: false
    }
  }
  async signinAPI() {
    var url = "http://192.168.1.102:2000/api/signin";
    let data = {};
    data.email = this.state.email;
    data.password = this.state.password;
    fetch(url, {
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin":"*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res.json()),
        alert("Login Successful!");
      })
      .catch((error) => console.error("Error : ", error))
      .then((response) => console.log("Success :", response));
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({
        showPass: false,
        press: true
      })
    }
    else {
      this.setState({
        showPass: true,
        press: false
      })
    }
  }


  render() {
    return (
     // <ScrollView>
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            {/* <Text style={styles.LogoText}> LOGIN </Text> */}
          </View>

          <View style={styles.inputContainer}>
            <Icon name={'ios-person-outline'} size={25} color={'rgba(255,255,255,0.7)'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Email'} paddingLeft={60}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
              ref= {(el) => { this.email = el; }}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name={'ios-key-outline'} size={25} color={'rgba(255,255,255,0.7)'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Password'} paddingLeft={60}
              secureTextEntry={this.state.showPass}
              placeholderTextColor={'rgba(255,255,255,0.7)'}
              underlineColorAndroid='transparent'
              ref= {(el) => { this.password = el; }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
            />

            <TouchableOpacity style={styles.btnEye}
              onPress={this.showPass.bind(this)}>
              <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'}
                size={26} color={'rgba(255,255,255,0.7)'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnLogin}
            onPress={() => {
              console.log(this.state.email);
              console.log(this.state.password);
              this.signinAPI();
            }}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.signup}>Don't have a VoicD Account? Sign up</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
     // </ScrollView>
    );
  }
}

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
    marginBottom: 50,

  },

  logo: {
    width: 120,
    height: 120,
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
