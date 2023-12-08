import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Modal,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import _debounce from 'lodash/debounce'; // Import the debounce function from lodash
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';
import commonStyles from '../../../helpers/CommonStyles';
import GifCard from '../../../components/GifCard/GifCard';
import InputField from '../../../components/InputField/InputField';
import DescriptionField from '../../../components/DescriptionField/DescriptionField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker/src/index';
import {
  UploadImageToServer,
  saveImageInFirestore,
} from '../../../services/ImageService';
import {useAppSelector} from '../../../redux/Hooks';

const UploadImage = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const user = useAppSelector(state => state.user.value.user);

  const onUploadImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log('res=>', res.assets[0].uri);
        //  const source = {uri: res.uri};
        setLoading(true);
        UploadImageToServer(res.assets[0].uri).then(imageResp => {
          console.log(imageResp);
          setImageUrl(imageResp.url);
          setLoading(false);
        });
      }
    });
  };

  const onSave = async () => {
    try {
      console.log(user);
      const body = {
        title,
        description,
        imageUrl,
        id: user.info.uid,
      };
      setLoading(true);
      const res = await saveImageInFirestore(body);
      setLoading(false);
      console.log('Response=>', res);

      if (!res.success) {
        Alert.alert('Error', res.message);
        return;
      }

      Alert.alert('Success', 'Image uploaded successfully!');
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loader />}

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        // extraScrollHeight={30}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{alignItems: 'center'}}>
        <TouchableOpacity onPress={onUploadImage} style={styles.imageContainer}>
          <Image
            source={
              imageUrl !== ''
                ? {uri: imageUrl}
                : require('../../../assets/Icons/image.png')
            }
            style={imageUrl !== '' ? styles.image : styles.imageicon}
          />
        </TouchableOpacity>

        <Text
          style={[
            commonStyles.mt10,
            commonStyles.sWidth,
            commonStyles.subheadingText,
          ]}>
          Title *
        </Text>
        <InputField
          placeholder="Title"
          onChange={text => setTitle(text)}
          value={title}
        />
        <Text
          style={[
            commonStyles.mt10,
            commonStyles.sWidth,
            commonStyles.subheadingText,
          ]}>
          Description *
        </Text>
        <DescriptionField
          placeholder="Description"
          onChange={text => setDescription(text)}
          value={description}
        />
        <TouchableOpacity onPress={onSave} style={commonStyles.buttonPrimary}>
          <Text style={commonStyles.buttonPrimaryText}>Save</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default UploadImage;

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
