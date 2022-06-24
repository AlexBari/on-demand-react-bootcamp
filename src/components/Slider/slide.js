import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${props => props.data.main_image.url || ''}');
    background-size: ${props => !!props.isCarousel ? 'contain' : 'cover'};
    background-repeat: no-repeat;
    background-position: center;
`;

const Slide = ({data, isCarousel}) => {
    return (
        <StyledDiv data={data} isCarousel={isCarousel}/>
    )
};

export default Slide;