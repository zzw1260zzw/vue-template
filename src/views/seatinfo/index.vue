<template>
  <div class="app-container">
    <div class="content-header">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6" :offset="6">
            <el-form-item label="席位名称:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="6">
            <el-form-item label="席位ID:">
              <el-input v-model="form.name" placeholder="四位数字"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="200">
          <el-col :span="5" :offset="5">
            <el-button type="primary">查询</el-button>
          </el-col>
          <el-col :span="5" :offset="0">
            <el-button type="primary">批量删除</el-button>
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
        <el-table-column prop="id" label="席位ID" width="180"></el-table-column>
        <el-table-column prop="seat_name" label="席位状态" width="180"></el-table-column>
        <el-table-column align="center" label="席位详情">
          <el-link type="primary">详情</el-link>
        </el-table-column>
        <el-table-column align="center" label="操作">
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
        class="pagination-right"
      />
    
  </div>
</template>

<script>
import { fetchList } from "@/api/seatinfo";
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
        sort: '+id'
      },
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
.el-button {
  padding: 12px 60px;
}
.pagination-right{
  float: right;
}
</style>

