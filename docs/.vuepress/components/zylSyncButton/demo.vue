<template>
  <div>
    <zyl-sync-button type="primary" @click="handleSearch">
      异步loading按钮
    </zyl-sync-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleSearch() {
      // 模拟请求
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    },
  },
}
</script>
