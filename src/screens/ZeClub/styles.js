import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background: #EEE;
  flex: 1;
  display: flex;
`;

export const TopContainer = styled.View`
    height: 250px;
    width: 100%;
    margin: 0;
    background-color: #ffcd01;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NameBar = styled.View`
    height: 50px;
    background-color: #ffcd01;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    width: 100%;
`

export const HelpContainer = styled.View`
  width: 40px;
`

export const BackButton = styled.TouchableOpacity`
    width: 40px;
    margin-left: 15px;
`;

export const SetView = styled.TouchableOpacity`
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const Image = styled.Image`
    height: 150px;
    width: 170px;
    border-radius: 20px;
`

export const BodyContainer = styled.View`
  background-color: #EEE;
`

export const ToggleView = styled.View`
    margin: 30px 20px;
    height: 55px;
    border: 1px solid black;
    border-radius: 40px;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
`

export const DataContainer = styled.View`
    margin: 0 10px;
`