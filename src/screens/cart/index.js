import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalDiemGiao from './modal-chon-diem-giao';
import ListProductCart from './list-product-cart';
import ModalVoucher from './modal-voucher';
import ModalHinhThucThanhToan from './modal-hinh-thuc-thanh-toan';
import PayPal from './modal-paypal';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Header({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: 60,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-sharp" size={25} color={'black'} />
      </TouchableOpacity>
      <Text
        style={{
          width: Dimensions.get('window').width - 40,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        THE COFFEE HOUSE
      </Text>
    </View>
  );
}

export default function Cart({navigation}) {
  const [diaChiGiao, setDiaChiGiao] = useState();
  const dispatch = useDispatch();
  const [showModalDiaChiGiao, setShowModalDiaChiGiao] = useState(false);
  const [diaDiemNhan, setDiaDiemNhan] = useState();
  const [showModalVoucher, setShowModalVoucher] = useState(false);
  const [voucher, setVoucher] = useState();
  const [visible, setVisible] = useState(false);
  const listItem = useSelector(store => store.cartReducer.cart);
  const [checked, setChecked] = useState('Tienmat');
  const [tienMat, setTienMat] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [giaTien, setGiaTien] = useState();
  const [showModalTTTM, setShowModalTTTM] = useState(false);
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
  console.log(giaTien);
  const onRemoveAll = () => {
    dispatch({type: 'REMOVE_ALL'});
  };

  const onAddHistory = () => {
    dispatch({
      type: 'ADD_HISTORY',
      data: listItem,
      price: giaTien ? giaTien : 0,
      date: new Date(),
      address: diaDiemNhan,
      user: user?.email,
    });
    onRemoveAll();
    setTienMat(false);
    navigation.goBack();
    // gui action toi reducer
  };

  const arrTongTien = listItem?.map(e => ({
    ...e,
    sumPrice: e?.quantity * e?.price,
  }));
  const tienTungDonHang = arrTongTien?.map(e => e?.sumPrice);
  const selectRadio = [
    {
      image: require('../../assets/images/iconTienMat.jpg'),
      label: 'Tiền mặt',
      value: 'Tienmat',
    },
    {
      image: require('../../assets/images/iconPaypal.jpg'),
      label: 'Paypal',
      value: 'Paypal',
    },
  ];
  useEffect(() => {
    setGiaTien(
      tienTungDonHang.length > 0
        ? voucher
          ? voucher?.discount > 101
            ? `${
                tienTungDonHang?.reduce((pre, cur) => pre + cur) -
                voucher?.discount
              }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : `${
                tienTungDonHang?.reduce((pre, cur) => pre + cur) -
                (tienTungDonHang?.reduce((pre, cur) => pre + cur) *
                  voucher?.discount) /
                  100
              }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          : `${tienTungDonHang?.reduce((pre, cur) => pre + cur)}`.replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ',',
            )
        : 0,
    );
  }, [voucher, giaTien, listItem]);
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 80}}>
        <Header navigation={navigation} />
        <View style={{height: 7, backgroundColor: '#D8D8D8'}} />
        <View style={{marginLeft: 10, marginRight: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Giao tới</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              width: Dimensions.get('window').width,
            }}>
            <Image
              source={require('../../assets/images/iconViTri.png')}
              style={{height: 30, width: 40}}
            />
            <TouchableOpacity
              onPress={() => setShowModalDiaChiGiao(true)}
              style={{
                height: 50,
                width: Dimensions.get('window').width - 40,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 16, fontWeight: '600'}}>
                {diaDiemNhan ? diaDiemNhan : 'Chọn điểm nhận'}
              </Text>
              <Ionicons name="chevron-forward" color={'black'} size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 7, backgroundColor: '#D8D8D8'}} />
        <View style={{marginLeft: 10, marginRight: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Tóm tắt đơn hàng
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{color: 'blue'}}>Thêm món</Text>
            </TouchableOpacity>
          </View>
          <ListProductCart listItem={listItem} />
        </View>
        <View style={{height: 7, backgroundColor: '#D8D8D8', marginTop: 10}} />
        <View>
          <Text>Thông tin hóa đơn</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              {checked === 'Tienmat' ? (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/images/iconTienMat.jpg')}
                    style={{height: 30, width: 30}}
                  />
                  <Text>Tiền mặt</Text>
                </View>
              ) : (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/images/iconPaypal.jpg')}
                    style={{height: 30, width: 30}}
                  />
                  <Text>Paypal</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowModalVoucher(true)}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/iconUuDai.jpg')}
                style={{height: 30, width: 30}}
              />
              <Text>Ưu đãi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{height: 80, elevation: 10, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Tổng cộng</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {tienTungDonHang.length > 0
              ? voucher
                ? voucher?.discount > 101
                  ? `${
                      tienTungDonHang?.reduce((pre, cur) => pre + cur) -
                      voucher?.discount
                    }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  : `${
                      tienTungDonHang?.reduce((pre, cur) => pre + cur) -
                      (tienTungDonHang?.reduce((pre, cur) => pre + cur) *
                        voucher?.discount) /
                        100
                    }`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : `${tienTungDonHang?.reduce((pre, cur) => pre + cur)}`.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ',',
                  )
              : 0}
          </Text>
        </View>
        <TouchableOpacity
          onPress={
            checked === 'Paypal'
              ? () => setIsShow(true)
              : () => setTienMat(true)
          }
          style={{
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            height: 40,
            width: Dimensions.get('window').width - 30,
          }}>
          <Text>Đặt đơn</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={tienMat} transparent>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#00000011',
          }}>
          <View
            style={{
              height: 150,
              width: 220,
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
              Thông Báo
            </Text>
            <Text style={{textAlign: 'center'}}>
              Đơn giao sẽ được thanh toán bằng tiền mặt, bạn muốn xác nhận chứ ?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: 220,
                alignSelf: 'center',
                marginTop: 40,
              }}>
              <TouchableOpacity
                onPress={onAddHistory}
                style={{
                  height: 30,
                  width: 90,
                  backgroundColor: 'orange',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white'}}>Đồng ý</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTienMat(false)}
                style={{
                  height: 30,
                  width: 90,
                  backgroundColor: 'orange',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white'}}>Hủy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ModalDiemGiao
        setShowModalDiaChiGiao={setShowModalDiaChiGiao}
        showModalDiaChiGiao={showModalDiaChiGiao}
        diaChiGiao={diaChiGiao}
        setDiaChiGiao={setDiaChiGiao}
        setDiaDiemNhan={setDiaDiemNhan}
      />
      <ModalVoucher
        setShowModalVoucher={setShowModalVoucher}
        showModalVoucher={showModalVoucher}
        setVoucher={setVoucher}
      />
      <ModalHinhThucThanhToan
        visible={visible}
        setVisible={setVisible}
        checked={checked}
        setChecked={setChecked}
        selectRadio={selectRadio}
      />
      <PayPal isShow={isShow} setIsShow={setIsShow} />
    </View>
  );
}
