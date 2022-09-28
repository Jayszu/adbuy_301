import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
var height = Dimensions.get('window').height; 
var {width} = Dimensions.get('window')
const Splash = () => {
    
  return (
    <View style ={styles.container}>
    <View>
        <Image source ={require('../../assets/logo.png')}
        style={styles.image}
            
        />
        
     
       
    </View>
    
         <Lottie source={require('../../assets/loading.json')}
            autoPlay
            loop
            style={styles.loader}
        />
      
    
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        height:height*1,
        flex:1,
        justifyContent:'flex-end',
       
        backgroundColor:'gray'
    },
    image:{
        width:width * 1 -10,
        height:200,
        marginLeft:2,
        bottom:400,
        resizeMode:'contain'
        
        
    },
    loader:{
        position:'absolute',
        top:200,
        left:75,
        height:100

    }
})