import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import TopTabNavigation from '../navigation/TopTabNavigation'
import { COLORS } from '../constants/color.constant'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')

const BottomSheet = React.forwardRef(({}, ref) => { 

    const translateY = useSharedValue(-300)

    const context = useSharedValue({ y: 0 })
    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = { y: translateY.value }
    })
    .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(Math.min(translateY.value, -300), -800);
    })
    .onEnd(() => {
        if(translateY.value > -420){
            translateY.value = withSpring(-300, {damping: 50})
        }else if(translateY.value < -450){
            translateY.value = withSpring(-800, {damping: 50})
        }
    })
    const rBottomSheetStyle = useAnimatedStyle(() => {
        return{
            transform: [{ translateY: translateY.value }]
        }
    })

  return (
    <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
            <View style={styles.line}/>
            <TopTabNavigation/>
        </Animated.View>
    </GestureDetector>
  )
})

export default BottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        position: 'absolute',
        top: SCREEN_HEIGHT,
    },
    line: {
        width: '100%',
        height: 4,
        backgroundColor: COLORS.gray300,
        alignSelf: 'center',
        borderRadius: 2,
    }
})