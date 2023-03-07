/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-01 17:25:53
 * @Descripttion: 单组件注册入口
 */
import zylTagSelect from './src/index.vue'

zylTagSelect.install = function(Vue) {
  Vue.component(zylTagSelect.name, zylTagSelect)
}

export default zylTagSelect
