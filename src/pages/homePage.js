import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider/slider';
import Products from '../components/Products/products';
import Carousel from '../components/Carousel/carousel';
import { StyledBlueButton, StyledWrapper, StyledRoot } from './homePageCompoents';
import { StyledProductContainer } from '../components/Products/productsComponents';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories';
import { Loading } from '../common/loading';

const HomePage = () => {
    const navigate = useNavigate();
    const { data: banners, isLoading: isBannersLoading } = useFeaturedBanners();
    const { data: categories, isLoading: isCategoriesLoading } = useFeaturedCategories();
    const { data: products, isLoading: isProductsLoading } = useFeaturedProducts();

    const RedirectHandler = () => {
        navigate('/productsPage');
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
                <StyledProductContainer isLoading={isProductsLoading}>
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