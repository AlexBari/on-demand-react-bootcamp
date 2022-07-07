import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { AddToCartButton } from '../Products/productCardComponents';
import PropTypes from 'prop-types';

const AddToCart = ({ product, qty = 1 }) => {
    const { dispatch } = useContext(AppContext);
    const SendToCart = () => {
        dispatch({ type: 'add', product: product, quantity: qty });
    };
    return (
        <AddToCartButton width={'100%'} onClick={SendToCart} disabled={qty === 0}>Add to cart</AddToCartButton>
    );
};

AddToCart.propType = {
    product: PropTypes.object,
    qty: PropTypes.number
};

export default AddToCart;