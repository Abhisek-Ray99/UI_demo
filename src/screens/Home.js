import { StyleSheet, View } from 'react-native'
import React,{ useRef } from 'react'
import { AppHeader, Button, ProfileActivity, ProfileView } from '../components'
import { Logout } from '../constants/Icons.constant'
import BottomSheet from './BottomSheet'

const Home = () => {
  const ref = useRef(null)
  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <AppHeader/>
        <ProfileView/>
        <Button 
          icon={<Logout/>}
          title="Logout"
          style={{alignItems: 'center'}} 
        />
        <ProfileActivity/>
      </View>
      <BottomSheet 
        ref = {ref}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  topview:{
    flex: 1.8,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  bottomview:{
    flex: 1,
    marginTop: 5
  }
})