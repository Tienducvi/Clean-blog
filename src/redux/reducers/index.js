import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { apiReducer } from './apiReducer';

const reducers = combineReducers({
  header: productReducer,
  api: apiReducer,
});

export default reducers;
