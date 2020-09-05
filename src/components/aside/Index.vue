<template>
  <!--  左侧菜单栏    -->
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-tools"></i>设备管理</template>
        <el-submenu index="1-1">
          <template slot="title"><i class="el-icon-setting"></i>设备预览</template>
          <router-link to="/device/index"><el-menu-item index="1-1-1">设备数据</el-menu-item></router-link>
          <router-link to="/device/list"><el-menu-item index="1-1-2">设备列表</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title"><i class="el-icon-setting"></i>设备添加</template>
          <router-link to="/add/device"><el-menu-item index="1-2-1">设备添加</el-menu-item></router-link>
          <router-link to="/add/deviceType"><el-menu-item index="1-2-2">类型添加</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title"><i class="el-icon-setting"></i>设备规则</template>
          <router-link to="/rule/rules"><el-menu-item index="1-3-1">规则查看</el-menu-item></router-link>
          <router-link to="/rule/add"><el-menu-item index="1-3-2">规则添加</el-menu-item></router-link>
          <router-link to="/rule/data"><el-menu-item index="1-3-3">数据查看</el-menu-item></router-link>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-s-grid"></i>规则管理</template>
        <el-submenu index="2-1">
          <template slot="title"><i class="el-icon-menu"></i>设备预览</template>
          <el-menu-item index="2-1-1">设备数据</el-menu-item>
          <el-menu-item index="2-1-2">设备列表</el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title"><i class="el-icon-menu"></i>设备添加</template>
          <el-menu-item index="2-2-1">设备添加</el-menu-item>
          <el-menu-item index="2-2-2">类型添加</el-menu-item>
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
</template>

<script>
/**
   * Created by 简小
   * Created on lucky 2020/9/5  16:48
   */
export default {
  name: 'AsideIndex'
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }

</style>
