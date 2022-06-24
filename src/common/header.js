import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar/search-bar';
import ShoppingCart from '../components/ShoppingCar/shopping-cart'
import SidebarNav from '../components/SidebarNav/sidebar-nav'
import NavMenu from './nav-menu';
import {
    Logo,
    LogoName,
    NavBar,
    NavStyledWrapper,
    NavSearch,
    NavShoppingCart

} from './header-components'

const Header = () => {
    const navigate = useNavigate();
    const RedirectHandler = () => {
        navigate('/');
    }
    return (
        <NavBar>
            <NavStyledWrapper>
                <SidebarNav />
                <Logo id='logo' onClick={RedirectHandler}/>
                <LogoName onClick={RedirectHandler}>BlueFox</LogoName>
            </NavStyledWrapper>
            <NavMenu header={'true'}/>
            <NavStyledWrapper>
                <NavSearch>
                    <SearchBar header={'true'} />
                </NavSearch>
                <NavShoppingCart>
                    <ShoppingCart />
                </NavShoppingCart>
            </NavStyledWrapper>
        </NavBar>
    )
}

export default Header;