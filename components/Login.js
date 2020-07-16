import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const response = await axios.post("https://racunko.herokuapp.com/login",{
            username:"ognjen123",
            password:"O123456789"
        });
        navigation.navigate("Home", {userInfo:response.data, username:"ognjen123"});
    }

    return (
        <View>
            <Text>Login</Text>
            <TextInput value={username} onChangeText={(text) => {setUsername(text)}} placeholder="Enter username"/>
            <TextInput value={password} onChangeText={(text) => {setPassword(text)}} placeholder="Enter password" />
            <Button title="Login" onPress={() => {login()}}/>
        </View>
    )
}

export default Login;