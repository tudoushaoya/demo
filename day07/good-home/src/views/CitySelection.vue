<template>
<div>
    <van-nav-bar title="城市选择" left-arrow @click-left="this.$router.back()" class="top"/>
      <van-index-bar>
        <van-index-anchor index="当前定位" />
        <van-cell title="北京" />
        <van-index-anchor index="热门城市" />
        <van-cell title="北京" />
        <van-cell title="上海" />
        <van-cell title="广州" />
        <van-cell title="深圳" />
        <van-index-anchor index="A" />
        <van-cell title="阿拉伯" />
        <van-cell title="阿联酋" />
        <van-cell title="阿索斯" />
      </van-index-bar>
</div>
</template>

<script>
import { getCity } from '@/api/user'
export default {
  data () {
    return {
      city: []
    }
  },
  methods: {
    async getCity () {
      const res = await getCity()
      this.city = res.data.body
      console.log(this.city)
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>

<style scoped lang='less'></style>
