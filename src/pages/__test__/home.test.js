import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import * as router from 'react-router';
import HomePage from '../home';
import * as BannersMock from '../../utils/hooks/useFeaturedBanners';
import * as CategoriesMock from '../../utils/hooks/useFeaturedCategories';
import * as ProductsMock from '../../utils/hooks/useProducts';
import AppContext from '../../utils/appContext';

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

        const BannersSpy = jest.spyOn(BannersMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 5,
                results_size: 3,
                total_results_size: 3,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [
                    {
                        id: 'YWYmORIAAC4A3Qio',
                        uid: null,
                        url: null,
                        type: 'banner',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWYmORIAAC4A3Qio%22%29+%5D%5D',
                        tags: [],
                        first_publication_date: '2021-10-13T00:20:12+0000',
                        last_publication_date: '2021-10-13T00:28:15+0000',
                        slugs: [
                            'a-great-style---living-room',
                            'un-gran-estilo---sala'
                        ],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YWYn5xIAACkA3RA3',
                                type: 'banner',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            title: 'A GREAT STYLE - LIVING ROOM',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                    spans: []
                                }
                            ],
                            cta_link: '#',
                            cta_target: '_parent',
                            main_image: {
                                dimensions: {
                                    width: 1440,
                                    height: 705
                                },
                                alt: 'A GREAT STYLE - LIVING ROOM',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/305e2781-5f25-4c00-bef7-1041b49def37_banner-1-2.jpeg?auto=compress,format&rect=103,0,1226,600&w=1440&h=705'
                            }
                        }
                    }
                ],
                version: '6dac34e',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });

        jest.spyOn(CategoriesMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 30,
                results_size: 5,
                total_results_size: 5,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });

        jest.spyOn(ProductsMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 16,
                results_size: 16,
                total_results_size: 88,
                total_pages: 6,
                next_page:
                    'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D%26q%3D%5B%5Bat%28document.tags%2C%5B%22Featured%22%5D%29%5D%5D&page=2&pageSize=16&languageCode=en-us',
                prev_page: null,
                results: [],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });

        render(
            <AppContext.Provider value={mockDispatch}>
                <HomePage />
            </AppContext.Provider>
        );

        await waitFor(() => {
            expect(BannersSpy).toBeCalledTimes(1);
            const slider = screen.findByTestId('sliders');
            expect(slider).not.toBeNull();
        });
    });

    test('Featured Carousel fetching and rendering data', async () => {
        const mockDispatch = jest.fn();

        jest.spyOn(BannersMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 5,
                results_size: 3,
                total_results_size: 3,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [],
                version: '6dac34e',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });

        const CategoriesSpy = jest
            .spyOn(CategoriesMock, 'default')
            .mockReturnValue({
                isLoading: false,
                data: {
                    page: 1,
                    results_per_page: 30,
                    results_size: 5,
                    total_results_size: 5,
                    total_pages: 1,
                    next_page: null,
                    prev_page: null,
                    results: [
                        {
                            id: 'YWHyYRIAACgAykCq',
                            uid: null,
                            url: null,
                            type: 'category',
                            href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHyYRIAACgAykCq%22%29+%5D%5D',
                            tags: [],
                            first_publication_date: '2021-10-09T23:32:29+0000',
                            last_publication_date: '2021-11-18T14:27:09+0000',
                            slugs: ['decorate', 'decorate--organize'],
                            linked_documents: [],
                            lang: 'en-us',
                            alternate_languages: [
                                {
                                    id: 'YWHybRIAAC8AykDh',
                                    type: 'category',
                                    lang: 'es-mx'
                                }
                            ],
                            data: {
                                name: 'Decorate',
                                main_image: {
                                    dimensions: {
                                        width: 621,
                                        height: 398
                                    },
                                    alt: 'Decorate',
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/7213f592-3304-4521-9765-830792751780_angela-bailey-tuJtzghMuEw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398'
                                }
                            }
                        }
                    ],
                    version: '73ae4f1',
                    license:
                        'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
                }
            });

        jest.spyOn(ProductsMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 16,
                results_size: 16,
                total_results_size: 88,
                total_pages: 6,
                next_page:
                    'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D%26q%3D%5B%5Bat%28document.tags%2C%5B%22Featured%22%5D%29%5D%5D&page=2&pageSize=16&languageCode=en-us',
                prev_page: null,
                results: [],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });

        render(
            <AppContext.Provider value={mockDispatch}>
                <HomePage />
            </AppContext.Provider>
        );

        await waitFor(() => {
            expect(CategoriesSpy).toBeCalledTimes(1);
            const carousel = screen.findByTestId('carousel');
            expect(carousel).not.toBeNull();
        });
    });

    test('Featured Products fetching and rendering data', async () => {
        const mockDispatch = jest.fn();

        jest.spyOn(BannersMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 5,
                results_size: 3,
                total_results_size: 3,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [],
                version: '6dac34e',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });

        jest.spyOn(CategoriesMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 30,
                results_size: 5,
                total_results_size: 5,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });

        const ProductsSpy = jest
            .spyOn(ProductsMock, 'default')
            .mockReturnValue({
                isLoading: false,
                data: {
                    page: 1,
                    results_per_page: 16,
                    results_size: 16,
                    total_results_size: 88,
                    total_pages: 6,
                    next_page:
                        'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D%26q%3D%5B%5Bat%28document.tags%2C%5B%22Featured%22%5D%29%5D%5D&page=2&pageSize=16&languageCode=en-us',
                    prev_page: null,
                    results: [],
                    version: '73ae4f1',
                    license:
                        'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
                }
            });

        render(
            <AppContext.Provider value={mockDispatch}>
                <HomePage />
            </AppContext.Provider>
        );
        await waitFor(() => {
            expect(ProductsSpy).toBeCalledTimes(1);
            const product = screen.findByTestId('productCard-1');
            expect(product).toBeTruthy();
        });
    });
});
