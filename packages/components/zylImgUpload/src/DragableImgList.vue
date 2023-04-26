<template>
  <div
    v-show="imgInfoList.length"
    :class="list.length <= 1 ? 'just-one' : ''"
    class="img-container"
  >
    <Draggable
      v-model="list"
      class="img-wrap"
      :disabled="disabled"
      @end="onDragEnd"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        :style="{
          backgroundImage: `url(${onlyUrlListBack ? item : item[fileItemColum.url]})`,
          height: `${imgHeight}`,
          width: '200px'
        }"
        class="img-item"
        @click="onPerview(index)"
      >
        <div v-if="!disabled" class="toolbar-outside">
          <div class="toolbar">
            <i class="icon el-icon-delete" @click.stop="onDeleteImg(index)" />
            <i
              v-if="editable"
              class="icon el-icon-edit-outline"
              @click.stop="onEditImg(index)"
            />
            <i v-if="list.length > 1" class="icon el-icon-rank" />
          </div>
        </div>
      </div>
    </Draggable>
    <el-image-viewer
      v-if="imgViewerVisible"
      :initial-index="Number(currentIndex)"
      :preview-src-list="imgUrlList"
      :on-close="closeViewer"
      :url-list="imgUrlList"
      :append-to-body="true"
      :zIndex="10000"
      :mask-closable="true"
    />
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  name: 'DragableImgList',
  components: {
    Draggable,
    'el-image-viewer': () =>
      import('element-ui/packages/image/src/image-viewer')
  },
  props: {
    imgInfoList: {
      // 图片url列表
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      // 是否可编辑
      type: Boolean,
      default: false
    },
    fixedNumber: {
      // 图片宽高
      type: Array,
      default() {
        return [300, 545]
      }
    },
    // 当onlyUrlListBack关闭时生效，确保选取的字段符合组件接收的数据格式
    fileItemColum: {
      type: Object,
      default: () => ({
        name: 'name',
        url: 'url'
      })
    },
    onlyUrlListBack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [],
      currentIndex: '',
      imgViewerVisible: false
    }
  },
  computed: {
    imgHeight() {
      if (this.fixedNumber.length) {
        return (200 / this.fixedNumber[0]) * this.fixedNumber[1] + 'px'
      } else {
        return '140px' // 传入fixedNumber为[]时高度默认为140
      }
    },
    editable() {
      return this.fixedNumber.length !== 0
    },
    imgUrlList() {
      if (this.onlyUrlListBack) {
        return this.list
      } else {
        return this.imgInfoList.map(item => {
          return item[this.fileItemColum.url]
        })
      }
    }
  },
  watch: {
    imgInfoList: {
      handler(newVal) {
        this.list = newVal
      },
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 编辑
    onEditImg(index) {
      this.$emit('edit', { index })
    },
    // 删除
    async onDeleteImg(index) {
      await this.$confirm('确定删除该图片？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.list.splice(index, 1)
          this.$emit('input', this.list)
        })
        .catch(() => {})
    },
    // 拖拽
    onDragEnd() {
      this.$emit('input', this.list)
    },
    // 预览
    onPerview(index) {
      this.currentIndex = index
      this.imgViewerVisible = true
    },
    // 图片预览组件关闭弹窗
    closeViewer() {
      this.imgViewerVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.img-container {
  padding: 10px 10px 0 10px;
  margin-bottom: 10px;
  overflow-y: hidden;
  overflow-x: scroll;
  background: #f5f8fe;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &.just-one {
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    /* Chrome Safari */
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    //滚动条的设置
    background-color: #e3e3e3;
    background-clip: padding-box;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #d4d4d4;
    cursor: pointer;
  }
  .img-wrap {
    display: flex;
    flex-flow: row nowrap;
    .img-item {
      position: relative;
      flex-shrink: 0;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      // line-height: 140px;
      margin-right: 20px;
      border: 1px dashed #dcdfe6;
      &:hover .toolbar-outside {
        display: block;
      }
    }
    .toolbar-outside {
      position: relative;
      top: 0;
      left: calc(100% - 40px);
      display: none;
      height: 100%;
      width: 40px;
      .toolbar {
        display: flex;
        flex-flow: column nowrap;
        background-color: rgba(255, 255, 255, 0.7);
        height: 100%;
        width: 40px;
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          cursor: pointer;
          margin: 0 auto;
          flex: 1;
          width: 80%;
          &:hover {
            color: #1890ff;
          }
          &.el-icon-delete {
            &:hover {
              color: #ff4141;
            }
          }
          &.el-icon-edit-outline {
            &:hover {
              color: #67c23a;
            }
          }
        }
      }
    }
  }
}
</style>
