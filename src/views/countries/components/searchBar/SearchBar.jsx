import { useState } from 'react';
import { SearchIcon } from '../../../../components/icons';
import { SearchBarButton, SearchBarInputWrapper, StyledSearchBar } from './Searchbar.styled';

export default function SearchBar({ filterFn }) {
  const [countryName, setCountryName] = useState('');

  function handleChange(e) {
    const word = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setCountryName(word);
  }

  function handleSubmit(e) {
    e.preventDefault();
    filterFn(countryName);
  }

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <SearchBarInputWrapper>
        <label>País</label>
        <input placeholder='Escribe el pais que deseas ver' onChange={handleChange} />
      </SearchBarInputWrapper>
      <SearchBarButton>
        <SearchIcon />
        <span>Buscar</span>
      </SearchBarButton>
    </StyledSearchBar>
  );
}
