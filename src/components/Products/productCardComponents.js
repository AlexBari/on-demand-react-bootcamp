import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1px solid white;
    background: white;
    padding: 20px 15px;
    height: 325px;
    overflow: auto;
    scrollbar-width: thin;
    position relative;
`;

export const StyledContainerImage = styled.div`
    border: 1px solid white;
    background: white;
    padding: 15px;
    height: 345px;
    scrollbar-width: thin;
    position relative;
`;


export const CardsStyledWrapper = styled.div`
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
  height: 745px;
  display: block;
  align-self: center;
  border-radius: 5px;
`;

export const StyledPhoto = styled.img`
    width: 100%;
    height: 50%;
    object-fit: contain;
    border: 1px solid white;
`
export const Title = styled.h2`
    font-weight: bold;
    font-size: 20px;
`;

export const Category = styled.h3`
    font-weight: 300;
    font-size: 20px;
`;

export const Price = styled.div`
    color: #000;
    font-weight: 500;
    margin: 6px 0;
`;
