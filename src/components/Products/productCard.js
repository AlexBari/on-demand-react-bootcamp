import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import AddToCart from '../ShoppingCart/addToCart';
import { capitalizeString } from '../../utils/utils';
import {
  CardsStyledWrapper,
  StyledContainerImage,
  StyledPhoto,
  Title,
  Category,
  Price,
  SeeDetails
} from './productCardComponents'
import { AppContext } from '../../App';

const ProductCard = ({ data, id }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);
  const handleSendToCart = () => {
    dispatch({ type: 'add', product: {id, ...data}, quantity: 1 });
  };

  return (
    <CardsStyledWrapper>
      <StyledContainerImage>
        <AddToCart onClick={(handleSendToCart)} product={data}>Add to cart</AddToCart>
        <StyledPhoto src={data.mainimage.url} alt={data.mainimage.alt} />
        <Title>{data.name}</Title>
        <Category>Category: {capitalizeString(data.category.slug)}</Category>
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