import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import IndexHome from '@/views/IndexHome.vue'
import MyMap from '@/views/MyMap.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/indexhome',
    component: IndexHome
  },
  {
    path: '/mymap',
    component: MyMap
  }
]

const router = new VueRouter({
  routes
})

export default router
