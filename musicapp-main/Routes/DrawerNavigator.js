import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import DrawerContent from '../screens/DrawerContent';



import MainTabScreen from './MainTabScreen';
import  HomeStackScreen  from './MainTabScreen';
import  SearchStackScreen  from './MainTabScreen';
import  PlaylistStackScreen  from './MainTabScreen';
import  ProfileStackScreen  from './MainTabScreen';
import Settings from '../screens/settings';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (

    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={HomeStackScreen}/>
        <Drawer.Screen name="Settings" component={Settings} />
        {/* <Drawer.Screen name="Playlist" component={PlaylistStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
      </Drawer.Navigator>

  );

};

export default DrawerNavigator;