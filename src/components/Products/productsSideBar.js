/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { SideBarCategoryRow } from './productsComponents';

const ProductsSideBar = ({
    categories,
    filteringProducts,
    categoriesSelected
}) => {
    const onSelectCategory = (e, obj) => {
        if (e.target.classList.contains('active')) {
            filteringProducts(obj, 'remove');
        } else {
            filteringProducts(obj, 'add');
        }
    };

    const isCategorySelected = (category) => {
        const tmp = categoriesSelected.filter(
            (cat) => cat === category.toLowerCase()
        );
        console.log(categoriesSelected, category, tmp);
        return tmp.length > 0 ? 'active' : '';
    };

    return categories.map((obj) => (
        <SideBarCategoryRow
            // eslint-disable-next-line react/no-array-index-key
            key={`cat-${obj}`}
            data-testid={`cat-${obj}`}
            onClick={(e) => onSelectCategory(e, obj)}
            className={isCategorySelected(obj)}
        >
            {obj}
        </SideBarCategoryRow>
    ));
};

ProductsSideBar.propTypes = {
    categories: PropTypes.array,
    filteringProducts: PropTypes.func,
    categoriesSelected: PropTypes.array
};

export default ProductsSideBar;
