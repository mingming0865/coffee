import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './css';
export default function SlideShow({navigation}) {
  return (
    <View>
      <View style={styles.flexButton}>
        <View>
          <TouchableOpacity
            style={{marginTop: 5, width: 150}}
            onPress={() => navigation.navigate('Order')}>
            <View style={styles.borderButton}>
              <Image
                style={{
                  alignSelf: 'center',
                  height: 40,
                  alignItems: 'center',
                  width: 40,
                  marginTop: 10,
                }}
                source={require('../../assets/images/iconGiaoHang.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={{textAlign: 'center'}}>Giao hàng</Text>
        </View>
        <View style={styles.border} />
        <View>
          <TouchableOpacity
            style={{marginTop: 5, width: 150}}
            onPress={() => navigation.navigate('Order')}>
            <View style={styles.borderButton}>
              <Image
                style={{
                  alignSelf: 'center',
                  height: 40,
                  alignItems: 'center',
                  marginTop: 10,
                  width: 28,
                }}
                source={require('../../assets/images/Juice.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={{textAlign: 'center'}}>Mang đi</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.swiper}>
        <Swiper
          index={0}
          autoplay={true}
          dot={
            <View
              style={{
                backgroundColor: 'white',
                width: 18,
                height: 3,
                marginBottom: 8,
                marginHorizontal: 2,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'orange',
                width: 18,
                height: 3,
                marginBottom: 8,
                marginHorizontal: 2,
              }}
            />
          }>
          <View style={styles.slide}>
            <View style={styles.slide1}>
              <Image
                source={require('../../assets/images/slideOne.jpg')}
                style={{
                  width: '95%',
                  height: '100%',
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slide1}>
              <Image
                source={require('../../assets/images/slideTwo.jpg')}
                style={{
                  width: '95%',
                  height: '100%',
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slide1}>
              <Image
                source={require('../../assets/images/slideThree.jpg')}
                style={{
                  width: '95%',
                  height: '100%',
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slide1}>
              <Image
                source={require('../../assets/images/slideFour.jpg')}
                style={{
                  width: '95%',
                  height: '100%',
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slide1}>
              <Image
                source={require('../../assets/images/slideFive.jpg')}
                style={{
                  width: '95%',
                  height: '100%',
                  alignSelf: 'center',
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        </Swiper>
      </TouchableOpacity>
    </View>
  );
}
