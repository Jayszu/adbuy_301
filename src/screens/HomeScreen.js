import { StyleSheet, Text, View, Dimensions,ScrollView, Image} from 'react-native'
import React, { useEffect ,useState} from 'react'

import Banner from '../components/Home/Banner';
import HomeProduct from '../components/Home/HomeProduct'


var { width } = Dimensions.get('window');
const HomeScreen = () => {
  return (
    
    <ScrollView
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}>
        <Banner />
        <HomeProduct />
    </ScrollView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    

})