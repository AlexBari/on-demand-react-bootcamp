import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { CapitalizeString } from '../../utils/utils';
import {
  CardsStyledWrapper,
  StyledContainerImage,
  StyledPhoto,
  Title,
  Category,
  Price,
  SeeDetails,
  AddToCart
} from './productCardComponents'

const ProductCard = ({ data, id }) => {
  const navigate = useNavigate();

  const SendToCart = () => {
    const prdToAdd = {
      product: data,
      qty: 1
    }
    console.log(prdToAdd)
  };

  return (
    <CardsStyledWrapper>
      <StyledContainerImage>
        <AddToCart onClick={SendToCart}>Add to cart</AddToCart>
        <StyledPhoto src={data.mainimage.url} alt={data.mainimage.alt} />
        <Title>{data.name}</Title>
        <Category>Category: {CapitalizeString(data.category.slug)}</Category>
        <Price>${data.price} - Stock: {data.stock}</Price>
      </StyledContainerImage>
      <SeeDetails onClick={() => { navigate(`/product/${id}`) }}>See Details</SeeDetails>
    </CardsStyledWrapper>
  )
};

ProductCard.propType = {
  data: PropTypes.object,
  id: PropTypes.string
};

export default ProductCard;