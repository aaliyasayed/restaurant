import km from 'keymirror';
import API from '../libs/api';
import { storeCurrentCityToLocalStorage, getCurrentCityFromLocalStorage } from '../libs/helpers';
import { endpoints, defaultCities } from '../config';
import { toast } from 'react-toastify';

// Define constants
const ACTIONS = km({
  SEARCH: null,
  SET_CITY: null,
  RESTAURANTS: null,
  RESET_RESTAURANTS: null,
  RESTAURANT_DETAILS: null,
  REVIEWS: null,
  LOADER: null
});

// Intial State
const initialState = {
  result: null,
  city: getCurrentCityFromLocalStorage(),
  restaurants: null,
  restaurant_details: null,
  reviews: null,
  loading: false,
};

const paginations = {
  limit: 12,
  resStart: 1
};

// Define actions
export const searchRestaurants = keyword => {
  return (dispatch, getState) => {
    (async () => {
      try {
        const api = new API();
        dispatch(showLoader());
        const response = await api.call(endpoints.search, {
          q: keyword,
          entity_type: 'city',
          entity_id: getState().restaurantDuck.city.cityID
        });
        dispatch({
          type: ACTIONS.SEARCH,
          payload: response.restaurants
        });
        dispatch(hideLoader());
      }
      catch (err) { 
        toast.error(err.message);
        dispatch(hideLoader());
      }
    })();
  };
};

export const clearSearchedRestaurant = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.SEARCH,
      payload: null
    });
  };
};

export const citySelected = (city) => {
  storeCurrentCityToLocalStorage(city);
  return dispatch => {
    dispatch({
      type: ACTIONS.SET_CITY,
      payload: city
    });
  };
};

export const getGeolocation = (param) => {
  return dispatch => {
    (async () => {
      try {
        const api = new API();
        dispatch(showLoader());
        const response = await api.call(endpoints.cities, param);
        const city = defaultCities.find(city => city.cityID === response.location_suggestions[0].id);
        dispatch(
          citySelected(city)
        );
        dispatch(
          getRestaurantsByCityID(city.cityID, true)
        );
        dispatch(hideLoader());
      }
      catch (err) { 
        dispatch(hideLoader());
        toast.error(err.message);
      }
    })();
  };
};

export const getRestaurantsByCityID = (city_id, resetCity = false) => {
  return dispatch => {
    (async () => {
      try {
        dispatch(showLoader());
        if(resetCity) {
          paginations.resStart = 1;
        }
        const api = new API();
        const response = await api.call(endpoints.search, {
          city_id,
          start: paginations.resStart,
          count: paginations.limit
        });
        paginations.resStart += paginations.limit;
        if (resetCity) {
          dispatch({
            type: ACTIONS.RESET_RESTAURANTS
          });
        }
        dispatch({
          type: ACTIONS.RESTAURANTS,
          payload: response.restaurants
        });
        dispatch(hideLoader());
      }
      catch (err) {
        dispatch(hideLoader());
        toast.error(err.message);
      }
    })();
  };
};

export const getRestaurantDetails = (res_id) => {
  return dispatch => {
    (async () => {
      try {
        const api = new API();
        dispatch(showLoader());
        const response = await api.call(endpoints.restaurant, {
          res_id
        });
        dispatch({
          type: ACTIONS.RESTAURANT_DETAILS,
          payload: response
        });
        dispatch(hideLoader());
      }
      catch (err) { 
        dispatch(hideLoader());
        toast.error(err.message);
      }
    })();
  };
};

export const getReviews = (res_id, start = 1, count = 5) => {
  return dispatch => {
    (async () => {
      try {
        const api = new API();
        dispatch(showLoader());
        const response = await api.call(endpoints.reviews, {
          res_id,
          start,
          count
        });
        dispatch({
          type: ACTIONS.REVIEWS,
          payload: response
        });
        dispatch(hideLoader());
      }
      catch (err) { 
        dispatch(hideLoader());
        toast.error(err.message);
      }
    })();
  };
};

export const showLoader = () => ({ type: ACTIONS.LOADER, payload: true });

export const hideLoader = () => ({ type: ACTIONS.LOADER, payload: false });

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTIONS.SEARCH: {
      return {
        ...state,
        result: payload
      };
    }

    case ACTIONS.SET_CITY: {
      return {
        ...state,
        city: payload
      };
    }

    case ACTIONS.RESTAURANTS: {
      return {
        ...state,
        restaurants: state.restaurants ? [...state.restaurants, ...payload] : payload
      };
    }

    case ACTIONS.RESET_RESTAURANTS: {
      return {
        ...state,
        restaurants: null
      };
    }

    case ACTIONS.RESTAURANT_DETAILS: {
      return {
        ...state,
        restaurant_details: payload
      };
    }

    case ACTIONS.REVIEWS: {
      return {
        ...state,
        reviews: payload
      };
    }

    case ACTIONS.LOADER: {
      return {
        ...state,
        loading: payload
      };
    }

    case ACTIONS.ERROR: {
      return {
        ...state,
        error: payload
      };
    }

    default: {
      return state;
    }
  }
};
