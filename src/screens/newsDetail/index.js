import React from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';

export default function NewsDetail({route}) {
  const dataNews = route.params.data;
  return (
    <ScrollView>
      <Image
        source={{uri: dataNews?.thumbnail}}
        style={{height: 300, width: Dimensions.get('window').width}}
      />
      <Text>{dataNews?.title}</Text>
      <Text>
        Link: <Text style={{color: 'blue'}}>{dataNews?.share_url}</Text>
      </Text>
      <Text>
        {dataNews?.html
          ?.replace(/<p>/g, '')
          .replace(/p>/g, '')
          .replace(/</g, '')
          .replace(/\//g, '')}
      </Text>
    </ScrollView>
  );
}

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   ActivityIndicator,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {getProduct} from '../../service/Api';

// export default function NewsDetail() {
//   const [order, setOrder] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currenIndex, setCurrenIndex] = useState();
//   const [ref, setRef] = useState();
//   const getListProduct = async () => {
//     try {
//       const result = await getProduct();
//       setOrder(result.data.data);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getListProduct();
//   }, []);

//   const onClickItem = (item, index) => {
//     setCurrenIndex(index);
//     const newArrData = order.map((e, index) => {
//       if (item._id == e._id) {
//         return {
//           ...e,
//           selected: true,
//         };
//       }

//       return {
//         ...e,
//         selected: false,
//       };
//     });
//     setOrder(newArrData);
//   };

//   const renderItem = ({item, index}) => {
//     return (
//       <TouchableOpacity
//         onPress={() => onClickItem(item, index)}
//         style={
//           ([styles.item],
//           {
//             marginTop: 11,
//             height: 150,
//             backgroundColor: item.selected ? 'orange' : 'white',
//           })
//         }>
//         <Image
//           source={{uri: item.image}}
//           style={styles.image}
//           resizeMode="contain"
//         />
//       </TouchableOpacity>
//     );
//   };

//   const onScrollToItemSelected = () => {
//     ref.scrollToIndex({animated: true, index: currenIndex});
//   };

//   const getItemLayout = (data, index) => {
//     return {length: 161, offset: 161 * index, index};
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <View>
//           <TouchableOpacity
//             onPress={onScrollToItemSelected}
//             style={styles.wrapButton}>
//             <Text style={styles.txtFontSize}>Scroll</Text>
//           </TouchableOpacity>
//           <FlatList
//             data={order}
//             renderItem={renderItem}
//             keyExtractor={item => `key-${item._id}`}
//             getItemLayout={getItemLayout}
//             ref={ref => setRef(ref)}
//           />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   wrapButton: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//     padding: 20,
//     backgroundColor: 'orange',
//   },
//   txtFontSize: {
//     fontSize: 20,
//   },
//   item: {
//     borderWidth: 0.5,
//     padding: 8,
//     borderRadius: 10,
//     justifyContent: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
// });

// // import React, {Component} from 'react';
// // import {
// //   AppRegistry,
// //   StyleSheet,
// //   Text,
// //   View,
// //   Dimensions,
// //   ScrollView,
// //   Button,
// // } from 'react-native';

// // var screenWidth = Dimensions.get('window').width;

// // export default class App extends React.Component {
// //   render() {
// //     return (
// //       <View>
// //         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
// //           <View style={styles.ButtonContainer}>
// //             <Button
// //               title="Screen 1"
// //               onPress={() => {
// //                 this.scroll.scrollTo({x: 0});
// //               }}
// //             />
// //           </View>
// //           <View style={styles.ButtonContainer}>
// //             <Button
// //               title="Screen 2"
// //               onPress={() => {
// //                 this.scroll.scrollTo({x: screenWidth});
// //               }}
// //             />
// //           </View>
// //           <View style={styles.ButtonContainer}>
// //             <Button
// //               title="Screen 3"
// //               onPress={() => {
// //                 this.scroll.scrollTo({x: screenWidth * 2});
// //               }}
// //             />
// //           </View>
// //         </View>
// //         <ScrollView
// //           horizontal={true}
// //           pagingEnabled={true}
// //           showsHorizontalScrollIndicator={false}
// //           ref={node => (this.scroll = node)}>
// //           <View style={styles.ScrollContainer}>
// //             <ScrollView>
// //               <Text style={styles.ScrollTextContainer}>
// //                 Screen aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaaScreen
// //                 aaaaaaaaaaaaaaaaaaaaaaaaaaa1aaaaaaaaaaaaaa
// //               </Text>
// //             </ScrollView>
// //           </View>
// //           <View style={styles.ScrollContainer}>
// //             <Text style={styles.ScrollTextContainer}>Screen 2</Text>
// //           </View>
// //           <View style={styles.ScrollContainer}>
// //             <Text style={styles.ScrollTextContainer}>Screen 3</Text>
// //           </View>
// //         </ScrollView>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   MainContainer: {
// //     backgroundColor: '#abe3a8',
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   ScrollContainer: {
// //     backgroundColor: '#cdf1ec',
// //     flexGrow: 1,
// //     marginTop: 0,
// //     width: screenWidth,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   ScrollTextContainer: {
// //     fontSize: 20,
// //     padding: 15,
// //     color: '#000',
// //     textAlign: 'center',
// //   },
// //   ButtonViewContainer: {
// //     flexDirection: 'row',
// //     paddingTop: 35,
// //   },
// //   ButtonContainer: {
// //     padding: 30,
// //   },
// // });
