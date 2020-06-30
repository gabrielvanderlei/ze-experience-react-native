import React, { Component, Fragment} from 'react';
import { StatusBar } from 'react-native';

import { Container, HeaderWrapper, BotWrapper } from './styles';
// import Bot from './components/Bot'
// import steps from './components/steps'

export default class ChatBot extends Component {
  constructor(props){
    super(props)
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

          </HeaderWrapper>
          <BotWrapper>

          </BotWrapper>
        </Container>
      </Fragment>
    );
  }
}