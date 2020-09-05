<template>
  <div id="app">
    <!--  左侧边栏  -->
    <div class="aside">
      <!--  头像框    -->
      <div class="avatar">
          <div class="demo-basic--circle" style="width: 110px;margin: 0;padding: 0;">
            <div class="block" style="width:60px;margin:20px;cursor: pointer" @click="openProfile">
              <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" style="width:50px;margin:5px"></el-avatar>
            </div>
          </div>
        <!--   打开设置按钮     -->
        <div class="settingBtn" @click="openSetting">打开设置</div>
      </div>
      <!--  个人页面    -->
      <ProfileIndex></ProfileIndex>
      <!--  系统设置    -->
      <SettingIndex></SettingIndex>
      <!--  左侧菜单栏    -->
      <AsideIndex></AsideIndex>
    </div>
    <!--  主页面显示内容  -->
    <div class="main-wrapper">
      <!--  头部工具栏    -->
      <div class="header-tips"></div>
      <!--  面包屑    -->
      <el-breadcrumb separator="/" style="padding: 15px">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <!--  根据路由跳转实际转至的页面    -->
      <router-view style="padding: 10px"/>
    </div>
  </div>
</template>

<script>
import ProfileIndex from './components/profile/Index'
import SettingIndex from './components/setting/Index'
import AsideIndex from './components/aside/Index'

export default {
  name: 'App',
  data () {
    return {
      levelList: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    // 获取面包屑地址和名称
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'index'.toLocaleLowerCase()) {
        // eslint-disable-next-line standard/object-curly-even-spacing
        matched = [{ path: '/', meta: { title: '首页' }}].concat(matched)
      }
      this.levelList = matched
    },
    // 打开个人设置抽屉
    openProfile () {
      this.$store.dispatch('setProfileDrawAct', true)
    },
    // 打开系统设置抽屉
    openSetting () {
      this.$store.dispatch('setSettingDrawAct', true)
    }
  },
  components: {
    ProfileIndex,
    SettingIndex,
    AsideIndex
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
