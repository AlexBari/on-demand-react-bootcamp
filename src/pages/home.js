import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider/slider';
import Products from '../components/Products/products';
import Carousel from '../components/Carousel/carousel';
import { StyledBlueButton, StyledWrapper, StyledRoot } from './styled';
import { StyledProductContainer } from '../components/Products/productsComponents';
import useFeaturedBanners from '../utils/hooks/useFeaturedBanners';
import useProducts from '../utils/hooks/useProducts';
import useFeaturedCategories from '../utils/hooks/useFeaturedCategories';
import Loading from '../common/loading/loading';

function HomePage() {
    const navigate = useNavigate();
    const { data: banners, isLoading: isBannersLoading } =
        useFeaturedBanners(5);
    const { data: categories, isLoading: isCategoriesLoading } =
        useFeaturedCategories(30);
    const { data: products, isLoading: isProductsLoading } = useProducts(
        16,
        true,
        1
    );

    const RedirectHandler = () => {
        navigate('/products');
    };

    return (
        <StyledWrapper>
            <div>
                {!isBannersLoading ? (
                    <Slider slides={banners.results} />
                ) : (
                    <Loading />
                )}
            </div>
            <div style={{ margin: '2rem 0' }}>
                {!isCategoriesLoading ? (
                    <Carousel slides={categories.results} autoPlay={6} />
                ) : (
                    <Loading />
                )}
            </div>
            <StyledRoot>
                <StyledProductContainer
                    isLoading={isProductsLoading}
                    hasData={products.results && products.results.length > 0}
                >
                    {!isProductsLoading ? (
                        <Products products={products.results} />
                    ) : (
                        <Loading />
                    )}
                </StyledProductContainer>
            </StyledRoot>
            <div>
                <StyledBlueButton onClick={RedirectHandler}>
                    View All Products
                </StyledBlueButton>
            </div>
        </StyledWrapper>
    );
}

export default HomePage;
