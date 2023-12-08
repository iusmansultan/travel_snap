import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './Styles';
import logo from '../../../assets/Images/logo.jpeg';
import commonStyles from '../../../helpers/CommonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import AuthService
import {ForgotUserPassword} from '../../../services/AuthService';

// import loader components
import Loader from '../../../components/Loader/Loader';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const onSendInstruction = async () => {
    const body = {
      email: email.trim().toLowerCase(),
    };
    setLoading(true);
    const res = await ForgotUserPassword(body);
    const {success, message, data} = res;
    console.log('res=>', res);
    setLoading(false);
    if (success) {
      Alert.alert('Success', message);
    } else {
      Alert.alert('Error', message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loader />}

      <KeyboardAwareScrollView
        extraScrollHeight={100}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{alignItems: 'center'}}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.loginText}>Forgot Password</Text>
        <Text style={styles.welcomeText}>
          Enter the email address you used when you joined and we'll send you
          instructions to reset your password.
        </Text>

        <TextInput
          style={commonStyles.textInput}
          placeholder="Enter your email"
          placeholderTextColor="#8391A1"
          onChangeText={e => setEmail(e)}
        />

        <TouchableOpacity
          onPress={onSendInstruction}
          style={commonStyles.buttonPrimary}>
          <Text style={commonStyles.buttonPrimaryText}>
            Send Reset Instruction
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
