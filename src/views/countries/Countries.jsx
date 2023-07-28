import { useEffect } from 'react';
import Card from '../../components/card/Card';
import { GridContainer } from '../../components/elements';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import useCountries from '../../hooks/useCountries';
import SearchBar from './components/searchBar/SearchBar';
import { useParams } from 'react-router-dom';

export default function Countries() {
  const { continentCode } = useParams();
  const { data, loading, error, getCountriesByContinent } = useCountries();

  useEffect(() => {
    if (continentCode) getCountriesByContinent(continentCode);
  }, [continentCode]);

  return (
    <Main>
      <Header>
        <SearchBar />
      </Header>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <GridContainer>
          {data.countries.slice(0, 30).map((country) => (
            <Card key={country.code} country={country} />
          ))}
        </GridContainer>
      )}
    </Main>
  );
}
