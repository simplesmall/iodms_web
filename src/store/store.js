/**
 * Created by 简小
 * Created on lucky 2020/9/5  0:08
 * VUEX 整体控制的集成文件
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './states'
import actions from './actions'
import mutations from './mutations'
import getters from './getter'
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
export default store
