import React from 'react';
import {View, Button, Image, Text} from 'react-native';
import img from '../../../images/qr.jpeg';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import prestigiadas from '../../../images/prestigiadas.png';
import consagradas from '../../../images/consagradas.png';

const ZeClubLink = function({navigation}){
  return(
    <View>
      <Button title={"Ir para o ZéClub"} onPress={() => navigation.navigate('ZeClub')}/>
    </View>
  );
}

const QRCode = function(){
  return(
    <View>
      <Image source={img}/>
    </View>
  );
}

const Prestigiadas = function(){
  return(
        <View>
          <Text style={{width:'100%', textAlign: 'center', marginBottom: 10, fontSize: 20, fontWeight: 'bold'}}> As Prestigiadas </Text>
          <Image source = {prestigiadas} style={{height: 200, width: 300}}/>
        </View>
  );
}

const Consagradas = function(){
  return(
        <View>
          <Text style={{width:'100%', textAlign: 'center', marginBottom: 10, fontSize: 20, fontWeight: 'bold'}}> As Consagradas </Text>
          <Image source = {consagradas} style={{height: 200, width: 300}}/>
        </View>
  );
}

function verifyConection(retStep){
  if(!global.conectado) return retStep;
  global.saveStep = retStep;
  return 'tellConection';
}
global.cupom = true;
global.conectado = 0;

const LOCATION_TASK_NAME = 'background-location-task';

const requestlocationPermission = async () => {
  const { status } = await Location.requestPermissionsAsync();
  if (status === 'granted') {
    global.localON = true;
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Balanced,
    });
  }
};

const RequestLocButton = function(){
  return(
    <View>
      <Button title={"Conceder localização"} onPress={requestlocationPermission}/>
    </View>
  );
}

const getPermissionStatus = async () => {
  const { status } = await Location.getPermissionsAsync()
  global.localON = status === 'granted'
}

