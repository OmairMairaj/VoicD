import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

const Settings = ({navigation}) => {
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text>Settings</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
        </View>
    );
};

export default Settings;