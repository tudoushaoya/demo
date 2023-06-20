<template>
  <div>
    <el-card>
      <template #header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <el-form>
        <el-form-item>
          <span>状态：</span>
          <el-radio-group v-model="radio">
            <el-radio :label="1">全部</el-radio>
            <el-radio :label="2">草稿</el-radio>
            <el-radio :label="3">待审核</el-radio>
            <el-radio :label="4">审核通过</el-radio>
            <el-radio :label="5">审核通过</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <span>频道：</span>
          <el-select v-model="active" placeholder="请选择文章频道">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <span>日期：</span>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <template #header> 根据筛选条件共查询到 5000 条结果: </template>
      <el-table :data="articles">
        <el-table-column label="封面" prop=""></el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="状态" prop="status">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 2">
              <el-tag type="success" effect="plain"> 审核通过 </el-tag>
            </span>
            <span v-else-if="scope.row.status === 1">
              <el-tag effect="plain"> 待审核 </el-tag>
            </span>
            <span v-else-if="scope.row.status === 3">
              <el-tag type="danger" effect="plain"> 审核失败 </el-tag>
            </span>
            <span v-else>
              <el-tag type="warning" effect="plain"> 草稿 </el-tag>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="发布时间" prop="pubdate"></el-table-column>
        <el-table-column label="阅读数" prop="read_count"></el-table-column>
        <el-table-column label="评论数" prop="comment_count"></el-table-column>
        <el-table-column label="点赞数" prop="like_count"></el-table-column>
        <el-table-column label="操作">
          <template #default>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getChannels } from '@/api/else'
import { getArticles } from '@/api/article'
export default {
  name: 'CountPage',
  data () {
    return {
      radio: 1,
      options: [],
      value1: '',
      active: '',
      articles: []
    }
  },
  methods: {
    async getChannels () {
      const res = await getChannels()
      console.log(res)
      this.options = res.data.channels
      console.log(this.options)
    },
    async getArticles () {
      const res = await getArticles()
      this.articles = res.data.results
      console.log(this.articles)
    }
  },
  created () {
    this.getChannels()
    this.getArticles()
  }
}
</script>

<style scoped lang='scss'>
.el-card {
  margin-bottom: 20px;
}
</style>
