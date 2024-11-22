import React, {useState} from 'react';
import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';

export default function ModalHinhThucThanhToan({
  checked,
  setChecked,
  visible,
  setVisible,
  selectRadio,
}) {
  console.log(checked);
  const [check, setCheck] = useState('Tienmat');
  return (
    <Modal visible={visible} transparent>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#00000011',
        }}>
        <View
          style={{
            height: 200,
            width: 250,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <View>
            <Text
              style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
              Hình thức thanh toán
            </Text>
          </View>
          {selectRadio.map((e, i) => (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 40,
                marginTop: 15,
              }}>
              <RadioButton
                value={e?.value}
                status={check === e?.value ? 'checked' : 'unchecked'}
                onPress={() => setCheck(e?.value)}
              />
              <Image
                source={e?.image}
                style={{
                  height: 30,
                  width: 30,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
              <Text>{e?.label}</Text>
            </View>
          ))}
          <TouchableOpacity
            onPress={() => {
              setVisible(false), setChecked(check);
            }}
            style={{
              height: 30,
              width: 150,
              borderRadius: 10,
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text>Đồng ý</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
