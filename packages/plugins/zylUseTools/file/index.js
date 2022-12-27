/*
 * @Author: zhanghan
 * @Date: 2022-11-30 01:42:05
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-27 19:42:01
 * @Descripttion: 文件相关
 */

import { atob } from './pollify'

/**
 * 文件下载函数
 * @param {string | blob} file 文件，支持传入url/blob/base64格式
 * @param {string} name 文件名称，需要带后缀如：abc.jpg（为url可不传入，会自动获取文件名）
 */
export function fileDownload(file, name) {
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

  if (!name) {
    throw new Error('文件名不能为空')
  }

  // file是base64先转blob
  if (typeof file === 'string') {
    file = base64toBlob(file)
  }

  // file是blob
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveOrOpenBlob(file, name)
  } else {
    const url = window.URL.createObjectURL(new Blob([file]))
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.target = '_blank'
    link.setAttribute('download', name) // 自定义下载文件名（如exemple.txt）
    document.body.appendChild(link)
    link.click()
  }
}

/**
 * 获链接文件名+后缀
 * @param {string} url 文件地址
 */
export function getUrlFileName(url) {
  if (!url) return ''
  const file = url.split('/')
  return file[file.length - 1] || ''
}

/**
 * 从base64编码的图片中获取扩展名
 * @param {String} base64
 * @returns {String}
 */
export function getExtensionFromBase64(base64) {
  let re = new RegExp('/(?<ext>.*?);base64,.*')
  let res = re.exec(base64)
  if (res) {
    return res.groups.ext
  }
}

/**
 * 获取uuid
 * @param {String} base64
 * @returns {String}
 */
export function getUUID() {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substring(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substring((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  var uuid = s.join('')
  return uuid
}

/**
 * Base64 转 Blob
 * @param {string} base64String Blob格式数据
 */
export function base64toBlob(base64String) {
  var arr = base64String.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {
    type: mime,
  })
}

/**
 * Blob 转 Base64
 * @param {blob} file Blob格式数据
 */
export function blobToBase64(file) {
  return new Promise(function (resolve, reject) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      resolve(reader.result)
    }
    reader.onerror = function (error) {
      reject(error)
    }
  })
}

/**
 * 压缩base64图片
 * @param {string} base64String base64格式数据
 * @param {number} w 宽度
 * @param {number} quality 文件质量（0~1）
 */
export function compressImg(base64String, w, quality) {
  var getMimeType = function (urlData) {
    var arr = urlData.split(',')
    var mime = arr[0].match(/:(.*?);/)[1]
    return mime
  }
  var newImage = new Image()
  var imgWidth, imgHeight

  var promise = new Promise(function (resolve) {
    newImage.onload = resolve
  })
  newImage.src = base64String
  return promise.then(function () {
    imgWidth = newImage.width
    imgHeight = newImage.height
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')
    if (Math.max(imgWidth, imgHeight) > w) {
      if (imgWidth > imgHeight) {
        canvas.width = w
        canvas.height = (w * imgHeight) / imgWidth
      } else {
        canvas.height = w
        canvas.width = (w * imgWidth) / imgHeight
      }
    } else {
      canvas.width = imgWidth
      canvas.height = imgHeight
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height)
    var base64 = canvas.toDataURL(getMimeType(base64String), quality)
    return base64
  })
}

/**
 * 获取base64文件大小，返回KB数字
 * @param {string} base64String base64格式数据
 */
export function getBase64Size(base64String) {
  var str = base64String.split(',')[1]
  var equalIndex = str.indexOf('=')
  if (str.indexOf('=') > 0) {
    str = str.substring(0, equalIndex)
  }
  var strLength = str.length
  var fileLength = parseInt(strLength - (strLength / 8) * 2)
  // 由字节转换为KB
  var size = ''
  size = (fileLength / 1024).toFixed(2)
  var sizeStr = size + '' //转成字符串
  var index = sizeStr.indexOf('.') //获取小数点处的索引
  var dou = sizeStr.substring(index + 1, 2) //获取小数点后两位的值
  if (dou == '00') {
    //判断后两位是否为00，如果是则删除00
    return sizeStr.substring(0, index) + sizeStr.substring(index + 3, 2)
  }
  return parseInt(size)
}
