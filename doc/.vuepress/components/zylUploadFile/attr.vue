<!--
 * @Author: zhanghan
 * @Date: 2022-12-04 01:00:07
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-27 18:01:38
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
          param: 'action',
          intro: '上传的地址',
          type: 'string',
          choose: '',
          default: '',
        },
        {
          param: 'value / v-model',
          intro: '绑定值',
          type: 'array [string / object]',
          choose:
            'onlyUrlListBack 关闭时数据格式：<br/> [{name: "图片名称1", url: "url1", uid: "uid1"},{name: "图片名称2", url: "url2", uid: "uid2"}]<br/> ' +
            'onlyUrlListBack 开启时数据格式：<br/> ["url1", "url2", "url2"] <br/>' +
            '若对象格式字段名称不符合，可通过 fileItemColum 配置进行自定义转换',
          default:
            '[{name: "图片名称1", url: "url1", uid: "uid1"},{name: "图片名称2", url: "url2", uid: "uid2"}]',
        },
        {
          param: 'onlyUrlListBack',
          intro:
            '上传成功、删除回调是否只回传和双向绑定纯url/base64数组列表，不回传文件其他信息',
          type: 'boolean',
          choose: 'false / true',
          default: 'false',
        },
        {
          param: 'fileInfoColumn',
          intro:
            '接口直传方式需要从接口选取的文件信息字段，支持.符号进行选取；例如："entity.data" ',
          type: 'string',
          choose: '',
          default: 'entity',
        },
        {
          param: 'fileItemColum',
          intro:
            '自定义双向绑定的文件数据格式转换，当onlyUrlListBack关闭时生效，确保选取的字段符合组件接收的数据格式',
          type: 'object',
          choose: '',
          default: '{name: "name", url: "url", uid: "uid"}',
        },
        {
          param: 'btnName',
          intro: '上传按钮名称（list-type非卡片样式picture-card时生效）',
          type: 'string',
          choose: '',
          default: '上传文件',
        },
        {
          param: 'limit',
          intro: '限制个数（个）',
          type: 'number',
          choose: '',
          default: '1',
        },
        {
          param: 'maxSize',
          intro: '限制大小（M）',
          type: 'number',
          choose: '',
          default: '5',
        },
        {
          param: 'accept',
          intro: '限制可被支持的文件格式（用，隔开）',
          type: 'string',
          choose: '',
          default: '.jpeg, .jpg, .png, .doc, .docx, .pdf',
        },
        {
          param: 'changeBase64',
          intro: '是否转换输出数据为base64',
          type: 'boolean',
          choose: 'false / true',
          default: 'false',
        },
        {
          param: 'showTip',
          intro:
            '是否显示上传提示（默认开启，关闭后不会在界面显示限制大小、文件类型相关的文字提示，但不影响上传校验）',
          type: 'boolean',
          choose: 'false / true',
          default: 'true',
        },
        {
          param: 'errorMessage',
          intro:
            '手动校验后的错误消息提示，效果等同于el-form表单校验错误时的红色文字提示；当然，这里更加推荐你借助el-form和el-form-item绑定prop去进行表单自动校验',
          type: 'string',
          choose: '',
          default: '',
        },
        {
          param: 'notesFlag',
          intro:
            '是否显示备注（打开后可以在notes属性为上传文件做一些文字说明和补充）',
          type: 'boolean',
          choose: 'false / true',
          default: 'false',
        },
        {
          param: 'notes',
          intro: '备注内容，当notesFlag开启时生效',
          type: 'string | html',
          choose: '',
          default: '',
        },
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
