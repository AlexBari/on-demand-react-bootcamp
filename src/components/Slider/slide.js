import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('${(props) => props.data.main_image.url || ''}');
    background-size: ${(props) => (props.isCarousel ? 'contain' : 'cover')};
    background-repeat: no-repeat;
    background-position: center;
`;

function Slide({ data, isCarousel }) {
    return <StyledDiv data={data} isCarousel={isCarousel} />;
}

Slide.propTypes = {
    data: PropTypes.shape({
        mainimage: PropTypes.shape({
            url: PropTypes.string,
            alt: PropTypes.string
        }),
        name: PropTypes.string,
        category: PropTypes.shape({
            slug: PropTypes.string
        }),
        price: PropTypes.number,
        stock: PropTypes.number
    }),
    isCarousel: PropTypes.bool
};

export default Slide;
