---
title: zylUseFilters 全局过滤函数
sidebarDepth: 2
---

# zylUseFilters 全局过滤函数

### 安装

- 全量引入的 zylUI 组件会通过`Vue.filter`自动注册如下表格列举的过滤函数，**不需要单独注册**；

- [按需引入](../get-start/#按需引用)的方式**需要单独注册**；

```js
//main.js

// 按需引入
import { zylUseFilters } from '@zuiyouliao/zyl-ui'
Vue.use(zylUseFilters)
```

### 基础用法

<zyl-demo-block>
::: slot source
<zylUseFilters-demo></zylUseFilters-demo>
:::
::: slot sourceCode
<<< @/doc/.vuepress/components/zylUseFilters/demo.vue
:::
</zyl-demo-block>

**在 JS 脚本内： `this.$options.filters[过滤函数的方法名](被过滤的值, 参数)`**

- 不需要额外传参

```js
// 用例

// 联系电话脱敏
let serinsTel = '18888888888'
serinsTel = this.$options.filters.zylTel(serinsTel)
console.log(serinsTel) // 188****8888
```

- 需要额外传参

```js
// 用例

// 时间戳转换日期格式
let oprtTime = 1620955985458
oprtTime = this.$options.filters.zylDataFormat(oprtTime, '{y}-{m}-{d} {h}:{i}')
console.log(oprtTime) // 2021-05-14 09:33
```

### 补充：

若想所有表格项都能有空值缺省符号 `'-'`，且不想影响原有的 slot 结构过滤逻辑，我们可以巧妙利用 `el-table-column` 组件的属性 `formatter` 绑定 `this.$options.filters.zylEmpty` 方法。在`formatter` 执行的函数有结果而不是原数据返回时，显示权重大于 slot 内部的显示 `zylEmpty` 正是利用了这一点。

然后在每个表格项如下使用：

```html
<!--用例-->
<el-table-column
  prop="noValue"
  label="空值过滤测试"
  :formatter="
      (row, column, cellValue) => $options.filters.zylEmpty(cellValue)
    "
>
  <template slot-scope="{ row }"> {{ row.noValue | zylMoney }} </template>
</el-table-column>
```

### 用途

可以用于过滤字段和枚举一些数据字典的场景

### 方法

<zylUseFilters-func></zylUseFilters-func>
