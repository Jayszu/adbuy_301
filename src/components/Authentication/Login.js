import { Dimensions, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React, {useState,useEffect}from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../redux/Actions/UserAction';

var {width} = Dimensions.get('window');

const Login = ({navigation}) => {
    const dispatch = useDispatch();

    const { error, isAuthenticated } = useSelector(
        (state) => state.user
      );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) =>{
      e.preventDefault();
    dispatch(userLogin(email, password));
  }
  useEffect(() => {
    if (error) {
      alert("error");
    }
    if (isAuthenticated) {
     alert("Logged In!")
    }
  }, [dispatch, error, alert, isAuthenticated]);
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
             
        }}>Sign in to continue!</Text>
     </View>
     <View style={styles.formBox}>
     <Icon name ='mail-outline' size={20} style={styles.icon}/>
      <TextInput placeholder='Enter a valid e-mail address...'
       placeholderTextColor='#333'
       style={styles.inputBox}
        textContentType="emailAddress"
        keyboardType='email-address'
        value={email}
        onChangeText={setEmail}
       />
     </View>
     <View>
     <Icon name ='lock-open-outline' size={20} style={styles.icon}/>
      <TextInput placeholder='Enter a valid password...'
       placeholderTextColor='#333'
       style={styles.inputBox}
        textContentType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
       />
       <TouchableOpacity><Text> Forgot password?</Text></TouchableOpacity>
       
       <TouchableOpacity onPress={loginSubmit}>
       <View style={styles.button}>
        <Text style={{color:'white', fontWeight:'500'}}>
            Login
        </Text>
       </View>
       </TouchableOpacity>
       <View style ={{flexDirection:'row'}}>
       <Text>Dont have an account?</Text>
       <TouchableOpacity onPress={() => navigation.navigate('Signup')}> 
       <Text style ={{color:'crimson', paddingLeft:5}}>
        Sign Up!
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
    borderColor:"#FB578E",
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
    color:'crimson'
},
formBox:{
    marginTop:width /4 -50,
},
button:{
    width:'97%',
    height:50,
    borderRadius:5,
    backgroundColor:'crimson',
    marginLeft:3,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:25

}

})