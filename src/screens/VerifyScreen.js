import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Otp from '../components/Authentication/Otp'
import { StylesProvider } from '@material-ui/core'
const VerifyScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.Text}>Verify Otp</Text>
      <Otp navigation={navigation}/>
    </View>
  )
}

export default VerifyScreen

const styles = StyleSheet.create({
Text:{
    textAlign:"center",
    fontWeight:'bold',
    fontSize:40,
    color:"black"
}

})