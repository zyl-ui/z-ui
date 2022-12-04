<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 12:41:03
 * @Descripttion: 属性表格
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
          param: '继承element属性',
          intro: '继承element属性',
          type: '继承element属性',
          choose: '继承element属性',
          default: '继承element属性',
        },
        {
          param: '',
          intro: '',
          type: '',
          choose: '',
          default: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
