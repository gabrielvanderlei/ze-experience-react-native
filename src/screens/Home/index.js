import React, { Fragment } from 'react';
import { StyleSheet, Dimensions, ScrollView, StatusBar } from 'react-native';
import { NavBar, Button, Block, Card, Text, Input, theme } from 'galio-framework';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#FFCD01"
      />
      <Block>
        <NavBar title="Matheus" style={{backgroundColor: '#FFCD01'}} titleStyle={{ color: '#ffffff', fontSize: 16, textAlign: 'center' }} />
        <NavBar style={{backgroundColor: '#FFCD01'}} titleStyle={{ color: '#ffffff', fontSize: 30, textAlign: 'center' }}>
          <Text h1>Matheus</Text>
          <Text>Experience</Text>
        </NavBar>

        <Block style={{ flex: 1, left:50 ,top: 100 }}>
          <Button
            onlyIcon
            icon="wechat"
            iconFamily="antdesign"
            iconSize={30}
            color="warning"
            iconColor="#fff"
            style={{ width: 40, height: 40 }}
            onPress={() => navigation.navigate('ChatBot')}
          >
          </Button>
        </Block>
          <Block row style={styles.card}>
            <Card
              flex
              borderless
              style={styles.card}
              title="Christopher Moon"
              caption="139 minutes ago"
              location="Los Angeles, CA"
              avatar="http://i.pravatar.cc/100?id=skater"
              imageStyle={styles.cardImageRadius}
              imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
              image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
            />

          </Block>

      </Block>
    </>
  )
}

const styles = StyleSheet.create({
  card: {

  },
})