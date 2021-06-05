import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect } from "react";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import Player from './screens/Player';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
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
  Button,
} from "react-native";
// import loginStack from './Routes/loginStack'
// import Signin from './screens/login';
// import Signup from './screens/Signup';
// import MainTabScreen from './Routes/MainTabScreen';
// import HomeStackScreen from './Routes/MainTabScreen';
// import SearchStackScreen from './Routes/MainTabScreen';
// import PlaylistStackScreen from './Routes/MainTabScreen';
// import ProfileStackScreen from './Routes/MainTabScreen';
import AsyncStorage from '@react-native-community/async-storage';
// import TabNavigator from './screens/TabNavigator';
import DrawerNavigator from "./Routes/DrawerNavigator";
import AuthStack from "./Routes/AuthStack";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "./components/context";
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import Songlist from "./screens/songlist";

// const Drawer = createDrawerNavigator();


export default function App() {
 
 
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);


  const initialLoginState = {
    isLoading : true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ... DefaultTheme,
    ... PaperDefaultTheme,
    colors: {
      ... DefaultTheme.colors,
      ... PaperDefaultTheme.colors
    }
  }

  const CustomDarkTheme = {
    ... DarkTheme,
    ... PaperDarkTheme,
    colors: {
      ... DarkTheme.colors,
      ... PaperDarkTheme.colors
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return{
          ... prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ... prevState,
          userName: action._id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ... prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'SIGNUP':
        return {
          ... prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };



  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(userName, password) => {
      // setUserToken("fgkj");
      // setIsLoading(false);
      let userToken;
      userToken=null;
      if( userName == 'omairmairaj@gmail.com' && password == '123456'){
        try{
          userToken = 'asdfghkl';
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e){
          console.log(e);
        }
      }
      else{
        console.log("ERROR");
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try{
        await AsyncStorage.removeItem('userToken');
      } catch(e){
        console.log(e);
      }
      dispatch({ type: 'LOGOUT'});
    },
    signUp: () => {
      // setUserToken("fgkj");
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme);
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken')
      } catch(e){
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
   
       // <Player/>
       // <Songlist/>
        
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {loginState.userToken != null ? <DrawerNavigator /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}
