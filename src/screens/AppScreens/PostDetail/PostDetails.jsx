import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import styles from './Styles';
import commonStyles from '../../../helpers/CommonStyles';

const PostDetails = ({ navigation, route }) => {
    const { item } = route.params;
    const imageUrl =
        item.user.imageUrl !== ''
            ? item.user.imageUrl
            : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

    return (
        <SafeAreaView style={styles.container}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />

            <View
                style={[
                    commonStyles.dFlexStartRow,
                    commonStyles.sWidth,
                    commonStyles.mt20,
                    commonStyles.gap10,
                ]}>
                <Image source={{ uri: imageUrl }} style={styles.userImage} />
                <View style={[commonStyles.dFlexStartCol]}>
                    <Text style={styles.userName}> {item.user.name}</Text>
                    <Text style={styles.date}> {new Date().toLocaleDateString()}</Text>
                </View>
            </View>

            <Text style={styles.title}> {item.title}</Text>
            <Text style={styles.description}> {item.description}</Text>
        </SafeAreaView>
    );
};

export default PostDetails;
