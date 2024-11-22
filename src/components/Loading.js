import React from 'react'
import { View, Text, ActivityIndicator, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export default function Loading() {
  return (
    <View style={{ position: 'absolute', top: height / 2 - 10, left: width / 2 - 10 }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}
