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
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import bgImage from "../assets/homebackground.png";
const { width, height } = Dimensions.get("screen");
import albumCategories from "../data/albumCategories";
import { useNavigation } from "@react-navigation/native";
import { AlbumProps } from "../components/Album";

export default class AllSongs extends Component {
  constructor(props, navigation) {
    super(props);
    this.state = {
      isLoading: true,
      item: [],
      fullData: [],
      search: "",
    };
  }

  bringDataToList = ({ item, index, navigation }) => {
    return (
      <TouchableOpacity
        style={style.item1}
        onPress={() =>
          this.props.navigation.navigate("Player", { album: item })
        }
      >
        <Image source={item.imageUri} style={style.tinyLogo} />
        <View style={{ justifyContent: "center" }}>
          <Text style={style.heading}>{item.name}</Text>
          <Text style={style.category}>{item.artist}</Text>
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
    let { item, isLoading } = this.state;
    console.log(albumCategories);
    return (
      <ImageBackground style={style.backgroundContainer} source={bgImage}>
        <SafeAreaView>
          <ScrollView>
            <View style={style.container}>
              <Searchbar
                styles={style.sinput}
                placeholder="Search..."
                onChangeText={(string) => {
                  this.state.search = string;
                  // console.log(this.state.search);
                  this.handleSearch(this.state.search);
                }}
              />

              <FlatList
                style={{ marginTop: 20 }}
                data={albumCategories[0].albums}
                renderItem={this.bringDataToList}
                keyExtractor={(item) => item.id}
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
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  container: {
    height: 800,
    width: 500,
  },
  icon: {
    marginTop: 50,
    marginLeft: 15,
    marginBottom: 10
  },

  sinput: {
    marginLeft: 15,
    width: WIDTH - 27,
  },
  searchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
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
    marginBottom: 20,
    height: 100,
    width: 80,
    marginLeft: 25,
  },
  item1: {
    flexDirection: "row",
  },
});
