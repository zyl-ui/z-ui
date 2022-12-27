<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-27 20:14:11
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
          intro: '设置cookie',
          param:
            '<strong>key</strong> 键值标识 string <br/> ' +
            '<strong>value</strong> JSON内容 string <br/>' +
            '<strong>iDay</strong> 存储天数 number <br/>',
        },
        {
          funName: 'getCookie (key)',
          intro: '获取cookie',
          param: '<strong>key</strong> 键值标识 string <br/> ',
        },
        {
          funName: 'removeCookie',
          intro: '移除cookie',
          param: '<strong>key</strong> 键值标识 string <br/> ',
        },
        {
          funName: 'clearCookie',
          intro: '清除所有cookie',
          param: '',
        },
        {
          funName: 'copyText (content, success, fail)',
          intro: '复制内容',
          param:
            '<strong>content</strong> 需要复制的内容 string <br/> ' +
            '<strong>success</strong> 复制成功回调 function <br/> ' +
            '<strong>fail</strong> 复制失败回调 function <br/> ',
        },
        {
          funName: 'fileDownload (file, name)',
          intro: '文件下载，支持传入url/blob/base64格式',
          param:
            '<strong>file</strong> 文件内容，可以是url/blob/base64格式 string | blob <br/> ' +
            '<strong>name</strong> 文件名，传入时需要带文件后缀（当文件内容为url时，可不设置，会自动取url上的文件名）例如："abc.jpg" string <br/> ',
        },
        {
          funName: 'getUrlFileName (url)',
          intro: '获链接文件名+后缀',
          param: '<strong>url</strong> 链接地址 string <br/> ',
        },
        {
          funName: 'getExtensionFromBase64 (base64)',
          intro: '从base64编码的图片中获取扩展名',
          param: '<strong>base64</strong> base64数据 string <br/>',
        },
        {
          funName: 'getUUID',
          intro: '获取UUID',
          param: '',
        },
        {
          funName: 'compressImg (base64String, w, quality)',
          intro: '压缩base64图片',
          param:
            '<strong>base64String</strong> base64格式数据 string <br/> ' +
            '<strong>w</strong> 宽度 number <br/> ' +
            '<strong>quality</strong> 文件质量（0~1） number <br/> ',
        },
        {
          funName: 'getBase64Size (base64String)',
          intro: '获取base64文件大小，返回KB数字',
          param: '<strong>base64String</strong> base64格式数据 string <br/> ',
        },
        {
          funName: 'base64toBlob (base64String)',
          intro: 'Base64 转 Blob',
          param: '<strong>base64String</strong> base64格式数据 string <br/> ',
        },
        {
          funName: 'blobToBase64 (file)',
          intro: 'Blob 转 Base64',
          param: '<strong>file</strong> Blob格式数据 blob <br/>',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
