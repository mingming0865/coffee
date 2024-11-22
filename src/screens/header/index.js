import React from 'react';
import {View, Image} from 'react-native';

export default function Header() {
  return (
    <View>
      <Image
        style={{
          marginLeft: 20,
          height: 60,
          resizeMode: 'contain',
          width: 200,
        }}
        source={require('../../assets/images/coffehouseLogo.png')}
      />
    </View>
  );
}
