import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import MainButton from '../components/mainButton';
import MainInput from '../components/mainInput';
export default function LoginScreen({navigation}) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const goToHome = () => {
    if (email.trim() == '' || !email) {
      alert('Không được để trống email !');
    } else if (password.trim() == '' || !password) {
      alert('Không được để trống mật khẩu !');
    } else {
      login();
    }
  };
  const login = async () => {
    let userData = await AsyncStorage.getItem('userData');
    if (userData) {
      userData = JSON.parse(userData);
      let arr = [...userData];
      arr = arr.filter(
        value =>
          value.email.toLocaleLowerCase() == email.toLocaleLowerCase() &&
          value.password == password,
      );
      if (arr.length > 0) {
        let curUser = arr[0];
        AsyncStorage.setItem('curUser', JSON.stringify(curUser));
        navigation.navigate('goToHome');
      } else alert('Email hoặc mật khẩu không chính xác!');
    } else {
      alert('Email hoặc mật khẩu không chính xác!');
    }
  };
  const goToSignUp = async () => {
    navigation.navigate('SignUpScreen');
  };
  const checkLogin = async () => {
    let userData = await AsyncStorage.getItem('curUser');
    if (userData) navigation.navigate('goToHome');
  };
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={{
            alignSelf: 'center',
            height: 200,
            width: '100%',
          }}
          resizeMode="cover"
          source={require('../assets/images/backGroundImage.jpg')}>
          <View style={{marginTop: 220, height: 500}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                color: 'black',
              }}>
              Chào mừng bạn đến với
            </Text>
            <Image
              style={{
                alignSelf: 'center',
                height: 20,
                width: 200,
              }}
              source={require('../assets/images/coffehouseLogo.png')}
            />
            <View style={{paddingHorizontal: 12}}>
              <MainInput
                title={'Email'}
                placeholder={'Nhập email'}
                value={email}
                onChangeText={setemail}
              />
              <MainInput
                placeholder={'Nhập mật khẩu'}
                title={'Mật khẩu'}
                value={password}
                secureTextEntry={true}
                onChangeText={setpassword}
              />
              <MainButton
                style={{marginTop: 20}}
                title={'Đăng Nhập'}
                onPress={goToHome}
              />
              <MainButton
                style={{marginTop: 12}}
                title={'Đăng Ký'}
                isSubButton={true}
                onPress={goToSignUp}
              />
            </View>
            {/* <Text style={{textAlign: 'center'}}>Hoặc</Text> */}
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
