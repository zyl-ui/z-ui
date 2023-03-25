/*
 * @Author: zhanghan
 * @Date: 2020-05-07 14:40:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-01 10:51:00
 * @Descripttion: 自定义表单校验规则
 */
import {
  validURL,
  validLowerCase,
  validUpperCase,
  validAlphabets,
  validEmail
} from './validate'

/**
 * 校验是否为URL
 */
export const validateURL = checkWrap(
  (value) => validURL(value),
  '请输入正确的URL'
)

/**
 * 校验是否为小写字母
 */
export const validateLowerCase = checkWrap(
  (value) => validLowerCase(value),
  '请输入小写字母'
)

/**
 * 校验是否为大写字母
 */
export const validateUpperCase = checkWrap(
  (value) => validUpperCase(value),
  '请输入大写字母'
)

/**
 * 校验是否为大小写字母
 */
export const validateAlphabets = checkWrap(
  (value) => validAlphabets(value),
  '请输入大小写字母'
)

/**
 * 校验邮箱
 */
export const validateEmail = checkWrap(
  (value) => validEmail(value),
  '请输入大小写字母'
)

/**
 * 校验文本长度
 */
export const validateTextLength = (length = 0) => {
  return checkWrap(
    (value) => value.toString().length <= length,
    `字段长度不可大于${length}`
  )
}

/**
 *
 * @param {function} checkFunction 校验方法
 * @param {string} error 错误提示
 */
function checkWrap(checkFunction, error) {
  return (rule, value, callback) => {
    if (value && !checkFunction(value)) {
      return callback(new Error(error))
    }
    callback()
  }
}

/**
 * 时间大小判断
 * @param {object} form 表单对象
 * @param {array} [startName,endName ] 起始字段名，结束字段名
 * @param {string} startLabelName 起始标签名
 * @param {string} endLabelName 结束标签名
 */
export const startTime = ({
  getRef,
  end,
  startLabel = '开始时间',
  endLabel = '结束时间',
  minStartTime = () => {},
  minStartText
}) => {
  return (rule, value, callback) => {
    const ref = getRef()
    const min = compareTimeGt(value, minStartTime())

    if (!min) {
      return callback(new Error(minStartText))
    }

    const result =
      compareTimeGt(ref.model[end], value) &&
      compareTimeGt(value, minStartTime())
    if (result) {
      if (ref.model[end]) {
        setTimeout(() => ref.clearValidate(end), 100)
      }
      callback()
    } else {
      callback(new Error(`${startLabel}不应大于${endLabel}`))
    }
  }
}

export const endTime = ({
  getRef,
  start,
  startLabel = '开始时间',
  endLabel = '结束时间',
  minStartTime = () => {}
}) => {
  return (rule, value, callback) => {
    const ref = getRef()
    const result = compareTimeGt(value, ref.model[start])
    if (result) {
      if (ref.model[start] && compareTimeGt(ref.model[start], minStartTime())) {
        setTimeout(() => ref.clearValidate(start), 100)
      }
      callback()
    } else {
      callback(new Error(`${endLabel}不应小于${startLabel}`))
    }
  }
}

export const validateTimeRange = ({
  getRef,
  start,
  end,
  startLabel = '开始时间',
  endLabel = '结束时间',
  minStartTime,
  minStartText,
  required
}) => {
  return {
    [start]: [
      { required, message: `请选择${startLabel}` },
      {
        validator: startTime({
          getRef,
          end,
          startLabel,
          endLabel,
          minStartTime,
          minStartText
        })
      }
    ],
    [end]: [
      { required, message: `请选择${endLabel}` },
      {
        validator: endTime({
          getRef,
          start,
          startLabel,
          endLabel,
          minStartTime,
          minStartText
        })
      }
    ]
  }
}

/**
 * 时间大小校验方法 对比时间值1>对比时间值2 为校验通过
 * @param {date} date  对比时间值1
 * @param {date} value 对比时间值2
 * @param {string} errorMsg 检验不通过信息
 */
function compareTimeGt(date, value) {
  if (!date || !value) {
    // 空值返回true
    return true
  }
  if (typeof date === 'string' && typeof value === 'string') {
    date = new Date(date.replace(/-/g, '/'))
    value = new Date(value.replace(/-/g, '/'))
  }
  if (Number(value) > Number(date)) {
    return false
  } else {
    return true
  }
}
