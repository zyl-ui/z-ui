/*
 * @Author: zhanghan
 * @Date: 2020-04-30 10:08:31
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-04 02:40:14
 * @Descripttion: vupress文档主入口
 */

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入组件
import zylUI from './install'

export default ({ Vue, router }) => {
  // 全量引入ElementUI
  Vue.use(ElementUI)
  // 注册组件库、插件
  Vue.use(zylUI)

  Vue.mixin({
    mounted() {
      // 密码鉴权(getCookie需要操作dom，无法用beforeEach)
      let check = this.$zylUseTools.getCookie('hasPass') ? true : false
      if (!check && !(this.$route.path === '/')) {
        this.$router.push({ path: '/' })
      }
    },
  })

  // 如果hash有中文，要加decodeURIComponent,否则刷新或地址栏进入无法跳转锚点
  // 参考：https://blog.csdn.net/sendudu/article/details/107368962
  router.onReady(() => {
    const { app } = router
    app.$once('hook:mounted', () => {
      setTimeout(() => {
        const { hash } = document.location
        if (hash.length > 1) {
          const id = decodeURIComponent(hash.substring(1))
          const element = document.getElementById(id)
          if (element) element.scrollIntoView()
        }
      }, 500)
    })
  })
}
