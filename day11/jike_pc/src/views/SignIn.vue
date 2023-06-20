<template>
  <div class="box">
    <el-card>
        <template #header>
                <img src="../assets/logo.536c5d80.png" alt="">
        </template>
        <el-form  :rules="signinfromRules" :model="signinFrom" ref="signinRef">
            <el-form-item prop="mobile">
                <el-input placeholder="请输入手机号" v-model.trim="signinFrom.mobile" ></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input placeholder="请输入验证码" v-model.trim="signinFrom.code" @keyup.enter.native="signin"></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked">我已阅读并同意「用户协议」和「隐私条款」</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="signin">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      signinFrom: {
        mobile: '13911111111',
        code: '246810'
      },
      signinfromRules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '验证码格式不正确', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    async signin () {
      try {
        await this.$refs.signinRef.validate()
        await this.$store.dispatch('user/signin', this.signinFrom)
        this.$message.success('登录成功')
        this.$router.push('/layout')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.el-button--primary {
    width: 100%;
}
.box {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/login.ca162aa8.png") no-repeat center;
  background-size: cover;
  display: flex;
    justify-content: center;
    align-items: center;
}
.el-card {
    width: 420px;
    height: 390px;

}
::v-deep .el-card__header {
    /* background-color: #766fef; */
    color: #fff;
    text-align: center;
}
img {
    width: 200px;
    height: 60px;
}
</style>
