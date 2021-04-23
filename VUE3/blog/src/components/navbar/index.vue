<template>
  <div class="nav">
    <div class="nav-logo">
      <img
        src="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=b9703c8cad014c08196e20a13f4b2e3e/1ad5ad6eddc451dad19fbdceb2fd5266d01632ad.jpg"
        alt=""
      />
      <span>蜗牛</span>
    </div>
    <div class="nav-content">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template #title>我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://www.ele.me" target="_blank"
            >订单管理</a
          ></el-menu-item
        >
      </el-menu>
    </div>
    <div class="nav-user">
      <el-dropdown>
        <span class="el-dropdown-link">
          欢迎<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0px 40px;
  margin: 0 auto;
  position: relative;
  min-height: 50px;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 30px;
}
.nav-logo {
  height: 50px;
  display: flex;
  align-items: center;
}
.nav-logo img {
  height: 30px;
}
.nav-logo span {
  display: inline-block;
  border-left: 1px solid #aaa;
  margin-left: 20px;
  padding-left: 20px;
}
.nav-user{
  height: 100%;
  width: 50px;
  line-height: 50px;
}
.el-menu{
  background-color: transparent !important;
}
</style>