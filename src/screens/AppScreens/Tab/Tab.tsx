import * as React from 'react';
import {Text, View, Image, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import styles from './Styles';

const HomeIcon = require('../../../assets/Icons/home.png');
const ImageIcon = require('../../../assets/Icons/image.png');

// import screens for bottom tabs
import Home from '../Home/Home';
import UploadImage from '../UploadImage/UploadImage';


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName={'home'}>
      <Tab.Screen
        name={'home'}
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={HomeIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'uploadImage'}
        component={UploadImage}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={ImageIcon}
              style={
                focused ? styles.tabBarIconsActive : styles.tabBarIconsInActive
              }
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
