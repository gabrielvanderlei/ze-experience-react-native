import React from 'react';

import {Text} from 'react-native'

import { 
    History,
    HistoryLevelContainer,
    HistoryLevelLeft,
    HistoryLevelLeftImg,
    HistoryLevelLeftText,
    HistoryLevelLeftTextTittle,
    HistoryLevelLeftTextDesc,
    HistoryItemContainer,
    HistoryItemLeftArea,
    HistoryItemRightArea,
    HistoryItemTittle,
    HistoryItemDesc
} from './styles';

import img2 from '../../../../images/urso.jpeg';

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
          <HistoryItemContainer>
            <HistoryItemLeftArea/>
            <HistoryItemRightArea>
              <HistoryItemTittle>
                <Text style={{fontSize: 25}}>
                  09 de Abril de 2020
                </Text>
              </HistoryItemTittle>
              <HistoryItemDesc>
                <Text style={{color: 'gray'}}>
                  Bebidas e petiscos no Bar do Urso
                </Text>
              </HistoryItemDesc>
            </HistoryItemRightArea>
          </HistoryItemContainer>
          <HistoryItemContainer>
            <HistoryItemLeftArea/>
            <HistoryItemRightArea>
              <HistoryItemTittle>
                <Text style={{fontSize: 25}}>
                  21 de Março de 2020
                </Text>
              </HistoryItemTittle>
              <HistoryItemDesc>
                <Text style={{color: 'gray'}}>
                  Energéticos no Pão de Açucar
                </Text>
              </HistoryItemDesc>
            </HistoryItemRightArea>
          </HistoryItemContainer>
        </History>
    );
  }