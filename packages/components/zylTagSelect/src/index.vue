<!--
 * @Author: zhanghan
 * @Date: 2023-02-28 16:34:00
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-03-07 10:58:48
 * @Descripttion: 标签选择器组件
-->
<template>
  <div class="tag-select">
    <!-- 左侧按钮 -->
    <el-button
      :size="size"
      plain
      class="left-btn"
      :disabled="
        (!isSwitchSelect &&
          (firstShowIndex == 0 || showTagNum >= list.length)) ||
          (isSwitchSelect && nowIndexNew == 0)
      "
      v-if="showSwitchBtn"
      @click="nextAndPreBtn(-1)"
    >
      <i class="el-icon-arrow-left" />
    </el-button>
    <!-- 筛选列表 -->
    <div class="tag-select-smallBox">
      <span v-for="(item, index) in list" :key="index">
        <el-tag
          v-if="showTag(index)"
          :effect="
            isMultiple
              ? nowIndex.indexOf(index) > -1
                ? 'dark'
                : 'plain'
              : nowIndex === index
              ? 'dark'
              : 'plain'
          "
          disable-transitions
          :size="tagSize[size] || size"
          @click="selectTag(item[defaultProps.value], index)"
        >
          {{ item.label }}
        </el-tag>
      </span>
    </div>
    <!-- 右侧按钮 -->
    <el-button
      :size="size"
      plain
      class="right-btn"
      :disabled="
        (!isSwitchSelect &&
          (firstShowIndex + showTagNum == list.length ||
            showTagNum >= list.length)) ||
          (isSwitchSelect && nowIndexNew == list.length - 1)
      "
      v-if="showSwitchBtn"
      @click="nextAndPreBtn(1)"
    >
      <i class="el-icon-arrow-right" />
    </el-button>
    <!-- 更多按钮 -->
    <el-popover placement="bottom" width="200" trigger="hover">
      <div slot="reference" class="tag-select">
        <el-button
          :size="size"
          plain
          style="padding: 7px 5px"
          v-if="showMoreBtn"
        >
          <i class="el-icon-more" />
        </el-button>
      </div>
      <!-- 弹出层的列表选择 -->
      <div class="date-list">
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="{
            'chioce-item': isMultiple
              ? nowIndex.indexOf(index) > -1
              : nowIndex === index
          }"
          @click="selectTag(item[defaultProps.value], index)"
        >
          {{ item.label }}
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'zylTagSelect',
  props: {
    // 绑定值
    value: {
      type: [String, Number, Array],
      default: ''
    },
    // tag列表
    list: {
      type: Array,
      default: () => []
    },
    // 需要显示的tag数量
    showTagNum: {
      type: Number,
      default: 3
    },
    // 组件整体大小
    size: {
      type: String,
      default: 'mini'
    },
    // 用于选择的数据格式描述
    defaultProps: {
      type: Object,
      default: () => ({
        label: 'label',
        value: 'value'
      })
    },
    // 是否为多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 点击标签/下拉选项后展示项是否跟随选中项项移动
    followSelect: {
      type: Boolean,
      default: false
    },
    // 点击左右切换选中项是否可跟随切换移动(仅在单选时有效)
    switchSelect: {
      type: Boolean,
      default: false
    },
    // 是否显示更多下拉选项按钮
    showMoreBtn: {
      type: Boolean,
      default: true
    },
    // 是否显示左右切换按钮
    showSwitchBtn: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // 组件外部绑定选择的值
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
      return this.multiple === '' || this.multiple === true
    },
    // 点击tag后展示项是否跟随点击项作为第一个
    isfollowSelect() {
      return this.followSelect === '' || this.followSelect === true
    },
    // 单选时点击左右切换选中项是否可跟随切换
    isSwitchSelect() {
      return (
        !this.isMultiple &&
        (this.switchSelect === '' || this.switchSelect === true)
      )
    },
    // 根据是否多选判断当前的tag最小下标索引即第一个选择的下标
    // 多选为数组（用于初始化定位）
    nowIndexNew() {
      const selectIndex = this.nowIndex
      return this.isMultiple
        ? this.isTagClick
          ? selectIndex[selectIndex.length - 1]
          : selectIndex[0] || 0
        : selectIndex
    },
    // 展示tag规则
    showTag() {
      return function(index) {
        // 超出或等于本身长度展示所有tag
        if (this.showTagNum >= this.list.length) return true
        if (this.isSwitchSelect) {
          //开启选择跟随的情况
          return (
            (index >= this.nowIndexNew &&
              index < this.nowIndexNew + this.showTagNum) ||
            (index >= this.list.length - this.showTagNum &&
              this.nowIndexNew >= this.list.length - this.showTagNum)
          )
        } else {
          // 其他情况
          return (
            index >= this.firstShowIndex &&
            index < this.firstShowIndex + this.showTagNum
          )
        }
      }
    }
  },
  watch: {
    value: {
      immediate: true, //  关键，，将立即以表达式的当前值触发回调
      handler(val, oval) {
        if (val === oval) return
        // 初始化选中tag
        let tagInfo
        // 判断是多选还是单选
        if (Array.isArray(val)) {
          this.nowIndex = []
          this.nowVal = []
          // 多选
          val.forEach((item) => {
            const idx = this.list.findIndex(
              (listItem) => item == listItem[this.defaultProps.value]
            )
            tagInfo = this.addOrDeleteTag(
              this.list[idx][this.defaultProps.value],
              idx
            )
          })
        } else {
          // 单选
          const idx = this.list.findIndex(
            (listItem) => val == listItem[this.defaultProps.value]
          )
          tagInfo = this.addOrDeleteTag(
            this.list[idx][this.defaultProps.value],
            idx
          )
        }
        // 根据边界判断设置可展示区域的第一个index
        this.isfollowSelect && this.setFirstShowIndex()
        // 触发change
        this.$emit('change', tagInfo)
      }
    }
  },
  data() {
    return {
      nowIndex: '', //当前选择的tag下标索引，多选为数组
      nowVal: '', //当前选择的tag值，多选为数组
      // 展示区域的第一个index
      firstShowIndex: 0,
      // 是否为tag点击
      isTagClick: false,
      tagSize: {
        mini: 'small',
        small: 'medium',
        medium: ''
      }
    }
  },
  methods: {
    // tag选择事件触发
    selectTag(val, index) {
      // 若为单选点击相同不触发
      if (!this.isMultiple && val === this.selectVal) return
      this.isTagClick = true
      const tagInfo = this.addOrDeleteTag(val, index)
      this.selectVal = this.nowVal
      this.$emit('change', tagInfo)
    },
    // 添加/删除tag
    addOrDeleteTag(val, index) {
      let tagInfo

      // 添加/取消tag时是否为多选
      if (this.isMultiple) {
        // 多选时转数组格式
        if (!Array.isArray(this.nowIndex)) this.nowIndex = []
        if (!Array.isArray(this.nowVal)) this.nowVal = []

        // 判断是取消还是新增
        const cancelIndex = this.nowIndex.indexOf(index)
        const cancelValIndex = this.nowVal.indexOf(val)
        if (cancelIndex > -1) {
          //取消
          this.nowIndex.splice(cancelIndex, 1)
          this.nowVal.splice(cancelValIndex, 1)
        } else {
          //新增
          this.nowIndex.push(index)
          this.nowVal.push(val)
        }

        // 找到对应的tag信息列表
        tagInfo = this.list.filter((item) => {
          if (this.nowVal.indexOf(item[this.defaultProps.value]) > -1)
            return item
        })
      } else {
        // 单选
        this.nowIndex = index
        this.nowVal = val
        tagInfo = this.list[index] || {}
      }

      return tagInfo
    },
    // 上一个/下一个点击事件
    nextAndPreBtn(step) {
      this.firstShowIndex = this.firstShowIndex + step
      // 单选时点击左右切换选中项是否可跟随切换
      if (this.isSwitchSelect) {
        const selectIndex = this.nowIndexNew + step
        this.selectTag(
          this.list[selectIndex][this.defaultProps.value],
          selectIndex
        )
      }
    },
    // 根据边界判断设置可展示区域的第一个index
    setFirstShowIndex() {
      this.firstShowIndex =
        this.nowIndexNew + this.showTagNum >= this.list.length
          ? this.list.length - this.showTagNum
          : this.nowIndexNew
      // 关闭是tag点击状态
      this.isTagClick = false
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-select {
  display: flex;
  .left-btn {
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
  }
  .right-btn {
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
    margin-right: 5px;
  }
  .tag-select-smallBox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    span {
      cursor: pointer;
    }
  }
}
.date-list {
  height: 300px;
  overflow: auto;
  > div {
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    &:hover {
      background-color: #f5f7fa;
    }
  }
}

.chioce-item {
  color: #409eff;
  font-weight: bold;
}
</style>
