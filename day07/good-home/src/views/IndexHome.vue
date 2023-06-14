<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgList" :key="item.id">
      <img :src="item.imgSrc">
      </van-swipe-item>
      <!-- <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item> -->
    </van-swipe>
  </div>
</template>

<script>
import { getSwiper } from '@/api/user'
export default {
  data () {
    return {
      imgList: []
    }
  },
  methods: {
    async getImgList () {
      const res = await getSwiper()
      this.imgList = res.data.body
      this.imgList.forEach(item => {
        item.imgSrc = 'http://124.223.73.204:8080' + item.imgSrc
      })
      console.log(this.imgList)
    }
  },
  mounted () {
    this.getImgList()
  }
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  height: 212px;
}
img {
  width: 375px;
  height: 212px;
}
</style>
