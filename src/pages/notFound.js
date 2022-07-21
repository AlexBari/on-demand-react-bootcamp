import React from 'react';
import { StyledH1, StyledWrapperNF } from './styled';

function NotFound() {
    return (
        <StyledWrapperNF>
            <div>
                <img src="./BlueFox.png" alt="BlueFox" />
            </div>
            <div>
                <StyledH1>Error 404 - Page Not Found</StyledH1>
            </div>
        </StyledWrapperNF>
    );
}

export default NotFound;
