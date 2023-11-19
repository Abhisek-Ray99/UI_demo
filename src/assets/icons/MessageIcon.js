import * as React from "react"
import { Text, StyleSheet, View } from "react-native"
import Svg, { Path } from "react-native-svg"
const MessageIcon = (props) => (
  <View style={styles.container}>
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
    >
      <Path
        fill="#727682"
        d="M19.5 2h-15A2.502 2.502 0 0 0 2 4.5v11.25c0 1.378 1.122 2.499 2.5 2.499h3.75v3.281a.47.47 0 0 0 .746.379l4.879-3.66H19.5c1.378 0 2.5-1.121 2.5-2.5V4.5C22 3.122 20.877 2 19.5 2Z"
      />
    </Svg>
    <View style={styles.view}>
      <Text style={styles.text} >1</Text>
    </View>
  </View>
)
export default MessageIcon


const styles = StyleSheet.create({
  container:{
    
  },
  view:{
    width: 15,
    height: 15,
    position: 'absolute',
    backgroundColor: '#6231AD',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: -5,
    top: -6
  },
  text:{
    color: 'white',
    fontSize: 8
  }
})
