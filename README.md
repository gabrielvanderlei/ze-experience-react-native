<img src="/assets/splash.png" alt="Zé Experience" width="500"/>

<!-- PROJECT SHIELDS -->

[![GitHub issues](https://img.shields.io/github/issues-raw/gabrielvanderlei/ze-experience-react-native.svg)](https://github.com/gabrielvanderlei/ze-experience-react-native/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/gabrielvanderlei/ze-experience-react-native.svg)](https://github.com/gabrielvanderlei/ze-experience-react-native/commits/master)
[![NPM](https://img.shields.io/github/license/gabrielvanderlei/ze-experience-react-native.svg)](https://choosealicense.com/licenses/mit)

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto
O Zé Experience consiste em um conceito de aplicação desenvolvido utilizando como base o já existente Zé Delivery. O está sendo desenvolvido como solução ao problema proposto pela Ambev no Mega Hack 3.0. 
O README foi criado utilizando como base o projeto que pode ser acessado clicando [aqui](https://github.com/Rocketseat/react-native-template-rocketseat-advanced/blob/master/README.md)

### Cliente
#### Visão Geral
O ChatBot está desenvolvido com o fluxo que será utilizado pelo cliente:
- Coleta de informação através do quiz.
- Ajuda através da opção 'Me ajuda, Zé!'
- Captura da localização do usuário em background e envio de notificação em caso de estar próximo a um estabelecimento parceiro.
- Interação com estabelecimento parceiro e fluxo de pagamento.
- Acesso ao Zé Club e opção de juntar amigos.

Os dados de envios de mensagens apenas são enviados ao servidor após o usuário aceitar compartilhar informações.
Os dados enviados são baseados no identificador do cliente gerado ao aceitar os termos e nas mensagens que ele escolher, com essas mensagens o administrador possui acesso a produtos escolhidos, opções mais utilizadas entre outras informações, sem prejudicar a privacidade do usuário.

### Servidor
#### Visão Geral
O Servidor da aplicação está online e hospedado no ip http://161.35.63.2/. 
O Kibana está on-line para acesso público para visualização do recebimento dos dados pelo sistema.
Todo o código do servidor está na branch server.


- Servidor NodeJS: http://161.35.63.2:3000/
- Kibana: http://161.35.63.2:5601/status

#### Arquitetura do Servidor
O servidor está utilizando a runtime Node.js, com roteamento controlado pelo framework Express.js. 
Os dados são salvos em um banco de dados MongoDB, indexados em uma instância do servidor de buscas Elasticsearch e disponibilizados no sevidor Kibana.
Todo o servidor está codificado na branch server no arquivo server/index.js .

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Gabriel Vanderlei - [Github](https://github.com/gabrielvanderlei) - **dev@gabrielvanderlei.com**
