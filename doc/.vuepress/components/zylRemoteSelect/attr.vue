<!--
 * @Author: zhanghan
 * @Date: 2022-12-04 01:00:07
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-02-13 16:44:25
 * @Descripttion: 
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
          param: 'v-model / value',
          intro: '初始化需要显示在select上的绑定值',
          type: 'number / string',
          choose: '',
          default: ''
        },
        {
          param: 'label',
          intro: '初始化需要显示在select上的文字信息',
          type: 'string',
          choose: '',
          default: ''
        },
        {
          param: 'pageSize',
          intro: '分页数（不能小于8条，否则下拉滚动不会触发）',
          type: 'number',
          choose: '',
          default: '10'
        },
        {
          param: 'total',
          intro: '总列表数（必填，用于判断是否继续下拉分页请求）',
          type: 'number',
          choose: '',
          default: '0'
        },
        {
          param: 'showDefaultList',
          intro: '是否显示默认查询列表',
          type: 'boolean',
          choose: '',
          default: 'false'
        },
        {
          param: '继承element属性',
          intro: '继承element属性',
          type: '继承element属性',
          choose: '继承element属性',
          default: '继承element属性'
        },
        {
          param: '',
          intro: '',
          type: '',
          choose: '',
          default: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
