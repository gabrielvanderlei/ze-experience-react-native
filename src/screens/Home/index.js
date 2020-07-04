import React, { Fragment } from 'react';
import { StyleSheet, Dimensions, Text, ScrollView, StatusBar, Image, View } from 'react-native';
import { NavBar, Button, Block, Card, Input, theme } from 'galio-framework';
import { Video } from 'expo-av';

import {
  ChatBotButton,
  Highlights,
  ProductCard,
  ProductImage,
  ProductTitleWrapper,
  ProductTitle,
  ProductPrice,
  Main
} from './styles'

import img from '../../images/Burguer.png';
import img2 from '../../images/Suco.png';
import img3 from '../../images/HappyHour.png';
import img4 from '../../images/Pizza.png';
import img5 from '../../images/Sanduiche.png';
import zeIcon from '../../images/icon.png'
import IMGvideo from '../../images/video.png'

export default function Home({ navigation }) {
  return (
    <>
    <Main>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#FFCD01"
      />
      <View>
        <View style={{height: 300, backgroundColor: '#FFCD01'}}>
          <Text style={{width: '100%', fontSize: 40, color: '#FFF', textAlign: 'center', marginTop: 5, fontWeight: 'bold'}}>
            Experience
          </Text>
          <View style={{height: 170, width: '100%', marginTop: 20, alignItems: 'center'}}>
          {/* <Video
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={true}
              resizeMode={'contain'}
              shouldPlay={true}
              useNativeControls
              isLooping
            /> */}
            <Image source={IMGvideo}/>
          </View>
        </View>


          <Text style={{width: '100%', textAlign: 'left', fontSize: 25, marginLeft: 10, fontWeight: 'bold', marginTop: 10}}>
            Destaques
          </Text>
          <Highlights>
            <ProductCard>
              <ProductImage source={img}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Combo #Sextou</ProductTitle>
                <ProductPrice>R$ 35,99</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
            <ProductCard>
              <ProductImage source={img2}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Sucos para a família</ProductTitle>
                <ProductPrice>R$ 2,45</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
            <ProductCard>
              <ProductImage source={img4}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Clone de Pizza</ProductTitle>
                <ProductPrice>R$ 37,99</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
            <ProductCard>
              <ProductImage source={img3}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Happy Hour com o time</ProductTitle>
                <ProductPrice>R$ 25,99</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
            <ProductCard>
              <ProductImage source={img5}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Happy Hour com o time</ProductTitle>
                <ProductPrice>R$ 25,99</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
          </Highlights>
          <Text style={{width: '100%', textAlign: 'left', fontSize: 25, marginLeft: 10, fontWeight: 'bold', marginTop: 10}}>
            Eventos
          </Text>
          <Highlights>
            <ProductCard>
              <ProductImage source={img}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Combo #Sextou</ProductTitle>
                <ProductPrice>R$ 35,99</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
            <ProductCard>
              <ProductImage source={img2}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Sucos para a família</ProductTitle>
                <ProductPrice>R$ 2,45</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
            <ProductCard>
              <ProductImage source={img4}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Clone de Pizza</ProductTitle>
                <ProductPrice>R$ 37,99</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
            <ProductCard>
              <ProductImage source={img3}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Happy Hour com o time</ProductTitle>
                <ProductPrice>R$ 25,99</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
            <ProductCard>
              <ProductImage source={img5}/>
              <ProductTitleWrapper>
              <ProductTitle style={{width: '90%', height: 40}}>Happy Hour com o time</ProductTitle>
                <ProductPrice>R$ 25,99</ProductPrice>
              </ProductTitleWrapper>
            </ProductCard>
          </Highlights>

      </View>
    </Main>
      <ChatBotButton onPress={() => navigation.navigate('ChatBot')}>
          <Image source={zeIcon} style={{height: 60, width: 60}}/>
      </ChatBotButton>
      </>
  )
}
