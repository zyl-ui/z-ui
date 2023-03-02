---
title: zylRemoteSelect - 远程搜索分页选择器
sidebarDepth: 2
---

# zylRemoteSelect - 远程搜索分页选择器组件

### 用途

可用于优化 el-select 组件远程搜索无法分页加载的缺陷，降低服务器查询压力。

### 基础用法

<zyl-demo-block>
::: slot source
<zylRemoteSelect-demo></zylRemoteSelect-demo>
:::
::: slot sourceCode
<<< @/doc/.vuepress/components/zylRemoteSelect/demo.vue
:::
</zyl-demo-block>

该组件新增和替换的属性/事件/方法在以下表格，除远程搜索必要的参数`filterable` 、`remote` 、`loading` 、`remote-method` 被占用外，其余参数全部继承自 [el-select](https://element.eleme.cn/2.15/#/zh-CN/component/select) ，可自行查阅按照原方法使用。

### 属性

<zylRemoteSelect-attr></zylRemoteSelect-attr>

### 事件

<zylRemoteSelect-event></zylRemoteSelect-event>

### 方法

请在该组件绑定 ref 后通过 `this.$refs.组件绑定ref的名称.$refs.remoteSelect.方法名()` 进行 `el-select` 方法的使用。

<zylRemoteSelect-func></zylRemoteSelect-func>
