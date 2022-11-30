/*
 * @Author: zhanghan
 * @Date: 2022-11-27 19:21:21
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-28 17:10:49
 * @Descripttion: 主入口文件
 */

import Vue from 'vue'
import App from './App.vue'

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入zylUI组件
import zylUI from '@packages'
// 注册组件库
Vue.use(zylUI)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
