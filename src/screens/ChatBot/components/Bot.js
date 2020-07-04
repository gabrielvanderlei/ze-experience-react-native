import React, { Component, Fragment} from 'react';
import {StyleSheet} from 'react-native';
import SimpleChatbot from 'react-native-chatbot'
import generateSteps from './steps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function SendButton(){
  return (
    <MaterialCommunityIcons name="send-circle" size={50} color="#FFCD01" />
  )
}

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
          props.setDestaques
      ),
    }
  }

  render() {
    return (
      <SimpleChatbot
        steps={this.state.steps}
        hideBotAvatar={true}
        hideUserAvatar={true}
        botDelay={350}
        userDelay={0}

        botBubbleColor={ '#E8E8E8' } 
        botFontColor={ '#000' } 

        userBubbleColor={ '#FFCD01' }
        userFontColor={ '#000' }

        optionBubbleColor={'#FFCD01'}
        optionFontColor={ '#000' }

        customDelay={100}
        
        placeholder={'Digite a mensagem'}
        contentStyle={{backgroundColor: '#fff'}}
        // submitButtonContent={'Enviar'}
        submitButtonContent={<SendButton/>}
        submitButtonStyle={{backgroundColor: '#fff'}}
        inputStyle={{borderRadius:50}}
      />
    )
  }
}



