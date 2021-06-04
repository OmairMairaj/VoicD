import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react';

//import styles from './style'
import {
    View,
    Text,
    ImageBackground,
    Image,
    SafeAreaView,
    Easing,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    Modal,
    ScrollView,
    //SafeAreaView
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { SearchBar } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');
import _ from "lodash";

import homebg from '../assets/homebackground.png'


export default class songlist extends Component {

    // initial state
    state = {
        isVisible: false
    };

    // hide show modal
    displayModal(show) {
        this.setState({ isVisible: show })
    }

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: [],
            count: 0,
            iconName: "bookmark",
            iconNamefav: 'ios-heart-outline',
            fullData: [],
            search: ""
        }

    }

    componentDidMount() {
        fetch('https://private-anon-abf096c20c-aabf.apiary-mock.com/books', {
            method: 'POST',
            body: JSON.stringify("abcd")
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    data: responseJson.body,
                    fullData: responseJson.body,
                })
            })
        this.displayModal(false)
        console.log(this.state.data)
    }

    onCloseModal = () => {
        this.setState({ item: "" })
    }
    handleSearch = (text) => {
        const formattedQuery = this.state.search
        const data = _.filter(this.state.fullData, items => {
            if (items.title.includes(formattedQuery)) {
                return true
            }
            else {
                return false
            }
        })
        this.setState({ data, search: text })
    }
    bringDataToList = ({ item, index }) => {
        this.state.count = 0

        return (
            <ImageBackground source={homebg} style={styles.backgroundContainer}>
                <SafeAreaView>
                    <ScrollView>
                        <View>
                            <TouchableOpacity style={styles.btn}
                            // onPress={() => {
                            // this.displayModal(true);
                            >
                                <Text style={styles.text}>{item.title}</Text>
                                <FlatList
                                    data={item.authors}
                                    renderItem={this.bringAuthorToList}
                                    keyExtractor={(item, index) => index.toString()}
                                    horizontal
                                />
                            </TouchableOpacity>

                            {/* <TouchableOpacity style={styles.bookmark}>

                                <Icon size={25}
                                    //style={styles.heart}
                                    color="#ffffff"
                                    name={this.state.iconNamefav}
                                    onPress={() => {
                                        console.log("hello");
                                        this.state.iconNamefav === 'ios-heart-outline' ?
                                            this.setState({ iconNamefav: 'heart' }) : this.setState({ iconNamefav: 'ios-heart-outline' })
                                        console.log(this.state.iconNamefav);
                                    }} />
                            </TouchableOpacity> */}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground >

        )
    }

    bringAuthorToList = ({ item, index }) => {
        if (this.state.count === 0) {
            this.state.count = 1
            return (
                <View>
                    <Text style={styles.author}>By {item.title}</Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text style={styles.author} >,{item.title}</Text>
                </View>
            )
        }
    }

    render() {
        let { data, isLoading } = this.state
        return (
            <View >
                <Searchbar
                    placeholder="Type"
                    onChangeText={(text) => {
                        this.state.search = text
                        console.log(this.state.search)
                        this.handleSearch(this.state.search)
                    }}
                ></Searchbar>
                <FlatList
                    data={data}
                    renderItem={this.bringDataToList}
                    keyExtractor={(item, index) => index.toString()}>

                    <TouchableOpacity style={styles.bookmark}>

                                <Icon size={25}
                                    //style={styles.heart}
                                    color="#ffffff"
                                    name={this.state.iconNamefav}
                                    onPress={() => {
                                        console.log("hello");
                                        this.state.iconNamefav === 'ios-heart-outline' ?
                                            this.setState({ iconNamefav: 'heart' }) : this.setState({ iconNamefav: 'ios-heart-outline' })
                                        console.log(this.state.iconNamefav);
                                    }} />
                            </TouchableOpacity>
                </FlatList>
            </View>
        )
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

    text: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        width: width - 90,
        color: 'white',
        //fontFamily: "Montserrat"
    },

    btn: {
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        //backgroundColor: '#e0e0e0'
    },

    bookmark: {
        position: 'relative',
        alignItems: 'flex-end',
        color: 'white',
    },

    container: {
        //marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        justifyContent: "space-between",
    },

    author: {
        marginBottom: 10,
        marginTop: 10,
        color: 'white',
    },

    details: {
        marginBottom: 10,
        marginTop: 10,
        color: '#545454',
    },

    price: {
        marginBottom: 10,
        marginTop: 40,
        color: '#545454',
        fontSize: 16,
        fontWeight: 'bold'
    },

    image: {
        marginTop: 150,
        marginBottom: 10,
        width: '100%',
        height: 350,
    },
    popup: {
        color: '#000000',
        fontSize: 22,
    },
    closeText: {
        marginTop: 200,
        fontSize: 24,
        color: '#00479e',
        textAlign: 'center',
    }
});