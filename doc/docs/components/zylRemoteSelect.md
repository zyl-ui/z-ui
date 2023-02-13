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

该组件新增和替换的属性/事件在以下表格，除远程搜索必要的参数`filterable` 、`remote` 、`loading` 、`remote-method` 被占用外，其余参数全部继承自 [el-select](https://element.eleme.cn/2.15/#/zh-CN/component/select) ，可自行查阅按照原方法使用。

### 属性

<zylRemoteSelect-attr></zylRemoteSelect-attr>

### 方法

<zylRemoteSelect-func></zylRemoteSelect-func>
