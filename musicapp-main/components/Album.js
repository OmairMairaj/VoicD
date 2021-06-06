import { useLinkProps, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Player from "../screens/Player";

export const AlbumProps = {
  album: {
    id: String,
    imageUri: null,
    name: String,
    track: null,
    genre: String,
    artist: String,
  },
}; 

const Album = (AlbumProps) => {
    const navigation = useNavigation();
  const onPress = () => {
      // console.log(AlbumProps.album),
      // console.log(`Album pressed: ${AlbumProps.album.name}`),
      navigation.navigate('Player',{'album': AlbumProps.album})
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={AlbumProps.album.imageUri}
          style={styles.songpic}
        />
        <Text style={styles.songText}>{AlbumProps.album.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Album;

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 150,
    marginLeft: 25,
    marginTop: 25,
  },
  songpic: {
    width: 100,
    height: 100,
  },
  songText: {
    alignItems: "center",
    textAlign: "center",
    color: "grey",
  },
});
