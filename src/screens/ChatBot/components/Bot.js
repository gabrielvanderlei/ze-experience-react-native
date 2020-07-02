import React, { Component, Fragment} from 'react';
import {StyleSheet} from 'react-native';
import SimpleChatbot from 'react-native-chatbot'
import generateSteps from './steps';


export default class Bot extends Component {

  constructor(props){
    super(props);
    this.state = {
      steps: generateSteps(
          {
            userName: 'João',
            pedidos: ['Cachorro Quente', 'Litrão 200ml'],
          },
          props.navigation,
      ),
    }
  }

  render() {
    return (
      <SimpleChatbot
        steps={this.state.steps}
        hideBotAvatar={true}
        hideUserAvatar={true}
        botDelay={0}
        userDelay={0}
        botBubbleColor={ '#E8E8E8' } 
        botFontColor={ '#000' } 
        userBubbleColor={ '#FFCD01' }
        userFontColor={ '#fff' }
        placeholder={'Digite a mensagem'}
        contentStyle={{backgroundColor: '#fff'}}
        bubbleOptionStyle = {{color: '#FFCD01'}}
      />
    )
  }
}



