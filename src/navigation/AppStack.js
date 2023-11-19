import React from 'react'
import BottomTabs from './BottomTabNavigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const AppStack = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <BottomTabs/>
    </GestureHandlerRootView>
  )
}

export default AppStack