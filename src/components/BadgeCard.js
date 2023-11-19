import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Group from '../assets/images/Group.svg'

const BadgeCard = ({
  name,
  desc,
  badge
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageview}>
        <Group width={60} height={60} />
      </View>
      <View style={styles.textview}>
        <View style={styles.title}>
          <Text style={styles.name}>{name}</Text>
          <Text style={{color: '#FFA600', fontWeight: '600', fontSize: 14}}>{badge ? ` x ${badge}` : null}</Text>
        </View>
        <Text style={{fontSize: 14, color: '#727682', fontWeight: '500'}}>{desc}</Text>
      </View>
    </View>
  )
}

export default BadgeCard

const styles = StyleSheet.create({
    cardContainer:{
        width: 360,
        height: 105,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EEEAF3',
        backgroundColor: '#fff',
        marginVertical: 6,
        flexDirection: 'row',
        gap: 20,
        paddingHorizontal: 20
    },
    title:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    name:{
      fontSize: 14,
      color: '#333',
      fontWeight: '600',
    },
    textview:{
      width: 230,
      justifyContent: 'center'
    },
    imageview:{
      justifyContent: 'center'
    }
})