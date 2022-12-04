/*
 * @Author: zhanghan
 * @Date: 2020-04-30 12:11:29
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-04 17:23:24
 * @Descripttion: 导入打包后的演示组件
 */

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 1、引入打包的组件（每次需要打包lib，用于打包测试）
// （1）全量引入方式
// import zylUI from '../../lib/index/index.js'

// （2）按需引入方式
// import zylUseTools from '../../lib/zylUseTools/index.js'
// import zylUseFilters from '../../lib/zylUseFilters/index.js'
// import zylUseFormValids from '../../lib/zylUseFormValids/index.js'
// import zylUseToast from '../../lib/zylUseToast/index.js'
// import zylAttr from '../../lib/zylAttr/index.js'
// import zylDemoBlock from '../../lib/zylDemoBlock/index.js'
// import zylSpread from '../../lib/zylSpread/index.js'
// import zylSyncButton from '../../lib/zylSyncButton/index.js'
// import zylToast from '../../lib/zylToast/index.js'

// 2、引入未打包的组件（调试实时生效）

// （1）全量引入方式
import zylUI from '../../packages'

// （2）按需引入方式
// import {
//   zylUseTools,
//   zylUseFilters,
//   zylUseFormValids,
//   zylUseToast,
//   zylAttr,
//   zylDemoBlock,
//   zylSpread,
//   zylSyncButton,
//   zylToast,
// } from '../../packages'

export default {
  install(Vue) {
    // 全量引入ElementUI
    Vue.use(ElementUI)
    // 全量注册自定义组件
    Vue.use(zylUI)
    // 按需注册自定义组件
    // Vue.use(zylUseTools)
    // Vue.use(zylUseFilters)
    // Vue.use(zylUseFormValids)
    // Vue.use(zylUseToast)
    // Vue.use(zylAttr)
    // Vue.use(zylDemoBlock)
    // Vue.use(zylSpread)
    // Vue.use(zylSyncButton)
    // Vue.use(zylToast)
  },
}
