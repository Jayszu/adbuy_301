import { StyleSheet, Text, View,FlatList, Dimensions } from 'react-native'
import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import Ads from '../components/Products/Ads'
import { useSelector } from 'react-redux'

var height = Dimensions.get('window').height;
var { width } = Dimensions.get('window');
const Myadsscreen = ({navigation}) => {
    const{user} = useSelector((state)=>state.user)
    const[myads,setAds]=useState([])
  useEffect(()=>{
    productred()
  },[])

  const productred =async()=>{
    const res = await axios.get('')

   .then(async function(res){
    setAds(res.data.products)
    console.log(res.data.products)
   })
   .catch(function(error){
    console.log(error)
   })
    
  }
  
  return (
    <View>
    <View style={styles.header}>
    <Text style={styles.text}>My Advertised Products</Text>
    </View>
      <FlatList
      data={myads}
        keyExtractor={(item,index)=> index}
        renderItem={({item})=>{
        
          return(
           <Ads item ={item} navigation={navigation}/>
          )
        
        }}
      />
    
    </View>
  )
}

export default Myadsscreen

const styles = StyleSheet.create({

    header:{
    width:width,
    backgroundColor:'gray',
    height:height/11
    },
    text:{
        color:'white',
        textAlign:'center',
        justifyContent:'center',
        fontSize:19
    }
})