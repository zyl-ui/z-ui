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
          eventName: 'change(tagInfo)',
          intro: '标签/下拉选项点击事件',
          param: 'tagInfo 标签信息（单选 object 多选 array）'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
