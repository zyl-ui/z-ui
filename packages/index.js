/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:37:08
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-26 14:18:57
 * @Descripttion: 全局安装方法
 */

// 引入插件
import zylUseToast from './plugins/zylUseToast'
import zylUseFormValids from './plugins/zylUseFormValids'
import zylUseFilters from './plugins/zylUseFilters'
import zylUseTools from './plugins/zylUseTools'
const plugins = [zylUseToast, zylUseFormValids, zylUseFilters, zylUseTools]

// 引入组件
import zylAttr from './components/zylAttr'
import zylDemoBlock from './components/zylDemoBlock'
import zylSpread from './components/zylSpread'
import zylSyncButton from './components/zylSyncButton'
import zylUploadFile from './components/zylUploadFile'
import zylToast from './components/zylToast'
const components = [
  zylAttr,
  zylDemoBlock,
  zylSpread,
  zylSyncButton,
  zylUploadFile,
  zylToast,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 批量注册全局插件
  plugins.map((plugin) => {
    Vue.use(plugin)
  })
  // 批量注册全局组件
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件,有可能组件会通过script标签引入，如<script src='https://xxx/zyl-ui'></script>
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 暴露安装方法，用于全量引入,导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default install
// 暴露安装方法，用于按需引入
export {
  install,
  zylUseToast,
  zylUseFormValids,
  zylUseFilters,
  zylUseTools,
  zylAttr,
  zylDemoBlock,
  zylSpread,
  zylSyncButton,
  zylUploadFile,
  zylToast,
}
