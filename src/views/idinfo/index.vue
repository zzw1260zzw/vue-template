<template>
  <div class="app-container">
    <div class="tree-container">
      <div class="tree-title">ZHS信息</div>
      <div class="tree-layout">
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
          default-expand-all
          class="el-tree"
        ></el-tree>
      </div>
    </div>
    <div class="car-message">
      <div class="tree-title">车辆信息</div>
      <div class="content-header">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="车辆名称">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
          <el-form-item label="IP网段">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
          <el-form-item label="I状态">
            <el-select v-model="formInline.region" placeholder="状态是否绑定">
              <el-option label="绑定" value="shanghai"></el-option>
              <el-option label="未绑定" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">新增</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="content-table">
        <el-table :data="tableData" v-loading="listLoading" style="width: 100%" border>
          <!-- <el-table-column type="selection" width="55"></el-table-column> -->
          <el-table-column prop="id" label="序号" width="55"></el-table-column>
          <el-table-column prop="author" label="车辆名称" align="center" width="180"></el-table-column>
          <el-table-column prop="timestamp" align="center" label="车辆IP"></el-table-column>
          <el-table-column prop="platforms" align="center" label="可用席位"></el-table-column>
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
  </div>
</template>

<script>
import { fetchList } from "@/api/userinfo";
import Pagination from "@/components/Pagination";

export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      formInline: {
        user: "",
        region: ""
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
    handleNodeClick(data) {
      console.log(data);
    },
    onSubmit() {
      console.log("submit!");
    },
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
.tree-container {
  width: 20%;
  min-height: calc(100vh);
  float: left;
}
.tree-title {
  text-align: center;
  background-color: #559fff;
  height: 60px;
  line-height: 60px;
  color: #fff;
}
.tree-layout {
  padding: 0 20px;
}
.car-message {
  float: right;
  width: 80%;
  border-left: 1px solid #ccc;;
}
</style>
