import styled from 'styled-components';

export const StyledProductsSideBar = styled.div`
    width: 20vw;
    align-self: flex-start;
    height: auto;
`;

export const StyledWrapper = styled.div`
    display: flex;
    place-items: center;
    width: 90vw;
    height: auto;
    padding: 50px 12px;
`;

export const StyledProductContainer = styled.div`
    display: grid;
    grid-template-columns: ${props => props.isLoading || !props.hasData ? 'auto' : 'repeat(auto-fill, 250px)'}; 
    grid-auto-rows: auto; 
    grid-gap: 1rem;
    place-items: center;
    justify-content: center;
    width: 90vw;
`;

export const StyledCategoryRow = styled.div`
    display: flex;
    justify-content: center;
    place-items: center;
    height: 50px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid #79CED1;
    border-radius: 5px;
    margin-bottom: 20px;
    word-break: break-all;
    background: lightcyan;
    &:hover {
        color: black;
        background: rgb(182 233 234 / 80%);
    }
    &.active {
        color: black;
        background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    }
`;

export const ProductDetaildWrapper = styled.div`
    height: auto;
    padding: 10px 0;
    margin-bottom: 50px;
    width: 94vw;
`;

export const ProductDetailWrapper = styled.div`
  padding: 1rem;
  position: relative;
  background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
  height: auto;
  display: block;
  align-self: center;
  border-radius: 5px;
`;

export const InnerContainerWrapper = styled.div`
    border: 1px solid white;
    background: white;
    padding: 15px;
    scrollbar-width: thin;
    position relative;
`;

export const InfoDivWrapper = styled.div`
    border-top-width: 4px;
    border-top-style: solid;
    border-image: linear-gradient(80deg, rgba(255,255,255,1) 5%, rgba(121,206,209,1) 50%, rgba(242,250,250,0.1) 95%) 1;
    padding: 30px;
`;

export const ProductDescription = styled.p`
    word-wrap: break-word;
    text-align: justify;
    text-justify: inter-word;
    margin: 20px 0;
`;

export const InsiderDivWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
`;

export const QtyProductInput = styled.input`
    width: 500px;
    margin: 20px 0;
`;

export const InputQtyWrapper = styled.div`
    flex-direction: row;
    height: 50px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 10px 0;
`;

export const QtyDiv = styled.div`
    margin: 0 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    width: 25vw;
    border-radius: 20px;
    border-width: 4px;
    border-style: solid;
    border-image: linear-gradient(80deg, rgba(255,255,255,1) 5%, rgba(121,206,209,1) 50%, rgba(242,250,250,0.1) 95%) 1;
`;

export const QtyButton = styled.button`
    justify-content: center;
    font-weight: bold;
    height: 20px;
    align-items: center;
    margin-bottom: 10px;
    border: 3px solid #79CED1;
    background: white;
    padding: 0px 20px;
    border-radius: 1rem;
    height: 35px;
    &:hover {
        background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    }
`;

export const SideBarCategoryRow = styled.div`
    display: flex;
    justify-content: flex-start;
    place-items: center;
    height: 50px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid #79CED1;
    border-radius: 5px;
    margin: 1px 0px;
    word-break: break-all;
    &:hover {
        color: black;
        background: rgb(182 233 234 / 80%);
    }
    &.active {
        color: black;
        background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    }
`;
