import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wishlist from '../screens/Wishlist';

import ProfileScreen from '../screens/Profile';
import MyTabBar from '../components/myTabBar';
import TrangChuPage from '../screens/home';
import Order from '../screens/order';
import AllStore from '../screens/shop/store';
import Spoint from '../screens/spoint/index';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="TrangChu" component={TrangChuPage} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="AllStore" component={AllStore} />
      <Tab.Screen name="Spoint" component={Spoint} />
      <Tab.Screen name="Logout" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
