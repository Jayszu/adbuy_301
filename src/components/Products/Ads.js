import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core';


var height = Dimensions.get('window').height;
var { width } = Dimensions.get('window');
const Ads = ({navigation,item}) => {
    const deleteClick = async () => {

        axios.post('https://adbuystore.000webhostapp.com/phprestapi/api/product/delete.php', { id:item.id,})
         
          
          
      };
    const{user} = useSelector((state)=>state.user)

   if(user.name === item.createdBy)
  return (
    <View style={styles.productCard}>
     <Text style={styles.name}>{item.name}</Text>
     <Text style={styles.price}>{item.price}</Text>
     <Text style={styles.cate}>{item.category}</Text>
     <TouchableOpacity style={styles.edit}>
        <Text>Edit</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => deleteClick(this)}>
        <Text>Delete</Text>
     </TouchableOpacity>
    </View>
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
        flexWrap: 'wrap',
        margin: 10,
    
      },
      name:{
        color:'black',
        fontSize:15,
        padding:5
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
      }
})