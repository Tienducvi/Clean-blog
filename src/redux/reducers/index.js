import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { apiReducer } from './apiReducer';
import { postReducer } from './postReducer';

const reducers = combineReducers({
  header: productReducer,
  api: apiReducer,
  post: postReducer,
});

export default reducers;
