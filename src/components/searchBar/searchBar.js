import React from 'react';
import {
    SearchWrapper,
    SearchForm,
    SearchButton,
    SearchInput,
    MagnifyingGlass
} from './searchBarComponents'

const SearchBar = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('On search event', event.target.search.value)
    }

    return (
        <SearchWrapper>
            <SearchForm onSubmit={submitHandler}>
                <SearchInput
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="search"
                />
                <SearchButton type="submit">
                    <MagnifyingGlass />
                </SearchButton>
            </SearchForm>
        </SearchWrapper>
    )
}

export default SearchBar;