import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import Reducer from '../reducers';

const history = createBrowserHistory();
const router = routerMiddleware(history);
const middleware = applyMiddleware(
  thunk,
  router
);

function configureStore(){
  return createStore(Reducer, middleware)
}

export { configureStore, history };