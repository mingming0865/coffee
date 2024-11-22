import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ListProductCart({listItem}) {
  const dispatch = useDispatch();
  const onChangeQuantity = (data, type) => () => {
    if (type === 'increase') {
      dispatch({type: 'INCREASE_QUANTITY', data: data});
    } else {
      data?.quantity > 0 && dispatch({type: 'REDUCE_QUANTITY', data});
    }
  };
  const onRemoveAll = () => {
    dispatch({type: 'REMOVE_ALL'});
  };

  const onRemoveItem = item => () =>
    dispatch({type: 'REMOVE_ITEM', data: item});

  return (
    <View>
      <SwipeListView
        style={listItem.length > 4 ? {height: 360} : ''}
        data={listItem}
        keyExtractor={e => e._id?.toString()}
        renderItem={({item}) => {
          return (
            <View
              key={item?._id}
              style={{
                flexDirection: 'row',
                backgroundColor: '#F2F2F2',
                marginTop: 10,
                height: 80,
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  borderWidth: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Text style={{fontWeight: '700', color: 'orange'}}>
                  {item?.quantity}x
                </Text>
              </View>
              <Image
                source={{uri: item?.image}}
                style={{height: 50, width: 50}}
              />
              <View>
                <Text style={{width: 180}}>{item?.product_name}</Text>
                <Text>
                  {`${item?.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
                <TouchableOpacity
                  onPress={onChangeQuantity(item, 'increase')}
                  style={{
                    borderWidth: 1,
                    height: 20,
                    width: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'black'}}>+</Text>
                </TouchableOpacity>
                <Text style={{marginHorizontal: 10}}>
                  {item?.quantity || 0}
                </Text>
                <TouchableOpacity
                  onPress={onChangeQuantity(item, 'reduce')}
                  style={{
                    borderWidth: 1,
                    height: 20,
                    width: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'black'}}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        renderHiddenItem={({item}) => (
          <View
            style={{
              height: 80,
              alignItems: 'flex-end',
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <TouchableOpacity
              onPress={onRemoveItem(item)}
              style={{
                height: 80,
                width: 50,
                backgroundColor: 'red',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>Xóa</Text>
            </TouchableOpacity>
          </View>
        )}
        rightOpenValue={-50}
      />
      {listItem?.length ? (
        <TouchableOpacity
          onPress={onRemoveAll}
          style={{
            borderRadius: 15,
            height: 35,
            width: '70%',
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white'}}>Xóa tất cả</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
