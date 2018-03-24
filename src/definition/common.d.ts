export interface Pager {
  current: number
  pageSize: number
  total?: number
}

export interface ListResponse<T> {
  success: boolean
  list: Array<T>
  page: Pager
}

export interface ErrorResponse {
  success: boolean
  message: string
  uri?: string
}

export interface DataResponse<T> {
  success: boolean
  data: T
}
