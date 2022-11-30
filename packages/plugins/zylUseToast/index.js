/*
 * @Author: zhanghan
 * @Date: 2022-11-27 19:32:07
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-28 14:43:24
 * @Descripttion: 消息提示相关插件
 */
import zylToast from '../../components/zylToast'

let currentToast

export default {
  install(Vue) {
    // 消息提示
    Vue.prototype.$zylUseToast = function (toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        },
      })
    }
  },
}

// 创建toast
function createToast({ Vue, propsData, onClose }) {
  const construstor = Vue.extend(zylToast)
  const toast = new construstor({
    propsData,
  })
  toast.$slots.default = [propsData.message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}
