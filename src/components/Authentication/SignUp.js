import { Dimensions, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';

var {width} = Dimensions.get('window');

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.LoginHeader}>
        <Text style={{
            fontSize:25,
            fontFamily:'Roboto',
            fontWeight:"bold", 
            color:'#333'
        }}>Welcome to </Text>
         <Text style={{
            fontSize:25,
            fontFamily:'Roboto',
            fontWeight:"bold",
            color:'#e0414e',
            marginLeft:100
             
        }}>AdBuy<Text style={{color:'#333'}}>,</Text></Text>
            
         <Text style={{
            fontSize:25,
            fontFamily:'sans-serif',
            fontWeight:"bold",
            color:'#bcc2c0'
             
        }}>Sign up to continue!</Text>
     </View>
     <View style={styles.formBox}>
     <Icon name ='mail-outline' size={20} style={styles.icon}/>
      <TextInput placeholder='Enter a valid e-mail address...'
       placeholderTextColor='#333'
       style={styles.inputBox}
        textContentType="emailAddress"
       />
     </View>
     <View>
     <Icon name ='lock-open-outline' size={20} style={styles.icon}/>
      <TextInput placeholder='Enter a valid password...'
       placeholderTextColor='#333'
       style={styles.inputBox}
        textContentType="password"
        secureTextEntry={true}
       />
     
       
       
       <TouchableOpacity>
       <View style={styles.button}>
        <Text style={{color:'white', fontWeight:'500'}}>
            Sign Up
        </Text>
       </View>
       </TouchableOpacity>
      
       <View style ={{flexDirection:'row'}}>
       <Text>Already have an account?</Text>
       <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
       <Text style ={{color:'green', paddingLeft:5}}>
        Sign in!
       </Text></TouchableOpacity>
       </View>
       
     </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
container:{
    width: width,
    padding:20,
    backgroundColor:'#e5e5e5',
    height: width *2

},
LoginHeader:{
    width:width *1,
    marginVertical:10,
    
},
inputBox:{
    width:width *1 - 40,
    borderWidth:1,
    borderRadius:5,
    borderColor:"green",
    padding:10,
    paddingLeft:40,
    fontSize:15,
    marginVertical:5

},
icon:{
    position:'absolute',
    top:18,
    left:10,
    zIndex:10,
    color:'green'
},

formBox:{
    marginTop:width /4 -50,
},
button:{
    width:'97%',
    height:50,
    borderRadius:5,
    backgroundColor:'green',
    marginLeft:3,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:25

}

})