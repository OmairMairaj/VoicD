import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import Home from '../screens/home';
import Profile from "../screens/profile";
import Search from "../screens/search";
import Playlist from "../screens/playlist";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PlaylistStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1b0b3a",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "VoicD",
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#1b0b3a"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

export function SearchStackScreen({navigation}) {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1b0b3a",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
    >
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#1b0b3a"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </SearchStack.Navigator>
  );
}

export function PlaylistStackScreen({navigation}) {
  return (
    <PlaylistStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1b0b3a",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
    >
      <PlaylistStack.Screen
        name="Playlist"
        component={Playlist}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#1b0b3a"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </PlaylistStack.Navigator>
  );
}

export function ProfileStackScreen({navigation}) {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1b0b3a",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#1b0b3a"
              onPress={() => {
                navigation.openDrawer();
              }}
            ></Icon.Button>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default {HomeStackScreen , SearchStackScreen, PlaylistStackScreen, ProfileStackScreen };