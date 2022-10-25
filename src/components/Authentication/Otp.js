import React, { useState,useEffect } from 'react';
import { Button, TextInput,View,StyleSheet, Dimensions,TouchableHighlight,Text,ToastAndroid } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';


var {width} = Dimensions.get('window');
function Otp({navigation}) {
  
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [number, setNumber] = useState('');
  const [verified,setVerified]=useState(false);
  const [code, setCode] = useState('');

  function onAuthStateChanged(user) {
    console.log(user,'user')
    setUser(user)
    
    if (initializing) setInitializing(false);
    
  
   
  }

  

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
 
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      if(confirm){
        
        ToastAndroid.showWithGravity(
          `Verified`,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          setVerified(true)
        )}
        console.log(verified)
        
        
      
    } catch (error) {
      console.log('Invalid code.');
      ToastAndroid.showWithGravity(
        `Invalid code`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,);
        setVerified(false)
    }
  }

  if(verified){
    return(
      <View>
      <Button title="continue" onPress={() => navigation.navigate('Signup')}/>
    </View>
    )
  }
  
  if (!confirm) {
    return (
      <View style={styles.otpcontainer}>

      <View>
      <Icon name ='chatbubble-ellipses-outline' size={20} style={styles.icon3}/>
         <TextInput placeholder='Enter your number (+69 .. )...'
       placeholderTextColor='#333'
       style={styles.inputBox}
       value={number}
        onChangeText={setNumber}


       />
       </View>
       <TouchableHighlight style={{alignItems:'center',justifyContent:'center'}} onPress = {()=>signInWithPhoneNumber(number)} underlayColor = 'transparent'>
        <View>
          <Text style={{color:'blue',marginLeft:5}}>Send</Text>
        </View>
    </TouchableHighlight>
    </View>
       
    );
  }
  

  return (
    <>
    
      <TextInput style={styles.inputBox2} value={code} placeholder="Enter the 6 digit otp"  onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
      
    </>
  ); 
  }
  export function signout(){
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

export default Otp;

const styles = StyleSheet.create({
  icon3:{
    position:'absolute',
    top:20,
    left:10,
    zIndex:10,
    color:'green'
},
inputBox:{
  width:width *1 - 70,
  borderWidth:1,
  borderRadius:5,
  borderColor:"green",
  padding:10,
  paddingLeft:40,
  fontSize:15,
  marginVertical:5,
  color:'#333'

},
inputBox2:{
  width:width *1,
  borderWidth:1,
  borderRadius:5,
  borderColor:"green",
  padding:10,
  paddingLeft:20,
  fontSize:15,
  marginVertical:5,
  color:'#333',
  

},
otpcontainer:{
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
marginTop:200
}



})

