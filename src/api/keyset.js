import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/vue-element-admin/keyset/list',
    method: 'get',
    params
  })
}