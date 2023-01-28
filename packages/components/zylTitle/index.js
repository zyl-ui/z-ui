/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 10:35:36
 * @Descripttion: 单组件注册入口
 */
import zylTitle from './src/index.vue'

zylTitle.install = function(Vue) {
  Vue.component(zylTitle.name, zylTitle)
}

export default zylTitle
