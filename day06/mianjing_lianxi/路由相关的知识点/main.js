import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 必须打开刚刚我发给你们的vue项目
// 打开一堆东西没有
// const a = '100'
// console.log(a)
// vscode只能打开一个项目
