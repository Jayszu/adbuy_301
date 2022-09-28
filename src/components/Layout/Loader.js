import { View,StyleSheet } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import AnimatedLottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
    <Lottie
         source={require('../../assets/loading.json')}
         autoPlay
         loop
         style={styles.loader}
         />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#000",
      justifyContent:"center",
      alignItems:"center",
    },
    loader:{
        position:"absolute",
    }
  });

export default Loader