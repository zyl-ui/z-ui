<template>
  <div>
    <el-button type="text" @click="showFileViewer = true">
      点击打开文件浏览
    </el-button>
    <zyl-file-viewer
      v-model="showFileViewer"
      viewerUrl="https://home.sharecorner.top/file-viewer-doc/file-viewer/index.html"
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
        'https://home.sharecorner.top/fileTest/pdf.pdf',
        'https://home.sharecorner.top/fileTest/word.docx',
        'https://home.sharecorner.top/fileTest/pic.png'
      ]
    }
  },
  methods: {}
}
</script>
