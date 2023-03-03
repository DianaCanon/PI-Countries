import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_DETAIL_COUNTRY = "GET_DETAIL_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRIES_PAGE = "GET_COUNTRIES_PAGE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const COUNT_PAGE = "COUNT_PAGE";
export const NUMBER_PAGE = "NUMBER_PAGE";
export const MOV_PAGE = "MOV_PAGE";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const FILTER_CONTINENT_ACT = "FILTER_CONTINENT_ACT";
export const OPTIONS_CONTINENTS = "OPTIONS_CONTINENTS";
export const OPTIONS_ACTIVITIES = "OPTIONS_ACTIVITIES";
export const ORDER_COUNTRIES_POPULATION = "ORDER_COUNTRIES_POPULATION";

export const getAllCountries = () => {
  return async (dispatch) => {
    const response = await axios.get(`/countries`);
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: response.data,
    });
  };
};

export const getDetailCountry = (id) => {
  return (dispatch) => {
    return fetch(`/countries/${id}`)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: GET_DETAIL_COUNTRY,
          payload: json,
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_DETAIL_COUNTRY,
          payload: err.response.data,
        });
        alert(err.response.data);
      });
  };
};

export const getCountryByName = (name) => {
  return (dispatch) => {
    axios
      .get(`/countries?name=${name}`)
      .then((res) =>
        dispatch({
          type: GET_COUNTRY_BY_NAME,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch({
          type: GET_COUNTRY_BY_NAME,
          payload: [],
        });
      });
  };
};

export const createActivity = (activity) => {
  return (dispatch) => {
    axios
      .post(`/activities`, activity)
      .then((res) => {
        alert(res.data);
        return dispatch({
          type: ADD_ACTIVITY,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_ACTIVITY,
          payload: [],
        });
        alert(err.response.data);
      });
  };
};

export const getCountriesPage = (page, limit, countries) => {
  return {
    type: GET_COUNTRIES_PAGE,
    payload: { page, limit, countries },
  };
};

export const setCurrentPage = (id) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: id,
  };
};

export const countPage = (countries, limit) => {
  return {
    type: COUNT_PAGE,
    payload: { countries, limit },
  };
};

export const numberPage = (maxPageLimit) => {
  return {
    type: NUMBER_PAGE,
    payload: maxPageLimit,
  };
};

export const movPage = (page, direction, maxPageLimit) => {
  return {
    type: MOV_PAGE,
    payload: { page, direction, maxPageLimit },
  };
};

export const OptionsByContinents = (countries) => {
  return {
    type: OPTIONS_CONTINENTS,
    payload: countries,
  };
};

export const filterByContinentActivity = (countries, continent, activity) => {
  return {
    type: FILTER_CONTINENT_ACT,
    payload: { countries, continent, activity },
  };
};

export const OptionsByActivities = (countries) => {
  return {
    type: OPTIONS_ACTIVITIES,
    payload: countries,
  };
};

export const sortByCountriesPopulation = (countries, criteria) => {
  return {
    type: ORDER_COUNTRIES_POPULATION,
    payload: { countries, criteria },
  };
};
