/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 15:24:03
 * @Descripttion: 单组件注册入口
 */
import zylFileViewer from './src/index.vue'

zylFileViewer.install = function(Vue) {
  Vue.component(zylFileViewer.name, zylFileViewer)
}

export default zylFileViewer
