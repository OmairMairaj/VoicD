import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Touchable,
  Button,
  TouchableOpacity,
  NavigationContainer,
  FlatList,
} from "react-native";
import bgImage from "../assets/homebackground.png";
import logo from "../assets/vd-logowhite.png";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../screens/home";
import homebg from "../assets/homebackground.png";
import { Searchbar } from "react-native-paper";

const numColumns = 2;
const WIDTH = Dimensions.get("window").width;

export default class Search extends Component {
  constructor(props, navigation) {
    super(props);
    this.state = {
      isLoading: true,
      press: false,
      fulldata: [],
      search: "",
    };
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <ImageBackground source={homebg} style={styles.backgroundContainer}>
        <View>
          <Searchbar style={styles.search}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  search: {
    position: "absolute",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    margin: 10,
    height: 40,
    width: WIDTH-10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage: {
    borderRadius: 25,
    alignItems: "flex-start",
    height: WIDTH / numColumns - 30,
    width: WIDTH / 2 - 25,
  },
  itemStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: WIDTH / numColumns,
    width: WIDTH / 2,
  },

  itemText: {
    textAlign: "center",
    color: "black",
    fontSize: 12,
    fontFamily: "notoserif",
    fontWeight: "bold",
  },
});
