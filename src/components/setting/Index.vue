<template>
  <el-drawer
    title="系统设置"
    :visible.sync="localSettingDraw"
    :with-header="true">
    <span>系统设置</span>
  </el-drawer>
</template>

<script>
/**
   * Created by 简小
   * Created on lucky 2020/9/5  16:24
   */
export default {
  name: 'SettingIndex',
  data () {
    return {
      localSettingDraw: false
    }
  },
  watch: {
    '$store.state.draw.settingDraw': function (val) {
      this.localSettingDraw = val
    },
    localSettingDraw: function (val) {
      this.$store.dispatch('setSettingDrawAct', val)
    }
  }
}
</script>

<style scoped>

</style>
