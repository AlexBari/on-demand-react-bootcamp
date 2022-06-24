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
    grid-template-columns: ${ props => props.isLoading ? 'auto' : 'repeat(auto-fill, 250px)'}; 
    grid-auto-rows: auto; 
    grid-gap: 1rem;
    place-items: center;
    justify-content: center;
    width: 90vw;
`;