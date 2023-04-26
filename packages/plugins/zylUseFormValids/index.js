/*
 * @Author: zhanghan
 * @Date: 2022-11-27 17:15:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 10:02:36
 * @Descripttion: 过滤函数操作相关插件
 */

// 引入一些过滤函数（字段过滤转换）
import * as valids from './formValidate'

export default {
  install(Vue) {
    // 全局表单校验函数注册
    Vue.prototype.$zylUseFormValids = valids
  }
}
