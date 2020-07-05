import React, { Fragment } from 'react';
import { StyleSheet, Dimensions, Text, ScrollView, StatusBar, Image, View } from 'react-native';
import { NavBar, Button, Block, Card, Input, theme } from 'galio-framework';


import {
  ChatBotButton,
  Highlights,
  Main
} from './styles'

import img from '../../images/Burguer.png';
import img2 from '../../images/Suco.png';
import img3 from '../../images/HappyHour.png';
import img4 from '../../images/Pizza.png';
import img5 from '../../images/Sanduiche.png';
import zeIcon from '../../images/icon.png'
import IMGvideo from '../../images/video.png'

import carvalheira from '../../images/carvalheira.jpg'
import stb from '../../images/stb-festival.jpg'
import beats from '../../images/skol_beats_senses.png'
import fusion from '../../images/fusion-event.jpeg'

import products from './products'
import ProductCard from './ProductCard'
import EventCard from './EventCard'
global.teste = 0

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      navigation: props.navigation,
      // destaques: props.route.params.destaques
      destaques: [0,10,4,8,11]
    }

    this.setDestaques = this.setDestaques.bind(this)

  }

  setDestaques(arr){
    this.setState({
      destaques: arr
    })
  }

  componentDidUpdate(){
    
  }

  render(){
    const arr = this.state.destaques
    return (
      <>
      <Main>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#FFCD01"
        />
        <View>
          <View style={{height: 300, backgroundColor: '#FFCD01'}}>
            <Text style={{
              width: '100%',
              fontSize: 40,
              color: '#FFF',
              textAlign: 'center',
              marginTop: 5,
              fontWeight: 'bold',
              textShadowColor: "#000",
              textShadowOffset: {
                width: 1,
                height: 3,
              },
              textShadowOpacity: 0.23,
              textShadowRadius: 4.62,
              elevation: 3,
            }}>
              João Silva
            </Text>
            
            <View style={{height: 170, width: '100%', marginTop: 20, alignItems: 'center'}}>
              <Image source={IMGvideo}/>
            </View>
          </View>


            <Text style={{width: '100%', textAlign: 'left', fontSize: 25, marginLeft: 10, fontWeight: 'bold', marginTop: 10}}>
              Destaques
            </Text>
            <Highlights>
            {arr.map((e) => {return <ProductCard product={products[e]}/>} )}
            </Highlights>
            <Text style={{width: '100%', textAlign: 'left', fontSize: 25, marginLeft: 10, fontWeight: 'bold', marginTop: 10}}>
              Eventos
            </Text>
            <Highlights>
              <EventCard event={{
                img: carvalheira,
                name:'Carvalheira na Ladeira',
                local:'Recife - PE'
              }}/>
              {/* <EventCard event={{
                img: stb,
                name:'Só Track Boa',
                local:'Recife - PE'
              }}/> */}
              <EventCard event={{
                img: beats,
                name:'Skol Beats Sense',
                local:'Olinda - PE'
              }}/>
              <EventCard event={{
                img: fusion,
                name:'Fusion New Rivals',
                local:'Acompanhe Online'
              }}/>
            </Highlights>

        </View>
      </Main>
        <ChatBotButton onPress={() => this.state.navigation.navigate('ChatBot',{setDestaques: this.setDestaques})}>
            <Image source={zeIcon} style={{height: 60, width: 60}}/>
        </ChatBotButton>
        </>
    )
  }
}
