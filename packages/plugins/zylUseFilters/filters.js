// 电话或手机脱敏
export const zylTel = (val) => {
  let valTrim = ''
  if (val !== null) {
    valTrim = val.toString().trim()
    if (valTrim.length === 11) {
      return (
        String(valTrim).substr(0, 3) + '****' + String(valTrim).substr(7, 4)
      )
    } else {
      return String(valTrim).substr(0, 2) + '***' + String(valTrim).substr(5, 2)
    }
  } else {
    return '-'
  }
}

// 姓名脱敏
export const zylName = (name, str = '*') => {
  if (!name) {
    return '-'
  } else if (String(name).length === 2) {
    return String(name).substr(0, 1) + str
  } else if (String(name).length === 3) {
    return (
      String(name).substr(0, 1) + str + String(name).substr(name.length - 1)
    )
  } else {
    return (
      String(name).substr(0, 1) +
      str +
      str +
      String(name).substr(name.length - 1)
    )
  }
}

// 身份证、银行卡脱敏
export const zylIdcard = (idcard) => {
  if (!idcard) {
    return '-'
  } else if (idcard.length === 15) {
    return (
      String(idcard).substr(0, 8) +
      '******' +
      String(idcard).substr(idcard.length - 2)
    )
  } else if (idcard.length === 18) {
    return (
      String(idcard).substr(0, 4) +
      '**********' +
      String(idcard).substr(idcard.length - 4)
    )
  } else if (idcard.length === 16) {
    // 社会保障号
    return (
      String(idcard).substr(0, 9) +
      '******' +
      String(idcard).substr(idcard.length - 2)
    )
  } else {
    const hideLength = Math.floor(idcard.length / 2)
    const start = Math.ceil((idcard.length - hideLength) / 2)
    const list = idcard.split('')
    list.splice(start, hideLength, ...[...new Array(hideLength)].fill('*'))
    return list.join('')
  }
}

/**
 * 时间戳日期过滤
 * @param {*} time 时间戳
 * @param {*} format 自定义时间格式 参数: y年 m月 d日 h时 i分 s秒 a星期 格式如：'{y}-{m}-{d} {h}:{i}:{s}'
 * @param {*} showEmptTxt 为空时是否返回缺省文字 '-', 默认true显示返回'-',fasle不显示返回''
 */
export const zylDataFormat = (
  time,
  format = '{y}-{m}-{d}',
  showEmptTxt = true
) => {
  const emptTxt = showEmptTxt ? '-' : ''
  // 判断后端是否传空
  if (!time) {
    return emptTxt
  }
  // 判断后端是否帮我们转换过了
  if (typeof time === 'string' && time.length > 0) {
    return time
  }
  // 没有再去转换
  const res = zylParseTime(time, format)
  const data = res.indexOf('NaN') > -1 ? emptTxt : res
  return data
}

// 转换时间戳（推荐使用上面的，有错可以兼容）
export function zylParseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 金额过滤（精确到小数点后2位）
export const zylMoney = (data) => {
  if (!data) {
    return '0.00'
  }
  return Number(data).toFixed(3).replace(/\d$/, '')
}

// 数字过滤（主要过滤undefind不为NaN）
export const zylNum = (data) => {
  if (!data) {
    return '0'
  }
  return Number(data)
}

// 获取字典值名称
/**
 * 获取字典值名称
 * @param {*} value 字典码值
 * @param {*} ary 字典数据数组
 * @param {*} format 自定义数据格式 默认 { label: 'label', value: 'value' }
 */
export const zylGetLabel = (
  value,
  ary = [],
  format = { label: 'label', value: 'value' }
) => {
  if (!value) {
    return '-'
  }
  if (ary.length === 0) {
    return '-'
  }
  return (
    (ary.find((item) => item[format.value] == value) || {})[format.label] || '-'
  )
}

// 空值过滤
export const zylEmpty = (data) => {
  if (typeof data === 'number') {
    return data
  }
  return data || '-'
}
