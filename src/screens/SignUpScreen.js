import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
import SignUp from '../components/Authentication/SignUp'
const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}>
      <SignUp navigation ={navigation}/>
    </ScrollView>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})