import { useState, useEffect } from 'react';
import axios from 'axios';
import useLatestAPI from './useLatestAPI';
import { API_BASE_URL } from '../constants';

function useFeaturedCategories(pageSize) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [featuredCategories, setFeaturedCategories] = useState(() => ({
        data: {},
        isLoading: true
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => {};
        }
        const controller = new AbortController();

        async function getfeaturedCategories() {
            try {
                setFeaturedCategories({ data: {}, isLoading: true });

                const response = await axios.get(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        '[[at(document.type, "category")]]'
                    )}&lang=en-us&pageSize=${pageSize}`,
                    {
                        signal: controller.signal
                    }
                );
                const { data } = response;
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
    }, [apiRef, pageSize, isApiMetadataLoading]);

    return featuredCategories;
}

export default useFeaturedCategories;
