/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CautionScreen from '../screens/CautionScreen';
import ARScreen from '../screens/ARScreen';

const Stack = createStackNavigator();


const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CautionScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="CautionScreen"
          component={CautionScreen}
        />
        <Stack.Screen
          name="ARScreen"
          component={ARScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
