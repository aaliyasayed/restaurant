import { connect } from 'react-redux';

import { getRestaurantDetails } from '../ducks/RestaurantDuck';

import Component from '../components/RestaurantDetails';

const mapStateToProps = (state) => ({
  restaurantDetails: state.restaurantDuck.restaurant_details
});

const mapDispatchToProps = (dispatch) => ({
  getRestaurantDetails: (resID) => dispatch(getRestaurantDetails(resID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
