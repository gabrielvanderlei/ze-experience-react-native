import React, {Text} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Button } from 'react-native'; //(dev only) just to have a valid react component

const Stack = createStackNavigator();

import QrCode from './src/screens/QrCode';
import ChatBot from './src/screens/ChatBot';
import ZeClub from './src/screens/ZeClub';

const Home = function({navigation}){
  return(
    <View>
        <Button title={'Chat'} onPress={() => navigation.navigate('ChatBot')}/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="ChatBot" component={ChatBot}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ZeClub" component={ZeClub} />
        <Stack.Screen name="QrCode" component={QrCode}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}