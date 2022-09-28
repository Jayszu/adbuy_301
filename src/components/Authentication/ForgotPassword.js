import { StyleSheet, Text, View, TextInput, Dimensions,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { forgotPassword } from '../../../redux/Actions/UserAction';
var {width} = Dimensions.get("window")

 
const ForgotPassword = ({navigation}) => {
    const {loading, error, message} = useSelector(state => state.forgotPassword);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
  
  
    const resetPass = () => {
      dispatch(forgotPassword(email));
    };
    useEffect(() => {
      if (error) {
        alert(error);
      }
      if (message) {
        alert(message);
      }
    }, [alert, error, message]);
  return (
    <View style={styles.container}>
    <View>
    <Text style={{fontSize:20, bottom:200, color:'crimson', fontWeight:"500", marginLeft:65}}>
      Reset Your Password 
    </Text>
        <TextInput placeholder='Enter your email' placeholderTextColor='#333' style={styles.forgot}
            value={email} onChangeText={(i)=> setEmail(i)}
        />
        <TouchableOpacity onPress={resetPass} >
        <View style={styles.button}>
            <Text style={{color:'white'}} >Submit</Text>
        </View></TouchableOpacity>
        
    </View>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container:{
        width:width*1,
        height:width*2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"gainsboro"
        
    },
    forgot:{
    width:width*1 - 80,
    borderColor:"gray",
    borderWidth:2,
    height:50,
    color:'#705a59',
    borderRadius:10,
    paddingLeft:10
    },
    button:{
        width:'80%',
        height:50,
        borderRadius:5,
        backgroundColor:'#705a59',
        marginLeft:30,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:25

    }
})