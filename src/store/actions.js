/**
 * Created by 简小
 * Created on lucky 2020/9/5  0:09
 * action 改变state实际方法文件
 */
const actions = {
  setIsLoginAct (context, bool) {
    context.commit('setIsLoginMut', bool)
  },
  setInitObjAct (context, params) {
    context.commit('setInitObjMut', {key: 'name', val: params.name + 'addName'})
    context.commit('setInitObjMut', {key: 'age', val: params.age + 1})
    context.commit('setInitObjMut', {key: 'books', val: params.books})
  },
  setProfileDrawAct (context, bool) {
    context.commit('setDrawMut', {key: 'profileDraw', val: bool})
  },
  setSettingDrawAct (context, bool) {
    context.commit('setDrawMut', {key: 'settingDraw', val: bool})
  }
}
export default actions
