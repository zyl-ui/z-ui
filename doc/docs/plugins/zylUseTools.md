---
title: zylUseTools 全局通用工具类
sidebarDepth: 2
---

# zylUseTools 全局过滤函数

### 安装

- 全量引入的 zylUI 组件会通过 `Vue.prototype.$zylUseTools` 原型链自动注册如下表格列举的工具函数，**不需要单独注册**；

- [按需引入](../get-start/#按需引用)的方式**需要单独注册**；

```js
//main.js

// 按需引入
import { zylUseTools } from '@zuiyouliao/zyl-ui'
Vue.use(zylUseTools)
```

### 基础用法

`this.$zylUseTools[工具类方法名](参数)`

### 方法

<zylUseTools-func></zylUseTools-func>
