import React from 'react';
import {View, Text, TextInput, Modal, TouchableOpacity} from 'react-native';

export default function ModalDiemGiao({
  setShowModalDiaChiGiao,
  showModalDiaChiGiao,
  diaChiGiao,
  setDiaChiGiao,
  setDiaDiemNhan,
}) {
  return (
    <Modal visible={showModalDiaChiGiao} transparent>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#00000022',
        }}>
        <View
          style={{
            height: 150,
            width: 300,
            backgroundColor: 'white',
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Nhập điểm nhận hàng</Text>
          </View>
          <TextInput
            style={{
              borderWidth: 0.5,
              height: 40,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 10,
            }}
            placeholder="Nhập địa chỉ ..."
            onChangeText={setDiaChiGiao}
            value={diaChiGiao}
          />
          <TouchableOpacity
            style={{
              height: 40,
              width: 150,
              marginTop: 10,
              backgroundColor: 'orange',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}
            onPress={() => {
              setShowModalDiaChiGiao(false), setDiaDiemNhan(diaChiGiao);
            }}>
            <Text>Đồng ý</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
