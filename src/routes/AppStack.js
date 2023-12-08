import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/AppScreens/Splash/Splash';
import MyTabs from '../screens/AppScreens/Tab/Tab';
import PostDetails from '../screens/AppScreens/PostDetail/PostDetails';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
