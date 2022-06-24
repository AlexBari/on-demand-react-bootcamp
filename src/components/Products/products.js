import React from "react";
import ProductCard from "./productCard";

const Products = ({products = []}) => {
    return (
        <>
            {
                products.map((product, i) => <ProductCard key={`${product.data.id || product.id}-card-${i}`} data={product.data} />)
            }
        </>
    )
};

export default Products;