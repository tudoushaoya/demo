<template>
  <div>
    <!-- 一级路由占位符 -->
    <keep-alive include="ArticlePage,LayoutPage" :max="10">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
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
// .router-link-exact-active{
//   color:red;
//   font-size: 30px;
// }
</style>
