import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import { HomeStackScreen } from "./MainStack";
import { SearchStackScreen } from "./MainStack";
import { PlaylistStackScreen } from "./MainStack";
import { ProfileStackScreen } from "./MainStack";

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "lightgray",
        activeBackgroundColor: "#2e1166",
        inactiveBackgroundColor: "#1b0b3a",
        style: {
          backgroundColor: "#1b0b3a",
          paddingBottom: 3,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Icon name="home-outline" style={[{ color: "white" }]} size={25} />
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
              name={"search-outline"}
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
              name={"musical-notes-outline"}
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
              name={"person-circle-outline"}
            />
          ),
        }}
      />
    </Tab.Navigator>
    // <Navigator/>
  );
}

export default MainTab;
