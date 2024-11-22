import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from "react-redux";

export default function Shop() {
  const [text, onChangeText] = React.useState("");
  const dispatch = useDispatch();

  const onSendNameToStore = () => {
    dispatch({ type: "SEND_FROM_GIRL_FRIEND1", data: text });
  };

  return (
    <View>
      <Text>Shop</Text>
      <TextInput
        style={{ height: 40, width: '90%', borderWidth: 1 }}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity onPress={onSendNameToStore} style={{ marginTop: 50 }}>
        <Text>Send to store</Text>
      </TouchableOpacity>
    </View>
  )
}
