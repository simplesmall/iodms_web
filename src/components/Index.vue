<template>
  <div class="hello">
    <el-button type="primary" @click="testAct">点击我</el-button>
    <p>{{this.localIsLogin}}</p>
    <el-input v-model="initObj.name"></el-input>
    <el-input v-model="initObj.age"></el-input>
    <el-checkbox-group v-model="initObj.books">
      <el-checkbox label="参与计划"></el-checkbox>
      <el-checkbox label="绘制图表"></el-checkbox>
      <el-checkbox label="成果展示"></el-checkbox>
    </el-checkbox-group>
    <el-button @click="initObjActTest">获取对象值</el-button>
    <p>{{initObj}}</p>
    <el-button @click="getInitObj">获取state</el-button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  routerName: '首页',
  data () {
    return {
      localIsLogin: false,
      initObj: {
        name: '',
        age: '',
        books: []
      }
    }
  },
  methods: {
    getInitObj () {
      let initObjGet = this.$store.getters.initObjGet
      this.$message({
        message: initObjGet,
        type: 'warning'
      })
    },
    testAct () {
      this.$store.dispatch('setIsLoginAct', !this.localIsLogin)
      this.localIsLogin = !this.localIsLogin
    },
    initObjActTest () {
      this.$store.dispatch('setInitObjAct', this.initObj)
      this.initObj = this.$store.state.initObj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
