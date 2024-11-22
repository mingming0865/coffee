import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function TatCa({navigation}) {
  return (
    <View>
      <View
        style={{
          height: 50,
          elevation: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-sharp" size={30} color={'black'} />
        </TouchableOpacity>
        <Text
          style={{
            width: Dimensions.get('window').width - 50,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Tất cả
        </Text>
      </View>
      <ScrollView>
        <Text>Tất cả</Text>
      </ScrollView>
    </View>
  );
}
