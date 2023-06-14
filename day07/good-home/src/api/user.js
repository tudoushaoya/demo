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
export const getGroups = () => {
  return request.get('/home/groups')
}
export const getNews = data => {
  return request.get('/home/news', data)
}
export const getCity = () => {
  return request.get('/area/city?level=1')
}
