import { useState } from 'react';
import { SearchIcon } from '../../../../components/icons';
import { SearchBarButton, SearchBarInputWrapper, StyledSearchBar } from './Searchbar.styled';
import Filters from '../filters/Filters';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../../config/routes';

export default function SearchBar({ filterFn }) {
  const [countryName, setCountryName] = useState('');
  const [displayFilters, setDisplayFilters] = useState(false);
  const { pathname } = useLocation();
  const ref = useOutsideClick(hiddenFilters);

  function handleChange(e) {
    const word = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setCountryName(word);
  }

  function handleSubmit(e) {
    e.preventDefault();
    filterFn(countryName);
    hiddenFilters();
  }

  function showFilters() {
    setDisplayFilters(true);
  }

  function hiddenFilters() {
    setDisplayFilters(false);
  }

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <SearchBarInputWrapper ref={ref} isFocused={displayFilters}>
        <label>País</label>
        <input
          placeholder='Escribe el pais que deseas ver'
          onChange={handleChange}
          onClick={showFilters}
          autoComplete='disabled'
        />
        {displayFilters && pathname == ROUTES.countries && <Filters />}
      </SearchBarInputWrapper>
      <SearchBarButton>
        <SearchIcon />
        <span>Buscar</span>
      </SearchBarButton>
    </StyledSearchBar>
  );
}
