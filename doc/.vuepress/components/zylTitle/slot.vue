<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 14:28:03
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
          name: 'end',
          intro: '标题末尾插槽'
        },
        {
          name: 'default',
          intro: '默认插槽位置为标题文字内容'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
