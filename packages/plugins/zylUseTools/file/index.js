/*
 * @Author: zhanghan
 * @Date: 2022-11-30 01:42:05
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 01:42:12
 * @Descripttion: 文件相关
 */
// 文件下载函数 支持url/blob/base64格式
export const fileDownload = (file, name) => {
  if (!file) {
    throw new Error('文件不能为空')
  }

  // file是url
  if (file.indexOf('http') > -1) {
    name = name ? name : getUrlFileName(file)
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = file
    link.target = '_blank'
    link.setAttribute('download', name) // 自定义下载文件名（如exemple.txt）
    document.body.appendChild(link)
    link.click()
    return
  }

  // file是base64
  if (typeof file === 'string') {
    const bstr = atob(file.split(',')[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    file = new Blob([u8arr])
    return
  }

  // file是blob
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveOrOpenBlob(file, name)
  } else {
    const url = window.URL.createObjectURL(new Blob([file.data]))
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.target = '_blank'
    link.setAttribute('download', name) // 自定义下载文件名（如exemple.txt）
    document.body.appendChild(link)
    link.click()
  }
}

// 获链接文件名+后缀
export const getUrlFileName = (url) => {
  if (!url) return ''
  const file = url.split('/')
  return file[file.length - 1] || ''
}
