import { StyleSheet, Text, View, Dimensions, ScrollView,RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProduct} from '../../../redux/Actions/ProductAction'
import ProductCard from '../Home/ProductCard';
import FilterProducts from '../Products/FilterProducts';



var { width } = Dimensions.get('window');
const HomeProduct = ({navigation}) => {
    

    const dispatch = useDispatch();
    const{products, error, loading}=useSelector(state => state.products);

    useEffect(()=>{
        if (error){
            alert(error)
        }
        dispatch(getProduct());
        
    },[dispatch,error])
    
  return (
    
   <>
    {loading ? <Text>loading</Text>: (
      
        
      <FilterProducts products={products} navigation={navigation}/>
      
   
    
   
    )}
   </>
   
   
  )
}

export default HomeProduct

const styles = StyleSheet.create({
    container:{
        width:width,
        padding:10,
        marginVertical:10
    },
    ProductCard:{
        width: width *1 -10,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:"center"
    },


})