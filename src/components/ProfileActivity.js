import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIcon, HighIcon, LowIcon } from '../constants/Icons.constant'
import { COLORS } from '../constants/color.constant'

const Score = ()=>{
  return(
    <View style={styles.scoreContainer}>
      <View style={styles.view}>
        <Text style={styles.title}>Under or Over</Text>
        <View style={styles.values}>
          <HighIcon/>
          <Text style={styles.percentage}>81%</Text>
        </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.title}>Top 5</Text>
        <View style={styles.values}>
          <LowIcon/>
          <Text style={styles.percentage}>-51%</Text>
        </View>
      </View>
    </View>
  )
}

const ProfileActivity = () => {
  return (
    <View style={styles.container}>
      <View style={styles.activity}>
        <ActivityIcon/>
      </View>
      <View style={styles.box}>
        <Score/>
      </View>
    </View>
  )
}

export default ProfileActivity

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  box:{
    top: 35,
    width: 343,
    height: 103,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    borderRadius: 5,
    justifyContent: 'center'
  },
  activity:{
    position: 'absolute',
    top: 18,
    zIndex: 1,
    left:0,
    right: 0,
    alignItems: 'center',
  },
  scoreContainer:{
    flexDirection: 'row',
    gap: 10,
  },
  view:{
    flexDirection: 'column',
    alignItems: 'left',
    paddingHorizontal: 27,
    gap: 10
  },
  title:{
    fontWeight: '600',
    fontSize: 14
  },
  values:{
    flexDirection: 'row',
    gap: 6
  },
  percentage:{
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.gray500
  }
})