import React from 'react';
import styled from 'styled-components';
import Slider from '../components/slider/slider';
import Products from '../components/products/products';
import Carousel from '../components/carousel/carousel';
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners';
import { useFeaturedProducts } from '../utils/hooks/useFeaturedProducts';
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories'

const StyledWrapper = styled.div`
    position: relative;
    display: grid;
    place-items: center;
`;

const StyledRoot = styled.div`
    width: 90vw;
    padding: 50px 12px;
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px); 
    grid-auto-rows: auto; 
    grid-gap: 1rem;
    place-items: center;
`;

const HomePage = () => {
    const { data: banners, isLoading: isBannersLoading } = useFeaturedBanners();
    const { data: categories, isLoading: isCategoriesLoading } = useFeaturedCategories();
    const { data: products, isLoading: isProductsLoading } = useFeaturedProducts();
    return (
        <StyledWrapper>
            <div>
                {
                    !isBannersLoading
                        ? <Slider id="slider" slides={banners.results} />
                        : 'Loading...'
                }
            </div>
            <div style={{ margin: '2rem 0' }}>
                {
                    !isCategoriesLoading
                        ? <Carousel id="slider" slides={categories.results} autoPlay={6} />
                        : 'Loading...'
                }
            </div>
            <StyledRoot>
                <StyledContainer>
                    {
                        !isProductsLoading
                            ? <Products products={products.results} />
                            : 'Loading...'
                    }
                </StyledContainer>
            </StyledRoot>
        </StyledWrapper>
    )
}

export default HomePage;