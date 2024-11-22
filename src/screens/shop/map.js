import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {getProductStore} from '../../reducers/storeReducer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function Places() {
  const navigation = useNavigation();
  const [Txt, onChangeText] = useState(null);
  const dispatch = useDispatch();
  const productStore = useSelector(store => store.storeReducer.productsStore);
  useEffect(() => {
    dispatch(getProductStore());
  }, []);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          height: 70,
          borderBottomWidth: 0.2,
          borderBottomColor: 'silver',
          marginTop: -10,
        }}>
        <View
          style={{
            width: '65%',
            height: 45,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            marginLeft: 10,
            borderBottomWidth: 0.3,
            borderBottomColor: 'grey',
          }}>
          <Text style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold'}}>
            Vị trí cửa hàng
          </Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          onPress={() => navigation.goBack()}>
          <Ionicons name={'list'} size={20} style={{marginLeft: 10}} />
          <Text style={{fontWeight: 'bold', marginRight: 8}}>DANH SÁCH</Text>
        </TouchableOpacity>
      </View>
      <MapView
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: 20.959236,
          longitude: 105.768069,
          latitudeDelta: 0.02922,
          longitudeDelta: 0.02421,
        }}>
        {productStore.map(e => (
          <Marker
            key={e.id}
            title={e.name}
            coordinate={{latitude: e.latitude, longitude: e.longitude}}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/marker.png')}
                style={{height: 30, width: 30, tintColor: '#CA4600'}}
              />
            </TouchableOpacity>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
