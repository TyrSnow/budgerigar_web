import { Pager } from "./common";

export interface ProjectListInfo {
  _id: string
  name: string
}

export interface ProjectList {
  list: Array<ProjectListInfo>
  page: Pager
}