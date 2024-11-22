import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {getNewsfeed} from '../../../service/Api';
import {dataKhamPha} from './data';
export default function CoffeeLove({scrollY}) {
  // const [newFeed, setNewfeed] = useState([]);
  // const getApiNewsfeed = async () => {
  //   try {
  //     const result = await getNewsfeed();
  //     console.log(result);
  //     setNewfeed(result.data.news[2].posts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getApiNewsfeed();
  // }, []);
  const data = dataKhamPha.news?.[2].posts;
  const renderItem = ({item}) => (
    <TouchableOpacity style={{width: Dimensions.get('window').width / 2 - 10}}>
      <Image source={{uri: item.thumbnail}} style={styles.imgStyle} />
      <View style={styles.rowPrice}>
        <Text style={{width: 170}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imgStyle: {
    marginLeft: 5,
    height: 170,
    width: Dimensions.get('window').width / 2 - 15,
    borderRadius: 10,
    marginTop: 10,
  },
});
