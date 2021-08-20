import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store';

// const initialState = window.__INITIAL_STATE__;
// const store = configureStore(initialState);
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
