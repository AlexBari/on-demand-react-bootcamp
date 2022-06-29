import React from 'react';
import styled from 'styled-components';

export const MainFooterDiv = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 35px;
    background: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Footer = () => {
    return (
        <MainFooterDiv>
                 Ecommerce created during Wizeline’s Academy React Bootcamp
        </MainFooterDiv>
    );
}

export default Footer;