import React from 'react';
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import * as router from 'react-router';
import HomePage from '../home';
import AppContext from '../../utils/appContext';
import banners from './dist/banners.json';
import products from './dist/products.json';
import categories from './dist/categories.json';

jest.mock('axios');

describe('Home Page tests: ', () => {
    const navigate = jest.fn();

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Featured Banners Slider fetching and rendering data', async () => {
        const mockDispatch = jest.fn();

        const BannersMock = axios.get.mockResolvedValueOnce(banners);

        axios.get.mockResolvedValueOnce(categories);

        axios.get.mockResolvedValueOnce(products);

        render(
            <AppContext.Provider value={mockDispatch}>
                <HomePage />
            </AppContext.Provider>
        );

        await waitFor(() => {
            expect(BannersMock).toBeCalled();
            const slider = screen.findByTestId('sliders');
            expect(slider).not.toBeNull();
        });
    });

    test('Featured Carousel fetching and rendering data', async () => {
        const mockDispatch = jest.fn();

        axios.get.mockResolvedValueOnce(banners);

        const CategoriesSpy = axios.get.mockResolvedValueOnce(categories);

        axios.get.mockResolvedValueOnce(products);

        render(
            <AppContext.Provider value={mockDispatch}>
                <HomePage />
            </AppContext.Provider>
        );

        await waitFor(() => {
            expect(CategoriesSpy).toBeCalled();
            const carousel = screen.findByTestId('carousel');
            expect(carousel).not.toBeNull();
        });
    });

    test('Featured Products fetching and rendering data', async () => {
        const mockDispatch = jest.fn();

        axios.get.mockResolvedValueOnce(banners);

        axios.get.mockResolvedValueOnce(categories);

        const ProductsSpy = axios.get.mockResolvedValueOnce(products);

        render(
            <AppContext.Provider value={mockDispatch}>
                <HomePage />
            </AppContext.Provider>
        );
        await waitFor(() => {
            expect(ProductsSpy).toBeCalled();
            const product = screen.findByTestId('productCard-1');
            expect(product).toBeTruthy();
        });
    });
});
