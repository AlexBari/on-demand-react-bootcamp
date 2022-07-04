import React from "react";
import PropTypes from 'prop-types';
import ProductCard from "./productCard";

const Products = ({ products = [], searchTerm }) => {
    return (
        <>
            {
                products.length > 0
                    ? products.map((product, i) => <ProductCard key={`${product.data.id || product.id}-card-${i}`} data={product.data} id={product.id} />)
                    : <h2>Sorry! No products were found{searchTerm ? ` for "${searchTerm}" ...` : ' ...'}</h2>
            }
        </>
    )
};

Products.propType = {
    products: PropTypes.array,
    searchTerm: PropTypes.string
};

export default Products;