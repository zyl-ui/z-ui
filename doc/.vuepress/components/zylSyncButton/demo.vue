<template>
  <div>
    <zyl-sync-button type="primary" @click="handleEdit">
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
    handleEdit() {
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
