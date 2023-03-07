<!--
 * @Author: zhanghan
 * @Date: 2023-02-28 16:34:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-03 11:54:59
 * @Descripttion: 树状结构选择组件
-->
<template>
  <el-select
    ref="treeSelect"
    v-model="selectVal"
    v-bind="$attrs"
    v-on="$listeners"
    :filter-method="filterMethod"
  >
    <el-option
      v-for="(item, index) in treeToArray(treeData)"
      :key="index"
      :label="item[defaultProps.label]"
      :value="item[defaultProps.value]"
      style="display: none"
    />
    <el-tree
      :class="[
        $attrs.multiple === '' || $attrs.multiple === true
          ? ''
          : 'main-select-el-tree'
      ]"
      ref="nodeTree"
      :filter-node-method="filterNode"
      v-bind="$attrs"
      v-on="$listeners"
      :data="treeData"
      :props="defaultProps"
      :node-key="defaultProps.value"
      :show-checkbox="$attrs.multiple"
      :default-checked-keys="
        $attrs.multiple === '' || $attrs.multiple === true ? selectVal : []
      "
      @current-change="handleCurrentChange"
      @check="handleCheck"
    />
  </el-select>
</template>

<script>
export default {
  name: 'zylTreeSelect',
  props: {
    // 绑定值
    value: {
      type: [String, Number, Array],
      default: ''
    },
    // 用于选择的树状数据
    treeData: {
      type: Array,
      require: true,
      default: () => []
    },
    // 用于选择的树状数据格式描述
    defaultProps: {
      type: Object,
      default: () => ({
        children: 'children',
        label: 'label',
        value: 'value'
      })
    },
    // 是否仅返回被选中的叶子节点的 keys
    checkLeafOnly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 组件外部绑定选择的树id
    selectVal: {
      // 利用计算属性动态设置外部v-model绑定值
      set(val) {
        this.$emit('input', val)
      },
      // 利用计算属性动态获取外部v-model绑定值
      get() {
        return this.value
      }
    },
    // 是否为多选
    isMultiple() {
      return this.$attrs.multiple === '' || this.$attrs.multiple === true
    },
    // 是否开启过滤
    isFilterable() {
      return this.$attrs.filterable === '' || this.$attrs.filterable === true
    },
    // 树数据扁平化处理
    treeToArray() {
      return function(tree) {
        const copyTree = JSON.parse(JSON.stringify(tree))
        return copyTree.reduce((res, item) => {
          const children = item[this.defaultProps.children]
          delete item.children
          return res.concat(
            item,
            children && children.length ? this.treeToArray(children) : []
          )
        }, [])
      }
    }
  },
  watch: {
    selectVal: {
      immediate: true, //  关键，，将立即以表达式的当前值触发回调
      handler(val, oval) {
        // 有过滤属性的情况，当选择项清空时对应的关键字过滤节点也清空
        if (this.isFilterable) {
          this.$nextTick(() => {
            this.filterMethod('')
          })
        }

        // 单选的情况不做勾选赋值操作
        if (Array.isArray(val) && this.isMultiple) {
          this.$nextTick(() => {
            this.$refs.nodeTree.setCheckedKeys(val)
          })
        }
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    // 当前选中节点变化时触发的事件（单选）
    handleCurrentChange(dataItem, node) {
      // 原方法不能被覆盖，留给用户操作
      this.$attrs['current-change'] &&
        this.$attrs['current-change'](dataItem, node)

      // 多选的情况不做赋值操作
      if (this.isMultiple) return

      // 给选择框赋值
      this.selectVal = node.data[this.defaultProps.value]
      this.$refs.treeSelect.blur()
    },
    // 当复选框被点击的时候触发（多选）
    handleCheck(dataItem, node) {
      // 原方法不能被覆盖，留给用户操作
      this.$attrs['check'] && this.$attrs['check'](dataItem, node)

      this.$nextTick(() => {
        this.selectVal = this.$refs.nodeTree.getCheckedKeys(
          this.checkLeafOnly === '' || this.checkLeafOnly === true
        )
      })
    },
    // 选择项过滤触发
    filterMethod(val) {
      this.$refs.nodeTree.filter(val)
    },
    // 节点过滤方法
    filterNode(value, data) {
      if (!value) return true
      return data[this.defaultProps.label].indexOf(value) !== -1
    }
  }
}
</script>

<style>
.main-select-el-tree .el-tree-node.is-current > .el-tree-node__content {
  font-weight: bold;
  color: #409eff;
}

.el-tree-node__content {
  padding-right: 10px;
}
</style>
