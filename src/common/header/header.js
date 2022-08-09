import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/searchBar';
import SidebarNav from '../../components/SidebarNav/sidebarNav';
import NavMenu from './navMenu';
import {
    Logo,
    LogoName,
    NavBar,
    NavStyledWrapper,
    NavSearch,
    NavShoppingCart,
    ShoppingCartWrapper,
    NumItmDiv
} from './headerComponents';
import AppContext from '../../utils/appContext';

function Header() {
    const { state } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    const RedirectHandler = () => {
        navigate('/');
    };

    return (
        <NavBar>
            <NavStyledWrapper>
                <SidebarNav />
                <Logo id="logo" onClick={RedirectHandler} />
                <LogoName onClick={RedirectHandler}>BlueFox</LogoName>
            </NavStyledWrapper>
            <NavMenu header="true" />
            <NavStyledWrapper>
                <NavSearch>
                    <SearchBar header="true" />
                </NavSearch>
                <ShoppingCartWrapper
                    onClick={() => navigate('/cart')}
                    className={location.pathname === '/cart' ? 'active' : ''}
                >
                    <NavShoppingCart />
                    {state.totalOfItems > 0 && (
                        <NumItmDiv>{state.totalOfItems}</NumItmDiv>
                    )}
                </ShoppingCartWrapper>
            </NavStyledWrapper>
        </NavBar>
    );
}

export default Header;
