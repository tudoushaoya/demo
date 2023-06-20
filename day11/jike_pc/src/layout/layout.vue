<template>
  <el-container class="box">
  <el-header>
    <img src="../assets/logo.536c5d80.png" alt="">
    <div>
        <span>{{ userinfo.name }}</span>
        <i class="el-icon-loading"></i>
        <el-popconfirm title="您确认退出黑马面运营后台吗？" @confirm="signout">
            <el-button type="text" slot="reference">退出</el-button>
          </el-popconfirm>
    </div>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu  router :default-active="$route.path">
        <el-menu-item index="/index"><i class="el-icon-house"></i> 首页</el-menu-item>
        <el-menu-item index="/count"><i class="el-icon-house"></i>内容</el-menu-item>
        <el-menu-item index="/article"><i class="el-icon-house"></i>文章</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import { getUserInfo } from '@/api/user'
export default {
  name: 'LayoutPage',
  data () {
    return {
      userinfo: {}
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    signout () {
      this.$router.push('/signin')
      this.$store.commit('user/updateToken', '')
    },
    async getUserInfo () {
      const res = await getUserInfo()
      console.log(res)
      this.userinfo = res.data
    }
  }
}
</script>

<style scoped lang='scss'>
.box {
    height: 100vh;
}
.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #001529;
    color: #fff;
    img {
        width: 160px;
    }
    .el-button {
        color: #fff;
    }
}
.el-aside {
    background-color: #001529;
}
.el-menu-item {
  background-color: #001529;
}
</style>
