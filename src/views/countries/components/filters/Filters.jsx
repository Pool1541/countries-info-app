import { useSearchParams } from 'react-router-dom';
import { images } from '../../../../config/imagesMap';
import {
  FiltersContainer,
  FiltersHeader,
  Image,
  StyledFilterButton,
  StyledFilters,
  Title,
} from './Filters.styled';
import { useEffect, useState } from 'react';

const initialState = [
  {
    code: ['OC'],
    image: images.default,
    name: 'Oceania',
    selected: false,
  },
  {
    code: ['NA', 'SA'],
    image: images.SA,
    name: 'América',
    selected: false,
  },
  {
    code: ['AS'],
    image: images.AS,
    name: 'Asia',
    selected: false,
  },
  {
    code: ['EU'],
    image: images.default,
    name: 'Europa',
    selected: false,
  },
  {
    code: ['AF'],
    image: images.AF,
    name: 'Africa',
    selected: false,
  },
  {
    code: ['AN'],
    image: images.default,
    name: 'Antártida',
    selected: false,
  },
];

export default function Filters() {
  const [continents, setContinents] = useState(initialState);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.getAll('continentes')[0]?.split(',');

  function handleClick(continentName) {
    const currentParams = searchParams.getAll('continentes');

    if (currentParams[0]?.includes(continentName)) {
      const filteredParams = currentParams[0].split(',').filter((param) => param !== continentName);
      const continentes = filteredParams.length > 0 && { continentes: filteredParams.join(',') };

      setSearchParams(continentes);
    } else {
      const params = [...currentParams, continentName];
      setSearchParams({ continentes: params.join(',') });
    }
  }

  useEffect(() => {
    const temp = continents.map((continent) => {
      if (currentParams?.includes(continent.name)) {
        continent.selected = true;
      } else {
        continent.selected = false;
      }

      return continent;
    });
    setContinents([...temp]);
  }, [searchParams]);

  return (
    <StyledFilters>
      <FiltersHeader>
        <p>Filtrar por continentes</p>
        <button type='button'>Limpiar</button>
      </FiltersHeader>
      <FiltersContainer>
        {continents.map((continent) => (
          <FilterButton continent={continent} key={continent.name} handleClick={handleClick} />
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
