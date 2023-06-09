<template>
  <div>
    <router-link to="/find" >发现</router-link>&nbsp;
    <router-link :to="{name:'find'}" >发现</router-link>&nbsp;
    <!-- 查询参数 带有?号的 -->
    <router-link to="/my?a=1&b=2">我的</router-link>
    <!-- 路径参数 因为1发现就是路径的一部分 -->
    <router-link to="/article/1" >文章1</router-link>&nbsp;
    <button @click="fn">我的</button>&nbsp;
    <router-link to="/sc">sc</router-link>&nbsp;
    <router-link to="/sc/cd">cd</router-link>
    <hr>
    <!-- 一级路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    fn () {
      this.$router.push('/my?id=200')
    }
  }
}
</script>

<style scoped lang='less'>
// 模糊匹配 只要url地址栏上写的完整地址，然后所有的router-link只要to的值属于url一部分，也会带上这个类名
// 实际项目中模糊匹配用得很多
// .router-link-active{
//   color:red;
//   font-size: 20px;
// }
// 精确匹配 必须url地址栏和router-link中完整一致才会有高亮
.router-link-exact-active{
  color:red;
  font-size: 30px;
}
</style>
