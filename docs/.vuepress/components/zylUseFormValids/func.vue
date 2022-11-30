<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 12:51:46
 * @Descripttion: 方法表格
 -->
<template>
  <div>
    <zyl-attr :tableData="tableData"></zyl-attr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          funName: 'validateIdCard',
          intro: '校验身份证',
        },
        {
          funName: 'validateTrueNum',
          intro: '校验正实数(金钱，精确到小数点后两位)',
        },
        {
          funName: 'validateTrueNumMax (maxNum)',
          intro:
            '校验正实数(金钱，精确到小数点后两位) 并校验正实数的上限（包含上限）<br/>' +
            '<strong>maxNum</strong> 传入0-maxNum的数字上限，包含上限 number <br/> ',
        },
        {
          funName: 'validateIntNumNotZreo',
          intro: '校验正整数（不含0）',
        },
        {
          funName: 'validateIntNumNotZreoMax (maxNum)',
          intro:
            '校验正整数（不含0）并校验正整数的上限（包含上限）<br/>' +
            '<strong>maxNum</strong> 传入0-maxNum的数字上限，包含上限 number <br/> ',
        },
        {
          funName: 'validateBankNo',
          intro: '校验银行账号',
        },
        {
          funName: 'validateCN',
          intro: '校验中文名',
        },
        {
          funName: 'validateEmail',
          intro: '校验邮箱',
        },
        {
          funName: 'validateMobile',
          intro: '校验手机号',
        },
        {
          funName: 'validateContact',
          intro: '校验联系电话',
        },
        {
          funName: 'validatePostCode',
          intro: '校验邮政编码',
        },
        {
          funName: 'validateNumber',
          intro: '校验数字',
        },
        {
          funName: 'validateRate',
          intro: '校验率数',
        },
        {
          funName: 'validateTextLength (length)',
          intro:
            '校验文本长度 <br/>' +
            '<strong>length</strong> 传入0-length的文本长度上限，包含上限 number <br/> ',
        },
        {
          funName: 'validateTimeRange (length)',
          intro:
            '校验起始日期关联 <br/>' +
            '<strong>getRef</strong> 表单绑定的ref object <br/> ' +
            '<strong>start</strong> 开始时间字段名称 string <br/> ' +
            '<strong>end</strong> 结束时间字段 string <br/> ' +
            '<strong>startLabel</strong> 开始时间字段 string <br/> ' +
            '<strong>start</strong> 开始时间字段中文名称 string 默认 “开始时间” <br/> ' +
            '<strong>endLabel</strong> 结束时间字段中文名称 string 默认 “结束时间” <br/> ' +
            '<strong>required</strong> 是否为必填项 boolean 默认 false<br/> ',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
