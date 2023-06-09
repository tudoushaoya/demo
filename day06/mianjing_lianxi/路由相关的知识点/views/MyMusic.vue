<template>
  <!-- 有很多个页面都可以点击跳转到当前这个页面 -->
  <div>我的音乐
     <button @click="$router.go(-1)">返回</button>
     <button @click="$router.back()">返回</button>
    </div>
</template>

<script>
export default {
  created () {
    // 英语中问题 question
    console.log(this.$route.query)
    console.log(this.$route.query.a)
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style scoped lang='less'></style>
