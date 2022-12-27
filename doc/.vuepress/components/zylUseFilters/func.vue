<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-27 20:08:22
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
          funName: 'zylTel',
          intro: '电话/手机脱敏',
          param: '<strong>val</strong> 电话号/手机号 string | number <br/>',
          default: '缺省文字 "-"',
        },
        {
          funName: 'zylName',
          intro: '姓名脱敏',
          param: '<strong>val</strong> 姓名 string <br/>',
          default: '缺省文字 "-"',
        },
        {
          funName: 'zylIdcard',
          intro: '身份证/银行卡脱敏',
          param: '<strong>val</strong> 身份证/银行卡 string <br/>',
          default: '缺省文字 "-"',
        },
        {
          funName: 'zylDataFormatt (time, format, showEmptTxt)',
          intro: '时间戳日期过滤',
          param:
            '<strong>time</strong> 时间戳 number <br/> ' +
            '<strong>format</strong> 自定义时间格式 string 参数: y年 m月 d日 h时 i分 s秒 a星期 格式如："{y}-{m}-{d} {h}:{i}:{s}" <br/>' +
            '<strong>showEmptTxt</strong> 为空时是否返回缺省文字 boolean 默认true返回缺省文字,fasle返回 <br/>',
          default: '缺省文字 "-"',
        },
        {
          funName: 'zylMoney',
          intro: '金额过滤（精确到小数点后2位）',
          param: '<strong>val</strong> 金额 string | number <br/>',
          default: '0.00',
        },
        {
          funName: 'zylNum',
          intro: '数字过滤（主要过滤undefind不为NaN）',
          param: '<strong>val</strong> 数字 string | number <br/>',
          default: '0',
        },
        {
          funName: 'zylEmpty',
          intro: '空值过滤',
          param: '<strong>val</strong> 任意值 string | number <br/>',
          default: '缺省文字 "-"',
        },
        {
          funName:
            'zylGetLabel (value, ary = [], format = { label: "label", value: "value" }) ',
          intro: '获取字典值名称',
          param:
            '<strong>value</strong> 字典码值 string | number <br/> ' +
            '<strong>ary</strong> 字典数据数组 array <br/>' +
            '<strong>format</strong> 自定义数据格式 object 默认格式： { label: "label", value: "value" } <br/>',
          default: '缺省文字 "-"',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
