import { connect } from 'react-redux';

// Import duck methods
import { citySelected, getGeolocation, getRestaurantsByCityID } from '../ducks/RestaurantDuck';

// Import component
import Component from '../components/CityDropdown';
import { defaultCities } from '../config';
import { hitGeolocation, getCurrentCityFromLocalStorage } from '../libs/helpers';

// Map props
const mapStateToProps = (state) => ({
  defaultCities,
  currentCity: state.restaurantDuck.city
});

// Map events
const mapDispatchToProps = (dispatch) => ({
  getRestaurantsByCityID: (cityID) => dispatch(getRestaurantsByCityID(cityID, true)),
  onCitySelected: (city) => dispatch(citySelected(city)),
  getGeolocation: (params) => dispatch(getGeolocation(params)),

  // Helper
  hitGeolocation: (p, cb) => hitGeolocation(p, cb),
  getCurrentCityFromLocalStorage: () => getCurrentCityFromLocalStorage()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
