---
title: zylSyncButton - 异步 loading 按钮
sidebarDepth: 2
---

# zylSyncButton - 异步 loading 按钮

### 基础用法

`@click` 绑定的事件需要返回一个 `Promise`，事件被触发后按钮可自动展示 `loading` 状态

<zyl-demo-block>
::: slot source
<zylSyncButton-demo></zylSyncButton-demo>
:::
::: slot sourceCode
<<< @/docs/.vuepress/components/zylSyncButton/demo.vue
:::
</zyl-demo-block>

### 用途

可以用于优化以下使用场景：

```vue
<template>
  <div>
    <el-button type="primary" :loading="editLoading">编辑<el/-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        editLoading: false
    }
  },
  methods: {
    handleSearch() {
        this.editLoading =true
        // 模拟请求
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            this.editLoading =false
            resolve()
            }, 2000)
        })
    },
  },
}
</script>
```

### 属性

该组件属性和方法全部继承自 [el-button](https://element.eleme.cn/2.15/#/zh-CN/component/button) ，可按照原方法使用

<zylSyncButton-attr></zylSyncButton-attr>
