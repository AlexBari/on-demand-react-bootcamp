import React from 'react';
import PropTypes from 'prop-types';
import { SideBarCategoryRow } from './productsComponents';

const ProductsSideBar = ({ categories, filteringProducts, categoriesSelected }) => {
    const onSelectCategory = (e, obj) => {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            filteringProducts(obj, 'remove')
        } else {
            e.target.classList.add('active');
            filteringProducts(obj, 'add')
        }
    };

    const isCategorySelected = (category) => {
        return categoriesSelected.filter((cat) => cat === category).length > 0;
    };

    return (
        categories.map((obj, i) =>
            <SideBarCategoryRow
                key={'cat-' + i}
                onClick={(e) => onSelectCategory(e, obj)}
                className={
                    isCategorySelected(obj) && 'active'
                }
            >
                {obj}
            </SideBarCategoryRow>
        )
    );
};

ProductsSideBar.propType = {
    categories: PropTypes.array,
    filteringProducts: PropTypes.func,
    categoriesSelected: PropTypes.array
};

export default ProductsSideBar;