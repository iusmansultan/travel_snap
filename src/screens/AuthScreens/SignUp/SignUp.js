import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';

import styles from './Styles';
import logo from '../../../assets/Images/logo.jpeg';
import facebook from '../../../assets/Icons/facebook.png';
import google from '../../../assets/Icons/google.png';
import apple from '../../../assets/Icons/apple.png';
import commonStyles from '../../../helpers/CommonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// Auth services implementation
import {SignUpUser} from '../../../services/AuthService';

// import loader components
import Loader from '../../../components/Loader/Loader';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    const body = {
      email,
      password,
      name,
      role: checked,
      imageUrl: '',
    };
    setLoading(true);
    const {success, message, data} = await SignUpUser(body);
    setLoading(false);
    if (success) {
      console.log(data);
      navigation.navigate('SignIn');
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
        <Text style={styles.loginText}>Register</Text>
        <Text style={styles.welcomeText}>Create account!</Text>

        <TextInput
          style={commonStyles.textInput}
          placeholder="Username"
          placeholderTextColor="#8391A1"
          onChangeText={e => setName(e)}
        />
        <TextInput
          style={commonStyles.textInput}
          placeholder="Email"
          placeholderTextColor="#8391A1"
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={commonStyles.textInput}
          placeholder="Password"
          placeholderTextColor="#8391A1"
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />

        <TouchableOpacity onPress={onSignUp} style={commonStyles.buttonPrimary}>
          <Text style={commonStyles.buttonPrimaryText}>Register</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
        style={styles.registerAccountTextContainer}>
        <Text style={styles.bottomText}>
          Already have an account?{' '}
          <Text style={styles.registerText}>Login Now</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
