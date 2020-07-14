import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

const Register = (porps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [config, setConfig] = useState('');

    const register = async () => {
        const response = await axios.post("https://racunko.herokuapp.com/register",{
            username,
            password,
            email
        })
        setConfig(response.data)
        console.log(config)
    }

    return (
        <View>
            <Text>Register</Text>
            <TextInput value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter username"/>
            <TextInput value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter email"/>
            <TextInput value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter password" />
            <Button title="Register" onPress={() => {register()}}/>
        </View>
    )
}

export default Register;