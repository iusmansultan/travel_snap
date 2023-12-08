import React from 'react';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';

//import state from Redux
import {useAppSelector} from '../redux/Hooks';
import AppStack from './AppStack';

const Router = () => {
  const isLoggedIn = useAppSelector(state => state.user.value.isLoggedIn);
  // const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
