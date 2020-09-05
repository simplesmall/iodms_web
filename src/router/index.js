import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import DeviceIndex from '../views/DeviceList/Index'
import DeviceData from '../views/DeviceList/DeviceData'
import DeviceList from '../views/DeviceList/DeviceList'

import AddDeviceIndex from '../views/AddDevice/Index'
import AddDevice from '../views/AddDevice/AddDevice'
import AddDeviceType from '../views/AddDevice/AddDeviceType'

import RulesIndex from '../views/DeviceRules/Index'
import RulesDetail from '../views/DeviceRules/RulesDetail'
import RulesAdd from '../views/DeviceRules/RulesAdd'
import RulesDate from '../views/DeviceRules/RulesDate'
Vue.use(Router)

// 解决地址重定向到自己
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {title: '首页'}
    },
    // 设备管理
    {
      path: '/device',
      redirect: '/device/index',
      name: 'Device',
      component: DeviceIndex,
      meta: {title: '设备预览', icon: 'example', noCache: true},
      children: [
        {
          path: 'index',
          component: DeviceData,
          name: 'index',
          meta: {title: '设备数据'}
        },
        {
          path: 'list',
          component: DeviceList,
          name: 'list',
          meta: {title: '设备列表'}
        }
      ]
    },
    // 设备添加
    {
      path: '/add',
      redirect: '/add/device',
      name: 'Add',
      component: AddDeviceIndex,
      meta: {title: '设备添加', icon: 'example', noCache: true},
      children: [
        {
          path: 'device',
          name: 'AddDevice',
          component: AddDevice,
          meta: {title: '添加设备', icon: 'example', noCache: true}
        },
        {
          path: 'deviceType',
          name: 'AddDeviceType',
          component: AddDeviceType,
          meta: {title: '添加设备类型', icon: 'example', noCache: true}
        }
      ]
    },
    // 设备规则
    {
      path: '/rule',
      redirect: '/rule/rules',
      name: 'RuleIndex',
      component: RulesIndex,
      meta: {title: '设备规则', icon: 'example', noCache: true},
      children: [
        {
          path: 'rules',
          name: 'rules',
          component: RulesDetail,
          meta: {title: '规则查看', icon: 'example', noCache: true}
        },
        {
          path: 'add',
          name: 'addRules',
          component: RulesAdd,
          meta: {title: '规则添加'}
        },
        {
          path: 'data',
          name: 'rulesDate',
          component: RulesDate,
          meta: {title: '数据查看'}
        }
      ]
    }
    // 设备预览
    // 设备列表
  ]
})
