import { Store } from 'redux';
import * as Immutable from 'immutable';
import { ProjectListInfo } from '../definition/project';
import { Pager } from '../definition/common';

export interface ProjectState {
  list: Array<ProjectListInfo>
  page: Pager
}
export interface AuthState {
  user: string
  head: string
  token: string
}

export interface AppState {
  auth: Map<String, AuthState>
}

export interface AppStore extends Immutable.Map<String, AppState> {

}

