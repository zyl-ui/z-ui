<!--
 * @Author: zhanghan
 * @Date: 2022-12-04 01:00:07
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-04 19:24:43
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
