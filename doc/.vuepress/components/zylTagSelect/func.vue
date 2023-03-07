<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-07 11:14:12
 * @Descripttion: 组件方法
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
          funName: 'selectTag (val, index)',
          intro: '选中指定标签',
          param:
            '<strong>val</strong> 指定选择的标签值 string/number <br/> ' +
            '<strong>index</strong> 指定选择的标签在标签列表的索引 number <br/> '
        },
        {
          funName: 'addOrDeleteTag (val, index)',
          intro: '添加/删除指定标签（选中则删除，未选中则添加）',
          param:
            '<strong>val</strong> 指定选择的标签值 string/number <br/> ' +
            '<strong>index</strong> 指定选择的标签在标签列表的索引 number <br/> '
        },
        {
          funName: 'nextAndPreBtn (step)',
          intro: '切换标签展示位置',
          param: '<strong>step</strong> 切换步长 number <br/> '
        },
        {
          funName: 'setFirstShowIndex',
          intro: '根据边界判断设置选中为可展示区域的第一个index',
          param: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
