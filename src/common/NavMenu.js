import React from 'react';
import {
    NavMenuWrapper,
    NavLink,
} from './HeaderComponents';

const NavMenu = ({header}) => {
    return (
        <NavMenuWrapper header={header}>
            <NavLink to='/' header={header}>
                Home
            </NavLink>
            <NavLink to='/productsPage' header={header}>
                Products
            </NavLink>
        </NavMenuWrapper>
    )
};

export default NavMenu;