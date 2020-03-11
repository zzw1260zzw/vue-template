<template>
  <div class="app-container">
    <div class="content-header">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6" :offset="6">
            <el-form-item label="组件名称:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="6">
            <el-form-item label="组件ID:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="200">
          <el-col :span="5" :offset="5">
            <el-button type="primary">查询</el-button>
          </el-col>
          <el-col :span="5" :offset="0">
            <el-button type="primary">删除</el-button>
          </el-col>
          <el-col :span="5" :offset="0">
            <el-button type="primary">新增</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="content-table">
      <el-table :data="tableData" v-loading="listLoading" style="width: 100%" border>
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="组件ID" width="180"></el-table-column>
        <el-table-column prop="status" label="组件名称" width="180"></el-table-column>
        <el-table-column prop="xw_boolean" align="center" label="组件作用"></el-table-column>
        <el-table-column prop="zhs_boolean" align="center" label="使用状态"></el-table-column>
        <el-table-column prop="zhs_boolean" align="center" label="开发人"></el-table-column>
        <el-table-column align="center" label="操作">
          <el-link type="primary">修改</el-link>&nbsp;&nbsp;&nbsp;
          <el-link type="primary">删除</el-link>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { fetchList } from "@/api/userinfo";
import Pagination from "@/components/Pagination";

export default {
  data() {
    return {
      form: {
        name: ""
      },
      tableData: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id"
      }
    };
  },
  components: {
    Pagination
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
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

