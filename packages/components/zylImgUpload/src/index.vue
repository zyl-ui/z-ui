<template>
  <div>
    <DragableImgList
      v-if="showFileList"
      :limit="limit"
      :imgInfoList="imgInfoList"
      :disabled="disabled"
      :fixedNumber="fixedNumber"
      @edit="onEditImgItem"
      @delete="deleteImg"
      @dragEnd="dragEnd"
      @perview="perview"
    />
    <upload
      v-if="!disabled"
      :imgInfoList="imgInfoList"
      :limit="limit"
      :uploadTip="uploadTip"
      :legalType="legalType"
      :fileSize="fileSize"
      @uploadSuccess="onUploadSuccess"
    >
      <span v-if="onlyOneImgIsAllowed && imgUrlList.length">重新上传</span>
      <slot v-else>上传图片</slot>
    </upload>
    <dialog-cropper
      ref="cropperRef"
      :imgSrc="currentCropItem.url"
      :fixedNumber="fixedNumber"
      :centerBox="centerBox"
      @confirm="onCropImg"
    />
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
import Upload from './Upload'
import DialogCropper from './DialogCropper'
import DragableImgList from './DragableImgList'
export default {
  name: 'zylImgUpload',
  components: {
    Upload,
    DialogCropper,
    DragableImgList,
    'el-image-viewer': () =>
      import('element-ui/packages/image/src/image-viewer')
  },
  props: {
    limit: {
      // 图片张数限制
      type: Number,
      default: 10
    },
    uploadTip: {
      // 上传提示
      type: String,
      default: ''
    },
    legalType: {
      // 图片类型限制
      type: Array,
      default() {
        return ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
      }
    },
    fileSize: {
      // 图片体积大小限制
      type: Number,
      default: 5
    },
    disabled: {
      // 是否禁用 = 不可编辑
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
    defaultImg: {
      // 默认图片
      type: Array,
      default() {
        return []
      }
    },
    showFileList: {
      // 是否显示上传后的图片列表
      type: Boolean,
      default: true
    },
    centerBox: {
      // 是否限制截图框不能超出图片
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      imgInfoList: [
        // 图片url列表
        // 'https://testoss.zuiyouliao.com/zx/image/aea23bca6c1842aeb7851fc65cef7586.jpg',
        // 'https://testoss.zuiyouliao.com/zx/image/fa96804585df4e46871756a77fc97768.jpg',
        // 'https://testoss.zuiyouliao.com/zx/image/6ef4dea49001417ca324e6a188d8e544.jpg'
      ],
      imgViewerVisible: false, // 图片预览弹窗是否显示
      currentIndex: '', // 当前操作的图片索引
      currentCropItem: '' // 当前要裁剪的图片的实体
    }
  },
  computed: {
    imgUrlList() {
      return this.imgInfoList.map(item => {
        return item.url || item.pathUrl
      })
    },
    onlyOneImgIsAllowed() {
      return this.limit === 1
    }
  },
  watch: {
    defaultImg: {
      handler(newVal) {
        this.imgInfoList = newVal
      },
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 截图弹窗回调方法
    onCropImg(imgItem) {
      if (this.onlyOneImgIsAllowed) {
        this.imgInfoList = [imgItem]
      } else {
        if (this.currentIndex) {
          // 如果有当前操作图片，替换原来图片的位置
          this.imgInfoList.splice(this.currentIndex, 1, imgItem)
        } else {
          // 否则将url加入图片列表
          this.imgInfoList.push(imgItem)
        }
      }
      this.$emit('change', this.imgInfoList)
    },
    onEditImgItem({ index = 0 } = {}) {
      this.currentCropItem = this.imgInfoList[index]
      this.currentIndex = String(index)
      this.$refs.cropperRef.dialogVisible = true
    },
    onUploadSuccess({ imgEntity = {} } = {}) {
      this.currentCropItem = imgEntity
      this.currentIndex = '' // 上传成功时清除当前操作图片索引，防止截图后当前操作图片被替换{
      if (this.fixedNumber.length) {
        // 传入fixedNumber为[]时不调取截图弹窗
        this.$refs.cropperRef.dialogVisible = true
      } else {
        if (this.onlyOneImgIsAllowed) {
          this.$emit('change', [imgEntity])
        } else {
          this.imgInfoList.push(imgEntity)
          this.$emit('change', this.imgInfoList)
        }
      }
    },
    // 图片列表组件删除图片
    deleteImg(index) {
      this.imgInfoList.splice(index, 1)
      this.$emit('change', this.imgInfoList)
    },
    // 图片列表组件拖拽图片
    dragEnd(list) {
      this.imgInfoList = list
      this.$emit('change', this.imgInfoList)
    },
    // 图片预览组件关闭弹窗
    closeViewer() {
      this.imgViewerVisible = false
    },
    // 图片列表组件点击图片进行预览
    perview(index) {
      this.currentIndex = String(index) // 解决currentIndex=0时，currentIndex=false的问题
      this.imgViewerVisible = true
    }
  }
}
</script>
<style lang="scss" scoped></style>
