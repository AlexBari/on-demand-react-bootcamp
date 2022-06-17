import React from "react";
import Card from "./card";

const Products = ({products = []}) => {
    return (
        <>
            {
                products.map((product, i) => <Card key={`${product.data.id}-card-${i}`} data={product.data} />)
            }
        </>
    )
};

export default Products;