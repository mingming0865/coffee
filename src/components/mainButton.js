import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function MainButton(props) {
  const {title, onPress, style, isSubButton} = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style,
        ...(isSubButton && styles.subButton),
      }}
      onPress={onPress}>
      <Text style={{...styles.title, color: isSubButton ? 'orange' : '#fff'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'orange',
    borderRadius: 100,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  subButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 100,
  },
});
