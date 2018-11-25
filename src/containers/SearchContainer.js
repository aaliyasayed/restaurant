import { connect } from 'react-redux';

// Import duck methods
import { searchRestaurants, clearSearchedRestaurant } from '../ducks/RestaurantDuck';

// Import component
import Component from '../components/SearchBar';
import { defaultCities } from '../config';

// Map props
const mapStateToProps = (state) => ({
  defaultCities,
  result: state.restaurantDuck.result
});

// Map events
const mapDispatchToProps = (dispatch) => ({
  searchRestaurants: (keyword) => dispatch(searchRestaurants(keyword)),
  clearSearchedRestaurant: () => dispatch(clearSearchedRestaurant())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
