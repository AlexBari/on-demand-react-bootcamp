import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';
import CartProduct from './cartProduct';
import { CartEmptyDiv, CheckoutButton, ShoppingCartWrapper, TotalDivWrapper } from './styled';

const ShoppingCart = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(AppContext);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setCart(state.products)
        setTotal(state.products.reduce((prv, obj) => prv + obj.price * obj.numberOfItems, 0))
    }, [state]);

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <ShoppingCartWrapper>
            <div>
                <h1>Your Shopping Cart:</h1>
            </div>
            {
                cart && cart.length > 0
                    ? (
                        <>
                            {cart.map(prd => <CartProduct key={`cartProduct-${prd.name}`} data={prd} dispatch={dispatch} />)}
                            <TotalDivWrapper>
                                <div>
                                    <h2>Total: $ {total}</h2>
                                </div>
                                <div>
                                    <CheckoutButton onClick={handleCheckout}>Proceed to checkout</CheckoutButton>
                                </div>
                            </TotalDivWrapper>
                        </>
                    )
                    : (
                        <CartEmptyDiv>
                            <h2>Your Cart is Empty</h2>
                        </CartEmptyDiv>
                    )
            }
        </ShoppingCartWrapper>
    );
};

export default ShoppingCart;