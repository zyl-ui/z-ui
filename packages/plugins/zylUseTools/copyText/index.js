/*
 * @Author: zhanghan
 * @Date: 2022-11-27 17:15:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-04 15:37:03
 * @Descripttion: 复制操作相关插件
 */

/**
 * 复制传入的内容
 * @param {string} content 要复制的内容
 */
export function copyText(content) {
  if (!document.queryCommandSupported('copy')) {
    //为了兼容有些浏览器 queryCommandSupported 的判断
    this.$zylUseToast({
      message: '复制成功',
    })
  }
  let textarea = document.createElement('textarea')
  textarea.value = content
  textarea.readOnly = 'readOnly'
  document.body.appendChild(textarea)
  textarea.select()
  textarea.setSelectionRange(0, content.length)
  let result = document.execCommand('copy')
  if (result) {
    this.$zylUseToast({
      message: '复制成功',
    })
  } else {
    this.$zylUseToast({
      message: '复制失败',
    })
  }
  textarea.remove()
}
