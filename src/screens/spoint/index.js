import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import TichDiem from './tich-diem';
import DoiUuDai from './doi-uu-dai';
import styles from './css';
function Header({setChangeScreen, changeScreen}) {
  return (
    <View style={{backgroundColor: 'white', elevation: 10, marginBottom: 10}}>
      <View style={styles.styleHeader}>
        <Text style={styles.textFont}>Tích điểm</Text>
        <View style={styles.styleHeader}>
          <TouchableOpacity style={styles.button}>
            <Image
              style={{
                height: 30,
                width: 50,
                alignSelf: 'center',
                marginTop: 3,
              }}
              source={require('../../assets/images/iconUuDai.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Image
              style={{
                height: 30,
                width: 30,
                alignSelf: 'center',
                marginTop: 3,
              }}
              source={require('../../assets/images/iconChuong.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}>
        <TouchableOpacity
          onPress={() => setChangeScreen('TichDiem')}
          style={
            changeScreen === 'TichDiem'
              ? {
                  borderWidth: 1,
                  borderRadius: 15,
                  height: 30,
                  width: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'orange',
                }
              : {
                  height: 30,
                  width: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                }
          }>
          <Text
            style={
              changeScreen === 'TichDiem'
                ? {fontWeight: 'bold', color: 'orange'}
                : {fontWeight: 'bold'}
            }>
            Tích điểm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setChangeScreen('DoiUuDai')}
          style={
            changeScreen === 'DoiUuDai'
              ? {
                  borderWidth: 1,
                  borderRadius: 15,
                  height: 30,
                  width: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'orange',
                }
              : {
                  height: 30,
                  width: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                }
          }>
          <Text
            style={
              changeScreen === 'DoiUuDai'
                ? {fontWeight: 'bold', color: 'orange'}
                : {fontWeight: 'bold'}
            }>
            Đổi ưu đãi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Spoint({navigation}) {
  const [changeScreen, setChangeScreen] = useState('TichDiem');
  return (
    <View>
      <Header setChangeScreen={setChangeScreen} changeScreen={changeScreen} />
      <ScrollView>
        {changeScreen === 'TichDiem' ? (
          <TichDiem setChangeScreen={setChangeScreen} navigation={navigation} />
        ) : (
          <DoiUuDai navigation={navigation} />
        )}
      </ScrollView>
    </View>
  );
}
