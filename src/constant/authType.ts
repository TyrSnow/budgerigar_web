export enum AUTH_TYPE {
  USER = 0,
  ADMIN,
  ROOT
}
export const AUTH_TYPE_MAP = {
  [AUTH_TYPE.USER]: '用户',
  [AUTH_TYPE.ADMIN]: '管理员',
  [AUTH_TYPE.ROOT]: '超级管理员',
};
