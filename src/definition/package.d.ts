import { Pager } from "./common";

export interface PackageListInfo {
  _id: string
  name: string
}

export interface PackageList {
  list: Array<PackageListInfo>
  page: Pager
}
