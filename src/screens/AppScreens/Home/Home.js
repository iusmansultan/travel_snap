import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Modal,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import _debounce from 'lodash/debounce'; // Import the debounce function from lodash
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';
import commonStyles from '../../../helpers/CommonStyles';
import GifCard from '../../../components/GifCard/GifCard';
import {getAllPosts} from '../../../services/ImageService';
import logo from '../../../assets/Images/logo.jpeg';

import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const onChangeSearchText = text => {
    setSearch(text);
  };

  useEffect(() => {
    setLoading(true);
    getAllPosts().then(posts => {
      setData(posts.res);
      setLoading(false);
    });
  }, []);

  // Assuming this is part of a functional component
  useFocusEffect(
    useCallback(() => {
      let isMounted = true; // Flag to track component mount state

      setLoading(true);

      getAllPosts()
        .then(posts => {
          if (isMounted) {
            // Only update state if the component is still mounted
            setData(posts.res);
            setLoading(false);
          }
        })
        .catch(error => {
          console.error(error);
          if (isMounted) {
            // Handle error and update state if the component is still mounted
            setLoading(false);
          }
        });

      // Cleanup function to handle component unmount
      return () => {
        isMounted = false;
      };
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loader />}
      <View
        style={[
          commonStyles.dFlexCenterRow,
          styles.header,
          commonStyles.sWidth,
        ]}>
        <Image source={logo} style={styles.logo} />
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <GifCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          // ?TODO: need to implement onEndReached
          //   onReachedEnd();
        }}
        // ?TODO: need to implement when user want to refresh the list
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={onRefresh}
        //     tintColor="#000" // Change the loading indicator color
        //   />
        // }
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default Home;

const SearchContainer = ({onChangeText, value}) => {
  return (
    <View
      style={[
        styles.searchContainer,
        commonStyles.dFlexStartRow,
        commonStyles.gap10,
      ]}>
      <Image
        source={require('../../../assets/Icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const Loader = () => {
  return (
    <View style={styles.centeredView}>
      <Modal transparent={true} visible={true}>
        <View style={styles.Indicator}>
          <View style={styles.rectangle}>
            <ActivityIndicator
              style={{alignSelf: 'center'}}
              animating={true}
              size={'small'}
              color="white"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
