<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-27 20:12:17
 * @Descripttion: 方法表格
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
          funName: 'addOneFile(file, fileList)',
          intro: '添加文件的回调',
          param:
            '<strong>file</strong> 返回file单个文件信息 object <br/>' +
            '<strong>fileList</strong> 返回fileList文件信息列表 array <br/>',
        },
        {
          funName: 'removeOneFile(file, fileList)',
          intro: '移除文件的回调',
          param:
            '<strong>file</strong> 返回file单个文件信息 object <br/>' +
            '<strong>fileList</strong> 返回fileList文件信息列表 array <br/>',
        },
        {
          funName: '继承element事件',
          intro: '继承element事件',
          param: '继承element事件',
        },
        {
          funName: '',
          intro: '',
          param: '',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
