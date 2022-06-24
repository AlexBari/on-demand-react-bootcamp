import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/searchbar/searchBar';
import ShoppingCart from '../components/shoppingcar/shoppingCar'
import SidebarNav from '../components/sidebarnav/sidebarNav'
import NavMenu from './navMenu';
import {
    Logo,
    LogoName,
    NavBar,
    NavStyledWrapper,
    NavSearch,
    NavShoppingCart

} from './headerComponents'

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