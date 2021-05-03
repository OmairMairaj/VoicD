import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import {HomeStackScreen} from './MainStack';
import {SearchStackScreen} from './MainStack';
import {PlaylistStackScreen} from './MainStack';
import {ProfileStackScreen} from './MainStack';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "tomato" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Icon
              style={[{ color: "white" }]}
              size={25}
              name={"ios-home-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: () => (
            <Icon
              style={[{ color: "white" }]}
              size={25}
              name={"ios-search-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Playlist"
        component={PlaylistStackScreen}
        options={{
          tabBarLabel: "Playlist",
          tabBarIcon: () => (
            <Icon
              style={[{ color: "white" }]}
              size={25}
              name={"ios-musical-notes-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Icon
              style={[{ color: "white" }]}
              size={25}
              name={"ios-person-circle-outline"}
            />
          ),
        }}
      />
    </Tab.Navigator>
    // <Navigator/>
  );
}

export default MainTab;
