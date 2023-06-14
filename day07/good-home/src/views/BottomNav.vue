<template>
  <div>
    <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o" to="/indexhome">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search" to="/find">找房</van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o" to="/consult">咨询</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'setting'
    }
  },
  methods: {}
}
</script>

<style scoped lang='less'></style>
