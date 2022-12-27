<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-27 20:45:46
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
          param: '',
        },
        {
          funName: 'validateTrueNum',
          intro: '校验正实数(金钱，精确到小数点后两位)',
          param: '',
        },
        {
          funName: 'validateTrueNumMax (maxNum)',
          intro:
            '校验正实数(金钱，精确到小数点后两位) 并校验正实数的上限（包含上限）',
          param:
            '<strong>maxNum</strong> 传入0-maxNum的数字上限，包含上限 number <br/> ',
        },
        {
          funName: 'validateIntNumNotZreo',
          intro: '校验正整数（不含0）',
          param: '',
        },
        {
          funName: 'validateIntNumNotZreoMax (maxNum)',
          intro: '校验正整数（不含0）并校验正整数的上限（包含上限）',
          param:
            '<strong>maxNum</strong> 传入0-maxNum的数字上限，包含上限 number <br/>',
        },
        {
          funName: 'validateBankNo',
          intro: '校验银行账号',
          param: '',
        },
        {
          funName: 'validateCN',
          intro: '校验中文名',
          param: '',
        },
        {
          funName: 'validateEmail',
          intro: '校验邮箱',
          param: '',
        },
        {
          funName: 'validateMobile',
          intro: '校验手机号',
          param: '',
        },
        {
          funName: 'validateContact',
          intro: '校验联系电话',
          param: '',
        },
        {
          funName: 'validatePostCode',
          intro: '校验邮政编码',
          param: '',
        },
        {
          funName: 'validateNumber',
          intro: '校验数字',
          param: '',
        },
        {
          funName: 'validateRate',
          intro: '校验率数',
          param: '',
        },
        {
          funName: 'validateTextLength (length)',
          intro: '校验文本长度',
          param:
            '<strong>length</strong> 传入0-length的文本长度上限，包含上限 number <br/>',
        },
        {
          funName:
            'validateTimeRange ({ getRef, start, end, startLabel, start, endLabel, required })',
          intro: '校验起始日期关联',
          param:
            '<strong>getRef</strong> 表单绑定的ref object <br/> ' +
            '<strong>start</strong> 开始时间字段名称 string <br/> ' +
            '<strong>end</strong> 结束时间字段 string <br/> ' +
            '<strong>startLabel</strong> 开始时间字段 string <br/> ' +
            '<strong>start</strong> 开始时间字段中文名称 string 默认 “开始时间” <br/> ' +
            '<strong>endLabel</strong> 结束时间字段中文名称 string 默认 “结束时间” <br/> ' +
            '<strong>required</strong> 是否为必填项 boolean 默认 false <br/> ',
        },
        {
          funName: 'validateTimeRange (type, compareDate)',
          intro: '指定日期选择器日期可选范围',
          param:
            '<strong>type</strong> 指定可选范围规则 string <br/> ' +
            '可选值：<br/>' +
            ' "<" 当前日期之前不可选（不含当前日期）<br/> ' +
            ' "<=" 当前日期之前不可选（含当前日期）<br/> ' +
            ' ">" 当前日期之后不可选（不含当前日期） <br/> ' +
            ' ">=" 当前日期之后不可选（含当前日期）<br/> ' +
            ' "=" 只能选择当前日期<br/> ' +
            '<strong>compareDate</strong> 若有需要可指定一个日期作为起始时间点指定可选范围规则进行比较过滤。格式如下 "2020-06-01"，不传默认为当前日期 string <br/> ',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
