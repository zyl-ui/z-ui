/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-02-10 17:01:41
 * @Descripttion: 单组件注册入口
 */
import zylRemoteSelect from './src/index.vue'

zylRemoteSelect.install = function(Vue) {
  Vue.component(zylRemoteSelect.name, zylRemoteSelect)
}

export default zylRemoteSelect
