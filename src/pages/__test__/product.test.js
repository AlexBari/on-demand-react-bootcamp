import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as CategoriesMock from '../../utils/hooks/useFeaturedCategories';
import * as ProductsMock from '../../utils/hooks/useProducts';
import AppContext from '../../utils/appContext';
import ProductsPage from '../products';

describe('Product List Page tests: ', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Product Category Sidebar is fetching and rendering data from the API', async () => {
        const mockDispatch = jest.fn();

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
                        },
                        {
                            id: 'YWHy0xIAACoAykKm',
                            uid: null,
                            url: null,
                            type: 'category',
                            href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHy0xIAACoAykKm%22%29+%5D%5D',
                            tags: [],
                            first_publication_date: '2021-10-09T23:32:20+0000',
                            last_publication_date: '2021-10-13T00:04:48+0000',
                            slugs: ['lighting'],
                            linked_documents: [],
                            lang: 'en-us',
                            alternate_languages: [
                                {
                                    id: 'YWHytRIAACoAykIk',
                                    type: 'category',
                                    lang: 'es-mx'
                                }
                            ],
                            data: {
                                name: 'Lighting',
                                main_image: {
                                    dimensions: {
                                        width: 621,
                                        height: 398
                                    },
                                    alt: 'Lighting',
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/fdc4897a-c224-450f-9378-a39d2afaa7f6_zero-take-uLcBn2TsavU-unsplash-web+%281%29.jpg?auto=compress,format&rect=1,0,1919,1230&w=621&h=398'
                                }
                            }
                        },
                        {
                            id: 'YWHxkhIAAC4Ayj0J',
                            uid: null,
                            url: null,
                            type: 'category',
                            href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHxkhIAAC4Ayj0J%22%29+%5D%5D',
                            tags: [],
                            first_publication_date: '2021-10-09T23:33:27+0000',
                            last_publication_date: '2021-10-12T23:35:55+0000',
                            slugs: ['kitchen'],
                            linked_documents: [],
                            lang: 'en-us',
                            alternate_languages: [
                                {
                                    id: 'YWHxhBIAAC8AyjzE',
                                    type: 'category',
                                    lang: 'es-mx'
                                }
                            ],
                            data: {
                                name: 'Kitchen',
                                main_image: {
                                    dimensions: {
                                        width: 621,
                                        height: 398
                                    },
                                    alt: 'Kitchen',
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/650366df-0405-4712-bd3b-2703d87e7a61_watermark-designs-XL6gfkLmkOw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,26,1920,1231&w=621&h=398'
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
                <Router>
                    <ProductsPage />
                </Router>
            </AppContext.Provider>
        );

        await waitFor(async () => {
            expect(CategoriesSpy).toBeCalledTimes(2);
            const sideBar = await screen.findByTestId('categoryFilterBar');
            expect(sideBar.childElementCount).toBe(3);
        });
    });

    test('Category links on Product Category Sidebar are filtering Products Grid correctly interacting with the API', async () => {
        const mockDispatch = jest.fn();

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
                    },
                    {
                        id: 'YWHy0xIAACoAykKm',
                        uid: null,
                        url: null,
                        type: 'category',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHy0xIAACoAykKm%22%29+%5D%5D',
                        tags: [],
                        first_publication_date: '2021-10-09T23:32:20+0000',
                        last_publication_date: '2021-10-13T00:04:48+0000',
                        slugs: ['lighting'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YWHytRIAACoAykIk',
                                type: 'category',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Lighting',
                            main_image: {
                                dimensions: {
                                    width: 621,
                                    height: 398
                                },
                                alt: 'Lighting',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/fdc4897a-c224-450f-9378-a39d2afaa7f6_zero-take-uLcBn2TsavU-unsplash-web+%281%29.jpg?auto=compress,format&rect=1,0,1919,1230&w=621&h=398'
                            }
                        }
                    },
                    {
                        id: 'YWHxkhIAAC4Ayj0J',
                        uid: null,
                        url: null,
                        type: 'category',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHxkhIAAC4Ayj0J%22%29+%5D%5D',
                        tags: [],
                        first_publication_date: '2021-10-09T23:33:27+0000',
                        last_publication_date: '2021-10-12T23:35:55+0000',
                        slugs: ['kitchen'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YWHxhBIAAC8AyjzE',
                                type: 'category',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Kitchen',
                            main_image: {
                                dimensions: {
                                    width: 621,
                                    height: 398
                                },
                                alt: 'Kitchen',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/650366df-0405-4712-bd3b-2703d87e7a61_watermark-designs-XL6gfkLmkOw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,26,1920,1231&w=621&h=398'
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
                results_per_page: 4,
                results_size: 4,
                total_results_size: 8,
                total_pages: 2,
                next_page:
                    'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D%26q%3D%5B%5Bat%28document.tags%2C%5B%22Featured%22%5D%29%5D%5D&page=2&pageSize=16&languageCode=en-us',
                prev_page: null,
                results: [
                    {
                        id: 'YZZ_XhIAAC0AvmiA',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ_XhIAAC0AvmiA%22%29+%5D%5D',
                        tags: ['Living Room', 'Christmas', 'Featured'],
                        first_publication_date: '2021-11-18T16:29:23+0000',
                        last_publication_date: '2021-11-18T16:29:23+0000',
                        slugs: [
                            'fair-isle-snowflake-lumbar-cushion-cover',
                            'funda-para-cojin-fair-isle-snowflake-lumbar'
                        ],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ_BxIAAC0Avmbq',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Fair Isle Snowflake Lumbar Cushion Cover',
                            sku: '1107982309',
                            category: {
                                id: 'YWHyYRIAACgAykCq',
                                type: 'category',
                                tags: [],
                                lang: 'en-us',
                                slug: 'decorate',
                                first_publication_date:
                                    '2021-10-09T23:32:29+0000',
                                last_publication_date:
                                    '2021-11-18T14:27:09+0000',
                                link_type: 'Document',
                                isBroken: false
                            },
                            mainimage: {
                                dimensions: {
                                    width: 696,
                                    height: 900
                                },
                                alt: 'Fair Isle Snowflake Lumbar Cushion Cover',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format'
                            },
                            short_description:
                                'Keeping a distinctive complex pattern without being complicated involves choosing a simple palette. The poinsettia red and ivory white in this cushion cover are two lovely colors that we enjoy all season long. The sweater-like snowflake design celebrates more than one type of holiday (reverse is sherpa-like sheepskin). Make it a snow day. The front is made of 100% yarn-dyed acrylic; It is reversed to 100% recycled polyester sherpa in white. Yarn dyed fabric has amazing vivid colors that keep their radiance over time. Holds 16 "x 26" fill (sold separately).',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Keeping a distinctive complex pattern without being complicated involves choosing a simple palette. The poinsettia red and ivory white in this cushion cover are two lovely colors that we enjoy all season long. The sweater-like snowflake design celebrates more than one type of holiday (reverse is sherpa-like sheepskin). Make it a snow day. The front is made of 100% yarn-dyed acrylic; It is reversed to 100% recycled polyester sherpa in white. Yarn dyed fabric has amazing vivid colors that keep their radiance over time. Holds 16 "x 26" fill (sold separately).',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Dimensions',
                                    spec_value:
                                        '40.26 cm high x 66 cm wide. Zipper: Approximately 61 cm long'
                                },
                                {
                                    spec_name: 'Collection',
                                    spec_value: 'Fair Isle Snowflake Lumbar'
                                },
                                {
                                    spec_name: 'Other information',
                                    spec_value:
                                        'Machine wash cold, inside out, on delicate cycle. Use only non-chlorine bleach, if necessary. Tumble dry on low temperature, remove immediately. Use warm iron as needed.'
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
                                        url: 'https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/741e500e-4a74-4634-b544-06fe48115cbc_2.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/f4645f8e-fc25-4c6f-9d28-38abb7abcace_3.jpeg?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 48,
                            price: 40
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
                    }
                ],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });

        render(
            <AppContext.Provider value={mockDispatch}>
                <Router>
                    <ProductsPage />
                </Router>
            </AppContext.Provider>
        );
        fireEvent.click(screen.getByTestId('cat-Decorate'));
        await waitFor(async () => {
            const products = await screen.findByTestId('productsList');
            expect(products.childElementCount).toBe(1);
        });
    });

    test(`Pagination Controls are generated correctly based on the number of results fetched from the API and the maximum number of products per page`, async () => {
        const mockDispatch = jest.fn();

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
                    },
                    {
                        id: 'YWHy0xIAACoAykKm',
                        uid: null,
                        url: null,
                        type: 'category',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHy0xIAACoAykKm%22%29+%5D%5D',
                        tags: [],
                        first_publication_date: '2021-10-09T23:32:20+0000',
                        last_publication_date: '2021-10-13T00:04:48+0000',
                        slugs: ['lighting'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YWHytRIAACoAykIk',
                                type: 'category',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Lighting',
                            main_image: {
                                dimensions: {
                                    width: 621,
                                    height: 398
                                },
                                alt: 'Lighting',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/fdc4897a-c224-450f-9378-a39d2afaa7f6_zero-take-uLcBn2TsavU-unsplash-web+%281%29.jpg?auto=compress,format&rect=1,0,1919,1230&w=621&h=398'
                            }
                        }
                    },
                    {
                        id: 'YWHxkhIAAC4Ayj0J',
                        uid: null,
                        url: null,
                        type: 'category',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHxkhIAAC4Ayj0J%22%29+%5D%5D',
                        tags: [],
                        first_publication_date: '2021-10-09T23:33:27+0000',
                        last_publication_date: '2021-10-12T23:35:55+0000',
                        slugs: ['kitchen'],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YWHxhBIAAC8AyjzE',
                                type: 'category',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Kitchen',
                            main_image: {
                                dimensions: {
                                    width: 621,
                                    height: 398
                                },
                                alt: 'Kitchen',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/650366df-0405-4712-bd3b-2703d87e7a61_watermark-designs-XL6gfkLmkOw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,26,1920,1231&w=621&h=398'
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
                results_per_page: 4,
                results_size: 4,
                total_results_size: 8,
                total_pages: 2,
                next_page:
                    'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D%26q%3D%5B%5Bat%28document.tags%2C%5B%22Featured%22%5D%29%5D%5D&page=2&pageSize=16&languageCode=en-us',
                prev_page: null,
                results: [
                    {
                        id: 'YZZ_XhIAAC0AvmiA',
                        uid: null,
                        url: null,
                        type: 'product',
                        href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ_XhIAAC0AvmiA%22%29+%5D%5D',
                        tags: ['Living Room', 'Christmas', 'Featured'],
                        first_publication_date: '2021-11-18T16:29:23+0000',
                        last_publication_date: '2021-11-18T16:29:23+0000',
                        slugs: [
                            'fair-isle-snowflake-lumbar-cushion-cover',
                            'funda-para-cojin-fair-isle-snowflake-lumbar'
                        ],
                        linked_documents: [],
                        lang: 'en-us',
                        alternate_languages: [
                            {
                                id: 'YZZ_BxIAAC0Avmbq',
                                type: 'product',
                                lang: 'es-mx'
                            }
                        ],
                        data: {
                            name: 'Fair Isle Snowflake Lumbar Cushion Cover',
                            sku: '1107982309',
                            category: {
                                id: 'YWHyYRIAACgAykCq',
                                type: 'category',
                                tags: [],
                                lang: 'en-us',
                                slug: 'decorate',
                                first_publication_date:
                                    '2021-10-09T23:32:29+0000',
                                last_publication_date:
                                    '2021-11-18T14:27:09+0000',
                                link_type: 'Document',
                                isBroken: false
                            },
                            mainimage: {
                                dimensions: {
                                    width: 696,
                                    height: 900
                                },
                                alt: 'Fair Isle Snowflake Lumbar Cushion Cover',
                                copyright: null,
                                url: 'https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format'
                            },
                            short_description:
                                'Keeping a distinctive complex pattern without being complicated involves choosing a simple palette. The poinsettia red and ivory white in this cushion cover are two lovely colors that we enjoy all season long. The sweater-like snowflake design celebrates more than one type of holiday (reverse is sherpa-like sheepskin). Make it a snow day. The front is made of 100% yarn-dyed acrylic; It is reversed to 100% recycled polyester sherpa in white. Yarn dyed fabric has amazing vivid colors that keep their radiance over time. Holds 16 "x 26" fill (sold separately).',
                            description: [
                                {
                                    type: 'paragraph',
                                    text: 'Keeping a distinctive complex pattern without being complicated involves choosing a simple palette. The poinsettia red and ivory white in this cushion cover are two lovely colors that we enjoy all season long. The sweater-like snowflake design celebrates more than one type of holiday (reverse is sherpa-like sheepskin). Make it a snow day. The front is made of 100% yarn-dyed acrylic; It is reversed to 100% recycled polyester sherpa in white. Yarn dyed fabric has amazing vivid colors that keep their radiance over time. Holds 16 "x 26" fill (sold separately).',
                                    spans: []
                                }
                            ],
                            specs: [
                                {
                                    spec_name: 'Dimensions',
                                    spec_value:
                                        '40.26 cm high x 66 cm wide. Zipper: Approximately 61 cm long'
                                },
                                {
                                    spec_name: 'Collection',
                                    spec_value: 'Fair Isle Snowflake Lumbar'
                                },
                                {
                                    spec_name: 'Other information',
                                    spec_value:
                                        'Machine wash cold, inside out, on delicate cycle. Use only non-chlorine bleach, if necessary. Tumble dry on low temperature, remove immediately. Use warm iron as needed.'
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
                                        url: 'https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/741e500e-4a74-4634-b544-06fe48115cbc_2.jpeg?auto=compress,format'
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
                                        url: 'https://images.prismic.io/wizeline-academy/f4645f8e-fc25-4c6f-9d28-38abb7abcace_3.jpeg?auto=compress,format'
                                    }
                                }
                            ],
                            stock: 48,
                            price: 40
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
                    }
                ],
                version: '73ae4f1',
                license:
                    'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
            }
        });

        render(
            <AppContext.Provider value={mockDispatch}>
                <Router>
                    <ProductsPage />
                </Router>
            </AppContext.Provider>
        );

        await waitFor(async () => {
            // Prev button is disabled when the user is on the first page
            const prevButton = screen.getByText('Prev');
            expect(prevButton).toBeDisabled();

            jest.clearAllMocks();

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
                        },
                        {
                            id: 'YWHy0xIAACoAykKm',
                            uid: null,
                            url: null,
                            type: 'category',
                            href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHy0xIAACoAykKm%22%29+%5D%5D',
                            tags: [],
                            first_publication_date: '2021-10-09T23:32:20+0000',
                            last_publication_date: '2021-10-13T00:04:48+0000',
                            slugs: ['lighting'],
                            linked_documents: [],
                            lang: 'en-us',
                            alternate_languages: [
                                {
                                    id: 'YWHytRIAACoAykIk',
                                    type: 'category',
                                    lang: 'es-mx'
                                }
                            ],
                            data: {
                                name: 'Lighting',
                                main_image: {
                                    dimensions: {
                                        width: 621,
                                        height: 398
                                    },
                                    alt: 'Lighting',
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/fdc4897a-c224-450f-9378-a39d2afaa7f6_zero-take-uLcBn2TsavU-unsplash-web+%281%29.jpg?auto=compress,format&rect=1,0,1919,1230&w=621&h=398'
                                }
                            }
                        },
                        {
                            id: 'YWHxkhIAAC4Ayj0J',
                            uid: null,
                            url: null,
                            type: 'category',
                            href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHxkhIAAC4Ayj0J%22%29+%5D%5D',
                            tags: [],
                            first_publication_date: '2021-10-09T23:33:27+0000',
                            last_publication_date: '2021-10-12T23:35:55+0000',
                            slugs: ['kitchen'],
                            linked_documents: [],
                            lang: 'en-us',
                            alternate_languages: [
                                {
                                    id: 'YWHxhBIAAC8AyjzE',
                                    type: 'category',
                                    lang: 'es-mx'
                                }
                            ],
                            data: {
                                name: 'Kitchen',
                                main_image: {
                                    dimensions: {
                                        width: 621,
                                        height: 398
                                    },
                                    alt: 'Kitchen',
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/650366df-0405-4712-bd3b-2703d87e7a61_watermark-designs-XL6gfkLmkOw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,26,1920,1231&w=621&h=398'
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
                    page: 2,
                    results_per_page: 4,
                    results_size: 8,
                    total_results_size: 8,
                    total_pages: 2,
                    next_page:
                        'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D%26q%3D%5B%5Bat%28document.tags%2C%5B%22Featured%22%5D%29%5D%5D&page=1&pageSize=4&languageCode=en-us',
                    prev_page: null,
                    results: [
                        {
                            id: 'YZZ_XhIAAC0AvmiA',
                            uid: null,
                            url: null,
                            type: 'product',
                            href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ_XhIAAC0AvmiA%22%29+%5D%5D',
                            tags: ['Living Room', 'Christmas', 'Featured'],
                            first_publication_date: '2021-11-18T16:29:23+0000',
                            last_publication_date: '2021-11-18T16:29:23+0000',
                            slugs: [
                                'fair-isle-snowflake-lumbar-cushion-cover',
                                'funda-para-cojin-fair-isle-snowflake-lumbar'
                            ],
                            linked_documents: [],
                            lang: 'en-us',
                            alternate_languages: [
                                {
                                    id: 'YZZ_BxIAAC0Avmbq',
                                    type: 'product',
                                    lang: 'es-mx'
                                }
                            ],
                            data: {
                                name: 'Fair Isle Snowflake Lumbar Cushion Cover',
                                sku: '1107982309',
                                category: {
                                    id: 'YWHyYRIAACgAykCq',
                                    type: 'category',
                                    tags: [],
                                    lang: 'en-us',
                                    slug: 'decorate',
                                    first_publication_date:
                                        '2021-10-09T23:32:29+0000',
                                    last_publication_date:
                                        '2021-11-18T14:27:09+0000',
                                    link_type: 'Document',
                                    isBroken: false
                                },
                                mainimage: {
                                    dimensions: {
                                        width: 696,
                                        height: 900
                                    },
                                    alt: 'Fair Isle Snowflake Lumbar Cushion Cover',
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format'
                                },
                                short_description:
                                    'Keeping a distinctive complex pattern without being complicated involves choosing a simple palette. The poinsettia red and ivory white in this cushion cover are two lovely colors that we enjoy all season long. The sweater-like snowflake design celebrates more than one type of holiday (reverse is sherpa-like sheepskin). Make it a snow day. The front is made of 100% yarn-dyed acrylic; It is reversed to 100% recycled polyester sherpa in white. Yarn dyed fabric has amazing vivid colors that keep their radiance over time. Holds 16 "x 26" fill (sold separately).',
                                description: [
                                    {
                                        type: 'paragraph',
                                        text: 'Keeping a distinctive complex pattern without being complicated involves choosing a simple palette. The poinsettia red and ivory white in this cushion cover are two lovely colors that we enjoy all season long. The sweater-like snowflake design celebrates more than one type of holiday (reverse is sherpa-like sheepskin). Make it a snow day. The front is made of 100% yarn-dyed acrylic; It is reversed to 100% recycled polyester sherpa in white. Yarn dyed fabric has amazing vivid colors that keep their radiance over time. Holds 16 "x 26" fill (sold separately).',
                                        spans: []
                                    }
                                ],
                                specs: [
                                    {
                                        spec_name: 'Dimensions',
                                        spec_value:
                                            '40.26 cm high x 66 cm wide. Zipper: Approximately 61 cm long'
                                    },
                                    {
                                        spec_name: 'Collection',
                                        spec_value: 'Fair Isle Snowflake Lumbar'
                                    },
                                    {
                                        spec_name: 'Other information',
                                        spec_value:
                                            'Machine wash cold, inside out, on delicate cycle. Use only non-chlorine bleach, if necessary. Tumble dry on low temperature, remove immediately. Use warm iron as needed.'
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
                                            url: 'https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format'
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
                                            url: 'https://images.prismic.io/wizeline-academy/741e500e-4a74-4634-b544-06fe48115cbc_2.jpeg?auto=compress,format'
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
                                            url: 'https://images.prismic.io/wizeline-academy/f4645f8e-fc25-4c6f-9d28-38abb7abcace_3.jpeg?auto=compress,format'
                                        }
                                    }
                                ],
                                stock: 48,
                                price: 40
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
                            slugs: [
                                'murano-table-lamp',
                                'lampara-de-mesa-murano'
                            ],
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
                                        spec_name:
                                            'Care and Cleaning Instructions',
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
                        }
                    ],
                    version: '73ae4f1',
                    license:
                        'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
                }
            });
            // Next button is working as expected
            await fireEvent.click(screen.getByText('Next'));
            // Next button is disabled when the user is on the last page
            const nextButton = screen.getByText('Next');
            let currentPage = screen.getByTestId('buttonpage-2');
            expect(nextButton).toBeDisabled();
            expect(currentPage).toHaveClass('active');

            jest.clearAllMocks();

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
                        },
                        {
                            id: 'YWHy0xIAACoAykKm',
                            uid: null,
                            url: null,
                            type: 'category',
                            href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHy0xIAACoAykKm%22%29+%5D%5D',
                            tags: [],
                            first_publication_date: '2021-10-09T23:32:20+0000',
                            last_publication_date: '2021-10-13T00:04:48+0000',
                            slugs: ['lighting'],
                            linked_documents: [],
                            lang: 'en-us',
                            alternate_languages: [
                                {
                                    id: 'YWHytRIAACoAykIk',
                                    type: 'category',
                                    lang: 'es-mx'
                                }
                            ],
                            data: {
                                name: 'Lighting',
                                main_image: {
                                    dimensions: {
                                        width: 621,
                                        height: 398
                                    },
                                    alt: 'Lighting',
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/fdc4897a-c224-450f-9378-a39d2afaa7f6_zero-take-uLcBn2TsavU-unsplash-web+%281%29.jpg?auto=compress,format&rect=1,0,1919,1230&w=621&h=398'
                                }
                            }
                        },
                        {
                            id: 'YWHxkhIAAC4Ayj0J',
                            uid: null,
                            url: null,
                            type: 'category',
                            href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHxkhIAAC4Ayj0J%22%29+%5D%5D',
                            tags: [],
                            first_publication_date: '2021-10-09T23:33:27+0000',
                            last_publication_date: '2021-10-12T23:35:55+0000',
                            slugs: ['kitchen'],
                            linked_documents: [],
                            lang: 'en-us',
                            alternate_languages: [
                                {
                                    id: 'YWHxhBIAAC8AyjzE',
                                    type: 'category',
                                    lang: 'es-mx'
                                }
                            ],
                            data: {
                                name: 'Kitchen',
                                main_image: {
                                    dimensions: {
                                        width: 621,
                                        height: 398
                                    },
                                    alt: 'Kitchen',
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/650366df-0405-4712-bd3b-2703d87e7a61_watermark-designs-XL6gfkLmkOw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,26,1920,1231&w=621&h=398'
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
                    results_per_page: 4,
                    results_size: 4,
                    total_results_size: 8,
                    total_pages: 2,
                    next_page:
                        'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5Bat%28document.type%2C+%22product%22%29%5D%5D%26q%3D%5B%5Bat%28document.tags%2C%5B%22Featured%22%5D%29%5D%5D&page=2&pageSize=4&languageCode=en-us',
                    prev_page: null,
                    results: [
                        {
                            id: 'YZZ_XhIAAC0AvmiA',
                            uid: null,
                            url: null,
                            type: 'product',
                            href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YZZ_XhIAAC0AvmiA%22%29+%5D%5D',
                            tags: ['Living Room', 'Christmas', 'Featured'],
                            first_publication_date: '2021-11-18T16:29:23+0000',
                            last_publication_date: '2021-11-18T16:29:23+0000',
                            slugs: [
                                'fair-isle-snowflake-lumbar-cushion-cover',
                                'funda-para-cojin-fair-isle-snowflake-lumbar'
                            ],
                            linked_documents: [],
                            lang: 'en-us',
                            alternate_languages: [
                                {
                                    id: 'YZZ_BxIAAC0Avmbq',
                                    type: 'product',
                                    lang: 'es-mx'
                                }
                            ],
                            data: {
                                name: 'Fair Isle Snowflake Lumbar Cushion Cover',
                                sku: '1107982309',
                                category: {
                                    id: 'YWHyYRIAACgAykCq',
                                    type: 'category',
                                    tags: [],
                                    lang: 'en-us',
                                    slug: 'decorate',
                                    first_publication_date:
                                        '2021-10-09T23:32:29+0000',
                                    last_publication_date:
                                        '2021-11-18T14:27:09+0000',
                                    link_type: 'Document',
                                    isBroken: false
                                },
                                mainimage: {
                                    dimensions: {
                                        width: 696,
                                        height: 900
                                    },
                                    alt: 'Fair Isle Snowflake Lumbar Cushion Cover',
                                    copyright: null,
                                    url: 'https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format'
                                },
                                short_description:
                                    'Keeping a distinctive complex pattern without being complicated involves choosing a simple palette. The poinsettia red and ivory white in this cushion cover are two lovely colors that we enjoy all season long. The sweater-like snowflake design celebrates more than one type of holiday (reverse is sherpa-like sheepskin). Make it a snow day. The front is made of 100% yarn-dyed acrylic; It is reversed to 100% recycled polyester sherpa in white. Yarn dyed fabric has amazing vivid colors that keep their radiance over time. Holds 16 "x 26" fill (sold separately).',
                                description: [
                                    {
                                        type: 'paragraph',
                                        text: 'Keeping a distinctive complex pattern without being complicated involves choosing a simple palette. The poinsettia red and ivory white in this cushion cover are two lovely colors that we enjoy all season long. The sweater-like snowflake design celebrates more than one type of holiday (reverse is sherpa-like sheepskin). Make it a snow day. The front is made of 100% yarn-dyed acrylic; It is reversed to 100% recycled polyester sherpa in white. Yarn dyed fabric has amazing vivid colors that keep their radiance over time. Holds 16 "x 26" fill (sold separately).',
                                        spans: []
                                    }
                                ],
                                specs: [
                                    {
                                        spec_name: 'Dimensions',
                                        spec_value:
                                            '40.26 cm high x 66 cm wide. Zipper: Approximately 61 cm long'
                                    },
                                    {
                                        spec_name: 'Collection',
                                        spec_value: 'Fair Isle Snowflake Lumbar'
                                    },
                                    {
                                        spec_name: 'Other information',
                                        spec_value:
                                            'Machine wash cold, inside out, on delicate cycle. Use only non-chlorine bleach, if necessary. Tumble dry on low temperature, remove immediately. Use warm iron as needed.'
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
                                            url: 'https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format'
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
                                            url: 'https://images.prismic.io/wizeline-academy/741e500e-4a74-4634-b544-06fe48115cbc_2.jpeg?auto=compress,format'
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
                                            url: 'https://images.prismic.io/wizeline-academy/f4645f8e-fc25-4c6f-9d28-38abb7abcace_3.jpeg?auto=compress,format'
                                        }
                                    }
                                ],
                                stock: 48,
                                price: 40
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
                            slugs: [
                                'murano-table-lamp',
                                'lampara-de-mesa-murano'
                            ],
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
                                        spec_name:
                                            'Care and Cleaning Instructions',
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
                        }
                    ],
                    version: '73ae4f1',
                    license:
                        'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.'
                }
            });
            // Prev button is working as expected
            await fireEvent.click(screen.getByText('Prev'));

            currentPage = screen.getByTestId('buttonpage-1');
            expect(currentPage).toHaveClass('active');
        });
    });
});
