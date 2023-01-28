<!--
 * @Author: zhanghan
 * @Date: 2022-12-04 01:00:07
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 17:55:11
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
          param: 'value / v-model',
          intro: '是否显示文件浏览',
          type: 'Boolean',
          choose: 'true 显示 / false 不显示',
          default: 'false'
        },
        {
          param: 'viewerUrl',
          intro: '文件查看器的地址（必传，采用外部iframe浏览，节省构建时间）',
          type: 'String',
          choose: '',
          default: ''
        },
        {
          param: 'fileList',
          intro: '文件浏览的列表',
          type: 'Array',
          choose: '',
          default: '[]'
        },
        {
          param: 'dialogTitle',
          intro: '弹出窗的标题',
          type: 'String',
          choose: '',
          default: '文件浏览'
        },
        {
          param: 'dialogWidth',
          intro: '弹出窗的宽度',
          type: 'String',
          choose: '',
          default: '80%'
        },
        {
          param: 'dialogHeight',
          intro: '弹出窗的高度（取决于轮播图高度）',
          type: 'String',
          choose: '',
          default: '500px'
        },
        {
          param: 'initialIndex',
          intro: '初始化显示第几张',
          type: 'Number',
          choose: '',
          default: '0'
        },
        {
          param: 'useOfficeMicroOnline',
          intro:
            '是否开启使用微软提供的office文件在线访问接口（内网无效，可选，默认false关闭）',
          type: 'Boolean',
          choose: 'true 开启 / false 关闭',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
