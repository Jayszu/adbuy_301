import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'

const ProductsScreen = ({navigation}) => {
  return (
    <View>
    <Header navigation={navigation} />
      <Text>ProductsScreen</Text>
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})