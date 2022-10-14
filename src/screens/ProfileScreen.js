import { StyleSheet, Text, View,TouchableOpacity, Dimensions,ScrollView,Image, ImageBackground,TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Icon } from '@material-ui/core'
import { LogOutUser } from '../../redux/Actions/UserAction'
import { useDispatch, useSelector } from 'react-redux'

var { width } = Dimensions.get('window');
var height = Dimensions.get('window').height;

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const{user} = useSelector((state)=>state.user)
  const LogOut =()=>{
dispatch(LogOutUser())
  }
  return (
 
    <ScrollView style={styles.container} >

    <View style={styles.profileHead}>
    <ImageBackground source={{uri:'https://img.freepik.com/free-vector/white-gold-geometric-pattern-background-vector_53876-140726.jpg?w=2000'}} resizeMode="cover" style={styles.profileHead}>
    <Text style={{color:"#c23d5d", fontSize:25, fontWeight:"bold", marginTop:50, marginLeft:20}}>Hello, Have a good day!</Text>
    </ImageBackground>
    </View>
    <View style={styles.crudContainer}>
    <TouchableWithoutFeedback onPress={()=> navigation.navigate("CreateProd")}>
    
     <View style={styles.Sell}>
    <Text style={{color:'black', fontSize:17, marginLeft:5,fontWeight:"bold"}}>Services</Text>
    <Image style={styles.prodImage} source={{uri:"https://i.ibb.co/yN9Z21y/Png-Item-3256246.png"}}>
    </Image>
    <Text style={{color:'black', fontSize:17,marginLeft:15}}>Sell</Text>
    </View>
    
    </TouchableWithoutFeedback>
   
    <TouchableWithoutFeedback onPress={()=> navigation.navigate("CreateProd")}>
    <View style={styles.Orders}>
    <Image style={styles.prodImage} source={{uri:"https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"}}>
    </Image>
    <Text style={{color:'black', fontSize:17,marginLeft:15}}>Cart</Text>
    </View>
    </TouchableWithoutFeedback>

   </View>
   
   
    
          <View style={styles.Button}>
            <Text style={{color: 'black', fontSize: 18}} onPress={LogOut}>Logout</Text>
          </View>
      
     
  </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    width:width,
    height:height,
    backgroundColor:"#7c837c"
  },
  Button:{
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#3BB77E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 700,

  },
  Logout:{
    height:height
  },
  profileHead:{
    height:height/5

  },
  prodImage:{
    height:50,
    width:60,
    resizeMode:'contain'

  },
  crudContainer:{
    elevation:10,
    width:width -20,
    height:height/8,
    backgroundColor:"white",
    marginLeft:10,
    marginTop:20,
    paddingLeft:10,
    flexDirection:"row"
  },
  Orders:{
    marginTop:22,
    marginLeft:20
  }

  
  
})