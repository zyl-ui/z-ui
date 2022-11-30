<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 12:43:04
 * @Descripttion: 属性表格
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
          param: 'message',
          intro: '消息提示的文本',
          type: 'String | Template',
          choose: '——',
          default: '——',
        },
        {
          param: 'closeButton',
          intro: '是否设置关闭按钮，及关闭按钮的文本以及回调函数',
          type: 'Object',
          choose: '——',
          default: '——',
        },
        {
          param: 'enableHtml',
          intro: '是否渲染 message 文本为 HTML',
          type: 'Boolean',
          choose: '——',
          default: 'false',
        },
        {
          param: 'autoClose',
          intro: '是否自动关闭 Toast',
          type: 'Boolean | Number',
          choose: '——',
          default: '2（2S 后自动关闭）',
        },
        {
          param: 'position',
          intro: 'Toast 出现的位置',
          type: 'String',
          choose: 'top | bottom | middle | right | left',
          default: 'middle',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
