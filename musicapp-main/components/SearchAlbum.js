import { useLinkProps, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Player from "../screens/Player";

export const SearchProps = {
  album: {
    id: String,
    imageUri: null,
    name: String,
    track: null,
    genre: String,
    artist: String,
  },
};

const SearchAlbum = (SearchProps) => {
    const navigation = useNavigation();
  const onPress = () => {
    //   console.log(SearchProps.album),
    //   console.log(`Album pressed: ${SearchProps.album.name}`),
      navigation.navigate('Player',{'album': SearchProps.album})
  };
  return (
    <TouchableOpacity
        style={styles.item1}
        onPress={onPress}
      >
        <Image source={SearchProps.album.imageUri} style={styles.tinyLogo} />
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.heading}>{SearchProps.album.name}</Text>
          <Text style={styles.category}>{SearchProps.album.artist}</Text>
        </View>
      </TouchableOpacity>
  );
};

export default SearchAlbum;

const styles = StyleSheet.create({
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
})
