import styled from 'styled-components/native';

export const Container = styled.View`
    height: 50px;
    background: #ffcd01;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin: 0;
`;
export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;
export const QrButton = styled.TouchableOpacity``;

export const BackButton = styled.TouchableOpacity`
    width: 40px;
`;