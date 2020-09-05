/**
 * Created by 简小
 * Created on lucky 2020/9/5  0:08
 * mutations 调用方法文件
 */
const mutations = {
  setIsLoginMut (state, bool) {
    state.isLogin = bool
  },
  setInitObjMut (state, params) {
    state.initObj[params.key] = params.val
  },
  setDrawMut (state, params) {
    state.draw[params.key] = params.val
  }
}
export default mutations
