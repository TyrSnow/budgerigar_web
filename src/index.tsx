import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import history from './shared/history';
import store from './store';
import { auth } from './store/actions';
import App from './App';
import './index.css';

/** 将localStorage的参数同步到sessionStorage */
sessionStorage.token = localStorage.token;

/** 配置axios拦截器 */
axios.interceptors.response.use(
  response => {
    if (response.data.success) {
      return response;
    }
    return Promise.reject(response.data);
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.dispatch(auth.clearAuth());
          history.push('login');
          break;
        default:
      }
    }
    return Promise.reject(error.response.data);   // 返回接口返回的错误信息
  }
);

/** 引入start */
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
