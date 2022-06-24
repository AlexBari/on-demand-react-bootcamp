import React from 'react';
import {
    NavMenuWrapper,
    NavLink,
} from './header-components';

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