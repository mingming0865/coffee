import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import dayjs from 'dayjs';

export default function ThongTinDonHang({visible, setVisible, ttDonHang}) {
  console.log(ttDonHang);
  return (
    <Modal visible={visible}>
      <Text
        style={{
          height: 40,
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Thông tin đơn hàng
      </Text>
      <View style={{height: 5, backgroundColor: '#E5E5E5'}} />
      <Text
        style={{
          height: 40,
          textAlignVertical: 'center',
          marginLeft: 10,
          marginRight: 10,
        }}>
        Nơi nhận: {ttDonHang?.[3]}
      </Text>
      <View style={{height: 5, backgroundColor: '#E5E5E5'}} />
      <Text
        style={{
          height: 40,
          textAlignVertical: 'center',
          marginLeft: 10,
          marginRight: 10,
        }}>
        Đặt hàng ngày: {dayjs(ttDonHang?.[2]).format('DD-MM-YYYY hh:mm:ss')}
      </Text>
      <View style={{height: 5, backgroundColor: '#E5E5E5'}} />
      <Text
        style={{
          height: 40,
          textAlignVertical: 'center',
          marginLeft: 10,
          marginRight: 10,
        }}>
        Tổng giá tiền đơn hàng: {ttDonHang?.[1]}
      </Text>
      <View style={{height: 5, backgroundColor: '#E5E5E5'}} />
      {ttDonHang?.[0].map((e, i) => (
        <View
          key={i}
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'orange'}}>{e?.quantity}x</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: e?.image}} style={{height: 80, width: 80}} />
            <View style={{width: 240}}>
              <Text>{e?.product_name}</Text>
              <Text>
                {`${e?.base_price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Text>
            </View>
          </View>
        </View>
      ))}
      <View style={{alignSelf: 'center', marginTop: 20}}>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={{
            height: 50,
            width: 250,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text>Đóng</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
