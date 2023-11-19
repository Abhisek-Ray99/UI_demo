import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle='dark-content'
      />
      <AppStack/>
    </NavigationContainer>
  )
}

export default App