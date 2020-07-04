import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin-right :10px;
  width: 120px;
`;
//box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.5);
const ProductImage = styled.Image`
  width: 110px;
  height: 158px;
`;

const ProductTitleWrapper = styled.View`
  width: 100%
`;

const ProductTitle = styled.Text`
  color: #000;
  font-size: 15px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const ProductPrice = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
const ProductOriginalPrice = styled.Text`
  color: #999;
  text-align: center;
  font-size: 13px;
  text-decoration: line-through;
`;

export default function ProductCard({product}){
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
    }}
    >
      <ProductImage source={product.img}/>
      <ProductTitleWrapper>
      <ProductTitle style={{width: '90%', height: 40}}>{product.name}</ProductTitle>
        <ProductOriginalPrice>{product.promo}</ProductOriginalPrice>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductTitleWrapper>
    </Container>
  )
}