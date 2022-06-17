import { useState, useEffect } from 'react';

export function useFeaturedCategories() {
  const [featuredCategories, setFeaturedCategories] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    const controller = new AbortController();

    async function getfeaturedCategories() {
      try {
        setFeaturedCategories({ data: {}, isLoading: true });

        const response = await fetch('product-categories.json' );
        const data = await response.json();

        setFeaturedCategories({ data, isLoading: false });
      } catch (err) {
        setFeaturedCategories({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getfeaturedCategories();

    return () => {
      controller.abort();
    };
  }, []);

  return featuredCategories;
}
