/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-24 10:46:52
 * @Descripttion: 单组件注册入口
 */
import zylSpread from './src/index.vue'

zylSpread.install = function (Vue) {
  Vue.component(zylSpread.name, zylSpread)
}

export default zylSpread
