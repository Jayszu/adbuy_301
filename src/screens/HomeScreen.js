import { StyleSheet, Text, View, Dimensions,ScrollView, Image} from 'react-native'
import React, { useEffect ,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import FilterProducts from '../components/Products/FilterProducts'
import Banner from '../components/Home/Banner';
import HomeProduct from '../components/Home/HomeProduct'
import { getProduct } from '../../redux/Actions/ProductAction';
import Header from '../components/Layout/Header';


var { width } = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {products,error} = useSelector(state => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <View style={styles.container}>
    
    <ScrollView
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}>
    <Header navigation={navigation}/>
        <Banner />

       <HomeProduct products={products} navigation={navigation} />
    </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#e5e5e5'
    }

})