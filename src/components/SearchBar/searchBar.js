import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
    SearchWrapper,
    SearchForm,
    SearchButton,
    SearchInput,
    MagnifyingGlass
} from './searchBarComponents'

const SearchBar = ({header}) => {
    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        navigate({
            pathname: '/search',
            search: `?q=${event.target.search.value}`,
          });
    }

    return (
        <SearchWrapper>
            <SearchForm onSubmit={submitHandler}>
                <SearchInput
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="search"
                    header = {header}
                />
                <SearchButton header={header} type="submit">
                    <MagnifyingGlass />
                </SearchButton>
            </SearchForm>
        </SearchWrapper>
    )
}

SearchBar.propType = {
    header: PropTypes.bool
};

export default SearchBar;