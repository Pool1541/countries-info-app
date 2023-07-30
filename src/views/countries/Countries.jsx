import Card from '../../components/card/Card';
import Main from '../../components/main/Main';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import useModal from '../../hooks/useModal';
import useCountries from '../../hooks/useCountries';
import SearchBar from './components/searchBar/SearchBar';
import LoadingSpiner from '../../components/LoadingSpinner/LoadingSpiner';
import { useState } from 'react';
import { useEffect } from 'react';
import { GridContainer } from '../../components/elements';
import { useLocation, useParams } from 'react-router-dom';

export default function Countries() {
  const { continentCode } = useParams();
  const { pathname } = useLocation();
  const [countries, setCountries] = useState([]);
  const { data, loading, error, getCountriesByContinent } = useCountries();
  const { isModalOpen } = useModal();

  function filterCountries(keyword) {
    const countriesClone = structuredClone(data.countries);
    const result = countriesClone.filter((country) => country.name.includes(keyword));
    setCountries(result);
  }

  useEffect(() => {
    if (continentCode) getCountriesByContinent(continentCode);
  }, [continentCode]);

  useEffect(() => {
    if (!loading) setCountries(data.countries);
  }, [loading, pathname, data]);

  return (
    <Main>
      <Header>
        <SearchBar filterFn={filterCountries} />
      </Header>
      {loading ? (
        <LoadingSpiner />
      ) : error ? (
        <div>Error</div>
      ) : (
        <div style={{ display: 'flex' }}>
          <GridContainer>
            {countries.slice(0, 15).map((country) => (
              <Card key={country.code} country={country} />
            ))}
          </GridContainer>
          {isModalOpen && <Modal />}
        </div>
      )}
    </Main>
  );
}
