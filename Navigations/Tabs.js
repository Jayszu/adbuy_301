import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductsScreen from '../src/screens/ProductsScreen';
import WishListScreen from '../src/screens/WishListScreen';
import CartScreen from '../src/screens/CartScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import React from "react"
import { View, Image, Text } from 'react-native'
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, }} >
      <Tab.Screen name="HomePage" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) =>
        (
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
      }} />
      <Tab.Screen name="Products" component={ProductsScreen} options={{
        tabBarIcon: ({ focused }) =>
        (
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <Image source={require('../src/assets/store.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginTop: 10,
                tintColor: focused ? 'crimson' : 'black'
              }}
            />
            <Text style={{ color: focused ? 'crimson' : 'black' }}>Products</Text>
          </View>
        )
      }} />
      <Tab.Screen name="WishList" component={WishListScreen} options={{
        tabBarBadge: 2, tabBarIcon: ({ focused }) =>
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
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarBadge: 2, tabBarIcon: ({ focused }) =>
        (
          <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <Image source={require('../src/assets/cart.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginTop: 10,
                tintColor: focused ? 'crimson' : 'black'
              }}
            />
            <Text style={{ color: focused ? 'crimson' : 'black' }}>Cart</Text>
          </View>
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ focused }) =>
        (
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
            <Text style={{ color: focused ? 'crimson' : 'black' }}>Profile</Text>
          </View>
        )
      }} />
    </Tab.Navigator>
  );
}
