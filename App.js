import { View, Text } from 'react-native'
import React,{useState} from 'react'
import Header from './src/components/Layout/Header'
import HomeScreen from './src/screens/HomeScreen'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import { NavigationContainer } from '@react-navigation/native'
import Main from "./Navigations/Main"
import Auth from "./Navigations/Auth"


const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false)
  
  return (
    <Provider store= {Store}>
      
     <NavigationContainer>
     {
      isAuthenticated ? (
        <Main />
      )
      :(
        <Main />
      )
     }
      
     </NavigationContainer>
    
    </Provider>
  )
}

export default App