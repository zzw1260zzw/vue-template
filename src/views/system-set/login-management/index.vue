<template>
  <div class="app-container">
    <div class="content-header">登陆方式:</div>

    <div class="content-table">
      <el-table :data="tableData" v-loading="listLoading" style="width: 100%" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="status" label="登陆方式标识" width="180"></el-table-column>
        <el-table-column prop="status" align="center" label="登陆方式"></el-table-column>
        <el-table-column prop="status" align="center" label="使用状态"></el-table-column>
        <el-table-column align="center" label="操作">
          <el-link type="primary">应用</el-link>&nbsp;&nbsp;&nbsp;
          <el-link type="primary">取消应用</el-link>
        </el-table-column>
      </el-table>
    </div>

    <div class="content-footer">
      <el-button type="primary">新增</el-button>
       <el-button type="primary">删除</el-button>
    </div>
  </div>
</template>

<script>
import { fetchList } from "@/api/table";

export default {
  data() {
    return {
      tableData: null,
      total: 0,
      listLoading: true
    };
  },

  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList().then(response => {
        this.tableData = response.data.items;
        this.listLoading = false;
      });
    }
  }
};
</script>

<style scoped>
</style>

