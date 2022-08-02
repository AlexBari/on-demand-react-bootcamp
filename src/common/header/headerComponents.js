
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled.div`
  background: url("/logo.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px;
  margin: 0px;
  width: 80px;
  height: 50px;
  cursor: pointer;
`;

export const LogoName = styled.div`
  color: white;
  font-family: 'Aclonica', sans-serif;
  cursor: pointer;
`;

export const NavBar = styled.nav`
  background: black;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 96%) / 2);
  z-index: 100;
  color: white;
  @media screen and (max-width: 980px) {
      position: fixed;
      width: 96%;
  }
`;

export const NavShoppingCart = styled(AiOutlineShoppingCart)`
  display: flex;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 3px 0px 3px 6px;
  align-items: center;
  transition: 0.4s;
  background: none;
  border-radius: 1rem;
`;

export const NavMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: -15%;
  white-space: nowrap;
  @media screen and (max-width: 980px) {
    display: ${ props => props.header === 'true' ? 'none' : 'grid' };
    margin: 0px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 14px 2rem;
  cursor: pointer;
  transition: 0.4s;
  background: none;
  color: white;
  border-left: 3px solid #79CED1;
  border-bottom: 3px solid #79CED1;
  border-right: 3px solid #79CED1;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  &.active {
    font-weight: bold;
    color: black !important;
    border-left: 3px solid;
    border-bottom: 3px solid;
    border-right: 3px solid;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
  }
  &:hover { 
    color: white;
    font-weight: bold;
    border-left: 3px solid #79CED1;
    border-bottom: 3px solid #79CED1;
    border-right: 3px solid #79CED1;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  @media screen and (max-width: 980px) {
    display: ${ props => props.header === 'true' ? 'none' : 'flex' };
    color: black;
    font-weight: bold;
    justify-content: center;
    border: none;
    border-radius: 1rem;
    &.active {
      color: black;
      font-weight: bolder;
      font-size: 20px;
      justify-content: center;
      border: 3px solid #79CED1;
      border-radius: 1rem;
    }
  }
`;

export const NavSearch = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const NavStyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NumItmDiv = styled.div`
  padding: 0 15px;
  font-weight: bolder;
  border: 1px solid white;
  border-radius: 10px;
  margin: 0 10px;
`;

export const ShoppingCartWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  &:hover {
    color: black;
    border-radius: 15px;
    background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    ${NumItmDiv} {
      border: 1px solid black;
    }
  }
  &.active {
    color: black;
    border-radius: 15px;
    background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    ${NumItmDiv} {
      border: 1px solid black;
    }
  }
`;