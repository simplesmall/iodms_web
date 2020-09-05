<template>
  <!--  个人页面    -->
  <el-drawer
    title="用户管理"
    direction="ltr"
    :visible.sync="localProfileDraw"
    :with-header="true">
    <span>个人设置框</span>
  </el-drawer>
</template>

<script>
/**
   * Created by 简小
   * Created on lucky 2020/9/5  15:00
   */
export default {
  name: 'ProfileIndex',
  data () {
    return {
      localProfileDraw: false
    }
  },
  watch: {
    '$store.state.draw.profileDraw': function (val) {
      this.localProfileDraw = val
    },
    localProfileDraw: function (val) {
      this.$store.dispatch('setProfileDrawAct', val)
    }
  }
}
</script>

<style scoped>

</style>
