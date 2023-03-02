<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-02 10:13:32
 * @Descripttion: 组件事件
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
          eventName: '继承element事件',
          intro: '继承element事件',
          param: '继承element事件'
        },
        {
          eventName: '',
          intro: '',
          param: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
