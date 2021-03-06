import 'react-native-gesture-handler';  
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Start from './components/Start';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AddItem from './components/AddItem';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Start"
          component={Start}
          options={{nesto:"Cisto nesto da ima"}}
          />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{nesto:"asd"}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Add Item"
          component={AddItem}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}