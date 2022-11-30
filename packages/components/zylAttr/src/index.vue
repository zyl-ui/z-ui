<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 09:52:45
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-11-30 00:40:09
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
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // 判断传入数据是否有相关字段名称
    fitterHeadData() {
      const list = this.headData.filter((head) => {
        for (let i = 0; i < this.tableData.length; i++) {
          const keys = Object.keys(this.tableData[i])
          return keys.includes(head.prop)
        }
      })
      return list
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
    return {
      headData: [
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
    }
  },
}
</script>

<style lang="scss"></style>
