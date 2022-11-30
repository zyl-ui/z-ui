<template>
  <div>
    <el-button @click="callToast">点击显示toast</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    callToast() {
      this.$zylUseToast({
        message: '2S 后自动关闭',
        closeButton: {
          text: 'Close',
          callback() {
            console.log('Closed')
          },
        },
        enableHtml: true,
        autoClose: 2,
        position: 'middle',
      })
    },
  },
}
</script>
