<template>
  <div class="box">
    <div class="top_module">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.imgSrc" />
        </van-swipe-item>
        <!-- <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item> -->
      </van-swipe>
      <div class="top_nav">
        <div class="top_nav_left">
          <div class="top_nav_left_left">
            <span>上海</span>
            <van-icon name="play" class="top_left_icon" />
          </div>
          <div class="top_nav_left_right">
            <van-icon name="search" class="top_right_icon" />
            <span>请输入小区或地址</span>
          </div>
        </div>
        <van-icon name="location-o" class="top_nav_right" />
      </div>
      <van-grid>
        <van-grid-item icon="wap-home-o" text="整租" />
        <van-grid-item icon="friends-o" text="合租" />
        <van-grid-item icon="location-o" text="地图找房" />
        <van-grid-item icon="shop-o" text="去出租" />
      </van-grid>
      <div class="mid">
        <h3>租房小组</h3>
        <span>更多</span>
      </div>
      <!-- <van-grid :column-num="2" :gutter="10" direction="horizontal">
        <van-grid-item
          v-for="value in 4"
          :key="value"
          icon="photo-o"
          text="文字"
        />
      </van-grid> -->
      <div class="renting">
        <div class="child" v-for="item in groups" :key="item.id">
          <div>
            <p>{{ item.title }}</p>
            <span>{{ item.desc }}</span>
          </div>
          <img :src="item.imgSrc"  />
        </div>
      </div>
      <div class="new">
        <h3>最新资讯</h3>
      </div>
      <div class="news" v-for="item in news" :key="item.id">
        <div class="news_left">
          <img :src="item.imgSrc">
        </div>
        <div class="news_right">
          <h3>{{ item.title }}</h3>
          <div>
            <span>{{ item.from }}</span>
            <span>{{ item.date }}</span>
          </div>
        </div>
      </div>
      <div class="buttom"></div>
    </div>
  </div>
</template>

<script>
import { getSwiper, getGroups, getNews } from '@/api/user'
export default {
  data () {
    return {
      imgList: [],
      groups: [],
      news: []
    }
  },
  methods: {
    async getImgList () {
      const res = await getSwiper()
      this.imgList = res.data.body
      this.imgList.forEach((item) => {
        item.imgSrc = 'http://124.223.73.204:8080' + item.imgSrc
      })
    },
    async getGroups () {
      const res = await getGroups()
      this.groups = res.data.body
      this.groups.forEach((item) => {
        item.imgSrc = 'http://124.223.73.204:8080' + item.imgSrc
      })
    },
    async getNews () {
      const res = await getNews('AREA|88cff55c-aaa4-e2e0')
      this.news = res.data.body
      this.news.forEach((item) => {
        item.imgSrc = 'http://124.223.73.204:8080' + item.imgSrc
      })
      console.log(this.news)
    }
  },
  mounted () {
    this.getImgList()
    this.getGroups()
    this.getNews()
  }
}
</script>

<style scoped lang='less'>
html {
  overflow: hidden;
}
body {
  overflow-y: auto;
}
.box {
  background-color: #f6f5f6;
}
.my-swipe .van-swipe-item {
  height: 212px;
}
img {
  width: 375px;
  height: 212px;
}
.top_module {
  position: relative;
}
.top_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 50px;
  // background-color: #fff;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 5px;
}
.top_nav_left {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-right: 10px;
  padding: 0 10px;
  height: 45px;
  flex: 1;
}
.top_nav_left_left {
  position: relative;
  margin-right: 30px;
}
.top_left_icon {
  position: absolute;
  top: 4px;
  left: 35px;
  transform: rotate(90deg);
  font-size: 12px;
  // margin-left: 5px;
  // margin-top: -20px;
}
.top_right_icon {
  margin-right: 5px;
  font-size: 18px;
}
.top_nav_right {
  font-size: 27px;
}
.top_nav_left_right {
  border-left: solid 1px #ccc;
  padding-left: 9px;
}
.top_nav_left_right span {
  color: #9c9fa1;
}
.van-hairline--top {
  height: 93px;
}

/deep/.van-grid-item__icon {
  font-size: 45px !important;
  color: #00ae66 !important;
}
.mid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;
  margin-top: 10px;
  margin-bottom: -15px;
}
.mid span {
  color: #787d82;
  font-size: 15px;
}
.renting {
  height: 180px;
  margin: 5px 10px;
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
}
.child {
  width: calc(50% - 20px); /* 子盒子宽度占一半 */
  height: 75px; /* 子盒子高度 */
  background-color: #fff; /* 子盒子背景颜色 */
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.child:nth-child(1),
.child:nth-child(2) {
  order: -1; /* 前两个子盒子顺序设置为 -1，使其在布局中提前显示 */
}
.buttom {
  height: 50px;
}
.renting .child img {
  width: 55px;
  height: 54px;
}
.renting .child p {
  font-weight: bold;
  font-size: 13px;
  line-height: 13px;
  margin-block-end: 1vh;
  margin-block-start: 1vh;
}
.renting .child span {
  color: #999;
  font-size: 12px;
}
.new {
  padding: 0 17px;
}
.news {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 17px;
}
.news img {
  width: 120px;
  height: 90px;
}
.news .news_left {
  width: 120px;
  height: 90px;
}
.news .news_right {
  padding-left: 12px;
  display: flex;
  height: 90px;
  flex-direction: column;
  justify-content: space-between;
}
.news .news_right h3 {
  margin-block-start: 0px;
  font-size: 15px;
}
.news .news_right div {
  display: flex;
  justify-content: space-between;
  span{
    color: #9c9fa1;
    font-size: 12px;
  }
}
</style>
