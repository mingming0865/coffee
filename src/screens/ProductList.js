import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useSelector, useDispatch} from 'react-redux';
import {getProduct} from '../service/Api';
import {getImage} from '../utils';
import {getProductList} from '../reducers/cartReducer';
import Loading from '../components/Loading';
import Header from './header';

const {height, width} = Dimensions.get('window');

export default function ProductList({navigation}) {
  const dispatch = useDispatch();
  const products = useSelector(store => store.cartReducer.products);
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const getProductList = async () => {
      try {
        setIsloading(true);
        const response = await getProduct();
        setProductList(response.data.data);
      } catch (error) {
        console.error(error);
      }
      setIsloading(false);
    };

    getProductList();
  }, []);

  // cach 2 dung thunk
  // useEffect(() => {
  //   dispatch(getProductList())
  // }, [])

  const ratingCompleted = () => {};

  const moveToDetail = item => () =>
    navigation.navigate('details', {data: item});

  const renderItem = ({item}) => {
    return (
      <View style={{width: width / 2 - 10}}>
        <View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
              zIndex: 1,
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 20,
            }}>
            <Ionicons name="heart-outline" size={25} color="black" />
          </TouchableOpacity>
          <Image
            style={{height: 300, width: '100%', resizeMode: 'cover'}}
            source={{uri: item.image}}
          />
        </View>
        <TouchableOpacity style={{padding: 10}} onPress={moveToDetail(item)}>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'white',
              borderRadius: 25 / 2,
              borderWidth: 1,
              borderColor: '#4094e3',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: '#4094e3',
                borderRadius: 10,
              }}></View>
          </View>
          <Text style={{fontWeight: '600'}}>{item?.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Text
              style={{
                fontWeight: '600',
                marginRight: 10,
                fontSize: 18,
                color: '#8c3454',
              }}>
              ${item?.price}
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 16,
                textDecorationLine: 'line-through',
              }}>
              ${item?.discountPrice}
            </Text>
          </View>
          <Text style={{fontSize: 12, color: '#8c3454', lineHeight: 18}}>
            {item?.saleDetail}
          </Text>
          <Rating
            onFinishRating={() => {}}
            imageSize={20}
            style={{
              paddingVertical: 10,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Header />
      <TextInput
        placeholder="Tìm kiếm"
        style={{
          borderWidth: 1,
          marginBottom: 10,
          marginLeft: 5,
          marginRight: 5,
        }}
      />
      {isLoading ? <Loading /> : null}
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={item => item._id?.toString()}
        numColumns={2}
        horizontal={false}
        // style={{ marginBottom: 100 }}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
      />
    </View>
  );
}
