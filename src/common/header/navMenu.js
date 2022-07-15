import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NavMenuWrapper, NavLink } from './headerComponents';

function NavMenu({ header }) {
    const location = useLocation();
    return (
        <NavMenuWrapper header={header}>
            <NavLink
                to="/"
                className={location.pathname === '/home' && 'active'}
                header={header}
            >
                Home
            </NavLink>
            <NavLink to="/product" header={header}>
                Products
            </NavLink>
            <NavLink to="/search" header={header}>
                Search
            </NavLink>
        </NavMenuWrapper>
    );
}

NavMenu.propTypes = {
    header: PropTypes.string
};

NavMenu.defaultProps = {
    header: 'false'
};

export default NavMenu;
