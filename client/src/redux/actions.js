import axios from "axios";

export const GET_ALL_COUNTRIES = "LIST_COUNTRIES";
export const GET_DETAIL_COUNTRY = "GET_DETAIL_COUNTRY";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const FILTER_CONTINENT_ACT = "FILTER_CONTINENT_ACT";
export const ORDER = "ORDER";

export const getAllCountries = () => {
  return async (dispatch) => {
    const response = await axios("http://localhost:3001/countries");
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: response.data,
    });
  };
};

export const getDetailCountry = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: GET_DETAIL_COUNTRY,
          payload: json,
        }).catch((err) => err.message)
      );
  };
};
