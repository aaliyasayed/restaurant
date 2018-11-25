import { combineReducers } from 'redux';
import restaurantDuck from './ducks/RestaurantDuck';

const RootReducer = combineReducers({
  restaurantDuck
});

export default RootReducer;
