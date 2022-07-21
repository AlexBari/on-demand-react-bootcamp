import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`;
export const PageNumbersUl = styled.ul`
    list-style: none;
    display: flex;
`;

export const PageNumbersLi = styled.li`
    border: 1px solid black;
    justify-content: flex-start;
    place-items: center;
    border-radius: 8px;
    &.active {
        color: black;
        border-radius: 20px;
        background: linear-gradient(
            145deg,
            rgba(121, 206, 209, 1) 57%,
            rgba(255, 255, 255, 1) 98%
        );
    }
    &:hover {
        color: black;
        background: rgb(182 233 234 / 80%);
    }
`;

export const PageNumbersButton = styled.button`
    width: 70px;
    height: 100%;
    background-color: transparent;
    border: none;
    color: black;
    font-size: 1.5rem;
    cursor: pointer;
    justify-content: flex-start;
    place-items: center;
    &:focus {
        outline: none;
    }
`;

export const HellipLi = styled.li`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-content: center;
    border: 1px solid black;
    border-radius: 20px;
`;
