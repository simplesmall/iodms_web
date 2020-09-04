<template>
  <div id="app">
    <!--  左侧边栏  -->
    <div class="aside">
      <!--  头像框    -->
      <div class="avatar">
          <div class="demo-basic--circle" style="width: 110px;margin: 0;padding: 0;">
            <div class="block" style="width:60px;margin:5px">
              <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" style="width:50px;margin:5px"></el-avatar>
            </div>
          </div>
        <!--   打开设置按钮     -->
        <div class="settingBtn" @click="openDrawer">打开设置</div>
      </div>
      <!--  抽屉弹出框显示设置或提示    -->
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="true">
        <span>设置框内容</span>
      </el-drawer>
      <!--  左侧菜单栏    -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
    </div>
    <!--  主页面显示内容  -->
    <div class="main-wrapper">
      <!--  头部工具栏    -->
      <div class="header-tips"></div>
      <!--  面包屑    -->
      <el-breadcrumb separator="/" style="padding: 15px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <!--  根据路由跳转实际转至的页面    -->
      <router-view style="padding: 10px"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    // 打开抽屉
    openDrawer () {
      this.drawer = true
    }
  }
}
</script>

<style scoped>
  .settingBtn{
    width: 78px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    margin: 10px auto;
    background: dodgerblue;
    border-radius: 10px;
    cursor: pointer;
  }
  .header-tips{
    width: 100%;
    height: 60px;
    background: lightskyblue;
  }
  .avatar{
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 100px;
  }
  .aside {
    width: 200px;
    height: 100vh;
    background: #ebebef;
  }
  .main-wrapper{
    height: 100vh;
    width: 100%;
  }

  #app {
    width: calc(100% + 16px);
    height: calc(100vh - 8px);
    display: flex;
    flex-direction: row;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background:ghostwhite;
    margin: -8px;
  }
</style>
