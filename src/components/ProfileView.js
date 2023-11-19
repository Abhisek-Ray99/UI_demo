import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileImg } from '../constants/Images.constant'
import { EditIcon } from '../constants/Icons.constant'
import { COLORS } from '../constants/color.constant'


const ProfileView = () => {
  return (
    <View style={styles.container}>
      <View>
        <ProfileImg width={75} height={75} />
        <View style={styles.editview}>
          <EditIcon/>
        </View> 
      </View>
      <View style={styles.textview}>
        <Text style={styles.name}>Jina Simons</Text>
        <Text style={styles.points}>6000 Pts</Text>
      </View>
      <View style={{ width: 343}}>
         <Text style={styles.caption}>I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!</Text>
      </View>
    </View>
  )
}

export default ProfileView

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24
  },
  editview:{
    position: 'absolute',
    borderWidth: 2,
    borderColor: COLORS.gray200,
    borderRadius: 50,
    padding: 6,
    backgroundColor: COLORS.light100,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -2,
    right: -2
  },
  textview:{
    alignItems: 'center',
    gap: 4,
    paddingVertical: 12
  },
  name:{
    fontWeight: '500',
    color: COLORS.dark200,
  },
  points: {
    color: COLORS.gray400
  },
  caption:{
    fontSize: 15,
    color: COLORS.gray400
  }
})