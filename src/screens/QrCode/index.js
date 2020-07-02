import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRCode({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const saldo = global.qtd;
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Conectamos você ao estabelecimento ${data}.`);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    //envio para o global o data
    if(global.qr === true && global.qtd > 0){
      if(data === global.estabelecimento){
        alert(`Foram descontados R$${saldo} da sua conta. Obrigado por vir ao ${global.estabelecimento}. Volte Sempre!`);
        global.qtd = 0;
        
      }
      else{
        alert(`Esse QRCode não é compativel com o estabelecimento no qual você está conectado`);
      }
    }
    global.qr = false;
    setScanned(false);
    navigation.navigate("ChatBot");
  };

  if (hasPermission === null) {
    return <Text>Pedindo permissão para acessar a câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
      }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
        </BarCodeScanner>
      
    </View>
  );
}