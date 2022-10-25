import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';


var height = Dimensions.get('window').height;
var { width } = Dimensions.get('window');
const Ads = ({navigation,item}) => {
    const deleteClick = async () => {

        axios.post('https://adbuystore.000webhostapp.com/phprestapi/api/product/delete.php', { id:item.id,})
         
      };
      const updateClick = async () => {

        axios.post('https://adbuystore.000webhostapp.com/phprestapi/api/product/delete.php', { id:item.id,})
         
      };
    const{user} = useSelector((state)=>state.user)

 if(item.createdBy === user.name)
  return (
    <>
    <View style={styles.productCard}>
     <Text style={styles.name}>Name: {item.name}</Text>
     <Text style={styles.price}>Price: {item.price}</Text>
     <Text style={styles.cate}>Category: {item.category}</Text>
     <View style={{marginLeft:120,padding:20}}>
     <View style={styles.edit}>
     <TouchableOpacity onPress={()=>navigation.navigate('EditProd',{item:item})}>
        <Text style={{color:'white',textAlign:'center'}}>Edit</Text>
     </TouchableOpacity></View>
     <View style={styles.delete}>
     <TouchableOpacity onPress={() => deleteClick(this)}>
        <Text style={{color:'white',textAlign:'center'}}>Delete</Text>
     </TouchableOpacity></View>
     </View></View>
    </>
  )
}

export default Ads

const styles = StyleSheet.create({
    productCard: {
        width: width / 1- 30,
        height: width/4,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: "#e5e5e5",
       flexWrap:'wrap',
        margin: 10,
    
      },
      name:{
        color:'black',
        fontSize:15,
        padding:5,
  
      },
      price:{
        color:"black",
        fontSize:15,
        padding:5,
      },
      cate:{
        color:'black',
        fontSize:15,
        padding:5
      },
      delete:{
            backgroundColor:'crimson',
            borderRadius:5,
            height:30
            
      },
      edit:{
        backgroundColor:'blue',
        borderRadius:5,
        height:30,
        width:50
        
      }
})