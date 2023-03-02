<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-27 14:38:38
 * @Descripttion: 组件属性表
 -->
 
<template>
  <div>
    <el-table :data="fitterTableData" style="width: 100%">
      <el-table-column
        v-for="(item, index) in fitterHeadData"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :align="item.align"
      >
        <template slot-scope="{ row }">
          <span v-html="row[item.prop]"></span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'zylAttr',
  props: {
    headData: {
      type: Array,
      default: () => [
        {
          prop: 'param',
          label: '参数',
          align: 'left',
        },
        {
          prop: 'name',
          label: 'name',
          align: 'left',
        },
        {
          prop: 'eventName',
          label: '事件名',
          align: 'left',
        },
        {
          prop: 'funName',
          label: '方法名',
          align: 'left',
        },
        {
          prop: 'intro',
          label: '说明',
          align: 'left',
        },
        {
          prop: 'type',
          label: '类型',
          align: 'left',
        },
        {
          prop: 'choose',
          label: '可选值',
          align: 'left',
        },
        {
          prop: 'default',
          label: '默认值',
          align: 'left',
        },
      ],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // 判断传入数据是否有相关字段名称
    fitterHeadData() {
      // 根据传入列表数据的第一项的key顺序进行排序
      let sortList = []
      const sortKeys = Object.keys(this.tableData[0] || {}) || []
      sortKeys.forEach((key) => {
        this.headData.forEach((item) => {
          if (key === item.prop) sortList.push(item)
        })
      })
      return sortList
    },
    // 过滤传入项
    fitterTableData() {
      const list = this.tableData.map((item) => {
        const keys = Object.keys(item)
        keys.forEach((key) => {
          item[key] = item[key].toString() || '——'
        })
        return item
      })
      return list
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss"></style>
