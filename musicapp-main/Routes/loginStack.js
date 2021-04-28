import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Login from '../screens/login';
import Signup from '../screens/Signup';
import Home from '../screens/Navigator';
import Profile from '../screens/Navigator';


const screens = {
    Login: {
        screen : Login
        
    },

    Signup: {
        screen : Signup
    },
    
    Home: {
        screen : Home
    },

    Profile: {
        screen: Profile
    }
}

const loginStack = createStackNavigator(screens);

export default createAppContainer(loginStack);