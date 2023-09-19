---
title: zylFileViewer - 文件浏览
sidebarDepth: 2
---

# zylFileViewer - 文件浏览

### 用途

可用于需要纯前端在线浏览文件的场景（支持格式：pptx,docx,xlsx,pdf,mp4,纯文本和图片）。

### 注意事项

**示例代码中文件查看器的地址 `viewerUrl` 属性值为演示地址，切勿直接用于生产。**

本组件基于自主研发的关联组件生态 [@zuiyouliao/vue-file-viewer](https://home.me7.cn/file-viewer-doc/index.html#/start) 开发，若本组件库提供的该组件不满足您的需求，您也可以查阅上方提供的文档链接进行独立安装部署和使用。

**为节省组件库体积，本组件库不会包含查看器相关内核代码，您需要配合以下安装步骤进行私有化部署。**

**安装步骤：**

- 1、您需要自行前往文件查看器源码处下载编译构建后的产物 [file-viewer](https://github.com/zyl-ui/vue-file-viewer/tree/master/public/file-viewer) 。

- 2、将下载后的 `file-viewer` 文件夹整个放在项目公共文件夹中作为外部公共资源使用。 （以 `vue-cli` 为例，放置在项目 `public` 文件夹下；其他框架自行选择合适的公共路径放置）

- 3、使用部署后的地址填入 `viewerUrl` 属性作为文件查看器的地址（可以是相对路径，需要确认打包前后路径是否一致）

### 基础用法

<zyl-demo-block>
::: slot source
<zylFileViewer-demo></zylFileViewer-demo>
:::
::: slot sourceCode
<<< @/doc/.vuepress/components/zylFileViewer/demo.vue
:::
</zyl-demo-block>

### 属性

<zylFileViewer-attr></zylFileViewer-attr>

### 事件

<zylFileViewer-event></zylFileViewer-event>
