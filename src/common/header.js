import React from 'react';
import SearchBar from '../components/searchBar/searchBar';
import ShoppingCart from '../components/shoppingCart/shoppingCart'
import {
    Logo,
    LogoName,
    NavBar,
    NavStyledWrapper,
    NavLink,
    NavMenu,
    NavSearch,
    NavShoppingCart

} from './headerComponents'

const Header = () => {
    return (
        <NavBar>
            <NavStyledWrapper>
                <Logo id='logo'/>
                <LogoName>BlueFox</LogoName>
            </NavStyledWrapper>
            <NavMenu>
                <NavLink to='/' activestyle='true'>
                    Home
                </NavLink>
            </NavMenu>
            <NavStyledWrapper>
                <NavSearch>
                    <SearchBar />
                </NavSearch>
                <NavShoppingCart>
                    <ShoppingCart />
                </NavShoppingCart>
            </NavStyledWrapper>
      </NavBar>
    )
}

export default Header;