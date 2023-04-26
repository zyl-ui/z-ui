/*
 * @Author: zhanghan
 * @Date: 2022-11-27 17:15:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-04 14:12:22
 * @Descripttion: cookie操作相关插件
 */

/**
 * 设置cookie
 * @param {string} key cookie标识
 * @param {string} value 要复制的内容
 * @param {number} iDay 设置cookie过期的天数
 */
export const setCookie = (key, value, iDay) => {
  var oDate = new Date()
  oDate.setDate(oDate.getDate() + iDay)
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  value = encodeURIComponent(value)
  document.cookie = key + '=' + value + ';expires=' + oDate + ';path=/'
}

/**
 * 删除cookie
 * @param {string} key cookie标识
 */
export const removeCookie = (key) => {
  this.setCookie(key, '', -1) // 这里只需要把Cookie保质期退回一天便可以删除
}

/**
 * 获取cookie
 * @param {string} key cookie标识
 */
export const getCookie = (key) => {
  var cookieArr = document.cookie.split('; ')
  for (var i = 0; i < cookieArr.length; i++) {
    var arr = cookieArr[i].split('=')
    if (arr[0] === key) {
      try {
        if (decodeURIComponent(arr[1]).indexOf('}') > -1) {
          return JSON.parse(decodeURIComponent(arr[1]))
        } else {
          return decodeURIComponent(arr[1])
        }
      } catch (err) {
        return err
      }
    }
  }
  return false
}

/**
 * 清除所有cookie
 */
export const clearCookie = () => {
  var keys = document.cookie.match(/[^ =;]+(?==)/g)
  if (keys) {
    for (var i = keys.length; i--;) {
      document.cookie =
        keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString()
    }
  }
}
