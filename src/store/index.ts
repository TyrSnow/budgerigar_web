import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import auth from './auth/reducer';

const store = createStore(
  combineReducers({ auth }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;