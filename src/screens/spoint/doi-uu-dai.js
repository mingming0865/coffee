import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function DoiUuDai({navigation}) {
  const arrayScreen = [
    {
      label: 'Tất cả',
      navigation: 'TatCa',
      icon: require('../../assets/images/tatca.jpg'),
    },
    {
      label: 'The Coffee House',
      navigation: 'TheCfHouse',
      icon: require('../../assets/images/thecfhouse.jpg'),
    },
    {
      label: 'Ăn uống',
      navigation: 'AnUong',
      icon: require('../../assets/images/burger.jpg'),
    },
    {
      label: 'Du lịch',
      navigation: 'DuLich',
      icon: require('../../assets/images/dulich.jpg'),
    },
    {
      label: 'Mua sắm',
      navigation: 'MuaSam',
      icon: require('../../assets/images/muasam.jpg'),
    },
    {
      label: 'Giải trí',
      navigation: 'GiaiTri',
      icon: require('../../assets/images/giaitri.jpg'),
    },
    {
      label: 'Dịch vụ',
      navigation: 'DichVu',
      icon: require('../../assets/images/dichvu.png'),
    },
    {
      label: 'Giới hạn',
      navigation: 'GioiHan',
      icon: require('../../assets/images/gioihan.png'),
    },
  ];
  return (
    <View>
      <View style={{height: 70, flexDirection: 'column-reverse'}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 10}}>
          By category
        </Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        {arrayScreen.map((e, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate(e?.navigation)}
            style={{
              flexDirection: 'row',
              height: 50,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: 'gray',
              justifyContent: 'space-between',
              marginLeft: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={e?.icon}
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 100,
                  marginRight: 15,
                }}
              />
              <Text>{e.label}</Text>
            </View>
            <Ionicons name="chevron-forward-sharp" color="black" size={20} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
