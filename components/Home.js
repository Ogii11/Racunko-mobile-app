import React,{useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import axios from 'axios';

const Home = ({route, navigation}) => {
    const [activeItems, setActiveItems] = useState(route.params.userInfo.items);
    const {token} = route.params.userInfo;
    const {username} = route.params;

    const deleteItem = async (id) =>{
        try {
            const response = await axios.post("https://racunko.herokuapp.com/delete", {
                username: username,
                id: id
            });
            setActiveItems(
                activeItems.splice(activeItems.findIndex(e => e._id == id), 1)
            );
        } catch (e) {
            console.log(e);
        }

    }
    const renderedItems = activeItems.map(item => {
        return (
            <View key={item._id}>
                <Text>{item.amount}</Text>
                <Text>{item.category}</Text>
                <Text>{item.property}</Text>
                <Button title="Delete" color="orange" onPress={() => { deleteItem(item._id) }}></Button>
            </View>
        )
    })

    return (
        <View>
            {renderedItems}
            <Button title="Add Item" onPress={() => {navigation.navigate("Add Item",{username, activeItems, setActiveItems })}}></Button>
        </View>
    )
}

export default Home;