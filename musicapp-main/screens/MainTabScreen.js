import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import Home from "./home";
import Profile from "./profile";
import Search from "./search";
import Playlist from "./playlist";
import Navigator from './Navigator';

import { createAppContainer } from "react-navigation";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PlaylistStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1b0b3a",
          textAlign: "center",
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

function SearchStackScreen({navigation}) {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1b0b3a",
          textAlign: "center",
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

function PlaylistStackScreen({navigation}) {
  return (
    <PlaylistStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1b0b3a",
          textAlign: "center",
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

function ProfileStackScreen({navigation}) {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1b0b3a",
          textAlign: "center",
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

const Tab = createBottomTabNavigator();

function MainTabScreen({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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

export default MainTabScreen;
