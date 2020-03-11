<template>
  <div class="header">
    <div class="h_left">
      <p>当前用户: 张三</p>
      <p class="timee">系统时间: 2020-03-02 14:20:32</p>
    </div>
    <div class="h_mid">轻量化平台后管系统</div>
    <div class="h_right">
      <el-button type="primary" round @click.native="logout">安全退出</el-button>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }

}
</script>

<style lang="scss" scoped>
.header {
  background-color:#fff;
  color: #333;
  line-height: 80px;
  position: fixed;
  width: 100%;
  top:0;
  z-index:999;
  padding-left: 20px;
  height: 80px !important;
  box-shadow: 10px 1px 15px rgba(0, 0, 0, 0.17);
  .h_left {
    position: absolute;
    line-height: 0;
    top: 10px;
    .timee {
      margin-top: 25px;
    }
  }
  .h_mid {
    font-family: "华文行楷 Bold", "华文行楷 Regular", "华文行楷";
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
    text-align: center;
  }
  .h_right {
    position: absolute;
    right: 20px;
    top: 0;
  }
}
</style>
