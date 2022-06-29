import React from 'react';
import styled from 'styled-components';

const StyledCategoryRow = styled.div`
    display: flex;
    justify-content: flex-start;
    place-items: center;
    height: 7vh;
    padding: 5px;
    cursor: pointer;
    border: 1px solid #79CED1;
    border-radius: 5px;
    margin: 1px 0px;
    word-break: break-all;
    &:hover {
        color: black;
        background: rgb(182 233 234 / 80%);
    }
    &.active {
        color: black;
        background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    }
`;


const ProductsSideBar = ({ categories, filteringProducts }) => {
    const onSelectCategory = (e, obj) => {
        if (e.target.classList.contains('active')){
            e.target.classList.remove('active');
            filteringProducts(obj, 'remove')
        } else {
            e.target.classList.add('active');
            filteringProducts(obj,'add')
        }
    };

    return categories.map((obj, i) =>
        <StyledCategoryRow
            key={'cat-' + i}
            onClick={(e) => onSelectCategory(e, obj)}>
            {obj}
        </StyledCategoryRow>
    );
};

export default ProductsSideBar;