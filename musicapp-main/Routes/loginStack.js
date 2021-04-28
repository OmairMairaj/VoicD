import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import Login from '../screens/login';
import Signup from '../screens/Signup';
import Home from '../screens/Navigator';
import Profile from '../screens/Navigator';
import Search from '../screens/Navigator';
import Playlist from '../screens/Navigator';


const screens = {
    // Login: {
    //     screen : Login
        
    // },

    // Signup: {
    //     screen : Signup
    // },
    
    // Home: {
    //     screen : Home
    // },

    // Search: {
    //     screen : Search
    // },
    // Playlist: {
    //     screen : Playlist
    // },

    Profile: {
        screen: Profile
    }
}

const loginStack = createStackNavigator(screens);

export default createAppContainer(loginStack);