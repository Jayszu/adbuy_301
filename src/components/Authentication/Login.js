import { Dimensions, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React, {useState,useEffect}from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../redux/Actions/UserAction';

var {width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const { error,loading,isAuthenticated } = useSelector(
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
    alert(error);
   
  }
  if (isAuthenticated) {
    dispatch({ type: "clearErrors" });
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
      <View style={styles.relative}>
        <Icon name="mail-open-outline" size={20} style={styles.icon} />
        <TextInput
          placeholder="Enter Your Email..."
          placeholderTextColor="#333"
          style={styles.inputBox}
          textContentType="emailAddress"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.relative}>
        <Icon name="lock-closed-outline" size={20} style={styles.icon} />
        <TextInput
          placeholder="Enter a valid password..."
          placeholderTextColor="#333"
          style={styles.inputBox}
          textContentType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword} 
          />
        <Text
          style={{
            color: '#333',
            fontSize: 14,
          }}
          onPress={() => navigation.navigate("Forgot")}
          >
          Forgot Password ?
        </Text>
        <TouchableOpacity
        onPress={loginSubmit}
        >
          <View style={styles.Button}>
            <Text style={{color:'white', fontWeight:'500'}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: width / 6 - 50,
       
      }}>
      <Text
        style={{
          color: '#333',
          fontSize: 15,
        }}>
        Create an Account ?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text
          style={{
            fontSize: 15,
            color: '#FB578E',
            paddingRight: 15,
          }}>
          {' '}
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
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
      borderColor:"crimson",
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
      color:'crimson'
  },
  
  formBox:{
      marginTop:width /4 -50,
  },
  Button:{
      width:'97%',
      height:50,
      borderRadius:5,
      backgroundColor:'crimson',
      marginLeft:3,
      alignItems:'center',
      justifyContent:'center',
      marginVertical:25
  
  }
});