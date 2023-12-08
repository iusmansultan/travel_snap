import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/AuthScreens/Splash/Splash';
import SignIn from '../screens/AuthScreens/SignIn/SignIn';
import SignUp from '../screens/AuthScreens/SignUp/SignUp';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword/ForgotPassword';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
