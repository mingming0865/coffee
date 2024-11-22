import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThongTinDonHang from './thong-tin-don-hang';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LichSuDonHang({navigation}) {
  const listHistory = useSelector(
    store => store.HistoryReducer.productsHistory,
  );
  const dispatch = useDispatch();
  console.log(listHistory.map(e => e.filter(f => f?.[4] === user?.email)));
  console.log(dayjs(new Date()).format('DD-MM-YYYY hh:mm:ss'));
  const onRemoveAll = () => {
    dispatch({type: 'REMOVE_AL'});
  };
  const [ttDonHang, setTtDonHang] = useState();
  const [modalTT, setModalTT] = useState(false);
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
  const map = listHistory.map(e => e);
  const historyUser = map.filter(e => e?.[4] === user?.email);
  return (
    <ScrollView>
      <Text
        style={{
          height: 40,
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Lịch sử đơn hàng
      </Text>
      {map.filter(e => e?.[4] === user?.email).length > 0
        ? historyUser.reverse().map((e, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setModalTT(true), setTtDonHang(e);
              }}
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../assets/images/logocoffeehouse.jpg')}
                  style={{height: 100, width: 100}}
                />
                <View>
                  <Text>Gồm có {e?.[0].length} sản phẩm</Text>
                  {e?.[3] ? <Text>{e?.[3]}</Text> : null}
                  <Text>{e?.[1]}đ</Text>
                  <Text>{dayjs(e?.[2]).format('DD-MM-YYYY hh:mm:ss')}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" color="black" size={25} />
            </TouchableOpacity>
          ))
        : null}
      {listHistory?.length ? (
        <TouchableOpacity
          onPress={onRemoveAll}
          style={{
            height: 50,
            width: 250,
            backgroundColor: 'orange',
            borderRadius: 10,
            marginTop: 20,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text>Xóa lịch sử đơn hàng</Text>
        </TouchableOpacity>
      ) : null}
      <ThongTinDonHang
        visible={modalTT}
        setVisible={setModalTT}
        ttDonHang={ttDonHang}
      />
    </ScrollView>
  );
}
