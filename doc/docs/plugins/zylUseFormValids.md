---
title: zylUseFormValids 全局表单字段校验
sidebarDepth: 2
---

# zylUseFormValids 全局表单字段校验

### 安装

- 全量引入的 zylUI 组件会通过 `Vue.prototype.$zylUseFormValids` 原型链自动注册如下表格列举的表单字段校验函数，**不需要单独注册**；

- [按需引入](../get-start/#按需引用)的方式**需要单独注册**；

```js
//main.js

// 按需引入
import { zylUseFormValids } from '@zuiyouliao/zyl-ui'
Vue.use(zylUseFormValids)
```

### 基础用法

`this.$zylUseFormValids[表单校验方法名](参数)`

<zyl-demo-block>
::: slot source
<zylUseFormValids-demo></zylUseFormValids-demo>
:::
::: slot sourceCode
<<< @/doc/.vuepress/components/zylUseFormValids/demo.vue
:::
</zyl-demo-block>

### 方法

<zylUseFormValids-func></zylUseFormValids-func>
