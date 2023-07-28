import { SearchIcon } from '../../../../components/icons';
import useCountries from '../../../../hooks/useCountries';
import { SearchBarButton, SearchBarInputWrapper, StyledSearchBar } from './Searchbar.styled';

export default function SearchBar() {
  const { getCountriesByContinent } = useCountries();

  function handleSubmit(e) {
    e.preventDefault();
    getCountriesByContinent('SA');
  }

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <SearchBarInputWrapper>
        <label>País</label>
        <input placeholder='Escribe el pais que deseas ver' />
      </SearchBarInputWrapper>
      <SearchBarButton>
        <SearchIcon />
        <span>Buscar</span>
      </SearchBarButton>
    </StyledSearchBar>
  );
}
