import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import auth from './auth/reducer';
import project from './project/reducer';

const store = createStore(
  combineReducers({ auth, project }),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;