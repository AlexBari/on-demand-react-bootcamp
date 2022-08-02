import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Price, Title } from '../Products/productCardComponents';
import {
    InputQtyWrapper,
    QtyButton,
    QtyDiv
} from '../Products/productsComponents';
import {
    DivRowWrapper,
    ImgDiv,
    ProductBodyDiv,
    TitlePriceDiv,
    TrashcanDiv
} from './styled';

function CartProduct({ data, dispatch }) {
    const [qty, setQty] = useState(data.numberOfItems);
    const incrementCount = () => {
        // eslint-disable-next-line no-unused-expressions
        qty < data.stock && setQty((prev) => prev + 1);
        dispatch({ type: 'add', product: data, quantity: 1 });
    };

    const decrementCount = () => {
        // eslint-disable-next-line no-unused-expressions
        qty > 0 && setQty((prev) => prev - 1);
        dispatch({ type: 'substract', product: data, quantity: 1 });
    };

    const removeProduct = () => {
        dispatch({ type: 'remove', product: data, quantity: qty });
    };

    return (
        <DivRowWrapper data-testid="product-card">
            <ImgDiv>
                <img
                    data-testid="cartImage"
                    src={data.mainimage.url}
                    alt={data.mainimage.alt}
                />
            </ImgDiv>
            <ProductBodyDiv>
                <TitlePriceDiv>
                    <Title data-testid="cartName">{data.name}</Title>
                    <Price data-testid="cartPriceStock">
                        ${data.price} - Stock: {data.stock}
                    </Price>
                </TitlePriceDiv>
                <InputQtyWrapper style={{ width: '100%' }} data-testid="qtyDiv">
                    <QtyButton
                        onClick={decrementCount}
                        disabled={qty === 1}
                        data-testid="cartDecrement"
                    >
                        -
                    </QtyButton>
                    <QtyDiv data-testid="productQty">{qty}</QtyDiv>
                    <QtyButton
                        onClick={incrementCount}
                        disabled={qty === data.stock}
                        data-testid="cartIncrement"
                    >
                        +
                    </QtyButton>
                </InputQtyWrapper>
                <Price style={{ fontWeight: 'bolder' }} data-testid="subtotal">
                    ${data.price * qty}{' '}
                </Price>
                <TrashcanDiv onClick={removeProduct} data-testid="bsTrash">
                    <BsTrash />
                </TrashcanDiv>
            </ProductBodyDiv>
        </DivRowWrapper>
    );
}

CartProduct.propTypes = {
    data: PropTypes.shape({
        mainimage: PropTypes.shape({
            url: PropTypes.string,
            alt: PropTypes.string
        }),
        name: PropTypes.string,
        price: PropTypes.number,
        stock: PropTypes.number,
        numberOfItems: PropTypes.number
    }),
    dispatch: PropTypes.func
};

CartProduct.defaultProps = {
    data: {},
    dispatch: () => {}
};

export default CartProduct;
