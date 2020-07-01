import React from 'react';

import {Text} from 'react-native'

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
    BrandContainer,
    BrandText,
    BrandItemContainer,
    BrandItem,
 } from './styles';

 import img2 from '../../../../images/ze-icon2.png';

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
                <MostRecentItemIMG source={img2}/>
              </MostRecentItem>  
              <MostRecentItem>
                <MostRecentItemIMG source={img2}/>
              </MostRecentItem>  
              <MostRecentItem>
                <MostRecentItemIMG source={img2}/>
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
              <TrophiesItem/> 
              <TrophiesItem/>
              <TrophiesItem/>
              <TrophiesItem/>
              <TrophiesItem/>
              <TrophiesItem/>
            </TrophiesItemContainer> 
        </TrophiesContainer>
        <BrandContainer>
          <BrandText>
            <Text>
              Marcas
            </Text>
            </BrandText>
            <BrandItemContainer>
              <BrandItem/> 
              <BrandItem/>
              <BrandItem/>
              <BrandItem/>
              <BrandItem/>
              <BrandItem/>
            </BrandItemContainer> 
        </BrandContainer>
      </Achievement>
    );
  }