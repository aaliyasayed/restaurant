import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialState = {};

const middlewrare = [thunk];

export default createStore(
  rootReducer, 
  initialState, 
  applyMiddleware(...middlewrare)
);