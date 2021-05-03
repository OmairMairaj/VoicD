import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import MainTabScreen from './MainTabScreen';
import  HomeStackScreen  from './MainTabScreen';
import  SearchStackScreen  from './MainTabScreen';
import  PlaylistStackScreen  from './MainTabScreen';
import  ProfileStackScreen  from './MainTabScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (

    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen}/>
        <Drawer.Screen name="Search" component={SearchStackScreen} />
        <Drawer.Screen name="Playlist" component={PlaylistStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator>

  );

};

export default DrawerNavigator;