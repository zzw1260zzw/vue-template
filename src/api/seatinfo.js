import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/seatinfo/list',
    method: 'get',
    params: query
  })
}