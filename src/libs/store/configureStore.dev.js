import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../../reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState = {}) =>
  createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
