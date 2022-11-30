/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-24 10:46:27
 * @Descripttion: 单组件注册入口
 */
import zylAttr from './src/index.vue'

zylAttr.install = function (Vue) {
  Vue.component(zylAttr.name, zylAttr)
}

export default zylAttr
