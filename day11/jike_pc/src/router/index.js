import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/signin', component: () => import('@/views/SignIn.vue') },
  // { path: '/index', component: () => import('@/views/index/IndexPage.vue') },
  {
    path: '/layout',
    redirect: '/index',
    component: () => import('@/layout/layout.vue'),
    children: [
      {
        path: '/index',
        component: () => import('@/views/IndexPage.vue')
      },
      {
        path: '/count',
        component: () => import('@/views/CountPage.vue')
      },
      {
        path: '/article',
        component: () => import('@/views/ArticlePage.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
