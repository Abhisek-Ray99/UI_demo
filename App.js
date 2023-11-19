import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants/color.constant';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={COLORS.light100}
        barStyle='dark-content'
      />
      <AppStack/>
    </NavigationContainer>
  )
}

export default App