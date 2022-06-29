import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider/slider';
import Products from '../components/Products/products';
import Carousel from '../components/Carousel/carousel';
import { StyledBlueButton, StyledWrapper, StyledRoot } from './homePageComponents';
import { StyledProductContainer } from '../components/Products/productsComponents';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories';
import Loading from '../common/loading.js';
import { useProducts } from '../utils/hooks/useProducts';

const HomePage = () => {
    const navigate = useNavigate();
    const { data: banners, isLoading: isBannersLoading } = useFeaturedBanners(5);
    const { data: categories, isLoading: isCategoriesLoading } = useFeaturedCategories(30);
    const { data: products, isLoading: isProductsLoading } = useProducts(16, true);

    const RedirectHandler = () => {
        navigate('/product');
    }

    return (
        <StyledWrapper>
            <div>
                {
                    !isBannersLoading
                        ? <Slider id="slider" slides={banners.results} />
                        : <Loading />
                }
            </div>
            <div style={{ margin: '2rem 0' }}>
                {
                    !isCategoriesLoading
                        ? <Carousel id="slider" slides={categories.results} autoPlay={6} />
                        : <Loading />
                }
            </div>
            <StyledRoot>
                <StyledProductContainer isLoading={isProductsLoading} hasData={products.results && products.results.length > 0} >
                    {
                        !isProductsLoading
                            ? <Products products={products.results} />
                            : <Loading />
                    }
                </StyledProductContainer>
            </StyledRoot>
            <div>
                <StyledBlueButton onClick={RedirectHandler}>
                    View All Products
                </StyledBlueButton>
            </div>
        </StyledWrapper>
    )
}

export default HomePage;