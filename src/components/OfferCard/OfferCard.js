import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const OfferCard = ({item, onAcceptOffer, onRejectOffer}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}></View>
        <View style={styles.content}>
          <View style={styles.rowContainer}>
            <Text style={styles.nameText}>{item.teacher[0].name}</Text>
            <Text style={styles.sendMessageText}>Send Message</Text>
          </View>
          <Text style={styles.descriptionText} numberOfLines={3}>
            {item.message}
          </Text>
          <View style={styles.rowContainer}>
            <Text style={styles.descriptionText}>
              Delivery Time - {item.deliveryTime}
            </Text>
            <Text style={styles.descriptionText}>
              Budget - {item.AmountOffer}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => onAcceptOffer(item)}
          style={styles.acceptButton}>
          <Text style={styles.buttonText}>Accept Offer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onRejectOffer(item)}
          style={styles.rejectButton}>
          <Text style={styles.buttonText}>Reject Offer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OfferCard;
