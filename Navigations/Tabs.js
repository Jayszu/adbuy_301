import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductsScreen from '../src/screens/ProductsScreen';
import WishListScreen from '../src/screens/WishListScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import React from "react"
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { View, Image, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../src/components/Products/ProductDetails';
import CreateProd from '../src/screens/CreateProd';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWishList } from '../redux/Actions/ProductAction';
import MyadsScreen from '../src/screens/MyadsScreen'
import EditProd from '../src/screens/EditProd';

const Tab = createBottomTabNavigator();

export default function Tabs() {

  const {wishlistData,error} = useSelector(state => state.wishlistData);
  const dispatch = useDispatch();

  useEffect(() => {
    if(error){
      alert(error)
    }
    dispatch(getWishList())
   
  }, [dispatch, error, wishlistData])
  
  return (
    
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, }} >
      <Tab.Screen name="HomePage" component={ProdScreen}  options={({route}) => ({
                tabBarStyle: {display: Visibility(route)},
                tabBarIcon: ({focused}) => (
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <Image source={require('../src/assets/home.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginTop: 10,
                tintColor: focused ? 'crimson' : 'black'
              }}
            />  
            <Text style={{ color: focused ? 'crimson' : 'black' }}>Home</Text>
          </View>
        )
      })} />
      
      <Tab.Screen name="WishList" component={WishListScreen} options={{
        tabBarBadge: wishlistData && wishlistData.length, tabBarIcon: ({ focused }) =>
        (
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <Image source={require('../src/assets/wishlist.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginTop: 10,
                tintColor: focused ? 'crimson' : 'black'
              }}
            />
            <Text style={{ color: focused ? 'crimson' : 'black' }}>WishList</Text>
          </View>
        )
      }} />
     
      <Tab.Screen name="Profiles" component={ProfileScreens} options={({route}) => ({
                tabBarStyle: {display: Visibility1(route)},
                tabBarIcon: ({focused}) => (
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <Image source={require('../src/assets/profile.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginTop: 10,
                tintColor: focused ? 'crimson' : 'black'
              }}
            />
            <Text style={{ color: focused ? 'crimson' : 'black' }}>Dashboard</Text>
          </View>
        )
      })} /> 
    </Tab.Navigator>
  );
}

const ProdScreen = () =>{
  const Stack = createNativeStackNavigator();
  return(
<Stack.Navigator screenOptions={{headerShown:false}}
initialRouteName="Home"
>
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="ProductDetails" component={ProductDetails}/>
<Stack.Screen name="CreateProd" component={CreateProd}/>
<Stack.Screen name="MyAds" component={MyadsScreen}/>
<Stack.Screen name="EditProd" component={EditProd}/>

</Stack.Navigator>
  )
}

const Visibility = (route) => {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if(routeName === "ProductDetails"){
   return "none"
  }
  if(routeName === "Home"){
   return "flex"
  }
}

const ProfileScreens = () =>{
  const Stack = createNativeStackNavigator();
  return(
<Stack.Navigator screenOptions={{headerShown:false}}
initialRouteName="Profile"
>
<Stack.Screen name="Profile" component={ProfileScreen}/>
<Stack.Screen name="CreateProd" component={CreateProd}/>

</Stack.Navigator>
  )
}

const Visibility1 = (route) => {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if(routeName === "CreateProd"){
   return "none"
  }
  if(routeName === "Profile"){
   return "flex"
  }
}

