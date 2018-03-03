import * as Immutable from 'immutable';
import axios from 'axios';
import * as TYPES from './actionType';
import { AuthAction } from './action.d';

const initialState = Immutable.Map({
  isLogIn: false,
  token: undefined,
  user: '',
  head: '',
});

export default (state = initialState, action: AuthAction) => {
  console.debug(action);
  switch (action.type) {
    case TYPES.CLEAR_AUTH:
      return initialState;
    case TYPES.UPDATE_USER:
      // 更新下拦截器
      axios.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${action.user.token}`;
          return config;
        },
      );

      // 存localStorage里
      localStorage.token = action.user.token;
      
      return state.merge(Immutable.Map(Object.assign(
        {
          isLogIn: true,
        },
        action.user
      )));
    default:
      return state;
  }
};