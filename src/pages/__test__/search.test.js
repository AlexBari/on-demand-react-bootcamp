import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { waitFor, screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as reactRouter from 'react-router';
import * as ProductsMock from '../../utils/hooks/useProducts';
import AppContext from '../../utils/appContext';
import SearchPage from '../search';

/* 
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useSearchParams: jest.fn()
}));
 */
describe('Product List Page tests: ', () => {
    const navigate = jest.fn();
    beforeEach(() => {
        jest.spyOn(reactRouter, 'useNavigate').mockImplementation(
            () => navigate
        );
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Validate that an empty state is displayed when there are no results for the “searchTerm” provided.', async () => {
        const mockDispatch = jest.fn();
        const productSpy = jest.spyOn(ProductsMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 20,
                results_size: 0,
                total_results_size: 0,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });
        window.history.pushState({}, 'Test', '/search?q=test');
        const { debug } = render(
            <AppContext.Provider value={mockDispatch}>
                <Router>
                    <SearchPage />
                </Router>
            </AppContext.Provider>
        );
        debug();
        await waitFor(() => {
            expect(productSpy).toBeCalledTimes(2);
            expect(
                screen.getByText(
                    /Sorry! No products were found for "test" .../i
                )
            ).toBeTruthy();
        });
    });

    test('Validate that the list of results is rendering data according to the “searchTerm” provided', async () => {
        const mockDispatch = jest.fn();
        const productSpy = jest.spyOn(ProductsMock, 'default').mockReturnValue({
            isLoading: false,
            data: {
                page: 1,
                results_per_page: 20,
                results_size: 6,
                total_results_size: 6,
                total_pages: 1,
                next_page: null,
                prev_page: null,
                results: [
                    {
                        id: 'YZaBuRIAACsAvnN-',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZaBuRIAACsAvnN-%22%29+%5D%5D',
                        tags: ['Lamps'],
                        first_publication_date: '2021-11-18T16:39:24+0000',
                        last_publication_date: '2021-11-18T16:39:24+0000',
                        slugs: [
                            'paxton-pendant-lamp',
                            'lampara-colgante-paxton'
                        ],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZaBWRIAAC4AvnG1',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Paxton Pendant Lamp',
                            sku: '1083937920',
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
                                    width: 940,
                                    height: 1215
                                },
                                alt: 'Paxton Pendant Lamp',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/72e1dd40-3880-4485-9bfd-5b9042330414_5.webp?auto=compress,format'
                            },
                            short_description:
                                'Blown glass in an eclectic mix of shapes, the shades of our pendant light have a soft mottled texture and a subtle green hue. Each glass lamp is suspended from a round cover with black fabric cable. Made of molded glass and steel finished with bronze. Professional installation is recommended. Each lamp is sold separately.',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Blown glass in an eclectic mix of shapes, the shades of our pendant light have a soft mottled texture and a subtle green hue. Each glass lamp is suspended from a round cover with black fabric cable. Made of molded glass and steel finished with bronze. Professional installation is recommended. Each lamp is sold separately.',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Care and Cleaning Instructions',
                                    spec_value:
                                        'Clean with a soft, dry cloth. To protect the finish, do not apply abrasives or household cleaners. Do not exceed the specified power'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/81c6238c-1409-4a3b-b095-ef1b8fae4cc6_1.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/3f987996-cf7e-458f-82ba-c530eb10f3cd_2.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/f74990c9-5b99-43f0-ba16-2db801ecf58a_3.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/7ac48c95-3dad-4124-86b3-909fa14eaf54_4.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/72e1dd40-3880-4485-9bfd-5b9042330414_5.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 22,
                            price: 106
                        }
                    },
                    {
                        id: 'YZZ47hIAACwAvkwF',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ47hIAACwAvkwF%22%29+%5D%5D',
                        tags: ['Lámparas'],
                        first_publication_date: '2021-11-18T16:01:53+0000',
                        last_publication_date: '2021-11-18T16:01:53+0000',
                        slugs: [
                            'large-table-lamp-mallorca',
                            'lampara-grande-de-mesa-mallorca'
                        ],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ4uxIAAC0AvksM',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Large Table Lamp Mallorca',
                            sku: '1074277663',
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
                                    width: 940,
                                    height: 1215
                                },
                                alt: 'Large Table Lamp Mallorca',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/23a87a85-5138-40ea-b205-5eb0825d3bed_1.webp?auto=compress,format'
                            },
                            short_description:
                                'The thick recycled Spanish glass in the Mallorca lamp features an aqua tint that highlights the appeal of its subtle profile. Combine it with one of our screens (sold separately) and place it on a console or buffet to create ambient lighting. Made from recycled clear glass. Combine with any of our Small or Extra Large Mix & Match screens (all screens sold separately). On / off switch.',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'The thick recycled Spanish glass in the Mallorca lamp features an aqua tint that highlights the appeal of its subtle profile. Combine it with one of our screens (sold separately) and place it on a console or buffet to create ambient lighting. Made from recycled clear glass. Combine with any of our Small or Extra Large Mix & Match screens (all screens sold separately). On / off switch.',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Material',
                                    spec_value: 'Glass'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/23a87a85-5138-40ea-b205-5eb0825d3bed_1.webp?auto=compress,format'
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
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/bf070d2f-96af-46e2-a42b-0093074f0b45_3.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/4f03b015-a1ad-4add-8ad1-582d612ca9af_4.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/211971c5-9ef8-455a-a077-0249a40ba9d0_5.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/ad36b230-6b12-4843-9b92-b3e7f7d438ec_6.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 7,
                            price: 205
                        }
                    },
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
                    },
                    {
                        id: 'YZZ3phIAACgAvkYv',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ3phIAACgAvkYv%22%29+%5D%5D',
                        tags: ['Lamps'],
                        first_publication_date: '2021-11-18T15:56:25+0000',
                        last_publication_date: '2021-11-18T15:56:25+0000',
                        slugs: ['murano-table-lamp', 'lampara-de-mesa-murano'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ3PRIAACwAvkTm',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Murano Table Lamp',
                            sku: '1083869681',
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
                                    width: 940,
                                    height: 1215
                                },
                                alt: 'Murano Table Lamp',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/ce8efa73-3c5e-4888-8e1b-71241900f2bf_1.webp?auto=compress,format'
                            },
                            short_description:
                                'Thick metal bands surround our blown glass chandelier to give it a rustic, handcrafted look that gives it a warm glow in a variety of settings. Made from blown glass with a bronze coated aluminum band covering the top and bottom. The hand-applied finish is polished, stained and sealed with lacquer. On / off switch. This lamp fits our Pottery Barn lampshades. The screen is sold separately.',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Thick metal bands surround our blown glass chandelier to give it a rustic, handcrafted look that gives it a warm glow in a variety of settings. Made from blown glass with a bronze coated aluminum band covering the top and bottom. The hand-applied finish is polished, stained and sealed with lacquer. On / off switch. This lamp fits our Pottery Barn lampshades. The screen is sold separately.',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Base Depth',
                                    spec_value: '20.32 cm'
                                },
                                {
                                    spec_name: 'Screen Height',
                                    spec_value: '43.81 cm'
                                },
                                {
                                    spec_name: 'Base Width',
                                    spec_value: '20 cm'
                                },
                                {
                                    spec_name: 'Base material',
                                    spec_value: 'Metal and glass'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/ce8efa73-3c5e-4888-8e1b-71241900f2bf_1.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/542486de-8dd6-4f7e-bf64-c00f75244ee5_2.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/f5847230-f8e6-4c86-976a-832a97fcff12_3.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/7234689e-31fa-457f-931d-b2e9af5f2968_4.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/fb59c75d-ecac-4795-81f3-91bdf5f7b0d6_5.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/74ea8538-8072-49cf-a0a9-eb1753ccd010_6.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/83070749-306a-4f24-b490-caafdd21475f_7.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/4b50f190-db71-4b7b-9060-2a5043aaa752_8.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/a83d4e71-2604-4190-8e1e-22d664f351fd_9.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 17,
                            price: 135
                        }
                    },
                    {
                        id: 'YZZ7LxIAACkAvlRg',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ7LxIAACkAvlRg%22%29+%5D%5D',
                        tags: ['Lamps'],
                        first_publication_date: '2021-11-18T16:11:30+0000',
                        last_publication_date: '2021-11-18T16:11:30+0000',
                        slugs: ['carter-table-lamp', 'lampara-de-mesa-carter'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ66BIAACkAvlMa',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Carter Table Lamp',
                            sku: '1067011721',
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
                                    width: 940,
                                    height: 1215
                                },
                                alt: 'Carter Table Lamp',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/7298f72f-6be4-43a3-950b-eed75ad76827_1.webp?auto=compress,format'
                            },
                            short_description:
                                'Finished in brass and champagne, the elongated, open frame gives our Carter collection its graceful appearance. The delicate geometric design takes up little space and has French wiring for a classic accent. Made of steel with a hand applied champagne brass finish. Power switch in socket. Screen not included.',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Finished in brass and champagne, the elongated, open frame gives our Carter collection its graceful appearance. The delicate geometric design takes up little space and has French wiring for a classic accent. Made of steel with a hand applied champagne brass finish. Power switch in socket. Screen not included.',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Collection',
                                    spec_value: 'Carter'
                                },
                                {
                                    spec_name: 'Color',
                                    spec_value: 'Gold'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/7298f72f-6be4-43a3-950b-eed75ad76827_1.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/8f1bd566-0691-41ce-a091-fea2758800a8_2.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 39,
                            price: 164
                        }
                    },
                    {
                        id: 'YZZ8QRIAACsAvlld',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ8QRIAACsAvlld%22%29+%5D%5D',
                        tags: ['Lamps'],
                        first_publication_date: '2021-11-18T16:16:04+0000',
                        last_publication_date: '2021-11-18T16:16:04+0000',
                        slugs: ['carter-floor-lamp', 'lampara-de-piso-carter'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ8CBIAAC8AvlhR',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Carter Floor Lamp',
                            sku: '1067005101',
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
                                    width: 940,
                                    height: 1215
                                },
                                alt: 'Carter Floor Lamp',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/e4a2c50e-0578-4f2e-a7f7-4a5cb49f82bb_1.webp?auto=compress,format'
                            },
                            short_description:
                                'Finished in brass and champagne, the elongated, open frame gives our Carter collection its graceful appearance. The delicate geometric design takes up little space and has French wiring for a classic accent. Made of steel. Hand finished in brass. Power switch located in socket. Dimensions: General (without lampshade): 36.20 cm diameter x 1.70 m high. Finishing: 3.18 cm in diameter. Harp: 29.85 cm. Cable: 3.35 m. Spotlight (1): 9 Watt LED (included); it also accommodates a 75 Watt Type A (not included).',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Finished in brass and champagne, the elongated, open frame gives our Carter collection its graceful appearance. The delicate geometric design takes up little space and has French wiring for a classic accent. Made of steel. Hand finished in brass. Power switch located in socket. Dimensions: General (without lampshade): 36.20 cm diameter x 1.70 m high. Finishing: 3.18 cm in diameter. Harp: 29.85 cm. Cable: 3.35 m. Spotlight (1): 9 Watt LED (included); it also accommodates a 75 Watt Type A (not included).',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Color',
                                    spec_value: 'Gold'
                                }
                            ],
                            images: [
                                {
                                    image: {
                                        dimensions: {
                                            width: 940,
                                            height: 1215
                                        },
                                        alt: null,
                                        copyright: null,
                                        url: 'https://images.prismic.io/wizeline-academy/e4a2c50e-0578-4f2e-a7f7-4a5cb49f82bb_1.webp?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/f80196e8-8dd1-45af-a177-8303c63275ef_2.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/54b15d11-955c-4579-95c8-7429097383db_3.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/62be7f3f-4865-4938-83b4-84469e878ff4_4.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/ceec39f7-ad97-4623-841f-d8de5aac0fc5_5.webp?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 46,
                            price: 369
                        }
                    }
                ],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });
        window.history.pushState({}, 'Test', '/search?q=Lamp');
        render(
            <AppContext.Provider value={mockDispatch}>
                <Router>
                    <SearchPage />
                </Router>
            </AppContext.Provider>
        );
        await waitFor(() => {
            expect(productSpy).toBeCalledTimes(2);
            expect(screen.getAllByText(/Lamp/i).length).toBe(6);
        });
    });
});
