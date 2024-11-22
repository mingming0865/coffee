import React from 'react';
import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import styles from './css';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function ModalDanhMuc({
  showModalDanhMuc,
  setShowModalDanhMuc,
  imagesButton,
  setClick,
  scrollRef,
}) {
  return (
    <Modal visible={showModalDanhMuc} transparent animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: '#00000055',
        }}>
        <View
          style={{
            height: 650,
            width: Dimensions.get('window').width,
            backgroundColor: 'white',
            flexWrap: 'wrap',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <View style={styles.ButtonContainer}>
            <View
              style={{
                width: Dimensions.get('window').width,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  height: 40,
                  marginRight: 40,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    width: Dimensions.get('window').width - 60,
                    textAlign: 'center',
                  }}>
                  Danh mục
                </Text>
                <TouchableOpacity onPress={() => setShowModalDanhMuc(false)}>
                  <Ionicons
                    name="ios-close"
                    size={25}
                    color="black"
                    style={{marginRight: 40}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: 200,
                marginTop: 30,
              }}>
              {imagesButton.map(e => (
                <TouchableOpacity
                  key={e.key}
                  style={{
                    marginLeft: 20,
                    justifyContent: 'space-around',
                    height: 60,
                    marginTop: 15,
                    width: 60,
                    backgroundColor: '#F3E2A9',
                    borderRadius: 50,
                  }}
                  onPress={() => {
                    scrollRef.current?.scrollTo({
                      x: e.screenWidth,
                      y: 0,
                      animated: true,
                    }),
                      setShowModalDanhMuc(false),
                      setClick(e.click);
                  }}>
                  <Image
                    style={{
                      height: 40,
                      width: 40,
                      alignSelf: 'center',
                    }}
                    source={e.image}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
