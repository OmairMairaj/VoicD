import React, { Component } from "react";

import {
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Easing,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import _ from "lodash";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import bgimage from "../assets/homebackground.png";
const { width, height } = Dimensions.get("screen");

export default class AllSongs extends Component {
  constructor(props, navigation) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      fullData: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://private-anon-5ac48ae358-aabf.apiary-mock.com/events", {
      method: "POST",
      body: JSON.stringify("collection"),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.body.items,
          fullData: responseJson.body.items,
        });
        console.log(this.state.data);
      });
  }

  bringDataToList = ({ item, index }) => {
    //console.log(item.image)

    return (
      <TouchableOpacity
        style={style.item1}
        onPress={() => this.props.navigation.navigate("Player")}
      >
        <Image source={{ uri: item.image }} style={style.tinyLogo} />
        <View style={{ justifyContent: "center" }}>
          <Text style={style.heading}>{item.title}</Text>
          <Text style={style.category}>{item.categories[0].title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  handleSearch = (text) => {
    const formattedQuery = this.state.search;
    const data = _.filter(this.state.fullData, (items) => {
      if (items.title.includes(formattedQuery)) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({ data, search: text });
  };

  render() {
    let { data, isLoading } = this.state;
    return (
      <ImageBackground source={bgimage}>
        <SafeAreaView>
          <ScrollView>
            <View style={style.container}>
              <Searchbar
                styles={style.sinput}
                placeholder="Search..."
                onChangeText={(string) => {
                  this.state.search = string;
                  console.log(this.state.search);
                  this.handleSearch(this.state.search);
                }}
              ></Searchbar>

              <FlatList
                style = {{marginTop : 10}}
                data={data}
                renderItem={this.bringDataToList}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const { width: WIDTH } = Dimensions.get("window");
const style = StyleSheet.create({
  container: {
    height : 800,
    width : 500,
   
  },
 
  sinput: {
    marginLeft: 15,
    width: WIDTH - 27,
  },
  searchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  searchBtn: {
    // width : 20,
    // height : 20,
    //borderRadius : 50,
    //backgroundColor : '#ffffff',
    //color : '#ffffff',
    marginRight: 15,
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
    height: 100,
    width: 80,
    marginLeft : 25,
  },
  item1: {
    flexDirection: "row",
  },
});
