import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入cartItem组件
import CartItem from './components/CartItem.vue'
// 注册全局组件
Vue.component('CartItem', CartItem)
import NumberBox from './components/NumberBox.vue'
Vue.component('NumberBox', NumberBox)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
