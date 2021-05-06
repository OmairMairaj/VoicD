import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {createAppContainer} from 'react-navigation'
import Splash from '../screens/splash';
import Login from '../screens/login';
import Signup from '../screens/Signup';
// import Home from '../screens/Navigator';
// import { Button } from 'react-native';

const Authstack = createStackNavigator();

const AuthStackScreen = ({navigation}) => (
    <Authstack.Navigator headerMode='none'>
        <Authstack.Screen name="Splash" component={Splash}/>
        <Authstack.Screen name="Login" component={Login}/>
        <Authstack.Screen name="Signup" component={Signup}/>
    </Authstack.Navigator>
);

export default AuthStackScreen;
