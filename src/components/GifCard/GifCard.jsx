import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const GifCard = ({ item }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('PostDetails', {item});
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default GifCard;
