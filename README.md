
<p align="center">
<img src="/assets/splash.png" alt="Zé Experience" width="500"/>
</p>
<!-- PROJECT SHIELDS -->

[![GitHub issues](https://img.shields.io/github/issues-raw/gabrielvanderlei/ze-experience-react-native.svg)](https://github.com/gabrielvanderlei/ze-experience-react-native/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/gabrielvanderlei/ze-experience-react-native.svg)](https://github.com/gabrielvanderlei/ze-experience-react-native/commits/master)
[![NPM](https://img.shields.io/github/license/gabrielvanderlei/ze-experience-react-native.svg)](https://choosealicense.com/licenses/mit)

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo
- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Visão Geral](#visão-geral)
  - [Feito Com](#feito-com)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Instalação](#instala%C3%A7%C3%A3o)
  - [Aplicativo](#aplicativo)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto
O Zé Experience consiste em um conceito de aplicação desenvolvido utilizando como base o já existente Zé Delivery. O está sendo desenvolvido como solução ao problema proposto pela Ambev no Mega Hack 3.0. 
O README foi criado utilizando como base o projeto que pode ser acessado clicando [aqui](https://github.com/Rocketseat/react-native-template-rocketseat-advanced/blob/master/README.md)

### Visão Geral

#### Cliente
A Tela Inicial contém:
- vídeos promocionais
- sugestões de produtos para compra
- sugestão de eventos. 

A tela inicial deverá ser alterada de acordo com as conversas no chat. (só momento esta funcionalidade se baseia apenas nas perguntas iniciais do chatbot para traçar o perfil do cliente).

O ChatBot está desenvolvido com o fluxo que será utilizado pelo cliente:
- Coleta de informação através do quiz.
- Ajuda através da opção 'Me ajuda, Zé!'
- Captura da localização do usuário em background e envio de notificação em caso de estar próximo a um estabelecimento parceiro.
- Interação com estabelecimento parceiro e fluxo de pagamento.
- Acesso ao Zé Club e opção de juntar amigos.

Os dados das mensagens apenas são enviados ao servidor após o usuário aceitar compartilhar informações.
Os dados enviados são baseados no identificador do cliente gerado ao aceitar os termos e nas mensagens que ele escolher, com essas mensagens o administrador possui acesso a produtos escolhidos, opções mais utilizadas entre outras informações, sem prejudicar a privacidade do usuário.

#### Servidor

O Servidor da aplicação está online e hospedado no ip http://161.35.63.2/. 
O Kibana está on-line para acesso público para visualização do recebimento dos dados pelo sistema.
Todo o código do servidor está na branch server.

- Servidor NodeJS: http://161.35.63.2:3000/
- Kibana: http://161.35.63.2:5601/status
<p align="center">
<a href="http://161.35.63.2:5601/app/kibana#/discover">
  <img src="https://i.imgur.com/q82uVck.jpg" alt="Kibana dashboard recebendo dados" width="900"/>
</a>
<a href="http://161.35.63.2:5601/app/kibana#/discover">
  <figcaption>Mensagens recebidas no Kibana</figcaption>
</a>
</p>

#### Arquitetura do Servidor
O servidor está utilizando a runtime Node.js, com roteamento controlado pelo framework Express.js. 
Os dados são salvos em um banco de dados MongoDB, indexados em uma instância do servidor de buscas Elasticsearch e disponibilizados no sevidor Kibana.
Todo o servidor está codificado na branch server no arquivo server/index.js .

### Feito Com
**Cliente**

- [Expo](https://docs.expo.io/) - O Expo CLI é um aplicativo de linha de comando que é a principal interface entre um desenvolvedor e as ferramentas da Expo. Desenvolvendo seu aplicativo: executando o servidor do projeto, visualizando logs, abrindo seu aplicativo em um simulador.
- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em JavaScript;

**Servidor**

- [Node.js / npm](https://nodejs.org/en/) - Node.js® é runtime JavaScript feito com a [Chrome's V8 JavaScript engine](https://v8.dev/).
- [Express.js](https://expressjs.com/pt-br/) - Framework web rápido, flexível e minimalista para [Node.js](http://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) - O MongoDB é um banco de dados distribuído, baseado em documentos e de propósito geral, criado para desenvolvedores de aplicativos modernos e para a era da nuvem.
- [Elasticsearch](https://www.elastic.co/pt/what-is/elasticsearch) - O Elasticsearch é um mecanismo de busca e análise de dados distribuído e open source para todos os tipos de dados, incluindo textuais, numéricos, geoespaciais, estruturados e não estruturados.
- [Kibana](https://www.elastic.co/pt/kibana) - O Kibana é uma interface de usuário gratuita e aberta para você visualizar seus dados do Elasticsearch e navegar no Elastic Stack. Faça qualquer coisa, desde monitorar a carga de consultas até entender como as solicitações fluem pelos seus apps.


### Pré-requisitos
Para utilizar o projeto você irá precisar de algumas ferramentas.
O cliente pode ser utilizado sem o servidor, pois os dados são enviados apenas caso o usuário aceite a transmissão de dados, então o aplicativo permite esa 

### Instalação
Parar executar este projeto é necessário 
1. Ter o **cli** do expo instalado
```bash
npm install -g expo-cli
```
2. Instalar dependências
```bash
npm install
```
ou
```bash
yarn add
```
3. Executar expo
```bash
expo start
```
ou
```bash
yarn start
```

### Aplicativo
Atualmente o aplicativo só é suportado em dispositivos Android.
[Baixar versão mais recente do apk](https://expo.io/artifacts/0fc8ddea-854d-49c5-986e-5c9f2950ab7e)

<p float="left" align="center">
<img src="https://i.imgur.com/KxcSwOF.jpg" alt="Tela inicial do app" height="400"/>
<img src="https://i.imgur.com/MQmQOwK.jpg" alt="App recebendo notificações próximo a um estabelecimento próximo" height="400"/>
<img src="https://i.imgur.com/vmL4rGy.jpg" alt="Tela inicial do app" height="400"/>
</p>

### Estrutura de Arquivos
A estrutura de arquivos está da seguinte maneira:

```bash
ze-experience-react-native-master/
┣ .expo-shared/
┃ ┗ assets.json
┣ assets/
┃ ┣ favicon.png
┃ ┣ icon.png
┃ ┗ splash.png
┣ src/
┃ ┣ images/
┃ ┃ ┗ ZeDelivery/
┃ ┃ ┃ ┣ cervejas/
┃ ┃ ┃ ┗ semAlcool/
┃ ┗ screens/
┃ ┃ ┣ ChatBot/
┃ ┃ ┃ ┣ components/
┃ ┃ ┃ ┃ ┣ Header/
┃ ┃ ┃ ┃ ┣ Bot.js
┃ ┃ ┃ ┃ ┗ steps.js
┃ ┃ ┃ ┣ index.js
┃ ┃ ┃ ┗ styles.js
┃ ┃ ┣ Home/
┃ ┃ ┃ ┣ EventCard.js
┃ ┃ ┃ ┣ index.js
┃ ┃ ┃ ┣ ProductCard.js
┃ ┃ ┃ ┣ products.js
┃ ┃ ┃ ┗ styles.js
┃ ┃ ┣ QrCode/
┃ ┃ ┃ ┣ index.js
┃ ┃ ┃ ┗ styles.js
┃ ┃ ┗ ZeClub/
┃ ┃ ┃ ┣ components/
┃ ┃ ┃ ┃ ┣ Achievement/
┃ ┃ ┃ ┃ ┗ History/
┃ ┃ ┃ ┣ index.js
┃ ┃ ┃ ┗ styles.js
┣ .gitignore
┣ App.js
┣ app.json
┣ babel.config.js
┣ LICENSE
┣ package-lock.json
┣ package.json
┣ README.md
┗ yarn.lock
```

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feat/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feat/FeatureIncrivel`)
6. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Gabriel Vanderlei - [Github](https://github.com/gabrielvanderlei) - **dev@gabrielvanderlei.com**

Samuel Simões - [Github](https://github.com/samuelsimoes31)

José Vitor - [Github](https://github.com/jszvitor)

Ian Karlo - [Github](https://github.com/iankarlo)

Gustavo Nascimento - [Github](https://github.com/Gustanascimento)
