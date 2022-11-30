/*
 * @Author: zhanghan
 * @Date: 2020-05-07 14:40:53
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 12:52:35
 * @Descripttion: 自定义表单校验规则
 */
import {
  checkIDCardNumber,
  checkMobile,
  checkContact,
  checkEmail,
  checkZipCode,
  checkNumber,
  checkRate,
  checkTrueNum,
  checkBankNo,
  checkCN,
  checkIntNumNotZreo,
  checkIntNum,
} from './check'

/**
 * 校验身份证
 */
export const validateIdCard = checkWrap(
  (value) => checkIDCardNumber(value),
  '请输入正确的身份证号'
)

/**
 * 校验正实数(金钱，精确到小数点后两位)
 */
export const validateTrueNum = checkWrap(
  (value) => checkTrueNum(value),
  '请输入正实数(精确到小数点后两位)'
)

/**
 * 校验正实数(金钱，精确到小数点后两位)（可传入上限，含上限）
 */
export const validateTrueNumMax = (maxNum = 0) => {
  return checkWrap(
    (value) => checkTrueNum(value) && value <= maxNum,
    `请输入0-${maxNum}正实数(精确到小数点后两位)`
  )
}

/**
 * 校验正整数（不含0）
 */
export const validateIntNumNotZreo = checkWrap(
  (value) => checkIntNumNotZreo(value),
  '请输入正整数(不含0)'
)

/**
 * 校验正整数（不含0）（可传入上限，含上限）
 */
export const validateIntNumNotZreoMax = (maxNum = 1) => {
  return checkWrap(
    (value) => checkIntNum(value) && value <= maxNum,
    `请输入1-${maxNum}正整数`
  )
}

/**
 * 校验正整数（含0）
 */
export const validateIntNum = checkWrap(
  (value) => checkIntNum(value),
  '请输入正整数(含0)'
)

/**
 * 校验正整数（含0）（可传入上限，含上限）
 */
export const validateIntNumMax = (maxNum = 0) => {
  return checkWrap(
    (value) => checkIntNum(value) && value <= maxNum,
    `请输入0-${maxNum}正整数`
  )
}

/**
 * 校验银行账号
 */
export const validateBankNo = checkWrap(
  (value) => checkBankNo(value),
  '请输入正确的银行账号'
)

/**
 * 校验中文名
 */
export const validateCN = checkWrap(
  (value) => checkCN(value),
  '请输入正确的姓名'
)

/**
 * 校验邮箱
 */
export const validateEmail = checkWrap(
  (value) => checkEmail(value),
  '请输入正确的电子邮箱'
)

/**
 * 校验手机号
 */
export const validateMobile = checkWrap(
  (value) => checkMobile(value),
  '请输入正确的手机号'
)

/**
 * 校验联系电话
 */
export const validateContact = checkWrap(
  (value) => checkContact(value),
  '请输入正确的联系电话'
)

/**
 * 校验邮政编码规则
 */
export const validatePostCode = checkWrap(
  (value) => checkZipCode(value),
  '请输入正确的邮政编码'
)

/**
 * 校验数字
 */
export const validateNumber = checkWrap(
  (value) => checkNumber(String(value)),
  '请输入正确的输入数字'
)

/**
 * 校验率数
 */
export const validateRate = checkWrap(
  (value) => checkRate(String(value)),
  '请输入正确的率数'
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
  minStartText,
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
  minStartTime = () => {},
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
  required,
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
          minStartText,
        }),
      },
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
          minStartText,
        }),
      },
    ],
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
