---
title: zylUploadFile - 通用上传组件
sidebarDepth: 2
---

# zylUploadFile - 通用上传组件

### 用途

- 可用于简化 `el-upload` 组件常用上传文件业务的繁琐代码书写，并显示上传信息友好提示；

- 支持 `v-model` 双向绑定多种数据格式的文件列表；

- 支持文件转 `base64` 输出 `base64` 编码。

### 基础用法

组件上传文件分为两种方式：

`直传方式（直接调用接口上传binary）` 和 `非直传方式（本地转base64再进行提交保存或相关自定义操作）`

#### 直传方式

- 默认采用直传方式（必须指定`action`属性）

- 该方式`v-model`绑定的数据支持两种内置数据格式，您也可以自定义数据格式和指定上传后文件信息的取值字段。

<zyl-demo-block>
::: slot source
<zylUploadFile-demo></zylUploadFile-demo>
:::
::: slot sourceCode
<<< @/doc/.vuepress/components/zylUploadFile/demo.vue
:::
</zyl-demo-block>

#### 非直传方式

- 此种方式会在客户端本地将文件转换成 base64 （无需指定`action`属性）

- 此种方式多数用于不借助对象云存储服务商的情况下进行图片轻量数据库存储（小图等体积较小的文件非常适合）

- 可通过属性`changeBase64`转换成非直传方式；

- 该方式`v-model`绑定的数据同样支持以上直传方式列举的数据格式；

- 该方式不会触发接口提交，必要时可通过`addOneFile` 和 `removeOneFile` 事件进行 base64 文件数据的监听操作；

- 以下示例 1 可通过控制台查看打印结果。

<zyl-demo-block>
::: slot source
<zylUploadFile-demo2></zylUploadFile-demo2>
:::
::: slot sourceCode
<<< @/doc/.vuepress/components/zylUploadFile/demo2.vue
:::
</zyl-demo-block>

### 提示信息补充

<zyl-demo-block>
::: slot source
<zylUploadFile-demo3></zylUploadFile-demo3>
:::
::: slot sourceCode
<<< @/doc/.vuepress/components/zylUploadFile/demo3.vue
:::
</zyl-demo-block>

### 使用插槽进行拓展

<zyl-demo-block>
::: slot source
<zylUploadFile-demo4></zylUploadFile-demo4>
:::
::: slot sourceCode
<<< @/doc/.vuepress/components/zylUploadFile/demo4.vue
:::
</zyl-demo-block>

该组件新增和替换的属性/事件/插槽在以下表格，其余参数全部继承自 [el-upload](https://element.eleme.cn/2.15/#/zh-CN/component/upload) ，可自行查阅按照原方法使用。

### 属性

<zylUploadFile-attr></zylUploadFile-attr>

### 插槽

<zylUploadFile-slot></zylUploadFile-slot>

### 事件

<zylUploadFile-func></zylUploadFile-func>
