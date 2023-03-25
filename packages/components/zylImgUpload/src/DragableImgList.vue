<template>
  <div
    v-show="imgInfoList.length"
    :class="onlyOneImgIsAllowed ? 'limit-one' : ''"
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
          backgroundImage: `url(${item.url})`,
          height: `${imgHeight}`,
          width: '250px'
        }"
        class="img-item"
        @click="onPerview(index)"
      >
        <div v-if="!disabled && item.url" class="toolbar-outside">
          <div class="toolbar">
            <svg-icon
              icon-class="delete"
              class="icon icon-delete"
              @click.stop="onDeleteImg(index)"
            />
            <svg-icon
              v-if="editable"
              icon-class="edit"
              class="icon icon-edit"
              @click.stop="onEditImg(index)"
            />
            <svg-icon
              v-if="!onlyOneImgIsAllowed"
              icon-class="drag"
              class="icon icon-drag"
            />
          </div>
        </div>
      </div>
    </Draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  name: 'DragableImgList',
  components: {
    Draggable
  },
  props: {
    limit: {
      // 图片张数限制
      type: Number,
      default: 10
    },
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
    }
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    onlyOneImgIsAllowed() {
      // 只允许上传一张图片
      return this.limit === 1
    },
    imgHeight() {
      if (this.fixedNumber.length) {
        return (250 / this.fixedNumber[0]) * this.fixedNumber[1] + 'px'
      } else {
        return '140px' // 传入fixedNumber为[]s是高度默认为200
      }
    },
    editable() {
      return this.fixedNumber.length !== 0
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
          this.$emit('delete', index)
        })
        .catch(() => {})
    },
    // 拖拽
    onDragEnd() {
      this.$emit('dragEnd', this.list)
    },
    // 预览
    onPerview(index) {
      this.$emit('perview', index)
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
  &.limit-one {
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
          padding: 5px;
          cursor: pointer;
          margin: 0 auto;
          flex: 1;
          width: 80%;
          &:hover {
            color: #1890ff;
          }
          &.icon-delete {
            &:hover {
              color: #ff4141;
            }
          }
          &.icon-drag {
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
