import { connect } from 'react-redux';
import { getReviews } from '../ducks/RestaurantDuck';
import Component from '../components/Reviews';

const mapStateToProps = (state) => ({
  reviews: state.restaurantDuck.reviews
});

const mapDispatchToProps = (dispatch) => ({
  getReviews: (resID) => dispatch(getReviews(resID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
