import React from 'react'
import styled from 'styled-components'

const SliderContentDiv = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`;

const SliderContet = (props) => {
  return (
    <SliderContentDiv translate={props.translate} transition={props.transition} width={props.width}>
      {props.children}
    </SliderContentDiv>
  )
};

export default SliderContet;