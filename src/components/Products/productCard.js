import React from 'react';
import { CapitalizeString } from '../../utils/utils';
import {
  CardsStyledWrapper,
  StyledContainerImage,
  StyledPhoto,
  Title,
  Category,
  Price,
  StyledContainer
} from './productCardComponents'

const ProductCard = ({ data }) => {
  return (
    <CardsStyledWrapper>
      <StyledContainerImage>
        <StyledPhoto src={data.mainimage.url} alt={data.mainimage.alt} />
        <Title>{data.name}</Title>
        <Category>Categoría: {CapitalizeString(data.category.slug)}</Category>
        <Price>${data.price} - Stock: {data.stock}</Price>
      </StyledContainerImage>
      <StyledContainer>{data.short_description}</StyledContainer>
    </CardsStyledWrapper>
  )
};

export default ProductCard;