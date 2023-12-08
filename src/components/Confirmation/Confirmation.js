import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';

const Confirmation = ({
  modalVisible,
  setModalVisible,
  onPress,
  onCancel,
  title,
  message,
  loading,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.container}></View>

      <View style={styles.ContentView}>
        <View style={styles.topStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.messageStyle}>{message}</Text>
        </View>
        <View style={styles.buttonsViewStyle}>
          <TouchableOpacity style={styles.cancelbutton} onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmbutton} onPress={onPress}>
            <Text style={styles.confirmText}>Sure</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Confirmation;
