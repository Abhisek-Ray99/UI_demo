import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { BadgeCard } from '../components'
import { badges } from '../data'

const Badges = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={badges}
        renderItem={({item}) => <BadgeCard name={item.name} desc={item.description} badge={item.badge} /> }
        keyExtractor={(_,index) => index}
      />
    </View>
  )
}

export default Badges

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    top: 8
  }
})