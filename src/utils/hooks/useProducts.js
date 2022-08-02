import { useState, useEffect } from 'react';
import useLatestAPI from './useLatestAPI';
import { API_BASE_URL } from '../constants';

// eslint-disable-next-line default-param-last
function useProducts(
    pageSize,
    isFeatured,
    // eslint-disable-next-line default-param-last
    page = '1',
    productId,
    searchTerm,
    filter
) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [products, setProducts] = useState(() => ({
        data: {},
        isLoading: true
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => {};
        }
        const controller = new AbortController();
        let url = `${API_BASE_URL}/documents/search?ref=${apiRef}`;
        if (productId) {
            url += `&q=${encodeURIComponent(
                `[[at(document.id, "${productId}")]]`
            )}`;
        } else if (searchTerm) {
            url += `&q=${encodeURIComponent(
                '[[at(document.type, "product")]]'
            )}&q=${encodeURIComponent(
                `[[fulltext(document,"${searchTerm}")]]`
            )}`;
        } else {
            url += `&q=${encodeURIComponent(
                '[[:d=at(document.type, "product")]]'
            )}${
                isFeatured
                    ? encodeURIComponent(
                          '&q=[[at(document.tags,["Featured"])]]'
                      )
                    : ''
            }${
                filter && filter.length > 0
                    ? `&q=${encodeURIComponent(
                          `[[any(my.product.category,[${filter.map(
                              (obj) => `"${obj.id}"`
                          )}])]]`
                      )}`
                    : ''
            }&lang=en-us&pageSize=${pageSize}&page=${page}`;
        }

        async function getProducts() {
            try {
                setProducts({ data: {}, isLoading: true });

                const response = await fetch(url, {
                    signal: controller.signal
                });
                const data = await response.json();

                setProducts({ data, isLoading: false });
            } catch (err) {
                setProducts({ data: {}, isLoading: false });
                console.error(err);
            }
        }

        getProducts();

        return () => {
            controller.abort();
        };
    }, [
        apiRef,
        isApiMetadataLoading,
        pageSize,
        isFeatured,
        page,
        productId,
        searchTerm,
        filter
    ]);

    return products;
}

export default useProducts;
