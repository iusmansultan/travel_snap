import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';
import commonStyles from '../../helpers/CommonStyles';

import { descriptionText } from '../../helpers/Colors';

const InputField = ({
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
        placeholderTextColor={descriptionText}
        onChangeText={(text) => onChange(text)}
        style={styles.input}
        autoCapitalize="none"
        value={value}
      />
    </View>
  );
};

export default InputField;
