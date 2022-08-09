import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SliderContentDiv = styled.div`
    transform: translateX(-${(props) => props.translate}px);
    transition: transform ease-out ${(props) => props.transition}s;
    height: 100%;
    width: ${(props) => props.width}px;
    display: flex;
    margin: 0 -50px;
`;

function SliderContet({ translate, transition, width, children }) {
    return (
        <SliderContentDiv
            translate={translate}
            transition={transition}
            width={width}
        >
            {children}
        </SliderContentDiv>
    );
}

SliderContet.propTypes = {
    translate: PropTypes.number,
    transition: PropTypes.number,
    width: PropTypes.number,
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.array
};

export default SliderContet;
