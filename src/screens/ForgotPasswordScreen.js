import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ForgotPassword from '../components/Authentication/ForgotPassword'

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View>
      <ForgotPassword navigation={navigation}/>
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({})