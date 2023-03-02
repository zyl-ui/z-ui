<template>
  <div>
    <p>单选：{{ deptId }}</p>
    <zyl-tree-select
      v-model="deptId"
      clearable
      default-expand-all
      check-strictly
      highlight-current
      :expand-on-click-node="false"
      placeholder="请选择部门"
      style="width: 150px;"
      :treeData="treeData"
      :defaultProps="{
        children: 'children',
        label: 'label',
        value: 'id'
      }"
    />
    <p>多选：{{ deptId2 }}</p>
    <zyl-tree-select
      v-model="deptId2"
      clearable
      multiple
      check-on-click-node
      default-expand-all
      :expand-on-click-node="false"
      placeholder="请选择部门"
      style="width: 150px;"
      :treeData="treeData"
      :defaultProps="{
        children: 'children',
        label: 'label',
        value: 'id'
      }"
    />
    <p>
      通过
      <strong>checkLeafOnly</strong>
      属性仅返回被选中的叶子节点的 keys：{{ deptId3 }}
    </p>
    <zyl-tree-select
      v-model="deptId3"
      clearable
      multiple
      check-on-click-node
      default-expand-all
      :expand-on-click-node="false"
      checkLeafOnly
      placeholder="请选择部门"
      style="width: 150px;"
      :treeData="treeData"
      :defaultProps="{
        children: 'children',
        label: 'label',
        value: 'id'
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      deptId: '',
      deptId2: [],
      deptId3: [],
      treeData: [
        {
          id: 1,
          label: '前端部门',
          children: [
            {
              id: 2,
              label: '前端部门-1',
              children: [
                {
                  id: 3,
                  label: '前端部门-1-1',
                  children: [
                    { id: 8, label: '前端部门-1-1-1' },
                    { id: 9, label: '前端部门-1-1-2' }
                  ]
                },
                { id: 4, label: '前端部门-1-2' }
              ]
            }
          ]
        },
        {
          id: 5,
          label: '后端部门',
          children: [
            { id: 6, label: '后端部门-1' },
            { id: 7, label: '后端部门-2' }
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>
