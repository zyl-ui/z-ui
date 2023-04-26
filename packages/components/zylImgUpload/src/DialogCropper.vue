<template>
  <div>
    <el-dialog
      :visible="dialogVisible"
      title="裁剪图片"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="beforeClose"
      width="600px"
      :append-to-body="true"
    >
      <vue-cropper
        ref="cropperRef"
        v-bind="cropOption"
        style="width: 100%; height: 400px"
      />

      <template #footer>
        <span class="dialog-footer clearfix">
          <el-button class="crop-demo-btn fl" type="primary">
            重新选择图片
            <input
              class="crop-input"
              type="file"
              name="image"
              accept="image/*"
              @change="setImage"
            />
          </el-button>
          <el-button
            :loading="pending"
            class="fr"
            type="primary"
            @click="saveImage"
          >
            保存修改
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
import axios from 'axios'
export default {
  name: 'DialogCropper',
  components: { VueCropper },
  props: {
    imgSrc: {
      // 需要被截取的图片url
      type: String,
      default: ''
    },
    fixedNumber: {
      // 截取框宽高
      type: Array,
      default() {
        return [500, 500]
      }
    },
    centerBox: {
      // 截取框宽高
      type: Boolean,
      default: true
    },
    action: {
      type: String,
      require: true,
      default: ''
    }
  },
  data() {
    return {
      dialogVisible: false,
      pending: false,
      cropOption: {
        img: '', // 图片url地址
        info: true, // 是否显示剪裁框的大小信息
        infoTrue: true, // 截图信息展示是否是真实的输出宽高（false:数值表示 截图框的宽高    true:数值表示 截图框中图片的真实大小）
        outputSize: 1, // 裁剪生成的图片的质量
        outputType: 'jpg', // 裁剪生成的图片的格式
        canScale: true, // 能否通过滚轮缩放图片
        canMove: true, // 能否拖动图片
        canMoveBox: true, // 能否拖动截图框
        fixedBox: false, // 截图框固定大小
        fixed: true, // 截图框固定比例
        fixedNumber: [500, 500], // 截图框的宽高比例
        autoCrop: true, // 是否自动生成截图框
        autoCropWidth: '750px', // 截图框宽度
        autoCropHeight: '750ppx', // 截图框高度
        centerBox: true, // 截图框固定大小
        enlarge: 1, // 是否按照截图框比例输出 默认为1
        original: false, // 上传图片一开始显示是否按原始比例渲染
        full: true, // 是否输出原图分辨率的截图（长宽比还是截图框的，但分辨率是原图的，而不是截图框的宽高）
        high: true // 是否根据dpr生成适合屏幕的高清图片
      }
    }
  },
  watch: {
    imgSrc(newVal) {
      this.cropOption.img = newVal
    },
    fixedNumber: {
      handler(newVal) {
        if (newVal.length) {
          this.cropOption.fixedNumber = newVal
        }
      },
      immediate: true
    },
    centerBox: {
      handler(newVal) {
        this.cropOption.centerBox = newVal
      },
      immediate: true
    }
  },
  methods: {
    setImage(e) {
      const file = e.target.files[0]
      if (!file.type.includes('image/')) {
        return
      }
      const reader = new FileReader()
      reader.onload = event => {
        this.dialogVisible = true
        this.cropOption.img = event.target.result
      }
      reader.readAsDataURL(file)
    },
    async saveImage() {
      this.pending = true
      this.$refs.cropperRef.getCropBlob(async blob => {
        const fd = new FormData()
        fd.append('file', blob)
        try {
          const {
            data: { entity = {} }
          } = await axios.post(this.action, fd)
          this.$emit('confirm', entity)
          this.dialogVisible = false
        } catch (error) {
          this.$message.error(error)
        } finally {
          this.pending = false
        }
      })
    },
    beforeClose() {
      this.dialogVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.crop-demo-btn {
  position: relative;
  .crop-input {
    position: absolute;
    width: 100px;
    height: 40px;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
}
</style>
