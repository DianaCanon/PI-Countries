import {
  ADD_ACTIVITY,
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_DETAIL_COUNTRY,
  GET_COUNTRIES_PAGE,
  SET_CURRENT_PAGE,
  COUNT_PAGE,
  NUMBER_PAGE,
  MOV_PAGE,
} from "./actions.js";

const initialState = {
  countries: [],
  activities: [],
  countryDetail: {},
  countriesByName: [],
  currentCountries: [],
  limit: 10,
  currentPage: 1,
  maxPageLimit: 0,
  minPageLimit: 0,
  pages: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return { ...state, countries: payload };
    case GET_DETAIL_COUNTRY:
      return { ...state, countryDetail: payload };
    case GET_COUNTRY_BY_NAME:
      return { ...state, countriesByName: payload };
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
    default:
      return { ...state };
  }
};

const getCurrentCountries = ({ page, limit, countries }) => {
  console.log("Page: ", page);
  const start = +page === 1 ? 0 : (page - 1) * limit - 1;
  const end = +page === 1 ? limit - 1 : limit * page - 1;
  console.log("start: ", start);
  console.log("end: ", end);
  return countries.slice(start, end);
};

const pagesNumber = ({ maxPageLimit }) => {
  const pagesInit = [];
  for (let i = 1; i <= maxPageLimit; i++) {
    pagesInit.push(i);
  }
  return pagesInit;
};

const movedPage = ({ page, direction, maxPageLimit, limit, countries }) => {
  let numberPage = +page;
  if (direction === "Prev" && numberPage >= 1) {
    numberPage = numberPage++;
  }

  if (direction === "Next" && +numberPage <= maxPageLimit) {
    return +page + 1;
  }
};

export default reducer;
