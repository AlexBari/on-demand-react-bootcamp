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
    height: 490px;
    scrollbar-width: thin;
    position relative;
`;


export const CardsStyledWrapper = styled.div`
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
  height: auto;
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
    font-weight: 500;
    font-size: 19px;
`;

export const Price = styled.div`
    color: #000;
    font-weight: bold;
    margin: 6px 0;
`;

export const AddToCart = styled.button`
    width: ${ props => props.width ? props.width : '100%'};
    justify-content: center;
    font-weight: bold;
    height: 25px;
    align-items: center;
    margin-bottom: 10px;
    border: 3px solid #79CED1;
    background: white;
    &:hover {
        background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    }
`;

export const SeeDetails = styled.button`
    width: 100%;
    justify-content: center;
    font-weight: bold;
    height: 25px;
    align-items: center;
    border-top-width: 4px;
    border-top-style: solid;
    border-image: linear-gradient(80deg, rgba(255,255,255,1) 5%, rgba(121,206,209,1) 50%, rgba(242,250,250,0.1) 95%) 1;
    background: white;
    border-radius: 1rem;
    &:hover {
        background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    }
`;
