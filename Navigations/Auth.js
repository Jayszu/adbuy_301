import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../src/screens/LoginScreen'
import SignUpScreen from '../src/screens/SignUpScreen'
import Splash from '../src/components/Layout/Splash'
import ForgotPasswordScreen from '../src/screens/ForgotPasswordScreen'
import Otp from '../src/components/Authentication/Otp'
import VerifyScreen from '../src/screens/VerifyScreen'
import HomeScreen from '../src/screens/HomeScreen'
import Tabs from './Tabs'

const Auth = () => {
  const Stack = createNativeStackNavigator();
  return (

     <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name ='Login' component={LoginScreen} />
      <Stack.Screen name ='Signup' component={SignUpScreen} />
      <Stack.Screen name ='Splash' component={Splash} />
      <Stack.Screen name ='Forgot' component={ForgotPasswordScreen} />
      <Stack.Screen name ='Verify' component={VerifyScreen} />
      <Stack.Screen name ='Otp' component={Otp} />
     
     </Stack.Navigator>
  )
}

export default Auth

