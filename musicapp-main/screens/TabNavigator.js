// import React from 'react';
// import { View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import Search from './search';
// import Home from './home';
// import Profile from './profile';
// import Playlist from './playlist';
// import Login from './login';

// const TabNavigator = createMaterialBottomTabNavigator(
//     {
//         Home: {
//             screen: Home,
//             navigationOptions: {
//                 tabBarLabel: 'Home' ,
//                 tabBarIcon: () => (
//                     <View>
//                         <Icon style={[{ color: 'white' }]} size={25} name={'ios-home-outline'} />
//                     </View>
//                 ),
//             },
//         },
//         Search: {
//             screen : Search,
//             navigationOptions: {
//                 tabBarLabel: 'Search',
//                 tabBarIcon: () => (
//                     <View>
//                         <Icon style={[{ color: 'white' }]} size={25} name={'ios-search-outline'} />
//                     </View>
//                 ),
//             },
//         },
//         Playlist: {
//             screen : Playlist,
//             navigationOptions: {
//                 tabBarLabel: 'Playlist',
//                 tabBarIcon: () => (
//                     <View>
//                         <Icon style={[{ color: 'white' }]} size={25} name={'ios-musical-notes-outline'} />
//                     </View>
//                 ),
//             },
//         },

//         Profile: {
//             screen: Profile,
//             navigationOptions: {
//                 tabBarLabel: 'Profile',
//                 tabBarIcon: () => (
//                     <View>
//                         <Icon
//                             style={[{ color: 'white' }]} size={25} name={'ios-person-circle-outline'} />
//                     </View>
//                 ),

//             },
//         }, 


//     },


//     {
//         initialRouteName: 'Home',
//         activeColor: 'white',
//         inactiveColor: '#60114b',
//         barStyle: { backgroundColor: '#1b0b3a' },
//     }
// ); 


// export default createAppContainer(TabNavigator);



