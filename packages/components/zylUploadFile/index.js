/*
 * @Author: zhanghan
 * @Date: 2020-04-27 13:36:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-26 14:13:02
 * @Descripttion: 单组件注册入口
 */
import zylUploadFile from './src/index.vue'

zylUploadFile.install = function (Vue) {
  Vue.component(zylUploadFile.name, zylUploadFile)
}

export default zylUploadFile
