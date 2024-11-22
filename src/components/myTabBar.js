import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default function MyTabBar({state, descriptors, navigation}) {
  var imgArr = [
    {img: require('../assets/images/Home.png'), text: 'Trang chủ'},
    {img: require('../assets/images/Basket.png'), text: 'Đặt hàng'},
    {img: require('../assets/images/shop.png'), text: 'Cửa hàng'},
    {img: require('../assets/images/credit-card.png'), text: 'Tích điểm'},
    {img: require('../assets/images/profile.png'), text: 'Khác'},
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            onPress={onPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={{
                tintColor: isFocused ? 'orange' : '#222',
                height: 22,
                width: 22,
                resizeMode: 'contain',
              }}
              source={imgArr[index].img}
            />
            <Text
              style={{
                color: isFocused ? 'orange' : 'black',
              }}>
              {imgArr[index].text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
