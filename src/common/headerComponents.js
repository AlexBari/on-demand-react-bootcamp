
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
`;

export const LogoName = styled.div`
  color: white;
  font-family: 'Aclonica', sans-serif;
`;

export const NavBar = styled.nav`
  background: black;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 96%) / 2);
  z-index: 100;
  color: white;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 14px 2rem;
  cursor: pointer;
  transition: 0.4s;
  background: none;
  &.active {
    color: white;
    font-weight: bold;
    border-left: 3px solid #79CED1;
    border-bottom: 3px solid #79CED1;
    border-right: 3px solid #79CED1;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  &:hover {
    color: black !important;
    border-left: 3px solid;
    border-bottom: 3px solid;
    border-right: 3px solid;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
  }
`;

export const NavShoppingCart = styled(AiOutlineShoppingCart)`
  display: flex;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 3px 15px;
  align-items: center;
  transition: 0.4s;
  background: none;
  border-radius: 1rem;
  &:hover {
    color: black;
    border-radius: 1rem;
    background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavSearch = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavStyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;