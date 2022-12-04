<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 12:42:51
 * @Descripttion: 插槽表格
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
          name: 'header',
          intro: '需要展示的内容',
        },
        {
          name: 'footer',
          intro: '需要隐藏的内容',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
