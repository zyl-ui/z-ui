<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 01:04:33
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-10 11:01:04
 * @Descripttion: 远程搜索分页选择器组件
 -->

<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    v-loadmore="loadmore"
    filterable
    remote
    :loading="listLoading"
    :remote-method="remoteMethod"
    ref="remoteSelect"
  >
    <el-option
      v-for="(item, index) in selectList"
      :key="index"
      :label="item.label"
      :value="item.value"
    >
      <slot v-bind="{ row: item, $index: index }" name="optionItem"></slot>
    </el-option>
    <template v-for="(index, name) in $slots" :slot="name">
      <slot :name="name" />
    </template>
    <el-button type="text" :loading="loading" class="load-text">
      {{
        loading
          ? '加载中'
          : this.selectList.length < this.total && !isFirstIn
          ? '下拉加载'
          : '没有更多了'
      }}
    </el-button>
  </el-select>
</template>

<script>
export default {
  name: 'zylRemoteSelect',
  props: {
    // 总列表数，用于判断是否继续下拉分页请求
    total: {
      type: Number,
      require: true,
      default: 0
    },
    // 分页数（不能小于8条，否则下拉滚动不会触发）
    pageSize: {
      type: Number,
      default: 10
    },
    // 初始化需要显示在select上的文字信息
    label: {
      type: [String, Array],
      default: ''
    },
    // 是否显示默认查询列表
    showDefaultList: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 查询列表加载状态
      listLoading: false,
      loading: false,
      // 是否为第一次进入
      isFirstIn: true,
      // 远程搜索参数
      queryParams: {
        searchWorld: '',
        pageNum: ''
      },
      // 选择项列表
      selectList: []
    }
  },
  directives: {
    // 在组件中接受一个 directives 的选项
    loadmore: {
      inserted(el, binding, vnode) {
        const SELECTWRAP_DOM = el.querySelector(
          '.el-select-dropdown .el-select-dropdown__wrap'
        )
        SELECTWRAP_DOM.addEventListener('scroll', function() {
          const condition =
            this.scrollHeight - this.scrollTop <= this.clientHeight
          if (condition) {
            binding.value()
          }
        })
      }
    }
  },
  watch: {
    '$attrs.value': {
      immediate: true, //  关键，，将立即以表达式的当前值触发回调
      handler(val, oval) {
        // 防止重复触发
        if (val === oval) return

        if (val && !oval) {
          // 若存在默认绑定值且第一次进入，将默认值塞入列表项
          if (Array.isArray(this.label) && Array.isArray(val)) {
            // 多选
            val.forEach((item, index) => {
              this.selectList.push({ label: this.label[index], value: item })
            })
          } else {
            // 单选
            this.selectList.push({ label: this.label, value: val })
          }
        } else {
          this.isFirstIn = false
          // 远程搜索
          this.remoteMethod()
        }
      }
    }
  },
  methods: {
    // 远程搜索
    remoteMethod(query) {
      this.selectList = []
      if (query || this.showDefaultList) {
        this.queryParams.searchWorld = query
        this.queryParams.pageNum = 1
        this.listLoading = true
        this.getSelectList()
      }
    },
    // 调用接口查询数据
    async getSelectList() {
      this.loading = true
      const { searchWorld, pageNum } = this.queryParams
      // 调用绑定请求分页数据的方法
      const result =
        (await this.$listeners
          .getSelectList(searchWorld, pageNum, this.pageSize)
          .finally(() => {
            this.listLoading = false
            this.loading = false
          })) || []
      // 将每次分页数据追加
      this.selectList = [...this.selectList, ...result]
    },
    // 远程搜索列表触底事件
    loadmore() {
      // 分页数据不超过总数可以继续下拉请求
      if (this.selectList.length < this.total) {
        this.queryParams.pageNum++
        this.getSelectList()
      }
    }
  }
}
</script>

<style scoped>
.load-text {
  margin: auto;
  display: inherit;
  color: gray;
  cursor: unset;
  font-size: 13px;
}
</style>
