<!--
 * @Author: zhanghan
 * @Date: 2021-08-10 13:51:18
 * @LastEditors: zhanghan
 * @LastEditTime: 2022-12-27 19:37:11
 * @Descripttion: 文件上传通用组件
-->
<template>
  <div class="upload-wrap">
    <el-upload
      v-bind="$attrs"
      v-on="upLoadEvent"
      :action="action"
      :limit="limit"
      :accept="accept"
      :file-list="fileList"
      :on-change="handleChange"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :before-upload="beforeUpload"
      :on-exceed="handleExceed"
      :on-preview="handlePictureCardPreview"
      :multiple="limit > 1"
      :auto-upload="!changeBase64"
      ref="uploadFile"
      :class="{ hideAdd: uploadAddDisabled }"
    >
      <!-- 选择文件上传区域 -->
      <span slot="trigger" v-if="!Object.keys($slots).includes('trigger')">
        <i
          class="el-icon-plus"
          v-if="$attrs['list-type'] === 'picture-card'"
        ></i>
        <el-button
          v-if="
            !$attrs['list-type'] ||
            $attrs['list-type'] === 'text' ||
            $attrs['list-type'] === 'picture'
          "
          size="small"
          icon="el-icon-upload2"
        >
          {{ btnName }}
        </el-button>
      </span>
      <!-- 提示语插槽 -->
      <div
        slot="tip"
        class="el-upload__tip"
        v-if="showTip && !Object.keys($slots).includes('tip')"
      >
        <div style="margin-bottom: 5px">支持拓展名：{{ accept }}；</div>
        <div>文件最大数量：{{ limit }} 个，文件最大限制：{{ maxSize }} M。</div>
        <div
          style="margin-top: 5px; font-weight: bold; color: #f56c6c"
          v-if="notesFlag"
        >
          <span v-html="notes"></span>
        </div>
      </div>
      <!-- 继承原组件插槽 -->
      <template v-for="(index, name) in $slots" :slot="name">
        <slot :name="name" />
      </template>
    </el-upload>
    <!-- 拓展插槽 -->
    <div>
      <slot name="explain"></slot>
    </div>
    <div class="error-text" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <!-- 图片浏览容器 -->
    <el-image
      ref="zylUploadFilePreview"
      class="hideImgDiv"
      :src="nowImgUrl"
      :preview-src-list="fileUrlListStringOnly"
      :z-index="9999"
    ></el-image>
  </div>
