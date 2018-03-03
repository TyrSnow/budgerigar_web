import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { AppStore, AuthState } from '../index.d';
import * as TYPES from './actionType';
import { ProjectListInfo, ProjectList } from '../../definition/project';
import { Pager } from '../../definition/common';

export function update_list(list: Array<ProjectListInfo>, page: Pager): any {
  return {
    type: TYPES.UPDATE_PROJECT_LIST,
    list,
    page,
  };
}

export function set_active(data: object): any {
  return {
    type: TYPES.UPDATE_PROJECT_LIST,
    data,
  };
}
export function load_project(id: string): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    return axios.get(`/api/Projects/${id}`).then(
      resp => dispatch(set_active(resp.data.data))
    );
  };
}
export function load_list(): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    return axios.get('/api/Projects').then(
      (resp) => dispatch(update_list(resp.data.data, resp.data.list))
    );
  };
}

export function append_list(data: ProjectListInfo): any {
  return {
    type: TYPES.APPEND_LIST,
    data,
  };
}
export function create_list(): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    return axios.post('/api/Projects').then(
      (resp) => {
        dispatch(load_project(resp.data.data._id));
        return dispatch(append_list(resp.data.data));
      }
    );
  };
}
