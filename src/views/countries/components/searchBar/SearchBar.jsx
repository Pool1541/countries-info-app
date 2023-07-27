import { SearchIcon } from '../../../../components/icons';
import { SearchBarButton, SearchBarInputWrapper, StyledSearchBar } from './Searchbar.styled';

export default function SearchBar() {
  return (
    <StyledSearchBar>
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
