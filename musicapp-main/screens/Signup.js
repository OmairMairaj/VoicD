import { StatusBar } from "expo-status-bar";
import React from "react";
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
} from "react-native";
import bgImage from "../assets/background.jpg";
import logo from "../assets/vd-logo.png";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const { width: WIDTH } = Dimensions.get("window");

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
    };
  }
  async signupAPI() {
    var url = "http://192.168.100.5:2000/api/signup";
    let data = {};
    data.firstName = this.state.firstName;
    data.lastName = this.state.lastName;
    data.username = this.state.username;
    data.email = this.state.email;
    data.password = this.state.password;
    fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin":"*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error : ", error))
      .then((response) => console.log("Success :", response));
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({
        showPass: false,
        press: true,
      });
    } else {
      this.setState({
        showPass: true,
        press: false,
      });
    }
  };
  render() {
    return (
      // <ScrollView>
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} resizeMode="stretch"/>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"First Name"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            ref= {(el) => { this.firstName = el; }}
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Last Name"}
            // secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            ref= {(el) => { this.lastName = el; }}
                    onChangeText={(lastName) => this.setState({lastName})}
                    value={this.state.lastName}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            // secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            ref= {(el) => { this.username = el; }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            // secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            ref= {(el) => { this.email = el; }}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            ref= {(el) => { this.password = el; }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
          />
        </View>

        {/* 
          <TouchableOpacity style={styles.btnEye}
            onPress = {this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'}
              size={26} color={'rgba(255,255,255,0.7)'} />
          </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            console.log(this.state.firstName);
            console.log(this.state.lastName);
            console.log(this.state.email);
            console.log(this.state.password);
            this.signupAPI();
          }}
        >
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.login}>Already have a VoicD Account? Login</Text>
        </TouchableOpacity>
      </ImageBackground>
      /* </ScrollView> */
    );
  }
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },

  logo: {
    width: height_logo,
    height: height_logo*.55,
    // width: 120,
    // height: 120,
    //paddingBottom:100
    //translateY:-40
  },

  LogoText: {
    color: "white",
    fontSize: 35,
    fontWeight: "500",
    //marginTop: 10,
    opacity: 0.7,
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
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },

  inputIcon: {
    position: "absolute",
    top: 8,
    left: 43,
  },

  btnEye: {
    position: "absolute",
    top: 8,
    right: 43,
  },

  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#60114B",
    justifyContent: "center",
    margin: 20,
  },

  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    //fontWeight: '900',
    textAlign: "center",
  },

  login: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
  },
});
