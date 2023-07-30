import { gql } from '@apollo/client';

export const FIND_ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name(lang: "es")
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
      name(lang: "es")
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
      name(lang: "es")
      native
      capital
      currency
      phone
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

export const FIND_COUNTRIES_BY_SELECTED_CONTINENT = gql`
  query GetCountries($continentCodes: [String!]!) {
    countries(filter: { continent: { in: $continentCodes } }) {
      code
      name(lang: "es")
      continent {
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
