import React from 'react';
import styled from 'styled-components';

const StyledWrapperNF = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StyledH1 = styled.h1`
    font-weight: bolder;
    font-size: 6rem;
`;

export const NotFound = () => {
    return (
        <StyledWrapperNF>
            <div>
                <img src='./BlueFox.png' alt='BlueFox'></img>
            </div>
            <div>
                <StyledH1>Error 404 - Page Not Found</StyledH1>
            </div>
        </StyledWrapperNF>
    )
};