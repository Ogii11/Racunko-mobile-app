import React from 'react';
import {TextInput, View, Text, Button, StyleSheet} from 'react-native';

const Start = ({navigation}) => {
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Button onPress={() => {navigation.navigate('Login')}} style={styles.button} title="Log in" />
                <Button onPress={() => {navigation.navigate('Register')}} style={styles.button} title="Sign up" />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "space-evenly"
      },
    container:{
        width: '100%',
        height: '20%',
        padding: '5%',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    button: {
        marginVertical: '2%'
    }
})

export default Start;