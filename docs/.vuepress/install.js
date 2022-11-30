/*
 * @Author: zhanghan
 * @Date: 2020-04-30 12:11:29
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 02:07:29
 * @Descripttion: 导入打包后的演示组件
 */

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 1、引入打包的组件（每次需要打包lib，用于打包测试）
// （1）全量引入方式
// import zylUI from '../../lib/index/index.js'
// import '../../lib/index/index.css'

// （2）按需引入方式
// import zylUseCookie from '../../lib/zylUseCookie/index.js'

// import zylUseToast from '../../lib/zylUseToast/index.js'
// import '../../lib/zylUseToast/index.css'

// import zylAttr from '../../lib/zylAttr/index.js'
// import '../../lib/zylAttr/index.css'

// import zylDemoBlock from '../../lib/zylDemoBlock/index.js'
// import '../../lib/zylDemoBlock/index.css'

// import zylSpread from '../../lib/zylSpread/index.js'
// import '../../lib/zylSpread/index.css'

// import zylSyncButton from '../../lib/zylSyncButton/index.js'

// import zylToast from '../../lib/zylToast/index.js'
// import '../../lib/zylToast/index.css'

// 2、引入未打包的组件（调试实时生效）

// （1）全量引入方式
import zylUI from '../../packages'

// （2）按需引入方式
// import {
//   zylUseCookie,
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
    // Vue.use(zylUseCookie)
    // Vue.use(zylUseToast)
    // Vue.use(zylAttr)
    // Vue.use(zylDemoBlock)
    // Vue.use(zylSpread)
    // Vue.use(zylSyncButton)
    // Vue.use(zylToast)
  },
}
