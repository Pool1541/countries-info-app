import { useEffect } from 'react';
import Card from '../../components/card/Card';
import { GridContainer } from '../../components/elements';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import useCountries from '../../hooks/useCountries';
import SearchBar from './components/searchBar/SearchBar';
import { useLocation, useParams } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import useModal from '../../hooks/useModal';
import { useState } from 'react';

export default function Countries() {
  const { continentCode } = useParams();
  const { pathname } = useLocation();
  const [countries, setCountries] = useState();
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
  }, [loading, pathname]);

  return (
    <Main>
      <Header>
        <SearchBar filterFn={filterCountries} />
      </Header>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <GridContainer>
          {countries?.slice(0, 30).map((country) => (
            <Card key={country.code} country={country} />
          ))}
          {isModalOpen && <Modal />}
        </GridContainer>
      )}
    </Main>
  );
}
