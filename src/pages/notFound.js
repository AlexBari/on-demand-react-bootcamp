import React from 'react';
import { StyledH1, StyledWrapperNF } from './styled';

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