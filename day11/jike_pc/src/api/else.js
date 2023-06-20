import request from '@/utils/request'

// 获取频道
export const getChannels = () => {
  return request({
    method: 'GET',
    url: '/v1_0/channels'
  })
}
