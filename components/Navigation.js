import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Navigation = props => {
    return (
        <View style={nav.navigation}>
            <Text>|||</Text>
            <Text>///</Text>
        </View>
    )
};

const nav = StyleSheet.create({
    navigation: {
        width: '100%',
        backgroundColor: 'yellow',
        position:'absolute',
        top: '3%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '5%'
    }
})

export default Navigation;