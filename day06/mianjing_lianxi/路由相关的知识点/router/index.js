import Vue from 'vue'
import VueRouter from 'vue-router'
import FindMusic from '@/views/FindMusic.vue'
import MyMusic from '@/views/MyMusic.vue'
import NotFound from '@/views/NotFound.vue'
import SiChuang from '@/views/SiChuang.vue'
import ChengDu from '@/views/ChengDu.vue'
import NeiJiang from '@/views/NeiJiang.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
Vue.use(VueRouter)// 因为VueRouter是vue的插件

// 以/开头可以认为是绝对路径
// 相对路径
// 路由规则
const routes = [
  { path: '/', redirect: '/find' }, // 路由重定向 避免页面刚打开的时候空白的
  // 如果有时候我们发现path这个路径太长了，我们可以给当前这个路由规则起一个名字
  { path: '/find', component: FindMusic, name: 'find' }, // 命名路由 别名 小李 小王
  { path: '/my', component: MyMusic },
  {
    path: '/sc',
    component: SiChuang,
    children: [
      { path: '/sc/cd', component: ChengDu },
      { path: '/sc/nj', component: NeiJiang }
    ]
  },
  // :id可以理解成placeholder效果 占位符的效果
  { path: '/article/:id', component: ArticleDetail },
  { path: '*', component: NotFound }// 为了避免用户url写错了出现白屏效果 加一个404提示
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
