import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View } from 'react-native'; //(dev only) just to have a valid react component

import ChatBot from './src/screens/ChatBot';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatBot" headerMode="none">
        <Stack.Screen name="Home" component={View} />
        <Stack.Screen name="ZeClub" component={View} />
        <Stack.Screen name="ChatBot" component={ChatBot}/>
        <Stack.Screen name="QrCode" component={View}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}