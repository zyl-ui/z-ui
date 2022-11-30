/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-24 10:46:23
 * @Descripttion: 单组件注册入口
 */
import zylToast from './src/index.vue'

zylToast.install = function (Vue) {
  Vue.component(zylToast.name, zylToast)
}

export default zylToast
