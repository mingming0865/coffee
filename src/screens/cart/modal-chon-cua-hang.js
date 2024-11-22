import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {getProductStore} from '../../reducers/storeReducer';

export default function ModalChonCuaHang() {
  const dispatch = useDispatch();
  const productStore = useSelector(store => store.storeReducer.productsStore);
  useEffect(() => {
    dispatch(getProductStore());
  }, []);
  const listItem = useSelector(store => store.cartReducer.cart);
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
  console.log(listItem);
  const [itemSelected, setItemSelected] = useState();
  const [changeText, setChangeText] = useState('');
  console.log(changeText);
  console.log(itemSelected);
  return (
    <View>
      <SearchableDropdown
        onTextChange={text => setChangeText(text)}
        onItemSelect={item => setItemSelected(JSON.stringify(item))}
        containerStyle={{padding: 5}}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#FAF7F6',
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: '#FAF9F8',
          borderColor: '#bbb',
          borderWidth: 1,
        }}
        itemTextStyle={{
          color: '#222',
        }}
        itemsContainerStyle={{
          maxHeight: '70%',
        }}
        items={productStore}
        // placeholder="placeholder"
        resetValue={false}
        // underlineColorAndroid="transparent"
      />
    </View>
    // <View style={{padding: 20}}>
    //   {!listItem?.length && <Text>Nothing</Text>}
    //   {listItem?.map(e => {
    //     return (
    //       <View key={e?._id} style={{flexDirection: 'row', marginTop: 20}}>
    //         <Image source={{uri: e?.image}} style={{height: 50, width: 50}} />
    //         <Text>{e?.product_name}</Text>
    //         <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
    //           <TouchableOpacity
    //             onPress={onChangeQuantity(e, 'increase')}
    //             style={{
    //               borderWidth: 1,
    //               height: 20,
    //               width: 20,
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //             }}>
    //             <Text style={{color: 'black'}}>+</Text>
    //           </TouchableOpacity>
    //           <Text style={{marginHorizontal: 10}}>{e?.quantity || 0}</Text>
    //           <TouchableOpacity
    //             onPress={onChangeQuantity(e, 'reduce')}
    //             style={{
    //               borderWidth: 1,
    //               height: 20,
    //               width: 20,
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //             }}>
    //             <Text style={{color: 'black'}}>-</Text>
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     );
    //   })}
    //   {listItem?.length ? (
    //     <TouchableOpacity
    //       onPress={onRemoveAll}
    //       style={{
    //         borderWidth: 1,
    //         height: 50,
    //         width: '80%',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         alignSelf: 'center',
    //       }}>
    //       <Text style={{color: 'black'}}>Remove All</Text>
    //     </TouchableOpacity>
    //   ) : null}
    // </View>
  );
}
