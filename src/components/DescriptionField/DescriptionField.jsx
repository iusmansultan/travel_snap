import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import commonStyles from '../../helpers/CommonStyles';

import { fieldTextColor } from '../../helpers/Colors';


const DescriptionField = ({
  placeholderText,
  onChange,
  value,
}) => {


  return (
    <View
      style={[
        styles.inputContainer,
        commonStyles.dFlexBetweenRow,
        commonStyles.mt10,
      ]}>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={fieldTextColor}
        onChangeText={(text) => onChange(text)}
        style={styles.input}
        autoCapitalize="none"
        value={value}
        multiline
        numberOfLines={6}
      />

    </View>
  );
};

export default DescriptionField;
