/*
 * @Author: zhanghan
 * @Date: 2022-11-27 17:15:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 02:29:16
 * @Descripttion: 工具相关插件
 */
import { setCookie, getCookie, removeCookie, clearCookie } from './cookie'
import { fileDownload, getUrlFileName } from './file'
import copyText from './copyText'

export default {
  install(Vue) {
    Vue.prototype.$zylUseTools = {
      setCookie,
      getCookie,
      removeCookie,
      clearCookie,
      fileDownload,
      getUrlFileName,
      copyText,
    }
  },
}
