import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialStore) {
  return createStore(
    reducers,
    initialStore,
    composeEnhancers(applyMiddleware(thunk)),
  );
}
