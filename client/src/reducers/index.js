import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
const Reducer = combineReducers({
  authReducer,
  routerReducer
})

export default Reducer;