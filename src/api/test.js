import request from '@/utils/request'

export function save(data) {
  return request({
    url: '/callrecord',
    method: 'post',
    data
  })
}
