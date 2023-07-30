import useCountries from '../../../../hooks/useCountries';
import {
  FiltersContainer,
  FiltersHeader,
  Image,
  StyledFilterButton,
  StyledFilters,
  Title,
} from './Filters.styled';

export default function Filters() {
  const { continents, changeParams, clearParams } = useCountries();
  return (
    <StyledFilters>
      <FiltersHeader>
        <p>Filtrar por continentes</p>
        <button type='button' onClick={clearParams}>
          Limpiar
        </button>
      </FiltersHeader>
      <FiltersContainer>
        {continents.map((continent) => (
          <FilterButton continent={continent} key={continent.name} handleClick={changeParams} />
        ))}
      </FiltersContainer>
    </StyledFilters>
  );
}

function FilterButton({ continent, handleClick }) {
  return (
    <StyledFilterButton
      title={continent.name}
      type='button'
      onClick={() => handleClick(continent.name)}>
      <Image selected={continent.selected}>
        <img src={continent.image} alt={continent.name} />
      </Image>
      <Title>{continent.name}</Title>
    </StyledFilterButton>
  );
}
