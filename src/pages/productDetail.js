import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../utils/hooks/useProducts';
import Loading from '../common/loading/loading';
import Slider from '../components/Slider/slider';
import { capitalizeString } from '../utils/utils';
import { Category, Price, Title } from '../components/Products/productCardComponents';
import {
    InfoDivWrapper,
    InnerContainerWrapper,
    ProductDetailWrapper,
    ProductDetaildWrapper,
    ProductDescription,
    InsiderDivWrapper,
    InputQtyWrapper,
    QtyDiv,
    QtyButton
} from '../components/Products/productsComponents';
import AddToCart from '../components/ShoppingCart/addToCart';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const { data = [], isLoading } = useProducts(1, false, 1, productId);
    const [product, setProduct] = useState();
    const [qty, setQty] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (data.results && data.results.length > 0) {
            let imagesSet = data.results[0].data.images.map((img) => {
                return {
                    id: data.results[0].id,
                    data: {
                        'main_image': { ...img.image }
                    }
                };
            });
            setImages(imagesSet)
            setProduct(data.results[0]);
        }
    }, [data]);

    const incrementCount = () => {
        qty < product.data.stock && setQty(prev => prev + 1);
    };

    const decrementCount = () => {
        qty > 0 && setQty(prev => prev - 1);
    };

    return (
        <ProductDetaildWrapper>
            {
                !isLoading && product
                    ?
                    <ProductDetailWrapper>
                        <InnerContainerWrapper>
                            <Slider
                                id="slider-product"
                                slides={images.length > 0 ? images : []}
                                isContain={true}
                                sliderWidth={'100%'}
                            />
                            <InfoDivWrapper>
                                <Title>{product.data.name} ( SKU: {product.data.sku} )</Title>
                                <Price>${product.data.price} - Stock: {product.data.stock}</Price>
                                <span></span>
                                <Category>Category: {capitalizeString(product.data.category.slug)}</Category>
                                <span style={{fontWeight: 'bold'}}>Tags:</span>
                                <ul>
                                    {
                                        product.tags.map((tg, i) => <li key={'tag-' + i}>{tg}</li>)
                                    }
                                </ul>
                                <ProductDescription>{product.data.description[0].text}</ProductDescription>
                                <span style={{fontWeight: 'bold'}}>Specs:</span>
                                <ul>
                                    {
                                        product.data.specs.map((spc, i) => <li key={'spec-' + i}>{spc.spec_name}: {spc.spec_value}</li>)
                                    }
                                </ul>
                                <InsiderDivWrapper>
                                    <InputQtyWrapper>
                                        <QtyButton onClick={decrementCount} disabled={qty === 0}>-</QtyButton>
                                        <QtyDiv>{qty}</QtyDiv>
                                        <QtyButton onClick={incrementCount} disabled={qty === product.data.stock} >+</QtyButton>
                                    </InputQtyWrapper>
                                    <AddToCart product={product.data} qty={qty} />
                                </InsiderDivWrapper>
                            </InfoDivWrapper>
                        </InnerContainerWrapper>
                    </ProductDetailWrapper>
                    : <Loading />
            }

        </ProductDetaildWrapper>
    );
};

export default ProductDetailPage;