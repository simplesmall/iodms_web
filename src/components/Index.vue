<template>
  <div class="hello">
    <el-button type="primary" @click="testAct">点击我</el-button>
    <p>{{this.localIsLogin}}</p>
    <el-input v-model="initObj.name"></el-input>
    <el-input v-model="initObj.age"></el-input>
    <el-button @click="initObjAct">获取对象值</el-button>
    <p>{{initObj}}</p>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
    testAct () {
      this.$store.dispatch('setIsLoginAct', !this.localIsLogin)
      this.localIsLogin = !this.localIsLogin
      console.log(this.$store.state.isLogin)
    },
    initObjAct () {
      this.$store.dispatch('setInitObjAct', this.initObj)
      this.initObj = this.$store.state.initObj
      console.log(this.$store.state.initObj)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
