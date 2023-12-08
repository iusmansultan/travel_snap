import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Styles';
import commonStyles from '../../helpers/CommonStyles';
import email from '../../assets/Icons/email.png';
import edit from '../../assets/Icons/edit.png';
import deleteIcon from '../../assets/Icons/delete.png';
import {useNavigation} from '@react-navigation/native';

const OrderCard = ({item}) => {
  const navigation = useNavigation();
  const userImage =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80';

  
  const openDetails = () => {
    if (item.status !== 'Completed') {
      navigation.navigate('OrderDetails', {
        order: item,
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={openDetails}
      style={[styles.container, commonStyles.shadow]}>
      <Image source={{uri: userImage}} style={commonStyles.profileImage} />
      <View style={styles.detailContentContainer}>
        <View style={styles.detailContentTopContainer}>
          <Text style={styles.detailContentTopContainerUserNameText}>
            {item.user[0]?.name}
          </Text>
          {/* <View style={styles.detailContentTopContainerSendMessageContainer}>
            <Image source={email} style={styles.icon} />
            <Text style={styles.detailContentTopContainerSendMessageText}>
              Send Message
            </Text>
          </View> */}
        </View>
        <Text style={styles.questionText} numberOfLines={3}>
          {item.message}
        </Text>
        <View style={styles.deliveryContentContainer}>
          <Text style={styles.deliveryTimeText}>
            Delivery Time - {item.deliveryTime}
          </Text>
          <Text style={styles.deliveryTimeText}>
            Budget - {item.AmountOffer}
          </Text>
        </View>
        <Text style={styles.deliveryTimeText}>
          Delivered on: {item.updatedAt}
        </Text>

        <View style={styles.detailBottomContainer}>
          <View style={styles.detailBottomContainerStatus}>
            <Text style={styles.detailBottomContainerStatusText}>
              {item.status}
            </Text>
          </View>
          {item.status !== 'InProgress' && (
            <View style={styles.actionIconsContainer}>
              <Image style={styles.icon} source={edit} />
              <Image style={styles.icon} source={deleteIcon} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
