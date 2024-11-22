import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UuDaiDacBiet from './kham-pha-them/uu-dai-dac-biet';
import CapNhatTuNha from './kham-pha-them/cap-nhat-tu-nha';
import CoffeeLove from './kham-pha-them/coffee-love';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './css';
import SlideShow from './slide';
function Header({navigation}) {
  const [user, setuser] = useState(null);
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    console.log(curUser);
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData(user);
  }, []);
  var date = dayjs();
  return (
    <View style={styles.styleHeader}>
      <Text>
        {date?.$H < 13 ? (
          <View style={styles.header}>
            <Image
              style={{
                height: 40,
                width: 40,
              }}
              source={require('../../assets/images/iconBuoiSang.png')}
            />
            <Text numberOfLines={1} style={styles.textFont}>
              Chào buổi sáng {user?.name}
            </Text>
          </View>
        ) : (
          <View style={styles.header}>
            <Ionicons
              name="moon"
              size={20}
              color="#FFBF00"
              style={{padding: 8}}
            />
            <Text numberOfLines={1} style={styles.textFont}>
              Chào buổi tối , {user?.name}
            </Text>
          </View>
        )}
      </Text>
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
      <TouchableOpacity
        onPress={() => navigation.navigate('ScanScreen')}
        style={{
          backgroundColor: 'white',
          width: 60,
          height: 40,
          borderRadius: 20,
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="qr-code-outline" color={'black'} size={25} />
      </TouchableOpacity>
    </View>
  );
}
export default function TrangChuPage({navigation}) {
  const [screen, setScreen] = useState('UuDaiDacBiet');
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(
    scrollY,
    0,
    screen == 'CoffeeLove' ? 380 : 3080,
  );
  const translateY = diffClamp.interpolate({
    inputRange: [0, screen == 'CoffeeLove' ? 380 : 8],
    outputRange: [0, screen == 'CoffeeLove' ? -380 : -1],
  });
  console.log(screen);
  const ToggleScreen = () => {
    if (screen) {
      if (screen == 'UuDaiDacBiet') {
        return <UuDaiDacBiet scrollY={scrollY} navigation={navigation} />;
      }
      if (screen == 'CapNhatTuNha') {
        return <CapNhatTuNha scrollY={scrollY} navigation={navigation} />;
      }
      if (screen == 'CoffeeLove') {
        return <CoffeeLove scrollY={scrollY} navigation={navigation} />;
      }
    }
  };
  useEffect(() => {
    ToggleScreen();
  }, []);
  return (
    <View
      style={{
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#F2F2F2',
      }}>
      <Animated.View
        style={{
          transform: [{translateY: translateY}],
          elevation: 4,
          zIndex: 100,
        }}>
        <Header navigation={navigation} />
        <SlideShow navigation={navigation} />
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 5,
              marginTop: 20,
            }}>
            Khám phá thêm
          </Text>
          <Ionicons
            name="star"
            size={20}
            color="#FFBF00"
            style={{marginTop: 23, marginLeft: 10}}
          />
        </View>
        <View style={styles.Tab}>
          <TouchableOpacity
            onPress={() => setScreen('UuDaiDacBiet')}
            style={[
              styles.Stack,
              {
                borderColor: screen == 'UuDaiDacBiet',
                borderWidth: 1,
                borderRadius: 15,
                borderColor: screen == 'UuDaiDacBiet' ? '#fe8f01' : 'white',
              },
            ]}>
            <Text
              style={[
                styles.TitTab,
                {color: screen == 'UuDaiDacBiet' ? '#fe8f01' : 'grey'},
              ]}>
              Ưu đãi đặc biệt
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setScreen('CapNhatTuNha')}
            style={[
              styles.Stack,
              {
                borderColor: screen == 'CapNhatTuNha',
                borderWidth: 1,
                borderRadius: 15,
                borderColor: screen == 'CapNhatTuNha' ? '#fe8f01' : 'white',
              },
            ]}>
            <Text
              style={[
                styles.TitTab,
                {color: screen == 'CapNhatTuNha' ? '#fe8f01' : 'grey'},
              ]}>
              Cập nhật từ nhà
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setScreen('CoffeeLove')}
            style={[
              styles.Stack,
              {
                borderColor: screen == 'CoffeeLove',
                borderWidth: 1,
                borderRadius: 15,
                borderColor: screen == 'CoffeeLove' ? '#fe8f01' : 'white',
              },
            ]}>
            <Text
              style={[
                styles.TitTab,
                {color: screen == 'CoffeeLove' ? '#fe8f01' : 'grey'},
              ]}>
              #CoffeeLove
            </Text>
          </TouchableOpacity>
        </View>
        <ToggleScreen />
      </Animated.View>
    </View>
  );
}
