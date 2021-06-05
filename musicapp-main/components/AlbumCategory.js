import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Album from './Album';

export const AlbumCategoryProps = {
    title: String,
    albums: [Album],
}

const AlbumCategory = (AlbumCategoryProps) => {
    return(
        <View>
           <Text style={styles.heading}>{AlbumCategoryProps.title}</Text>
           <FlatList 
                horizontal={true}
                data={AlbumCategoryProps.albums}
                renderItem={({item}) => <Album album={item}/>}
                keyExtractor={(item) => item.id}
                />
        </View>
    )
}

export default AlbumCategory;

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        //textAlign: 'center'
        marginTop: 20,
        marginLeft: 20
    },
})