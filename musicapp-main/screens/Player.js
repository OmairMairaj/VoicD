import React from 'react';
import {
  View,
  Text, 
  SafeAreaView, 
  Image, 
  ImageBackground, 
  StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import simage from '../assets/song1.png';
import homebg from '../assets/homebackground.png';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
export default function Player(){
   
    return(
      <ImageBackground source={homebg} style={styles.backgroundContainer}>
      <SafeAreaView>
        <TouchableOpacity style = {styles.icon}>
        <Icon name="arrow-back-ios" size={28} color="#ffffff" />
        </TouchableOpacity>
          <Image source = {simage} style = {styles.image}/>
          <View style = {styles.view}>
          <TouchableOpacity>
              <Icon size = {30} style = {styles.heart} color = "#ffffff" name = "add"/>
          </TouchableOpacity>
            <Text style = {styles.title} >Drivers License</Text>
            <TouchableOpacity>
              <Icon2 size = {25} style = {styles.heart} color = "#ffffff"name = "ios-heart-outline"/>
            </TouchableOpacity>
          </View>
          <Text style = {styles.artist} >Olivia Rodrigo</Text>
          <View style = {styles.player}>
            <TouchableOpacity >
              <Icon2 name = "ios-shuffle" color = "#ffffff" size = {35} />
              </TouchableOpacity>
              <TouchableOpacity >
              <Icon2 name = "play-skip-back-outline" color = "#ffffff" size = {35} />
              </TouchableOpacity>
              <TouchableOpacity >
              <Icon2 name = "pause-outline" color = "#ffffff" size = {50} />
              </TouchableOpacity>
              <TouchableOpacity >
              <Icon2 name = "play-skip-forward-outline" color = "#ffffff" size = {35} />
              </TouchableOpacity>
              <TouchableOpacity >
              <Icon2 name = "repeat" color = "#ffffff" size = {35} />
            </TouchableOpacity>
          </View>
          
       
        
          
          

          
      </SafeAreaView>
      </ImageBackground>
    )


}
const styles = StyleSheet.create({
  backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      // justifyContent: 'center',
      // alignItems: 'center'
  },
 
  image : {
  
   alignSelf : 'center',
   marginTop : 50,
   height : 250,
   width : 250
  },

  icon : {
    marginTop : 20,
    marginLeft : 15
  },

  title : {
  
    alignSelf : 'center',
    color : "#ffffff",
    fontWeight : "300",
    fontSize : 20
    
  },
  artist : {
    alignSelf : 'center',
    color : "#ffffff",
    fontWeight : "100",
    fontSize : 14
  },
  
  view : {
    marginTop : 12,
    flexDirection : 'row',
    justifyContent : 'space-around',
   
    
  },

  heart : {
    marginTop : 5  
  },

  player : {
    marginTop : 20,
    alignSelf : 'center',
    width : 300,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
    
  }
});