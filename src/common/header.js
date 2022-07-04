import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar/searchBar';
<<<<<<< HEAD
import ShoppingCart from '../components/ShoppinCart/shoppingCart';
import SidebarNav from '../components/SidebarNav/sidebarNav';
=======
import ShoppingCar from '../components/ShoppinCar/shoppingCar'
import SidebarNav from '../components/SidebarNav/sidebarNav'
>>>>>>> master
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
    const RedirectHandler = () => {
        navigate('/');
    }
    return (
        <NavBar>
            <NavStyledWrapper>
                <SidebarNav />
                <Logo id='logo' onClick={RedirectHandler} />
                <LogoName onClick={RedirectHandler}>BlueFox</LogoName>
            </NavStyledWrapper>
            <NavMenu header={'true'} />
            <NavStyledWrapper>
                <NavSearch>
                    <SearchBar header={'true'}/>
                </NavSearch>
                <NavShoppingCart>
                    <ShoppingCar />
                </NavShoppingCart>
            </NavStyledWrapper>
        </NavBar>
    )
}

export default Header;