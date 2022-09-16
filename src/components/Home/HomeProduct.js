import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getProduct} from '../../../redux/Actions/ProductAction'
import ProductCard from '../Home/ProductCard';

var { width } = Dimensions.get('window');
const HomeProduct = () => {

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
      
        <ScrollView style ={styles.container}>
      <Text style ={{
        fontSize:20,
        color:'#333',
        textAlign:'center'

      }}>Best Seller</Text>
      <View style = {styles.ProductCard}>
      {products && products.map(product=>(
        <ProductCard key = {product._id}product={product}/>
    ))}
      </View>
    </ScrollView>
   
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