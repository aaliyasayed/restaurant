import { connect } from 'react-redux';

//Import duck methods
import { getRestaurantsByCityID } from '../ducks/RestaurantDuck';

// Import Component
import Component from '../components/RestaurantListing';

const mapStateToProps = (state) => ({
  currentCity: state.restaurantDuck.city,
  restaurants: state.restaurantDuck.restaurants && state.restaurantDuck.restaurants,
});

const mapDispatchToProps = (dispatch) => ({
  getRestaurantsByCityID: (cityID) => dispatch(getRestaurantsByCityID(cityID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);