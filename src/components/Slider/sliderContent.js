import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SliderContentDiv = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
  margin: 0 -50px;
`;

const SliderContet = (props) => {
  return (
    <SliderContentDiv translate={props.translate} transition={props.transition} width={props.width}>
      {props.children}
    </SliderContentDiv>
  )
};

SliderContet.propTypes = {
  translate: PropTypes.number,
  transition: PropTypes.number,
  width: PropTypes.number
};

export default SliderContet;