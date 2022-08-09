import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import * as router from 'react-router';
import { render, screen, fireEvent } from '@testing-library/react';
import AppContext from '../../utils/appContext';
import * as AppContextFile from '../../utils/appContext';
import ShoppingCart from '../../components/ShoppingCart/shoppingCart';

describe('Product List Page tests: ', () => {
    const navigate = jest.fn();
    let confirmSpy;
    beforeAll(() => {
        confirmSpy = jest.spyOn(window, 'confirm');
        confirmSpy.mockImplementation(jest.fn(() => true));
    });
    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Validate that an empty state is displayed when there are no items in the cart.', async () => {
        jest.spyOn(AppContextFile, 'useAppContext').mockReturnValue({
            dispatch: jest.fn(),
            state: {
                products: []
            }
        });
        const mockDispatch = jest.fn();
        render(
            <AppContext.Provider value={mockDispatch}>
                <ShoppingCart />
            </AppContext.Provider>
        );

        expect(screen.getByText(/Your Cart is Empty/i)).toBeTruthy();
    });

    test('Validate that an empty state is displayed when there are no items in the cart.', async () => {
        jest.spyOn(AppContextFile, 'useAppContext').mockReturnValue({
            dispatch: jest.fn(),
            state: {
                products: [
                    {
                        name: 'Bentley mirror',
                        sku: '1105585981',
                        category: {
                            id: 'YWHyYRIAACgAykCq',
                            type: 'category',
                            tags: [],
                            lang: 'en-us',
                            slug: 'decorate',
                            first_publication_date: '2021-10-09T23:32:29+0000',
                            last_publication_date: '2021-11-18T14:27:09+0000',
                            link_type: 'Document',
                            isBroken: false
                        },
                        mainimage: {
                            dimensions: { width: 696, height: 900 },
                            alt: 'Bentley mirror',
                            copyright: null,
                            url: 'https://images.prismic.io/wizeline-academy/d060046e-6699-437e-8e46-6208ef9076b8_1.webp?auto=compress,format'
                        },
                        short_description:
                            "The affinity for mid-century décor means having a craving for minimal orientation and ultimate style. That's exactly what drew us to this bentwood-framed mirror. It's striking and seamless, and the understated walnut finish is as smooth as the frame.",
                        description: [
                            {
                                type: 'paragraph',
                                text: "The affinity for mid-century décor means having a craving for minimal orientation and ultimate style. That's exactly what drew us to this bentwood-framed mirror. It's striking and seamless, and the understated walnut finish is as smooth as the frame.",
                                spans: []
                            }
                        ],
                        specs: [
                            { spec_name: 'Color', spec_value: 'Brown' },
                            {
                                spec_name: 'Mounting Type',
                                spec_value: 'Turnstiles'
                            },
                            {
                                spec_name: 'Frame Material',
                                spec_value:
                                    'Solid boxwood with mirrored glass. Backed with MDF'
                            },
                            { spec_name: 'Style', spec_value: 'Mid century' },
                            {
                                spec_name: 'Details',
                                spec_value: 'Walnut finish'
                            },
                            { spec_name: 'Shape', spec_value: 'Round' },
                            {
                                spec_name: 'Product Weight',
                                spec_value: '11.34 kg'
                            },
                            {
                                spec_name: 'Product diameter',
                                spec_value: '101.60 cm'
                            }
                        ],
                        images: [
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/d060046e-6699-437e-8e46-6208ef9076b8_1.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/01e0c250-454a-415d-bede-848d5e5c9e7b_2.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/9d29ca75-d0aa-4345-b13e-783c1eaac61e_3.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/e3d13328-5024-4a82-8b03-18bca22090fa_4.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/26aa9259-0206-40ef-b7db-7843ffaa8772_5.webp?auto=compress,format'
                                }
                            }
                        ],
                        stock: 15,
                        price: 572,
                        numberOfItems: 1
                    },
                    {
                        name: 'Colossal Pillowcase',
                        sku: '1105597301',
                        category: {
                            id: 'YWHyYRIAACgAykCq',
                            type: 'category',
                            tags: [],
                            lang: 'en-us',
                            slug: 'decorate',
                            first_publication_date: '2021-10-09T23:32:29+0000',
                            last_publication_date: '2021-11-18T14:27:09+0000',
                            link_type: 'Document',
                            isBroken: false
                        },
                        mainimage: {
                            dimensions: { width: 696, height: 900 },
                            alt: 'Funda para Almohada Colossal',
                            copyright: null,
                            url: 'https://images.prismic.io/wizeline-academy/310cc973-3b7c-4a0b-adff-83d8606811f0_1.jpeg?auto=compress,format'
                        },
                        short_description:
                            'The chunky yarn forms a distinctive pillowcase that is extra stylish and extra cozy, yet surprisingly light and soft. Handwoven, these are the heirloom decorations your sofa never knew it needed. The front is woven in 100% acrylic, the reverse is woven in 100% cotton. The pillow has a 100% polyester lining. STANDARD 100 certified by OEKO-TEX®. Independent laboratory tested and verified safe against over 350 harmful substances. Dyed fibers for long-lasting and vibrant color. Reversible to a uniform color. Zip closure. Holds a 61cm2 fill (sold separately).',
                        description: [
                            {
                                type: 'paragraph',
                                text: 'The chunky yarn forms a distinctive pillowcase that is extra stylish and extra cozy, yet surprisingly light and soft. Handwoven, these are the heirloom decorations your sofa never knew it needed. The front is woven in 100% acrylic, the reverse is woven in 100% cotton. The pillow has a 100% polyester lining. STANDARD 100 certified by OEKO-TEX®. Independent laboratory tested and verified safe against over 350 harmful substances. Dyed fibers for long-lasting and vibrant color. Reversible to a uniform color. Zip closure. Holds a 61cm2 fill (sold separately).',
                                spans: []
                            }
                        ],
                        specs: [
                            { spec_name: 'Collection', spec_value: 'Colossal' },
                            { spec_name: 'Color', spec_value: 'Beige' },
                            {
                                spec_name: 'Dimensions',
                                spec_value: '61 cm x 61 cm'
                            }
                        ],
                        images: [
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/310cc973-3b7c-4a0b-adff-83d8606811f0_1.jpeg?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/fcdbe85a-58d4-43db-9ca0-cc61ad24527f_2.jpeg?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/4d1a2a7a-c23a-463e-9c6a-ae1dd72a440c_3.jpeg?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/daf57bdb-242f-4cf1-b19c-862f7799145b_4.jpeg?auto=compress,format'
                                }
                            }
                        ],
                        stock: 41,
                        price: 61,
                        numberOfItems: 1
                    }
                ]
            }
        });
        const mockDispatch = jest.fn();
        render(
            <AppContext.Provider value={mockDispatch}>
                <ShoppingCart />
            </AppContext.Provider>
        );

        expect(screen.getAllByTestId('product-card').length).toBe(2);
        expect(screen.getAllByTestId('cartImage').length).toBe(2);
        expect(screen.getAllByTestId('cartName').length).toBe(2);
        expect(screen.getAllByTestId('cartPriceStock').length).toBe(2);
        expect(screen.getAllByTestId('subtotal').length).toBe(2);
        expect(screen.getAllByTestId('bsTrash').length).toBe(2);
    });

    test('Validate that the cart total label displays the sum of the subtotals of all items in the cart.', async () => {
        jest.spyOn(AppContextFile, 'useAppContext').mockReturnValue({
            dispatch: jest.fn(),
            state: {
                products: [
                    {
                        name: 'Bentley mirror',
                        sku: '1105585981',
                        category: {
                            id: 'YWHyYRIAACgAykCq',
                            type: 'category',
                            tags: [],
                            lang: 'en-us',
                            slug: 'decorate',
                            first_publication_date: '2021-10-09T23:32:29+0000',
                            last_publication_date: '2021-11-18T14:27:09+0000',
                            link_type: 'Document',
                            isBroken: false
                        },
                        mainimage: {
                            dimensions: { width: 696, height: 900 },
                            alt: 'Bentley mirror',
                            copyright: null,
                            url: 'https://images.prismic.io/wizeline-academy/d060046e-6699-437e-8e46-6208ef9076b8_1.webp?auto=compress,format'
                        },
                        short_description:
                            "The affinity for mid-century décor means having a craving for minimal orientation and ultimate style. That's exactly what drew us to this bentwood-framed mirror. It's striking and seamless, and the understated walnut finish is as smooth as the frame.",
                        description: [
                            {
                                type: 'paragraph',
                                text: "The affinity for mid-century décor means having a craving for minimal orientation and ultimate style. That's exactly what drew us to this bentwood-framed mirror. It's striking and seamless, and the understated walnut finish is as smooth as the frame.",
                                spans: []
                            }
                        ],
                        specs: [
                            { spec_name: 'Color', spec_value: 'Brown' },
                            {
                                spec_name: 'Mounting Type',
                                spec_value: 'Turnstiles'
                            },
                            {
                                spec_name: 'Frame Material',
                                spec_value:
                                    'Solid boxwood with mirrored glass. Backed with MDF'
                            },
                            { spec_name: 'Style', spec_value: 'Mid century' },
                            {
                                spec_name: 'Details',
                                spec_value: 'Walnut finish'
                            },
                            { spec_name: 'Shape', spec_value: 'Round' },
                            {
                                spec_name: 'Product Weight',
                                spec_value: '11.34 kg'
                            },
                            {
                                spec_name: 'Product diameter',
                                spec_value: '101.60 cm'
                            }
                        ],
                        images: [
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/d060046e-6699-437e-8e46-6208ef9076b8_1.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/01e0c250-454a-415d-bede-848d5e5c9e7b_2.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/9d29ca75-d0aa-4345-b13e-783c1eaac61e_3.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/e3d13328-5024-4a82-8b03-18bca22090fa_4.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/26aa9259-0206-40ef-b7db-7843ffaa8772_5.webp?auto=compress,format'
                                }
                            }
                        ],
                        stock: 15,
                        price: 572,
                        numberOfItems: 1
                    },
                    {
                        name: 'Colossal Pillowcase',
                        sku: '1105597301',
                        category: {
                            id: 'YWHyYRIAACgAykCq',
                            type: 'category',
                            tags: [],
                            lang: 'en-us',
                            slug: 'decorate',
                            first_publication_date: '2021-10-09T23:32:29+0000',
                            last_publication_date: '2021-11-18T14:27:09+0000',
                            link_type: 'Document',
                            isBroken: false
                        },
                        mainimage: {
                            dimensions: { width: 696, height: 900 },
                            alt: 'Funda para Almohada Colossal',
                            copyright: null,
                            url: 'https://images.prismic.io/wizeline-academy/310cc973-3b7c-4a0b-adff-83d8606811f0_1.jpeg?auto=compress,format'
                        },
                        short_description:
                            'The chunky yarn forms a distinctive pillowcase that is extra stylish and extra cozy, yet surprisingly light and soft. Handwoven, these are the heirloom decorations your sofa never knew it needed. The front is woven in 100% acrylic, the reverse is woven in 100% cotton. The pillow has a 100% polyester lining. STANDARD 100 certified by OEKO-TEX®. Independent laboratory tested and verified safe against over 350 harmful substances. Dyed fibers for long-lasting and vibrant color. Reversible to a uniform color. Zip closure. Holds a 61cm2 fill (sold separately).',
                        description: [
                            {
                                type: 'paragraph',
                                text: 'The chunky yarn forms a distinctive pillowcase that is extra stylish and extra cozy, yet surprisingly light and soft. Handwoven, these are the heirloom decorations your sofa never knew it needed. The front is woven in 100% acrylic, the reverse is woven in 100% cotton. The pillow has a 100% polyester lining. STANDARD 100 certified by OEKO-TEX®. Independent laboratory tested and verified safe against over 350 harmful substances. Dyed fibers for long-lasting and vibrant color. Reversible to a uniform color. Zip closure. Holds a 61cm2 fill (sold separately).',
                                spans: []
                            }
                        ],
                        specs: [
                            { spec_name: 'Collection', spec_value: 'Colossal' },
                            { spec_name: 'Color', spec_value: 'Beige' },
                            {
                                spec_name: 'Dimensions',
                                spec_value: '61 cm x 61 cm'
                            }
                        ],
                        images: [
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/310cc973-3b7c-4a0b-adff-83d8606811f0_1.jpeg?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/fcdbe85a-58d4-43db-9ca0-cc61ad24527f_2.jpeg?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/4d1a2a7a-c23a-463e-9c6a-ae1dd72a440c_3.jpeg?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/daf57bdb-242f-4cf1-b19c-862f7799145b_4.jpeg?auto=compress,format'
                                }
                            }
                        ],
                        stock: 41,
                        price: 61,
                        numberOfItems: 1
                    }
                ]
            }
        });
        const mockDispatch = jest.fn();
        render(
            <AppContext.Provider value={mockDispatch}>
                <ShoppingCart />
            </AppContext.Provider>
        );

        const total = screen.getByText(/Total: /);
        expect(total.innerHTML).toContain('Total: $ 633');
    });

    test('Validate that you can update the quantity of items for a particular product in the cart. Don’t forget to validate that you don’t exceed the stock units available for the selected product.', async () => {
        jest.spyOn(AppContextFile, 'useAppContext').mockReturnValue({
            dispatch: jest.fn(),
            state: {
                products: [
                    {
                        name: 'Bentley mirror',
                        sku: '1105585981',
                        category: {
                            id: 'YWHyYRIAACgAykCq',
                            type: 'category',
                            tags: [],
                            lang: 'en-us',
                            slug: 'decorate',
                            first_publication_date: '2021-10-09T23:32:29+0000',
                            last_publication_date: '2021-11-18T14:27:09+0000',
                            link_type: 'Document',
                            isBroken: false
                        },
                        mainimage: {
                            dimensions: { width: 696, height: 900 },
                            alt: 'Bentley mirror',
                            copyright: null,
                            url: 'https://images.prismic.io/wizeline-academy/d060046e-6699-437e-8e46-6208ef9076b8_1.webp?auto=compress,format'
                        },
                        short_description:
                            "The affinity for mid-century décor means having a craving for minimal orientation and ultimate style. That's exactly what drew us to this bentwood-framed mirror. It's striking and seamless, and the understated walnut finish is as smooth as the frame.",
                        description: [
                            {
                                type: 'paragraph',
                                text: "The affinity for mid-century décor means having a craving for minimal orientation and ultimate style. That's exactly what drew us to this bentwood-framed mirror. It's striking and seamless, and the understated walnut finish is as smooth as the frame.",
                                spans: []
                            }
                        ],
                        specs: [
                            { spec_name: 'Color', spec_value: 'Brown' },
                            {
                                spec_name: 'Mounting Type',
                                spec_value: 'Turnstiles'
                            },
                            {
                                spec_name: 'Frame Material',
                                spec_value:
                                    'Solid boxwood with mirrored glass. Backed with MDF'
                            },
                            { spec_name: 'Style', spec_value: 'Mid century' },
                            {
                                spec_name: 'Details',
                                spec_value: 'Walnut finish'
                            },
                            { spec_name: 'Shape', spec_value: 'Round' },
                            {
                                spec_name: 'Product Weight',
                                spec_value: '11.34 kg'
                            },
                            {
                                spec_name: 'Product diameter',
                                spec_value: '101.60 cm'
                            }
                        ],
                        images: [
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/d060046e-6699-437e-8e46-6208ef9076b8_1.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/01e0c250-454a-415d-bede-848d5e5c9e7b_2.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/9d29ca75-d0aa-4345-b13e-783c1eaac61e_3.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/e3d13328-5024-4a82-8b03-18bca22090fa_4.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/26aa9259-0206-40ef-b7db-7843ffaa8772_5.webp?auto=compress,format'
                                }
                            }
                        ],
                        stock: 15,
                        price: 572,
                        numberOfItems: 14
                    }
                ]
            }
        });
        const mockDispatch = jest.fn();
        render(
            <AppContext.Provider value={mockDispatch}>
                <ShoppingCart />
            </AppContext.Provider>
        );

        fireEvent.click(screen.getByTestId('cartIncrement'));
        expect(screen.getByTestId('productQty')).toHaveTextContent('15');
        expect(screen.getByTestId('cartIncrement')).toBeDisabled();
    });

    test('Validate that you can update the quantity of items for a particular product in the cart.', async () => {
        jest.spyOn(AppContextFile, 'useAppContext').mockReturnValue({
            dispatch: jest.fn(),
            state: {
                products: [
                    {
                        name: 'Bentley mirror',
                        sku: '1105585981',
                        category: {
                            id: 'YWHyYRIAACgAykCq',
                            type: 'category',
                            tags: [],
                            lang: 'en-us',
                            slug: 'decorate',
                            first_publication_date: '2021-10-09T23:32:29+0000',
                            last_publication_date: '2021-11-18T14:27:09+0000',
                            link_type: 'Document',
                            isBroken: false
                        },
                        mainimage: {
                            dimensions: { width: 696, height: 900 },
                            alt: 'Bentley mirror',
                            copyright: null,
                            url: 'https://images.prismic.io/wizeline-academy/d060046e-6699-437e-8e46-6208ef9076b8_1.webp?auto=compress,format'
                        },
                        short_description:
                            "The affinity for mid-century décor means having a craving for minimal orientation and ultimate style. That's exactly what drew us to this bentwood-framed mirror. It's striking and seamless, and the understated walnut finish is as smooth as the frame.",
                        description: [
                            {
                                type: 'paragraph',
                                text: "The affinity for mid-century décor means having a craving for minimal orientation and ultimate style. That's exactly what drew us to this bentwood-framed mirror. It's striking and seamless, and the understated walnut finish is as smooth as the frame.",
                                spans: []
                            }
                        ],
                        specs: [
                            { spec_name: 'Color', spec_value: 'Brown' },
                            {
                                spec_name: 'Mounting Type',
                                spec_value: 'Turnstiles'
                            },
                            {
                                spec_name: 'Frame Material',
                                spec_value:
                                    'Solid boxwood with mirrored glass. Backed with MDF'
                            },
                            { spec_name: 'Style', spec_value: 'Mid century' },
                            {
                                spec_name: 'Details',
                                spec_value: 'Walnut finish'
                            },
                            { spec_name: 'Shape', spec_value: 'Round' },
                            {
                                spec_name: 'Product Weight',
                                spec_value: '11.34 kg'
                            },
                            {
                                spec_name: 'Product diameter',
                                spec_value: '101.60 cm'
                            }
                        ],
                        images: [
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/d060046e-6699-437e-8e46-6208ef9076b8_1.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/01e0c250-454a-415d-bede-848d5e5c9e7b_2.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/9d29ca75-d0aa-4345-b13e-783c1eaac61e_3.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/e3d13328-5024-4a82-8b03-18bca22090fa_4.webp?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/26aa9259-0206-40ef-b7db-7843ffaa8772_5.webp?auto=compress,format'
                                }
                            }
                        ],
                        stock: 15,
                        price: 572,
                        numberOfItems: 14
                    }
                ]
            }
        });
        const mockDispatch = jest.fn();
        render(
            <AppContext.Provider value={mockDispatch}>
                <ShoppingCart />
            </AppContext.Provider>
        );

        fireEvent.click(screen.getByTestId('cartIncrement'));
        expect(screen.getByTestId('productQty')).toHaveTextContent('15');
        expect(screen.getByTestId('cartIncrement')).toBeDisabled();
    });

    test('Validate that you can remove a product from the cart after clicking on the “remove from cart icon.', async () => {
        jest.spyOn(AppContextFile, 'useAppContext').mockReturnValue({
            dispatch: jest.fn(),
            state: {
                products: [
                    {
                        name: 'Colossal Pillowcase',
                        sku: '1105597301',
                        category: {
                            id: 'YWHyYRIAACgAykCq',
                            type: 'category',
                            tags: [],
                            lang: 'en-us',
                            slug: 'decorate',
                            first_publication_date: '2021-10-09T23:32:29+0000',
                            last_publication_date: '2021-11-18T14:27:09+0000',
                            link_type: 'Document',
                            isBroken: false
                        },
                        mainimage: {
                            dimensions: { width: 696, height: 900 },
                            alt: 'Funda para Almohada Colossal',
                            copyright: null,
                            url: 'https://images.prismic.io/wizeline-academy/310cc973-3b7c-4a0b-adff-83d8606811f0_1.jpeg?auto=compress,format'
                        },
                        short_description:
                            'The chunky yarn forms a distinctive pillowcase that is extra stylish and extra cozy, yet surprisingly light and soft. Handwoven, these are the heirloom decorations your sofa never knew it needed. The front is woven in 100% acrylic, the reverse is woven in 100% cotton. The pillow has a 100% polyester lining. STANDARD 100 certified by OEKO-TEX®. Independent laboratory tested and verified safe against over 350 harmful substances. Dyed fibers for long-lasting and vibrant color. Reversible to a uniform color. Zip closure. Holds a 61cm2 fill (sold separately).',
                        description: [
                            {
                                type: 'paragraph',
                                text: 'The chunky yarn forms a distinctive pillowcase that is extra stylish and extra cozy, yet surprisingly light and soft. Handwoven, these are the heirloom decorations your sofa never knew it needed. The front is woven in 100% acrylic, the reverse is woven in 100% cotton. The pillow has a 100% polyester lining. STANDARD 100 certified by OEKO-TEX®. Independent laboratory tested and verified safe against over 350 harmful substances. Dyed fibers for long-lasting and vibrant color. Reversible to a uniform color. Zip closure. Holds a 61cm2 fill (sold separately).',
                                spans: []
                            }
                        ],
                        specs: [
                            { spec_name: 'Collection', spec_value: 'Colossal' },
                            { spec_name: 'Color', spec_value: 'Beige' },
                            {
                                spec_name: 'Dimensions',
                                spec_value: '61 cm x 61 cm'
                            }
                        ],
                        images: [
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/310cc973-3b7c-4a0b-adff-83d8606811f0_1.jpeg?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/fcdbe85a-58d4-43db-9ca0-cc61ad24527f_2.jpeg?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/4d1a2a7a-c23a-463e-9c6a-ae1dd72a440c_3.jpeg?auto=compress,format'
                                }
                            },
                            {
                                image: {
                                    dimensions: { width: 696, height: 900 },
                                    alt: null,
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/daf57bdb-242f-4cf1-b19c-862f7799145b_4.jpeg?auto=compress,format'
                                }
                            }
                        ],
                        stock: 41,
                        price: 61,
                        numberOfItems: 1
                    }
                ]
            }
        });
        const mockDispatch = jest.fn();
        render(
            <AppContext.Provider value={mockDispatch}>
                <ShoppingCart />
            </AppContext.Provider>
        );

        fireEvent.click(screen.getByTestId('bsTrash'));
        expect(screen.getByText(/Your Cart is Empty/i)).toBeTruthy();
    });
});
