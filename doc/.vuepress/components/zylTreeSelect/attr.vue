<!--
 * @Author: zhanghan
 * @Date: 2022-12-04 01:00:07
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-02 10:04:35
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
          param: 'treeData',
          intro: '用于选择的树状数据',
          type: 'array',
          choose: '',
          default: '[]'
        },
        {
          param: 'defaultProps',
          intro: '用于选择的树状数据结构描述',
          type: 'object',
          choose:
            '<strong>label</strong> string, function(data, node) 指定节点标签为节点对象的某个属性值 <br/>' +
            '<strong>value</strong> string, number 指定节点取值为节点对象的某个属性值<br/>' +
            '<strong>children</strong> string 指定子树为节点对象的某个属性值<br/>' +
            '<strong>disabled</strong> boolean, function(data, node) 指定节点选择框是否禁用为节点对象的某个属性值<br/>' +
            '<strong>isLeaf</strong> boolean, function(data, node) 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
          default: '{ children: "children", label: "label", value: "value" }'
        },
        {
          param: 'checkLeafOnly',
          intro: '仅返回被选中的叶子节点的 keys',
          type: 'boolean',
          choose: '',
          default: 'false'
        },
        {
          param: '继承element属性',
          intro: '继承element属性',
          type: '继承element属性',
          choose: '继承element属性',
          default: '继承element属性'
        },
        {
          param: '',
          intro: '',
          type: '',
          choose: '',
          default: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
