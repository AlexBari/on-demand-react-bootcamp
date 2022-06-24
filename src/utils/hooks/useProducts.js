import { useState, useEffect } from 'react';

export function useProducts() {
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    const controller = new AbortController();
    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        const response = await fetch('products.json');
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
  }, []);

  return products;
}
