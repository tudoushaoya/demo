import request from '../utils/request'

export const signup = data => {
  return request.post('/user/registered', data)
}
export const signin = data => {
  return request.post('/user/login', data)
}
export const getSwiper = () => {
  return request.get('/home/swiper')
}
