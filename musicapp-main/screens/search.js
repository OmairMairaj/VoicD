import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";

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
  SafeAreaView,
  ScrollView,
} from "react-native";
import bgImage from "../assets/homebackground.png";
import logo from "../assets/vd-logowhite.png";
import Icon from "react-native-vector-icons/Ionicons";
import Player from "../screens/Player";
import homebg from "../assets/homebackground.png";
import { Searchbar } from "react-native-paper";
import albumCategories from "../data/albumCategories";
import albums from "../data/albums";
import { useNavigation } from "@react-navigation/native";
import SearchAlbum from "../components/SearchAlbum";


const numColumns = 2;
const WIDTH = Dimensions.get("window").width;

export default class Search extends Component {
  constructor(props,navigation) {
    super();
    this.state = {
      isLoading: true,
      press: false,
      fullData: [],
      data: [],
      search: "",
    };
    this.state.fullData =  albums.map((e)=> {return (e)});
    this.state.data =  albums.map((e)=> {return (e)});
    // console.log(this.props);
  }
  // componentDidMount() {
    
  //   console.log(this.state.fullData);
  //   console.log(this.state.data);
  // }
  handleSearch = (text) => {
    const formattedQuery = this.state.search;
    const data = _.filter(this.state.fullData, (items) => {
      if (items.name.includes(formattedQuery)) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({ data, search: text });
  };
  render() {
    const { data, isLoading } = this.state;
    return (
      <ImageBackground source={homebg} style={styles.backgroundContainer}>
        <SafeAreaView>
          <ScrollView>
            <View>
              <Searchbar
                style={styles.search}
                placeholder="Type Here..."
                onChangeText={(string) => {
                  this.state.search = string;
                  // console.log(this.state.search);
                  this.handleSearch(this.state.search);
                }}
              />
              </View>
              <View>
              <FlatList
                style={{ marginTop: 10 }}
                data={data}
                // {...console.log(data)}
                renderItem={(items) => <SearchAlbum album={items.item}/>}
                keyExtractor={(items) => items.id}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
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
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "gray",
    margin: 10,
    // marginRight: 20,
    height: 40,
    width: null,
    // paddingLeft: 10,
    // paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 15,
    fontWeight: "200",
    marginLeft: 10,
    color: "#ffffff",
  },
  category: {
    fontSize: 10,
    marginLeft: 10,
    fontWeight: "100",
    color: "#ffffff",
  },
  tinyLogo: {
    padding: 5,
    borderRadius: 12,
    height: 80,
    width: 80,
    marginLeft : 25,
  },
  item1: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
});
