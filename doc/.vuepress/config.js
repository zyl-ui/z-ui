/*
 * @Author: zhanghan
 * @Date: 2022-11-24 11:07:14
 * @LastEditors: zhanghan 294333196@qq.com
 * @LastEditTime: 2023-09-19 08:26:40
 * @Descripttion:
 */
module.exports = {
  title: '最有料 UI',
  description: '一个基于 Vue 和 elementUI 的 最有料 UI PC端业务组件库',
  base: '/zyl-ui/',
  host: 'localhost',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '便捷前端工具',
        items: [
          {
            text: 'JSON格式化工具',
            link: '/devTool/json-format/index',
            target: '_blank'
          },
          {
            text: 'JSON差异比较工具',
            link: '/devTool/json-diff/index',
            target: '_blank'
          },
          {
            text: '编码解码工具',
            link: '/devTool/en-decode/index',
            target: '_blank'
          },
          {
            text: '时间戳转换工具',
            link: '/devTool/timestamp/index',
            target: '_blank'
          },
          {
            text: '正则校验测试工具',
            link: '/devTool/regexp/index',
            target: '_blank'
          },
          {
            text: '代码美化工具',
            link: '/devTool/code-beautify/index',
            target: '_blank'
          },
          {
            text: '代码压缩工具',
            link: '/devTool/code-compress/index',
            target: '_blank'
          },
          {
            text: '随机密码生成工具',
            link: '/devTool/password/index',
            target: '_blank'
          },
          {
            text: 'Excel/CVS转JSON工具',
            link: '/devTool/excel2json/index',
            target: '_blank'
          },
          {
            text: 'Markdown/HTML互转工具',
            link: '/devTool/html2markdown/index',
            target: '_blank'
          },
          {
            text: '图片/Base64互转工具',
            link: '/devTool/image-base64/index',
            target: '_blank'
          },
          {
            text: '二维码编码/转码工具',
            link: '/devTool/qr-code/index',
            target: '_blank'
          },
          {
            text: '颜色RGB/HEX编码互转工具',
            link: '/devTool/trans-color/index',
            target: '_blank'
          },
          {
            text: '进制转换工具',
            link: '/devTool/trans-radix/index',
            target: '_blank'
          },
          {
            text: 'POST/GET模拟请求工具',
            link: '/devTool/postman/index',
            target: '_blank'
          },
          {
            text: 'websocket连接测试工具',
            link: '/devTool/websocket/index',
            target: '_blank'
          },
          {
            text: '贷款利率计算工具',
            link: '/devTool/loan-rate/index',
            target: '_blank'
          },
          {
            text: '本地便签笔记',
            link: '/devTool/sticky-notes/index',
            target: '_blank'
          }
        ]
      },
      { text: 'GitLab', link: 'http://192.168.140.130:8099/zhanghan/zyl-ui' }
    ],
    sidebar: [
      'docs/introduce/',
      {
        title: '入门',
        children: ['docs/install/', 'docs/get-start/'],
        collapsable: false //默认展开
      },
      {
        title: '通用业务组件',
        children: [
          'docs/components/zylTitle.md',
          'docs/components/zylSyncButton.md',
          'docs/components/zylToast.md',
          'docs/components/zylSpread.md',
          'docs/components/zylUploadFile.md',
          'docs/components/zylFileViewer.md',
          'docs/components/zylRemoteSelect.md',
          'docs/components/zylTreeSelect.md',
          'docs/components/zylTagSelect.md'
        ],
        collapsable: false //默认展开
      },
      {
        title: '通用工具函数',
        children: [
          'docs/plugins/zylUseFormValids.md',
          'docs/plugins/zylUseFilters.md',
          'docs/plugins/zylUseTools.md'
        ],
        collapsable: false //默认展开
      }
    ],
    logo: '/favicon.ico',
    lastUpdated: '上次更新' // string | boolean
  }
}
