<!--
 * @Author: zhanghan
 * @Date: 2022-12-04 01:00:07
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-07 10:59:31
 * @Descripttion: 组件属性
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
          param: 'v-model / value',
          intro: '初始化需要显示在select上的绑定值',
          type: 'string | number | array [number / string]',
          choose: '',
          default: ''
        },
        {
          param: 'list',
          intro: 'tag列表数据',
          type: 'array',
          choose: '',
          default: '[]'
        },
        {
          param: 'defaultProps',
          intro: '用于选择的数据格式描述',
          type: 'object',
          choose:
            '<strong>label</strong> string 指定标签为节点对象的某个属性值 <br/>' +
            '<strong>value</strong> string, number 指定取值为节点对象的某个属性值<br/>',
          default: '{ label: "label", value: "value" }'
        },
        {
          param: 'showTagNum',
          intro: '需要显示的tag数量',
          type: 'number',
          choose: '',
          default: '3'
        },
        {
          param: 'size',
          intro: '组件整体大小',
          type: 'String',
          choose: 'medium / small / mini',
          default: 'mini'
        },
        {
          param: 'multiple',
          intro: '是否为多选',
          type: 'Boolean',
          choose: 'false / true',
          default: 'false'
        },
        {
          param: 'followSelect',
          intro: '点击标签/下拉选项后展示项是否跟随选中项项移动',
          type: 'Boolean',
          choose: 'false / true',
          default: 'false'
        },
        {
          param: 'switchSelect',
          intro:
            '点击左右切换选中项是否可跟随切换移动（仅在单选时有效，即 multiple 关闭时）',
          type: 'Boolean',
          choose: 'false / true',
          default: 'false'
        },
        {
          param: 'showMoreBtn',
          intro: '是否显示更多下拉选项按钮',
          type: 'Boolean',
          choose: 'false / true',
          default: 'true'
        },
        {
          param: 'showSwitchBtn',
          intro: '是否显示左右切换按钮（开启后switchSelect属性无效）',
          type: 'Boolean',
          choose: 'false / true',
          default: 'true'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
