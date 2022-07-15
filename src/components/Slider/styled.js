import styled from 'styled-components';

const SliderCSS = styled.div`
    position: relative;
    height: 60vh;
    width: ${(props) => (props.sliderWidth ? props.sliderWidth : '90vw')};
    margin: 20px auto;
    overflow: hidden;
`;

export default SliderCSS;
