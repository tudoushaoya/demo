<template>
  <div class="article-detail-page" >
    <nav class="nav"> <span class="back" @click="$router.back()">&lt;</span> 面经详情</nav>
    <header class="header">
      <h1>{{ list.stem }}</h1>
      <p>{{ list.createdAt }} | {{ list.views }} 浏览量 | {{ list.likeCount }} 点赞数</p>
      <p>
        <img :src="list.creatorAvatar" alt="">
        <span>{{ list.creatorName }}</span>
      </p>
    </header>
    <main class="body">
      {{ list.content }}
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: {}
    }
  },
  methods: {
    async getList () {
      const res = await this.$axios.get(`https://mock.boxuegu.com/mock/3083/articles/${this.$route.params.id}`)
      this.list = res.data.result
    }
  },
  mounted () {
    this.getList()
  },
  name: 'ArticleDetailPage'
}
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
     padding: 0 15px;
     p {
       color: #999;
       font-size: 12px;
       display: flex;
       align-items: center;
     }
     img {
       width: 40px;
       height: 40px;
       border-radius: 50%;
       overflow: hidden;
     }
  }
  .body {
     padding: 0 15px;
  }
}
</style>
