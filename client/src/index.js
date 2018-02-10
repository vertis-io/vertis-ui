import React from 'react';
import { render } from 'react-dom';
import App from './components/App'
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore, history } from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('app'))