import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Card from '../../components/card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './css';
import {getList} from '../../service/order.api';
import {useSelector} from 'react-redux';
import axios from 'axios';
export default function TichDiem({setChangeScreen, navigation}) {
  const [dsVoucher, setDsVoucher] = useState();
  const getListVoucher = async () => {
    try {
      const res = await axios.get(
        `https://cars-rental-api.herokuapp.com/vouchers/`,
        {},
      );
      setDsVoucher(res.data.data.vouchers);
      console.log(dsVoucher);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListVoucher();
  }, []);
  const listProductHistory = useSelector(store => store.HistoryReducer.gi);
  console.log(listProductHistory);

  return (
    <ScrollView style={{marginLeft: 10, marginRight: 10, height: 560}}>
      <Card />
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={() => setChangeScreen('DoiUuDai')}>
          <MaterialCommunityIcons
            name="crop-landscape"
            size={30}
            color="orange"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Đổi ưu đãi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchDieuKhoan}>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={30}
            color="orange"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Phiếu ưu đãi của bạn
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={() => navigation.navigate('LichSuDonHang')}>
          <MaterialCommunityIcons
            name="equal"
            size={30}
            color="orange"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Lịch sử giao dịch
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchDieuKhoan}>
          <MaterialCommunityIcons
            name="account-box-outline"
            size={30}
            color="purple"
            style={{marginLeft: 15}}
          />
          <Text style={{marginLeft: 15, fontWeight: '500', fontSize: 16}}>
            Quyền lợi của bạn
          </Text>
        </TouchableOpacity>
      </View>
      {dsVoucher?.map(e => (
        <TouchableOpacity key={e?.id}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Image
              source={{uri: e?.img}}
              style={{height: 80, width: 80, borderRadius: 10}}
            />
            <View>
              <Text>{e?.title}</Text>
              <Text>{e?.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
