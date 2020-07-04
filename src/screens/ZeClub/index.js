import React, {useState} from 'react';
import {Text, StatusBar} from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import { 
    Wrapper,
    TopContainer,
    NameBar,
    BackButton,
    HelpContainer,
    Image,
    BodyContainer,
    ToggleView,
    DataContainer,
    SetView
 } from './styles';
 

import returnAchievements from './components/Achievement';
import returnHistory from './components/History';

import img from '../../images/gustavo-lampert-EUyZE1V99g8-unsplash.jpg';

export default function ZeClub({navigation}) {

    const [inHistory, setHistory] = useState(true);
  
    function setHistoryView(){
      setHistory(() => true);
    }
  
    function setAchievements(){
      setHistory(() => false);
    }
  
    return (
      <Wrapper>
        <StatusBar
            barStyle="light-content"
            backgroundColor="#ffcd01"
          />
        <TopContainer>
          <NameBar>
            <BackButton onPress={() => navigation.navigate('ChatBot')}>
              <Ionicons name="ios-arrow-back" size={24} color="black" />
            </BackButton>
            <Text style={{fontSize: 35}}>João Silva</Text>
            <HelpContainer/>
          </NameBar>
          <Image source={img} />
        </TopContainer>
        <BodyContainer>
          <ToggleView>
            <SetView onPress={setHistoryView} style={{borderWidth: (!inHistory ? 0 : 1), borderRadius: 40}}>
              <Text style={{color:(!inHistory ? 'gray' : 'black')}}>
                Histórico
              </Text>
            </SetView>
            <SetView onPress={setAchievements} style={{borderWidth: (inHistory ? 0 : 1), borderRadius: 40}}>
              <Text style={{color:(inHistory ? 'gray' : 'black')}}>
                Troféus
              </Text>
            </SetView>
          </ToggleView>
          <DataContainer>
            {!inHistory && returnAchievements()}
            {inHistory && returnHistory()}
          </DataContainer>
        </BodyContainer>
      </Wrapper>
    );
  }