/*
 * @Author: zhanghan
 * @Date: 2022-11-27 17:15:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-29 21:21:10
 * @Descripttion: 过滤函数操作相关插件
 */

// 引入一些过滤函数（字段过滤转换）
import * as filters from './filters'

export default {
  install(Vue) {
    // 全局过滤器注册
    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key])
    })
  }
}
