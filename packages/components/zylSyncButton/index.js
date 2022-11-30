/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-26 16:31:22
 * @Descripttion: 单组件注册入口
 */
import zylSyncButton from './src/index.vue'

zylSyncButton.install = function (Vue) {
  Vue.component(zylSyncButton.name, zylSyncButton)
}

export default zylSyncButton
