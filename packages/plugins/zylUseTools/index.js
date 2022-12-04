/*
 * @Author: zhanghan
 * @Date: 2022-11-27 17:15:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-04 15:37:28
 * @Descripttion: 工具相关插件
 */

import * as cookieTool from './cookie'
import * as fileTool from './file'
import * as copyTextTool from './copyText'

export default {
  install(Vue) {
    Vue.prototype.$zylUseTools = {
      ...cookieTool,
      ...fileTool,
      ...copyTextTool,
    }
  },
}
