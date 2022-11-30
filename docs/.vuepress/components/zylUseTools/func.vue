<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 12:43:23
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
          funName: 'setCookie (key, value, iDay)',
          intro:
            '设置cookie <br/>' +
            '<strong>key</strong> 键值标识 string <br/> ' +
            '<strong>value</strong> JSON内容 string <br/>' +
            '<strong>iDay</strong> 存储天数 number <br/>',
        },
        {
          funName: 'getCookie (key)',
          intro:
            '获取cookie <br/>' + '<strong>key</strong> 键值标识 string <br/> ',
        },
        {
          funName: 'removeCookie',
          intro: '移除cookie',
        },
        {
          funName: 'clearCookie',
          intro: '清除所有cookie',
        },
        {
          funName: 'copyText (content)',
          intro:
            '复制内容 <br/>' +
            '<strong>content</strong> 需要复制的内容 string <br/> ',
        },
        {
          funName: 'fileDownload (file, name)',
          intro:
            '文件下载，支持url/blob/base64格式 <br/>' +
            '<strong>file</strong> 文件内容，可以是url/blob/base64格式 string | blob <br/> ' +
            '<strong>name</strong> 文件名（当文件内容为url时，可不设置，自动取url上的文件名） string <br/> ',
        },
        {
          funName: 'getUrlFileName (url)',
          intro:
            '获链接文件名+后缀 <br/>' +
            '<strong>url</strong> 链接地址 string <br/> ',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
