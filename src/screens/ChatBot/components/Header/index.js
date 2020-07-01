import React from 'react';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Container, Title, QrButton, BackButton } from './styles';
import { View } from 'react-native';

export default function ChatHeader({navigation}){
    return(
      <View>
        <Container>
          <BackButton onPress={()=> navigation.navigate("Home")}>
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </BackButton>
          <Title>Zé</Title>
          <QrButton onPress={()=> navigation.navigate("QrCode")}>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="black" />
          </QrButton>
        </Container>
      </View>
    );
}
