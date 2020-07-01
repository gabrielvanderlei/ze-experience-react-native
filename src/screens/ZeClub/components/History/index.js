import React from 'react';

import {Text} from 'react-native'

import { 
    History,
    HistoryLevelContainer,
    HistoryLevelLeft,
    HistoryLevelLeftImg,
    HistoryLevelLeftText,
    HistoryLevelLeftTextTittle,
    HistoryLevelLeftTextDesc
} from './styles';

import img2 from '../../../../images/ze-icon2.png';

export default function returnHistory(){
  
    return(
        <History>
          <HistoryLevelContainer>
            <HistoryLevelLeft>
              <HistoryLevelLeftImg source={img2}/>
              <HistoryLevelLeftText>
                <HistoryLevelLeftTextTittle>
                  <Text style={{fontSize:20}}>
                    Urso Relutante
                  </Text>
                </HistoryLevelLeftTextTittle>
                <HistoryLevelLeftTextDesc>
                  <Text >
                    Total de roles: 20
                  </Text>
                </HistoryLevelLeftTextDesc>
              </HistoryLevelLeftText>
            </HistoryLevelLeft>
          </HistoryLevelContainer>
        </History>
    );
  }