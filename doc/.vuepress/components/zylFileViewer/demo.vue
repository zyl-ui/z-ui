<template>
  <div>
    <el-button type="text" @click="showFileViewer = true">
      点击打开文件浏览
    </el-button>
    <zyl-file-viewer
      v-model="showFileViewer"
      viewerUrl="https://home.me7.cn/file-viewer-doc/file-viewer/index.html"
      :fileList="fileList"
    ></zyl-file-viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFileViewer: false,
      fileList: [
        'https://home.me7.cn/fileTest/pdf.pdf',
        'https://home.me7.cn/fileTest/word.docx',
        'https://home.me7.cn/fileTest/pic.png'
      ]
    }
  },
  methods: {}
}
</script>