export default function generateSteps(userData, navigation){
  global.valor = 0;
  global.qtd = 0;
  // global.estabelecimento = 'bar do zeca';
    return [
      {
          id: 'start',
          message: () => {
            const msg = [
              'Eae, aqui é o Zé! Seu garçom digital. 😉',
              'Seja bem vindo(a) ao Zé experience!',
              `Eae ${userData.userName}, tudo beleza? 👍`
            ]
            return msg[Math.floor(Math.random()*msg.length)]
          },
          trigger: (global.endform ? 'home' : 'form1'),
      },
      //Parte do formulário:
      {
        id:'form1',
        message: 'Gostaria de te conhecer melhor e assim oferecer uma melhor experiência. Beleza?',
        trigger: 'form2'
      },
      {
        id:'form2',
        options: [
          { value: 1, label: 'Simbora!', trigger:'form3'},
          { value: 2, label: 'Talvez depois', trigger:'home'}
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
          { value: 1, label: 'Sem alcool', trigger: 'cervejas'},
          { value: 1, label: 'Vinhos', trigger: 'cervejas'},
          { value: 1, label: 'Petiscos', trigger: 'cervejas'},
          { value: 1, label: 'Outros', trigger: 'cervejas'},
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
        // message: 'As consagradas',
        component: <Consagradas/>,
        trigger: 'cervejas3',
      },
      {
        id: 'cervejas3',
        //um custom mostrando as imagens e falando o texto abaixo:
        // message: 'As prestigiadas',
        component: <Prestigiadas/>,
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
          { value: 2, label: 'Brahma', trigger: 'endForm'},
          { value: 3, label: 'Budweiser', trigger: 'endForm'},
          { value: 4, label: 'Antartica', trigger: 'endForm'},
        ]
      },
      {
        id: 'escolhaPrestigiada',
        options: [
          { value: 1, label: 'Stella Artois', trigger: 'endForm'},
          { value: 1, label: 'Beck\'s', trigger: 'endForm'},
          { value: 1, label: 'Corona', trigger: 'endForm'},
          { value: 1, label: 'Bohemia', trigger: 'endForm'},
        ]
      },
      {
        id:'endForm',
        //aqui é pra ter uma div com o produto que o usuário escolheu
        message: 'Você tem bom gosto.',
        trigger: 'endForm3'
      },
      // {
      //   id:'endForm2',
      //   message: 'Você deve estar se perguntando porque é tão importante te conhecer melhor.',
      //   trigger: 'endForm3'
      // },
      {
        id:'endForm3',
        message: 'Sabendo os seus gostos eu poderei te ajudar nas próximas compras, recomendações, atalhos nas conversas comigo. Usarei estes dados a seu favor! 😀 Você pode saber melhor sobre nossa política de privacidade em ze.experience/privacy',
        trigger: 'endForm4'
      },
      {
        id:'endForm4',
        message: ' Pode ficar tranquilo, seus dados estão seguros.🎲 Além dos dados já fornecidos por você anteriormente como nome e e-mail poderei coletar mais dados posteriormente, mas só se você concordar é claro.',
        trigger: 'endForm5'
      },
      {
        id:'endForm5',
        message: 'Por exemplo, se você concordar, posso utilizar a sua localização para identificar quando você está em estabelecimentos parceiros e então facilitar pagamentos e até recomendar descontos.',
        trigger: () => {
          global.endform = true;
          return 'localizaoOption'
        }
      },
      {
        id:'homeForm',
        message: 'E agora que eu te conheço melhor, ja posso te ajudar, tem algo que eu possa fazer agora?',
        trigger: 'home2',
      },
      {
        id:'home',
        message: 'Tem algo em que eu possa te ajudar?',
        trigger:  () => {
            // getPermissionStatus()
            // alert(global.localON?'TRU':'FALSU')
            if(global.localON){
              if(global.conectado === 1) return 'tellConection';
              else if(global.conectado === 2 && global.cupom === true) return 'tellConectionShop'
              return 'home2';
            }
            else{
              return 'localizacao'
            }
        }
      },
      {
        id:'localizacao',
        message: 'Gostaria de fornecer a localização para que eu possa te mandar descontos e lhe mostrar o cardápio quando estiver em um estabelecimento parceiro?',
        trigger: 'localizaoOption'
      },
      {
        id: 'localizaoOption',
        component: <RequestLocButton/>,
        trigger: 'home2'
      },
      {
        id: 'homeFull',
        message: 'Tem algo em que eu possa te ajudar?',
        trigger: 'homeFull2'
      },
      {
        id: 'homeFull2',
        options: [
          { value: '1', label: 'Me ajuda, Zé!', trigger: 'ajudaZe'},
          { value: '2', label: 'Quero juntar a galera!', trigger: 'juntarGalera'},
          { value: '3', label: 'Acessar o Zé Club', trigger: 'zeClub'},
          { value: '4', label: 'Cardápio', trigger: 'shopOptions'},
          { value: '5', label: 'Pagar Conta', trigger: 'pagarConta'}
        ]
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
        trigger: 'voltaInicio',
        delay: 700
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
        delay: 700
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
      },
      {
        id: 'tellConection',
        message: () => 'Opa, eu percebi que você se conectou com ' + global.estabelecimento + ' um de nossos parceiros! Que tal dar uma olhada no cardápio? Você pode realizar o pagamento via app ou pelo QRCode 😎',
        trigger: 'optionsConection',
      },
      {
        id: 'tellConectionShop',
        message: () => 'Opa, localizei que você está no ' + global.estabelecimento + ', um de nossos parceiros!',
        trigger: 'tellConectionShop2'
      },
      {
        id: 'tellConectionShop2',
        message: 'Apresente o QRCode abaixo no caixa para descontos especiais na linha de energéticos Gartorade',
        trigger: 'tellConectionShop3'
      },
      {
        id: 'tellConectionShop3',
        component: <QRCode/>,
        trigger: () => {
          global.cupom = false;
         return 'tellConectionShop4';
        }
      },
      {
        id: 'tellConectionShop4',
        options: [
          {value: 1, label: 'Gostei do cupom', trigger: 'obrigadoCupom'},
          {value: 2, label: 'Obter mais cupons', trigger: 'semCupons'}
        ]
      },
      {
        id: 'semCupons',
        message: 'Desculpe, mais no momento não temos mais cupons para você',
        trigger: 'home'
      },
      {
        id: 'obrigadoCupom',
        message: 'Obrigado pelo seu feedback, providenciaremos mais cupons para você futuramente!',
        trigger: 'home'
      },
      {
        id: 'optionsConection',
        options: [
          {value: 1, label: 'Sim', trigger: 'goShop'},
          {value: 2, label: 'Não', trigger: 'return'}
        ]
      },
      {
        id:'goShop',
        message: 'Massa, então ta ai em baixo as opções, escolhe uma delas:',
        trigger: 'shopOptions'
      },
      {
        id: 'shopOptions',
        options: [
          {value: 1, label: 'Bebidas Alcoolicas', trigger: 'bebidasAlcoolicas'},
          {value: 2, label: 'Sucos', trigger: 'sucos'},
          {value: 3, label: 'Aperitivos', trigger: 'aperitivos'},
        ]
      },
      {
        id: 'bebidasAlcoolicas',
        options: [
          {value: '8', label: 'Skol 300ml: R$ 8,00', trigger: 'qtd'},
          {value: '7', label: 'Brhama 300ml: R$ 7,00', trigger: 'qtd'},
          {value: '15', label: 'Budweiser 300ml: R$ 15,00', trigger: 'qtd'},
        ]
      },
      {
        id: 'sucos',
        options: [
          {value: '3', label: 'Uva 300ml: R$ 3,00', trigger: 'qtd'},
          {value: '4', label: 'Laranja 300ml: R$ 4,00', trigger: 'qtd'},
        ]
      },
      {
        id: 'aperitivos',
        options: [
          {value: '3', label: 'Espetinho: R$ 3,00', trigger: 'qtd'},
        ] 
      },
      {
        id: 'qtd',
        message: ({previousValue}) => {
          global.value = previousValue;
          return  'Qual a quantidade?'
        },
        trigger: 'qtd2'
      },
      {
        id:'qtd2',
        user: true,
        validator: (value) => {
          if (isNaN(value)) {
            return 'Precisa ser um número';
          }
          return true;
        },
        trigger: 'qtd3'
      },
      {
        id: 'qtd3',
        message: ({previousValue}) => {
          // global.qtd = previousValue
          global.qtd += parseInt(global.value) * parseInt(previousValue)
          return 'Beleza!';
        },
        trigger: 'addMore',
      },
      {
        id: 'addMore',
        message: 'Você deseja adicionar mais produtos?',
        trigger: 'addMore2',
      },
      {
        id: 'addMore2',
        options: [
          {value: 1, label: 'Sim', trigger: 'shopOptions'},
          {value: 2, label: 'Não', trigger: 'homeFull'}
        ]
      },
      {
        id:'pagarConta',
        message: 'Certo!',
        trigger: 'confirmarPagamento'
      },
      {
        id: 'confirmarPagamento',
        message:() => 'Você realmente quer fechar sua conta? O valor atual é de: R$' + global.qtd,
        trigger:'confirmarPagamento2'
      },
      {
        id: 'confirmarPagamento2',
        options: [
          {value: 1, label: 'Sim', trigger: 'openQR'},
          {value: 2, label: 'Não', trigger: 'homeFull'}
        ]
      },
      {
        id: 'openQR',
        message: () => {
          global.qr = true;
          return 'Agora aperte no botão de QRCode e leia com a sua camera para confirmar-mos o pagamento!'
        },
        trigger: 'homeFull'
      },
      {
        id: 'return',
        message: 'OK, vamos voltar para onde estávamos',
        trigger: 'homeFull'
      }
    ]
  }
