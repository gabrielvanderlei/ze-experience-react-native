import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: #fff;
  flex: 1
`;

export const Header = styled.View`
height: 50px;
padding: 0 16px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const BalenceContainer = styled.View`
`;

export const Highlights = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 10,
  },
}))`
  height: 240px;
`


export const ProductCard = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  margin-right :10px;
  width:120px;
`;

export const ProductImage = styled.Image``;

export const ProductTitleWrapper = styled.View`
  width: 100%
`;

export const ProductTitle = styled.Text`
 color: #000;
 font-size: 14px;
 text-align: center;
 justify-content: center;
 align-items: center;
`;
export const ProductPrice = styled.Text`
 color: #000;
 text-align: center;
 font-size: 20px;
 font-weight: bold;
`;

export const ChatBotButton = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  position: absolute;
  bottom: 15;
  right: 15;
`
export const Main = styled.ScrollView``