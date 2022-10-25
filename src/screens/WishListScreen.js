import { StyleSheet, Text, View ,ScrollView,RefreshControl, Dimensions, PermissionsAndroid,FlatList} from 'react-native'
import React ,{useState,useEffect}from 'react'
import Wishlist from '../components/Products/Wishlist';

import axios from 'axios';



var height = Dimensions.get('window').height;
var { width } = Dimensions.get('window');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const WishListScreen = ({navigation}) => {
  

  const[wishlist,setWishlist]=useState([])
  useEffect(()=>{
    wishlistres()
  },[])

  const wishlistres =async()=>{
    const res = await axios.get('')

   .then(async function(res){
    setWishlist(res.data.products); 
    console.log(res.data.products)
   })
   .catch(function(error){
    console.log(error)
   })
    
  }
  if (!wishlist){
    return (
      <View>
        <Text style={{fontSize:20, color:'black',alignSelf:'center'}}>No Products in wishlist found 😔</Text>
      </View>
    )
  }
  return (
    <View>
    <View style={styles.header1}>
    <Text style={styles.header}>Your Wishlist</Text></View>
      <FlatList
      data={wishlist}
        keyExtractor={(item,index)=> index}
        renderItem={({item})=>{
          return(
            <Wishlist item ={item} navigation={navigation}/>
          )
        }}
      />
    
    </View>
      
   
  )
}

export default WishListScreen

const styles = StyleSheet.create({
  header:{
    fontSize:30,
    color:'black',
    fontWeight:'700',
    padding:12
  },
  header1:{
   backgroundColor:'red',
   width:width,
   height:height/11
  }
})