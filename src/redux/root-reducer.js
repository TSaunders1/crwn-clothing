import { combineReducers } from 'redux';
import { userReducer } from './reducers';
import { cartReducer } from './reducers/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
