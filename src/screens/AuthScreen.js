import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AuthScreen = ({navigation}) => {
  return (
    <View>
      <Text onPress={()=>navigation.navigate("Home")}>AuthScreen</Text>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})