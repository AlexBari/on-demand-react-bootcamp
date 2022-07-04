import { useState, useEffect } from 'react';
import { useLatestAPI } from './useLatestAPI';
import { API_BASE_URL } from '../constants';

export function useProducts(pageSize, isFeatured, page = '1', productId, searchTerm) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { };
    }
    const controller = new AbortController();
    let url = `${API_BASE_URL}/documents/search?ref=${apiRef}`;
    if (productId) {
      url += `&q=${encodeURIComponent('[[at(document.id, "' + productId + '")]]')}`;
    } else if (searchTerm) {
      url += `&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&q=${encodeURIComponent(
        '[[fulltext(document,"' + searchTerm + '")]]'
      )}`;
    } else {
      url += `&q=${encodeURIComponent('[[at(document.type, "product")]]')}${isFeatured
        ? encodeURIComponent(
          '&q=[[at(document.tags,["Featured"])]]'
        ) : ''}&lang=en-us&pageSize=${pageSize}&page=${page}`;
    }

    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch(url,
          {
            signal: controller.signal,
          }
        );
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
  }, [apiRef, isApiMetadataLoading, pageSize, isFeatured, page, productId, searchTerm]);

  return products;
}
