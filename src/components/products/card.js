import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  border: 1px solid white;
  background: white;
  padding: 20px 15px;
  height: 325px;
  overflow: auto;
  scrollbar-width: thin;
  position relative;
`;

const StyledContainerImage = styled.div`
  border: 1px solid white;
  background: white;
  padding: 15px;
  height: 345px;
  scrollbar-width: thin;
  position relative;
`;


const StyledWrapper = styled.div`
    max-width: 250px;
    padding: 1rem;
    position: relative;
    background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    height: 745px;
    display: block;
    align-self: center;
`;

const StyledPhoto = styled.img`
  width: 100%;
  height: 50%;
  object-fit: contain;
  border: 1px solid white;;
`
const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;

const Category = styled.h3`
  font-weight: 300;
  font-size: 20px;
`;

const Price = styled.div`
  color: #000;
  font-weight: 500;
  margin: 6px 0;
`;

const Card = ({ data }) => {
  console.log(data)
    return (
        <StyledWrapper>
            <StyledContainerImage>
                <StyledPhoto src={data.mainimage.url} alt={data.mainimage.alt} />
                <Title>{data.name}</Title>
                <Category>Categoría: {data.category.slug}</Category>
                <Price>${data.price} - Stock: {data.stock}</Price>
            </StyledContainerImage>
            <StyledContainer>{data.short_description}</StyledContainer>
        </StyledWrapper>
    )
};

export default Card;