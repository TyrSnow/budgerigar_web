import { Action } from 'redux';
import { ProjectListInfo } from '../../definition/project';
import { Pager } from '../../definition/common';

export interface ProjectAction extends Action {
  list: Array<ProjectListInfo>,
  page: Pager,
}
