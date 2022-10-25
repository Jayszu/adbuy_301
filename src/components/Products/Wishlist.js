import { StyleSheet, Text, View,ScrollView, Dimensions,Image,TouchableWithoutFeedback,Button} from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import { wishListDataReducer } from '../../../redux/Reducers/ProductReducer'
import axios from 'axios'

var height = Dimensions.get('window').height;
var { width } = Dimensions.get('window');



const Wishlist = ({navigation,item,products,wishlistData}) => {
  const deleteClick = async () => {

    axios.post('https://adbuystore.000webhostapp.com/phprestapi/api/wishlist/removeWishlist.php', { id:item.id,})
     
      
      
  };
 
  
  return (
    <TouchableWithoutFeedback onPress={()=> navigation.navigate("ProductDetails",
    {products:item,wishlistData})}>
    <View style={styles.productCard}>
    
      <Text style={styles.name}>{item.name}</Text>
      
      <Button
          title="Remove"
          onPress={() => deleteClick(this)}
          style={{width:'50%',color:'red'}}
          color="gray"
        />
      <Image style ={styles.images} source={{uri:item.images}}></Image>
      <Text style={styles.price}>₱{item.price}</Text>
      
      
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  header:{
    fontSize:30
  },
  productCard: {
    width: width / 1- 30,
    height: width/1.7,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#e5e5e5",
    flexWrap: 'wrap',
    margin: 10,

  },
  images:{
    width: '100%',
    height: width / 2 - 60,
    resizeMode: "contain",
    
  },
  name:{
    fontSize:20,
    color:'black',
    fontWeight:'500',
    padding:8
  },
  price:{
    fontSize:15,
    color:'black',
    fontWeight:'500',
   textAlign:'center',
    justifyContent:'center',
    padding:20
  },
  
})