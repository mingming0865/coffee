import React from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from "react-redux";

export default function Wishlist() {
  const giftList = useSelector((store) => store.giftReducer.gifts);
  return (
    <View style={{ borderWidth: 1, borderColor: "green" }}>
      {giftList.map((gift, i) => (
        <Text key={i}>This is name: {gift} </Text>
      ))}
    </View>
  )
}
