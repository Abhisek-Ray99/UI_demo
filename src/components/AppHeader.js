import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppIcon, MessageIcon } from '../constants/Icons.constant'

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <AppIcon/>
      <Text style={styles.text}>Profile</Text>
      <MessageIcon/>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text:{
    color: '#727682',
    fontSize: 14
  },
  logoImage: {
    width: 900,
    height: 200,
    marginTop: 20,
  },
})