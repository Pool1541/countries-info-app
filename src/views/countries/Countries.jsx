import Card from '../../components/card/Card';
import Main from '../../components/main/Main';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import useModal from '../../hooks/useModal';
import useCountries from '../../hooks/useCountries';
import SearchBar from './components/searchBar/SearchBar';
import LoadingSpiner from '../../components/LoadingSpinner/LoadingSpiner';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { GridContainer } from '../../components/elements';
import { useLocation, useParams } from 'react-router-dom';

export default function Countries() {
  const { continentCode } = useParams();
  const { pathname } = useLocation();
  const [countries, setCountries] = useState([]);
  const { data, loading, error, getCountriesByContinent } = useCountries();
  const { isModalOpen } = useModal();
  const [maxCards, setMaxCards] = useState(15);
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, { rootMargin: '100px' });

  function filterCountries(keyword) {
    const countriesClone = structuredClone(data.countries);
    const result = countriesClone.filter((country) => country.name.includes(keyword));
    setCountries(result);
  }

  useEffect(() => {
    if (entry?.isIntersecting && data.countries.length > maxCards) {
      setMaxCards((prev) => prev + 15);
    }
  }, [entry]);

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
            {countries.slice(0, maxCards).map((country) => (
              <Card key={country.code} country={country} />
            ))}
          </GridContainer>
          {isModalOpen && <Modal />}
        </div>
      )}
      <div ref={ref} />
    </Main>
  );
}
