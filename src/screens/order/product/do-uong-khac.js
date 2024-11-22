import React from 'react';
import {View, Text, ScrollView} from 'react-native';

export default function DoUongKhac({data, renderItem}) {
  return <ScrollView>{data?.map(renderItem)}</ScrollView>;
}
