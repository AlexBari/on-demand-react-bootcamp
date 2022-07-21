import styled from 'styled-components';

export const StyledRoot = styled.div`
    width: 90vw;
    padding: 50px 12px;
`;

export const StyledBlueButton = styled.button`
    background: linear-gradient(
        145deg,
        rgba(121, 206, 209, 1) 57%,
        rgba(255, 255, 255, 1) 98%
    );
    border-radius: 1rem;
    height: 3rem;
    width: 25rem;
    border: 1px solid #79ced1;
    cursor: pointer;
    margin-bottom: 70px;
`;

export const StyledWrapper = styled.div`
    position: relative;
    display: grid;
    place-items: center;
`;

export const StyledWrapperNF = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const StyledH1 = styled.h1`
    font-weight: bolder;
    font-size: 6rem;
`;

export const CheckoutMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    @media screen and (max-width: 980px) {
        display: flex;
        flex-direction: column;
        grid-auto-rows: auto;
        place-items: center;
        justify-content: center;
        align-items: center;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    align-items: center;
    width: 40%;
    @media screen and (max-width: 980px) {
        display: flex;
        flex-direction: column;
        grid-auto-rows: auto;
        place-items: center;
        justify-content: center;
        align-items: center;
    }
`;

export const FormCheckout = styled.form`
    display: flex;
    flex-direction: column;
`;

export const SummaryTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
    align-items: center;
    width: 50%;
    @media screen and (max-width: 980px) {
        display: flex;
        flex-direction: column;
        grid-auto-rows: auto;
        place-items: center;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }
`;

export const CheckoutDiv = styled.div`
    display: flex;
    width: 100%;
    place-items: center;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media screen and (max-width: 980px) {
        display: flex;
        flex-direction: column;
        grid-auto-rows: auto;
        place-items: center;
        justify-content: center;
        align-items: center;
    }
`;

export const FormLabel = styled.label`
    margin: 0 15px;
    padding: 5px;
    font-weight: bold;
    place-items: center;
    justify-content: center;
    align-items: center;
`;

export const FormTextarea = styled.textarea`
    max-width: 300px;
    max-height: 300px;
    min-width: 254px;
    min-height: 21.5px;
    margin: 5px 15px;
    border-color: rgba(121, 206, 209, 1);
    border-radius: 5px;
`;

export const FormInput = styled.input`
    margin: 5px 15px;
    min-width: 254px;
    border: 1px solid rgba(121, 206, 209, 1);
    border-radius: 5px;
    &:invalid {
        background-color: ivory;
        border: none;
        outline: 2px solid red;
    }
`;

export const StandardButton = styled.button`
    border-radius: 1rem;
    height: 3rem;
    width: 100%;
    border: 1px solid #79ced1;
    cursor: pointer;
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

export const MainButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    place-items: center;
    justify-content: center;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    margin: 20px;
    width: 20vw;
`;

export const CheckoutProduct = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    place-items: center;
    justify-content: center;
    align-items: center;
    border-top-width: 4px;
    border-top-style: solid;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-image: linear-gradient(
            80deg,
            rgba(255, 255, 255, 1) 5%,
            rgba(121, 206, 209, 1) 50%,
            rgba(242, 250, 250, 0.1) 95%
        )
        1;
    @media screen and (max-width: 980px) {
        display: flex;
        flex-direction: column;
        grid-auto-rows: auto;
        place-items: center;
        justify-content: center;
        align-items: center;
    }
`;

export const CheckoutTotal = styled.div`
    place-self: flex-end;
    display: flex;
`;

export const Price = styled.div`
    display: flex;
    color: #000;
    font-weight: bolder;
    margin: 6px 10px;
    width: 30%;
    justify-content: center;
    align-items: center;
`;
