import React, { useState } from 'react';
import { Price, Title } from '../Products/productCardComponents';
import { BsTrash } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { InputQtyWrapper, QtyButton, QtyDiv } from '../Products/productsComponents';
import {
    DivRowWrapper,
    ImgDiv,
    ProductBodyDiv,
    TitlePriceDiv,
    TrashcanDiv
} from './styled';

const CartProduct = ({ data, dispatch }) => {
    const [qty, setQty] = useState(data.numberOfItems);
    const incrementCount = () => {
        qty < data.stock && setQty(prev => prev + 1);
        dispatch({type: 'add', product: data, quantity: 1})
    };

    const decrementCount = () => {
        qty > 0 && setQty(prev => prev - 1);
        dispatch({type: 'substract', product: data, quantity: 1})
    };

    const removeProduct = () => {
        if (window.confirm('Are you sure that you want to remove this product?'))
        dispatch({type: 'remove', product: data, quantity: qty});
    };

    return (
        <DivRowWrapper>
            <ImgDiv>
                <img src={data.mainimage.url} alt={data.mainimage.alt} />
            </ImgDiv>
            <ProductBodyDiv>
                <TitlePriceDiv>
                    <Title>{data.name}</Title>
                    <Price>${data.price} - Stock: {data.stock}</Price>
                </TitlePriceDiv>
                <InputQtyWrapper style={{ width: '100%' }}>
                    <QtyButton onClick={decrementCount} disabled={qty === 1}>-</QtyButton>
                    <QtyDiv>{qty}</QtyDiv>
                    <QtyButton onClick={incrementCount} disabled={qty === data.stock} >+</QtyButton>
                </InputQtyWrapper>
                <Price style={{fontWeight: 'bolder'}}>${data.price * qty} </Price>
                <TrashcanDiv onClick={removeProduct}>
                    <BsTrash />
                </TrashcanDiv>
            </ProductBodyDiv>
        </DivRowWrapper>
    )
};

CartProduct.propType = {
    data: PropTypes.object,
    dispatch: PropTypes.func
};

export default CartProduct;