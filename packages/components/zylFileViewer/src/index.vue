<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 01:04:33
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-29 13:54:45
 * @Descripttion: 文件浏览组件
 -->

<template>
  <div>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :width="dialogWidth"
    >
      <el-carousel
        ref="fileCarousel"
        trigger="click"
        indicator-position="outside"
        :autoplay="false"
        :height="dialogHeight"
        :initial-index="initialIndex"
        @change="fileChange"
      >
        <el-carousel-item
          v-for="(item, index) in fileListInfo"
          :key="index"
          v-loading="item.loading"
        >
          <iframe
            :src="iframeUrl(item, index)"
            @load="(e) => loadMethod(e, index)"
            scrolling="auto"
            style="border:0;height: 100%;width:100%"
          />
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>

<script>
import {
  checkBase64,
  getExtensionFromBase64,
  base64toBlob
} from '../../../plugins/zylUseTools/file/index.js'
export default {
  name: 'zylFileViewer',
  props: {
    // 是否显示文件浏览
    value: {
      type: Boolean,
      default: false
    },
    // 弹出窗的标题
    dialogTitle: {
      type: String,
      default: '文件浏览'
    },
    // 弹出窗的宽度
    dialogWidth: {
      type: String,
      default: '80%'
    },
    // 弹出窗的高度（取决于轮播图高度）
    dialogHeight: {
      type: String,
      default: '500px'
    },
    // 文件浏览的列表
    fileList: {
      type: Array,
      default: () => []
    },
    // 初始化显示第几张
    initialIndex: {
      type: Number,
      default: 0
    },
    // 文件查看器的地址（采用外部iframe浏览，节省构建时间）
    viewerUrl: {
      type: String,
      default: '',
      require: true
    },
    // 是否开启使用微软提供的office文件在线访问接口（内网无效，可选，默认false关闭）
    useOfficeMicroOnline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: null,
      fileListInfo: []
    }
  },
  computed: {
    dialogVisible: {
      // 利用计算属性动态设置外部v-model绑定值
      set(val) {
        this.$emit('input', val)
      },
      // 利用计算属性动态获取外部v-model绑定值
      get() {
        return this.value
      }
    },
    // iframe的地址拼接处理
    iframeUrl() {
      return function(item, index) {
        // 判断url是否为base64
        if (checkBase64(item.url)) {
          const filename = encodeURIComponent(`文件${index + 1}`)
          const ext = getExtensionFromBase64(item.url)
          const originFrom = encodeURIComponent(window.location.origin)
          return `${this.viewerUrl}?name=${filename}.${ext}&from=${originFrom}`
        } else {
          return `${this.viewerUrl}?fileUrl=${item.url}${
            this.useOfficeMicroOnline ? '&useOfficeMicroOnline=true' : ''
          }`
        }
      }
    }
  },
  watch: {
    fileList: {
      immediate: true, //  关键，，将立即以表达式的当前值触发回调
      handler(val) {
        this.fileListInfo = val.map((item) => {
          return {
            url: item,
            loading: true
          }
        })
      }
    },
    // 监听传入的初始索引值并手动切换
    initialIndex(val) {
      this.setActiveItem(val)
    }
  },
  mounted() {},
  methods: {
    // iframe加载完毕事件
    loadMethod(e, index) {
      this.fileListInfo[index].loading = false //关闭加载完成项的loading
      const url = this.fileListInfo[index].url
      // 如果是base64格式的需要转blob推流
      if (checkBase64(url)) {
        const blob = base64toBlob(url)
        this.postMessage(e.path[0], blob)
      }
    },
    // 文件切换事件
    fileChange(index) {
      this.$emit('change', index)
    },
    // 手动切换事件（供外部调用）
    setActiveItem(index) {
      // 弹出窗打开有延迟需要等dom加载完毕
      this.$nextTick(() => {
        this.$refs.fileCarousel && this.$refs.fileCarousel.setActiveItem(index)
      })
    },
    // 推送文件流到iframe
    postMessage(el, data) {
      el.contentWindow.postMessage(data, this.viewerUrl)
    }
  }
}
</script>

<style lang="scss" scoped></style>
