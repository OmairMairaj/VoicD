import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


import Home from './home';
import Profile from './profile';
import Login from './login';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <View>
                        <Icon style={[{ color: '#60114b' }]} size={25} name={'ios-home'} />
                    </View>
                ),
            },
        },

        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: () => (
                    <View>
                        <Icon
                            style={[{ color: '#60114b' }]} size={25} name={'ios-settings'} />
                    </View>
                ),

            },
        }, 


    },


    {
        initialRouteName: 'Home',
        activeColor: '#b01f8a',
        inactiveColor: '#60114b',
        barStyle: { backgroundColor: '#1b0b3a' },
    }
);

export default createAppContainer(TabNavigator);



