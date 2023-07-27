import Card from '../../components/card/Card';
import { GridContainer } from '../../components/elements';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import SearchBar from './components/searchBar/SearchBar';

const countries = [
  {
    code: 'AD',
    name: 'Andorra',
    continent: {
      name: 'Europe',
    },
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    continent: {
      name: 'Asia',
    },
  },
  {
    code: 'AF',
    name: 'Afghanistan',
    continent: {
      name: 'Asia',
    },
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
    continent: {
      name: 'North America',
    },
  },
  {
    code: 'AI',
    name: 'Anguilla',
    continent: {
      name: 'North America',
    },
  },
  {
    code: 'AL',
    name: 'Albania',
    continent: {
      name: 'Europe',
    },
  },
  {
    code: 'AM',
    name: 'Armenia',
    continent: {
      name: 'Asia',
    },
  },
  {
    code: 'AO',
    name: 'Angola',
    continent: {
      name: 'Africa',
    },
  },
  {
    code: 'AQ',
    name: 'Antarctica',
    continent: {
      name: 'Antarctica',
    },
  },
  {
    code: 'AR',
    name: 'Argentina',
    continent: {
      name: 'South America',
    },
  },
];

export default function Countries() {
  return (
    <Main>
      <Header>
        <SearchBar />
      </Header>
      <GridContainer>
        {countries.map((country) => (
          <Card key={country.code} country={country} />
        ))}
      </GridContainer>
    </Main>
  );
}
