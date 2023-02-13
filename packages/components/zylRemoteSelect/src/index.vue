<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 01:04:33
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-02-10 19:38:33
 * @Descripttion: 远程搜索分页选择器组件
 -->

<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    v-loadmore="loadmore"
    filterable
    remote
    :loading="firstLoading"
    :remote-method="remoteMethod"
  >
    <el-option
      v-for="(item, index) in selectList"
      :key="index"
      :label="item.label"
      :value="item.value"
    />
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
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // 是否是第一次进入
      isFirstIn: false,
      // 是否是第一次加载
      firstLoading: false,
      loading: false,
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
      handler(val) {
        // 若初始化无值需要将列表同步置空
        if (!val) {
          this.selectList = []
          this.isFirstIn = false
        } else if (this.selectList.length == 0) {
          // 若初始化有值且列表为空说明第一次进入，将初始化数据塞入列表用于显示
          this.isFirstIn = true
          this.selectList.push({ label: this.label, value: val })
        }
      }
    }
  },
  methods: {
    // 远程搜索
    remoteMethod(query) {
      if (query !== '') {
        this.queryParams.searchWorld = query
        this.queryParams.pageNum = 1
        this.selectList = []
        this.firstLoading = true
        this.getSelectList()
      } else {
        this.selectList = []
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
            this.firstLoading = false
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