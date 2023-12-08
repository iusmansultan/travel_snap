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
import facebook from '../../../assets/Icons/facebook.png';
import google from '../../../assets/Icons/google.png';
import apple from '../../../assets/Icons/apple.png';
import commonStyles from '../../../helpers/CommonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useAppDispatch} from '../../../redux/Hooks';
import {saveUser} from '../../../redux/User/UserSlice';

// import AuthService
import {SignInUser} from '../../../services/AuthService';

// import loader components
import Loader from '../../../components/Loader/Loader';

const SignIn = ({navigation}) => {
  const [checked, setChecked] = useState('student');
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignIn = async () => {
    const body = {
      email: email.trim().toLowerCase(),
      password,
      role: checked,
    };
    setLoading(true);
    const res = await SignInUser(body);
    const {success, message, data} = res;
    console.log('res=>', res);
    setLoading(false);
    if (success) {
      console.log(data);
      dispatch(
        saveUser({
          isLoggedIn: true,
          user: {
            role: data.role,
            info: data,
          },
        }),
      );
      // navigation.navigate('SignIn');
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
        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.welcomeText}>Welcome back! continue</Text>

        <TextInput
          style={commonStyles.textInput}
          placeholder="Enter your email"
          placeholderTextColor="#8391A1"
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={commonStyles.textInput}
          placeholder="Enter your password"
          placeholderTextColor="#8391A1"
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />

        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSignIn} style={commonStyles.buttonPrimary}>
          <Text style={commonStyles.buttonPrimaryText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={styles.registerAccountTextContainer}>
        <Text style={styles.bottomText}>
          Don’t have an account?{' '}
          <Text style={styles.registerText}>Register Now</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
