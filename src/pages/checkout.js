import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { Title } from '../components/Products/productCardComponents';
import {
    CheckoutMainWrapper,
    CheckoutDiv,
    FormCheckout,
    FormWrapper,
    SummaryTableWrapper,
    FormLabel,
    FormInput,
    FormTextarea,
    StandardButton,
    ButtonWrapper,
    MainButtonWrapper,
    CheckoutProduct,
    CheckoutTotal,
    Price
} from './styled';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { state } = useContext(AppContext);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [orderNotes, setOrderNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        setCart(state.products)
        setTotal(state.products.reduce((prv, obj) => prv + obj.price * obj.numberOfItems, 0))
    }, [state])

    return (
        <CheckoutMainWrapper>
            <CheckoutDiv>
                <h2>Checkout your order: </h2>
            </CheckoutDiv>
            <CheckoutDiv>
                <FormWrapper>
                    <FormCheckout onSubmit={handleSubmit}>
                        <FormLabel> Name:
                            <FormInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </FormLabel>
                        <FormLabel> Email:
                            <FormInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormLabel>
                        <FormLabel> Zip Code:
                            <FormInput type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                        </FormLabel>
                        <FormLabel> Order notes:
                            <FormTextarea value={orderNotes} maxLength='250' onChange={(e) => setOrderNotes(e.target.value)} />
                        </FormLabel>
                    </FormCheckout>
                </FormWrapper>
                <SummaryTableWrapper>
                    {
                        <>
                            {
                                cart.map((prd) => (
                                    <CheckoutProduct key={`checkoutProduct-${prd.name}`}>
                                        <Title>{prd.name} - Qty: {prd.numberOfItems}</Title>
                                        <Price>${prd.price * prd.numberOfItems} </Price>
                                    </CheckoutProduct>
                                ))
                            }
                            <CheckoutTotal>
                                <h2>Total: $ {total}</h2>
                            </CheckoutTotal>
                        </>
                    }
                </SummaryTableWrapper>
            </CheckoutDiv>
            <MainButtonWrapper>
                <ButtonWrapper>
                    <StandardButton onClick={() => navigate('/cart')}>Back to Cart</StandardButton>
                </ButtonWrapper>
                <ButtonWrapper>
                    <StandardButton>Place Order</StandardButton>
                </ButtonWrapper>
            </MainButtonWrapper>
        </CheckoutMainWrapper>
    );
};

export default CheckoutPage;