import React, {useRef, useEffect} from 'react';
import {Image, SafeAreaView} from 'react-native';
import styles from './Styles';
import logo from '../../../assets/Images/logo.jpeg';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MyTabs');
    }, 2000);
  }, []);

    
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </SafeAreaView>
  );
};

export default Splash;
