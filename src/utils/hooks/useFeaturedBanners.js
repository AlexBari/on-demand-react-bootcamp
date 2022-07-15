import { useState, useEffect } from 'react';
import useLatestAPI from './useLatestAPI';
import { API_BASE_URL } from '../constants';

function useFeaturedBanners(pageSize) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [featuredBanners, setFeaturedBanners] = useState(() => ({
        data: {},
        isLoading: true
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
            return () => {};
        }

        const controller = new AbortController();

        async function getFeaturedBanners() {
            try {
                setFeaturedBanners({ data: {}, isLoading: true });

                const response = await fetch(
                    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                        '[[at(document.type, "banner")]]'
                    )}&lang=en-us&pageSize=${pageSize}`,
                    {
                        signal: controller.signal
                    }
                );
                const data = await response.json();

                setFeaturedBanners({ data, isLoading: false });
            } catch (err) {
                setFeaturedBanners({ data: {}, isLoading: false });
                console.error(err);
            }
        }

        getFeaturedBanners();

        return () => {
            controller.abort();
        };
    }, [apiRef, pageSize, isApiMetadataLoading]);

    return featuredBanners;
}

export default useFeaturedBanners;
