import React, {Text} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View } from 'react-native'; //(dev only) just to have a valid react component

import ZeClub from './src/screens/ZeClub';

const Stack = createStackNavigator();

import QrCode from './src/screens/QrCode';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ZeClub" headerMode="none">
        <Stack.Screen name="Home" component={View} />
        <Stack.Screen name="ZeClub" component={ZeClub} />
        <Stack.Screen name="ChatBot" component={View}/>
        <Stack.Screen name="QrCode" component={QrCode}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}