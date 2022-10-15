import { Dimensions, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/Actions/UserAction';

var {width} = Dimensions.get('window');

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();  
  
  const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
      );
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    
    const registerUser = () => {
      if(password.length >=8 && password === password2){
        dispatch(register(name, email, password));}
        else{
          alert("Error creating user/ Please check your password if it's 8 character or if password matches")
        }
      }
      useEffect(() => {
        if (error) {
          alert(error);
        
        
        }
    
        if (isAuthenticated) {
          alert("User create Done!")
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
             
        }}>Sign up to continue!</Text>
     </View>
     <View style={styles.formBox}>
     <Icon name ='person-circle-outline' size={20} style={styles.icon2}/>
      <TextInput placeholder='Enter Your Name...'
       placeholderTextColor='#333'
       style={styles.inputBox}
        textContentType="name"
        value={name}
        onChangeText={setName}
       />
     <Icon name ='mail-outline' size={20} style={styles.icon3}/>
      <TextInput placeholder='Enter a valid e-mail address...'
       placeholderTextColor='#333'
       style={styles.inputBox}
        textContentType="emailAddress"
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
        alue={password}
        onChangeText={setPassword}

       />
        <Icon name ='lock-open-outline' size={20} style={styles.icon3}/>
         <TextInput placeholder='Confirm Password...'
       placeholderTextColor='#333'
       style={styles.inputBox}
        textContentType="password"
        secureTextEntry={true}
        alue={password}
        onChangeText={setPassword2}

       />
        
        
        
     
     
       
       
       <TouchableOpacity
       onPress={registerUser}>
       <View style={styles.button}>
        <Text style={{color:'white', fontWeight:'500'}}>
            Sign Up
        </Text>
       </View>
       </TouchableOpacity>
      
       <View style ={{flexDirection:'row'}}>
       <Text style={{color:'#333'}}>Already have an account?</Text>
       <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
       <Text style ={{color:'green', paddingLeft:5}}>
        Sign in!
       </Text></TouchableOpacity>
       </View>
       
     </View>
    </View>
  )
}

export default SignUp

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
    marginVertical:5,
    color:'#333'

},
icon:{
    position:'absolute',
    top:18,
    left:10,
    zIndex:10,
    color:'green'
},
icon2:{
    position:'absolute',
    top:20,
    left:10,
    zIndex:10,
    color:'green'
},
icon3:{
    position:'absolute',
    top:80,
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