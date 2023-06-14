<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="this.$router.back()" class="top"/>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit"
        >注册</van-button
        >
        <div class="link">
            <router-link to="/signin">已有帐号？去登陆</router-link>
        </div>
      </div>
    </van-form>
  </div>
</template>

<script>
import { signup } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await signup(values)
      this.$toast.success('注册成功')
      console.log(res)
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped lang='less'>
.link {
  text-align: center;
  margin-top: 18px;
}
</style>
