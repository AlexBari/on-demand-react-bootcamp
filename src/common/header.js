import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import ShoppingCart from '../components/ShoppingCar/ShoppingCart'
import SidebarNav from '../components/SidebarNav/SidebarNav'
import NavMenu from './NavMenu';
import {
    Logo,
    LogoName,
    NavBar,
    NavStyledWrapper,
    NavSearch,
    NavShoppingCart

} from './HeaderComponents'

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