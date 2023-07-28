import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';

export default function useCountries() {
  return useContext(CountriesContext);
}
