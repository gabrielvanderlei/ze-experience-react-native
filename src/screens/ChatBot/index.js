import React, { Component, Fragment} from 'react';
import { StatusBar } from 'react-native';

import { Container, HeaderWrapper, BotWrapper } from './styles';

import Header from './components/Header'
import Bot from './components/Bot'

export default class ChatBot extends Component {
  constructor(props){
    super(props)
    this.state = {
      navigation: props.navigation
    }
    global.teste = 1;
  }

  render() {
    return (
      <Fragment>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#ffcd01"
        />
        <Container>
          <HeaderWrapper>
            <Header navigation={this.state.navigation}/>
          </HeaderWrapper>
          <BotWrapper>
            <Bot navigation={this.state.navigation}/>
          </BotWrapper>
        </Container>
      </Fragment>
    );
  }
}