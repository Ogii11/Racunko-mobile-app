import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

const Login = (porps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [config, setConfig] = useState('');

    const login = async () => {
        const response = await axios.post("https://racunko.herokuapp.com/login",{
            username,
            password
        })
        setConfig(response.data)
        console.log(config)
    }

    return (
        <View>
            <Text>Login</Text>
            <TextInput value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter username"/>
            <TextInput value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter password" />
            <Button title="Login" onPress={() => {login()}}/>
        </View>
    )
}

export default Login;