import styled from 'styled-components';

export const ShoppingCartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    align-items: center;
    padding: 2vw 5vw;
`;

export const DivRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 4px solid;
    border-bottom: 4px solid;
    margin-bottom: 2rem;
    border-image: linear-gradient(
            80deg,
            rgba(255, 255, 255, 1) 5%,
            rgba(121, 206, 209, 1) 50%,
            rgba(242, 250, 250, 0.1) 95%
        )
        1;
    @media screen and (max-width: 980px) {
        flex-direction: column;
    }
`;

export const ImgDiv = styled.div`
    padding: 10px;
    margin: 0 auto;
    max-width: 15vw;
    & img {
        width: 100%;
    }
`;

export const ProductBodyDiv = styled.div`
    margin: 0 auto;
    max-width: 75vw;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    place-items: center;
    justify-content: center;
    @media screen and (max-width: 980px) {
        display: flex;
        flex-direction: column;
        grid-auto-rows: auto;
        margin-bottom: 20px;
    }
`;

export const TitlePriceDiv = styled.div`
    padding: 0 20px;
    @media screen and (max-width: 980px) {
        display: flex;
        flex-direction: column;
        grid-auto-rows: auto;
        place-items: center;
        justify-content: center;
        align-items: center;
    }
`;

export const TrashcanDiv = styled.div`
    font-size: 1.8rem;
    padding: 5px;
    display: flex;
    place-items: center;
    justify-content: center;
    border: 3px solid #79ced1;
    border-radius: 15px;
    &:hover {
        border: 3px solid red;
        color: white;
        background: linear-gradient(
            145deg,
            rgba(255, 0, 0, 1) 57%,
            rgba(255, 255, 255, 1) 98%
        );
    }
`;

export const CartEmptyDiv = styled.div`
    margin: 20vh;
`;

export const TotalDivWrapper = styled.div`
    position: relative;
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: inherit;
    border-top: 4px solid;
    border-bottom: 4px solid;
    margin-bottom: 2rem;
    border-image: linear-gradient(
            80deg,
            rgba(255, 255, 255, 1) 5%,
            rgba(121, 206, 209, 1) 50%,
            rgba(242, 250, 250, 0.1) 95%
        )
        1;
`;

export const CheckoutButton = styled.button`
    border-radius: 1rem;
    height: 3rem;
    width: 35vw;
    border: 1px solid #79ced1;
    cursor: pointer;
    margin-bottom: 20px;
    background: #79ced173;
    font-weight: 700;
    &:hover {
        background: linear-gradient(
            145deg,
            rgba(121, 206, 209, 1) 57%,
            rgba(255, 255, 255, 1) 98%
        );
    }
`;
