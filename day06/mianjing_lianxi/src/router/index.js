import Vue from 'vue'
import VueRouter from 'vue-router'
// 因为VueRouter是vue的插件

// 以/开头可以认为是绝对路径
// 相对路径
// 路由规则
import LayoutPage from '@/views/layout.vue'
import ArticlePage from '@/views/article.vue'
import CollectPage from '@/views/collect.vue'
import LikePage from '@/views/like.vue'
import UserPage from '@/views/user.vue'
import ArticleDetailPage from '@/views/article-detail.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: LayoutPage,
    children: [
      { path: 'article', component: ArticlePage },
      { path: 'collect', component: CollectPage },
      { path: 'like', component: LikePage },
      { path: 'user', component: UserPage }
    ]
  },
  {
    path: '/detail/:id', component: ArticleDetailPage
  }
]

// from 自己家 to 自己家
// 解决vue路由重复导航错误
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  // 把原型上的push方法重写了，只重写把错误用catch进行异常捕获
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  // mode:'history',
  routes
})

export default router

// 二种
// url?id=1 -> this.$route.query
// url/1 -> this.$route.params
