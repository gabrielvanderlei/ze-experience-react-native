import React from 'react';
import {View, Button, Image, Text} from 'react-native';
import img from '../../../images/qr.jpeg';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import prestigiadas from '../../../images/prestigiadas.png';
import consagradas from '../../../images/consagradas.png';

import uuid from 'react-native-uuid';
import * as SecureStore from 'expo-secure-store';

global.acceptDataTransmission = true;

function enviarDadosServidor(mensagem){
  if(global.acceptDataTransmission){
    const msg = {
      message: mensagem,
      clientId: global.id,
      step: global.lastStep
    }
    
    fetch('http://161.35.63.2:3000/message',{
      method: 'post',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg)
    })
  }
}

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
        <View style={{textAlign:'center', justifyContent:'center', alignItems: 'center'}}>
          <Text style={{width:'100%', textAlign: 'center', marginBottom: 10, fontSize: 20, fontWeight: 'bold'}}> As Prestigiadas </Text>
          <Image source = {prestigiadas} style={{height: 200, width: 300}}/>
        </View>
  );
}

const Consagradas = function(){
  return(
        <View style={{textAlign:'center', justifyContent:'center', alignItems: 'center'}}>
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

function getLastStep(step, newStep){
  return () => {
    global.lastStep = step;
    return newStep;
  }
}

const getPermissionStatus = async () => {
  const { status } = await Location.getPermissionsAsync()
  global.localON = status === 'granted'
}

export default function generateSteps(userData, navigation, setDestaques){
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
          trigger:() => {
           return (global.user ? 'home' : 'form1')
          },
      },
      //Parte do formulário:
      {
        id:'form1',
        message: 'Gostaria de te conhecer melhor e assim oferecer uma melhor experiência. Beleza?',
        trigger: getLastStep('form1','endForm3')
      },
      {
        id:'form2',
        options: [
          { value: 1, label: 'Simbora!', trigger:() => {
            global.lastStep = 'form2';
            return 'form3'
          }},
        ],
      },
      {
        id:'form3',
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          return 'Massa, agora escolha uma categoria:'
        },
        trigger: getLastStep('form3','form4'),
      },
      {
        id:'form4',
        options:[
          { value: 'cervejas', label: 'Cervejas', trigger: getLastStep('form4','cervejas')},
          { value: 'semAlcool', label: 'Sem álcool', trigger: getLastStep('form4','semAlcool')},
          // { value: 1, label: 'Vinhos', trigger: 'cervejas'},
          // { value: 1, label: 'Petiscos', trigger: 'cervejas'},
          // { value: 1, label: 'Outros', trigger: 'cervejas'},
        ],
      },
      {
        id: 'semAlcool',
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          setDestaques([8,9,10,11])
          return 'Qual desses produtos você prefere?'
        },
        trigger: getLastStep('semAlcool','semAlcool2')
      },
      {
        id: 'semAlcool2',
        options: [
          {value: 'Pepsi', label: 'Pepsi', trigger: getLastStep('semAlcool2','semAlcool3')},
          {value: 'redbull', label: 'Redbull', trigger: getLastStep('semAlcool2','semAlcool3')},
          {value: 'Gatorade', label: 'Gatorade', trigger: getLastStep('semAlcool2','semAlcool3')},
          {value: 'H2OH', label: 'H2OH', trigger: getLastStep('semAlcool2','semAlcool3')},
          {value: 'Sukita', label: 'Sukita', trigger: getLastStep('semAlcool2','semAlcool3')},
        ]
      },
      {
        id: 'semAlcool3',
        message: ({previousValue}) => {
         enviarDadosServidor(previousValue);
         return 'Boa escolha'
        },
        trigger: getLastStep('semAlcool3','endForm3')
      },
      {
        id: 'cervejas',
        message: 'Qual dessas duas você gosta mais?',
        trigger: getLastStep('cervejas','cervejas2'),
      },
      {
        id: 'cervejas2',
        //um custom mostrando as imagens e falando o texto abaixo:
        // message: 'As consagradas',
        component: <Consagradas/>,
        trigger: getLastStep('cervejas2','cervejas3'),
      },
      {
        id: 'cervejas3',
        //um custom mostrando as imagens e falando o texto abaixo:
        // message: 'As prestigiadas',
        component: <Prestigiadas/>,
        trigger: getLastStep('cervejas3','cervejas4'),
      },
      {
        id: 'cervejas4',
        options: [
          { value: 'Consagradas', label: 'As consagradas', trigger: getLastStep('cervejas4','consagradas') },
          { value: 'Prestigiadas', label: 'As prestigiadas', trigger: getLastStep('cervejas4','prestigiadas') },
        ],
      },
      {
        id: 'consagradas',
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          setDestaques([0,1,2,3])
          return `Boa ${userData.userName} você é como eu, não abre mão de uma boa consagrada. Qual a sua favorita?`
        },
        trigger: getLastStep('consagradas','escolhaConsagrada')
      },
      {
        id: 'prestigiadas',
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          setDestaques([4,5,6,7])
          return `Boa ${userData.userName} você é como eu, não abre mão de uma boa prestigiada. Qual sua favorita?`
        },
        trigger: getLastStep('prestigiadas','escolhaPrestigiada')
      },
      {
        id: 'escolhaConsagrada',
        options: [
          { value: 'Skol', label: 'Skol', trigger: getLastStep('escolhaConsagrada','endForm')},
          { value: 'Brahma', label: 'Brahma', trigger: getLastStep('escolhaConsagrada','endForm')},
          { value: 'Budweiser', label: 'Budweiser', trigger: getLastStep('escolhaConsagrada','endForm')},
          { value: 'Antartica', label: 'Antartica', trigger: getLastStep('escolhaConsagrada','endForm')},
        ]
      },
      {
        id: 'escolhaPrestigiada',
        options: [
          { value: 'Stella Artois', label: 'Stella Artois', trigger: getLastStep('escolhaPrestigiada','endForm')},
          { value: 'Beck\'s', label: 'Beck\'s', trigger: getLastStep('escolhaPrestigiada','endForm')},
          { value: 'Corona', label: 'Corona', trigger: getLastStep('escolhaPrestigiada','endForm')},
          { value: 'Bohemia', label: 'Bohemia', trigger: getLastStep('escolhaPrestigiada','endForm')},
        ]
      },
      {
        id:'endForm',
        //aqui é pra ter uma div com o produto que o usuário escolheu
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          return 'Você tem bom gosto.'
        },
        trigger: getLastStep('endForm','start')
      },
      // {
      //   id:'endForm2',
      //   message: 'Você deve estar se perguntando porque é tão importante te conhecer melhor.',
      //   trigger: 'endForm3'
      // },
      {
        id:'endForm3',
        message: 'Sabendo os seus gostos eu poderei te ajudar nas próximas compras, recomendações, atalhos nas conversas comigo. Usarei estes dados a seu favor! 😀 Você pode saber melhor sobre nossa política de privacidade em www.ze.experience/privacy',
        trigger: getLastStep('endForm3','endForm4')
      },
      {
        id:'endForm4',
        message: ' Pode ficar tranquilo, seus dados estão seguros.🎲 Além dos dados já fornecidos por você anteriormente como nome e e-mail poderei coletar mais dados posteriormente, mas só se você concordar é claro.',
        trigger: getLastStep('endForm4','endForm5')
      },
      {
        id:'endForm5',
        message: 'Por exemplo, se você concordar, posso utilizar a sua localização para identificar quando você está em estabelecimentos parceiros e então facilitar pagamentos e até recomendar descontos.😍',
        trigger: () => {
          global.user = true;
          global.lastStep = 'endForm5'
          global.endform = true;
          return 'localizaoOption'
        }
      },
      {
        id:'homeForm',
        message: 'É isso aí, a gente se entende. Tem algo que eu possa fazer agora?',
        trigger: getLastStep('homeForm','start'),
      },
      {
        id:'home',
        message: 'Tem algo em que eu possa te ajudar?',
        trigger:  () => {
            global.lastStep = 'home'
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
        trigger: getLastStep('localizacao','localizaoOption')
      },
      {
        id: 'localizaoOption',
        component: <RequestLocButton/>,
        trigger: getLastStep('localizaoOption','dadosChat')
      },
      {
        id: 'dadosChat',
        message: 'Também posso utilizar os dados de nossas conversas para análise de nossos usuários e experiência expecífica voltada a você. Não se preocupe, é tudo enviado se forma anônima.',
        trigger: getLastStep('dadosChat','aceitar')
      },
      {
        id: 'aceitar',
        options: [
          {value:'sim',label: 'Aceitar compartilhar dados.', trigger: getLastStep('aceitar','aceitar2')},
          {value:'não',label: 'Não quero compartilhar dados.', trigger: getLastStep('aceitar','homeForm')}
        ]
      },
      {
        id: 'aceitar2',
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          const id = uuid.v1();
          SecureStore.setItemAsync('userId', id);
          global.id = id;
          global.acceptDataTransmission = true;
          return 'Obrigado por me ajudar a te ajudar!'
        },
        trigger: getLastStep('aceitar2','form2')
      },
      {
        id: 'homeFull',
        message: 'Tem algo em que eu possa te ajudar?',
        trigger: getLastStep('homeFull','homeFull2')
      },
      {
        id: 'homeFull2',
        options: [
          { value: '1', label: 'Me ajuda, Zé!', trigger: getLastStep('homeFull2','ajudaZe')},
          { value: '2', label: 'Quero juntar a galera!', trigger: getLastStep('homeFull2','juntarGalera')},
          { value: '3', label: 'Acessar o Zé Club', trigger: getLastStep('homeFull2','zeClub')},
          { value: '4', label: 'Cardápio', trigger: getLastStep('homeFull2','shopOptions')},
          { value: '5', label: 'Pagar Conta', trigger: getLastStep('homeFull2','pagarConta')}
        ]
      },
      {
        id: 'home2',
        options: [
          { value: '1', label: 'Me ajuda, Zé!', trigger: getLastStep('home2','ajudaZe')},
          { value: '2', label: 'Quero juntar a galera!', trigger: getLastStep('home2','juntarGalera')},
          { value: '3', label: 'Acessar o Zé Club', trigger: getLastStep('home2','zeClub')},
        ]
      },
      {
        id:'ajudaZe',
        message: 'Certo, em que posso te ajudar?',
        trigger: getLastStep('ajudaZe','ajudaOptions')
      },
      {
        id: 'ajudaOptions',
        options: [
          { value:1,label:'Não tem distribuidores aqui perto.',trigger:getLastStep('ajudaOptions','distribuidores')},
          { value:2,label:'O entregador não chegou.',trigger:getLastStep('ajudaOptions','entregador')},
          { value:3,label:'Quero relatar outro problema',trigger:getLastStep('ajudaOptions','outroProblema')},
        ],
      },
      {
        id:'distribuidores',
        trigger: getLastStep('distribuidores','voltaInicio'),
        message: 'Nós estamos sempre atuando em medidas para termos a maior quantidade de distribuidores. Mas se você conhece algum bar proximo que queira ser parceiro do Zé, pode mandar esse link para ele:\nhhtps://www.ze.experience/parceria',
        delay: 700
      },
      {
        id:'voltaInicio',
        options:[
          {value: 1, label: 'Voltar ao inicio', trigger: getLastStep('voltaInicio','home')}
        ]
      },
      {
        id:'entregador',
        message: 'Nossa! Que horrível, vou me esforçar para resolver essa questão, poderia me dizer em qual desses pedidos o entregador não chegou?',
        trigger: getLastStep('entregador','entregador2'),
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
              trigger: getLastStep('entregador2','ajudarEntregador'),
            }
            pedidos.push(temp);
          }
          return pedidos;
        })()
      },
      {
        id: 'ajudarEntregador',
        message: ({previousValue}) => `Vou fazer o possível parar que você receba o seu pedido (${previousValue})`,
        trigger: getLastStep('ajudarEntregador','fimEntregador'),
      },
      {
        id: 'fimEntregador',
        message: 'Você tem problemas com mais algum pedido?',
        trigger: getLastStep('fimEntregador','entregadorMaisPedidos')
      },
      {
        id: 'entregadorMaisPedidos',
        options: [
          { value: 1, label: 'Sim', trigger: getLastStep('entregadorMaisPedidos','entregador2')},
          { value: 2, label: 'Não', trigger: getLastStep('entregadorMaisPedidos','home')}
        ]
      },
      {
        id: 'outroProblema',
        message: 'Meus parças estão sempre dispostos a te ajudar em qualquer problema que houver. Por favor, descreva o seu problema que um de nossos atendentes o atenderá!',
        trigger: getLastStep('outroProblema','outroProblema2'),
      },
      {
        id: 'outroProblema2',
        user: true,
        trigger: getLastStep('outroProblema2','voltaInicio')
      },
      {
        id:'juntarGalera',
        message: ({previousValue}) => {
          return 'Qual o nome da sua turma?'
        },
        trigger: getLastStep('juntarGalera','juntarGalera2'),
      },
      {
        id:'juntarGalera2',
        user: true,
        trigger: getLastStep('juntarGalera2','juntarGalera3')
      },
      {
        id:'juntarGalera3',
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          let splited = previousValue.split(' ');
          let link = ''
          for(let i of splited){
            link = link + i + '-';
          }
          return `Certo, criei uma sala no Zé Club para facilitar :).\n\nPelo Zé Club você vai poder pedir suas geladas, receber promoções exclusivas e claro, realizar aquele drinking game com a galera.\n\nVocê pode acessar a sala clicando no botão abaixo. Compartilhe com seus amigos para acessarem também.\n\n${'grupo-link.zé/' + link.substring(0,link.length - 1)}`;
        },
        trigger: getLastStep('juntarGalera3','voltaInicio'),
      },
      {
        id:'zeClub',
        message: 'Estou te redirecionando para o Zé Club',
        trigger: getLastStep('zeClub', 'zeClub2'),
      },
      {
        id:'zeClub2',
        component: <ZeClubLink navigation={navigation}/>,
        trigger: getLastStep('zeClub2', 'home')
      },
      {
        id: 'tellConection',
        message: () => 'Opa, eu percebi que você estava no ' + global.estabelecimento + ', um de nossos parceiros! Que tal dar uma olhada no cardápio? Você pode realizar o pagamento via app ou pelo QRCode 😎',
        trigger: getLastStep('tellConection','optionsConection'),
      },
      {
        id: 'tellConectionShop',
        message: () => 'Opa, localizei que você está no ' + global.estabelecimento + ', um de nossos parceiros!',
        trigger: getLastStep('tellConectionShop','tellConectionShop2')
      },
      {
        id: 'tellConectionShop2',
        message: 'Apresente o QRCode abaixo no caixa para descontos especiais na linha de energéticos Gartorade',
        trigger: getLastStep('tellConectionShop3','tellConectionShop3')
      },
      {
        id: 'tellConectionShop3',
        component: <QRCode/>,
        trigger: () => {
          global.lastStep = 'tellConectionShop3'
          global.cupom = false;
         return 'tellConectionShop4';
        }
      },
      {
        id: 'tellConectionShop4',
        options: [
          {value: 'Gostei', label: 'Gostei do cupom', trigger: getLastStep('tellConectionShop4','obrigadoCupom')},
          {value: '2', label: 'Obter mais cupons', trigger: getLastStep('tellConectionShop4','semCupons')}
        ]
      },
      {
        id: 'semCupons',
        message: 'Cara, acabou. Me segue lá no Twitter @ZeDelivery, quem sabe você acha alguns rsrs',
        trigger: getLastStep('semCupons','home')
      },
      {
        id: 'obrigadoCupom',
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          return 'Com o Zé seu amigão, é cupom na mão! 🖐️'},
        trigger: getLastStep('obrigadoCupom','home')
      },
      {
        id: 'optionsConection',
        options: [
          {value: 'Sim', label: 'Sim', trigger: getLastStep('optionsConection','goShop')},
          {value: 'Não', label: 'Não', trigger: getLastStep('optionsConection','return')}
        ]
      },
      {
        id:'goShop',
        message: 'Massa, então ta ai em baixo as opções, escolhe uma delas:',
        trigger: getLastStep('goShop','shopOptions')
      },
      {
        id: 'shopOptions',
        options: [
          {value: 'Alcoolicas', label: 'Bebidas Alcoolicas', trigger: getLastStep('shopOptions','bebidasAlcoolicas')},
          {value: 'Sucos', label: 'Sucos', trigger: getLastStep('shopOptions','sucos')},
          {value: 'Aperitivos', label: 'Aperitivos', trigger: getLastStep('shopOptions','aperitivos')},
        ]
      },
      {
        id: 'bebidasAlcoolicas',
        options: [
          {value: '8', label: 'Skol 300ml: R$ 8,00', trigger: getLastStep('bebidasAlcoolicas','qtd')},
          {value: '7', label: 'Brhama 300ml: R$ 7,00', trigger: getLastStep('bebidasAlcoolicas','qtd')},
          {value: '15', label: 'Budweiser 300ml: R$ 15,00', trigger: getLastStep('bebidasAlcoolicas','qtd')},
        ]
      },
      {
        id: 'sucos',
        options: [
          {value: '3', label: 'Uva 300ml: R$ 3,00', trigger: getLastStep('sucos','qtd')},
          {value: '4', label: 'Laranja 300ml: R$ 4,00', trigger: getLastStep('sucos','qtd')},
        ]
      },
      {
        id: 'aperitivos',
        options: [
          {value: '3', label: 'Espetinho: R$ 3,00', trigger: getLastStep('aperitivos','qtd')},
        ] 
      },
      {
        id: 'qtd',
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          global.value = previousValue;
          return  'Qual a quantidade?'
        },
        trigger: getLastStep('qtd','qtd2')
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
        trigger: getLastStep('qtd2','qtd3')
      },
      {
        id: 'qtd3',
        message: ({previousValue}) => {
          enviarDadosServidor(previousValue);
          // global.qtd = previousValue
          global.qtd += parseInt(global.value) * parseInt(previousValue)
          return 'Beleza!';
        },
        trigger: getLastStep('qtd3','addMore'),
      },
      {
        id: 'addMore',
        message: 'Você deseja adicionar mais produtos?',
        trigger: getLastStep('addMore', 'addMore2'),
      },
      {
        id: 'addMore2',
        options: [
          {value: 1, label: 'Sim', trigger: getLastStep('addMore2', 'shopOptions')},
          {value: 2, label: 'Não', trigger: getLastStep('addMore2', 'homeFull')}
        ]
      },
      {
        id:'pagarConta',
        message: 'Certo!',
        trigger: getLastStep('pagarConta','confirmarPagamento')
      },
      {
        id: 'confirmarPagamento',
        message:() => 'Você realmente quer fechar sua conta? O valor atual é de: R$' + global.qtd,
        trigger:getLastStep('confirmarPagamento', 'confirmarPagamento2')
      },
      {
        id: 'confirmarPagamento2',
        options: [
          {value: 1, label: 'Sim', trigger: getLastStep('confirmarPagamento2', 'openQR')},
          {value: 2, label: 'Não', trigger: getLastStep('confirmarPagamento2', 'homeFull')}
        ]
      },
      {
        id: 'openQR',
        message: () => {
          global.qr = true;
          return 'Agora aperte no botão de QRCode e leia com a sua camera para confirmar-mos o pagamento!'
        },
        trigger: getLastStep('openQR', 'homeFull')
      },
      {
        id: 'return',
        message: 'OK, vamos voltar para onde estávamos',
        trigger: getLastStep('return', 'homeFull')
      }
    ]
  }
