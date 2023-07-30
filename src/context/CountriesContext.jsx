import { useQuery } from '@apollo/client';
import { createContext } from 'react';
import useFilters from '../hooks/useFilters';
import useSetQuery from '../hooks/useSetQuery';

export const CountriesContext = createContext();

export default function CountriesContextProvider({ children }) {
  const { continents, changeParams, clearParams, continentCodes } = useFilters();
  const query = useSetQuery();
  const { data, loading, error, refetch } = useQuery(query, { variables: { continentCodes } });

  function getCountriesByContinent(continentCode) {
    refetch({ continentCode });
  }

  return (
    <CountriesContext.Provider
      value={{
        data,
        loading,
        error,
        getCountriesByContinent,
        continents,
        changeParams,
        clearParams,
      }}>
      {children}
    </CountriesContext.Provider>
  );
}
