import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${props => props.data.main_image.url || ''}');
    background-size: ${props => !!props.isContain ? 'contain' : 'cover'};
    background-repeat: no-repeat;
    background-position: center;
`;

const Slide = ({data, isContain, onClickHandler}) => {
    return (
        <StyledDiv data={data} isContain={isContain} onClick={onClickHandler}/>
    )
};

Slide.propTypes = {
    data: PropTypes.object,
    isContain: PropTypes.bool,
    onClick: PropTypes.func
}

export default Slide;