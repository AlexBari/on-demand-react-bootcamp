import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AddToCartButton } from '../Products/productCardComponents';
import AppContext from '../../utils/appContext';

function AddToCart({ product, qty = 1 }) {
    const { dispatch } = useContext(AppContext);
    const SendToCart = () => {
        dispatch({ type: 'add', product, quantity: qty });
    };
    return (
        <AddToCartButton width="100%" onClick={SendToCart} disabled={qty === 0}>
            Add to cart
        </AddToCartButton>
    );
}

AddToCart.propTypes = {
    product: PropTypes.shape({}),
    qty: PropTypes.number
};

AddToCart.defaultProps = {
    product: {},
    qty: 0
};

export default AddToCart;
