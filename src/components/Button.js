import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({
  title,
  borderRadius,
  bgColor,
  icon,
  color,
  ...others
}) => {
  return (
    <TouchableOpacity
      {...others}
    >
      <View style={[{
        backgroundColor: bgColor,
        borderRadius: borderRadius
      }, styles.container]}>
        {icon}
        <Text
          style={{
            fontSize: 15,
            paddingBottom: 2,
            color: color,
          }}
        >{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 50,
    justifyContent: 'center'
  }
})