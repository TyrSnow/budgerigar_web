import { Pager } from "./common";

export interface ProjectListInfo {
  _id: string
  name: string
  update_date: Date
}

export interface ProjectList {
  list: Array<ProjectListInfo>
  page: Pager
}