import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
  SliderBase
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import simage from '../assets/song1.png';
import homebg from '../assets/homebackground.png';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { render } from 'react-dom';
import { getNativeSourceAndFullInitialStatusForLoadAsync } from 'expo-av/build/AV';
import track from '../assets/tracks/dl.mp3'
import { color } from 'react-native-reanimated';

const tracks = [
  {
    id : 1,
    uri : require('../assets/tracks/dl.mp3')
  }

];

export default class Player extends Component {

  constructor(){
    super();
    this.state = {
      playbackObj : null,
      soundObj : null,
      iconNameplay : 'pause-outline',
      iconNamefav : 'ios-heart-outline',
      playbackPosition : null,
      playbackDuration : null,
      currentAudio : null
      
    };
    
  }

  

render(){
  
  return (
    <ImageBackground source={homebg} style={styles.backgroundContainer}>
      <SafeAreaView>
        <TouchableOpacity style={styles.icon}>
          <Icon name="arrow-back-ios" size={28} color="#ffffff" />
        </TouchableOpacity>
        <Image source={simage} style={styles.image} />
        <View style={styles.view}>
          <TouchableOpacity>
            <Icon size={30} style={styles.heart} color="#ffffff" name="add" />
          </TouchableOpacity>
          <Text style={styles.title} >Drivers License</Text>
          <TouchableOpacity>
            <Icon2 size={25} style={styles.heart} color="#ffffff" name={this.state.iconNamefav} onPress = {() => {
              this.state.iconNamefav === 'ios-heart-outline' ? this.setState({iconNamefav : 'heart'}) :  this.setState({iconNamefav : 'ios-heart-outline'})
            }} />
          </TouchableOpacity>
        </View>
        <Text style={styles.artist} >Olivia Rodrigo</Text>

        <Slider 
          style={{width: 330, height: 40, marginLeft: 22, marginTop : 25}}
          minimumValue={0}
          maximumValue={1}
          value = {this.calculateSeekBar()}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor = "#FFFFFF"
        />
        <View style = {{width : 330, flexDirection : 'row',justifyContent : 'space-between', alignSelf : 'center'}}>
         
          <Text style = {{color: '#ffffff'}}>{this.miltotime(this.state.playbackPosition)}</Text>
          <Text style = {{color: '#ffffff'}}>{this.miltotime(this.state.playbackDuration)}</Text>
        </View>
        <View style={styles.player}>
       
          <TouchableOpacity >
            <Icon2 name="ios-shuffle" color="#ffffff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Icon2 name="play-skip-back-outline" color="#ffffff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Icon2 name={this.state.iconNameplay} color="#ffffff" size={50} onPress = {() => this.handleAudioPress(track)} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Icon2 name="play-skip-forward-outline" color="#ffffff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Icon2 name="repeat" color="#ffffff" size={30} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )

  }
miltotime = (s) => {
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return  pad(mins) + ':' + pad(secs) ;
}

  calculateSeekBar = () => {
    
    if (this.state.playbackPosition !== null && this.state.playbackDuration !== null){
     // console.log(this.state.playbackPosition / this.state.playbackDuration);
        return (this.state.playbackPosition / this.state.playbackDuration)
    }
    return 0;
  }

  OnPlaybackStatusUpdate = (playbackStatus) =>{
   // console.log(playbackStatus);
    if (playbackStatus.isLoaded && playbackStatus.isPlaying)
    {
      this.setState({...this.state,
        playbackPosition : playbackStatus.positionMillis,
        playbackDuration : playbackStatus.durationMillis
      })
    }
  }

  handleAudioPress = async (track) => {
  
    this.state.iconNameplay === 'pause-outline' ? this.setState({iconNameplay : 'play-sharp'}) :  this.setState({iconNameplay : 'pause-outline'})
  // playing audio first time
 
    if (this.state.soundObj === null){
     
    const playbackObj = new Audio.Sound();
    const status = await playbackObj.loadAsync(
      {uri : track},
      {shouldPlay : true},
     
    );
    this.setState({
      ...this.state,
      currentAudio : track,
      playbackObj:playbackObj,
      soundObj:status,
    isPlaying : true
  });
   return playbackObj.setOnPlaybackStatusUpdate(this.OnPlaybackStatusUpdate)
    }

    //pause audio

    if (this.state.soundObj.isLoaded && this.state.soundObj.isPlaying)
    {
      console.log(track);
      const status = await this.state.playbackObj.setStatusAsync({shouldPlay : false});
       return this.setState({
        ...this.state,
        soundObj:status});
      }

      //resume audio
      if (this.state.soundObj.isLoaded && !this.state.soundObj.isPlaying)
      {
        const status = await this.state.playbackObj.playAsync();
        return this.setState({
          ...this.state,
          soundObj:status});
      }

    
    }
  };






const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  image: {

    alignSelf: 'center',
    marginTop: 50,
    height: 250,
    width: 250
  },

  icon: {
    marginTop: 20,
    marginLeft: 15
  },

  title: {

    alignSelf: 'center',
    color: "#ffffff",
    fontWeight: "300",
    fontSize: 20

  },
  artist: {
    alignSelf: 'center',
    color: "#ffffff",
    fontWeight: "100",
    fontSize: 14
  },

  view: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',


  },

  heart: {
    marginTop: 5
  },

  player: {
    marginTop: 30,
    alignSelf: 'center',
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  }
});