import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';
import {useSelector, useDispatch} from 'react-redux';

export default function ProductDetail({navigation, route}) {
  const {data} = route.params;
  const dispatch = useDispatch();
  console.log(data);
  const onAddCard = () => {
    dispatch({type: 'ADD_TO_CART', data: {...data, quantity: 1}}); // gui action toi reducer
  };
  return (
    <View>
      <Text>ProductDetail</Text>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <Text>{data?.name}</Text>
      <Text>{data?.price}</Text>
      <Text>{dayjs(data?.createdDate).format('DD/MM/YYYY hh:mm')}</Text>
      <TouchableOpacity
        onPress={onAddCard}
        style={{
          borderWidth: 1,
          height: 50,
          width: '50%',
          alignSelf: 'center',
          backgroundColor: 'orange',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}
