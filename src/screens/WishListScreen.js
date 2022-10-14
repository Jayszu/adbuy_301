import { StyleSheet, Text, View ,ScrollView,RefreshControl} from 'react-native'
import React from 'react'



const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const WishListScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView     refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }>

      <Text>Pull</Text>
    </ScrollView>
    
      
   
  )
}

export default WishListScreen

const styles = StyleSheet.create({})