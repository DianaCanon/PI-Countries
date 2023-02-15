import { GET_ALL_COUNTRIES, GET_DETAIL_COUNTRY } from './actions.js';


const initialState = {
    countries: [],
    activities: [],
    countryDetail: {}
}



const reducer = (state= initialState, {type, payload} ) => {
    switch(type) {
        case GET_ALL_COUNTRIES:
            return {...state, countries: payload}
        case GET_DETAIL_COUNTRY:
            return {...state, countryDetail: payload}

        default: 
        return {...state}
    }
}


export default reducer;