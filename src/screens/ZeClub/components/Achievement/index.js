import React from 'react';

import {Text, Image} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { 
    Achievement,
    MostRecent,
    MostRecentItem,
    MostRecentItemIMG,
    MostRecentText,
    MostRecentContainer,
    TrophiesContainer,
    TrophiesText,
    TrophiesItemContainer,
    TrophiesItem,
    TrophiesItemContainerIntern,
    BrandContainer,
    BrandText,
    BrandItemContainer,
    BrandItem,
 } from './styles';
 import img from '../../../../images/Guarana.jpeg';
 import img2 from '../../../../images/ze-icon2.png';
 import img3 from '../../../../images/H2O.jpeg';
 import img4 from '../../../../images/corona.png';

export default function returnAchievements(){
    return(
      <Achievement>
        <MostRecentContainer>
          <MostRecentText>
              <Text>
                Mais Recentes
              </Text>
            </MostRecentText>
            <MostRecent> 
              <MostRecentItem>
                <MostRecentItemIMG source={img}/>
              </MostRecentItem>  
              <MostRecentItem>
                <MostRecentItemIMG source={img3}/>
              </MostRecentItem>  
              <MostRecentItem>
                <MostRecentItemIMG source={img4}/>
              </MostRecentItem>  
          </MostRecent>
        </MostRecentContainer>
        <TrophiesContainer>
          <TrophiesText>
            <Text>
              Troféus
            </Text>
            </TrophiesText>
            <TrophiesItemContainer>
              <TrophiesItem>
                <TrophiesItemContainerIntern>
                  <FontAwesome5 name="user-friends" size={24} color="black" />
                  <Text>
                   Dia do Amigo
                  </Text>  
                </TrophiesItemContainerIntern> 
              </TrophiesItem> 
              <TrophiesItem>
                <TrophiesItemContainerIntern>
                  <FontAwesome5 name="glass-cheers" size={24} color="black" />
                  <Text>
                  O Festeiro
                  </Text>
                  </TrophiesItemContainerIntern>
                </TrophiesItem> 
              <TrophiesItem>
              <TrophiesItemContainerIntern>
                <FontAwesome5 name="glass-cheers" size={24} color="black" />
                <Text>
                  Ano Novo
                </Text>
                </TrophiesItemContainerIntern> 
              </TrophiesItem> 
              <TrophiesItem>
              <TrophiesItemContainerIntern>
                <Ionicons name="ios-woman" size={24} color="black" />
                <Text>
                  Dia das Mães
                </Text>
                </TrophiesItemContainerIntern> 
              </TrophiesItem> 
              <TrophiesItem>
              <TrophiesItemContainerIntern>
                <Ionicons name="md-glasses" size={24} color="black" />
                <Text>
                  Completo Zé
                </Text>
              </TrophiesItemContainerIntern> 
              </TrophiesItem> 
            </TrophiesItemContainer> 
        </TrophiesContainer>
        <BrandContainer>
          <BrandText>
            <Text>
              Marcas
            </Text>
            </BrandText>
            <BrandItemContainer>
              <BrandItem source={img}/>
            </BrandItemContainer> 
        </BrandContainer>
      </Achievement>
    );
  }