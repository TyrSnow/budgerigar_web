import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { AppStore, AuthState } from '../index.d';
import * as TYPES from './actionType';

export function updateUser(user: AuthState): any {
  return {
    type: TYPES.UPDATE_USER,
    user
  };
}

export function clearAuth(): any {
  return {
    type: TYPES.CLEAR_AUTH,
  };
}

export function regist(
  name: string,
  password: string,
): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    return axios.post('/api/Users', {
      name,
      password,
    }).then(
      resp => dispatch(updateUser(resp.data.data))
    );
  };
}

export function logIn(
  user: string,
  password: string,
  remember: boolean = false
): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    return axios.post('/api/Sessions', {
      user,
      password,
      remember,
    }).then(
      resp => dispatch(updateUser(resp.data.data),
    ));
  };
}

export function solveAuth(token: string): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    return axios.get('/api/Sessions', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(
      resp => dispatch(updateUser(resp.data.data))
    ).catch(err => dispatch(clearAuth()));
  };
}