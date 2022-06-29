import React from 'react';
import {
    SearchWrapper,
    SearchForm,
    SearchButton,
    SearchInput,
    MagnifyingGlass
} from './searchBarComponents'

const SearchBar = ({header}) => {

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
                    header = {header}
                />
                <SearchButton header={header} type="submit">
                    <MagnifyingGlass />
                </SearchButton>
            </SearchForm>
        </SearchWrapper>
    )
}

export default SearchBar;