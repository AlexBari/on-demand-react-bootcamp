import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';

function Products({ products = [], searchTerm }) {
    return products.length > 0 ? (
        products.map((product) => (
            <ProductCard
                key={`${product.data.id || product.id}-card`}
                data={product.data}
                id={product.id}
                data-testid="productCard-1"
            />
        ))
    ) : (
        <h2>
            Sorry! No products were found
            {searchTerm ? ` for "${searchTerm}" ...` : ' ...'}
        </h2>
    );
}

Products.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    products: PropTypes.array,
    searchTerm: PropTypes.string
};

Products.defaultProps = {
    products: [],
    searchTerm: undefined
};

export default Products;
