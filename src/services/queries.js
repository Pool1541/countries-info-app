import { gql } from '@apollo/client';

export const FIND_ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      continent {
        name
      }
    }
  }
`;

export const FIND_COUNTRIES_BY_CONTINENT = gql`
  query findCountriesByContinent($continentCode: String!) {
    countries(filter: { continent: { eq: $continentCode } }) {
      code
      name
      continent {
        name
      }
    }
  }
`;

export const FIND_COUNTRY_BY_CODE = gql`
  query findCountryByCode($countryCode: ID!) {
    country(code: $countryCode) {
      code
      name
      native
      capital
      currency
      continent {
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

export const FIND_ALL_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;
