import styled from 'styled-components';
import { GiMagnifyingGlass } from 'react-icons/gi';

export const MagnifyingGlass = styled(GiMagnifyingGlass)`
    font-size: 1.8rem;
`;

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    text-decoration: none;
    background: none;
    color: white;
    border: none;
    padding: 4px 15px;
    text-align: center;
    boder-radius: 2px
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    transition: 0.3s;
    background: none;
    border-radius: 1rem;
    &:hover {
        color: black;
        border-radius: 1rem;
        background: linear-gradient(145deg, rgba(121,206,209,1) 57%, rgba(255,255,255,1) 98%);
    }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
    height: 30.8px;
    width: 13rem;
    border-radius: 1rem;
    padding: 2px 5px;
`;
