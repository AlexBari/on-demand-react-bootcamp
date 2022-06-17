import React from 'react';
import styled from 'styled-components';

const StyledDotSpan = styled.span`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? 'black' : '#dedede'};
`;

const StyledDotsSpan = styled.span`
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dot = ({ active }) => (
    <StyledDotSpan active={active}/>
)

const Dots = ({ slides, activeIndex }) => (
    <StyledDotsSpan>
        {slides.map((slide, i) => (
            <Dot key={`${slide.id}-dot-${i}`} active={activeIndex === i} />
        ))}
    </StyledDotsSpan>
)

export default Dots