import { connect } from 'react-redux';
import { citySelected } from '../ducks/RestaurantDuck';
import { defaultCities } from '../config';

// Import component
import City from '../components/City';

const mapStateToProps = () => ({
  defaultCities
});

// Map props
const mapDispatchToProps = (dispatch) => ({
  onCitySelected: (city) => dispatch(citySelected(city)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
