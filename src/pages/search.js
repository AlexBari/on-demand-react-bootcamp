/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from '../components/Products/products';
import Loading from '../common/loading/loading';
import useProducts from '../utils/hooks/useProducts';
import Pagination from '../common/pagination/pagination';
import {
    StyledProductContainer,
    StyledWrapper
} from '../components/Products/productsComponents';

function SearchPage() {
    const [searchParams] = useSearchParams();
    const [totalPages, setTotalPages] = useState();
    const [searchResults, setSearchResults] = useState();
    const [page, setPage] = useState();
    const { data = [], isLoading } = useProducts(
        20,
        false,
        page,
        null,
        searchParams.get('q')
    );

    useEffect(() => {
        setSearchResults(data.results);
        setTotalPages(data.total_pages);
        return () => {
            setSearchResults();
            setTotalPages();
        };
    }, [data, setSearchResults]);

    return (
        <>
            <StyledWrapper style={{ flexFlow: 'column' }}>
                <div style={{ margin: '-30px 0 20px 0' }}>
                    <h1>Search Results:</h1>
                </div>
                {searchParams.get('q') && searchParams.get('q') !== '' ? (
                    <StyledProductContainer
                        isLoading={isLoading}
                        hasData={data.results && data.results.length > 0}
                    >
                        {!isLoading ? (
                            <Products
                                products={searchResults}
                                searchTerm={searchParams.get('q')}
                            />
                        ) : (
                            <Loading />
                        )}
                    </StyledProductContainer>
                ) : (
                    <h2>No search was executed ...</h2>
                )}
            </StyledWrapper>
            {searchParams.get('q') &&
                searchParams.get('q') !== '' &&
                data.results && (
                    <Pagination
                        totalPages={totalPages}
                        pageChange={(page) => setPage(page)}
                    />
                )}
        </>
    );
}

export default SearchPage;
