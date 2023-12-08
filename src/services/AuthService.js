/*
 *
 *
 * @author: iusmansultan
 *All apis and backend work of the app is in this file
 *
 *
 */

import axios from 'axios';
import {baseUrl} from '../helpers/Config';
import {apiEndPoints} from '../helpers/Config';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import messaging from '@react-native-firebase/messaging';

const SignUpUser = async body => {
  const {email, password, name, imageUrl} = body;
  console.log(body);
  try {
    //   Checking if the api get all valid information
    if (!(email && password && name)) {
      return {
        success: false,
        message: 'Please Send All Params ',
        data: [],
      };
    }
    const res = await auth().createUserWithEmailAndPassword(email, password);
    const {user} = res;
    const sendEmail = await user.sendEmailVerification();
    console.log('Send Email =>', sendEmail);

    const body = {
      uid: user.uid,
      email,
      name,
      imageUrl: '',
    };

    const response = await firestore()
      .collection('Users')
      .doc(user.uid)
      .set(body);

    return {
      success: true,
      message: 'Signed Up',
      data: response,
    };
  } catch (error) {
    console.log('Error', error);
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      return {
        success: false,
        message: 'Email is already in use',
        data: [],
      };
    }
    if (error.code === 'auth/wrong-password') {
      console.log('Auth Wrong Password !');
      return {
        success: false,
        message: 'Email or password incorrect',
        data: [],
      };
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      return {
        success: false,
        message: 'Email address is invalid!',
        data: [],
      };
    }
    if (error.code === 'auth/weak-password') {
      console.log('Password is Week!');
      return {
        success: false,
        message: 'Weak Password! Use Strong Password',
        data: [],
      };
    }

    console.error(error);
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};
const ForgotUserPassword = async body => {
  const {email} = body;
  console.log(body);
  try {
    //   Checking if the api get all valid information
    if (!email) {
      return {
        success: false,
        message: 'Please Send All Params ',
        data: [],
      };
    }
    const res = await auth().sendPasswordResetEmail(email);
    return {
      success: true,
      message: 'An instructions send to your email',
      data: res,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};

const SignInUser = async body => {
  const {email, password} = body;
  console.log(body);
  try {
    //   Checking if the api get all valid information
    if (!(email && password)) {
      return {
        success: false,
        message: 'Please Send All Params ',
        data: [],
      };
    }
    const res = await auth().signInWithEmailAndPassword(email, password);
    const {user} = res;

    console.log('User=>', user);

    const response = await firestore().collection('Users').doc(user.uid).get();

    return {
      success: true,
      message: 'Signed In',
      data: response?._data,
    };
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      console.log('Auth Wrong Password !');
      return {
        success: false,
        message: 'Email or password incorrect',
        data: [],
      };
    } else if (error.code === 'auth/user-not-found') {
      return {
        success: false,
        message:
          'There is no user record corresponding to this identifier. The user may have been deleted.',
        data: [],
      };
    }
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};

export {SignUpUser, SignInUser, ForgotUserPassword};
