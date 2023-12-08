import React, {useState} from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import styles from './styles';

import {primaryColor} from '../../helpers/Colors';

const Loader = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.Indicator}>
          <ActivityIndicator
            style={{alignSelf: 'center'}}
            animating={true}
            size={'large'}
            color={primaryColor}
            types
          />
        </View>
      </Modal>
    </View>
  );
};

export default Loader;
