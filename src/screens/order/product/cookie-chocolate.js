import React from 'react';
import {View, Text, ScrollView} from 'react-native';

export default function CookieChocolate({data, renderItem}) {
  return <ScrollView>{data?.map(renderItem)}</ScrollView>;
}
