<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 17:59:56
 * @Descripttion: 事件表格
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
          eventName: 'change(index)',
          intro: '切换查看文件的回调',
          param: '<strong>index</strong> 返回文件列表的当前所在索引下标 <br/>'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