</template>
<script>
import {
  getUrlFileName,
  getExtensionFromBase64,
  blobToBase64,
} from '../../../plugins/zylUseTools/file/index.js'
export default {
  name: 'zylUploadFile',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    // 上传的地址
    action: {
      type: String,
      default: '',
    },
    // 上传成功、删除回调是否只回传url/base64列表，不回传其他信息，默认false关闭
    // 打开后v-model绑定的数据格式为纯数组：['url1', 'url2', 'url2']
    // 关闭后v-model绑定的数据格式为对象数组：[{name: '名称1', url: 'url1', uid: 'uid1'}],
    // 若对象格式字段名称不符合，可通过 fileItemColum 配置进行转换
    onlyUrlListBack: {
      type: Boolean,
      default: false,
    },
    // 需要选取的文件信息字段
    fileInfoColumn: {
      type: String,
      default: 'entity',
    },
    // 当onlyUrlListBack关闭时生效，确保选取的字段符合组件接收的数据格式
    fileItemColum: {
      default: () => ({
        name: 'name',
        url: 'url',
        uid: 'uid',
      }),
    },
    // 上传按钮名称（非卡片样式时生效）
    btnName: {
      type: String,
      default: '上传文件',
    },
    // 限制个数
    limit: {
      type: Number,
      default: 1,
    },
    // 限制大小
    maxSize: {
      type: Number,
      default: 5,
    },
    // 是否显示上传提示
    showTip: {
      type: Boolean,
      default: true,
    },
    // 错误消息提示
    errorMessage: {
      type: String,
      default: '',
    },
    // 支持的文件格式
    accept: {
      type: String,
      default: '.jpeg, .jpg, .png, .doc, .docx, .pdf',
    },
    // 是否转换输出数据为base64
    changeBase64: {
      type: Boolean,
      default: false,
    },
    // 是否显示备注
    notesFlag: {
      type: Boolean,
      default: false,
    },
    // 备注内容
    notes: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // 组件内部el-upload绑定的文件列表
      fileList: [],
      // 当前点击的url/base64
      nowImgUrl: '',
      // 检验是否通过上传前的规则校验
      passCheck: true,
    }
  },
  computed: {
    // 组件外部绑定的文件列表
    fileUrlList: {
      // 利用计算属性动态设置外部v-model绑定值
      set(val) {
        this.$emit('input', val)
      },
      // 利用计算属性动态获取外部v-model绑定值
      get() {
        return this.value
      },
    },
    // 通过获取文件地址列表
    fileUrlListStringOnly() {
      // 如果是纯文件地址数组的绑定数据，直接返回
      if (this.onlyUrlListBack) {
        return this.fileUrlList
      }
      // eslint-disable-next-line no-unused-vars
      return this.fileUrlList.map((item) =>
        eval(`item.${this.fileItemColum.url}`)
      )
    },
    upLoadEvent() {
      // 此处兼容多层级嵌套，过滤掉本层组件的事件，防止父子组件相互调用重复触发导致内存溢出
      // eslint-disable-next-line no-unused-vars
      let { removeOneFile, addOneFile, input, ...other } = this.$listeners
      return other
    },
    // 是否展示图片+号按钮
    uploadAddDisabled() {
      return this.fileList.length >= this.limit
    },
  },
  watch: {
    fileUrlList: {
      immediate: true, //  关键，，将立即以表达式的当前值触发回调
      handler(val) {
        if (val.length) {
          // 不同数据格式的回显兼容
          this.fileList = val.map((item, index) => {
            // 由于存在外部回显的传入为url/base64纯数组即onlyUrlListBack开启时，不一定有uid和name如果没有需要补充uid和name,并且转换为组件接收的格式
            if (typeof item === 'string' && this.onlyUrlListBack) {
              return {
                url: item,
                uid: this.getUID(),
                name: this.changeBase64
                  ? `文件${index + 1}.${getExtensionFromBase64(item)}`
                  : getUrlFileName(item) || '',
              }
            }
            // onlyUrlListBack关闭时，保留原数据，并对必要字段进行补充
            if (typeof item === 'object' && !this.onlyUrlListBack) {
              // 如果是changeBase64为内部转换，不需要兼容，返回原数据即可，否则会出错
              if (this.changeBase64) return item
              return {
                ...item,
                url: eval(`item.${this.fileItemColum.url}`) || '',
                uid: eval(`item.${this.fileItemColum.uid}`) || this.getUID(),
                name: eval(`item.${this.fileItemColum.name}`) || '',
              }
            }
            // 匹配不到上面的条件说明数据格式有误
            if (this.onlyUrlListBack) {
              console.error(
                '数据格式有误！若onlyUrlListBack开启，v-model绑定的数据格式为纯数组，例如：["url1", "url2", "url2"]'
              )
            } else {
              console.error(
                '数据格式有误！若onlyUrlListBack关闭，v-model绑定的数据格式为对象数组，例如：[{name: "名称1", url: "url1", uid: "uid1"}], 若数据格式字段名称不符合，可通过 fileItemColum 配置进行转换'
              )
            }
          })
        }
      },
    },
  },
  methods: {
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      // 原方法不能被覆盖，留给用户操作
      this.$attrs['on-remove'] && this.$attrs['on-remove'](file, fileList)

      // 遍历组件外部绑定的文件列表进行uid匹配删除
      let removeFileItem = {}
      let removeFileUrlItem = {}
      this.fileList.forEach((item, index) => {
        // 找到对应的uid进行删除
        if (item.uid == file.uid) {
          // 存储被删除的项
          removeFileItem = item
          removeFileUrlItem = this.fileUrlList[index]
          this.fileUrlList.splice(index, 1)
        }
      })
      // 删除对应匹配项后再赋值
      this.fileList = fileList
      // 输出删除结果数据
      this.$emit(
        'removeOneFile',
        this.onlyUrlListBack ? removeFileUrlItem : removeFileItem,
        this.onlyUrlListBack ? this.fileUrlList : this.fileList
      )
      // 被成功移除后校验结果归位
      this.passCheck = true
    },
    // 删除文件之前的钩子
    beforeRemove(file) {
      // 原方法不能被覆盖，留给用户操作
      if (this.$attrs['before-remove']) {
        return this.$attrs['before-remove'](file)
      }

      // 默认的移除方法
      // 有beforeUpload不通过的校验会自动调用该函数，不进行删除的确认提示
      return this.passCheck ? this.$confirm(`确定移除 ${file.name}？`) : true
    },
    // 上传文件之前的钩子
    beforeUpload(file) {
      // 原方法不能被覆盖，留给用户操作
      if (this.$attrs['before-upload']) {
        return this.$attrs['before-upload'](file)
      }

      // 默认的校验方法
      const filename = file.name
      const ext = filename.substr(filename.lastIndexOf('.') + 1)

      if (this.accept.indexOf(ext.toLowerCase()) === -1) {
        this.$message({
          type: 'warning',
          message: `${filename} 非指定的文件拓展名，请上传正确的文件类型！`,
        })
        this.passCheck = false
      }

      if (file.size > this.maxSize * 1024 * 1024) {
        this.$message({
          type: 'warning',
          message: `上传的文件 ${filename} 超过了${this.maxSize}M，请重新上传！`,
        })
        this.passCheck = false
      }

      return this.passCheck
    },
    // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    handleChange(file, fileList) {
      // 原方法不能被覆盖，留给用户操作
      this.$attrs['on-change'] && this.$attrs['on-change'](file, fileList)

      // 如果是本地转base64不会自动请求接口，不触发handleSuccess，需手动触发
      if (this.changeBase64) {
        this.handleSuccess({}, file, fileList)
      }
    },
    // 文件上传成功时的钩子
    async handleSuccess(response, file, fileList) {
      // 原方法不能被覆盖，留给用户操作
      this.$attrs['on-success'] &&
        this.$attrs['on-success'](response, file, fileList)

      let data = {}
      // 判断是否需要转换成base64数据格式
      if (this.changeBase64) {
        // 转base64
        const base64 = await blobToBase64(file.raw)
        // 插入原数据
        data = this.onlyUrlListBack ? base64 : { ...file, url: base64 }
      } else {
        // 获取设置的url字段数据
        const fileUrl = eval(`file.response.${this.fileInfoColumn}.url`) || ''
        // 获取设置的文件信息字段数据
        const fileInfo = eval(`file.response.${this.fileInfoColumn}`) || {}
        // 插入原数据
        data = this.onlyUrlListBack ? fileUrl : fileInfo
      }
      // 更新内部组件绑定的列表
      this.fileList.push(file)
      // 更新外部组件绑定的列表
      this.fileUrlList.push(data)
      this.$emit(
        'addOneFile',
        data,
        this.onlyUrlListBack ? this.fileUrlList : this.fileList
      )
    },
    // 获取uuid
    getUID() {
      var s = []
      var hexDigits = '0123456789abcdef'
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substring(Math.floor(Math.random() * 0x10), 1)
      }
      s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substring((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = '-'
      var uuid = s.join('')
      return uuid
    },
    // 浏览图片
    handlePictureCardPreview(file) {
      // 原方法不能被覆盖，留给用户操作
      if (this.$attrs['on-preview']) {
        return this.$attrs['on-preview'](file)
      }

      this.nowImgUrl = file.url
      //调用image组件中的大图浏览图片方法
      this.$nextTick(() => {
        this.$refs.zylUploadFilePreview.clickHandler()
      })
    },
    // 文件超出个数限制时的钩子
    handleExceed(files, fileList) {
      // 原方法不能被覆盖，留给用户操作
      if (this.$attrs['on-exceed']) {
        return this.$attrs['on-exceed'](files, fileList)
      }

      this.$message.warning(
        `当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，
          共选择了 ${files.length + fileList.length} 个文件`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-wrap {
  .el-upload__tip {
    text-align: left;
    > div {
      line-height: 15px;
      margin: 5px 0;
    }
  }
  .error-text {
    color: #f56c6c;
    font-size: 12px;
    margin: 5px 0;
  }

  /*隐藏展示图片+号按钮*/
  .hideAdd {
    /deep/ .el-upload--picture-card {
      display: none;
    }
  }

  /*隐藏el-image图片组件中不需要展示的的img标签*/
  .hideImgDiv {
    display: none;
  }
}
</style>
