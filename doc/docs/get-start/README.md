---
title: 快速上手
---

# 快速上手

## 全局引用

在项目的入口文件（一般是 `main.js`）中配置：

```js
// main.js

import Vue from 'vue'
import App from './App.vue'

// 引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 注册ElementUI组件库
Vue.use(ElementUI)

// 引入zylUI组件
import zylUI from '@zuiyouliao/zyl-ui'
// 注册zylUI组件库
Vue.use(zylUI)

new Vue({
  el: '#app',
  render: (h) => h(App),
})
```

以上代码便完成了 zylUI 组件库的全量引入。需要注意的是，样式文件需要单独引入。

## 按需引用

如：您只希望单独引入 `zylSyncButton` 和 `zylSpread`，那么需要在 `main.js` 中写入以下内容：

```js
// main.js

import Vue from 'vue'
import App from './App.vue'

// 按需引入
import { zylSyncButton, zylSpread } from '@zuiyouliao/zyl-ui'
Vue.use(zylSyncButton, zylSpread)

new Vue({
  el: '#app',
  render: (h) => h(App),
})
```

至此，一个基于 Vue 和 zylUI 的开发环境已经搭建完毕，现在就可以编写代码了。 :tada: :tada:

各个通用业务组件和工具函数的使用方法请参阅它们各自的说明文档。
