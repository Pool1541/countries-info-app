import { images } from '../../../../config/imagesMap';
import {
  FiltersContainer,
  FiltersHeader,
  Image,
  StyledFilterButton,
  StyledFilters,
  Title,
} from './Filters.styled';

const continents = [
  {
    code: ['OC'],
    image: images.default,
    name: 'Oceania',
  },
  {
    code: ['NA', 'SA'],
    image: images.SA,
    name: 'América',
  },
  {
    code: ['AS'],
    image: images.AS,
    name: 'Asia',
  },
  {
    code: ['EU'],
    image: images.default,
    name: 'Europa',
  },
  {
    code: ['AF'],
    image: images.AF,
    name: 'Africa',
  },
  {
    code: ['AN'],
    image: images.default,
    name: 'Antártida',
  },
];

export default function Filters() {
  return (
    <StyledFilters>
      <FiltersHeader>
        <p>Filtrar por continentes</p>
        <button>Limpiar</button>
      </FiltersHeader>
      <FiltersContainer>
        {continents.map((continent) => (
          <FilterButton continent={continent} key={continent.name} />
        ))}
      </FiltersContainer>
    </StyledFilters>
  );
}

function FilterButton({ continent }) {
  return (
    <StyledFilterButton title={continent.name}>
      <Image className='active'>
        <img src={continent.image} alt={continent.name} />
      </Image>
      <Title>{continent.name}</Title>
    </StyledFilterButton>
  );
}
