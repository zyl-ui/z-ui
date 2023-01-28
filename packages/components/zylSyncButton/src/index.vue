<!--
 * @Author: zhanghan
 * @Date: 2020-04-30 01:04:33
 * @LastEditors: zhanghan
 * @LastEditTime: 2023-01-28 10:32:21
 * @Descripttion: 异步按钮组件
 -->

<template>
  <el-button v-bind="$attrs" :loading="loading" @click="handle">
    <slot />
  </el-button>
</template>

<script>
export default {
  name: 'zylSyncButton',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handle() {
      this.loading = true
      const result = this.$listeners.click() || null
      // 如果是promise则支持异步loading
      if (result instanceof Promise) {
        result.finally(() => {
          this.loading = false
        })
      } else {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped></style>
