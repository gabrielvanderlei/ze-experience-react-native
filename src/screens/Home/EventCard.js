import React from 'react';
import styled from 'styled-components/native';
import products from './products';

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin-right :10px;
  width: 300px;
  height: 270px;
`;
//box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.5);
const EventImage = styled.Image`
  height: 80%;
  width: 95%;
  border-radius: 10px;
`;

const EventTitleWrapper = styled.View`
  width: 100%
`;

const EventTitle = styled.Text`
  color: #000;
  font-size: 15px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const EventLocal= styled.Text`
  color: #999;
  text-align: center;
  font-size: 13px;
`;

export default function EventCard({event}){
  return(
    <Container 
    style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 15,
    }}
    >
      <EventImage source={event.img}/>
      <EventTitleWrapper style={{alignItems: 'center', marginTop: 7}}>
        <EventTitle style={{width: '90%', height: 20}}>{event.name}</EventTitle>
        <EventLocal>{event.local}</EventLocal>
      </EventTitleWrapper>
    </Container>
  )
}