import React, {useState} from 'react';
import {View, Text, Button, TextInput, Picker} from 'react-native';
import axios from 'axios';

const AddItem = ({route,navigation}) => {
    const {username} = route.params;
    const {activeItems} = route.params;
    const {setActiveItems} = route.params;
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('food');
    const [description, setDescription] = useState('');
    const [property, setProperty] = useState('');

    const submitItem = async () => {
        try {
            const response = await axios.post("https://racunko.herokuapp.com/add", {
                username:username,
                item: {
                    amount:amount,
                    category:category,
                    description:description,
                    property:property
                }
            });
            setActiveItems(activeItems.push(response.data))
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View>
            <Text>Please fill inputs</Text>
            <TextInput value={amount} onChangeText={(text) => {
                var testingExp = RegExp('[A-z]')
                if(!testingExp.test(text)){
                    setAmount(text);
                } else {
                    setAmount(amount)
                }
            }} placeholder="Enter value"/>
            <Picker selectedValue = {category} onValueChange = {(value) => {
                setCategory(value);
            }}>
                <Picker.Item  label="Food" value="food"/>
                <Picker.Item label="Chlotes" value="chlotes"/>
                <Picker.Item label="Bills" value="bills"/>
            </Picker>
            <TextInput value={description} onChangeText={(text) => {setDescription(text)}} placeholder="Enter description" />
            <TextInput value={property} onChangeText={(text) => {setProperty(text)}} placeholder="Enter property" />
            <Button title="Submit" onPress={() => {submitItem()}}/>
        </View>
    );
};

export default AddItem;