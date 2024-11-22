import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
export default function ModalVoucher({
  showModalVoucher,
  setShowModalVoucher,
  setVoucher,
}) {
  const [clickVoucher, setClickVoucher] = useState();
  const [dataVoucher, setDataVoucher] = useState();
  const getListVoucher = async () => {
    try {
      const res = await axios.get(
        `https://cars-rental-api.herokuapp.com/vouchers/`,
        {},
      );
      setDataVoucher(res.data.data.vouchers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListVoucher();
  }, []);

  return (
    <Modal visible={showModalVoucher} transparent>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#00000011',
        }}>
        <View
          style={{
            height: 350,
            width: 300,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <Text style={{height: 30, fontSize: 20, fontWeight: 'bold'}}>
              Mã giảm giá
            </Text>
          </View>
          <ScrollView>
            {dataVoucher?.map(e => (
              <TouchableOpacity
                onPress={() => {
                  setClickVoucher(e.id);
                }}
                key={e.id}
                style={
                  clickVoucher === e.id
                    ? {
                        backgroundColor: '#F7BE81',
                        marginTop: 10,
                        flexDirection: 'row',
                        marginLeft: 10,
                        marginRight: 10,
                      }
                    : {
                        backgroundColor: 'white',
                        marginTop: 10,
                        flexDirection: 'row',
                        marginLeft: 10,
                        marginRight: 10,
                      }
                }>
                <Image source={{uri: e?.img}} style={{height: 60, width: 60}} />
                <View>
                  <Text>{e?.title}</Text>
                  <Text style={{width: 220}}>{e?.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={{height: 40, justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                setShowModalVoucher(false),
                  setVoucher(dataVoucher?.find(e => e.id === clickVoucher));
              }}
              style={{
                width: 100,
                height: 30,
                backgroundColor: 'orange',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
