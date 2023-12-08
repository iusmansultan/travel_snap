import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Styles';
import eye from '../../assets/Icons/eye.png';
import bid from '../../assets/Icons/bid.png';

const PostedQuestionTile = ({item}) => {
  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.postedText} numberOfLines={1}>
        Posted: {item.createdAt}
      </Text>
      <Text style={styles.postedText}>In: {item.subject}</Text>
      <Text style={styles.postedQuestionTitleText} numberOfLines={2}>
        {item.title}
      </Text>
      <View style={styles.viewContainer}>
        <View style={styles.contentContainer}>
          <Image source={eye} style={styles.icon} />
          <Text style={styles.contentText}>Views: {item.views}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Image source={bid} style={styles.icon} />
          <Text style={styles.contentText}>Bids: {item.bids}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={
          item.questionStatus === 'Resolved'
            ? styles.statusButtonActive
            : styles.statusButtonInActive
        }>
        <Text style={styles.statusButtonText}>
          {item.questionStatus.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostedQuestionTile;
