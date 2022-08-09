import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDotSpan = styled.span`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${(props) => (props.active ? 'black' : '#dedede')};
`;

const StyledDotsSpan = styled.span`
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Dot({ active }) {
    return <StyledDotSpan active={active} />;
}

function Dots({ slides, activeIndex }) {
    return (
        <StyledDotsSpan>
            {slides.map((slide, i) => (
                <Dot
                    key={`${slide.data.main_image.url}-dot`}
                    active={activeIndex === i}
                />
            ))}
        </StyledDotsSpan>
    );
}

Dot.propTypes = {
    active: PropTypes.bool
};

Dot.defaultProps = {
    active: false
};

Dots.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    slides: PropTypes.array,
    activeIndex: PropTypes.number
};

Dots.defaultProps = {
    slides: [],
    activeIndex: 0
};

export default Dots;
