<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 01:04:33
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 17:18:41
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
            :src="
              `${viewerUrl}?fileUrl=${item.url}${
                useOfficeMicroOnline ? `&useOfficeMicroOnline=true` : ''
              }`
            "
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
    }
  },
  mounted() {},
  methods: {
    loadMethod(e, index) {
      this.fileListInfo[index].loading = false //关闭加载完成项的loading
    },
    // 文件切换
    fileChange(index) {
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="scss" scoped></style>
