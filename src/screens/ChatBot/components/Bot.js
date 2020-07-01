import React, { Component, Fragment} from 'react';

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
          }
      ),
    }
  }

  render() {
    return (
      <SimpleChatbot
        steps={this.state.steps}
        hideBotAvatar={true}
        hideUserAvatar={true}
        botDelay={100}
        userDelay={0}
        botFontColor={ '#000' } 
        userFontColor={ '#000' }
        botBubbleColor={ '#f6f6f6' } 
        userBubbleColor={ '#ffcd01' }
        placeholder={'Digite a mensagem'}
      />
    )
  }
}



