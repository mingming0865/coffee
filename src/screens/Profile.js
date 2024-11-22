import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import MainButton from '../components/mainButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getList} from '../service/order.api';
export default function ProfileScreen({navigation}) {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  const logOut = async () => {
    await AsyncStorage.removeItem('curUser');
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
    navigation.navigate('LoginScreen');
  };
  useEffect(() => {
    getUserData(user);
  }, [user]);

  return (
    <View
      style={{
        backgroundColor: '#F2F2F2',
        flex: 1,
        width: '100%',
        paddingTop: StatusBar.currentHeight + 30,
        paddingHorizontal: 12,
      }}>
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Image
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
          }}
          source={{
            uri: 'https://play-lh.googleusercontent.com/LP5zrOXygcRYZi_bwD5A0460d94Ib9EyZ5SXldpnZv7pvKwbbFZrPz3exggDR2XAxYI',
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {user && user.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
          }}>
          {user && user.email}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginBottom: 10,
          }}>
          Tiện ích
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LichSuDonHang')}
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: 80,
            justifyContent: 'space-around',
          }}>
          <MaterialCommunityIcons
            name="file-document-outline"
            size={30}
            color="orange"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Lịch sử đơn hàng
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: 'white',
              borderRadius: 10,
              height: 80,
              justifyContent: 'space-around',
            }}>
            <MaterialCommunityIcons
              name="music-box-outline"
              size={30}
              color="green"
              style={{marginLeft: 15}}
            />
            <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
              Nhạc đang phát
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 160,
              backgroundColor: 'white',
              borderRadius: 10,
              height: 80,
              justifyContent: 'space-around',
            }}>
            <MaterialCommunityIcons
              name="file-edit-outline"
              size={30}
              color="purple"
              style={{marginLeft: 15}}
            />
            <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
              Điều khoản sử dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <MainButton
        onPress={logOut}
        style={{backgroundColor: 'red', marginBottom: 100}}
        title={'Đăng Xuất'}
      />
    </View>
  );
}
