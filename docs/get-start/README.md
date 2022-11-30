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
Vue.use(ElementUI)

// 引入zylUI组件
import zylUI from '@zuiyouliao/zyl-ui'
import '@zuiyouliao/zyl-ui/lib/index/index.css'

// 注册组件库
Vue.use(zylUI)

new Vue({
  el: '#app',
  render: (h) => h(App),
})
```

以上代码便完成了 zylUI 的全量引入。需要注意的是，样式文件需要单独引入。

## 按需引用

借助 [babel-plugin-import](https://github.com/umijs/babel-plugin-import)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先需要安装 `babel-plugin-import`：

```js
npm install babel-plugin-import -D
```

然后，在 `.babelrc` 或 `babel.config.js` 增加代码：

```js
// .babelrc 或 babel.config.js

{
  "plugins": [
    [
      'import',
      {
        libraryName: '@zuiyouliao/zyl-ui',
        style: (name) => {
          // 没有样式的组件可以写在unUseStyle，若按需引入有报错，这里可能需要根据你所引入的组件进行单独配置
          const unUseStyle = ['zylSyncButton']
          if (unUseStyle.includes(name)) {
            return false
          }
          return `${name}/index.css`
        },
        camel2DashComponentName: false, // 是否需要驼峰转短线
        camel2UnderlineComponentName: false, // 是否需要驼峰转下划线
      },
    ],
  ]
}
```

如：您只希望单独引入 `zylSyncButton` 和 `zylSpread`，那么需要在 `main.js` 中写入以下内容：

```js
// main.js

import Vue from 'vue'
import App from './App.vue'

// 按需引入(需要借助babel-plugin-import插件)
// 因为包入口文件为了兼容浏览器和node环境使用的是.umd格式规范,非es规范，是静态的不能像es那样可以解构导出
// ElementUI默认也是导出umd，也使用类似的插件方法进行转译导出，具体可以查看官方文档
import { zylSyncButton, zylSpread } from '@zuiyouliao/zyl-ui'
Vue.use(zylSyncButton, zylSpread)

// 以上写法等同于以下写法，但以下写法不需要借助插件，你也可以这么用
// 按需引入(不需要借助babel-plugin-import插件)
import zylSyncButton from '@zuiyouliao/zyl-ui/lib/zylSyncButton/index.js' //这个组件没有css
import zylSpread from '@zuiyouliao/zyl-ui/lib/zylSpread/index.js'
import '@zuiyouliao/zyl-ui/lib/zylSpread/index.css'
Vue.use(zylSyncButton, zylSpread)

new Vue({
  el: '#app',
  render: (h) => h(App),
})
```

至此，一个基于 Vue 和 zylUI 的开发环境已经搭建完毕，现在就可以编写代码了。 :tada: :tada:

各个通用业务组件和工具函数的使用方法请参阅它们各自的说明文档。
