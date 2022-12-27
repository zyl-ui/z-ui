<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-27 18:58:40
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
          name: 'explain',
          intro: '在上传组件结尾，错误信息提示前额外拓展追加一些元素',
        },
        {
          name: '继承element插槽',
          intro: '继承element插槽',
        },
        {
          name: '',
          intro: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
