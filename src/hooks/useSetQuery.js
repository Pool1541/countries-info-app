import {
  FIND_ALL_COUNTRIES,
  FIND_COUNTRIES_BY_CONTINENT,
  FIND_COUNTRIES_BY_SELECTED_CONTINENT,
} from '../services/queries';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../config/routes';

export default function useSetQuery() {
  let query = FIND_ALL_COUNTRIES;
  const { pathname, search } = useLocation();

  if (pathname.includes(`${ROUTES.continents}/`)) {
    query = FIND_COUNTRIES_BY_CONTINENT;
  } else if (search) {
    query = FIND_COUNTRIES_BY_SELECTED_CONTINENT;
  } else {
    query = FIND_ALL_COUNTRIES;
  }

  return query;
}
