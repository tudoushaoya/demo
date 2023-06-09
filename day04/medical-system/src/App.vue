<template>
  <div>
    <input placeholder="输入关键字搜索" />
    <table class="my-table">
      <thead>
        <tr>
          <th>就诊日期</th>
          <th>医生姓名</th>
          <th>诊断结果</th>
          <th>处方信息</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in records" :key="index">
          <td>{{ item.date }}</td>
          <td>{{ item.doctor }}</td>
          <td>{{ item.diagnosis }}</td>
          <td>{{ item.prescription }}</td>
          <td>详情</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.my-table {
  border-collapse: collapse;
  width: 100%;
}

.my-table td,
.my-table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.my-table th {
  background-color: #f2f2f2;
}
</style>
<script>
export default {
  data() {
    return {
      records: [
        {
          date: '2022-01-01',
          doctor: '张三',
          diagnosis: '感冒',
          prescription: '感冒药',
        },
        {
          date: '2022-02-01',
          doctor: '李四',
          diagnosis: '头疼',
          prescription: '止疼药',
        },
        {
          date: '2022-03-01',
          doctor: '王五',
          diagnosis: '腰痛',
          prescription: '止痛贴',
        },
      ],
    }
  },
}
</script>
