import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

const Register = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [config, setConfig] = useState('');

    const register = async () => {
        const response = await axios.post("https://racunko.herokuapp.com/register",{
            username:username,
            password:password,
            email:email
        });
        setConfig(response.data)
        console.log(config)
        navigation.navigate("Login")
        
    }

    return (
        <View>
            <Text>Register</Text>
            <TextInput value={username} onChangeText={(text) => {setUsername(text)}} placeholder="Enter username"/>
            <TextInput value={email} onChangeText={(text) => {setEmail(text)}} placeholder="Enter email"/>
            <TextInput value={password} onChangeText={(text) => {setPassword(text)}} placeholder="Enter password" />
            <Button title="Register" onPress={() => {register()}}/>
        </View>
    )
}

export default Register;