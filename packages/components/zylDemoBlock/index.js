/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-25 19:59:15
 * @Descripttion: 单组件注册入口
 */
import zylDemoBlock from './src/index.vue'

zylDemoBlock.install = function (Vue) {
  Vue.component(zylDemoBlock.name, zylDemoBlock)
}

export default zylDemoBlock
