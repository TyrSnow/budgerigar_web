import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { message } from 'antd';
import { AppStore } from '../index.d';
import * as TYPES from './actionType';
import { ProjectListInfo } from '../../definition/project';
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
    type: TYPES.SET_ACTIVE_PROJECT,
    data,
  };
}

export function load_project(id: string): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    dispatch({
      type: TYPES.LOAD_ACTIVE,
    });
    return axios.get(`/api/Projects/${id}`).then(
      resp => dispatch(set_active(resp.data.data))
    ).catch(
      err => message.error(err.message),
    );
  };
}

export function load_list(): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    return axios.get('/api/Projects').then(
      (resp) => {
        if (resp.data.list.length > 0) {
          dispatch(load_project(resp.data.list[0]._id));
        }
        return dispatch(update_list(resp.data.list, resp.data.page));
      }
    );
  };
}

export function append_list(data: ProjectListInfo): any {
  return {
    type: TYPES.APPEND_LIST,
    data,
  };
}

export function create(name: string): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch) => {
    return axios.post('/api/Projects', {
      name,
    }).then(
      (resp) => {
        dispatch(hideCreate());
        dispatch(load_project(resp.data.data._id));
        return dispatch(append_list(resp.data.data));
      }
    );
  };
}

export function clearActive(): any {
  return {
    type: TYPES.CLEAR_ACTIVE,
  };
}
export function remove(id: string): any {
  return {
    type: TYPES.REMOVE_PROJ,
    id,
  };
}
export function deleteProj(id: string): ThunkAction<Promise<Action>, AppStore, any> {
  return (dispatch, getState) => {
    return axios.delete(`/api/Projects/${id}`).then(
      resp => {
        let store = getState();
        let list = store.getIn(['project', 'list']);
        if (list.size > 1) { // 删除成功打开仍然存在的第一个项目
          dispatch(load_project(list.getIn([1, '_id'])));
        } else {
          dispatch(clearActive());
        }
        return dispatch(remove(id));
      },
    );
  };
}

export function showCreate(): any {
  return {
    type: TYPES.SHOW_CREATE,
  };
}

export function hideCreate(): any {
  return {
    type: TYPES.HIDE_CREATE,
  };
}
