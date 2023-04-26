<template>
  <div>
    <el-upload
      v-bind="$attrs"
      :http-request="onHttpRequest"
      :show-file-list="false"
      action=""
      @click.native="currentIndex = null"
    >
      <span v-if="!Object.keys($slots).includes('trigger')" slot="trigger">
        <el-button size="small" type="primary">点击上传</el-button>
      </span>
      <!-- 继承原组件插槽 -->
      <template v-for="(key, name) in $slots" :slot="name">
        <slot :name="name" />
      </template>
    </el-upload>
    <DragableImgList
      v-model="imgInfoList"
      :imgInfoList="imgInfoList"
      :fixedNumber="fixedNumber"
      :fileItemColum="fileItemColum"
      :onlyUrlListBack="onlyUrlListBack"
      @edit="onEditImgItem"
    />
    <dialog-cropper
      ref="cropperRef"
      :imgSrc="currentCrop"
      :fixedNumber="fixedNumber"
      :centerBox="centerBox"
      :action="action"
      @confirm="onCropImg"
    />
  </div>
</template>

<script>
import DialogCropper from './DialogCropper'
import DragableImgList from './DragableImgList'
export default {
  name: 'ZylImgUpload',
  components: {
    DialogCropper,
    DragableImgList
  },
  props: {
    action: {
      type: String,
      require: true,
      default: ''
    },
    value: {
      // 默认图片
      type: Array,
      default() {
        return []
      }
    },
    fixedNumber: {
      // 图片宽高
      type: Array,
      default() {
        return [1, 1]
      }
    },
    centerBox: {
      // 是否限制截图框不能超出图片
      type: Boolean,
      default: true
    },
    // 上传成功、删除回调是否只回传url/base64列表，不回传其他信息，默认false关闭
    // 打开后v-model绑定的数据格式为纯数组：['url1', 'url2', 'url2']
    // 关闭后v-model绑定的数据格式为对象数组：[{name: '名称1', url: 'url1', uid: 'uid1'}],
    // 若对象格式字段名称不符合，可通过 fileItemColum 配置进行转换
    onlyUrlListBack: {
      type: Boolean,
      default: false
    },
    // 当onlyUrlListBack关闭时生效，确保选取的字段符合组件接收的数据格式
    fileItemColum: {
      type: Object,
      default: () => ({
        name: 'name',
        url: 'url'
      })
    }
  },
  data() {
    return {
      imgInfoList: [],
      currentIndex: null, // 当前操作的图片索引
      currentCrop: '' // 当前要裁剪的图片的实体
    }
  },
  watch: {
    value: {
      handler(newVal) {
        this.imgInfoList = newVal
      },
      immediate: true
    },
    imgInfoList: {
      handler() {
        this.$emit('input', this.imgInfoList)
      },
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 截图弹窗回调方法
    onCropImg(imgItem) {
      let imgInfo = imgItem
      if (this.onlyUrlListBack) {
        imgInfo = imgItem.url
      }
      if (this.currentIndex || this.currentIndex === 0) {
        // 如果有当前操作图片，替换原来图片的位置
        this.imgInfoList.splice(this.currentIndex, 1, imgInfo)
      } else {
        // 否则将url加入图片列表
        this.imgInfoList.push(imgInfo)
      }
    },
    onEditImgItem({ index = 0 } = {}) {
      if (this.onlyUrlListBack) {
        this.currentCrop = this.imgInfoList[index]
      } else {
        this.currentCrop = this.imgInfoList[index][this.fileItemColum.url]
      }
      this.currentIndex = index
      this.$refs.cropperRef.dialogVisible = true
    },
    async onHttpRequest(request) {
      const file = request.file
      const reader = new FileReader()
      reader.onload = event => {
        this.currentCrop = event.target.result
        this.$refs.cropperRef.dialogVisible = true
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>
<style lang="scss" scoped></style>
