import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import AuthScreen from "../src/screens/AuthScreen"
import Tabs from './Tabs';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions ={{
      headerShown:false
    }}>
    <Stack.Screen name= "Home" component ={Tabs} />
    <Stack.Screen name ="Auth" component ={AuthScreen}/>
    </Stack.Navigator>
  
  )
} 

export default Main