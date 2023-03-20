<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 01:04:33
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-17 14:19:40
 * @Descripttion: 远程搜索分页选择器组件
 -->

 <template>
  <el-select
    v-model="selectVal"
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
      v-for="(item, index) in selectListNew"
      :key="item.value.toString()"
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
          : this.selectList.length < this.total
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
    // 绑定值
    value: {
      type: [String, Number, Array],
      default: '',
    },
    // 总列表数，用于判断是否继续下拉分页请求
    total: {
      type: Number,
      require: true,
      default: 0,
    },
    // 分页数（不能小于8条，否则下拉滚动不会触发）
    pageSize: {
      type: Number,
      default: 10,
    },
    // 初始化需要显示在select上的列表
    initList: {
      type: Array,
      default: () => [],
    },
    // 是否显示默认查询列表
    showDefaultList: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 查询列表加载状态
      listLoading: false,
      loading: false,
      // 远程搜索参数
      queryParams: {
        searchWorld: '',
        pageNum: '',
      },
      // 选择项列表
      selectList: [],
      // 选择项展示的列表
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
      },
    },
    // 在初始化列表前面追加不重复的新数据
    selectListNew() {
      // 过滤关键词
      let initList = this.queryParams.searchWorld
        ? this.initList.filter(
            (item) => item.label.indexOf(this.queryParams.searchWorld) > -1
          )
        : this.initList

      // 去重
      let filterList = this.selectList.filter((item) => {
        let flag = true
        initList.forEach((initItem) => {
          if (initItem.value === item.value && initItem.label === item.label) {
            flag = false
          }
        })
        return flag
      })

      return [...initList, ...filterList]
    },
  },
  directives: {
    // 在组件中接受一个 directives 的选项
    loadmore: {
      inserted(el, binding, vnode) {
        const SELECTWRAP_DOM = el.querySelector(
          '.el-select-dropdown .el-select-dropdown__wrap'
        )
        SELECTWRAP_DOM.addEventListener('scroll', function () {
          // 内容高度 - 内容滚动条顶部距离 
          const condition =
            this.scrollHeight - this.scrollTop - 5 <= this.clientHeight
          // 满足滚动至底部条件执行加载事件
          if (condition) {
            binding.value()
          }
        })
      },
    },
  },
  watch: {
    selectVal: {
      immediate: true, //  关键，，将立即以表达式的当前值触发回调
      handler(val, oval) {
        // 防止重复触发
        if (val === oval) return
        // 首次进入进行远程搜索
        !oval && this.remoteMethod()
      },
    },
  },
  methods: {
    // 远程搜索
    remoteMethod(query) {
      this.queryParams.searchWorld = query
      // 根据开关判断是否进行远程搜索
      if (query || this.showDefaultList) {
        this.selectList = []
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
      let result =
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
    },
  },
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
