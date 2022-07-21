import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
    waitFor,
    render,
    screen,
    fireEvent,
    within
} from '@testing-library/react';
import * as ProductsMock from '../../utils/hooks/useProducts';
import ProductDetailPage from '../productDetail';
import AppContext from '../../utils/appContext';

describe('Product List Page tests: ', () => {
    beforeEach(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useParams: jest
                .fn()
                .mockReturnValue({ productId: 'YZZ6OhIAACgAvlE1' })
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Product Detail Page is fetching and rendering data from the API for a particular product', async () => {
        const mockDispatch = jest.fn();
        const productSpy = jest.spyOn(ProductsMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 20,
                results_size: 1,
                total_results_size: 1,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [
                    {
                        id: 'YZZ6OhIAACgAvlE1',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ6OhIAACgAvlE1%22%29+%5D%5D',
                        tags: ['Lamps', 'Featured'],
                        first_publication_date: '2021-11-18T16:07:25+0000',
                        last_publication_date: '2021-11-18T16:08:09+0000',
                        slugs: ['desk-lamp-ezra', 'lampara-de-buro-ezra'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ52xIAAC8Avk-S',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Desk Lamp Ezra',
                            sku: '1102665992',
                            category: {
                                id: 'YWHy0xIAACoAykKm',
                                type: 'category',
                                tags: [],
                                lang: 'en-us',
                                slug: 'lighting',
                                first_publication_date:
                                    '2021-10-09T23:32:20+0000',
                                last_publication_date:
                                    '2021-10-13T00:04:48+0000',
                                link_type: 'Document',
                                isBroken: false
                            },
                            mainimage: {
                                dimensions: {
                                    width: 696,
                                    height: 900
                                },
                                alt: 'Desk Lamp Ezra',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                            },
                            short_description:
                                'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Base Material',
                                    spec_value: 'Ceramic'
                                },
                                {
                                    spec_name: 'Collection',
                                    spec_value: 'Ezra'
                                },
                                {
                                    spec_name: 'Watts',
                                    spec_value: '60 W'
                                },
                                {
                                    spec_name: 'Weight',
                                    spec_value: '2.26 kg'
                                },
                                {
                                    spec_name: 'Dimensions',
                                    spec_value:
                                        'Measurements: 16.51 cm diameter x 55.8 cm high approximate'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/d4dfb5e0-1f35-4ba7-a61b-e5e5f7b4e7bb_2.jpeg?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/5e69abf6-972e-4595-9a4f-86ae1b0b8b83_3.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 9,
                            price: 147
                        }
                    }
                ],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });
        render(
            <AppContext.Provider value={mockDispatch}>
                <ProductDetailPage />
            </AppContext.Provider>
        );
        await waitFor(async () => {
            expect(productSpy).toBeCalledTimes(2);
        });
    });

    test('Product Detail Page contains the following labels: name of the selected product, current price, SKU, category name, a list of tags, and description', async () => {
        const mockDispatch = jest.fn();
        jest.spyOn(ProductsMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 20,
                results_size: 1,
                total_results_size: 1,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [
                    {
                        id: 'YZZ6OhIAACgAvlE1',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ6OhIAACgAvlE1%22%29+%5D%5D',
                        tags: ['Lamps', 'Featured'],
                        first_publication_date: '2021-11-18T16:07:25+0000',
                        last_publication_date: '2021-11-18T16:08:09+0000',
                        slugs: ['desk-lamp-ezra', 'lampara-de-buro-ezra'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ52xIAAC8Avk-S',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Desk Lamp Ezra',
                            sku: '1102665992',
                            category: {
                                id: 'YWHy0xIAACoAykKm',
                                type: 'category',
                                tags: [],
                                lang: 'en-us',
                                slug: 'lighting',
                                first_publication_date:
                                    '2021-10-09T23:32:20+0000',
                                last_publication_date:
                                    '2021-10-13T00:04:48+0000',
                                link_type: 'Document',
                                isBroken: false
                            },
                            mainimage: {
                                dimensions: {
                                    width: 696,
                                    height: 900
                                },
                                alt: 'Desk Lamp Ezra',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                            },
                            short_description:
                                'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Base Material',
                                    spec_value: 'Ceramic'
                                },
                                {
                                    spec_name: 'Collection',
                                    spec_value: 'Ezra'
                                },
                                {
                                    spec_name: 'Watts',
                                    spec_value: '60 W'
                                },
                                {
                                    spec_name: 'Weight',
                                    spec_value: '2.26 kg'
                                },
                                {
                                    spec_name: 'Dimensions',
                                    spec_value:
                                        'Measurements: 16.51 cm diameter x 55.8 cm high approximate'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/d4dfb5e0-1f35-4ba7-a61b-e5e5f7b4e7bb_2.jpeg?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/5e69abf6-972e-4595-9a4f-86ae1b0b8b83_3.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 9,
                            price: 147
                        }
                    }
                ],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });
        render(
            <AppContext.Provider value={mockDispatch}>
                <ProductDetailPage />
            </AppContext.Provider>
        );
        await waitFor(() => {
            expect(screen.getByText(/Desk Lamp Ezra/i)).toBeTruthy();
            expect(screen.getByText(/147/i)).toBeTruthy();
            expect(screen.getByText(/1102665992/i)).toBeTruthy();
            expect(screen.getByText(/Category: Lighting/i)).toBeTruthy();
            expect(screen.getByText(/Lamps/i)).toBeTruthy();
            expect(screen.getByText(/Featured/i)).toBeTruthy();
            expect(screen.getByTestId(/productDescription/i)).toBeTruthy();
        });
    });

    test('Product Detail Page contains a quantity selector and an “Add to Cart” button', async () => {
        const mockDispatch = jest.fn();
        jest.spyOn(ProductsMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 20,
                results_size: 1,
                total_results_size: 1,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [
                    {
                        id: 'YZZ6OhIAACgAvlE1',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ6OhIAACgAvlE1%22%29+%5D%5D',
                        tags: ['Lamps', 'Featured'],
                        first_publication_date: '2021-11-18T16:07:25+0000',
                        last_publication_date: '2021-11-18T16:08:09+0000',
                        slugs: ['desk-lamp-ezra', 'lampara-de-buro-ezra'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ52xIAAC8Avk-S',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Desk Lamp Ezra',
                            sku: '1102665992',
                            category: {
                                id: 'YWHy0xIAACoAykKm',
                                type: 'category',
                                tags: [],
                                lang: 'en-us',
                                slug: 'lighting',
                                first_publication_date:
                                    '2021-10-09T23:32:20+0000',
                                last_publication_date:
                                    '2021-10-13T00:04:48+0000',
                                link_type: 'Document',
                                isBroken: false
                            },
                            mainimage: {
                                dimensions: {
                                    width: 696,
                                    height: 900
                                },
                                alt: 'Desk Lamp Ezra',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                            },
                            short_description:
                                'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Base Material',
                                    spec_value: 'Ceramic'
                                },
                                {
                                    spec_name: 'Collection',
                                    spec_value: 'Ezra'
                                },
                                {
                                    spec_name: 'Watts',
                                    spec_value: '60 W'
                                },
                                {
                                    spec_name: 'Weight',
                                    spec_value: '2.26 kg'
                                },
                                {
                                    spec_name: 'Dimensions',
                                    spec_value:
                                        'Measurements: 16.51 cm diameter x 55.8 cm high approximate'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/d4dfb5e0-1f35-4ba7-a61b-e5e5f7b4e7bb_2.jpeg?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/5e69abf6-972e-4595-9a4f-86ae1b0b8b83_3.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 9,
                            price: 147
                        }
                    }
                ],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });
        render(
            <AppContext.Provider value={mockDispatch}>
                <ProductDetailPage />
            </AppContext.Provider>
        );
        await waitFor(() => {
            expect(screen.getByTestId('decrementButton')).toBeTruthy();
            expect(screen.getByTestId('incrementButton')).toBeTruthy();
        });
    });

    test('Validate Add to Cart when Stock is 0', async () => {
        const mockDispatch = jest.fn();
        jest.spyOn(ProductsMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 20,
                results_size: 1,
                total_results_size: 1,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [
                    {
                        id: 'YZZ6OhIAACgAvlE1',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ6OhIAACgAvlE1%22%29+%5D%5D',
                        tags: ['Lamps', 'Featured'],
                        first_publication_date: '2021-11-18T16:07:25+0000',
                        last_publication_date: '2021-11-18T16:08:09+0000',
                        slugs: ['desk-lamp-ezra', 'lampara-de-buro-ezra'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ52xIAAC8Avk-S',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Desk Lamp Ezra',
                            sku: '1102665992',
                            category: {
                                id: 'YWHy0xIAACoAykKm',
                                type: 'category',
                                tags: [],
                                lang: 'en-us',
                                slug: 'lighting',
                                first_publication_date:
                                    '2021-10-09T23:32:20+0000',
                                last_publication_date:
                                    '2021-10-13T00:04:48+0000',
                                link_type: 'Document',
                                isBroken: false
                            },
                            mainimage: {
                                dimensions: {
                                    width: 696,
                                    height: 900
                                },
                                alt: 'Desk Lamp Ezra',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                            },
                            short_description:
                                'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Base Material',
                                    spec_value: 'Ceramic'
                                },
                                {
                                    spec_name: 'Collection',
                                    spec_value: 'Ezra'
                                },
                                {
                                    spec_name: 'Watts',
                                    spec_value: '60 W'
                                },
                                {
                                    spec_name: 'Weight',
                                    spec_value: '2.26 kg'
                                },
                                {
                                    spec_name: 'Dimensions',
                                    spec_value:
                                        'Measurements: 16.51 cm diameter x 55.8 cm high approximate'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/d4dfb5e0-1f35-4ba7-a61b-e5e5f7b4e7bb_2.jpeg?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/5e69abf6-972e-4595-9a4f-86ae1b0b8b83_3.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 0,
                            price: 147
                        }
                    }
                ],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });
        render(
            <AppContext.Provider value={mockDispatch}>
                <ProductDetailPage />
            </AppContext.Provider>
        );
        await waitFor(() => {
            expect(screen.getByText(/Add to cart/i)).toBeDisabled();
        });
    });

    test('Validate that after clicking on the “Add to Cart” button, the number of items that are selected in quantity selector control are added to the cart.', async () => {
        const mockDispatch = jest.fn();
        jest.spyOn(ProductsMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 20,
                results_size: 1,
                total_results_size: 1,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [
                    {
                        id: 'YZZ6OhIAACgAvlE1',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ6OhIAACgAvlE1%22%29+%5D%5D',
                        tags: ['Lamps', 'Featured'],
                        first_publication_date: '2021-11-18T16:07:25+0000',
                        last_publication_date: '2021-11-18T16:08:09+0000',
                        slugs: ['desk-lamp-ezra', 'lampara-de-buro-ezra'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ52xIAAC8Avk-S',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Desk Lamp Ezra',
                            sku: '1102665992',
                            category: {
                                id: 'YWHy0xIAACoAykKm',
                                type: 'category',
                                tags: [],
                                lang: 'en-us',
                                slug: 'lighting',
                                first_publication_date:
                                    '2021-10-09T23:32:20+0000',
                                last_publication_date:
                                    '2021-10-13T00:04:48+0000',
                                link_type: 'Document',
                                isBroken: false
                            },
                            mainimage: {
                                dimensions: {
                                    width: 696,
                                    height: 900
                                },
                                alt: 'Desk Lamp Ezra',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                            },
                            short_description:
                                'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Craftsmanship and practical functionality come together in our eye-catching accent lamp. Crafted from tough ceramic with gently curved contours, Ezra is hand finished with a reactive glaze that imparts a rich, varied tone and unique character. Made of ceramic with a reactive Teal Glazed finish applied by hand. Pluggable. The lamp has an on / off switch located in the socket. Transparent PVC cord. UL Listed Dry. It has capacity for 1 bulb type A of 60 W or equivalent to LED (not included). E26 plug.',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Base Material',
                                    spec_value: 'Ceramic'
                                },
                                {
                                    spec_name: 'Collection',
                                    spec_value: 'Ezra'
                                },
                                {
                                    spec_name: 'Watts',
                                    spec_value: '60 W'
                                },
                                {
                                    spec_name: 'Weight',
                                    spec_value: '2.26 kg'
                                },
                                {
                                    spec_name: 'Dimensions',
                                    spec_value:
                                        'Measurements: 16.51 cm diameter x 55.8 cm high approximate'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/d4dfb5e0-1f35-4ba7-a61b-e5e5f7b4e7bb_2.jpeg?auto=compress,format'
                                    }
                                },
                                {
                                    image: {
                                        dimensions: {
                                            width: 696,
                                            height: 900
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/5e69abf6-972e-4595-9a4f-86ae1b0b8b83_3.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 9,
                            price: 147
                        }
                    }
                ],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });
        render(
            <AppContext.Provider value={mockDispatch}>
                <ProductDetailPage />
            </AppContext.Provider>
        );
        fireEvent.click(screen.getByTestId('incrementButton'));
        await waitFor(() => {
            const { getByText } = within(screen.getByTestId('qtyPlaced'));
            expect(getByText('1')).toBeInTheDocument();
        });
    });
});
