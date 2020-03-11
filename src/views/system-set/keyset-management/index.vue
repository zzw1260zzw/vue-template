<template>
  <div class="app-container">
    <div class="content-title">快捷键设置</div>
    <div class="content-table">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-table
            :data="tableData"
            style="width: 100%"
            border
            :header-cell-style="{background:'#F5F7FA',color:'#606266'}"
          >
            <el-table-column prop="name" label="功能" align="center"></el-table-column>
            <el-table-column prop="name" label="快捷键" align="center"></el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
          <el-table
            :data="tableData"
            style="width: 100%"
            border
            :header-cell-style="{background:'#F5F7FA',color:'#606266'}"
          >
            <el-table-column prop="name" label="功能" align="center"></el-table-column>
            <el-table-column prop="name" label="快捷键" align="center"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
    <div class="content-title">右键菜单设置</div>
  </div>
</template>

<script>
import { fetchList } from "@/api/keyset";
export default {
  data() {
    return {
      tableData: null
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
        this.total = response.data.total;
        this.listLoading = false;
      });
    }
  }
};
</script>

<style scoped>
</style>
