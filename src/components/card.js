import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Card() {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData(user);
  }, [user]);
  return (
    <View>
      <View
        style={{
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <ImageBackground
          source={require('../assets/images/backGroundImagee.png')}
          style={{
            width: Dimensions.get('window').width - 20,
            height: 210,
            borderRadius: 8,
            overflow: 'hidden',
          }}
          resizeMode="cover">
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingStart: 10,
                  paddingTop: 20,
                }}>
                {user && user.name}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingStart: 10,
                }}>
                0 BEAN - MỚI
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderLeftWidth: 0.5,
                borderColor: '#D8D8D8',
                borderRightWidth: 0.5,
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                width: 100,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 80,
              }}>
              <FontAwesome5 name="angle-double-down" size={18} color="white" />
              <Text style={{color: 'white', fontSize: 13, marginLeft: 5}}>
                Tích điểm
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 300,
              height: 100,
              backgroundColor: 'white',
              alignSelf: 'center',
              borderRadius: 10,
              marginTop: 30,
            }}>
            <Image
              source={require('../assets/images/Code.png')}
              style={{height: 60, width: 250, alignSelf: 'center'}}
            />
            <Text style={{textAlign: 'center'}}>M1462374595</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
