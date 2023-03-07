<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-06 17:15:15
 * @Descripttion: 组件方法
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
          funName: '',
          intro: '',
          param: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
