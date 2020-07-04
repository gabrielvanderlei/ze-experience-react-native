import React, { Component, Fragment} from 'react';
import { StatusBar } from 'react-native';

import { Container, HeaderWrapper, BotWrapper } from './styles';

import Header from './components/Header'
import Bot from './components/Bot'

export default class ChatBot extends Component {
  constructor(props){
    super(props)
    this.state = {
      navigation: props.navigation,
      // setDestaques: props.route.params.setDestaques
    }
    global.teste = 1;
    this.setDestaques = this.setDestaques.bind(this)
  }

  setDestaques(arr) {
    this.props.route.params.setDestaques(arr)
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
            <Bot navigation={this.state.navigation} setDestaques={this.setDestaques}/>
          </BotWrapper>
        </Container>
      </Fragment>
    );
  }
}