<!--
 * @Author: zhanghan
 * @Date: 2022-12-04 01:00:07
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 14:31:14
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
          param: 'mBottom',
          intro: '组件底部间距（px）',
          type: 'String',
          choose: '',
          default: '30'
        },
        {
          param: 'lineWidth',
          intro: '左侧竖线宽度（px）',
          type: 'String',
          choose: '',
          default: '4'
        },
        {
          param: 'lineHeight',
          intro: '左侧竖线高度（px）',
          type: 'String',
          choose: '',
          default: '16'
        },
        {
          param: 'lineLeft',
          intro: '左侧竖线左边距（px）',
          type: 'String',
          choose: '',
          default: '0'
        },
        {
          param: 'lineRight',
          intro: '左侧竖线右边距（px）',
          type: 'String',
          choose: '',
          default: '6'
        },
        {
          param: 'lineTop',
          intro: '左侧竖线顶部部边距（px）',
          type: 'String',
          choose: '',
          default: '0'
        },
        {
          param: 'lineBottom',
          intro: '左侧竖线底部边距（px）',
          type: 'String',
          choose: '',
          default: '14'
        },
        {
          param: 'lineColor',
          intro: '左侧竖线颜色',
          type: 'String',
          choose: '',
          default: '#3C7BFF'
        },
        {
          param: 'titleContentSize',
          intro: '标题字体大小（px）',
          type: 'String',
          choose: '',
          default: '14'
        },
        {
          param: 'titleContentWeight',
          intro: '标题字体粗细',
          type: 'String',
          choose: '',
          default: 'bold'
        },
        {
          param: 'titleContent',
          intro: '标题文字内容',
          type: 'String',
          choose: '',
          default: ''
        },
        {
          param: 'titleContentColor',
          intro: '标题文字内容颜色',
          type: 'String',
          choose: '',
          default: '#16191D'
        },
        {
          param: 'borderLine',
          intro: '是否显示标题下划线',
          type: 'Boolean',
          choose: 'true 显示 / false 不显示',
          default: 'true'
        },
        {
          param: 'borderColor',
          intro: '下划线颜色',
          type: 'String',
          choose: '',
          default: '#e7e9ec'
        },
        {
          param: 'borderHeight',
          intro: '下划线粗细（px）',
          type: 'String',
          choose: '',
          default: '1'
        },
        {
          param: 'endColor',
          intro: '末尾自定义插槽文字颜色',
          type: 'String',
          choose: '',
          default: '#5c5e61'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
