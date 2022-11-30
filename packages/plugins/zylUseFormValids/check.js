/* eslint-disable*/
export const mobileRex =
  /^(((13[0-9]{1})|(16[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(19[0-9]{1})|(14[0-9]{1}))+\d{8})$/ //校验手机号格式 1开头 第二位在[3-9]之间 后9位为数字
export const telPhone =
  /^\s*$|^\d{4}-\d{8}|\d{4}-\d{7}|\d{3}-\d{7}|\d{3}-\d{7}$/ //验证固定电话号码为7-8位数字并带有区号
// 校验国内合法姓名正则
// 1、不能有特殊字符和数字；
// 2、中文英文不能同时出现；
// 3、长度在1-20；
// 4、英文姓名允许姓名中包含 “-”    “/”    “，”    “.”    “ ’”    “ ’”    “·”   符号以及空格
// 5、中文姓名允许姓名中包含 “·”   符号以及空格
// 6、首尾不能有特殊字符
export const cnReg =
  /^([\u4e00-\u9fa5]|[\u4e00-\u9fa5][\u4e00-\u9fa5\·\s]{0,18}[\u4e00-\u9fa5]|[a-zA-Z]|[a-zA-Z][a-zA-Z\.\-\/\，\’\·\s]{0,18}[a-zA-Z])$/
export const regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ //邮箱
// 纳税人识别号15|17|18|20位，字母+数字
export const taxpayerNo =
  /^(^[\da-zA-Z]{15}$)|(^[\da-zA-Z]{17}$)|(^[\da-zA-Z]{18}$)|(^[\da-zA-Z]{20}$)$/
// 银行卡号
export const bankNo = /^[1-9]\d{9,29}$/
// 联系电话（手机号码，座机，400）
export const contactRex =
  /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3578]\d{9})$)|(^(400)-(\d{3})-(\d{4})(.)(\d{1,4})$)|(^(400)-(\d{3})-(\d{4}$))/
// 联系电话（手机号码，座机，400）不加 -
export const contactRexNoSign =
  /(^(0[0-9]{2,3})?([2-9][0-9]{6,7})+([0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}))?(1[3578]\d{9})$)|(^(400)(\d{3})(\d{4})(.)(\d{1,4})$)|(^(400)(\d{3})(\d{4}$))/
// 率数
export const rateRex = /^0\.[0-9]{1,2}$|^0{1}$|^1{1}$|^1\.[0]{1,2}$/
// 数字
export const numRex = /-[0-9]+(.[0-9]+)?|[0-9]+(.[0-9]+)?/
// 金钱（不含0，正数、两位小数）
export const trueNum =
  /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
// 正整数（不包括0）
export const intNumNotZreo = /^[1-9]\d*$/
// 正整数（包括0）
export const intNum = /^[0-9]\d*$/
// 邮政编码
export const zipCode = /^[1-9]\d{5}$|^[0][5-7]\d{4}$/

/**
 * 校验字符串是否为空
 * @param {string} str
 */
export function checkStrIsNull(str) {
  if (undefined == str || str == null || str == '') {
    return true
  } else {
    return false
  }
}

/**
 * 校验数组是否为空
 * @param {array} arr
 */
export function checkArrIsNull(arr) {
  if (undefined != arr && arr != null && arr != [] && arr.length > 0) {
    return false
  } else {
    return true
  }
}

/**
 * 校验邮编格式
 * @param {string} str
 */
export function checkZipCode(str) {
  return zipCode.test(str)
}

/**
 * 校验金钱（不含0，正数、两位小数）
 * @param {string} str
 */
export function checkTrueNum(str) {
  return trueNum.test(str)
}

/**
 * 校验正整数（不含0）
 * @param {string} str
 */
export function checkIntNumNotZreo(str) {
  return intNumNotZreo.test(str)
}

/**
 * 校验正整数（含0）
 * @param {string} str
 */
export function checkIntNum(str) {
  return intNum.test(str)
}

/**
 * 校验数字
 * @param {string} str
 */
export function checkNumber(str) {
  return numRex.test(str)
}

/**
 * 校验率数
 * @param {string} str
 */
export function checkRate(str) {
  return rateRex.test(str)
}

/**
 * 校验联系电话
 * @param {*} str
 */
export function checkContact(str) {
  return (
    contactRex.test(str) || contactRexNoSign.test(str) || mobileRex.test(str)
  )
}

/**
 * 固定电话
 * @param {String} str
 */
export function checkTelPhone(str) {
  return telPhone.test(str)
}

/**
 * 银行卡号
 * @param {String} str
 */
export function checkBankNo(str) {
  return bankNo.test(str)
}

/**
 * 纳税人识别号格式校验
 * @param {String} str
 */
export function checkTaxpayerNo(str) {
  return taxpayerNo.test(str)
}

/**
 * 邮箱校验
 * @param {*} str
 */
export function checkEmail(str) {
  return regEmail.test(str)
}

/**
 * 校验手机号
 * @param {*} str
 */
export function checkMobile(str) {
  return mobileRex.test(str)
}

/**
 * 校验是否是中文名
 * @param {*} str
 */
export function checkCN(str) {
  return cnReg.test(str)
}

/**
 * 大写校验
 * @param {*} str
 */
export function checkUpper(str) {
  const rule3 = /[A-Z]+/
  const flag3 = rule3.test(str)
  return flag3
}

/**
 * 身份证验证
 * @param {string} idCardNumber 身份证号码
 */
export function checkIDCardNumber(idCardNumber) {
  // 1 "验证通过!", 0 //校验不通过
  var format =
    /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
  //号码规则校验
  if (!format.test(idCardNumber)) {
    return false
  }
  //区位码校验
  //出生年月日校验   前正则限制起始年份为1900;
  var year = idCardNumber.substr(6, 4), //身份证年
    month = idCardNumber.substr(10, 2), //身份证月
    date = idCardNumber.substr(12, 2), //身份证日
    time = Date.parse(month + '-' + date + '-' + year), //身份证日期时间戳date
    now_time = Date.parse(new Date()), //当前时间戳
    dates = new Date(year, month, 0).getDate() //身份证当月天数
  if (time > now_time || date > dates) {
    return false
  }
  //校验码判断
  var c = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2) //系数
  var b = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2') //校验码对照表
  var array = idCardNumber.split('')
  var sum = 0
  for (var k = 0; k < 17; k++) {
    sum += parseInt(array[k]) * parseInt(c[k])
  }
  if (array[17].toUpperCase() != b[sum % 11].toUpperCase()) {
    return false
  }
  return true
}
