---
title: zylTreeSelect - 树状选择器
sidebarDepth: 2
---

# zylTreeSelect - 树状选择器组件

### 用途

可用于拓展 el-select 没有树状结构选择的场景。

### 基础用法

<zyl-demo-block>
::: slot source
<ClientOnly>
<zylTreeSelect-demo></zylTreeSelect-demo>
</ClientOnly>
:::
::: slot sourceCode
<<< @/doc/.vuepress/components/zylTreeSelect/demo.vue
:::
</zyl-demo-block>

该组件新增和替换的属性/事件/方法在以下表格，除树状组件必要的参数`data` 、`props` 、`node-key` 、`show-checkbox`、`default-checked-keys` 被占用外，其余参数全部继承自 [el-tree](https://element.eleme.cn/2.15/#/zh-CN/component/tree) 和 [el-select](https://element.eleme.cn/2.15/#/zh-CN/component/select) ，可自行查阅按照原方法使用。

### 属性

<zylTreeSelect-attr></zylTreeSelect-attr>

### 事件

<zylTreeSelect-event></zylTreeSelect-event>

### 方法

请在该组件绑定 ref 后通过 `this.$refs.组件绑定ref的名称.$refs.treeSelect.方法名()` 进行 `el-select` 方法的使用 或 `this.$refs.组件绑定ref的名称.$refs.nodeTree.方法名()` 进行 `el-tree` 方法的使用。

<zylTreeSelect-func></zylTreeSelect-func>
