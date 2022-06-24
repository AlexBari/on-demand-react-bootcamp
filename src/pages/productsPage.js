import React, { useEffect, useState } from 'react';
import Products from '../components/Products/products';
import ProductsSideBar from '../components/Products/productsSideBar';
import { CapitalizeString } from '../utils/utils';
import { Loading } from '../common/loading';
import { StyledProductContainer, StyledWrapper, StyledProductsSideBar } from '../components/Products/productsComponents';
import { useProducts } from '../utils/hooks/useProducts';
import { useFeaturedCategories } from '../utils/hooks/useFeaturedCategories';
import Pagination from '../common/pagination';

const ProductsPage = () => {
    const { data = [] } = useProducts();
    const { data: ftCategories } = useFeaturedCategories();

    const [products, setProducts] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [query, setQuery] = useState([]);
    const [falseLoading, setFalseLoading] = useState(true);

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
        if (ftCategories.results) setFilteredCategories(ftCategories.results.map(ctg => CapitalizeString(ctg.data.name)))
        if (query.length > 0) {
            let filtered = query.reduce((previousValue, currentValue) => {
                let arr = data.results.filter(prd => prd.data.category.slug.toLowerCase() === currentValue.toLowerCase())
                return [...previousValue, ...arr];
            }, [])
            setProducts(filtered)
        } else {
            setProducts(data.results)
        }
    }, [data.results, ftCategories, query]);

    useEffect(() => {
        setInterval(() => {
            setFalseLoading(false);
        }, 2000);
    }, [falseLoading]);

    return (
        <>
        <StyledWrapper>
            <StyledProductsSideBar>
                <ProductsSideBar categories={filteredCategories} filteringProducts={onFilteredProducts} />
            </StyledProductsSideBar>
            <StyledProductContainer isLoading={falseLoading}>
                {
                    !falseLoading
                        ? <Products products={products} />
                        : <Loading />
                }
            </StyledProductContainer>
        </StyledWrapper>
        <Pagination totalPages={2}/>
        </>
    );
}

export default ProductsPage;