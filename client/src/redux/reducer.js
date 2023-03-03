import {
  ADD_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_ALL_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
  GET_DETAIL_COUNTRY,
  GET_COUNTRIES_PAGE,
  SET_CURRENT_PAGE,
  COUNT_PAGE,
  NUMBER_PAGE,
  MOV_PAGE,
  FILTER_CONTINENT_ACT,
  OPTIONS_CONTINENTS,
  OPTIONS_ACTIVITIES,
  ORDER_COUNTRIES_POPULATION,
  ADD_COUNTRIES_TO_ACTIVITIES,
} from "./actions.js";

import {
  getCurrentCountries,
  pagesNumber,
  movedPage,
  filterCountries,
  optionsContinents,
  optionsActivities,
  sortCountriesPopulation,
} from "./utils";

const initialState = {
  countries: [],
  activities: [],
  countryDetail: {},
  countriesByName: [],
  currentCountries: [],
  countriesFilter: [],
  optionsByContinent: [],
  optionsByActivities: [],
  limit: 10,
  currentPage: 1,
  maxPageLimit: 0,
  pages: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return { ...state, countries: payload, currentCountries: payload };
    case GET_ALL_ACTIVITIES:
      return { ...state, activities: payload };
    case GET_DETAIL_COUNTRY:
      return { ...state, countryDetail: payload };
    case GET_COUNTRY_BY_NAME:
      return { ...state, currentCountries: payload };
    case ADD_ACTIVITY:
      return { ...state, activities: [...state.activities, payload] };
    case GET_COUNTRIES_PAGE:
      return { ...state, currentCountries: getCurrentCountries(payload) };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    case COUNT_PAGE:
      return {
        ...state,
        maxPageLimit: Math.ceil((payload.countries.length + 1) / payload.limit),
      };
    case NUMBER_PAGE:
      return {
        ...state,
        pages: pagesNumber(payload),
      };
    case MOV_PAGE:
      return { ...state, currentPage: movedPage(payload) };
    case OPTIONS_CONTINENTS:
      return { ...state, optionsByContinent: optionsContinents(payload) };
    case FILTER_CONTINENT_ACT:
      return { ...state, currentCountries: filterCountries(payload) };
    case OPTIONS_ACTIVITIES:
      return { ...state, optionsByActivities: optionsActivities(payload) };
    case ORDER_COUNTRIES_POPULATION:
      return { ...state, currentCountries: sortCountriesPopulation(payload) };
    case ADD_COUNTRIES_TO_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
