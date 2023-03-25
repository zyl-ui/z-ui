<template>
  <div>
    <el-upload
      ref="upload"
      :show-file-list="false"
      :before-upload="beforeImageUpload"
      :http-request="onAfterUpload"
      :with-credentials="true"
      :limit="limit"
      :file-list="uploadedList"
      action=""
      class="upload-btn productImg-uploader"
    >
      <el-button :loading="loading" type="primary" size="small">
        <slot>上传图片</slot>
      </el-button>
      <template #tip>
        <div class="el-upload__tip">
          {{ uploadTip }}
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script>
import { cropOption } from '@packages/config'

export default {
  name: 'Upload',
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
        return [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/gif',
          'image/svg+xml'
        ]
      }
    },
    fileSize: {
      // 图片体积大小限制
      type: Number,
      default: 5
    },
    imgInfoList: {
      // 图片列表
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      mainForm: {
        popupImgUrl: ''
      },
      cropOption,
      uploadedList: [],
      loading: false
    }
  },
  computed: {
    onlyOneImgIsAllowed() {
      return this.limit === 1
    }
  },
  methods: {
    // 图片上传之前钩子
    async beforeImageUpload(file) {
      // this.getImgSize(file)
      if (this.onlyOneImgIsAllowed) {
        return true
      }
      const exceed =
        this.imgInfoList.length > this.limit ||
        this.imgInfoList.length === this.limit
      const legalTypes = this.legalType
      const isImage = legalTypes.includes(file.type)
      const isLt = file.size / 1024 / 1024 < this.fileSize
      if (exceed) {
        this.$message.error(`限制最多上传 ${this.limit} 张图片`)
      }
      if (!isImage) {
        this.$message.error(
          `上传图片只能是 ${this.legalType.join(' 、 ')} 格式 !`
        )
      }
      if (!isLt) {
        this.$message.error(`上传图片大小不能超过 ${this.fileSize} MB!`)
      }
      return isImage && isLt && !exceed
    },
    getImgSize(file) {
      const reader = new FileReader()
      reader.onload = function(event) {
        const txt = event.target.result
        const img = document.createElement('img')
        img.src = txt
        img.onload = function() {}
      }
      reader.readAsDataURL(file)
    },
    // 自定义上传
    async onAfterUpload(request) {
      // const formData = new FormData()
      // formData.append('file', request.file)
      // this.loading = true
      // try {
      //   const {
      //     data: { entity = {} }
      //   } = await apiUploadImage(formData)
      //   this.$refs.upload.clearFiles() // 在图片列表组件进行删除图片时，upload中的onExceed事件监测不到fileList的变化
      //   this.$emit('uploadSuccess', { imgEntity: entity })
      // } catch (error) {
      //   this.$message.error(error)
      // } finally {
      //   this.loading = false
      // }

      this.loading = true
      const file = request.file
      const reader = new FileReader()
      reader.onload = event => {
        this.$refs.upload.clearFiles() // 在图片列表组件进行删除图片时，upload中的onExceed事件监测不到fileList的变化
        this.$emit('uploadSuccess', { imgEntity: { url: event.target.result } })
        this.loading = false
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style></style>
