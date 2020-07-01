import React from 'react';
import {View, Button} from 'react-native';

const ZeClubLink = function({navigation}){
  return(
    <View>
      <Button title={"Ir para o ZéClub"} onPress={() => navigation.navigate('ZeClub')}/>
    </View>
  );
}


export default function generateSteps(userData, navigation){
    return [
      {
          id: 'start',
          message: 'Eae, aqui é o Zé! Seu garçom digital. :)\nSeja bem vindo(a) ao Zé experience!',
          trigger: (userData.userName ? 'home' : 'form1'),
      },
      //Parte do formulário:
      {
        id:'form1',
        message: 'Gostaria de te conhecer melhor e assim oferecer a melhor experiencia. Beleza?',
        trigger: 'form2'
      },
      {
        id:'form2',
        options: [
          { value: 1, label: 'Simbora!', trigger:'form3',}
        ],
      },
      {
        id:'form3',
        message: 'Massa, agora escolha uma categoria:',
        trigger: 'form4',
      },
      {
        id:'form4',
        options:[
          { value: 1, label: 'Cervejas', trigger: 'cervejas'},
          // { value: 1, label: 'Sem alcool', trigger: 'cervejas'},
          // { value: 1, label: 'Vinhos', trigger: 'cervejas'},
          // { value: 1, label: 'Petiscos', trigger: 'cervejas'},
          // { value: 1, label: 'Outros', trigger: 'cervejas'},
        ],
      },
      {
        id: 'cervejas',
        message: 'Qual dessas duas você gosta mais?',
        trigger: 'cervejas2',
      },
      {
        id: 'cervejas2',
        //um custom mostrando as imagens e falando o texto abaixo:
        message: 'As consagradas',
        trigger: 'cervejas3',
      },
      {
        id: 'cervejas3',
        //um custom mostrando as imagens e falando o texto abaixo:
        message: 'As prestigiadas',
        trigger: 'cervejas4',
      },
      {
        id: 'cervejas4',
        options: [
          { value: 1, label: 'As consagradas', trigger: 'consagradas' },
          { value: 2, label: 'As prestigiadas', trigger: 'prestigiadas' },
        ],
      },
      {
        id: 'consagradas',
        message: `Boa ${userData.userName} você é como eu, não abre mão de uma boa consagrada`,
        trigger: 'escolhaConsagrada'
      },
      {
        id: 'prestigiadas',
        message: `Boa ${userData.userName} você é como eu, não abre mão de uma boa prestigiada`,
        trigger: 'escolhaPrestigiada'
      },
      {
        id: 'escolhaConsagrada',
        options: [
          { value: 1, label: 'Skol', trigger: 'endForm'},
          // { value: 1, label: 'Skol', trigger: 'boa'},
          // { value: 1, label: 'Skol', trigger: 'boa'},
        ]
      },
      {
        id: 'escolhaPrestigiada',
        options: [
          { value: 1, label: 'Skol', trigger: 'endForm'},
          // { value: 1, label: 'Skol', trigger: 'boa'},
          // { value: 1, label: 'Skol', trigger: 'boa'},
        ]
      },
      {
        id:'endForm',
        //aqui é pra ter uma div com o produto que o usuário escolheu
        message: 'Ta ai meu bom, teu produto',
        trigger: 'homeForm'
      },
      {
        id:'homeForm',
        message: 'E agora que eu te conheço melhor, ja posso te ajudar, tem algo que eu possa fazer agora?',
        trigger: 'home2',
      },
      {
        id:'home',
        message: 'Eae, aqui é o Zé, o seu garçom digital! Tem algo em que eu possa te ajudar?',
        trigger: 'home2'
      },
      {
        id: 'home2',
        options: [
          { value: '1', label: 'Me ajuda, Zé!', trigger: 'ajudaZe'},
          { value: '2', label: 'Quero juntar a galera!', trigger: 'juntarGalera'},
          { value: '3', label: 'Acessar o Zé Club', trigger: 'zeClub'},
        ]
      },
      {
        id:'ajudaZe',
        message: 'Certo, em que posso te ajudar?',
        trigger: 'ajudaOptions'
      },
      {
        id: 'ajudaOptions',
        options: [
          { value:1,label:'Não tem distribuidores aqui perto.',trigger:'distribuidores'},
          { value:2,label:'O entregador não chegou.',trigger:'entregador'},
          { value:3,label:'Quero relatar outro problema',trigger:'outroProblema'},
        ],
      },
      {
        id:'distribuidores',
        message: 'Nós estamos sempre atuando em mediadas para termos a maior quantidade de distribuidores. Mas se você conhece algum bar proximo que queira ser parceiro do Zé, pode mandar esse link para ele:\nhhtps://www.ze.com.br',
        trigger: 'voltaInicio'
      },
      {
        id:'voltaInicio',
        options:[
          {value: 1, label: 'Voltar ao inicio', trigger: 'home'}
        ]
      },
      {
        id:'entregador',
        message: 'Nossa! Que horrível, vou me esforçar para resolver essa questão, poderia me dizer em qual desses pedidos o entregador não chegou?',
        trigger: 'entregador2',
      },
      {
        id:'entregador2',
        options: (() => {
          let pedidos = []
          for( x of userData.pedidos){
            let temp = {
              value: x,
              label: x,
              trigger: 'ajudarEntregador',
            }
            pedidos.push(temp);
          }
          return pedidos;
        })()
      },
      {
        id: 'ajudarEntregador',
        message: ({previousValue}) => `Vou fazer o possível parar que você receba o seu pedido (${previousValue})`,
        trigger: 'fimEntregador',
      },
      {
        id: 'fimEntregador',
        message: 'Você tem problemas com mais algum pedido?',
        trigger: 'entregadorMaisPedidos'
      },
      {
        id: 'entregadorMaisPedidos',
        options: [
          { value: 1, label: 'Sim', trigger: 'entregador2'},
          { value: 2, label: 'Não', trigger: 'home'}
        ]
      },
      {
        id: 'outroProblema',
        message: 'Possuo diversos companheiros de equipe que estão sempre dispostos a te ajuda em qualquer problema que houver. Por favor, descreva o seu problema que um de nossos atendentes o atenderá!',
        trigger: 'outroProblema2',
      },
      {
        id: 'outroProblema2',
        user: true,
        trigger: 'voltaInicio'
      },
      {
        id:'juntarGalera',
        message: 'Qual o nome da sua turma?',
        trigger: 'juntarGalera2',
      },
      {
        id:'juntarGalera2',
        user: true,
        trigger: 'juntarGalera3'
      },
      {
        id:'juntarGalera3',
        message: ({previousValue}) => {
          let splited = previousValue.split(' ');
          let link = ''
          for(let i of splited){
            link = link + i + '-';
          }
          return `Certo, criei uma sala no Zé Club para facilitar :).\n\nPelo Zé Club você vai poder pedir suas geladas, receber promoções exclusivas e claro, realizar aquele drinking game com a galera.\n\nVocê pode acessar a sala clicando no botão abaixo. Compartilhe com seus amigos para acessarem também.\n\n${'grupo-link.zé/' + link.substring(0,link.length - 1)}`;
        },
        trigger: 'voltaInicio',
      },
      {
        id:'zeClub',
        message: 'Estou te redirecionando para o Zé Club',
        trigger: 'zeClub2',
      },
      {
        id:'zeClub2',
        component: <ZeClubLink navigation={navigation}/>,
        trigger: 'home'
      }
    ]
  }