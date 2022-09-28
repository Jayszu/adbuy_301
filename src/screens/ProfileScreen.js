import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@material-ui/core'
import { LogOutUser } from '../../redux/Actions/UserAction'
import { useDispatch, useSelector } from 'react-redux'

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const{user} = useSelector((state)=>state.user)
  const LogOut =()=>{
dispatch(LogOutUser())
  }
  return (
    <View >
    
   
    <TouchableOpacity
      onPress={LogOut}
        >
          <View style={styles.Button}>
            <Text style={{color: 'black', fontSize: 18}}>Logout</Text>
          </View>
        </TouchableOpacity>
   
  </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  Button:{
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#3BB77E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 650,

  }
})