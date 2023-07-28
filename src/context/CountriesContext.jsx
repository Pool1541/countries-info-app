import { useQuery } from '@apollo/client';
import { createContext } from 'react';
import { FIND_ALL_COUNTRIES, FIND_COUNTRIES_BY_CONTINENT } from '../services/queries';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../config/routes';

export const CountriesContext = createContext();

function useSetQuery() {
  let query = FIND_ALL_COUNTRIES;
  const { pathname } = useLocation();

  if (pathname.includes(`${ROUTES.continents}/`)) {
    query = FIND_COUNTRIES_BY_CONTINENT;
  }

  return query;
}

export default function CountriesContextProvider({ children }) {
  const query = useSetQuery();
  const { data, loading, error, refetch } = useQuery(query);

  function getCountriesByContinent(continentCode) {
    refetch({ continentCode });
  }

  return (
    <CountriesContext.Provider value={{ data, loading, error, getCountriesByContinent }}>
      {children}
    </CountriesContext.Provider>
  );
}
