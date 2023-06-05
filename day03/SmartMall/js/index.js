// 接口地址：http://cba.itlike.com/public/index.php?s=/api/page/detail
// 请求方式：get

// swiper初始化代码（思考：在Vue中应该在哪里初始化）

const app = new Vue({
  el: '#app',
  data: {
    swiperList: [], // 轮播数据
    navList: [], // 导航数据
    goodsList: [], // 商品数据
  },
  methods: {
    async getSwiperList() {
      const res = await axios.get(
        'http://cba.itlike.com/public/index.php?s=/api/page/detail'
      )
      this.swiperList = res.data.data.pageData.items[1].data
      this.navList = res.data.data.pageData.items[3].data
      this.goodsList = res.data.data.pageData.items[6].data
      console.log(this.swiperList)
      console.log(this.navList)
      console.log(this.goodsList)
    },
  },
  created() {},
  mounted() {
    this.getSwiperList().then(() => {
      const mySwiper = new Swiper('.swiper', {
        speed: 500,
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 500,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        centeredSlides: true,
        observer: true,
        observeParents: true,
        observerUpdate: true,
      })
    })
  },
})
