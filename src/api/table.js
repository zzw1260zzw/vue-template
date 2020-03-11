import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/vue-admin-template/login-management/list',
    method: 'get',
    params
  })
}
