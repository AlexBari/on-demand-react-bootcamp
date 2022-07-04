import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from '../components/Products/products';
import ProductsSideBar from '../components/Products/productsSideBar';
import { capitalizeString } from '../utils/utils';
import Loading from '../common/loading';
import {
    StyledProductContainer,
    StyledWrapper,
    StyledProductsSideBar,
    StyledCategoryRow
} from '../components/Products/productsComponents';
import { useProducts } from '../utils/hooks/useProducts';
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories';
import Pagination from '../common/pagination';

const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState();
    const [products, setProducts] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [query, setQuery] = useState(searchParams.get('category') !== null ? [searchParams.get('category')] : []);

    const { data = [], isLoading } = useProducts(12, false, page);
    const { data: ftCategories } = useFeaturedCategories(30);

    const onFilteredProducts = (category, action) => {
        switch (action) {
            case 'add':
                setQuery((prev) => [...prev, category]);
                break;
            case 'remove':
                setQuery([...query.filter(obj => obj !== category)]);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (ftCategories.results) setFilteredCategories(ftCategories.results.map(ctg => capitalizeString(ctg.data.name)))
        if (query.length > 0 && data.results && data.results.length > 0) {
            let filtered = query.reduce((previousValue, currentValue) => {
                let arr = data.results.filter(prd => prd.data.category.slug.toLowerCase() === currentValue.toLowerCase())
                return [...previousValue, ...arr];
            }, [])
            setProducts(filtered);
            setTotalPages(data.total_pages);
        } else {
            setProducts(data.results)
            setTotalPages(data.total_pages);
        }
    }, [data.results, ftCategories, query, data.total_pages]);

    return (
        <>
            <StyledWrapper>
                <StyledProductsSideBar>
                    <StyledCategoryRow onClick={() => { setQuery([])}}>Clear Filters</StyledCategoryRow>
                    <ProductsSideBar categories={filteredCategories} filteringProducts={onFilteredProducts} categoriesSelected={query} />
                </StyledProductsSideBar>
                <StyledProductContainer isLoading={isLoading} hasData={products && products.length > 0}>
                    {
                        !isLoading
                            ? <Products products={products}/>
                            : <Loading />
                    }
                </StyledProductContainer>
            </StyledWrapper>
            <Pagination totalPages={totalPages} pageChange={(page) => setPage(page)}/>
        </>
    );
}

export default ProductsPage;