<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-02 10:50:01
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
          eventName: 'addOneFile(file, fileList)',
          intro: '添加文件触发事件',
          param:
            '<strong>file</strong> 返回file单个文件信息 object <br/>' +
            '<strong>fileList</strong> 返回fileList文件信息列表 array <br/>'
        },
        {
          eventName: 'removeOneFile(file, fileList)',
          intro: '移除文件触发事件',
          param:
            '<strong>file</strong> 返回file单个文件信息 object <br/>' +
            '<strong>fileList</strong> 返回fileList文件信息列表 array <br/>'
        },
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
